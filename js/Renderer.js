import * as THREE from 'three';
import { FlyControls } from 'three/addons/controls/FlyControls.js';



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.05,
    100
);
camera.lookAt(1, 1, 1);
scene.add(camera);


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.pixelRatio = window.devicePixelRatio;
document.body.appendChild(renderer.domElement);


const flyControls = new FlyControls(camera, renderer.domElement)
//flyControls.dragToLook = true;
flyControls.movementSpeed = 2;
flyControls.rollSpeed = Math.PI / 4;
flyControls.autoForward = false;

const spotlight = new THREE.SpotLight(0xffffff, 1, 0, Math.PI / 7, 0.5, 5);
camera.add(spotlight);
spotlight.position.set(0, 0, 1);
spotlight.target = camera;

const ambientLight = new THREE.AmbientLight(0xffffff, 0.05);
scene.add(ambientLight);


//const texture = new THREE.TextureLoader().load('/img/textures/noise_greyscale_3.png');

export const blockMaterial = new THREE.MeshLambertMaterial({
    //bumpMap: texture,
    //bumpScale: 1
});



export default class Renderer {
    constructor(lattice) {
        this.lattice = lattice;
        scene.add(this.lattice.blockMesh);
    }

    registerCameraControls(latticeCell) {
        camera.position.set(latticeCell.x, latticeCell.y, latticeCell.z);
    }

    render(dt) {
        flyControls.update(dt / 1000);

        renderer.render(scene, camera);
    }
}