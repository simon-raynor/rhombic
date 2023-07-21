import { total, height, width, depth } from "./config.js";


export function idxToXYZ(idx) {
    if (idx < 0 || idx >= total) return null;

    const k = Math.floor(idx / (depth * height));
    const j = Math.floor((idx - (k * depth * height)) / height);
    const i = idx - (k * depth * height) - (j * height);

    return [
        2 * ((i * 2) + j),
        2 * (j + k),
        2 * k
    ];
}


export function xyzToIdx(x, y, z) {
    const { minZ, maxZ, minY, maxY, minX, maxX } = getBounds(y, z);

    if (
        x < minX || x > maxX
        || y < minY || y > maxY
        || z < minZ || z > maxZ
    ) {
        return null;
    }

    const k = z / 2;
    const j = (y / 2) - k;
    const i = ((x / 2) - j) / 2;

    const idx = i + (j * height) + (k * depth * height);

    return (idx < 0 || idx >= total)
        ? null
        : idx;
}


function getBounds(y, z) {
    const minZ = 0;
    const maxZ = 2 * (depth - 1);
    const minY = z;
    const maxY = minY + (2 * (height - 1));
    const minX = y - z;
    const maxX = minX + (4 * (width - 1));

    return { minZ, maxZ, minY, maxY, minX, maxX };
}