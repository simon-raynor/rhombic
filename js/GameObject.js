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

        this.spin = new THREE.Vector3();
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

        for (let i = 0; i < directions.length; i++) {
            raycaster.set(
                this.mesh.position,
                directions[i]
            );

            intersects.push(...raycaster.intersectObjects(gameobjects));
        }

        if (intersects.length) {
            this.collide(intersects.filter(({distance}) => distance < radius));
        }
    }

    collide(intersects) {
        if (intersects.length) {
            const first = intersects[0];

            this.velocity.reflect(first.normal);
            this.applyVelocity(30);
        }
    }

    tick(dt, gameobjects) {
        this.detectCollisions(gameobjects);

        this.applyVelocity(dt);
        this.applyRotation(dt);

        this.decayVelocity();
        this.decaySpin();
    }

    applyVelocity(dt) {
        const vStep = this.velocity.clone().multiplyScalar(dt);
        this.mesh.position.add(vStep);
    }

    applyRotation(dt) {
        this.mesh.rotateX(this.spin.y * dt);
        this.mesh.rotateY(-this.spin.x * dt);
        this.mesh.rotateZ(this.spin.z * dt);
    }

    decayVelocity() {
        this.velocity.multiplyScalar(0.99);
    }
    decaySpin() {
        this.spin.multiplyScalar(0.95);
        //this.spin.set(0, 0, 0);
    }
}