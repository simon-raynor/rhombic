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
//scene.add(cave.mesh);


const wf = new THREE.WireframeGeometry(cave.mesh.geometry);
const line = new THREE.LineSegments(wf);
scene.add(line);


/* const veg = generateVegetation(cave);
scene.add(veg); */


const tmpPosn = new THREE.Vector3(),
    tmpNormal = new THREE.Vector3();


const points = [],
    normals = [],
    edges = [];

cave.pfNodes.forEach(
    node => {
        points.push(...node.posn.toArray());
        normals.push(...tmpNormal.copy(node.normal).add(node.posn).toArray());
        node.edges.forEach(
            edge => {
                edges.push(
                    ...node.posn.toArray(),
                    ...edge.posn.toArray()
                );
            }
        )
    }
)

const egGeom = new THREE.BufferGeometry();
egGeom.setAttribute('position', new THREE.BufferAttribute(new Float32Array(edges), 3));
const egMesh = new THREE.LineSegments(egGeom, new THREE.LineBasicMaterial({ color: 0x2222ff }));

const ptGeom = new THREE.BufferGeometry();
ptGeom.setAttribute('position', new THREE.BufferAttribute(new Float32Array(points), 3));
const ptMesh = new THREE.Points(ptGeom, new THREE.PointsMaterial({ color: 0xff0000 }));

const nmGeom = new THREE.BufferGeometry();
nmGeom.setAttribute('position', new THREE.BufferAttribute(new Float32Array(normals), 3));
const nmMesh = new THREE.Points(nmGeom, new THREE.PointsMaterial({ color: 0x00ff00 }));

scene.add(egMesh, ptMesh/* , nmMesh */);

/* 
const tmpVec3A = new THREE.Vector3(),
    tmpVec3B = new THREE.Vector3(),
    tmpVec3C = new THREE.Vector3();

const triangle = new THREE.Triangle(),
    tmpPosn = new THREE.Vector3(),
    tmpNormal = new THREE.Vector3();


class Pathfinder {
    constructor(geometry) {
        this.nodes = [];

        const points = [],
            normals = [],
            edges = [];

        for (let i = 0; i < geometry.attributes.position.count; i += 3) {
            tmpVec3A.fromBufferAttribute(geometry.attributes.position, i);
            tmpVec3B.fromBufferAttribute(geometry.attributes.position, i + 1);
            tmpVec3C.fromBufferAttribute(geometry.attributes.position, i + 2);

            triangle.set(tmpVec3A, tmpVec3B, tmpVec3C);
            triangle.getMidpoint(tmpPosn);
            triangle.getNormal(tmpNormal);

            this.nodes.push(
                new PFNode(this, tmpPosn, tmpNormal)
            );

            points.push(...tmpPosn.toArray());
            normals.push(...tmpNormal.negate().add(tmpPosn).toArray());


        }

        const segments = this.nodes.map(
            node => node.edges.map(
                other => [
                    ...node.position.toArray(),
                    ...other.position.toArray()
                ]
            ).flat()
        ).flat();

        const egGeom = new THREE.BufferGeometry();
        egGeom.setAttribute('position', new THREE.BufferAttribute(new Float32Array(segments), 3));

        this.egMesh = new THREE.LineSegments(egGeom, new THREE.LineBasicMaterial({ color: 0x2222ff }));
        
        const ptGeom = new THREE.BufferGeometry();
        ptGeom.setAttribute('position', new THREE.BufferAttribute(new Float32Array(points), 3));

        const ptMat = new THREE.PointsMaterial({ color: 0xff0000 });

        this.ptMesh = new THREE.Points(ptGeom, ptMat);
    }
}


class PFNode {
    constructor(finder, position, normal) {
        this.position = position.clone();
        this.normal = normal.clone();

        this.edges = finder.nodes.filter(
            n => {
                if (this.position.distanceTo(n.position) < 15) {
                    n.edges.push(this);
                    return true;
                }
            }
        );
    }
}




const pf = new Pathfinder(cave.mesh.geometry);

scene.add(pf.ptMesh, pf.egMesh);

console.log(pf)
 */






const pillslug = new Pillslug(cave.centre);
scene.add(pillslug.mesh);



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

/* towers.push(centreTower);

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
); */



const particlePathManager = new ParticlePath();

//scene.add(particlePathManager.mesh);

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



pillslug.registerTargets(towers);














const controls = new OrbitControls( camera, renderer.domElement );
camera.position.set(0, 30, -60);
controls.target = pillslug.position;
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

    controls.update();

    //renderer.render(scene, camera);
    composer.render();

}

function tickGame(dt) {
    trider.tick(dt, cave.mesh, moving);

    pillslug.tick(dt);

    towers.forEach(t => t.tick(dt, trider));

    particlePathManager.tick(dt);
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


for (let i = 0; i <= 100; i++) {
    tickGame(1);
}

moving.force = 1;


setTimeout(
    () => {
        t = Date.now();
        tick();
    },
    1000
);




