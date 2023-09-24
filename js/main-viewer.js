// add the bvh collision methods to the THREE classes
import './three-extended.js';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';

import Stats from 'three/addons/libs/stats.module.js';

import Lattice, { createRhombic } from './Lattice.js';


const stats = new Stats();
document.body.appendChild( stats.dom )


const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.pixelRatio = window.devicePixelRatio;
document.body.appendChild(renderer.domElement);

const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(0, 0, -5);


const controls = new OrbitControls( camera, renderer.domElement );
//controls.autoRotate = true;
controls.update();


const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
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


console.log(
    /* idir.multiplyScalar(1),
    (new THREE.Vector3())
        .add(idir.clone().multiplyScalar(1)),
    idir.multiplyScalar(0),
    ((new THREE.Vector3())
        .add(idir.clone().multiplyScalar(1)))
        .add(idir.clone().multiplyScalar(0)), */
    (new THREE.Vector3(1, 0, 0)),
    (new THREE.Vector3(1, 0, 0)).add(new THREE.Vector3(0,0,0)),
)

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

const lattice = createRombicLattice(3, 3, 3);

const rhombicmesh = new THREE.Mesh(lattice, blockMaterial);
                
scene.add(rhombicmesh);



let t = Date.now();

function tick() {
    requestAnimationFrame(tick);

    const now = Date.now();
    const dt = now - t;
    t = now;

    stats.update();
    controls.update();

    renderer.render(scene, camera);
}
tick();