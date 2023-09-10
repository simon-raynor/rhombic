// add the bvh collision methods to the THREE classes
import './three-extended.js';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

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


const rhombic = createRhombic();

console.log(rhombic);

const texture = new THREE.TextureLoader().load('/img/wall-atlas.png');
const texturebump = new THREE.TextureLoader().load('/img/wall-atlas-bumps.png');

export const blockMaterial = new THREE.MeshLambertMaterial({
    map: texture,
    bumpMap: texturebump,
    bumpScale: 0.05
});

/* const materials = [1,2,3,4,5,6,7,8,9,10,11,12].map(
    n => new THREE.MeshLambertMaterial({
        map: new THREE.TextureLoader().load(`/img/wall-text-${n}.png`),
        bumpMap: texturebump,
        bumpScale: 0.05
    })
); */

const rhombicmesh = new THREE.Mesh(rhombic, blockMaterial);

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