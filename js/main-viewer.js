// add the bvh collision methods to the THREE classes
import './three-extended.js';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';
import { ConvexGeometry } from 'three/addons/geometries/ConvexGeometry.js';

import Stats from 'three/addons/libs/stats.module.js';
import { createRhombic } from './geometries/rhombicdodecahedron.js';
import { createTrigonal } from './geometries/trigonaltrapezahedron.js';


const stats = new Stats();
document.body.appendChild( stats.dom )


const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.pixelRatio = window.devicePixelRatio;
document.body.appendChild(renderer.domElement);

const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.001,
    1000
);
camera.position.set(0, 2, -5);


const controls = new OrbitControls( camera, renderer.domElement );
//controls.autoRotate = true;
controls.update();


const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
directionalLight.position.set(3, 2, 1);
scene.add( directionalLight );
const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );


const texture = new THREE.TextureLoader().load('/img/wall-atlas.png');
const texturebump = new THREE.TextureLoader().load('/img/wall-atlas-bumps.png');

export const blockMaterial = new THREE.MeshLambertMaterial({
    map: texture,
    bumpMap: texturebump,
    bumpScale: 0.05,
    side: THREE.DoubleSide
});
export const redMaterial = new THREE.MeshLambertMaterial({
    color: 0xff0000,
    /* map: texture,
    bumpMap: texturebump,
    bumpScale: 0.05, */
    side: THREE.DoubleSide
});


const geometries = [];
//const rhombic = createRhombic();

const idir = new THREE.Vector3(2, 0, 2);
const jdir = new THREE.Vector3(2, 2, 0);
const kdir = new THREE.Vector3(-2, 0, 2);


const directions = [
    [1, 1, 0],
    [1, 0, 1],
    [1, -1, 0],
    [1, 0, -1],

    [-1, -1, 0],
    [-1, 0, 1],
    [-1, 1, 0],
    [-1, 0, -1],

    [0, 1, 1],
    [0, 1, -1],
    [0, -1, 1],
    [0, -1, -1]
];


function createRombicLattice(width, height, depth) {
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            for (let k = 0; k < depth; k++) {
                const vec = (new THREE.Vector3())
                            .add(idir.clone().multiplyScalar(i))
                            .add(jdir.clone().multiplyScalar(j))
                            .add(kdir.clone().multiplyScalar(k));

                const rhombic = createRhombic();

                rhombic.translate(...vec.toArray());

                console.log([i,j,k], vec.toArray(), rhombic)

                geometries.push(rhombic);
            }
        }
    }

    return BufferGeometryUtils.mergeGeometries(geometries);
}

/* const lattice = createRombicLattice(1, 1, 1);

const rhombicmesh = new THREE.Mesh(lattice, blockMaterial);
rhombicmesh.position.add(new THREE.Vector3(0,0,4));
scene.add(rhombicmesh); */



const trigonal = createTrigonal();

console.log(trigonal);



const bones = [
    new THREE.Bone(),
    new THREE.Bone(),
    new THREE.Bone(),
    new THREE.Bone(),
];

bones[1].position.set(0, 0, 2);
bones[2].position.set(0, 2, 0);
bones[3].position.set(2, 0, 0);

bones[0].add(bones[1], bones[2], bones[3]);


const leg1 = createTrigonal();
leg1.translate(-1, -1, 3);
leg1.rotateZ(Math.PI);
const leg1bone = new THREE.Bone();
leg1bone.position.set(1, 1, 3);
bones[1].add(leg1bone);
bones.push(leg1bone);

const leg2 = createTrigonal();
leg2.translate(-1, 3, -1);
leg2.rotateY(Math.PI);
const leg2bone = new THREE.Bone();
leg2bone.position.set(1, 3, 1);
bones[2].add(leg2bone);
bones.push(leg2bone);

const leg3 = createTrigonal();
leg3.translate(3, -1, -1);
leg3.rotateX(Math.PI);
const leg3bone = new THREE.Bone();
leg3bone.position.set(3, 1, 1);
bones[3].add(leg3bone);
bones.push(leg3bone);


const geometry = BufferGeometryUtils.mergeGeometries([trigonal, leg1, leg2, leg3]);
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



const trigonalmesh = new THREE.SkinnedMesh(
    geometry,
    blockMaterial
);

trigonalmesh.add(bones[0]); // root bone
trigonalmesh.bind(skeleton);

trigonalmesh.position.set(0, 2, 0);

trigonalmesh.rotateX(-Math.PI / 5);
trigonalmesh.rotateZ(Math.PI / 4);

scene.add( trigonalmesh );

const helper = new THREE.SkeletonHelper( trigonalmesh );
scene.add( helper );





const floorgeometry = new THREE.PlaneGeometry(10, 10);
const floor = new THREE.Mesh( floorgeometry, redMaterial );
floor.rotateX(-Math.PI / 2);
floor.rotateZ(Math.PI);
scene.add( floor );




let t = Date.now();

function tick() {
    requestAnimationFrame(tick);

    const now = Date.now();
    const dt = now - t;
    t = now;

    stats.update();
    controls.update();

    renderer.render(scene, camera);


    const fortyfive = Math.PI / 4,
        angle = (3 * fortyfive) + (fortyfive * Math.sin(t / 1000));
    
    bones[1].setRotationFromAxisAngle(
        (new THREE.Vector3(1, -1, 0)).normalize(),
        angle
    );
    bones[2].setRotationFromAxisAngle(
        (new THREE.Vector3(-1, 0, 1)).normalize(),
        angle
    );
    bones[3].setRotationFromAxisAngle(
        (new THREE.Vector3(0, 1, -1)).normalize(),
        angle
    );
}
tick();
