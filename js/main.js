// add the bvh collision methods to the THREE classes
import './three-extended.js';
import * as THREE from 'three';

import Stats from 'three/addons/libs/stats.module.js';

import Controls from './Controls.js';
import Lattice from './Lattice.js';
import Player from './Player.js';


const stats = new Stats();
document.body.appendChild( stats.dom )


const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.pixelRatio = window.devicePixelRatio;
document.body.appendChild(renderer.domElement);

window.addEventListener(
    'resize',
    () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
);

/* const testbox = new THREE.Mesh(new THREE.BoxGeometry(1,1,1), new THREE.MeshLambertMaterial({color: 0xff0088}));
testbox.position.set(0, 0, -1)
scene.add(
    testbox
); */

//scene.add(new THREE.AmbientLight(0xffffff, 0.5))
const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );


const lattice = new Lattice(5, 10, 10);
const { firstInside } = lattice;

const controls = new Controls();

const player = new Player(new THREE.Vector3(firstInside.x, firstInside.y, firstInside.z));
player.registerControls(controls);
player.addToScene(scene);


let cursor = firstInside;
const visited = [];

function advanceCursor() {
    cursor.filled = false;
    if (visited.indexOf(cursor) < 0) visited.push(cursor);
    
    const valid = cursor.neighbours.filter(
        // check each direct neighbour
        neighbour => neighbour.filled && !neighbour.isOutside 
            && neighbour.neighbours.every(
                // then each of their neighbours
                neighbour2 => neighbour2 === cursor || neighbour2.filled
            )
    );

    if (valid.length) {
        return valid[Math.floor(Math.random() * valid.length)];
    } else {
        visited.splice(visited.indexOf(cursor), 1);

        return visited.length
            ? visited[Math.floor(visited.length * Math.random())]
            : null;
    }
}

while (cursor) {
    cursor = advanceCursor();
}
lattice.addToScene(scene);


let t = Date.now();

function tick() {
    requestAnimationFrame(tick);

    const now = Date.now();
    const dt = now - t;
    t = now;

    player.tick(dt, scene.children);

    renderer.render(scene, player.camera);

    stats.update();
}
tick();


console.log(lattice, player);