import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import cells from './generate.js';
import { idxToXYZ, xyzToIdx } from './geometry.js';
import { total } from './config.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const controls = new OrbitControls(camera, renderer.domElement);
camera.position.z = 25;
controls.target = new THREE.Vector3(20, 20, 10);
controls.update();


const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(-1, 0, 1).normalize();
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);



const wallMaterial = new THREE.MeshLambertMaterial({
    color: 0x99aacc,
    transparent: true,
    opacity: 0.1
});

const spaceMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 });


const boxes = [];

for (let i = 0; i < total; i++) {
    const [x, y, z] = idxToXYZ(i);

    const geometry = createRhombic();

    const box = new THREE.Mesh(geometry, wallMaterial);

    box.position.set(
        x, y, z
    );

    scene.add(box);
    boxes.push(box);
}



function animate() {
    requestAnimationFrame(animate);

    controls.update();

    boxes.forEach(
        (box, idx) => {
            if (cells[idx]) {
                box.material = spaceMaterial;
            }
        }
    )

    renderer.render(scene, camera);
}
animate();






function createRhombic() {
    const indexedgeometry = new THREE.BufferGeometry();

    const vertices = new Float32Array([
        1,1,1, 1,1,-1, 1,-1,1, 1,-1,-1,
        -1,1,1, -1,1,-1, -1,-1,1, -1,-1,-1,
        2,0,0, 0,2,0, 0,0,2,
        -2,0,0, 0,-2,0, 0,0,-2
    ]);
    const faces = [
        0,8,1, 2,8,0, 3,8,2, 1,8,3,
        0,1,9, 2,0,10, 3,2,12, 1,3,13,

        7,6,11, 6,4,11, 4,5,11, 5,7,11,
        7,12,6, 6,10,4, 4,9,5, 5,13,7,

        0,4,10, 4,0,9, 1,5,9, 5,1,13,
        2,6,12, 6,2,10, 3,7,13, 7,3,12
    ];

    indexedgeometry.setIndex(faces);
    indexedgeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));


    const geometry = indexedgeometry.toNonIndexed();
    geometry.computeVertexNormals();

    return geometry;
}