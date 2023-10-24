import * as THREE from 'three';

import { knees } from './geometry.js';


const SQRT3 = Math.sqrt(3);









function legOpenTrack(idx, boneId, length = 1) {
    const posns = [];
    const times = [];

    for (let i = 0; i <= 10; i++) {
        const t = i / 10;

        const x = 1 - Math.cos(t * Math.PI)
        const y = Math.sin(t * Math.PI);

        times.push(t * length);
        posns.push(knees[idx].x * x, -SQRT3 - y, knees[idx].z * x);
    }
    
    return new THREE.VectorKeyframeTrack(
        `${boneId}.position`,
        times,
        posns
    );
}

function bodyOpenTrack(meshId, length = 1) {
    const posns = [];
    const times = [];

    for (let i = 0; i <= 10; i++) {
        const t = i / 10;
        const y = Math.sin(t * Math.PI);

        times.push(t * length);
        posns.push(0, y, 0);
    }

    return new THREE.VectorKeyframeTrack(
        `${meshId}.position`,
        times,
        posns
    );
}














export default function createMixer(mesh) {
    const mixer = new THREE.AnimationMixer(mesh);



    const openClip = new THREE.AnimationClip(
        'open',
        1,
        [
            legOpenTrack(0, mesh.skeleton.bones[7].uuid),
            legOpenTrack(1, mesh.skeleton.bones[13].uuid),
            legOpenTrack(2, mesh.skeleton.bones[19].uuid),
            bodyOpenTrack(mesh.uuid)
        ]
    );



    const stepClip = new THREE.AnimationClip(
        'step',
        3,
        [
            new THREE.VectorKeyframeTrack(
                `${mesh.skeleton.bones[7].uuid}.position`,
                [0,1,1.3,2,3],
                [
                    0.5,-SQRT3,-4,
                    -0.5,-SQRT3,-4,
                    0.5,-SQRT3/2,-4,
                    1.5,-SQRT3,-4,
                    0.5,-SQRT3,-4,
                ]
            ),
            new THREE.VectorKeyframeTrack(
                `${mesh.skeleton.bones[13].uuid}.position`,
                [0,0.3,1,2,3],
                [
                    -6,-SQRT3,0,
                    -5,-SQRT3/2,0,
                    -4,-SQRT3,0,
                    -5,-SQRT3,0,
                    -6,-SQRT3,0
                ]
            ),
            new THREE.VectorKeyframeTrack(
                `${mesh.skeleton.bones[19].uuid}.position`,
                [0,1,2,2.3,3],
                [
                    2,-SQRT3,4,
                    1,-SQRT3,4,
                    0,-SQRT3,4,
                    1,-SQRT3/2,4,
                    2,-SQRT3,4,
                ]
            ),
        ]
    );


    const openAction = mixer.clipAction(openClip);
    openAction.repetitions = 1;
    openAction.clampWhenFinished = true;


    const stepAction = mixer.clipAction(stepClip);
    stepAction.setDuration(1);
    
    return {
        mixer,
        openAction,
        stepAction
    };
}