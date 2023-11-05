import * as THREE from 'three';
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';
import { LoopSubdivision } from 'three-subdivide';

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

    generateTunnel(grid);

    const geometry = generateGeometry(grid);

    geometry.scale(CAVESCALE, CAVESCALE, CAVESCALE);

    return geometry;
    //return smoothGeometry(geometry);
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
            neighbour => neighbour.filled
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


// used to inset vertices for smoothing (prevents
// nastiness when cells are corner-to-corner)
//const INSET_FACTOR = 0.75;
const INSET_FACTOR = 1;

function generateGeometry(grid) {
    const geometries = [];

    grid.forEach(
        cell => {
            if (!cell.filled) {
                const vertices = RHOMBIC_VERTICES.slice();
                const faces = RHOMBIC_FACES_2D.slice();

                // used to indicate which vertices are
                // around the openings, so that we don't
                // move them away from the adjoining cell
                const holeVertices = new Set();

                // check each neighbour, if it's open we
                // need to flag that face for removal
                // N.B. this works because the directions
                //      are in the same order as the faces
                const openDirections = [];
                
                cell.neighbours.forEach(
                    (neighbour, nidx) => {
                        if (neighbour && !neighbour.filled) {
                            openDirections.push(nidx);
                        }
                    }
                );

                // remove the open faces while logging their
                // vertices so that we can leave portals to
                // match up between cells
                openDirections.sort().reverse().forEach(
                    fidx => {
                        const toRemove = RHOMBIC_FACES_2D[fidx];
                        toRemove.forEach(vidx => holeVertices.add(vidx))
                        faces.splice(fidx, 1);
                    }
                );

                if (INSET_FACTOR !== 1) {
                    for (let i = 0, l = 14; i < l; i++) {
                        if (!holeVertices.has(i)) {
                            const n = i * 3;
                            vertices[n] = vertices[n] * INSET_FACTOR;
                            vertices[n + 1] = vertices[n + 1] * INSET_FACTOR;
                            vertices[n + 2] = vertices[n + 2] * INSET_FACTOR;
                        }
                    }
                }


                // start creating the THREE geometry
                const indexedgeometry = new THREE.BufferGeometry();
                indexedgeometry.setAttribute(
                    'position',
                    new THREE.BufferAttribute(new Float32Array(vertices), 3)
                );
                indexedgeometry.setIndex(faces.flat());


                // apply (different) uvs for the faces
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


                // move cell into position
                geometry.translate(...cell.position.toArray());

                geometries.push(geometry);
            }
        }
    );

    // return all of them merged together, should be nice
    // and neat with no overlapping anything, no interior
    // walls just a nice clean "cave"
    return BufferGeometryUtils.mergeGeometries(geometries);
}


function smoothGeometry(geometry) {

    // TODO: detect vertices that are common without a
    //      shared edge and separate them slightly?
    //      INSET_FACTOR can do that but ideally can
    //      find a way to just fix the ones that go all
    //      pointy

    return LoopSubdivision.modify(
        geometry,
        0,
        {
            split: false,
            preserveEdges: true
        }
    );
}