import * as THREE from 'three';
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';
import { CAVESCALE } from '../cave/index.js';



const SPIRECOUNT = 5;

function generateGeometry() {
    let spires = [];

    for (let i = 0; i < SPIRECOUNT * 2; i++) {
        const inner = i % 2;
        const theta = i * Math.PI / SPIRECOUNT;
    
        const radius = inner ? 2 : 4;
        const height = inner ? 6 : 2;

        const x = Math.cos(theta) * radius,
            y = Math.sin(theta) * radius;
        
        const actualheight = height + Math.round(Math.random() * height);

        const box = new THREE.ConeGeometry(
            1,
            actualheight,
            3,
            1,
            true
        );
        box.rotateY(-theta);
        box.translate(x, actualheight / 2, y);

        spires.push(box);
    }

    return BufferGeometryUtils.mergeGeometries(spires);
}


export default function generateMesh(color) {
    const material = new THREE.MeshLambertMaterial({
        color: 0x888888,
        emissive: color
    });
    
    const towermesh = new THREE.Mesh(
        generateGeometry(),
        material
    );


    const light = new THREE.PointLight(
        color,
        1,
        CAVESCALE * 2
    );

    light.translateY(2);

    towermesh.add(light);


    return towermesh
}

const raycaster = new THREE.Raycaster();
const tmpVec3 = new THREE.Vector3();

export function generateTowerInCell(cell, cavemesh) {
    const towermesh = generateMesh();

    raycaster.set(
        new THREE.Vector3().copy(cell.position).multiplyScalar(CAVESCALE),
        new THREE.Vector3().random()
    );
    const tintersects = raycaster.intersectObject(cavemesh);
    
    if (tintersects.length) {
        towermesh.lookAt(tintersects[0].normal);
        towermesh.rotateX(Math.PI / 2);
        towermesh.position.copy(tintersects[0].point).sub(tintersects[0].normal);
    }

    return towermesh;
}

export function generateAlongPath(path, color, cavemesh) {
    const meshes = [];
    path.getPoints(Math.round(path.getLength() / 200)).forEach(
        point => {
            const towermesh = generateMesh(color);
            
            raycaster.set(point, tmpVec3.random());
            const tintersects = raycaster.intersectObject(cavemesh);
            
            if (tintersects.length) {
                towermesh.lookAt(tintersects[0].normal);
                towermesh.rotateX(Math.PI / 2);
                towermesh.position.copy(tintersects[0].point).sub(tintersects[0].normal);
            }
            
            meshes.push(towermesh);
        }
    )
    return meshes;
}