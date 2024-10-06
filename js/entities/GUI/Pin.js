import * as THREE from 'three';
import { createTrigonal } from '../../geometries/trigonaltrapezahedron';


const ROWS = 11;

const vertexShader = `
uniform float t;
uniform vec3 centre;
uniform vec3 cellnormal;
uniform vec3 cornerA;
uniform vec3 cornerB;
uniform vec3 cornerC;
uniform float height;

attribute float type;

varying vec2 vUv;
varying vec4 vColor;
varying float vType;

//float height = 15.;
//float width = 0.8;

void main() {
    vec3 newPosn;

    float startupT = smoothstep(0., 1., t*t);

    vec3 tnormal = cellnormal * startupT;

    if (type == 1.) {
        newPosn = position;

        vec3 rottarget = cellnormal;

        // rotate to align w/ cell
        float xy = length( rottarget.xy );
        float cosr = rottarget.x / xy;
        float sinr = -rottarget.y / xy;

        mat3 rot = mat3(
            cosr, sinr, 0.,
            -sinr, cosr, 0.,
            0., 0., 1.
        );
        
        // spin around
        float thetas = t;
        float coss = cos(thetas);
        float sins = sin(thetas);

        mat3 spiny = mat3(
            coss, 0., sins,
            0., 1., 0.,
            -sins, 0., coss
        );
        mat3 spinx = mat3(
            1., 0., 0.,
            0., coss, -sins,
            0., sins, coss
        );

        newPosn *= spinx * rot;


        newPosn += tnormal * height;

        newPosn += centre;

        vUv = uv;
        vColor = vec4(vec3(1., 1., 0.8) * startupT, 1.);
    } else {
        float yInv = 1. - position.y;
        float r = yInv*yInv/*  * width */;

        vec3 corner;
        vec3 rgb;

        if (position.x == 0.) {
            corner = cornerA;
            rgb = vec3(1., 0., 0.);
        } else if (position.x == 1.) {
            corner = cornerB;
            rgb = vec3(0., 1., 0.);
        } else {
            corner = cornerC;
            rgb = vec3(0., 0., 1.);
        }

        vec3 diff = corner - centre;

        newPosn = diff * r;

        newPosn += tnormal * position.y * height;

        newPosn += centre;

        vUv = vec2((r * uv.x) + ((1. - r) / 2.), uv.y);

        float alpha = smoothstep(0., 1., startupT)
                    * smoothstep(.25, .75, 1. - r);
        vColor = vec4(rgb, alpha);
    }

    vType = type;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosn, 1.0);
}
`;

const fragmentShader = `
uniform float t;

varying vec2 vUv;
varying vec4 vColor;
varying float vType;

void main() {
    float alpha = vColor.w;

    float sx = 1. + sin((vUv.x * 101.)/*  + (t * 13.) */) / 2.;
    float cy = 1. + sin((vUv.y * 97.)/*  + (t * 11.) */) / 2.;

    /* alpha *= vType == 0.
            ? sx * cy
            : 1.; */

    gl_FragColor = vec4(vColor.xyz, alpha);
}
`;


const trigon = createTrigonal();
trigon.center();


export default class Pin {
    #uniforms
    #geometry
    #material

    constructor(scene) {
        this.#uniforms = {
            t: { value: 0, type: 'f' },
            dt: { value: 0, type: 'f' },
            height: { value: 15, type: 'f' },
            centre: { value: new THREE.Vector3() },
            cellnormal: { value: new THREE.Vector3() },
            cornerA: { value: new THREE.Vector3() },
            cornerB: { value: new THREE.Vector3() },
            cornerC: { value: new THREE.Vector3() },
        };
    }

    init(scene) {
        this.#initMesh(scene);
    }

    #initMesh(scene) {
        this.#geometry = new THREE.BufferGeometry();

        const position = [];
        const uv = [];
        const type = [];

        // rows
        for (let r = 1; r <= ROWS; r++) {
            const y1 = (r-1)/ROWS,
                y2 = r/ROWS;

            const [v, u, t] = getRow(y1, y2);

            position.push(...v);
            uv.push(...u);
            type.push(...t);
        }

        // tip
        position.push(...trigon.attributes.position.array);
        uv.push(...trigon.attributes.uv.array);
        type.push(...trigon.index.array.map(i => 1));

        this.#geometry.setAttribute(
            'position',
            new THREE.BufferAttribute(
                new Float32Array(position),
                3
            )
        );
        this.#geometry.setAttribute(
            'uv',
            new THREE.BufferAttribute(
                new Float32Array(uv),
                2
            )
        );
        this.#geometry.setAttribute(
            'type',
            new THREE.BufferAttribute(
                new Float32Array(type),
                1
            )
        );

        this.#material = new THREE.ShaderMaterial({
            uniforms: this.#uniforms,
            vertexShader,
            fragmentShader,
            side: THREE.DoubleSide,
            transparent: true
        });


        this.mesh = new THREE.Mesh(
            this.#geometry,
            this.#material
        );
        this.mesh.frustumCulled = false;
        
        scene.add(this.mesh);

        console.log(this);
    }

    tick(dt) {
        this.#uniforms.t.value += dt;
        this.#uniforms.dt.value = dt;
    }

    target(targetcell) {
        this.#uniforms.centre.value.copy(targetcell.centre);
        this.#uniforms.centre.needsUpdate = true;

        this.#uniforms.cellnormal.value.copy(targetcell.normal);
        this.#uniforms.cellnormal.needsUpdate = true;

        this.#uniforms.cornerA.value.copy(targetcell.a);
        this.#uniforms.cornerA.needsUpdate = true;

        this.#uniforms.cornerB.value.copy(targetcell.b);
        this.#uniforms.cornerB.needsUpdate = true;

        this.#uniforms.cornerC.value.copy(targetcell.c);
        this.#uniforms.cornerC.needsUpdate = true;

        this.#uniforms.t.value = 0;
    }
}

function getRow(y1, y2) {
    const vertices = [
        0, y1, 0,  0, y2, 0,  1, y1, 0,
        1, y1, 0,  0, y2, 0,  1, y2, 0,
        
        1, y1, 0,  1, y2, 0,  2, y1, 0,
        2, y1, 0,  1, y2, 0,  2, y2, 0,

        2, y1, 0,  2, y2, 0,  0, y1, 0,
        0, y1, 0,  2, y2, 0,  0, y2, 0,
    ];
    const uvs = [
        0, y1,  0, y2,  1, y1,
        1, y1,  0, y2,  1, y2,

        0, y1,  0, y2,  1, y1,
        1, y1,  0, y2,  1, y2,

        0, y1,  0, y2,  1, y1,
        1, y1,  0, y2,  1, y2
    ];
    const types = [
        0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0
    ];

    return [vertices, uvs, types];
}