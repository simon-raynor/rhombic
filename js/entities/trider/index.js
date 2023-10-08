import * as THREE from 'three';
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';
import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js';

import { TRIGONAL_ROTATER, createTrigonal } from "../../geometries/trigonaltrapezahedron.js";



const SQRT3 = Math.sqrt(3);


const trigonal = createTrigonal();
trigonal.computeBoundingBox();



const body = trigonal.clone();




const tmpVec3 = new THREE.Vector3();

const kneePositions = [
    [2, 0, 0],
    [0, 2, 0],
    [0, 0, 2]
].map(
    arr => tmpVec3.fromArray(arr).applyQuaternion(TRIGONAL_ROTATER).toArray()
);


const knee1 = tmpVec3.fromArray(kneePositions[0]).clone();
const knee2 = tmpVec3.fromArray(kneePositions[1]).clone();
const knee3 = tmpVec3.fromArray(kneePositions[2]).clone();

console.log(knee1);


const A = new THREE.Vector3(knee1.x, 0, knee1.z);

const theta = Math.acos(A.dot(knee1) / (A.length() * knee1.length()));

const arm1 = trigonal.clone();
const arm1rotAxis = new THREE.Vector3(1.73205080757, 0, 1).normalize();
arm1.applyQuaternion(
    (new THREE.Quaternion()).setFromAxisAngle(
        new THREE.Vector3(0, -1, 0).normalize(),
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
        new THREE.Vector3(0, -1, 0).normalize(),
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
        new THREE.Vector3(0, -1, 0).normalize(),
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



const bones = [
    // root
    new THREE.Bone(),
    // spine
    new THREE.Bone(),
];

bones[0].position.set(0, SQRT3, 0);

bones[1].position.set(0, SQRT3 * 2, 0);
bones[0].add(bones[1]);

export const iks = [];

let idx = 2;

[knee1, knee2, knee3].forEach(
    kneeposn => {
        const hip1 = new THREE.Bone();
        const hip2 = new THREE.Bone();
        const hip3 = new THREE.Bone();
        const knee = new THREE.Bone();
        const foot = new THREE.Bone();
        const footprint = new THREE.Bone();

        hip1.position.set(...kneeposn.toArray());
        hip2.position.set(0, 0.4, 0);
        hip3.position.set(kneeposn.x/3, -0.4, kneeposn.z/3);
        knee.position.set(-kneeposn.x/3, 0, -kneeposn.z/3);
        foot.position.set(-kneeposn.x, -kneeposn.y - SQRT3, -kneeposn.z);
        footprint.position.set(0, -SQRT3, 0);

        bones[0].add(hip1, footprint);
        hip1.add(hip2);
        hip2.add(hip3);
        hip3.add(knee);
        knee.add(foot);

        bones.push(
            hip1,
            hip2,
            hip3,
            knee,
            foot,
            footprint
        );

        iks.push(
            {
                target: idx + 5,
                effector: idx + 4,
                links: [
                    {
                        index: idx + 3,
                        /* rotationMin: new THREE.Vector3(-0.5,-0.5,-0.5),
                        rotationMax: new THREE.Vector3(0.5,0.5,0.5) */
                    },
                    {
                        index: idx + 2,
                    },
                    {
                        index: idx + 1,
                        limitation: new THREE.Vector3(-kneeposn.x,0,-kneeposn.z).normalize(),
                    },
                    {
                        index: idx,
                        limitation: new THREE.Vector3(kneeposn.x,0,kneeposn.z).normalize(),
                    }
                ],
                iteration: 2
                //maxAngle: 2 * Math.PI / 3,
                //minAngle: 0
            }
        );

        idx += 6;
    }
);


const skeleton = new THREE.Skeleton(bones);






const position = geometry.attributes.position;
const vertex = new THREE.Vector3();

const skinIndices = [];
const skinWeights = [];

for (let i = 0; i < position.count; i++) {
    vertex.fromBufferAttribute(position, i);

    const leg = Math.floor(i / 36);
    const idx = (leg * 6) - 1;

    if (leg) {
        skinIndices.push(idx, idx + 1, 0, 0);
    } else {
        skinIndices.push(0, 1, 0, 0);
    }
    skinWeights.push(0.5, 0.5, 0, 0);
}
geometry.setAttribute( 'skinIndex', new THREE.Uint16BufferAttribute( skinIndices, 4 ) );
geometry.setAttribute( 'skinWeight', new THREE.Float32BufferAttribute( skinWeights, 4 ) );





const texture = new THREE.TextureLoader().load('/img/wall-atlas.png');
const texturebump = new THREE.TextureLoader().load('/img/wall-atlas-bumps.png');

export const blockMaterial = new THREE.MeshLambertMaterial({
    map: texture,
    bumpMap: texturebump,
    bumpScale: 0.05,
    side: THREE.DoubleSide
});





const trigonalmesh = new THREE.SkinnedMesh(
    geometry,
    blockMaterial
);

trigonalmesh.add(skeleton.bones[0]); // root bone
trigonalmesh.bind(skeleton);





export default trigonalmesh;

console.log(trigonalmesh)





const tmpQuat = new THREE.Quaternion();

function legOpenTrack(axis, boneIdx) {
    const quats = [];
    
    tmpQuat.setFromAxisAngle(axis, 0);
    quats.push(...tmpQuat.toArray());
    
    tmpQuat.setFromAxisAngle(axis, 13 * Math.PI / 40);
    quats.push(...tmpQuat.toArray());
    
    return new THREE.QuaternionKeyframeTrack(
        `${skeleton.bones[boneIdx].uuid}.quaternion`,
        [0, 1],
        quats
    );
}



export const openClip = new THREE.AnimationClip(
    'open',
    1,
    [
        legOpenTrack(arm1rotAxis, 1),
        legOpenTrack(arm2rotAxis, 2),
        legOpenTrack(arm3rotAxis, 3),
    ]
);



function stepBodyTrack() {
    const quats = [];
    
    tmpQuat.setFromAxisAngle(arm2rotAxis, -0.4);
    quats.push(...tmpQuat.toArray());
    tmpQuat.setFromAxisAngle(arm1rotAxis, -0.25);
    quats.push(...tmpQuat.toArray());
    tmpQuat.setFromAxisAngle(arm3rotAxis, -0.4);
    quats.push(...tmpQuat.toArray());
    tmpQuat.setFromAxisAngle(arm2rotAxis, -0.4);
    quats.push(...tmpQuat.toArray());

    return new THREE.QuaternionKeyframeTrack(
        `${skeleton.bones[1].uuid}.quaternion`,
        [0,1,2,3],
        quats
    )
}

export const stepClip = new THREE.AnimationClip(
    'step',
    3,
    [
        new THREE.VectorKeyframeTrack(
            `${skeleton.bones[7].uuid}.position`,
            [0,1,1.3,2,3],
            [
                0.5,-SQRT3,-3.5,
                -0.5,-SQRT3,-3.5,
                0.5,-SQRT3/2,-3.5,
                1.5,-SQRT3,-3.5,
                0.5,-SQRT3,-3.5,
            ]
        ),
        new THREE.VectorKeyframeTrack(
            `${skeleton.bones[13].uuid}.position`,
            [0,0.3,1,2,3],
            [
                -4.5,-SQRT3,0,
                -3.5,-SQRT3/2,0,
                -2.5,-SQRT3,0,
                -3.5,-SQRT3,0,
                -4.5,-SQRT3,0
            ]
        ),
        new THREE.VectorKeyframeTrack(
            `${skeleton.bones[19].uuid}.position`,
            [0,1,2,2.3,3],
            [
                2,-SQRT3,3.5,
                1,-SQRT3,3.5,
                0,-SQRT3,3.5,
                1,-SQRT3/2,3.5,
                2,-SQRT3,3.5,
            ]
        ),
        stepBodyTrack()
    ]
)

