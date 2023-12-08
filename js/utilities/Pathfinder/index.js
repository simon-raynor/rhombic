
export default class Pathfinder {
    constructor(cave, nodes) {
        this.cave = cave;
        
        this.nodes = nodes.map(
            node => new PFNode(this, node)
        );

        this.nodes.forEach(node => node.initEdges());
    }
}


class PFNode {
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