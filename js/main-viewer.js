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
import trider from './entities/trider/index.js';
import { Cave } from './entities/cave/index.js';
//import ParticlePath from './entities/particlepath.js';
import generateVegetation from './entities/vegetation/index.js';
import { Tower } from './entities/tower/index.js';
import ParticlePath from './entities/particles/index.js';


const stats = new Stats();
document.body.appendChild( stats.dom )


const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.pixelRatio = window.devicePixelRatio;
//renderer.shadowMap.enabled = true;

document.body.appendChild(renderer.domElement);



const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.5,
    500
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

composer.addPass(
    new RenderPass(scene, camera)
);


/* const PIXEL_SIZE = 1;
const pixelPass = new RenderPixelatedPass(PIXEL_SIZE, scene, camera);
pixelPass.normalEdgeStrength = 0.05;
pixelPass.depthEdgeStrength = 0.1;

composer.addPass(
    pixelPass
); */

/* const bloomPass = new UnrealBloomPass(new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85);
bloomPass.threshold = 0.1;
bloomPass.strength = 0.5;
bloomPass.radius = 0;
composer.addPass(bloomPass); */


composer.addPass(
    new OutputPass()
);








/* const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
directionalLight.position.set(3, 2, 1);
scene.add( directionalLight ); */
const light = new THREE.AmbientLight( 0x202020 ); // soft white light
//const light = new THREE.AmbientLight( 0x808080 ); // bright white light
scene.add( light );



const CAVEDIMENSION = 4;

const cave = new Cave(CAVEDIMENSION);
scene.add(cave.mesh);

const veg = generateVegetation(cave);
scene.add(veg);



// find the point "below" 0,0 and translate/orient the trider
// so that it sits there

scene.add(trider.mesh);

const raycaster = new THREE.Raycaster();

raycaster.set(trider.mesh.position, new THREE.Vector3(0, -1, -1).normalize());

const intersects = raycaster.intersectObject(cave.mesh);

if (intersects.length) {
    trider.init(
        intersects[0].point,
        intersects[0].normal,
        cave.mesh
    );
}



const towers = [];

cave.cells.forEach(
    cell => {
        if (Math.random() > 0) {
            const { point, normal } = cell.getRandomPointOnMesh();

            towers.push(
                new Tower(
                    cell,
                    point,
                    normal,
                    0xff0000
                )
            );
        }
    }
);

towers.map(
    t => scene.add(t.mesh)
);



const particlePathManager = new ParticlePath();

for(let i = 1; i < towers.length; i++) {
    const towerA = towers[i];
    const towerB = towers[0];

    if (towerA !== towerB) {
        const path = new THREE.CatmullRomCurve3(towerA.getPathTo(towerB));
        path.updateArcLengths();
        particlePathManager.addCurve(path);
    }
}

scene.add(particlePathManager.mesh);



/* const pathMesh = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(
        path.getPoints(1000)
    ),
    new THREE.LineDashedMaterial({ color: 0x008800, dashSize: 2, gapSize: 1 })
)

scene.add(pathMesh); */

















const controls = new OrbitControls( camera, renderer.domElement );
camera.position.set(0, 30, -60);
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

/* paths.forEach(
    path => {
    const pathMesh = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(
            path.getPoints(1000)
        ),
        new THREE.LineDashedMaterial({ color: 0x00ff00, dashSize: 2, gapSize: 1 })
    )

    scene.add(pathMesh);
}) */



let t = Date.now();

let slowfactor = 1;

const moving = {vector: new THREE.Vector3(0, 1), force: 1};


let addToCurveIdx = 0;


function tick() {
    const nextframe = requestAnimationFrame(tick);

    const now = Date.now();
    const dt = (now - t) / (1000 * slowfactor);
    t = now;

    if (dt >= 1) {
        pause(nextframe);
    }


    stats.update();

    trider.tick(dt, cave.mesh, moving);

    towers.forEach(t => t.tick(dt, trider));


    if (addToCurveIdx >= particlePathManager.curveCount) {
        addToCurveIdx = addToCurveIdx % particlePathManager.curveCount;
    }

    particlePathManager.addParticle(0x0000ff, addToCurveIdx);
    particlePathManager.tick(dt);

    addToCurveIdx += 11;



    controls.update();

    //renderer.render(scene, camera);
    composer.render();

}


const pausebutton = document.getElementById('pause');

pausebutton.addEventListener('click', () => {
    t = Date.now();
    tick();
    pausebutton.setAttribute('disabled', 'disabled');
})

function pause(nextframe) {
    cancelAnimationFrame(nextframe);
    pausebutton.removeAttribute('disabled');
}



renderer.render(scene, camera);

setTimeout(
    () => {
        t = Date.now();
        tick();
    },
    1000
);




