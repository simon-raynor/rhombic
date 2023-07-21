import { total, height, width, depth } from "./config.js";


const [maxX, maxY, maxZ] = idxToXYZ(total - 1);

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
    if (
        x < 0 || x > maxX
        || y < 0 || y > maxY
        || z < 0 || z > maxZ
    ) return null;

    const k = z / 2;
    const j = (y / 2) - k;
    const i = ((x / 2) - j) / 2;

    const idx = i + (j * height) + (k * depth * height);

    return (idx < 0 || idx >= total)
        ? null
        : idx;
}