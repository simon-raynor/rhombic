
export default class Pathfinder {
    constructor(cave) {
        this.cave = cave;

        const cellNodeMap = new Map();
        
        this.nodes = cave.surfaceGrid.map(
            (cell, idx) => {
                const node = new PFNode(this, cell);
                cellNodeMap.set(cell, node);
                cell.pfNode = node;
                return node;
            }
        );

        this.nodes.forEach(node => {
            node.cell.neighbours.forEach(
                othercell => {
                    if (cellNodeMap.has(othercell)) {
                        const other = cellNodeMap.get(othercell);
                        const edge = new PFEdge(
                            node,
                            other
                        );
                        node.edges.push(edge);
                        other.inboundEdges.push(edge);
                    } else throw 'unable to build Pathfinder, unknown edge';
                }
            )
        });
    }

    // algorithm adapted from pseudocode here:
    // https://briangrinstead.com/blog/astar-search-algorithm-in-javascript/
    pathfind(from, to) {
        const start = from;
        const end = to;

        const openheap = new PFHeap();
        const closed = [];

        // reset this incase it was set from last time
        start.parent = null;
        openheap.add(start);

        while (openheap.size) {
            //console.log(openheap.values.map(({idx}) => idx).join(','))
            const current = openheap.extract();

            if (current === end) {
                let cursor = current;
                const retval = [cursor];

                while (cursor.parent) {
                    retval.push(cursor.parent);
                    cursor = cursor.parent;
                }

                return retval.reverse();
            }

            closed.push(current);

            current.edges.forEach(
                edge => {
                    if (!closed.includes(edge.B)) {
                        const g = current.g + edge.size;

                        if (!openheap.includes(edge.B)) {
                            openheap.add(edge.B);

                            // by not setting h we are effectively using
                            // dijkstra's rather than A*
                            // if a better heuristic can be found we might
                            // be able to go back to A*
                            //edge.B.h = edge.B.position.distanceTo(end.position);

                            edge.B.g = g;
                            edge.B.parent = current;
                        } else if (g < edge.B.g) {
                            edge.B.g = g;
                            edge.B.parent = current;
                        }
                    }
                }
            )
        }

        // failure case, couldn't find a path
        console.error('pathfinding failed:', from, '->', to);
        console.log(closed.map(({idx})=>idx));
        return [];
    }

    getClosestNode(position) {
        let closest = null;
        let minDistance = Infinity;
        for (let i = 0; i < this.nodes.length; i++) {
            const node = this.nodes[i];
            const distance = position.distanceToSquared(node.position);

            if (distance < minDistance) {
                closest = node;
                minDistance = distance;
            }
        }

        return closest;
    }
}


class PFNode {
    g = 0;
    h = 0;
    get f() { return this.g + this.h; }

    parent = null;
    edges = [];
    inboundEdges = [];

    constructor(finder, cell) {
        this.finder = finder;

        this.cell = cell;

        this.position = cell.centre;
        this.normal = cell.normal;
    }

    addInboundMultiplier(value) {
        this.inboundEdges.forEach(e => e.addMultiplier(value));
    }


}

class PFEdge {
    #_size
    #_size_multiplier = 1

    constructor(nodeA, nodeB) {
        this.A = nodeA;
        this.B = nodeB;

        this.#_size = nodeA.position.distanceTo(nodeB.position);
    }

    addMultiplier(value) {
        this.#_size_multiplier += value;
    }

    get size() {
        return this.#_size * this.#_size_multiplier;
    }
}

// ~~stolen shamelessly~~ adapted from:
// https://www.digitalocean.com/community/tutorials/js-binary-heaps
class PFHeap {
    constructor() {
        this.values = [];
    }
    get size() {
        return this.values.length;
    }
    includes(node) {
        return this.values.includes(node);
    }
    add(newnode) {
        this.values.push(newnode);
        let idx = this.values.length - 1;
        const current = this.values[idx];

        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            const parent = this.values[parentIdx];

            if (parent.f <= current.f) {
                this.values[parentIdx] = current;
                this.values[idx] = parent;
                idx = parentIdx;
            } else break;
        }
    }
    extract() {
        const min = this.values[0];
        const end = this.values.pop();
        const length = this.values.length;

        if (length) {
            this.values[0] = end;

            let idx = 0;
            const current = this.values[0];

            while (true) {
                const leftIdx = 2 * idx + 1;
                const rightIdx = 2 * idx + 2;

                let left, right;
                let swap = null;

                if (leftIdx < length) {
                    left = this.values[leftIdx];
                    if (left.f < current.f) {
                        swap = leftIdx;
                    }
                }
                if (rightIdx < length) {
                    right = this.values[rightIdx];
                    if (
                        (swap === null && right.f < current.f)
                        || (swap !== null && right.f < left.f)
                    ) {
                        swap = rightIdx;
                    }
                }

                if (swap === null) break;
                this.values[idx] = this.values[swap];
                this.values[swap] = current;
                idx = swap;
            }
        }

        return min;
    }
}