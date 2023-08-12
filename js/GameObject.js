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

        this.generateCollisionVectors();
    }

    generateCollisionVectors() {
        const positions = this.mesh.geometry.attributes.position.array;
        
        const vectors = [];
        const distances = [];
        const done = [];

        for (let i = 0; i < positions.length; i += 3) {
            const x = positions[i],
                y = positions[i + 1],
                z = positions[i + 2];
            
            // used to avoid dupicates
            const str = `${x},${y},${z}`;

            if (!done.includes(str)) {
                vectors.push(
                    new THREE.Vector3(
                        x,
                        y,
                        z
                    ).normalize()
                );
                distances.push(
                    Math.sqrt((x * x) + (y * y) + (z * z))
                );

                done.push(str);
            }
        }

        this.collisionVectors = vectors;
        this.collisionDistances = distances;
    }

    addToScene(scene) {
        if (!this.mesh) {
            this.createMesh();
        }
        scene.add(this.mesh);
    }

    detectCollisions(gameobjects) {
        const intersects = [];

        this.collisionVectors.forEach(
            (vec, idx) => {
                raycaster.set(
                    this.mesh.position,
                    vec
                );

                const radius = this.collisionDistances[idx];

                const vecIntersects = raycaster
                                .intersectObjects(gameobjects)
                                .filter(({distance}) => distance < radius);

                intersects.push(...vecIntersects);
            }
        )

        if (intersects.length) {
            this.collide(intersects);
        }
    }

    collide(intersects) {
        const first = intersects[0];

        this.velocity.reflect(first.normal);
        this.applyVelocity(30);
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