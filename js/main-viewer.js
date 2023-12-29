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
import { Cave } from './entities/cave/index.js';
//import ParticlePath from './entities/particlepath.js';
import generateVegetation from './entities/vegetation/index.js';
import ParticlePath from './entities/particles/index.js';
import Trider from './entities/trider/index.js';
import COLORS from './entities/color/index.js';
import TargetTower from './entities/towers/TargetTower.js';
import SourceTower from './entities/towers/SourceTower.js';
import Pillslug from './entities/pillslug/index.js';
import Creature from './entities/creature/index.js';


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








const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
directionalLight.position.set(3, 2, 1);
scene.add( directionalLight );
const light = new THREE.AmbientLight( 0x202020 ); // soft white light
//const light = new THREE.AmbientLight( 0x808080 ); // bright white light
scene.add( light );



const CAVEDIMENSION = 3;

const cave = new Cave(CAVEDIMENSION);
scene.add(cave.mesh);


/* const wf = new THREE.WireframeGeometry(cave.mesh.geometry);
const line = new THREE.LineSegments(wf, new THREE.LineBasicMaterial({ color: 0x999999 }));
scene.add(line); */


const veg = generateVegetation(cave);
scene.add(veg);



const { point, normal } = cave.centre.getRandomPointOnMesh();

const trider = new Trider();

scene.add(trider.mesh);

trider.init(
    new THREE.Vector3().copy(point),
    new THREE.Vector3().copy(normal)
);



const centreTower = new TargetTower(
    cave.centre
);

const towers = [];

towers.push(centreTower);

cave.cells.forEach(
    cell => {
        if (cell !== cave.centre && Math.random() > 0.5) {
            towers.push(
                new SourceTower(
                    cell,
                    centreTower,
                    COLORS[Math.floor(COLORS.length * Math.random())]
                )
            );
        }
    }
);

towers.map(
    t => scene.add(t.mesh)
);



const particlePathManager = new ParticlePath();

scene.add(particlePathManager.mesh);

towers.forEach(
    tower => {
        if (tower.target) {
            tower.generatePathToTarget(particlePathManager);

            /* const pathMesh = new THREE.Line(
                new THREE.BufferGeometry().setFromPoints(
                    tower.path.getPoints(1000)
                ),
                new THREE.LineDashedMaterial({ color: tower.color, dashSize: 2, gapSize: 1 })
            )

            scene.add(pathMesh); */
        }
    }
)





/* const pillslug = new Pillslug(cave.centre.openings[0]);
pillslug.target = centreTower;

scene.add(pillslug.mesh); */





const creature = new Pillslug();

const intersect = cave.cells[10].getRandomPointOnMesh();

creature.init(cave, intersect.point, intersect.normal);

creature.target = centreTower;

scene.add(creature.mesh);

console.log(creature)








const controls = new OrbitControls( camera, renderer.domElement );
camera.position.set(0, 30, -60);
controls.target = creature.position;
controls.update();



const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );

/* const skelehelper = new THREE.SkeletonHelper( trider.mesh );
scene.add( skelehelper ); */

/* const ikhelper = trider.ikSolver.createHelper();
scene.add( ikhelper ); */

/* scene.add(new THREE.ArrowHelper(
    new THREE.Vector3().randomDirection().cross(normal),
    point,
    5,
    0xffffff,
    1,
    1
)); */

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

const moving = {vector: new THREE.Vector3(0, 1), force: 0};


function tick() {
    const nextframe = requestAnimationFrame(tick);

    const now = Date.now();
    const dt = (now - t) / (1000 * slowfactor);
    t = now;

    if (dt >= 1) {
        pause(nextframe);
    }


    stats.update();

    tickGame(dt);

    //pillslug.tick(dt);

    controls.update();

    //renderer.render(scene, camera);
    composer.render();

}


let pathMesh = null;

function tickGame(dt) {
    trider.tick(dt, cave.mesh, moving);

    towers.forEach(t => t.tick(dt, trider));

    particlePathManager.tick(dt);

    //pillslug.tick(dt);

    creature.tick(dt);

    if (!pathMesh && creature.path) {
        pathMesh = drawPath(creature.path);
        scene.add(pathMesh);
    }
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


/* for (let i = 0; i <= 100; i++) {
    tickGame(1);
} */

moving.force = 1;


setTimeout(
    () => {
        t = Date.now();
        tick();
    },
    1000
);







function drawPath(path) {
    const posns = [];
        
    for (let i = 1; i < path.length; i++) {
        posns.push(
            ...path[i - 1].position.toArray(),
            ...path[i].position.toArray()
        );
    }

    const pathGeom = new THREE.BufferGeometry();
    pathGeom.setAttribute('position', new THREE.BufferAttribute(new Float32Array(posns), 3));
    const pathMesh = new THREE.LineSegments(pathGeom, new THREE.LineBasicMaterial({ color: 0x33ff33 }));
    
    return pathMesh;
}