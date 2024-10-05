import * as THREE from 'three';



const TRI_PER_CORNER = 5;
const PER_CORNER = 3 * TRI_PER_CORNER;
const PER_LAYER = PER_CORNER * 3;

const LAYER_COUNT = 5;

const CORNER_MARK_LENGTH = 1 / 3;
const CORNER_MARK_WIDTH = 1 - 0.08;
const CORNER_MARK_BEVEL = 0.015;



const vertexShader = `
uniform float t;
uniform vec3 cellnormal;

attribute vec3 barycoord;

varying vec3 vBarycoord;
varying vec3 vColor;
varying float vInstanceNo;

void main() {
    float instanceNo = instanceMatrix[3][1];

    float tMult = t / 2.;
    float theta = (tMult + instanceNo) * radians(360.);
    float pulseX = .95 - (cos(theta) / 20.);
    float pulseY = (1. + sin(theta));

    vec3 newPosn = position * pulseX;

    newPosn += cellnormal * pulseY;

    /* newPosn += cellnormal * pulseY
            * (smoothstep(-1.,0., tMult - instanceNo) - 1.) * 2.; */


    vBarycoord = barycoord;
    vColor = instanceColor;
    vInstanceNo = instanceNo;

    gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosn, 1.0);
}
`;

const fragmentShader = `

varying vec3 vBarycoord;
varying vec3 vColor;
varying float vInstanceNo;

void main() {
    float edgeProximity = abs(vBarycoord.y - vBarycoord.z) + vBarycoord.x;
    float colored = step(0.8, edgeProximity);

    gl_FragColor = vec4(vColor, 1.);
}
`;


const tmpObj3d = new THREE.Object3D();

const tmpQuat = new THREE.Quaternion();
const STD_UP = new THREE.Vector3(0, 1, 0);

const tmpVec3 = new THREE.Vector3();
const tmpCellA1 = new THREE.Vector3();
const tmpCellA2 = new THREE.Vector3();
const tmpCellB1 = new THREE.Vector3();
const tmpCellB2 = new THREE.Vector3();
const tmpCellC1 = new THREE.Vector3();
const tmpCellC2 = new THREE.Vector3();


export default class Hiliter {
    #uniforms
    #geometry
    #material
    #mesh

    #_target

    #a = new THREE.Vector3()
    #b = new THREE.Vector3()
    #c = new THREE.Vector3()

    set #target(targetcell) {
        this.#a.copy(targetcell.a).sub(targetcell.centre);
        this.#b.copy(targetcell.b).sub(targetcell.centre);
        this.#c.copy(targetcell.c).sub(targetcell.centre);

        this.#_target = targetcell;
    }

    get #target() {
        return this.#_target;
    }

    constructor() {
        this.#uniforms = {
            t: { value: 0, type: 'f' },
            cellnormal: { value: new THREE.Vector3() },
        };
    }
    init(scene) {
        this.#geometry = new THREE.BufferGeometry();

        const position = [];
        const barycoord = [];

        for (let i = 0; i < PER_LAYER; i++) {

            switch(i % 3) {
                case 0:
                    position.push(0, 0, 0);
                    barycoord.push(1, 0, 0);
                    break;
                case 1:
                    position.push(0, 0, 0);
                    barycoord.push(0, 1, 0);
                    break;
                case 2:
                    position.push(0, 0, 0);
                    barycoord.push(0, 0, 1);
                    break;
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
            'barycoord',
            new THREE.BufferAttribute(
                new Float32Array(barycoord),
                3
            )
        );

        this.#material = new THREE.ShaderMaterial({
            uniforms: this.#uniforms,
            vertexShader,
            fragmentShader,
            side: THREE.DoubleSide,
            depthWrite: true,
            transparent: true,
        });


        this.#mesh = new THREE.InstancedMesh(
            this.#geometry,
            this.#material,
            LAYER_COUNT
        );

        //this.#mesh.instanceMatrix.setUsage( THREE.DynamicDrawUsage );

        //const cols = [0xff4444, 0x44ff44, 0x4444ff, 0xbbbbbb, 0xbbbbbb];
        const cols = [0x888888, 0xbbbbbb];

        for (let i = 0; i < LAYER_COUNT; i++) {
            tmpObj3d.position.set(0, i / LAYER_COUNT, 0);
            tmpObj3d.updateMatrix();
            
            this.#mesh.setMatrixAt( i, tmpObj3d.matrix );
            this.#mesh.setColorAt( i, new THREE.Color(cols[i % cols.length]) );
        }


        scene.add(this.#mesh);
    }

    retarget(targetcell) {
        this.#target = targetcell;

        this.#mesh.position.copy(this.#target.centre);

        this.#uniforms.cellnormal.value.copy(this.#target.normal);
        this.#uniforms.cellnormal.needsUpdate = true;
        
        
        this.#setCorner(0, this.#a, this.#b, this.#c);
        this.#setCorner(1, this.#b, this.#c, this.#a);
        this.#setCorner(2, this.#c, this.#a, this.#b);

        this.#geometry.attributes.position.needsUpdate = true;

        // reset t
        this.#uniforms.t.value = 0;
    }

    #setCorner(n, da, db, dc) {
        const idx = n * PER_CORNER * 3;

        const newPosns = [];

        const b1 = new THREE.Vector3().copy(db)
                        .sub(da).multiplyScalar(CORNER_MARK_LENGTH).add(da);
        const c1 = new THREE.Vector3().copy(dc)
                        .sub(da).multiplyScalar(CORNER_MARK_LENGTH).add(da);

        const a1b = new THREE.Vector3().copy(db)
                        .sub(da).multiplyScalar(CORNER_MARK_BEVEL).add(da);
        const a1c = new THREE.Vector3().copy(dc)
                        .sub(da).multiplyScalar(CORNER_MARK_BEVEL).add(da);


        const a2 = new THREE.Vector3().copy(da)
                        .multiplyScalar(CORNER_MARK_WIDTH);
        const b2 = new THREE.Vector3().copy(db)
                        .sub(da).multiplyScalar(CORNER_MARK_LENGTH - (CORNER_MARK_BEVEL*2)).add(da)
                        .multiplyScalar(CORNER_MARK_WIDTH);
        const c2 = new THREE.Vector3().copy(dc)
                        .sub(da).multiplyScalar(CORNER_MARK_LENGTH - (CORNER_MARK_BEVEL*2)).add(da)
                        .multiplyScalar(CORNER_MARK_WIDTH);
        
        newPosns.push(
            ...a1b.toArray(),
            ...a2.toArray(),
            ...b1.toArray(),
            ...b1.toArray(),
            ...a2.toArray(),
            ...b2.toArray(),

            ...a2.toArray(),
            ...a1c.toArray(),
            ...c1.toArray(),
            ...a2.toArray(),
            ...c1.toArray(),
            ...c2.toArray(),

            ...a1b.toArray(),
            ...a1c.toArray(),
            ...a2.toArray(),
        );

        this.#geometry.attributes.position.set( newPosns, idx );
    }


    tick(dt) {
        this.#uniforms.t.value += dt;
    }
}