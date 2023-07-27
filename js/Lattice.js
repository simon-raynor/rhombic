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

    xyzToIdx(x, y, z) {
        const { minZ, maxZ, minY, maxY, minX, maxX } = this.getBounds(y, z);
    
        if (
            x < minX || x > maxX
            || y < minY || y > maxY
            || z < minZ || z > maxZ
        ) {
            return null;
        }
    
        const k = z / 2;
        const j = (y / 2) - (k % 2);
        const i = ((x / 2) - (j % 2)) / 2;
    
        const idx = i + (j * this.height) + (k * this.depth * this.height);
    
        return (idx < 0 || idx >= this.total)
            ? null
            : idx;
    }

    getBounds(y, z) {
        const minZ = 0;
        const maxZ = 2 * (this.depth - 1);
        const minY = (z % 2) * 2;
        const maxY = minY + (2 * (this.width - 1));
        const minX = (y % 2) * 2;
        const maxX = minX + (2 * (this.height - 1));
    
        return { minZ, maxZ, minY, maxY, minX, maxX };
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
    constructor(lattice, idx) {
        this.lattice = lattice;
        this.idx = idx;

        this.filled = true;

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
                const targetIdx = this.lattice.xyzToIdx(tx, ty, tz);
                
                if (targetIdx !== null) {
                    this.neighbours.push(this.lattice.cells[targetIdx]);
                }
            }
        );

        const { minZ, maxZ, minY, maxY, minX, maxX } = this.lattice.getBounds(this.y, this.z);

        this.isOutside = this.x === minX || this.x === maxX
                        || this.y === minY || this.y === maxY
                        || this.z === minZ || this.z === maxZ;
        //this.neighbours.length !== directions.length;
    }
}