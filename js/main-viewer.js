// add the bvh collision methods to the THREE classes
import './three-extended.js';
import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { RenderPixelatedPass } from 'three/addons/postprocessing/RenderPixelatedPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
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


const PIXEL_SIZE = 2;
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








/* const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
directionalLight.position.set(3, 2, 1);
scene.add( directionalLight ); */
const light = new THREE.AmbientLight( 0x202020 ); // soft white light
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
    side: THREE.DoubleSide, // double side for collisions
    transparent: false
});
export const redMaterial = new THREE.MeshLambertMaterial({
    color: 0xff0000,
    /* opacity: 0.5,
    transparent: true, */
    side: THREE.DoubleSide
});




const cave = generateCave(2);



const cavemesh = new THREE.Mesh(cave, blockMaterial);
//rhombicmesh.position.add(new THREE.Vector3(0,0,4));
scene.add(cavemesh);

console.log(cavemesh);
console.log(trider);


scene.add( trider.mesh );




// find the point "below" 0,0 and translate/orient the trider
// so that it sits there

const raycaster = new THREE.Raycaster();

raycaster.set(trider.mesh.position, new THREE.Vector3(0, -1, -1).normalize());

const intersects = raycaster.intersectObject(cavemesh);

if (intersects.length) {
    trider.init(
        intersects[0].point,
        intersects[0].normal,
        cavemesh
    );

    camera.position.copy(trider.mesh.position)
        .sub(trider.moveDirection.clone().multiplyScalar(10))
        .add(intersects[0].normal.clone().multiplyScalar(5));
    camera.lookAt(trider.mesh.position);
    camera.position.add(intersects[0].normal.clone().multiplyScalar(5));
}





const controls = new OrbitControls( camera, renderer.domElement );
controls.target.copy(trider.mesh.position);
controls.update();



/* const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper ); */

/* const skelehelper = new THREE.SkeletonHelper( trider.mesh );
scene.add( skelehelper ); */




let t = Date.now();

let slowfactor = 1;

let feetadded = 0;

function tick() {
    requestAnimationFrame(tick);

    const now = Date.now();
    const dt = (now - t) / (1000 * slowfactor);
    t = now;

    stats.update();


    trider.tick(dt, cavemesh);

    if (trider.absoluteFootPositions && !feetadded) {
        trider.absoluteFootPositions.forEach(
            posn => {
                const mesh = new THREE.Mesh(
                    new THREE.SphereGeometry(1),
                    redMaterial
                );

                mesh.position.copy(posn);

                scene.add(mesh);
            }
        );
        feetadded = true;
    }
    
    /* camera.position.setFromSphericalCoords(25, 5.25, trider.facing.angleTo(ZERO))
    camera.position.add(trider.mesh.position);

    camera.lookAt(trider.mesh.position); */


    controls.target.copy(trider.mesh.position);
    controls.update(dt);

    //renderer.render(scene, camera);
    composer.render();

}



renderer.render(scene, camera);

setTimeout(
    tick,
    1000
);




