import * as THREE from 'three';
import GameObject from "./GameObject.js";

export default class Player extends GameObject {
    constructor(position) {
        const model = new THREE.BoxGeometry(1, 1, 1);
        super(position, model);

        this.createMesh();
    }

    registerControls(controls) {
        this.controls = controls;
    }

    addToScene(scene) {
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.05,
            100
        );
        camera.position.set(0, 0, 0);
        camera.lookAt(1, 1, 1); // TODO

        const spotlight = new THREE.SpotLight(0xffffff, 1, 25, Math.PI / 7, 0.5, 10);
        camera.add(spotlight);
        spotlight.position.set(0, 0, 1);
        spotlight.target = camera;

        this.camera = camera;
        this.light = spotlight;
        //this.mesh.add(camera);
        scene.add(this.camera);

        this.resizeAborter = new AbortController();

        window.addEventListener(
            'resize',
            function () {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                renderer.setSize( window.innerWidth, window.innerHeight );
            },
            {
                signal: this.resizeAborter.signal
            }
        );

        GameObject.prototype.addToScene.call(this, scene);
    }


    tick(dt) {
        if (this.controls.moving) {
            const { x, y, force } = this.controls.moving;
            this.velocity.set(x, 0, -y).multiplyScalar(Math.min(force, 1) / 750);
        } else {
            this.velocity.set(0, 0, 0);
        }

        if (this.controls.looking) {
            const { x, y, force } = this.controls.looking;
            const vec = new THREE.Vector3(x, y, 0).multiplyScalar(dt * Math.min(force, 1) / 750);
            this.mesh.rotateX(vec.y);
-           this.mesh.rotateY(-vec.x);
        }

        this.camera.position.copy(this.mesh.position);
        this.camera.rotation.copy(this.mesh.rotation);

        this.mesh.updateMatrix();

        GameObject.prototype.tick.call(this, dt);
    }
}