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

        
        const { centre, normal } = this.target;

        const curve = new THREE.CubicBezierCurve3(
            this.position,
            this.normal.clone().multiplyScalar(12).add(this.position),
            new THREE.Vector3().copy(normal).multiplyScalar(12).add(centre),
            new THREE.Vector3().copy(centre)
        );

        const points = curve.getPoints(12);

        const geom = new THREE.BufferGeometry().setFromPoints(points);

        this.mesh = new THREE.Line(geom, new THREE.LineBasicMaterial( { color: 0xff0000 } ));

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

    tick(dt) {
        this.#uniforms.t.value += dt;
    }
}