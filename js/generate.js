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



const height = 10;
const width = 10;
const depth = 10;

const total = height * width * depth;


const directions = [
    [0, 0, -1], [0, 1, -1], [1, 0, -1],
    [1,0,0], [1,-1,0], [0,-1,0], [-1,0,0], [-1,1,0], [0,1,0],
    [-1, -1, 1], [0,-1,1], [0,0,1]
];
const dirCount = directions.length;
console.log(directions)

// which cells have been removed
const cells = [];

// current cursor position
let cursor = 15;

cells[cursor] = true;


function step() {
    const next = advanceCursor();

    if (next !== null) {
        cells[next] = true;
        cursor = next;
    }

    console.log(cells);

    requestAnimationFrame(step);
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

    console.log(valid)

    return valid.length
        ? valid[Math.floor(valid.length * Math.random())]
        : null;
}

function checkDirection(cellIdx, direction) {
    const [x, y, z] = iToXYZ(cellIdx);

    const [dx, dy, dz] = directions[direction];

    const [tx, ty, tz] = [x + dx, y + dy, z + dz];
    const targetIdx = xyzToI(tx, ty, tz);

    if (targetIdx === null || cells[targetIdx]) return false;

    for (let i = 0; i < dirCount; i++) {
        //if (i == direction) continue; // TODO

        const [dx2, dy2, dz2] = directions[i];
        const neighbourIdx = xyzToI(tx + dx2, ty + dy2, tz + dz2);

        if (neighbourIdx === null || cells[neighbourIdx]) return false;
    }

    return targetIdx;
}


function iToXYZ(i) {
    if (i < 0 || i > total) return null;

    const z = Math.floor(i / (depth * height));
    const y = Math.floor((i - (z * depth * height)) / height);
    const x = i - (z * depth * height) - (y * height);

    return [x, y, z];
}

function xyzToI(x, y, z) {
    if (
        x < 0 || x > width
        || y < 0 || y > height
        || z < 0 || z > depth
    ) return null;

    return x + (y * height) + (z * depth * height);
}