import * as THREE from 'three';
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';

import { RHOMBIC_FACES_2D, RHOMBIC_UVS_2D, RHOMBIC_VERTICES } from '../../geometries/rhombicdodecahedron.js';

const tmpVec3 = new THREE.Vector3();


const GRID_DIRECTIONS = [
    [1, 1, 0],
    [1, 0, 1],
    [1, -1, 0],
    [1, 0, -1],

    [-1, -1, 0],
    [-1, 0, 1],
    [-1, 1, 0],
    [-1, 0, -1],

    [0, 1, 1],
    [0, 1, -1],
    [0, -1, 1],
    [0, -1, -1]
];



class GridCell {
    filled = true;

    constructor(posn) {
        this.position = posn;
    }

    findNeighbours(cells) {
        this.neighbours = [];

        const dirs = GRID_DIRECTIONS.map(
            gdir => tmpVec3.set(...gdir).multiplyScalar(2).add(this.position).clone()
        );

        cells.forEach(
            cell => {
                const idx = dirs.findIndex(
                    dir => dir.equals(cell.position)
                );

                if (idx >= 0) {
                    this.neighbours[idx] = cell;
                }
            }
        )
    }
}


const CAVESCALE = 25;


export default function generateCave(
    size = 5
) {
    const grid = generateGrid(size);

    console.log(grid);

    generateTunnel(grid);

    const geometry = generateGeometry(grid);

    geometry.scale(CAVESCALE, CAVESCALE, CAVESCALE);

    return geometry;
}



function generateGrid(
    size
) {
    const cells = [];

    const idir = new THREE.Vector3(2, 0, 2);
    const jdir = new THREE.Vector3(2, 2, 0);
    const kdir = new THREE.Vector3(-2, 0, 2);

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            for (let k = 0; k < size; k++) {
                cells.push(
                    new GridCell(
                        (new THREE.Vector3())
                        .add(idir.clone().multiplyScalar(i))
                        .add(jdir.clone().multiplyScalar(j))
                        .add(kdir.clone().multiplyScalar(k))
                    )
                );
            }
        }
    }

    cells.forEach(cell => cell.findNeighbours(cells));

    return cells;
}


function generateTunnel(grid) {
    let cursor = grid[0];
    const visited = [];
    
    function advanceCursor() {
        cursor.filled = false;
        if (visited.indexOf(cursor) < 0) visited.push(cursor);
        
        const valid = cursor.neighbours.filter(
            // check each direct neighbour
            neighbour => neighbour.filled/*  && !neighbour.isOutside  */
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
}


function generateGeometry(grid) {
    const geometries = [];

    grid.forEach(
        cell => {
            if (!cell.filled) {
                const vertices = RHOMBIC_VERTICES;
                const faces = RHOMBIC_FACES_2D.slice();

                const openDirections = [];
                
                cell.neighbours.forEach(
                    (neighbour, nidx) => {
                        if (neighbour && !neighbour.filled) {
                            openDirections.push(nidx);
                        }
                    }
                );

                openDirections.sort().reverse().forEach(
                    fidx => faces.splice(fidx, 1)
                );

                const indexedgeometry = new THREE.BufferGeometry();
                indexedgeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
                indexedgeometry.setIndex(faces.flat());


                const uvs = [];

                faces.forEach(
                    face => {
                        const uvNum = 2;//Math.floor(Math.random() * RHOMBIC_UVS_2D.length);

                        uvs.push(
                            ...RHOMBIC_UVS_2D[uvNum]
                        );
                    }
                );

                const geometry = indexedgeometry.toNonIndexed();
                geometry.computeVertexNormals();
                geometry.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(uvs), 2));
                geometry.computeBoundsTree();

                geometry.translate(...cell.position.toArray());

                geometries.push(geometry);
            }
        }
    );

    return BufferGeometryUtils.mergeGeometries(geometries);
}
