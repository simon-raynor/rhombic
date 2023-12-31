import * as THREE from 'three';
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';
import { LoopSubdivision } from 'three-subdivide';

import { RHOMBIC_FACES_2D, RHOMBIC_VERTICES } from '../../geometries/rhombicdodecahedron.js';
import Pathfinder from '../../utilities/Pathfinder/index.js';

const tmpVec3 = new THREE.Vector3();
const raycaster = new THREE.Raycaster();


export const CAVESCALE = 25;

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

const INITIAL_TUNNEL_DIRS = [ 8, 9, 10, 11];


const texture = new THREE.TextureLoader().load('/img/noise1.png');
const texturebump = new THREE.TextureLoader().load('/img/noise2.png');

export const blockMaterial = new THREE.MeshLambertMaterial({
    map: texture,
    bumpMap: texturebump,
    bumpScale: 1,
    side: THREE.BackSide,
    transparent: false
});


export class Cave {
    scale = CAVESCALE;
    constructor(dimension) {
        const [ grid, centre ] = generateGrid(dimension);
        this.centre = centre;
    
        this.cells = generateTunnel(grid, this.centre);

        this.cells.forEach(cell => cell.setCave(this));

        const geometry = generateGeometry(this.cells);
        geometry.scale(this.scale, this.scale, this.scale);

        this.mesh = new THREE.Mesh(
            smoothGeometry(geometry),
            blockMaterial
        );


        this.pathfinder = new Pathfinder(this, generatePFNodes(this.mesh.geometry));

    
        /* const deadends = [];
        tunnel.forEach(
            cell => {
                if (cell.openings.length === 1) {
                    deadends.push(cell);
                }
            }
        ); */
    
    
        const paths = [];
    }
}


class Cell {
    filled = true;

    constructor(posn) {
        this.position = posn;
    }

    setCave(cave) {
        this.cave = cave;
        this.worldposition = this.position.clone().multiplyScalar(cave.scale);
        this.generateOpeningCentres();
        this.paths = new Map();
        this.generateThroughPaths();
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
    get openFaces() {
        return this.#openings.map(idx => RHOMBIC_FACES_2D[idx]);
    }
    openFaceCentres = []

    getFaceCentreForNeighbour(neighbour) {
        for (let i = 0; i < this.openings.length; i++) {
            if (this.openings[i] === neighbour) {
                return this.openFaceCentres[i];
            }
        }
    }
    
    getRandomPointOnMesh() {
        let intersection;
        let distance = this.cave.scale;
        do {
            raycaster.set(
                this.worldposition,
                tmpVec3.randomDirection()
            );
            const intersections = raycaster.intersectObject(this.cave.mesh);
            if (intersections.length && intersections[0].distance < distance) {
                intersection = intersections[0];
            }
            // gradually widen the search
            distance *= 1.1;
        } while(!intersection);

        return intersection;
    }

    getPathTo(othercell) {
        return generatePath(this, othercell);
    }


    generateOpeningCentres() {
        for (const face of this.openFaces) {
            let xsum = 0, ysum = 0, zsum = 0;
            for (const vidx of face) {
                xsum += RHOMBIC_VERTICES[vidx * 3]
                ysum += RHOMBIC_VERTICES[1 + vidx * 3]
                zsum += RHOMBIC_VERTICES[2 + vidx * 3]
            }
            tmpVec3.set(
                xsum / face.length,
                ysum / face.length,
                zsum / face.length,
            ).add(this.position).multiplyScalar(CAVESCALE);

            this.openFaceCentres.push(tmpVec3.clone());
        }
    }

    generateThroughPaths() {
        const l = this.openings.length;
        for (let i = 0; i < l - 1; i++) {
            for (let j = i + 1; j < l; j++) {
                this.generateThroughPath(
                    this.openings[i],
                    this.openings[j]
                );
            }
        }
    }

    generateThroughPath(start, end) {
        const curvePoints = [];
        
        const centre = new THREE.Vector3();
    
        let prev = null;
        let next = null;
    
        // get the correct face centres
        for (let i = 0; i < this.openings.length; i++) {
            if (this.openings[i] === start) {
                prev = this.openFaceCentres[i];
            }
            if (this.openings[i] === end) {
                next = this.openFaceCentres[i];
            }
        }

    
        // find midpoint between face centres and
        // cell's own centre
        centre.copy(this.position).multiplyScalar(CAVESCALE)
            .add(prev).add(next).multiplyScalar(1/3);
    
        
        curvePoints.push(
            prev.clone()
        );
    
        curvePoints.push(
            centre.clone()
        );
    
        curvePoints.push(
            next.clone()
        );
    
        this.paths.set(
            `${start.id},${end.id}`,
            curvePoints
        );
    }
}



function generateGrid(size) {
    const cells = [];

    const idir = new THREE.Vector3(2, 0, 2);
    const jdir = new THREE.Vector3(2, 2, 0);
    const kdir = new THREE.Vector3(-2, 0, 2);

    let centre;

    const halfsize = Math.round((size - 1) / 2);

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            for (let k = 0; k < size; k++) {
                const cell = new Cell(
                    (new THREE.Vector3())
                    .add(idir.clone().multiplyScalar(i))
                    .add(jdir.clone().multiplyScalar(j))
                    .add(kdir.clone().multiplyScalar(k))
                );

                cells.push( cell );

                if (i === halfsize && j === halfsize && k === halfsize) {
                    centre = cell;
                }
            }
        }
    }

    cells.forEach(cell => cell.findNeighbours(cells));

    return [ cells, centre ];
}


function generateTunnel(grid, start) {
    let current = start;

    const visited = [];

    
    function advanceCursor(cursor) {
        cursor.filled = false;
        if (visited.indexOf(cursor) < 0) visited.push(cursor);

        if (cursor === start && tunnelStarts.length) {
            
        }
        
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
                ? visited[Math.floor(visited.length * Math.random() * Math.random())]
                : null;
        }
    }


    const tunnelStarts = INITIAL_TUNNEL_DIRS.map(dIdx => start.neighbours[dIdx]);
    tunnelStarts.forEach(cell => {
        advanceCursor(cell);
    });

    while (current) {
        current = advanceCursor(current);
    }

    const tunnel = grid.filter(({filled}) => !filled);

    // give em an ID so easier to debug
    tunnel.forEach((cell, idx) => {
        cell.id = idx;

        // check each neighbour, if it's open we
        // need to flag that face for removal
        // N.B. this works because the directions
        //      are in the same order as the faces
        const openDirections = [];
        
        cell.neighbours.forEach(
            (neighbour, nidx) => {
                if (neighbour && !neighbour.filled) {
                    openDirections.push(nidx);
                } else {
                    cell.neighbours[nidx] = null;
                }
            }
        );

        // assign this now that it's been calculated
        cell.openings = openDirections;
    });

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

            // remove the open faces while logging their
            // vertices so that we can leave portals to
            // match up between cells
            cell.openFaces.forEach(
                face => {
                    face.forEach(vidx => holeVertices.add(vidx));
                    faces[faces.indexOf(face)] = null;
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
                        //...RHOMBIC_UVS_2D[uvNum]
                        0,1, 0,0, 1,0,
                        0,1, 1,0, 1,1
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


const tmpVec3A = new THREE.Vector3(),
    tmpVec3B = new THREE.Vector3(),
    tmpVec3C = new THREE.Vector3();

const tmpTriangle = new THREE.Triangle(),
    tmpPosn = new THREE.Vector3(),
    tmpNormal = new THREE.Vector3();

function generatePFNodes(geometry) {
    const vertexCentres = new Map();

    function addVertexCentre(vertex, centre) {
        //const key = tmpVec3.copy(vertex)/* .multiplyScalar(100) */.round().toArray().join(',');

        let found = false;

        for (let [key] of vertexCentres) {
            if (key.equals(vertex)) {
                vertexCentres.set(key, [ ...vertexCentres.get(key), centre ]);
                found = true;
                break;
            }
        }

        if (!found) {
            vertexCentres.set(
                vertex.clone(),
                [ centre ]
            );
        }
    }

    const nodes = [];

    const vCount = geometry.attributes.position.count;

    for (let i = 0; i < vCount; i += 3) {
        tmpVec3A.fromBufferAttribute(geometry.attributes.position, i);
        tmpVec3B.fromBufferAttribute(geometry.attributes.position, i + 1);
        tmpVec3C.fromBufferAttribute(geometry.attributes.position, i + 2);

        // get centrepoint & normal
        tmpTriangle.set(tmpVec3A, tmpVec3B, tmpVec3C);
        tmpTriangle.getMidpoint(tmpPosn);
        tmpTriangle.getNormal(tmpNormal);
        // we are inside the mesh so negate
        tmpNormal.negate();

        const node = {
            posn: tmpPosn.clone(),
            normal: tmpNormal.clone(),
            edges: []
        };

        nodes.push(node);

        addVertexCentre(tmpVec3A, node);
        addVertexCentre(tmpVec3B, node);
        addVertexCentre(tmpVec3C, node);
    }

    for (let [key, nodes] of vertexCentres) {
        nodes.forEach(
            node => {
                nodes.forEach(n => {
                    if (n != node) {
                        node.edges.push(n);
                    }
                });
            }
        );
    }

    return nodes;
}


function generatePath(start, end) {
    const curvePoints = [];

    if (start.neighbours.includes(end)) {
        curvePoints.push(
            start.getFaceCentreForNeighbour(end)
        );
    } else {
        const pathCells = findPath(start, end);

        pathCells.forEach(
            (cell, idx) => {
                const prevCell = pathCells[idx - 1];
                const nextCell = pathCells[idx + 1];

                let pathpoints = null;

                if (prevCell && nextCell) {
                    const abId = `${prevCell.id},${nextCell.id}`,
                        baId = `${nextCell.id},${prevCell.id}`;

                    if (cell.paths.has(abId)) {
                        pathpoints = [...cell.paths.get(abId)];
                    } else if (cell.paths.has(baId)) {
                        pathpoints = [...cell.paths.get(baId)].reverse();
                    } else {
                        throw new Error(`${cell.id}: no cell path between ${abId}`);
                    }

                    if (nextCell !== end) {
                        pathpoints.pop();   // remove final point as it should
                                            // be first point of next section
                                            // (unless that's the final one)
                    }
                } else {
                    pathpoints = [
                        //cell.worldposition
                    ];
                }

                if (pathpoints) {
                    pathpoints.forEach(
                        ppt => curvePoints.push(ppt)
                    );
                }
            }
        );
    }

    return curvePoints;
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
        visited.shift();
        current = junctions.shift(); // shift as it'll be re-added
        // see the TODO at the top, I believe this to be the failure
        // condition we'd get if @from was not connected to @to, as
        // it would exhaust all of its junctions
        if (!current) {
            // NOTE: this also appears to happen if from
            // is not a dead end and it picks the wrong
            // direction first
            console.error('backtrack error:', from, to);
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
        } else {
            const open = current.openings.filter(
                next => !blocked.includes(next) && !visited.includes(next)
            );

            if (open.length) {
                if (
                    open.length > 1
                    && !junctions.includes(current)
                ) {
                    junctions.unshift(current);
                }
                current = open[0];
            } else {
                if (current === from) {
                    throw new Error('unable to find route:', from, to);
                }
                backtrack();
                //throw new Error('not a through passage?!');
            }
        }
        
        
        
        /* 
        if (current === from) {
            const open = current.openings.filter(
                next => !blocked.includes(next) && !visited.includes(next)
            );
            current = open[0];
        }else if (current.openings.length === 2) {
            const open = current.openings.filter(
                next => !blocked.includes(next) && !visited.includes(next)
            );

            if (open.length) {
                current = open[0];
            } else {
                throw new Error('not a through passage?!');
            }
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
        } */
    } while (current);
}


