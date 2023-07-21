import { describe, it, assert } from 'vitest';
import { idxToXYZ, xyzToIdx } from './geometry.js';

describe('idxToXYZ', () => {
    it('0', () => {
        assert.deepEqual(idxToXYZ(0), [0,0,0]);
    });
    it('1', () => {
        assert.deepEqual(idxToXYZ(1), [4,0,0]);
    });
    it('7', () => {
        assert.deepEqual(idxToXYZ(7), [28,0,0]);
    });
    it('10', () => {
        assert.deepEqual(idxToXYZ(10), [2,2,0]);
    });
    it('12', () => {
        assert.deepEqual(idxToXYZ(12), [10,2,0]);
    });
    it('100', () => {
        assert.deepEqual(idxToXYZ(100), [0,2,2]);
    });
    it('291', () => {
        assert.deepEqual(idxToXYZ(291), [22,22,4]);
    });
    it('473', () => {
        assert.deepEqual(idxToXYZ(473), [26,22,8]);
    });
    it('999', () => {
        assert.deepEqual(idxToXYZ(999), [54,36,18]);
    });
});

describe('xyzToIdx', () => {
    it('[0,0,0]', () => {
        assert.equal(xyzToIdx(0, 0, 0), 0);
    });
    it('[4,0,0]', () => {
        assert.equal(xyzToIdx(4, 0, 0), 1);
    });
    it('[28,0,0]', () => {
        assert.equal(xyzToIdx(28, 0, 0), 7);
    });
    it('[2,2,0]', () => {
        assert.equal(xyzToIdx(2, 2, 0), 10);
    });
    it('[10,2,0]', () => {
        assert.equal(xyzToIdx(10, 2, 0), 12);
    });
    it('[0,2,2]', () => {
        assert.equal(xyzToIdx(0, 2, 2), 100);
    });
    it('[22,22,4]', () => {
        assert.equal(xyzToIdx(22, 22, 4), 291);
    });
    it('[26,22,8]', () => {
        assert.equal(xyzToIdx(26, 22, 8), 473);
    });
    it('[54,36,18]', () => {
        assert.equal(xyzToIdx(54, 36, 18), 999);
    });
});

describe('both ways', () => {
    it('idxToXYZ => xyzToIdx', () => {
        assert.equal(xyzToIdx(...idxToXYZ(236)), 236);
    });
    it('xyzToIdx => idxToXYZ', () => {
        assert.deepEqual(idxToXYZ(xyzToIdx(22, 22, 4)), [22, 22, 4]);
    });
});