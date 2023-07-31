import * as THREE from 'three';



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


window.onresize = function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
};


const spotlight = new THREE.SpotLight(0xffffff, 1, 0, Math.PI / 7, 0.5, 5);
camera.add(spotlight);
spotlight.position.set(0, 0, 1);
spotlight.target = camera;

const ambientLight = new THREE.AmbientLight(0xffffff, 0.05);
scene.add(ambientLight);


const texture = new THREE.TextureLoader().load('/asteroid_texture.png');
texture.colorSpace = THREE.SRGBColorSpace;

export const blockMaterial = new THREE.MeshLambertMaterial({
    map: texture,
    //bumpMap: texture,
    //bumpScale: 1
});



export default class Renderer {
    constructor(lattice) {
        this.lattice = lattice;
        scene.add(this.lattice.blockMesh);
    }

    registerCameraControls(latticeCell, controls) {
        camera.position.set(latticeCell.x, latticeCell.y, latticeCell.z);

        this.controls = controls;
    }

    render(dt) {
        if (this.controls.moving) {
            const { x, y, force } = this.controls.moving;
            const vec = new THREE.Vector3(x, y, 0).multiplyScalar(dt * Math.max(force, 1) / 1000);
            camera.translateX(vec.x);
            camera.translateZ(-vec.y);
        }

        if (this.controls.looking) {
            const { x, y, force } = this.controls.looking;
            const vec = new THREE.Vector3(x, y, 0).multiplyScalar(dt * Math.max(force, 1) / 1000);
            camera.rotateX(vec.y);
            camera.rotateY(-vec.x);
        }

        camera.updateMatrix();

        renderer.render(scene, camera);
    }
}