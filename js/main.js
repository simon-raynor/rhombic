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
import generateCave from './entities/cave/index.js';
import ParticlePath from './entities/particlepath.js';
import generateVegetation from './entities/vegetation/index.js';
import { generateAlongPath } from './entities/tower/index.js';


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




const [cavemesh, paths] = generateCave(3);
scene.add(cavemesh);

scene.add( trider.mesh );

const ppath = new ParticlePath(paths[0]);
scene.add(ppath.mesh);
ppath.tick(0);


const veg = generateVegetation(cavemesh, paths);
scene.add(veg);


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
}


const towers = [
    ...generateAlongPath(
        paths[0],
        0xcc00ee,
        cavemesh
    ),
];

towers.map(
    t => scene.add(t.mesh)
);

/* const towermesh = generateMesh()

raycaster.set(trider.mesh.position, new THREE.Vector3(0, 1, 1).normalize());
const tintersects = raycaster.intersectObject(cavemesh);
if (tintersects.length) {
    towermesh.lookAt(tintersects[0].normal);
    towermesh.rotateX(Math.PI / 2);
    towermesh.position.copy(tintersects[0].point).sub(tintersects[0].normal);
}

scene.add(towermesh); */







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


    trider.tick(dt, cavemesh, movinginput);

    ppath.tick(dt);

    towers.forEach(t => t.tick(dt));

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




