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
import trider from './entities/trider/index.js';
import { Cave } from './entities/cave/index.js';
import ParticlePath from './entities/particlepath.js';
import generateVegetation from './entities/vegetation/index.js';
import { Tower } from './entities/tower/index.js';


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




const cave = new Cave(3);
scene.add(cave.mesh);

scene.add( trider.mesh );

/* const ppath = new ParticlePath(paths[0]);
scene.add(ppath.mesh);
ppath.tick(0); */


const veg = generateVegetation(cave);
scene.add(veg);


// find the point "below" 0,0 and translate/orient the trider
// so that it sits there

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
);

towers.map(
    t => scene.add(t.mesh)
);



// NOTE: this is bad and should be instanced somehow,
//      probably via datatextures and custom shaders
const towerpaths = [];

try {
    for(let i = 0; i < towers.length - 1; i++) {
        for(let j = 1; j < towers.length; j++) {
            try {
                const towerA = towers[i];
                const towerB = towers[j];

                if (towerA !== towerB) {
                    const path = new THREE.CatmullRomCurve3(towerA.getPathTo(towerB));
                    path.updateArcLengths();

                    const ppath = new ParticlePath(path);
                    ppath.tick(0);
                    towerpaths.push(ppath);
                }
            } catch (ex) { console.error(ex); }
        }
    }

    towerpaths.map(
        tp => scene.add(tp.mesh)
    );
} catch (ex) { console.error(ex); }




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

function tick() {
    requestAnimationFrame(tick);

    const now = Date.now();
    const dt = (now - t) / (1000 * slowfactor);
    t = now;

    stats.update();


    trider.tick(dt, cave.mesh, movinginput);

    //ppath.tick(dt);

    towers.forEach(t => t.tick(dt, trider));
    towerpaths.forEach(t => t.tick(dt));

    // follow cam
    const up = trider.up.clone().multiplyScalar(5);
    const back = trider.forwards.clone().multiplyScalar(15);

    camera.position.copy(trider.position)
        .add(up)
        .sub(back)
    camera.up.copy(trider.up);
    camera.lookAt(trider.position);
    camera.position.add(up);


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




