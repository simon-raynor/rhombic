import * as THREE from 'three';
import GameObject from './GameObject.js';
import { createRhombic } from './geometries/rhombicdodecahedron.js';


const texture = new THREE.TextureLoader().load('/img/wall-atlas.png');
const texturebump = new THREE.TextureLoader().load('/img/wall-atlas-bumps.png');

export const blockMaterial = new THREE.MeshLambertMaterial({
    map: texture,
    bumpMap: texturebump,
    bumpScale: 0.05
});


export default class Lattice extends GameObject {
    constructor(height, width, depth) {
        super(new THREE.Vector3(0, 0, 0));

        this.height = height;
        this.width = width;
        this.depth = depth;

        this.total = height * width * depth;

        this.cells = [];

        for (let idx = 0; idx < this.total; idx++) {
            this.cells.push(new LatticeCell(this, idx));
        }

        this.cells.forEach(cell => cell.setNeigbours());
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

    createMesh() {
        this.mesh = new THREE.InstancedMesh(
            createRhombic(),
            blockMaterial,
            this.total
        );
        this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);


        const dummy = new THREE.Object3D();

        let blockCount = 0;
        this.cells.forEach(
            cell => {
                dummy.position.set(cell.x, cell.y, cell.z);
                dummy.updateMatrix();

                if (cell.filled) {
                    this.mesh.setMatrixAt(blockCount, dummy.matrix);
                    //this.mesh.setColorAt(blockCount, new THREE.Color(0xffffff));
                    blockCount++;
                }

            }
        );

        // hide the remaining instances
        dummy.position.set(-10000, -10000, -10000);
        dummy.updateMatrix();
        
        let i = blockCount;

        while (i < this.total) {
            this.mesh.setMatrixAt(i++, dummy.matrix);
        }

        this.mesh.instanceMatrix.needsUpdate = true;
        //this.mesh.instanceColor.needsUpdate = true;
        this.mesh.computeBoundingSphere();
    }

    addToScene(scene) {
        GameObject.prototype.addToScene.call(this, scene);

        this.addLighting(scene);
    }


    #_firstInside
    get firstInside() {
        let firstInside = this.cells[0];

        while (firstInside.isOutside) {
            firstInside = this.cells[firstInside.idx + 1];
        }

        return firstInside;
    }

    addLighting(scene) {
        const ends = this.cells.filter(
            cell => {
                if (!cell.filled) {
                    const count = cell.neighbours.reduce((m, n) => n.filled ? m : m + 1, 0);
                    
                    return count === 1;
                }
            }
        );

        ends.forEach(
            cell => {
                const pointlight = new THREE.PointLight(0xff0088, 1, 5, 2);
                pointlight.position.set(cell.x, cell.y - 0.25, cell.z - 0.5);
                scene.add(pointlight);
            }
        )
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



