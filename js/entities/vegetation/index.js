import * as THREE from 'three';

const HEIGHT = 2;


const cone = new THREE.ConeGeometry(HEIGHT / 10, HEIGHT, 5, 1, true);
cone.translate(0, HEIGHT / 2, 0);
const material = new THREE.MeshPhongMaterial({
    color: 0x44cc88
})


const raycaster = new THREE.Raycaster();
const tmpVec3 = new THREE.Vector3();

export default function generateVegetation(cavemesh, paths) {
    const positions = [],
        normals = [];
    
    {
        for (let t = 0; t <= 1; t += 0.001) {
            raycaster.set(
                paths[0].getPointAt(t),
                tmpVec3.random().cross(paths[0].getTangentAt(t))
            );

            const intersects = raycaster.intersectObject(cavemesh);

            positions.push(intersects[0].point);
            normals.push(intersects[0].normal);
        }
    }

    const mesh = new THREE.InstancedMesh(
        cone,
        material,
        positions.length
    );

    const tmpObj = new THREE.Object3D();
    const tmpMat4 = new THREE.Matrix4();

    for (let i = 0; i < positions.length; i++) {
        tmpObj.position.set(0, 0, 0);
        tmpObj.lookAt(normals[i]);
        tmpObj.rotateX(Math.PI / 2);
        tmpObj.position.copy(positions[i]);

        tmpMat4.compose(tmpObj.position, tmpObj.quaternion, tmpObj.scale);
        mesh.setMatrixAt(i, tmpMat4);
    }

    return mesh;
}