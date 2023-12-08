// ~~stolen shamelessly~~ adapted from:
// https://www.digitalocean.com/community/tutorials/js-binary-heaps

export default class BinaryHeap {
    constructor() {
        this.values = [];
    }
    add(newvalue) {
        this.values.push(newvalue);
        let idx = this.values.length - 1;
        const current = this.values[idx];

        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            const parent = this.values[parentIdx];

            if (parent >= current) {
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
                    if (left < current) {
                        swap = leftIdx;
                    }
                }
                if (rightIdx < length) {
                    right = this.values[rightIdx];
                    if (
                        (swap === null && right < current)
                        || (swap !== null && right < left)
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

const tree = new BinaryHeap();
tree.add(7);
tree.add(3);
tree.add(1);
tree.add(4);
tree.add(8);
tree.add(7);
tree.add(2);
tree.add(9);

console.log(tree);