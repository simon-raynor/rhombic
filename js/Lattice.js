import * as THREE from 'three';
import { blockMaterial } from "./Renderer.js";

export default class Lattice {
    constructor(height, width, depth) {
        this.height = height;
        this.width = width;
        this.depth = depth;

        this.total = height * width * depth;

        this.cells = [];

        for (let idx = 0; idx < this.total; idx++) {
            this.cells.push(new LatticeCell(this, idx));
        }

        this.cells.forEach(cell => cell.setNeigbours());

        // create the mesh for THREE.js
        const rhombic = createRhombic();

        this.blockMesh = new THREE.InstancedMesh(
            rhombic,
            blockMaterial,
            this.total
        );
        this.blockMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

        this.buildMesh();
    }

    idxToXYZ(idx) {
        if (idx < 0 || idx >= this.total) return null;
    
        const k = Math.floor(idx / (this.depth * this.height));
        const j = Math.floor((idx - (k * this.depth * this.height)) / this.height);
        const i = idx - (k * this.depth * this.height) - (j * this.height);
    
        return [
            2 * ((i * 2) + (j % 2)),
            2 * (j + (k % 2)),
            2 * k
        ];
    }

    buildMesh() {
        const dummy = new THREE.Object3D();

        let blockCount = 0;
        this.cells.forEach(
            cell => {
                dummy.position.set(cell.x, cell.y, cell.z);
                dummy.updateMatrix();

                if (cell.filled) {
                    this.blockMesh.setMatrixAt(blockCount, dummy.matrix);
                    //this.blockMesh.setColorAt(blockCount, new THREE.Color(cell.x / 10, cell.y / 10, cell.z / 10));
                    blockCount++;
                }

            }
        );

        // hide the remaining instances
        dummy.position.set(-10000, -10000, -10000);
        dummy.updateMatrix();
        
        let i = blockCount;

        while (i < this.total) {
            this.blockMesh.setMatrixAt(i++, dummy.matrix);
        }

        this.blockMesh.instanceMatrix.needsUpdate = true;
        //this.blockMesh.instanceColor.needsUpdate = true;
        this.blockMesh.computeBoundingSphere();
    }
}



const directions = [
    [0,1,-1],
    [0,-1,-1],
    [1,0,-1],
    [1,-1,0],
    [1,0,1],
    [1,1,0],

    [0,-1,1],
    [0,1,1],
    [-1,0,1],
    [-1,1,0],
    [-1,0,-1],
    [-1,-1,0]
].map(dir => dir.map(v => v * 2));

class LatticeCell {
    // define these here so they're 1st in devtools
    x;
    y;
    z;
    constructor(lattice, idx) {
        this.lattice = lattice;
        this.idx = idx;

        this.filled = true;
        this.exhausted = false;

        this.setXYZ();
    }

    setXYZ() {
        const [x ,y ,z] = this.lattice.idxToXYZ(this.idx);
        // sets this.x, this.y, this.z
        Object.assign(
            this,
            { x, y, z }
        );
    }

    setNeigbours() {
        this.neighbours = [];

        directions.forEach(
            dir => {
                const {x, y, z} = this;
                const [dx, dy, dz] = dir;

                const [tx, ty, tz] = [x + dx, y + dy, z + dz];

                const target = this.lattice.cells.find(({x, y, z}) => x === tx && y === ty && z ==tz);

                if (target) this.neighbours.push(target);
            }
        );

        this.isOutside = this.neighbours.length !== directions.length;
    }
}



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

    
    // --- uv for textures --- //
    const uvs = new Float32Array([
        0,0, 1,0, 0,1
    ]);
    indexedgeometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    // --- end uv --- //
    

    return geometry;
}