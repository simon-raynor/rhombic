import { idxToXYZ, xyzToIdx } from './geometry.js';

test('idxToXYZ', () => {
    expect(idxToXYZ(0)).toBe([0,0,0]);
});