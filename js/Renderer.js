import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';



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


const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(-2, 1, 3).normalize();
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

/* const fog = new THREE.Fog(0x000000, 30, 50);
scene.fog = fog; */

const axesHelper = new THREE.AxesHelper( 64 );
scene.add( axesHelper );


const blockMaterial = new THREE.MeshLambertMaterial({
    color: 0x99aacc,
    transparent: true,
    opacity: 0.1,
});

const spaceMaterial = new THREE.MeshLambertMaterial({
    color: 0xff0000,
    transparent: true,
    opacity: 0.5
});


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


export default class Renderer {
    constructor(lattice) {
        this.lattice = lattice;

        const rhombic = createRhombic();

        this.blockMesh = new THREE.InstancedMesh(
            rhombic,
            blockMaterial,
            this.lattice.total
        );
        this.blockMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
        scene.add(this.blockMesh);

        this.spaceMesh = new THREE.InstancedMesh(
            rhombic,
            spaceMaterial,
            this.lattice.total
        );
        this.spaceMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
        scene.add(this.spaceMesh);

        this.fillLatticeMesh();

        camera.position.x = lattice.width;
        camera.position.y = 3 * lattice.height;
        camera.position.z = lattice.depth;
        controls.target = new THREE.Vector3(lattice.width, lattice.height, lattice.depth);
        controls.update();
    }

    fillLatticeMesh() {
        const dummy = new THREE.Object3D();

        let blockCount = 0;
        let spaceCount = 0;
        this.lattice.cells.forEach(
            cell => {
                dummy.position.set(cell.x, cell.y, cell.z);
                dummy.updateMatrix();

                if (cell.filled) {
                    this.blockMesh.setMatrixAt(blockCount, dummy.matrix);
                    //this.blockMesh.setColorAt(blockCount, new THREE.Color(cell.x / 10, cell.y / 10, cell.z / 10));
                    blockCount++;
                } else {
                    this.spaceMesh.setMatrixAt(spaceCount, dummy.matrix);
                    spaceCount++;
                }

            }
        );
        console.log(blockCount, spaceCount, blockCount + spaceCount)

        // hide the remaining instances
        dummy.position.set(-10000, -10000, -10000);
        dummy.updateMatrix();
        
        let i = blockCount;

        while (i < this.lattice.total) {
            this.blockMesh.setMatrixAt(i++, dummy.matrix);
        }

        let j = spaceCount;

        while (j < this.lattice.total) {
            this.spaceMesh.setMatrixAt(j++, dummy.matrix);
        }

        this.blockMesh.instanceMatrix.needsUpdate = true;
        //this.blockMesh.instanceColor.needsUpdate = true;
        this.blockMesh.computeBoundingSphere();

        this.spaceMesh.instanceMatrix.needsUpdate = true;
        this.spaceMesh.computeBoundingSphere();
    }

    render() {
        controls.update();
        renderer.render(scene, camera);
    }
}