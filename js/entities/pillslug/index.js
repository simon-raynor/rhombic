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
geom.scale(0.5, 0.5, 0.5);


const tmpQuat = new THREE.Quaternion();
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
        if (!this.target && this.targets?.length) {
            this.#findTarget();
        }

        //this.position.add(tmpVec3A.copy(stdFwd).multiplyScalar(1/100).applyQuaternion(this.quaternion));
        //this.mesh.position.copy(this.position);
        //this.mesh.applyQuaternion(this.quaternion);
    }

    #getMesh() {
        const material = new THREE.MeshLambertMaterial({
            color: 0xcccccc,
            flatShading: true,
            /* vertexShader: `
            void main() {
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

                gl_Position = projectionMatrix * mvPosition;
            }
            `, */
        });
        console.log(new THREE.MeshLambertMaterial());

        this.mesh = new THREE.Mesh(
            geom,
            material
        );
    }

    #findTarget() {
        this.targets.forEach(
            target => {
                raycaster.set(
                    this.position,
                    tmpVec3A.copy(target.position).sub(this.position).normalize()
                );
                const intersect = raycaster.intersectObject(this.cave.mesh);

                if (
                    intersect
                    && intersect[0].distance < 250
                    && target.position.distanceToSquared(intersect[0].point) < 10
                ) {
                    console.log(target);

                    this.target = target;
                }
            }
        )
    }

    placeInCell(cavecell) {
        const { point, normal } = cavecell.getRandomPointOnMesh();

        this.position.copy(point);
        this.normal = new THREE.Vector3().copy(normal);
        this.quaternion = new THREE.Quaternion().setFromUnitVectors(stdUp, this.normal);

        this.mesh.applyQuaternion(this.quaternion);
    }

    registerTargets(targets) {
        this.targets = targets;
    }

    get position() {
        return this.mesh.position;
    }
}