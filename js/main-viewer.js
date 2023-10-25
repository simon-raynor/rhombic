// add the bvh collision methods to the THREE classes
import './three-extended.js';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';

import Stats from 'three/addons/libs/stats.module.js';
import { createRhombic } from './geometries/rhombicdodecahedron.js';
import trider from './entities/trider/index.js';


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
camera.position.set(-20, 6, 0);
camera.lookAt({x: 0, y: 0, z: 0});


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
    opacity: 0.5,
    transparent: true,
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




scene.add( trider.mesh );




/* const floorgeometry = new THREE.PlaneGeometry(1000, 1000);
const floor = new THREE.Mesh( floorgeometry, blockMaterial );
floor.rotateX(-Math.PI / 2);
floor.rotateZ(Math.PI);
scene.add( floor ); */







/* const skelehelper = new THREE.SkeletonHelper( trider.mesh );
scene.add( skelehelper ); */


const moveDirection = new THREE.Vector3(0, 0, 1);
const moveOrigin = new THREE.Vector3(0, 4, 0);

/* const arrow = new THREE.ArrowHelper(moveDirection, moveOrigin, 5, 0xffffff);
scene.add(arrow); */



trider.moveDirection = moveDirection;


const ZERO = new THREE.Vector3(0, 0, 1);


let t = Date.now();

let dirT = 5;

let slowfactor = 1;

let cameraAngle = 0;

function tick() {
    requestAnimationFrame(tick);

    const now = Date.now();
    const dt = (now - t) / (1000 * slowfactor);
    t = now;

    stats.update();



    trider.tick(dt);

    


    
    /* dirT -= dt;

    if (dirT <= 0) {
        moveDirection.set(1 - Math.random() * 2, 0, 1 - Math.random() * 2).normalize();
        arrow.setDirection(moveDirection);

        dirT = Math.random() * 10;
    } */

    /* camera.position.setFromSphericalCoords(25, 5.25, moveDirection.angleTo(ZERO))
    camera.position.add(trider.mesh.position);

    camera.lookAt(trider.mesh.position); */

    controls.update();

    renderer.render(scene, camera);

}



renderer.render(scene, camera);

setTimeout(
    tick,
    1000
);




