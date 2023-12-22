import * as THREE from 'three';

const POINTS = [
    new THREE.Vector2(0, -11),
    new THREE.Vector2(3, -9.5),
    new THREE.Vector2(6, -6),

    new THREE.Vector2(5, -6),
    new THREE.Vector2(7, -1),

    new THREE.Vector2(6, -1),
    new THREE.Vector2(6.5, 4),

    new THREE.Vector2(5.5, 4),
    new THREE.Vector2(4.25, 8),

    new THREE.Vector2(3.5, 8),
    new THREE.Vector2(2.5, 10),
    new THREE.Vector2(0, 11)
]

const geom = new THREE.LatheGeometry(POINTS, 4 , 0, Math.PI);

geom.rotateZ(Math.PI / 2);
geom.rotateY(-Math.PI / 2);
geom.scale(0.4, 0.4, 0.4);


const tmpQuat = new THREE.Quaternion();
const anotherTmpQuat = new THREE.Quaternion();
const tmpVec3A = new THREE.Vector3();
const tmpVec3B = new THREE.Vector3();
const stdUp = new THREE.Vector3(0, 1, 0);
const stdFwd = new THREE.Vector3(0, 0, 1);

const raycaster = new THREE.Raycaster();


export default class Pillslug {
    target = null;
    constructor(cavecell) {
        this.cave = cavecell.cave;

        this.#getMesh();

        this.placeInCell(cavecell);
    }

    tick(dt) {
        this.moveAlongPath(dt);
        //this.position.add(tmpVec3A.copy(stdFwd).multiplyScalar(1/100).applyQuaternion(this.quaternion));
        //this.mesh.position.copy(this.position);
        //this.mesh.applyQuaternion(this.quaternion);
    }

    #getMesh() {
        const material = new THREE.MeshLambertMaterial({
            color: 0xccdd77,
            flatShading: true,
            emissive: 0x112200
            /* vertexShader: `
            void main() {
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

                gl_Position = projectionMatrix * mvPosition;
            }
            `, */
        });
        //console.log(new THREE.MeshLambertMaterial());

        this.mesh = new THREE.Mesh(
            geom,
            material
        );
    }

    placeInCell(cavecell) {
        const { point, normal } = cavecell.getRandomPointOnMesh();

        this.position.copy(point);
        this.normal = new THREE.Vector3().copy(normal);
        this.quaternion = new THREE.Quaternion().setFromUnitVectors(stdUp, this.normal);

        this.mesh.applyQuaternion(this.quaternion);
    }

    get position() {
        return this.mesh.position;
    }

    pathfind() {
        this.path = this.cave.pathfinder.pathfind(
            this.position,
            this.target.position
        );
    }

    moveAlongPath(dt) {
        if (!this.path) {
            this.pathfind();
        }
        if (!this.moveTarget) {
            this.moveTarget = this.path.shift();
        }

        if (this.moveTarget) {
            const step = dt * 5;
            
            tmpVec3A.copy(this.moveTarget.position).sub(this.position);

            const distance = tmpVec3A.length();

            if (distance >= step) {
                tmpVec3A.multiplyScalar(step / distance);
            } else {
                this.moveTarget = null;
            }

            //this.position.add(tmpVec3A);

            tmpVec3A.copy(this.position).add(this.normal);
            tmpVec3B.copy(this.normal).negate();

            raycaster.set(
                tmpVec3A,
                tmpVec3B
            );

            const intersects = raycaster.intersectObject(this.cave.mesh);

            if (intersects[0]) {
                if (intersects[0].distance < 1) {
                    tmpVec3A.copy(this.normal).negate().multiplyScalar(1 - intersects[0].distance);
                    this.position.add(tmpVec3A);
                }

                tmpQuat.identity().slerp(
                    anotherTmpQuat.setFromUnitVectors(this.normal, intersects[0].normal),
                    0.1
                );
                this.normal.applyQuaternion(tmpQuat);
                this.mesh.applyQuaternion(tmpQuat);
            }
        }
    }
}