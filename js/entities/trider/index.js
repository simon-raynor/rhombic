import * as THREE from 'three';
import { CCDIKSolver } from 'three/addons/animation/CCDIKSolver.js';

import { geometry, knees } from './geometry.js';
import { BONES_PER_LEG, iks, skeleton } from './skeleton.js';
import createMixer, { OPEN_FACTOR } from './animations.js';



const SQRT3 = Math.sqrt(3);


const GLOW_COLOR = 0xff0000;


const texture = new THREE.TextureLoader().load('/img/trider-atlas.png');
const texturebump = new THREE.TextureLoader().load('/img/trider-atlas-bumps.png');
const textureemissive = new THREE.TextureLoader().load('/img/trider-atlas-emissive.png');

texture.magFilter = THREE.NearestFilter;
texture.minFilter = THREE.NearestMipmapNearestFilter;
texturebump.magFilter = THREE.NearestFilter;
texturebump.minFilter = THREE.NearestMipmapNearestFilter;
textureemissive.magFilter = THREE.NearestFilter;
textureemissive.minFilter = THREE.NearestMipmapNearestFilter;

export const blockMaterial = new THREE.MeshLambertMaterial({
    map: texture,
    bumpScale: 0.1,
    bumpMap: texturebump,
    emissive: GLOW_COLOR,
    emissiveMap: textureemissive,
});



const BASE_STANCE = knees.map(
    ({x, z}) => new THREE.Vector3(
        x * OPEN_FACTOR,
        0,//-SQRT3,
        z * OPEN_FACTOR
    )
);

const STRIDE = 2;
const STRIDE2 = STRIDE * STRIDE;


const trigonalmesh = new THREE.SkinnedMesh(
    geometry,
    blockMaterial
);

trigonalmesh.add(skeleton.bones[0]); // root bone
trigonalmesh.bind(skeleton);



const light = new THREE.PointLight( GLOW_COLOR, 1, 20 );
trigonalmesh.add(light);
light.position.add({x: 0, y: SQRT3 / 2, z: 0});


const raycaster = new THREE.Raycaster();



const tmpVec3 = new THREE.Vector3(),
    tmpQuat = new THREE.Quaternion();

const forwardQuat = new THREE.Quaternion().setFromUnitVectors(
    new THREE.Vector3(0, 1, 0),
    new THREE.Vector3(0, 0, 1)
);



class Trider {
    moveDirection = null

    up = null
    forwards = null

    #moveSpeed = 1
    facing = new THREE.Vector3(0, 0, 1)

    isOpen = false


    #footIKBones = [];
    #footFaceIdxs = [];

    #footOldPosns = [tmpVec3.clone(), tmpVec3.clone(), tmpVec3.clone()];
    #footNewPosns = [tmpVec3.clone(), tmpVec3.clone(), tmpVec3.clone()];

    #stepTs = [0, 0, 0];

    constructor(mesh) {
        this.mesh = mesh;
        this.#footIKBones = [
            this.mesh.skeleton.bones[1 + BONES_PER_LEG],
            this.mesh.skeleton.bones[1 + BONES_PER_LEG + BONES_PER_LEG],
            this.mesh.skeleton.bones[1 + BONES_PER_LEG + BONES_PER_LEG + BONES_PER_LEG],
        ];

        this.ikSolver = new CCDIKSolver( this.mesh, iks );

        /* const helper = this.ikSolver.createHelper();
        this.mesh.add( helper ); */
    }

    get position() {
        return this.mesh.position;
    }

    init(
        position,
        normal,
        cavemesh
    ) {
        this.up = normal;
        const down = this.up.clone().negate();

        this.forwards = this.up.clone().applyQuaternion(forwardQuat);
        this.mesh.lookAt(this.forwards);

        this.moveDirection = this.forwards;


        this.position.copy(position);

        // convert the normal old posns to
        // the trider's position etc.
        this.#footOldPosns = this.#footOldPosns.map(
            foot => this.#localFootToAbsolute(foot)
        );

        // create new posns based on BASE_STANCE
        this.#footNewPosns = BASE_STANCE.map(
            foot => this.#localFootToAbsolute(foot)
        );

        // find out which face we're on and set it for each foot
        raycaster.set(tmpVec3.copy(this.position).add(this.up), down);
        const intersects = raycaster.intersectObject(cavemesh);
        this.#footFaceIdxs = [intersects[0].faceIndex, intersects[0].faceIndex, intersects[0].faceIndex];
    }

    tick(dt, cavemesh) {
        const up = this.up,
            down = this.up.clone().negate();
        
        if (this.moveDirection) {
            const moveAmount = this.moveDirection.clone().multiplyScalar(dt * this.#moveSpeed);

            let newPosn = this.position.clone().add(moveAmount);

            raycaster.set(tmpVec3.copy(newPosn).add(up), down);

            const intersects = raycaster.intersectObject(cavemesh);

            if (intersects[0] && fuzzyequals(intersects[0].normal, up)) {
                this.position.copy(newPosn);
            } else {
                this.moveDirection.negate();
            }
        }


        // place foot bones on their abs positions

        // reverse rotation to work out footbone posns
        tmpQuat.copy(this.mesh.quaternion).invert();

        let toStepWeight = 0;
        let toStepFn = null;

        this.#footIKBones.forEach(
            (footbone, idx) => {
                const ideal = BASE_STANCE[idx];

                // default/resting behaviour is to put bone
                // at old position
                const oldPosn = this.#footOldPosns[idx];

                let target = this.#absoluteFootToLocal(oldPosn, tmpQuat);

                // if there is a newPosn we'll need to lerp
                const newPosn = this.#footNewPosns[idx];

                if (newPosn) {
                    this.#stepTs[idx] += dt;
    
                    const stepT = Math.min(this.#stepTs[idx], 1);

                    const newTarget = this.#absoluteFootToLocal(newPosn, tmpQuat);

                    target.lerp(newTarget, stepT);

                    // lift foot
                    target.add({
                        x: 0,
                        y: Math.sin(stepT * Math.PI),
                        z: 0
                    });

                    if (stepT >= 1) {
                        this.#stepTs[idx] = 0;
                        this.#footOldPosns[idx] = this.#footNewPosns[idx];
                        this.#footNewPosns[idx] = null;
                    }
                }


                let targetAbs = this.#localFootToAbsolute(target);


                if (target.distanceToSquared(ideal) > STRIDE2) {
                    const absIdeal = this.#localFootToAbsolute(ideal);
                    
                    if (this.moveDirection) {
                        absIdeal.add(
                            this.moveDirection.clone().normalize().multiplyScalar(STRIDE)
                        );

                        /* raycaster.set(tmpVec3.copy(absIdeal).add(up), down);

                        const downintersects = raycaster.intersectObject(cavemesh);

                        const downdist = downintersects[0] ? downintersects[0].distance : Math.Infinity;

                        if (
                            downdist < 0.99
                        ) {
                            absIdeal.copy(downintersects[0].point);
                            console.log(downintersects[0])
                            // TODO tilt main vector
                        } */
                    }

                    // stagger steps, don't start one while another is running
                    if (
                        !this.#footNewPosns.some(Boolean)
                    ) {
                        const weight = target.lengthSq();

                        if (weight > toStepWeight) {
                            toStepWeight = weight;
                            toStepFn = () => {
                                this.#stepTs[idx] = 0;
                                this.#footOldPosns[idx] = targetAbs;
                                this.#footNewPosns[idx] = absIdeal;
                            }
                        }
                    }
                }

                if (this.#stepTs[idx]) {
                    raycaster.set(tmpVec3.copy(targetAbs), down);

                    const downintersects = raycaster.intersectObject(cavemesh);

                    raycaster.set(tmpVec3.copy(targetAbs), up);

                    const upintersects = raycaster.intersectObject(cavemesh);

                    let closest;

                    if (downintersects[0]) {
                        if (
                            upintersects[0]
                            && downintersects[0].distance > upintersects[0].distance
                        ) {
                            closest = upintersects[0];
                        } else {
                            closest = downintersects[0];
                        }
                    } else if (upintersects[0]) {
                        closest = upintersects[0];
                    } else {
                        //throw('this should never happen');
                    }

                    if (
                        closest
                        && this.#footFaceIdxs[idx] != closest.faceIndex
                        //&& !fuzzyequals(closest.normal, up)
                    ) {
                        // foot just collided with a face it wasn't walking on
                        console.log(closest);
                        this.#footFaceIdxs[idx] = closest.faceIndex;
                        this.#stepTs[idx] = 0;
                        this.#footOldPosns[idx] = closest.point;
                        this.#footNewPosns[idx] = null;
                    }
                }

                

                // set bone position to target
                footbone.position.copy(target);
            }
        );

        if (toStepFn) {
            toStepFn();
        }



        const tri = new THREE.Triangle(
            this.#footOldPosns[0],
            this.#footOldPosns[1],
            this.#footOldPosns[2],
        );

        tri.getNormal(tmpVec3);
        tmpQuat.setFromUnitVectors(tmpVec3, up);
        /* this.up.applyQuaternion(tmpQuat);
        this.forwards.applyQuaternion(tmpQuat); */
        this.mesh.lookAt(tmpVec3.copy(this.position).add(this.forwards));


        this.ikSolver?.update();
    }

    #resetStep(idx, newPosn, oldPosn) {}

    #localFootToAbsolute(loc) {
        return tmpVec3.copy(loc)
            .applyQuaternion(this.mesh.quaternion)
            .add(this.position).clone();
    }

    #absoluteFootToLocal(abs, quat) {
        return tmpVec3.copy(abs)
            .sub(this.position)
            .applyQuaternion(quat).clone();
    }

    #tickOpen(dt) {
    }

    #stepT = 0

    #tickMove(dt) {
    }
}

const trider = new Trider(trigonalmesh);

export default trider;







function fuzzyequals( a, b ) {
    const epsilon = Number.EPSILON;
    return ( ( Math.abs( a.x - b.x ) < epsilon ) && ( Math.abs( a.y - b.y ) < epsilon ) && ( Math.abs( a.z - b.z ) < epsilon ) );

}