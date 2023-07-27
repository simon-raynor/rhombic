import Lattice from './Lattice.js';
import Renderer from './Renderer.js';


const lattice = new Lattice(3, 6, 6);
const renderer = new Renderer(lattice);


let cursor = lattice.cells[2];

console.log(cursor);

cursor = advanceCursor();

function advanceCursor() {
    cursor.filled = false;
    //cursor.neighbours.forEach(n => n.filled = false);
    /* console.log(cursor);

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
    } */
}


let i = 0;
setInterval(() => i++, 500);
function tick() {
    requestAnimationFrame(tick);
    if (i < lattice.total) lattice.cells[i].filled = false;
    /* if (cursor) {
        cursor = advanceCursor();
    } */

    renderer.fillLatticeMesh();
    renderer.render();
}
tick();


console.log(lattice, lattice.cells.filter(cell => cell.isOutside));