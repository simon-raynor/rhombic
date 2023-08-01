// add the bvh collision methods to the THREE classes
import './three-extended.js';

import Controls from './Controls.js';
import Lattice from './Lattice.js';
import Renderer from './Renderer.js';



const lattice = new Lattice(5, 10, 10);
const renderer = new Renderer(lattice);
const controls = new Controls();

let firstInside = lattice.cells[0];
const visited = [];

while (firstInside.isOutside) {
    firstInside = lattice.cells[firstInside.idx + 1];
}


let cursor = firstInside;

cursor = advanceCursor();



function advanceCursor() {
    cursor.filled = false;
    if (visited.indexOf(cursor) < 0) visited.push(cursor);
    
    const valid = cursor.neighbours.filter(
        // check each direct neighbour
        neighbour => neighbour.filled && !neighbour.isOutside 
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
lattice.buildMesh();


renderer.registerCameraControls(firstInside, controls);


let t = Date.now();

function tick() {
    requestAnimationFrame(tick);

    const now = Date.now();
    const dt = now - t;
    t = now;
    
    if (cursor) {
        cursor = advanceCursor();
        lattice.buildMesh();
    }

    renderer.render(dt);
}
tick();


console.log(lattice);