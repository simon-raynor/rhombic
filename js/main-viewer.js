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



const CAVEDIMENSION = 3;

const cave = new Cave(CAVEDIMENSION);
scene.add(cave.mesh);


/* const ppath = new ParticlePath(paths[0])
scene.add(ppath.mesh);
ppath.tick(0); */

const veg = generateVegetation(cave);
scene.add(veg);



const towers = [];

cave.cells.forEach(
    cell => {
        if (Math.random() > 0.25) {
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



// NOTE: this is bad and should be instanced somehow,
//      probably via datatextures and custom shaders
const towerpaths = [];
/* 
try {
    for(let i = 0; i < towers.length - 1; i++) {
        for(let j = 1; j < towers.length; j++) {
            const towerA = towers[i];
            const towerB = towers[j];

            if (towerA !== towerB) {
                const path = new THREE.CatmullRomCurve3(towerA.getPathTo(towerB));
                path.updateArcLengths();

                const ppath = new ParticlePath(path);
                ppath.tick(0);
                towerpaths.push(ppath);
            }
        }
    }

    towerpaths.map(
        tp => scene.add(tp.mesh)
    );
} catch (ex) { console.error(ex); } */

const TEXTURE_WIDTH = 256;
const TEXTURE_HEIGHT = towers.length - 1;
const TEXTURE_CHANNELS = 4;

const curvesdata = new Float32Array( TEXTURE_WIDTH * TEXTURE_HEIGHT * TEXTURE_CHANNELS );
const curvestexture = new THREE.DataTexture(curvesdata, TEXTURE_WIDTH, TEXTURE_HEIGHT, THREE.RGBAFormat, THREE.FloatType);

const path = new THREE.CatmullRomCurve3(towers[0].getPathTo(towers[1]));
path.updateArcLengths();

function setTextureValue(index, x, y, z, c) {
    const image = curvestexture.image;
    const { width, height, data } = image;
    const row = TEXTURE_CHANNELS * TEXTURE_WIDTH * c;
    data[index * TEXTURE_CHANNELS + row] = x;
    data[index * TEXTURE_CHANNELS + row + 1] = y;
    data[index * TEXTURE_CHANNELS + row + 2] = z;
    data[index * TEXTURE_CHANNELS + row + 3] = 1;
}

const particles = [];
const colors = [];
const offsets = [];
const curveNos = [];

const tmpVec3 = new THREE.Vector3();
const tmpColor = new THREE.Color(0x0000ff);

for(let j = 1; j < towers.length; j++) {
    const towerA = towers[0];
    const towerB = towers[j];

    if (towerA !== towerB) {
        const path = new THREE.CatmullRomCurve3(towerA.getPathTo(towerB));
        path.updateArcLengths();

        path.getSpacedPoints(256).forEach(
            (point, idx) => {
                particles.push(...tmpVec3.randomDirection().toArray());
                colors.push(...tmpColor.setHSL(Math.random(), 1, 0.55).toArray());
                offsets.push(idx/256);
                curveNos.push((j - 0.5) / TEXTURE_HEIGHT);
                setTextureValue(
                    idx,
                    point.x,
                    point.y,
                    point.z,
                    j - 1
                );
            }
        );
    }
}

curvestexture.needsUpdate = true;

const curvesuniforms = {
    t: { value: 0, type: 'f' },
    curvetexture: { value: curvestexture },
};

const curvesmaterial = new THREE.ShaderMaterial({
    uniforms: curvesuniforms,
    vertexShader: `
    uniform sampler2D curvetexture;
    uniform float t;

    attribute float offset;
    attribute float curveNo;

    varying vec3 vColor;

    void main() {
        vColor = color;

        float my_t = mod(t + offset, 1.0);

        vec3 curve_posn = texture2D(curvetexture, vec2(my_t, curveNo)).xyz;

        vec3 moved_posn = position + curve_posn;

        vec4 mvPosition = modelViewMatrix * vec4(moved_posn, 1.0);

        gl_PointSize = ( 50.0 / -mvPosition.z );

        gl_Position = projectionMatrix * mvPosition;
    }
    `,
    fragmentShader: `
    varying vec3 vColor;

    void main() {
        gl_FragColor = vec4( vColor, 1.0 );
    }
    `,
    depthTest: true,
    vertexColors: true
});

const points = new THREE.BufferGeometry();
points.setAttribute(
    'position',
    new THREE.BufferAttribute( new Float32Array(particles), 3 )
);
points.setAttribute(
    'color',
    new THREE.BufferAttribute( new Float32Array(colors), 3 )
);
points.setAttribute(
    'offset',
    new THREE.BufferAttribute( new Float32Array(offsets), 1 )
);
points.setAttribute(
    'curveNo',
    new THREE.BufferAttribute( new Float32Array(curveNos), 1 )
);

const cmesh = new THREE.Points(
    points,
    curvesmaterial
);

scene.add(cmesh);















scene.add(trider.mesh);

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

function tick() {
    const nextframe = requestAnimationFrame(tick);

    const now = Date.now();
    const dt = (now - t) / (1000 * slowfactor);
    t = now;

    if (dt >= 1) {
        pause(nextframe);
    }

    stats.update();

    curvesuniforms.t.value += dt / 20;

    //ppath.tick(dt);

    trider.tick(dt, cave.mesh, moving);

    towers.forEach(t => t.tick(dt, trider));
    towerpaths.forEach(t => t.tick(dt));

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




