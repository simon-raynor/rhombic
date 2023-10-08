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

const arm2 = trigonal.clone();
arm2.applyQuaternion(
    (new THREE.Quaternion()).setFromAxisAngle(
        new THREE.Vector3(0, -1, 0).normalize(),
        Math.PI
    ).multiply(
        (new THREE.Quaternion()).setFromAxisAngle(
            new THREE.Vector3(0, 0, -1).normalize(),
            Math.PI - (2 * theta)
        )
    )
);

const arm1 = trigonal.clone();
arm1.applyQuaternion(
    (new THREE.Quaternion()).setFromAxisAngle(
        new THREE.Vector3(0, -1, 0).normalize(),
        Math.PI
    ).multiply(
        (new THREE.Quaternion()).setFromAxisAngle(
            new THREE.Vector3(1.73205080757, 0, 1).normalize(),
            Math.PI - (2 * theta)
        )
    )
);

const arm3 = trigonal.clone();
arm3.applyQuaternion(
    (new THREE.Quaternion()).setFromAxisAngle(
        new THREE.Vector3(0, -1, 0).normalize(),
        Math.PI
    ).multiply(
        (new THREE.Quaternion()).setFromAxisAngle(
            new THREE.Vector3(-1.73205080757, 0, 1).normalize(),
            Math.PI - (2 * theta)
        )
    )
);


export const geometry = BufferGeometryUtils.mergeGeometries([body, arm1, arm2, arm3])

geometry.translate(0, SQRT3, 0);



const bones = [
    new THREE.Bone(),
    new THREE.Bone(),
    new THREE.Bone(),
    new THREE.Bone(),
    new THREE.Bone(),
    new THREE.Bone(),
    new THREE.Bone(),
];

bones[0].position.set(0, SQRT3, 0);

bones[1].position.set(...knee1.toArray());
bones[2].position.set(...knee2.toArray());
bones[3].position.set(...knee3.toArray());

bones[4].position.set(-knee1.x, -knee1.y - SQRT3, -knee1.z);
bones[5].position.set(-knee2.x, -knee2.y - SQRT3, -knee2.z);
bones[6].position.set(-knee3.x, -knee3.y - SQRT3, -knee3.z);



bones[0].add(bones[1], bones[2], bones[3]);
bones[1].add(bones[4]);
bones[2].add(bones[5]);
bones[3].add(bones[6]);


const skeleton = new THREE.Skeleton(bones);






const position = geometry.attributes.position;
const vertex = new THREE.Vector3();

const skinIndices = [];
const skinWeights = [];

for (let i = 0; i < position.count; i++) {
    vertex.fromBufferAttribute(position, i);

    const leg = Math.floor(i / 36);
    console.log(leg);

    if (leg) {
        skinIndices.push(leg, leg + 3, 0, 0);
    } else {
        skinIndices.push(0, 0, 0, 0);
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


/* 
const fortyfive = Math.PI / 4,
angle = (3 * fortyfive) - 0.05;

function leg2Track() {
    const quats = [];

    const quat = new THREE.Quaternion();
    const axis = (new THREE.Vector3(-1, 0, 1)).normalize();
    
    quat.setFromAxisAngle(axis, angle);
    quats.push(...quat.toArray());
    
    quat.setFromAxisAngle(axis, angle - Math.PI / 4);
    quats.push(...quat.toArray());
    
    quat.setFromAxisAngle(axis, angle);
    quats.push(...quat.toArray());
    
    return new THREE.QuaternionKeyframeTrack(
        `${skeleton.bones[2].uuid}.quaternion`,
        [0.25, 0.45, 0.7],
        quats
    );
}

function leg3Track() {
    const quats = [];

    const quat = new THREE.Quaternion();
    const axis = (new THREE.Vector3(0, 1, -1)).normalize();
    
    quat.setFromAxisAngle(axis, angle);
    quats.push(quat.clone());
    
    quat.setFromAxisAngle(axis, angle - Math.PI / 4);
    quats.push(quat.clone());
    
    quat.setFromAxisAngle(axis, angle);
    quats.push(quat.clone());
    
    return new THREE.QuaternionKeyframeTrack(
        `${skeleton.bones[3].uuid}.quaternion`,
        [0.5, 0.7, 0.9],
        quats.reduce(
            (memo, quat) => {
                memo.push(...quat.toArray());
                return memo;
            },
            []
        )
    );
}



function leg1WalkTracks() {
    const tracks = [];

    const quats = [];

    const quat = new THREE.Quaternion();
    const axis = (new THREE.Vector3(1, -1, 0)).normalize();

    const startAngle = 2 * Math.PI / 3 - 0.09;
    const backAngle = 7 * Math.PI / 8;
    const fwdAngle = 2 * Math.PI / 3 - 0.3;
    
    quat.setFromAxisAngle(axis, startAngle);
    quats.push(quat.clone());
    
    quat.setFromAxisAngle(axis, backAngle);
    quats.push(quat.clone());
    
    quat.setFromAxisAngle(axis, fwdAngle);
    quats.push(quat.clone());
    
    quat.setFromAxisAngle(axis, startAngle);
    quats.push(quat.clone());
    
    tracks.push(
        new THREE.QuaternionKeyframeTrack(
            `${skeleton.bones[1].uuid}.quaternion`,
            [0, 2, 2.5, 3],
            quats.reduce(
                (memo, quat) => {
                    memo.push(...quat.toArray());
                    return memo;
                },
                []
            )
        )
    );

    tracks.push(
        new THREE.VectorKeyframeTrack(
            `${skeleton.bones[1].uuid}.position`,
            [0, 1, 2.25, 3],
            [
                -0.5, -0.5, 1.5,
                -0.3, -0.3, 2.15,
                -0.3, -0.3, 2.20,
                -0.5, -0.5, 1.5,
            ]
        )
    )

    return tracks;
} */

/* bones[1].setRotationFromAxisAngle(
    (new THREE.Vector3(1, -1, 0)).normalize(),
    2 * Math.PI / 3 - 0.09
);

bones[2].setRotationFromAxisAngle(
    (new THREE.Vector3(-1, 0, 1)).normalize(),
    2 * Math.PI / 3 - 0.09
);

bones[3].setRotationFromAxisAngle(
    (new THREE.Vector3(0, 1, -1)).normalize(),
    2 * Math.PI / 3 - 0.09
); */

export const clip = new THREE.AnimationClip(
    'walk',
    1,
    [
        //...leg1WalkTracks()
        /*leg1Track(), 
        leg2Track(),
        new THREE.VectorKeyframeTrack(
            `${skeleton.bones[2].uuid}.position`,
            [0.25, 0.5, 0.75],
            [
                0, 2, 0,
                0, 2.25, 0,
                0, 2, 0,
            ]
        ),
        leg3Track(), */
        /* new THREE.VectorKeyframeTrack(
            `${skeleton.bones[0].uuid}.position`,
            [0, 0.5, 1],
            [
                2, 0, 0,
                4, 0, 0,
                2, 0, 0,
            ]
        ) */
    ]
);