import * as THREE from 'three';
import Tower from "./Tower.js";

const tmpQuat = new THREE.Quaternion();
const tmpVec3A = new THREE.Vector3();
const tmpVec3B = new THREE.Vector3();
const stdUp = new THREE.Vector3(0, 1, 0);

export default class TargetTower extends Tower {
    constructor(cavecell) {
        super(cavecell);
    }

    pointsInbound(entrance) {
        const spiral = [];

        // underground point to "store" particles invisibly
        const finalPoint = this.normal.clone().multiplyScalar(-3).add(this.position);

        spiral.unshift(finalPoint);


        tmpQuat.setFromUnitVectors(
            stdUp,
            this.normal
        );

        const offset = Math.PI * 2 * Math.random();
        
        const step = (i, theta) => {
            const x = Math.sin(theta) * i;
            const y = i - 1/i;
            const z = Math.cos(theta) * i;

            const pt = new THREE.Vector3(x, y, z)
                .applyQuaternion(tmpQuat)
                //.add(tmpVec3A.random().multiplyScalar(i / 5))
                .add(this.position);

            spiral.unshift(pt);
        }

        let i = 1
        let theta = offset;//Math.PI / 4;

        for (; i <= 16; i++) {
            step(i, theta);
            theta += Math.PI / 4;
        }

        tmpVec3A.copy(spiral[0]).sub(spiral[1]);
        tmpVec3B.copy(spiral[0]).sub(entrance);

        let angleTo = tmpVec3A.angleTo(tmpVec3B);

        while (
            angleTo < 4 * Math.PI / 5
            && angleTo > -4 * Math.PI / 5
        ) {
            step(i, theta);
            i += 0.25
            theta += Math.PI / 16;
            tmpVec3A.copy(spiral[0]).sub(spiral[1]);
            tmpVec3B.copy(spiral[0]).sub(entrance);
            angleTo = tmpVec3A.angleTo(tmpVec3B);
        }

        return spiral;
    }
}