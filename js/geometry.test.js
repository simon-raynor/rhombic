import { describe, it, assert } from 'vitest';
import { idxToXYZ, xyzToIdx } from './geometry.js';

describe('idxToXYZ', () => {
    it('0', () => {
        assert.deepEqual(idxToXYZ(0), [0,0,0]);
    });
});

describe('xyzToIdx', () => {
    it('[0,0,0]', () => {
        assert.equal(xyzToIdx(0, 0, 0), 0);
    });
});