import * as THREE from 'three';
import { CCDIKSolver } from 'three/addons/animation/CCDIKSolver.js';

import { geometry, knees } from './geometry.js';
import { BONES_PER_LEG, iks, skeleton } from './skeleton.js';
import createMixer, { OPEN_FACTOR } from './animations.js';



const SQRT3 = Math.sqrt(3);


const GLOW_COLOR = 0x00ff00;


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


const ORIENTATION_VECTORS = [];
const ORIENTATION_ORIGIN_HEIGHT = SQRT3 * 2;

for (let i = 0, l = 12; i < l; i++) {
    ORIENTATION_VECTORS.push(
        /* new THREE.Vector3()
        .setFromSphericalCoords(1, 5 * Math.PI / 8, i * (2 * Math.PI / l)), */
        new THREE.Vector3()
        .setFromSphericalCoords(1, 6 * Math.PI / 8, i * (2 * Math.PI / l)),
        new THREE.Vector3()
        .setFromSphericalCoords(1, 7 * Math.PI / 8, i * (2 * Math.PI / l))
    );
}


const trigonalmesh = new THREE.SkinnedMesh(
    geometry,
    blockMaterial
);

trigonalmesh.add(skeleton.bones[0]); // root bone
trigonalmesh.bind(skeleton);



const light = new THREE.PointLight( GLOW_COLOR, 1, 20 );
trigonalmesh.add(light);
light.position.add({x: 0, y: SQRT3, z: 0});


const spotlight = new THREE.SpotLight(GLOW_COLOR, 1, 150, Math.PI / 4, 0.5, 10);
const spottarget = new THREE.Object3D();

trigonalmesh.add(spotlight);
trigonalmesh.add(spottarget);
spotlight.position.set(0, SQRT3 * 2, SQRT3);
spottarget.position.set(0, SQRT3 * 2, 1 + SQRT3);
spotlight.target = spottarget;



/* ORIENTATION_VECTORS.forEach(
    dir => {
        const arr = new THREE.ArrowHelper(
            dir,
            new THREE.Vector3(0, SQRT3 * 2, 0),
            3
        );
        trigonalmesh.add(arr);
    }
); */



const raycaster = new THREE.Raycaster();

const tmpVec3 = new THREE.Vector3(),
    tmpQuat = new THREE.Quaternion();

const forwardQuat = new THREE.Quaternion().setFromUnitVectors(
    new THREE.Vector3(0, 1, 0),
    new THREE.Vector3(0, 0, 1)
);



class Trider {
    up = null
    forwards = null

    #moveSpeed = 5


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

    get quaternion() {
        return this.mesh.quaternion;
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

    tick(
        dt,
        cavemesh,
        movinginput
    ) {
        const speed = dt * this.#moveSpeed * Math.min(movinginput.force, 1);
        const moveDirection = tmpVec3.set(
            -movinginput.vector.x,
            0,
            movinginput.vector.y
        ).applyQuaternion(this.quaternion);

        


        const up = this.up,
            down = this.up.clone().negate();
        
        if (moveDirection) {
            const moveAmount = moveDirection.clone().multiplyScalar(speed);

            let newPosn = this.position.clone().add(moveAmount);

            this.position.copy(newPosn);
        }


        // place foot bones on their abs positions,
        // checking they've not gone through the
        // floor
        this.#tickFeet(
            speed,
            cavemesh,
            moveDirection
        );


        const floornormal = new THREE.Vector3().copy(this.up);
        const posn = tmpVec3.copy(this.up).multiplyScalar(ORIENTATION_ORIGIN_HEIGHT).add(this.position).clone();

        ORIENTATION_VECTORS.forEach(
            orientVec => {
                raycaster.set(posn, tmpVec3.copy(orientVec).applyQuaternion(this.quaternion));
                const intersects = raycaster.intersectObject(cavemesh);
                if (intersects[0]) {
                    floornormal.add(intersects[0].normal);
                } else {

                }
            }
        );

        floornormal.normalize();
        tmpQuat.setFromUnitVectors(up, floornormal);
        this.up.applyQuaternion(tmpQuat);
        this.forwards.applyQuaternion(tmpQuat);
        this.mesh.applyQuaternion(tmpQuat);

        
        floornormal.negate();

        raycaster.set(posn, tmpVec3.copy(this.up).negate().applyQuaternion(this.quaternion));
        const floorintersect = raycaster.intersectObject(cavemesh);

        if (
            /* floorintersect[0].distance > ORIENTATION_ORIGIN_HEIGHT * 1.01
            ||  */floorintersect[0].distance < ORIENTATION_ORIGIN_HEIGHT * 0.99
        ) {
            tmpVec3.copy(this.up).multiplyScalar(ORIENTATION_ORIGIN_HEIGHT - floorintersect[0].distance);
            this.mesh.position.add(tmpVec3);
        }


        /* if (
            !this.#footOldPosns[0].equals(this.#footOldPosns[1])
            && !this.#footOldPosns[0].equals(this.#footOldPosns[2])
        ) {
            const tri = new THREE.Triangle(
                this.#footOldPosns[0],
                this.#footOldPosns[1],
                this.#footOldPosns[2],
            );

            tri.getNormal(tmpVec3);

            //console.log(tmpVec3.angleTo(up))
            tmpQuat.setFromUnitVectors(up, tmpVec3.normalize());
            this.up.applyQuaternion(tmpQuat);
            this.forwards.applyQuaternion(tmpQuat);
            this.mesh.applyQuaternion(tmpQuat);
        } */

        this.ikSolver?.update();
    }

    
    #tickFeet(
        speed,
        cavemesh,
        moveDirection
    ) {
        // TODO: this.down ?
        const up = this.up,
            down = this.up.clone().negate();

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
                    this.#stepTs[idx] += speed;
    
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
                const targetdist = target.distanceTo/* Squared */(ideal);

                // check if this foot needs to be moved
                if (
                    targetdist > 1
                    // stagger steps, don't start one while another is running
                    &&!this.#footNewPosns.some(Boolean)
                ) {
                    // if there are multiple options take the
                    // furthest one
                    if (targetdist > toStepWeight) {
                        const absIdeal = this.#localFootToAbsolute(ideal);
                        
                        if (moveDirection) {
                            absIdeal.add(
                                moveDirection.clone().normalize().multiplyScalar(targetdist / 2)
                            );
                        }
                        
                        toStepWeight = targetdist;
                        toStepFn = () => {
                            this.#stepTs[idx] = 0;
                            this.#footOldPosns[idx] = targetAbs;
                            this.#footNewPosns[idx] = absIdeal;
                        }
                    }
                }

                // check foot for collision w/ terrain
                if (this.#stepTs[idx]) {
                    raycaster.set(tmpVec3.copy(targetAbs).add(up), down);

                    const downintersects = raycaster.intersectObject(cavemesh);

                    if (downintersects[0]) {
                        if (downintersects[0].distance < 0.99) {
                            console.log(downintersects[0]);
                            this.#footFaceIdxs[idx] = downintersects[0].faceIndex;
                            this.#stepTs[idx] = 0;
                            this.#footOldPosns[idx] = downintersects[0].point;
                            this.#footNewPosns[idx] = null;
                        }
                    } else {
                        //throw('this should never happen');
                    }
                }

                

                // set bone position to target
                footbone.position.copy(target);
            }
        );

        if (toStepFn) {
            toStepFn();
        }
    }


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
}

const trider = new Trider(trigonalmesh);

export default trider;







function fuzzyequals( a, b ) {
    const epsilon = Number.EPSILON;
    return ( ( Math.abs( a.x - b.x ) < epsilon ) && ( Math.abs( a.y - b.y ) < epsilon ) && ( Math.abs( a.z - b.z ) < epsilon ) );

}