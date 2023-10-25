// add the bvh collision methods to the THREE classes
import './three-extended.js';
import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { RenderPixelatedPass } from 'three/addons/postprocessing/RenderPixelatedPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';


import Stats from 'three/addons/libs/stats.module.js';
import { createRhombic } from './geometries/rhombicdodecahedron.js';
import trider from './entities/trider/index.js';
import generateCave from './entities/cave/index.js';


const stats = new Stats();
document.body.appendChild( stats.dom )


const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer({
    logarithmicDepthBuffer: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.pixelRatio = window.devicePixelRatio;
//renderer.shadowMap.enabled = true;

document.body.appendChild(renderer.domElement);


const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    3,
    1000
);
camera.position.set(-20, 6, 0);
camera.lookAt({x: 0, y: 0, z: 0});



const renderTarget = new THREE.WebGLRenderTarget(
    window.innerWidth,
    window.innerHeight,
    {
        //format: THREE.RGBAFormat,
        type: THREE.FloatType,
    }
)



const composer = new EffectComposer( renderer/* , renderTarget */ );

const PIXEL_SIZE = 3;

composer.addPass(
    new RenderPass(scene, camera)
);

/* const pixelPass = new RenderPixelatedPass(PIXEL_SIZE, scene, camera);
pixelPass.normalEdgeStrength = 0.05;
pixelPass.depthEdgeStrength = 0.1;

composer.addPass(
    pixelPass
); */


composer.addPass(
    new OutputPass()
);





/* const controls = new OrbitControls( camera, renderer.domElement );

controls.update(); */


const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
directionalLight.position.set(3, 2, 1);
scene.add( directionalLight );
const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );


const texture = new THREE.TextureLoader().load('/img/wall-atlas.png');
const texturebump = new THREE.TextureLoader().load('/img/wall-atlas-bumps.png');

texture.wrapS = THREE.RepeatWrapping;
texture.repeat.x = -1;
texturebump.wrapS = THREE.RepeatWrapping;
texturebump.repeat.x = -1;
/* texture.wrapT = THREE.RepeatWrapping;
texture.repeat.y = -1; */

export const blockMaterial = new THREE.MeshLambertMaterial({
    map: texture,
    bumpMap: texturebump,
    bumpScale: 0.05,
    side: THREE.BackSide,
    transparent: false
});
export const redMaterial = new THREE.MeshLambertMaterial({
    color: 0xff0000,
    /* opacity: 0.5,
    transparent: true, */
    side: THREE.BackSide
});




const cave = generateCave();



const rhombicmesh = new THREE.Mesh(cave, blockMaterial);
//rhombicmesh.position.add(new THREE.Vector3(0,0,4));
scene.add(rhombicmesh);

console.log(rhombicmesh);


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



//trider.moveDirection = moveDirection;


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
    camera.position.setFromSphericalCoords(25, 5.25, trider.facing.angleTo(ZERO))
    camera.position.add(trider.mesh.position);

    camera.lookAt(trider.mesh.position);


    
    /* dirT -= dt;

    if (dirT <= 0) {
        moveDirection.set(1 - Math.random() * 2, 0, 1 - Math.random() * 2).normalize();
        arrow.setDirection(moveDirection);

        dirT = Math.random() * 10;
    } */

    //controls.update(dt);

    //renderer.render(scene, camera);
    composer.render();

}



renderer.render(scene, camera);

setTimeout(
    tick,
    1000
);




