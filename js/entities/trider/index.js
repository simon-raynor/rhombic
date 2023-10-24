import * as THREE from 'three';
import { CCDIKSolver } from 'three/addons/animation/CCDIKSolver.js';

import { geometry } from './geometry.js';
import { BONES_PER_LEG, iks, skeleton } from './skeleton.js';
import createMixer from './animations.js';








const texture = new THREE.TextureLoader().load('/img/wall-atlas.png');
const texturebump = new THREE.TextureLoader().load('/img/wall-atlas-bumps.png');

export const blockMaterial = new THREE.MeshLambertMaterial({
    map: texture,
    bumpMap: texturebump,
    bumpScale: 0.05,
    side: THREE.DoubleSide
});





const trigonalmesh = new THREE.SkinnedMesh(
    geometry,
    blockMaterial
);

trigonalmesh.add(skeleton.bones[0]); // root bone
trigonalmesh.bind(skeleton);




class Trider {
    moveDirection = null
    facing = new THREE.Vector3(1, 0, 0)

    isOpen = false

    constructor(mesh) {
        this.mesh = mesh;
        this.footPositions = [
            this.mesh.skeleton.bones[1 + BONES_PER_LEG].position,
            this.mesh.skeleton.bones[1 + BONES_PER_LEG + BONES_PER_LEG].position,
            this.mesh.skeleton.bones[1 + BONES_PER_LEG + BONES_PER_LEG + BONES_PER_LEG].position,
        ];

        this.anim = createMixer(this.mesh);

        this.ikSolver = new CCDIKSolver( this.mesh, iks );

        const helper = this.ikSolver.createHelper();
        this.mesh.add( helper );
    }

    tick(dt) {
        this.anim.mixer.update(dt);

        if (!this.isOpen) {
            this.#tickOpen(dt);
        } else if (this.moveDirection) {
            this.#tickMove(dt);
        }

        this.ikSolver?.update();
    }

    #tickOpen(dt) {
        const { openAction } = this.anim;

        if (!openAction.isRunning()) {
            if (openAction.time) {
                this.isOpen = true;
            } else {
                openAction.play();
            }
        }
    }

    #tickMove(dt) {
        const { stepAction } = this.anim;

        if (!stepAction.isRunning()) {
            stepAction.play();
        }
    }
}

const trider = new Trider(trigonalmesh);

export default trider;
