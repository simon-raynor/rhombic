import Lattice from './Lattice.js';
import Renderer from './Renderer.js';


const lattice = new Lattice(6, 12, 12);
const renderer = new Renderer(lattice);


let cursor = lattice.cells[50];
const visited = [];

while (cursor.isOutside) {
    cursor = lattice.cells[cursor.idx + 1];
}

console.log(cursor);

cursor = advanceCursor();


function advanceCursor() {
    cursor.filled = false;
    visited.push(cursor);
    
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


function tick() {
    requestAnimationFrame(tick);
    
    if (cursor) {
        cursor = advanceCursor();
    }

    renderer.fillLatticeMesh();
    renderer.render();
}
tick();


console.log(lattice, lattice.cells.filter(cell => cell.isOutside));