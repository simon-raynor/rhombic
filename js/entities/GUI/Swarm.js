import * as THREE from 'three';
import { GPUComputationRenderer } from 'three/addons/misc/GPUComputationRenderer.js';
import { createTrigonal } from '../../geometries/trigonaltrapezahedron.js';

const GPU_SIZE = 8;
const SWARM_SIZE = GPU_SIZE*GPU_SIZE;


const posnShader = `
uniform vec3 target;
uniform float dt;

void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    
    vec4 posn = texture2D( texturePosn, uv );
    vec4 velo = texture2D( textureVelo, uv );

    gl_FragColor = posn + (velo * dt * 20.);
}
`;

const veloShader = `
uniform vec3 target;

void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    
    vec4 posn = texture2D( texturePosn, uv );
    vec4 velo = texture2D( textureVelo, uv );

    if (length(velo) > 1.) {
        velo *= 0.99;
    }

    vec3 diff = target - posn.xyz;
    float dist = length(diff);

    if (dist > 1.) {
        velo += vec4( normalize(diff), 0. ) / dist;
    }

    gl_FragColor = velo;
}
`;


const vertexShader = `
uniform sampler2D texturePosn;
uniform sampler2D textureVelo;

attribute vec2 gpuPosn;

void main() {
    vec3 newPosn = position;

    vec3 posn = texture2D( texturePosn, gpuPosn ).xyz;
    vec3 velo = texture2D( textureVelo, gpuPosn ).xyz;

    float xy = length( velo.xy );
    float cosr = velo.x / xy;
    float sinr = -velo.y / xy;

    if (velo.x < 0.) {
        cosr *= -1.;
        sinr *= -1.;
    }

    mat3 rot = mat3(
        cosr, -sinr, 0.,
        sinr, cosr, 0.,
        0., 0., 1.
    );

    newPosn = rot * newPosn;

    newPosn = newPosn + posn;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosn, 1.0);
}
`;

const fragmentShader = `
void main() {
    gl_FragColor = vec4(1., 1., 0.8, .25);
}
`;


const tet = new THREE.TetrahedronGeometry();
const trigon = createTrigonal();
const vertices = trigon.attributes.position.array;

console.log(vertices);


export default class Swarm {
    #uniforms
    #computer
    #posnVar
    #veloVar

    #meshUniforms
    #geometry
    #material

    constructor() {
        this.#uniforms = {
            t: { value: 0, type: 'f' },
            dt: { value: 0, type: 'f' },
            target: { value: new THREE.Vector3() }
        };

        this.#meshUniforms = {
            texturePosn: { value: null },
            textureVelo: { value: null },
        }
    }

    init(scene, renderer) {
        this.#initComputeLayer(renderer);

        this.#initMesh(scene);
    }

    #initMesh(scene) {
        this.#geometry = new THREE.BufferGeometry();

        const position = [];
        const gpuPosn = [];

        for (let y = 0; y < GPU_SIZE; y++) {
            for (let x = 0; x < GPU_SIZE; x++) {
                const scale = 0.25 + (0.25 * Math.random());
                position.push(...vertices.map(v => v * scale));

                for (let i = 0; i < vertices.length / 3; i++) {
                    gpuPosn.push(x / GPU_SIZE, y / GPU_SIZE);
                }
            }
        }

        this.#geometry.setAttribute(
            'position',
            new THREE.BufferAttribute(
                new Float32Array(position),
                3
            )
        );
        this.#geometry.setAttribute(
            'gpuPosn',
            new THREE.BufferAttribute(
                new Float32Array(gpuPosn),
                2
            )
        );

        this.#material = new THREE.ShaderMaterial({
            uniforms: {
                ...this.#uniforms,
                ...this.#meshUniforms
            },
            vertexShader,
            fragmentShader,
            transparent: true,
            side: THREE.DoubleSide
        });


        this.mesh = new THREE.Mesh(
            this.#geometry,
            this.#material
        );
        this.mesh.frustumCulled = false;
        
        scene.add(this.mesh);

        console.log(this);
    }

    #initComputeLayer(renderer) {
        this.#computer = new GPUComputationRenderer(
            GPU_SIZE,
            GPU_SIZE,
            renderer
        );

        const posnTexture = this.#computer.createTexture();
        const veloTexture = this.#computer.createTexture();

        const posnArr = posnTexture.image.data;
        const veloArr = veloTexture.image.data;
        for (let i = 0, l = posnArr.length; i < l; i += 4) {
            posnArr[i + 0] = 0;
            posnArr[i + 1] = 0;
            posnArr[i + 2] = 0;
            posnArr[i + 3] = 0;

            veloArr[i + 0] = 10 * (0.5 - Math.random());
            veloArr[i + 1] = 10 * (0.5 - Math.random());
            veloArr[i + 2] = 10 * (0.5 - Math.random());
            veloArr[i + 3] = 0;
        }

        this.#posnVar = this.#computer.addVariable( 'texturePosn', posnShader, posnTexture );
        this.#veloVar = this.#computer.addVariable( 'textureVelo', veloShader, veloTexture );

        this.#computer.setVariableDependencies( this.#posnVar, [ this.#posnVar, this.#veloVar ]);
        this.#computer.setVariableDependencies( this.#veloVar, [ this.#posnVar, this.#veloVar ]);

        this.#posnVar.material.uniforms = this.#uniforms;
        this.#veloVar.material.uniforms = this.#uniforms;

        this.#posnVar.wrapS = THREE.RepeatWrapping;
        this.#posnVar.wrapT = THREE.RepeatWrapping;
        this.#veloVar.wrapS = THREE.RepeatWrapping;
        this.#veloVar.wrapT = THREE.RepeatWrapping;

        const error = this.#computer.init();
        if (error !== null) console.error(error);
    }

    tick(dt) {
        if (isNaN(dt) || !this.#computer) return;

        this.#uniforms.t.value += dt;
        this.#uniforms.dt.value = dt;

        this.#computer.compute();

        this.#meshUniforms.texturePosn.value = this.#computer.getCurrentRenderTarget(
            this.#posnVar
        ).texture;

        this.#meshUniforms.textureVelo.value = this.#computer.getCurrentRenderTarget(
            this.#veloVar
        ).texture;
    }

    target(targetcell) {
        this.targeting = targetcell;

        this.#uniforms.target.value.copy(targetcell.centre).add(targetcell.normal);
        this.#uniforms.target.needsUpdate = true;
    }
}