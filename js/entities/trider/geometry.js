import * as THREE from 'three';
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';

import { TRIGONAL_ROTATER, createTrigonal } from "../../geometries/trigonaltrapezahedron.js";




const SQRT3 = Math.sqrt(3);


const trigonal = createTrigonal();
trigonal.computeBoundingBox();



const body = trigonal.clone();




const tmpVec3 = new THREE.Vector3();

export const knees = [
    [2, 0, 0],
    [0, 2, 0],
    [0, 0, 2]
].map(
    arr => tmpVec3.fromArray(arr).applyQuaternion(TRIGONAL_ROTATER).clone()
);


const knee1 = knees[0];


const A = new THREE.Vector3(knee1.x, 0, knee1.z);

const theta = Math.acos(A.dot(knee1) / (A.length() * knee1.length()));

const flipAxis = new THREE.Vector3(0, -1, 0);

const arm1 = trigonal.clone();
const arm1rotAxis = new THREE.Vector3(1.73205080757, 0, 1).normalize();
arm1.applyQuaternion(
    (new THREE.Quaternion()).setFromAxisAngle(
        flipAxis,
        Math.PI
    ).multiply(
        (new THREE.Quaternion()).setFromAxisAngle(
            arm1rotAxis,
            Math.PI - (2 * theta)
        )
    )
);

const arm2 = trigonal.clone();
const arm2rotAxis = new THREE.Vector3(0, 0, -1).normalize();
arm2.applyQuaternion(
    (new THREE.Quaternion()).setFromAxisAngle(
        flipAxis,
        Math.PI
    ).multiply(
        (new THREE.Quaternion()).setFromAxisAngle(
            arm2rotAxis,
            Math.PI - (2 * theta)
        )
    )
);

const arm3 = trigonal.clone();
const arm3rotAxis = new THREE.Vector3(-1.73205080757, 0, 1).normalize();
arm3.applyQuaternion(
    (new THREE.Quaternion()).setFromAxisAngle(
        flipAxis,
        Math.PI
    ).multiply(
        (new THREE.Quaternion()).setFromAxisAngle(
            arm3rotAxis,
            Math.PI - (2 * theta)
        )
    )
);


export const geometry = BufferGeometryUtils.mergeGeometries([body, arm1, arm2, arm3])

geometry.translate(0, SQRT3, 0);