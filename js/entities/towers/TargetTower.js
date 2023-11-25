import * as THREE from 'three';
import Tower from "./Tower.js";

const tmpQuat = new THREE.Quaternion();
const tmpVec3 = new THREE.Vector3();
const stdUp = new THREE.Vector3(0, 1, 0);

export default class TargetTower extends Tower {
    constructor(cavecell) {
        super(cavecell);
    }

    pointsInbound(entrance) {
        const spiral = [];

        tmpQuat.setFromUnitVectors(
            stdUp,
            this.normal
        );console.log(entrance)

        for (let i = 0; i < 20; i++) {
            const theta = i * Math.PI / 4;
            const x = Math.sin(theta) * i;
            const y = i;
            const z = Math.cos(theta) * i;

            const pt = new THREE.Vector3(x, y, z)
                .applyQuaternion(tmpQuat)
                .add(tmpVec3.random().multiplyScalar(i / 5))
                .add(this.position);

            spiral.push(pt);
        }

        return [
            ...spiral.reverse()
        ];
    }
}