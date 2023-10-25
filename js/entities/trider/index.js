import * as THREE from 'three';
import { CCDIKSolver } from 'three/addons/animation/CCDIKSolver.js';

import { geometry, knees } from './geometry.js';
import { BONES_PER_LEG, iks, skeleton } from './skeleton.js';
import createMixer, { OPEN_FACTOR } from './animations.js';



const SQRT3 = Math.sqrt(3);




const texture = new THREE.TextureLoader().load('/img/trider-atlas.png');
const texturebump = new THREE.TextureLoader().load('/img/trider-atlas-bumps.png');

//texture.magFilter = THREE.NearestFilter;
//texturebump.magFilter = THREE.NearestFilter;

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



const FOOT_SWEETSPOTS = knees.map(
    knee => {
        const foot = knee.clone().multiplyScalar(OPEN_FACTOR * 2 / 3);
        foot.y = -SQRT3;
        return foot;
    }
);
const SWEETSPOT_DISTANCE = 3;
const SWEETSPOT_DISTANCE_2 = SWEETSPOT_DISTANCE * SWEETSPOT_DISTANCE;



class Trider {
    moveDirection = null
    #moveSpeed = 3
    facing = new THREE.Vector3(0, 0, 1)

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

        /* const helper = this.ikSolver.createHelper();
        this.mesh.add( helper ); */
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
        const { stepAction, turnAction } = this.anim;

        if (!stepAction.isRunning()) {
            stepAction.play();
        }
        /* if (!turnAction.isRunning()) {
            turnAction.play();
        } */
        const moveAmount = this.moveDirection.clone().multiplyScalar(dt * this.#moveSpeed);

        //this.mesh.position.add(moveAmount)

        const facing = this.mesh.position.clone().add(this.facing);

        this.mesh.lookAt(facing);



        const rotationNeeded = this.facing.angleTo(this.moveDirection);
        const turnSpeed = dt * Math.PI / 4;
        const turn = Math.floor(rotationNeeded / turnSpeed);

        if (rotationNeeded) {
            if (rotationNeeded > turnSpeed) {
                this.facing.lerp(this.moveDirection, 1 / turn );
            } else {
                this.facing.copy(this.moveDirection);
            }
        }


        /* if (this.steppingIdx === null) {
            this.steppingIdx = Math.round(Math.random() * 2);
        }

        const moveAmount = this.moveDirection.clone().multiplyScalar(dt);

        this.footPositions.forEach(
            (posn, idx) => {
                const newPosn = this.steppingIdx === idx
                                ? posn.clone().add(moveAmount).add(moveAmount)
                                : posn.clone().sub(moveAmount);

                const posnDistance = posn.distanceToSquared(FOOT_SWEETSPOTS[idx]),
                    newPosnDistance = newPosn.distanceToSquared(FOOT_SWEETSPOTS[idx])

                if (posnDistance > SWEETSPOT_DISTANCE_2 && newPosnDistance > posnDistance) {
                    if (this.steppingIdx === idx) {
                        this.steppingIdx = null;
                    }
                } else  if (newPosnDistance > SWEETSPOT_DISTANCE_2 && newPosnDistance > posnDistance) {
                    this.steppingIdx = idx;
                } else {
                    posn.copy(newPosn);
                }
            }
        ) */

    }
}

const trider = new Trider(trigonalmesh);

export default trider;
