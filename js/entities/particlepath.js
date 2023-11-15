import * as THREE from 'three';

const tmpVec3 = new THREE.Vector3();


const material = new THREE.PointsMaterial({
    color: 0xddccaa,
    size: 0.25
} );


export default class ParticlePath {
    #path;

    constructor(path) {
        this.#path = path;

        const length = this.#path.getLength();

        this.duration = Math.ceil(length / 100);

        console.log(path, length);
        
        this.particles = [];

        for (let i = 0, l = 200; i < l; i++) {
            this.particles.push(
                new Particle(this, i, this.duration * i / l)
            );
        }

        
        this.geometry = new THREE.BufferGeometry();
        this.geometry.setAttribute(
            'position',
            new THREE.Float32BufferAttribute(
                this.particles.map(p => p.arr).flat(),
                3
            )
        );

        this.mesh = new THREE.Points(this.geometry, material);
    }
    tick(dt) {
        this.particles.forEach(
            particle => particle.tick(dt)
        );
    }
    getPointAt(t, vec) {
        this.#path.getPointAt(t / this.duration, vec);
    }
}

class Particle {
    #idx
    #path
    #t
    x
    y
    z
    #speed
    constructor(ppath, idx, t) {
        this.#idx = idx;
        this.#path = ppath;
        this.#t = t ?? idx;
        this.x = (Math.random() - 0.5) * 3;
        this.y = (Math.random() - 0.5) * 3;
        this.z = (Math.random() - 0.5) * 3;
        this.#speed = 1 + ((Math.random() - 0.5) / 10);
    }
    tick(dt) {
        this.#t += dt * this.#speed / 5;

        if (this.#t >= this.#path.duration) {
            this.#t = 0;
        }

        this.#path.getPointAt(this.#t, tmpVec3)
        tmpVec3.add(this);

        this.#path.geometry.attributes.position.setXYZ(
            this.#idx,
            tmpVec3.x,
            tmpVec3.y,
            tmpVec3.z
        );
        this.#path.geometry.attributes.position.needsUpdate = true;
    }
    get arr() {
        return [this.x, this.y, this.z];
    }
}