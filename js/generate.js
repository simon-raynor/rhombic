/*
lattice

  0,0  1,0  2,0
    0,1  1,1,  2,1
      0,2  1,2  2,2

    0,0  1,0  2.0
      0,1  1,1,  2,1
        0,2  1,2  2,2

    o o o
     o o 
    o o o

     o o 
    o o o
     o o 

    o o o
     o o 
    o o o

     o o 
    o o o
     o o 

*/
import { total, height, width, depth } from "./config.js";
import { idxToXYZ, xyzToIdx } from "./geometry.js";


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
const dirCount = directions.length;

// which cells have been removed
const cells = [];
export default cells;

// current cursor position
let cursor = 25;

cells[cursor] = true;


function step() {
    const next = advanceCursor();

    if (next !== null) {
        cells[next] = true;
        cursor = next;
    }

    if (next) {
        //requestAnimationFrame(step);
        step();
    }
}

step();


function advanceCursor() {
    const valid = [];

    for (let i = 0; i < dirCount; i++) {
        const result = checkDirection(cursor, i);

        if (result !== false) {
            valid.push(result);
        }
    }

    return valid.length
        ? valid[Math.floor(valid.length * Math.random())]
        : null;
}

function checkDirection(cellIdx, direction) {
    const [x, y, z] = idxToXYZ(cellIdx);

    const [dx, dy, dz] = directions[direction];

    const [tx, ty, tz] = [x + dx, y + dy, z + dz];
    const targetIdx = xyzToIdx(tx, ty, tz);

    if (targetIdx === null || cells[targetIdx]) return false;

    const opposite = (direction + (dirCount / 2)) % dirCount;

    for (let i = 0; i < dirCount; i++) {
        if (i == opposite) continue;

        const [dx2, dy2, dz2] = directions[i];
        const neighbourIdx = xyzToIdx(tx + dx2, ty + dy2, tz + dz2);

        if (neighbourIdx === null || cells[neighbourIdx]) return false;
    }

    return targetIdx;
}

