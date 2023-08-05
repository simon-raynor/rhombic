import * as THREE from 'three';


const directions = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
    [-1, 0, 0],
    [0, -1, 0],
    [0, 0, -1]
].map(d => new THREE.Vector3().fromArray(d));


const defaultMaterial = new THREE.MeshLambertMaterial({
    color: 0xff0088
});

const raycaster = new THREE.Raycaster();

export default class GameObject {
    constructor(position, model) {
        this.model = model;
        this.model?.computeBoundingSphere();

        this.position = position;
        this.velocity = new THREE.Vector3();
    }

    createMesh(material = defaultMaterial) {
        this.mesh = new THREE.Mesh(this.model, material);
        this.mesh.position.copy(this.position);
    }

    addToScene(scene) {
        if (!this.mesh) {
            this.createMesh();
        }
        scene.add(this.mesh);
    }

    detectCollisions(gameobjects) {
        const {radius} = this.model.boundingSphere;

        const intersects = [];

        for (let i = 0; i < directions; i++) {
            raycaster.set(
                this.model.position,
                directions[i]
            );

            intersects.push(...raycaster.intersectObjects(gameobjects));
        }

        if (intersects.length) {
            this.collide(intersects.filter(({distance}) => distance < radius));
        }
    }

    collide(intersects) {
        console.log(intersects);
    }

    tick(dt) {
        this.mesh.translateX(this.velocity.x * dt);
        this.mesh.translateY(this.velocity.y * dt);
        this.mesh.translateZ(this.velocity.z * dt);
    }
}