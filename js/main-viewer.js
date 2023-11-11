// add the bvh collision methods to the THREE classes
import './three-extended.js';
import * as THREE from 'three';
import nipplejs from 'nipplejs';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { RenderPixelatedPass } from 'three/addons/postprocessing/RenderPixelatedPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';


import Stats from 'three/addons/libs/stats.module.js';
import { RHOMBIC_FACES_2D, RHOMBIC_UVS_2D, RHOMBIC_VERTICES, createRhombic } from './geometries/rhombicdodecahedron.js';
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



const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.5,
    1000
);



const renderTarget = new THREE.WebGLRenderTarget(
    window.innerWidth,
    window.innerHeight,
    {
        //format: THREE.RGBAFormat,
        type: THREE.FloatType,
    }
)



const composer = new EffectComposer( renderer/* , renderTarget */ );

/* composer.addPass(
    new RenderPass(scene, camera)
); */


const PIXEL_SIZE = 1;
const pixelPass = new RenderPixelatedPass(PIXEL_SIZE, scene, camera);
pixelPass.normalEdgeStrength = 0.05;
pixelPass.depthEdgeStrength = 0.1;

composer.addPass(
    pixelPass
);


/* composer.addPass(
    new UnrealBloomPass(new THREE.Vector2( window.innerWidth, window.innerHeight ), 2, 0.4, 0.85)
) */


composer.addPass(
    new OutputPass()
);








/* const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
directionalLight.position.set(3, 2, 1);
scene.add( directionalLight ); */
const light = new THREE.AmbientLight( 0x202020 ); // soft white light
//const light = new THREE.AmbientLight( 0x808080 ); // bright white light
scene.add( light );





const cavemesh = generateCave(3);
scene.add(cavemesh);



const controls = new OrbitControls( camera, renderer.domElement );
camera.position.set(0, 10, -20);
controls.update();



/* const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper ); */

/* const skelehelper = new THREE.SkeletonHelper( trider.mesh );
scene.add( skelehelper ); */

/* const ikhelper = trider.ikSolver.createHelper();
scene.add( ikhelper ); */

/* const fwdArr = new THREE.ArrowHelper(
    new THREE.Vector3(),
    new THREE.Vector3(),
    5,
    0xffffff,
    1,
    1
);
scene.add(fwdArr); */




let t = Date.now();

let slowfactor = 1;

function tick() {
    requestAnimationFrame(tick);

    const now = Date.now();
    const dt = (now - t) / (1000 * slowfactor);
    t = now;

    stats.update();


    controls.update();

    //renderer.render(scene, camera);
    composer.render();

}



renderer.render(scene, camera);

setTimeout(
    () => {
        t = Date.now();
        tick();
    },
    1000
);




