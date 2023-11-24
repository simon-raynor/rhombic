// add the bvh collision methods to the THREE classes
import './three-extended.js';
import * as THREE from 'three';
import nipplejs from 'nipplejs';

import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { RenderPixelatedPass } from 'three/addons/postprocessing/RenderPixelatedPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';


import Stats from 'three/addons/libs/stats.module.js';
import { Cave } from './entities/cave/index.js';
import generateVegetation from './entities/vegetation/index.js';
import { Tower } from './entities/tower/index.js';
import ParticlePath from './entities/particles/index.js';
import Trider from './entities/trider/index.js';


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
    250
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
pixelPass.normalEdgeStrength = 0;
pixelPass.depthEdgeStrength = 0.01;

composer.addPass(
    pixelPass
);

const bloomPass = new UnrealBloomPass(new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85);
bloomPass.threshold = 0.25;
bloomPass.strength = 0.33;
bloomPass.radius = 0;
composer.addPass(bloomPass);

composer.addPass(
    new OutputPass()
);








const light = new THREE.AmbientLight( 0x202020 ); // soft white light
scene.add( light );




const CAVEDIMENSION = 3;

const cave = new Cave(CAVEDIMENSION);
scene.add(cave.mesh);

const veg = generateVegetation(cave);
scene.add(veg);


const { point, normal } = cave.centre.getRandomPointOnMesh();

const trider = new Trider();

scene.add(trider.mesh);

trider.init(
    new THREE.Vector3().copy(point),
    new THREE.Vector3().copy(normal)
);


const centreTower = new Tower(
    cave.centre,
    point,
    normal,
    0xff0000
);

const towers = [];

towers.push(centreTower);

cave.cells.forEach(
    cell => {
        if (cell !== cave.centre && Math.random() > 0) {
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







const movinginput = {
    vector: new THREE.Vector2(0, 1),
    force: 0
};

const leftstickelement = document.createElement('div');
leftstickelement.className = 'controls';

document.body.appendChild(leftstickelement);

const leftstick = nipplejs.create({
    zone: document.querySelector('.controls'),
    fadeTime: 0,
    color: '#ffffff00'
});
leftstick.on(
    'move',
    (evt, data) => {
        const {vector, force} = data;
        if (vector && force) {
            movinginput.vector.copy(vector)
            movinginput.force = force;
        }
    }
);
leftstick.on(
    'end',
    () => {
        movinginput.force = 0;
    }
);





let t = Date.now();

let slowfactor = 1;

let addToCurveIdx = 0;


const tmpUp = new THREE.Vector3(),
    tmpBack = new THREE.Vector3();

function tick() {
    requestAnimationFrame(tick);

    const now = Date.now();
    const dt = (now - t) / (1000 * slowfactor);
    t = now;

    stats.update();


    trider.tick(dt, cave.mesh, movinginput);

    towers.forEach(t => t.tick(dt, trider));

    if (addToCurveIdx >= particlePathManager.curveCount) {
        addToCurveIdx = addToCurveIdx % particlePathManager.curveCount;
    }

    particlePathManager.addParticle(0xff0000, addToCurveIdx);
    particlePathManager.tick(dt);
    
    addToCurveIdx += 11;

    // follow cam (needs work!)
    tmpUp.copy(trider.up).multiplyScalar(5);
    tmpBack.set(0, 0, -1).applyQuaternion(trider.quaternion).multiplyScalar(15);

    camera.position.copy(trider.position)
        .add(tmpUp)
        .add(tmpBack)
    camera.up.copy(trider.up);
    camera.lookAt(trider.position);
    camera.position.add(tmpUp);


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




