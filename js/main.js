import Lattice from './Lattice.js';
import Renderer from './Renderer.js';


const lattice = new Lattice(3, 6, 6);
const renderer = new Renderer(lattice);


let cursor = lattice.cells[11];


function advanceCursor() {
    cursor.filled = false;

    console.log(cursor  );

    const valid = cursor.neighbours.filter(
        // check each direct neighbour
        neighbour => neighbour.filled && !neighbour.onEdge 
            && neighbour.neighbours.every(
                // then each of their neighbours
                neighbour2 => neighbour2 === cursor || neighbour2.filled
            )
    );

    if (valid.length) {
        return valid[Math.floor(Math.random() * valid.length)];
    }
}



function tick() {
    requestAnimationFrame(tick);

    if (cursor) {
        //cursor = advanceCursor();
    }

    renderer.fillLatticeMesh();

    renderer.render();
}
tick();


console.log(lattice, lattice.cells.filter(cell => cell.onEdge));