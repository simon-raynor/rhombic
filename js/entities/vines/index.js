import * as THREE from 'three';


const tmpObj3d = new THREE.Object3D();
const tmpQuat = new THREE.Quaternion();
const STD_UP = new THREE.Vector3(0, 1, 0);


const SEGMENT_COUNT = 1;

const SQRT3 = Math.sqrt(3);
const H = Math.sqrt(3) / 2;

/* const geom = [
    0, 0, -SQRT3/3,
    1/2, 0, SQRT3/6,
    -1/2, 0, SQRT3/6,
    0, 16, 0,
] */
const geom = new THREE.ConeGeometry(1, 16, 3);


const SEGMENT_SIZE = 4;


export default class Vine {
    #uniforms = null;

    get position() {
        return this.gridcell.centre;
    }
    get normal() {
        return this.gridcell.normal;
    }

    constructor(gridcell) {
        this.gridcell = gridcell;
        this.findTarget();

        this.getGeometry();

        this.#uniforms = {
            t: { value: 0, type: 'f' },
        }

        /* const material = new THREE.MeshPhongMaterial({
            color: 0x22dd00
        });

        this.mesh = new THREE.Mesh(
            geom,
            material
        ); */
    }

    findTarget() {
        const available = this.gridcell.neighbours.flatMap(
            othercell => othercell.neighbours.map(
                otherothercell => otherothercell !== this.gridcell
                            && !this.gridcell.neighbours.includes(otherothercell)
                                ? otherothercell
                                : null
            ).filter(v => !!v)
        );

        this.target = available[
            Math.floor(Math.random() * available.length)
        ];
    }

    getGeometry() {
        const { centre, normal } = this.target;

        this.curve = new THREE.CubicBezierCurve3(
            this.position,
            this.normal.clone().multiplyScalar(20).add(this.position),
            new THREE.Vector3().copy(normal).multiplyScalar(20).add(centre),
            new THREE.Vector3().copy(centre)
        );

        const length = this.curve.getLength();
        const segmentCount = Math.floor(length / SEGMENT_SIZE);

        const geom = new THREE.TubeGeometry(this.curve, segmentCount, 0.5, 3);

        this.mesh = new THREE.Mesh(geom, new THREE.MeshPhongMaterial({ color: 0x22ee00, flatShading: true }));
    }

    tick(dt) {
        this.#uniforms.t.value += dt;
    }
}