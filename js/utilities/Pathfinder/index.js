
export default class Pathfinder {
    constructor(cave, nodes) {
        this.cave = cave;
        
        this.nodes = nodes.map(
            node => new PFNode(this, node)
        );

        this.nodes.forEach(node => node.initEdges());
    }

    // algorithm adapted from pseudocode here:
    // https://briangrinstead.com/blog/astar-search-algorithm-in-javascript/
    pathfind(from, to) {
        // init start/end point as a tmp node,
        // find closest node(s) add as edges
        // N.B. for now assume @from is a node
        const start = from;
        const end = to;

        const openheap = new PFHeap();
        const closed = [];

        openheap.add(start);

        while (openheap.size) {
            const current = openheap.extract();

            if (current === end) {
                let cursor = current;
                const retval = [];

                while (cursor.parent) {
                    retval.push(cursor);
                    cursor = cursor.parent;
                }

                return retval.reverse();
            }

            closed.push(current);

            current.edges.forEach(
                edge => {
                    const g = current.g + edge.size;

                    if (!openheap.includes(edge.B)) {
                        edge.B.g = g;
                        // TODO: is there a better heuristic?
                        edge.B.h = edge.B.position.distanceTo(end.position);

                        edge.B.parent = current;

                        openheap.add(edge.B);
                    } else if (g < edge.B.g) {
                        edge.B.g = g;

                        edge.B.parent = current;
                    }
                }
            )
        }

        // failure case, couldn't find a path
        return [];
    }
}


class PFNode {
    g = 0;
    h = 0;
    parent = null;
    get f() { return this.g + this.h; }

    constructor(finder, data) {
        this.finder = finder;

        this.position = data.posn.clone();
        this.normal = data.normal.clone();

        this._rawData = data;
        this._rawEdges = data.edges;

        this.edges = [];
    }

    initEdges() {
        this._rawEdges.forEach(
            rawEdge => {
                this.finder.nodes.forEach(
                    node => {
                        if (node._rawData === rawEdge) {
                            this.edges.push(
                                new PFEdge(
                                    this,
                                    node
                                )
                            )
                        }
                    }
                );
            }
        );
        delete this._rawData;
        delete this._rawEdges;
    }
}

class PFEdge {
    constructor(nodeA, nodeB) {
        this.A = nodeA;
        this.B = nodeB;

        this.size = nodeA.position.distanceTo(nodeB.position);
    }
}


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

            if (parent.f >= current.f) {
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