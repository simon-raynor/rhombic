import * as THREE from 'three';
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';
import { CAVESCALE } from '../cave/index.js';


const redMaterial = new THREE.MeshLambertMaterial({
    color: 0x888888
});


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

        const box = new THREE.BoxGeometry(
            1,
            actualheight,
            1
        );
        box.rotateY(-theta);
        box.translate(x, actualheight / 2, y);

        spires.push(box);
    }

    return BufferGeometryUtils.mergeGeometries(spires);
}


export default function generateMesh() {
    const towermesh = new THREE.Mesh(
        generateGeometry(),
        redMaterial
    );

    const light = new THREE.PointLight(
        0x008800,
        1,
        CAVESCALE * 2
    );

    light.translateY(2);

    towermesh.add(light);

    return towermesh
}