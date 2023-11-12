import * as THREE from 'three';
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';
import { LoopSubdivision } from 'three-subdivide';

import { RHOMBIC_FACES_2D, RHOMBIC_UVS_2D, RHOMBIC_VERTICES } from '../../geometries/rhombicdodecahedron.js';

const tmpVec3 = new THREE.Vector3();





const texture = new THREE.TextureLoader().load('/img/wall-atlas.png');
const texturebump = new THREE.TextureLoader().load('/img/wall-atlas-bumps.png');

texture.wrapS = THREE.RepeatWrapping;
texture.repeat.x = -1;
texturebump.wrapS = THREE.RepeatWrapping;
texturebump.repeat.x = -1;

export const blockMaterial = new THREE.MeshLambertMaterial({
    map: texture,
    /* bumpMap: texturebump,
    bumpScale: 0.05, */
    //side: THREE.DoubleSide, // double side for collisions
    side: THREE.BackSide,
    transparent: false
});

export const redMaterial = new THREE.MeshLambertMaterial({
    color: 0xff0000,
    emissive: 0x880000,
    /* opacity: 0.5,
    transparent: true, */
    side: THREE.DoubleSide
});



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

    #openings = [];

    set openings(indexes) {
        this.#openings = [...indexes];
    }

    get openings() {
        return this.#openings.map(idx => this.neighbours[idx]);
    }
}


const CAVESCALE = 25;


export default function generateCave(
    size = 5
) {
    const grid = generateGrid(size);

    const tunnel = generateTunnel(grid);

    const geometry = generateGeometry(tunnel);
    geometry.scale(CAVESCALE, CAVESCALE, CAVESCALE);
    const cavemesh = new THREE.Mesh(
        smoothGeometry(geometry),
        blockMaterial
    );

    
    const deadends = [];
    tunnel.forEach(
        cell => {
            if (cell.openings.length === 1) {
                const light = new THREE.PointLight( 0xff0000, 1, CAVESCALE * 3, 4 );
                light.position.copy(cell.position).multiplyScalar(CAVESCALE);

                cavemesh.add(light);

                deadends.push(cell);
            }
        }
    );

    const paths = [];

    /* for (let i = 0; i < deadends.length; i++) {
        const path = generatePath(
            deadends[i],
            deadends[(i + 1) % deadends.length]
        );
        paths.push(path);
    } */
    for (let i = 0; i < deadends.length - 1; i++) {
        const path = generatePath(
            deadends[0],
            deadends[i + 1]
        );
        paths.push(path);
    }

    
    return [cavemesh, paths];
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

    const tunnel = grid.filter(({filled}) => !filled);

    // give em an ID so easier to debug
    tunnel.forEach((cell, idx) => cell.id = idx);

    return tunnel;
}


// used to inset vertices for smoothing (prevents
// nastiness when cells are corner-to-corner)
//const INSET_FACTOR = 0.75;
const INSET_FACTOR = 2 / 3;

function generateGeometry(tunnel) {
    const geometries = [];

    tunnel.forEach(
        cell => {
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

            // assign this now that it's been calculated
            cell.openings = openDirections;

            // remove the open faces while logging their
            // vertices so that we can leave portals to
            // match up between cells
            openDirections.forEach(
                fidx => {
                    const toRemove = RHOMBIC_FACES_2D[fidx];
                    toRemove.forEach(vidx => holeVertices.add(vidx));
                    faces[fidx] = null;
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
            indexedgeometry.setIndex(faces.filter(Boolean).flat());


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
    );

    // return all of them merged together, should be nice
    // and neat with no overlapping anything, no interior
    // walls just a nice clean "cave"
    return BufferGeometryUtils.mergeGeometries(geometries);
}


function generatePath(start, end) {

    const pathCells = findPath(start, end);

    const path = new THREE.CurvePath();
    
    const prev = new THREE.Vector3();
    const next = new THREE.Vector3();
    const centre = new THREE.Vector3();

    const curvePoints = [];

    pathCells.forEach(
        (cell, idx) => {
            const prevCell = pathCells[idx - 1];
            const nextCell = pathCells[idx + 1];

            let prevFace = null;
            let nextFace = null;

            for (let i = 0; i < cell.neighbours.length; i++) {
                if (prevCell && cell.neighbours[i] === prevCell) {
                    prevFace = RHOMBIC_FACES_2D[i];
                }
                if (nextCell && cell.neighbours[i] === nextCell) {
                    nextFace = RHOMBIC_FACES_2D[i];
                }
            }

            if (prevFace) {
                let xsum = 0, ysum = 0, zsum = 0;
                for (const vidx of prevFace) {
                    xsum += RHOMBIC_VERTICES[vidx * 3]
                    ysum += RHOMBIC_VERTICES[1 + vidx * 3]
                    zsum += RHOMBIC_VERTICES[2 + vidx * 3]
                }
                prev.set(
                    xsum / prevFace.length,
                    ysum / prevFace.length,
                    zsum / prevFace.length,
                ).add(cell.position).multiplyScalar(CAVESCALE);

                curvePoints.push(
                    prev.clone()
                );
            }
            
            if (prevFace && nextFace) {
                let xsum = 0, ysum = 0, zsum = 0;
                for (const vidx of nextFace) {
                    xsum += RHOMBIC_VERTICES[vidx * 3]
                    ysum += RHOMBIC_VERTICES[1 + vidx * 3]
                    zsum += RHOMBIC_VERTICES[2 + vidx * 3]
                }
                next.set(
                    xsum / nextFace.length,
                    ysum / nextFace.length,
                    zsum / nextFace.length,
                ).add(cell.position).multiplyScalar(CAVESCALE);

                centre.copy(cell.position).multiplyScalar(CAVESCALE)
                    .add(prev).add(next).multiplyScalar(1/3);

                curvePoints.push(
                    centre.clone(),
                );
            } else {
                centre.copy(cell.position).multiplyScalar(CAVESCALE);

                curvePoints.push(
                    centre.clone()
                );
            }
        }
    );

    /* const pathMesh = new THREE.Mesh(
        new THREE.TubeGeometry(
            //path,
            new THREE.CatmullRomCurve3(curvePoints, false, 'centripetal', 1),
            curvePoints.length * 5,
            1,
            5
        ),
        redMaterial
    ); */

    return new THREE.CatmullRomCurve3(curvePoints);
}

// TODO: somehow detect if they are unable to reach each other?
function findPath(from, to) {
    const visited = [];
    const blocked = [];
    const junctions = [];
    
    let current = from;

    // WARNING: this assumes the maze is solveable!
    // removes cells from @visited, adding them to @blocked,
    // until we reach the most recent junction
    // if the junction is also now blocked that will be handled
    // by the next loop and this will be called again
    const backtrack = () => {
        do {
            blocked.push(visited.shift());
        } while (visited.length && visited[0] !== junctions[0]);
        current = visited[0];
        // see the TODO at the top, I believe this to be the failure
        // condition we'd get if @from was not connected to @to, as
        // it would exhaust all of its junctions
        if (!current) {
            throw new Error('backtracked too far!');
        }
    }

    do {
        visited.unshift(current);

        // we've reached the end, visited will contain
        // our path from...to
        if (current === to) {
            //
            // return here! (it's not obvious at a glance)
            //
            return visited;
        } else if (current.openings.length === 2) {
            current = current.openings.find(next => !visited.includes(next));
            continue;
        // dead-end
        } else if (current.openings.length === 1) {
            // this handles the edge case of starting in
            // a dead end
            if (!visited.includes(current.openings[0])){
                current = current.openings[0];
                continue;
            // otherwise we backtrack to the last junction
            } else {
                backtrack();
                continue;
            }
        // more than 2 openings means it's a junction
        } else {
            // add this junction to the stack
            if (!junctions.includes(current)) {
                junctions.unshift(current);
            }

            // find any unchecked paths
            const available = current.openings.filter(
                next => !blocked.includes(next) && !visited.includes(next)
            );

            // just take the first path
            if (available.length) {
                current = available[0];
                continue;
            // remove this junction from the stack
            // then backtrack to the previous one
            } else {
                junctions.shift();
                backtrack();
                continue;
            }
        }
    } while (current);
}





function smoothGeometry(geometry) {

    // TODO: detect vertices that are common without a
    //      shared edge and separate them slightly?
    //      INSET_FACTOR can do that but ideally can
    //      find a way to just fix the ones that go all
    //      pointy

    const smoothed = LoopSubdivision.modify(
        geometry,
        1,
        {
            split: false
        }
    );

    smoothed.computeVertexNormals();
    smoothed.computeBoundsTree();

    return smoothed;
}