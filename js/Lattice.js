export default class Lattice {
    constructor(height, width, depth) {
        this.height = height;
        this.width = width;
        this.depth = depth;

        this.total = height * width * depth;

        this.cells = [];

        for (let idx = 0; idx < this.total; idx++) {
            this.cells.push(new LatticeCell(this, idx));
        }

        this.cells.forEach(cell => cell.setNeigbours());
    }

    idxToXYZ(idx) {
        if (idx < 0 || idx >= this.total) return null;
    
        const k = Math.floor(idx / (this.depth * this.height));
        const j = Math.floor((idx - (k * this.depth * this.height)) / this.height);
        const i = idx - (k * this.depth * this.height) - (j * this.height);
    
        return [
            2 * ((i * 2) + (j % 2)),
            2 * (j + (k % 2)),
            2 * k
        ];
    }
}



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

class LatticeCell {
    // define these here so they're 1st in devtools
    x;
    y;
    z;
    constructor(lattice, idx) {
        this.lattice = lattice;
        this.idx = idx;

        this.filled = true;
        this.exhausted = false;

        this.setXYZ();
    }

    setXYZ() {
        const [x ,y ,z] = this.lattice.idxToXYZ(this.idx);
        // sets this.x, this.y, this.z
        Object.assign(
            this,
            { x, y, z }
        );
    }

    setNeigbours() {
        this.neighbours = [];

        directions.forEach(
            dir => {
                const {x, y, z} = this;
                const [dx, dy, dz] = dir;

                const [tx, ty, tz] = [x + dx, y + dy, z + dz];

                const target = this.lattice.cells.find(({x, y, z}) => x === tx && y === ty && z ==tz);

                if (target) this.neighbours.push(target);
            }
        );

        this.isOutside = this.neighbours.length !== directions.length;
    }
}