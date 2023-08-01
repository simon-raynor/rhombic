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


const spotlight = new THREE.SpotLight(0xffffff, 1, 25, Math.PI / 7, 0.5, 10);
camera.add(spotlight);
spotlight.position.set(0, 0, 1);
spotlight.target = camera;

const ambient = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambient);


const texture1 = new THREE.TextureLoader().load('/img/wall-text.png');
const texture2 = new THREE.TextureLoader().load('/img/wall-bump.png');

export const blockMaterial = new THREE.MeshLambertMaterial({
    map: texture1,
    bumpMap: texture2,
    bumpScale: 0.05
});

const pointMaterial = new THREE.PointsMaterial();
pointMaterial.color = 0xffcc00;
pointMaterial.sizeAttenuation = false;

const raycaster = new THREE.Raycaster();
raycaster.firstHitOnly = true;

const color = new THREE.Color(0xff0000);


export default class Renderer {
    constructor(lattice) {
        this.lattice = lattice;
        scene.add(this.lattice.blockMesh);
    }

    registerCameraControls(latticeCell, controls) {
        camera.position.set(latticeCell.x, latticeCell.y, latticeCell.z);

        this.controls = controls;


        const ends = this.lattice.cells.filter(
            cell => {
                if (!cell.filled) {
                    const count = cell.neighbours.reduce((m, n) => n.filled ? m : m + 1, 0);
                    
                    return count === 1;
                }
            }
        );

        /* ends.forEach(
            cell => {
                const pointlight = new THREE.PointLight(0xff0088, 1, 5, 2);
                pointlight.position.set(cell.x, cell.y, cell.z);
                scene.add(pointlight);
            }
        ) */
    }

    render(dt) {
        if (this.controls.moving) {
            const { x, y, force } = this.controls.moving;
            const vec = new THREE.Vector3(x, y, 0).multiplyScalar(dt * Math.min(force, 1) / 750);
            camera.translateX(vec.x);
            camera.translateZ(-vec.y);
        }

        if (this.controls.looking) {
            const { x, y, force } = this.controls.looking;
            const vec = new THREE.Vector3(x, y, 0).multiplyScalar(dt * Math.min(force, 1) / 500);
            camera.rotateX(vec.y);
            camera.rotateY(-vec.x);
        }

        raycaster.set(
            (new THREE.Vector3()).copy(camera.position),
            new THREE.Vector3(0,0,-1).applyEuler(camera.rotation)
        );
        const intersects = raycaster.intersectObjects(scene.children);
        console.log(intersects);
        if (intersects.length) {
            const { object, instanceId } = intersects[0];
            object.setColorAt(instanceId, color);
            object.instanceColor.needsUpdate = true;
        }

        camera.updateMatrix();

        renderer.render(scene, camera);
    }
}