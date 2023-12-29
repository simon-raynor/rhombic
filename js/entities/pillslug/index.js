import * as THREE from 'three';
import Creature from '../creature/index.js';

const POINTS = [
    new THREE.Vector2(0, -11),
    new THREE.Vector2(3, -9.5),
    new THREE.Vector2(6, -6),

    new THREE.Vector2(5, -6),
    new THREE.Vector2(7, -1),

    new THREE.Vector2(6, -1),
    new THREE.Vector2(6.5, 4),

    new THREE.Vector2(5.5, 4),
    new THREE.Vector2(4.25, 8),

    new THREE.Vector2(3.5, 8),
    new THREE.Vector2(2.5, 10),
    new THREE.Vector2(0, 11)
]

const geom = new THREE.LatheGeometry(POINTS, 4 , 0, Math.PI);

geom.rotateZ(Math.PI / 2);
geom.rotateY(-Math.PI / 2);
geom.scale(0.4, 0.4, 0.4);


export default class Pillslug extends Creature {
    speed = 5;

    constructor() {
        super();
    }

    init(cave, position, normal) {
        this.#initMesh();
        super.init(cave, position, normal );
    }

    #initMesh() {
        const material = new THREE.MeshLambertMaterial({
            color: 0xccdd77,
            flatShading: true,
            emissive: 0x112200
        });

        this.mesh = new THREE.Mesh(
            geom,
            material
        );
    }
}