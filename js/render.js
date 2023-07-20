function createRhombic() {
    const indexedgeometry = new THREE.BufferGeometry();

    const vertices = new Float32Array([
        1,1,1, 1,1,-1, 1,-1,1, 1,-1,-1,
        -1,1,1, -1,1,-1, -1,-1,1, -1,-1,-1,
        2,0,0, 0,2,0, 0,0,2,
        -2,0,0, 0,-2,0, 0,0,-2
    ]);
    const faces = [
        0,8,1, 2,8,0, 3,8,2, 1,8,3,
        0,1,9, 2,0,10, 3,2,12, 1,3,13,

        7,6,11, 6,4,11, 4,5,11, 5,7,11,
        7,12,6, 6,10,4, 4,9,5, 5,13,7,

        0,4,10, 4,0,9, 1,5,9, 5,1,13,
        2,6,12, 6,2,10, 3,7,13, 7,3,12
    ];

    indexedgeometry.setIndex(faces);
    indexedgeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));


    const geometry = indexedgeometry.toNonIndexed();
    geometry.computeVertexNormals();

    return geometry;
}