import * as THREE from 'three';


const tmpNormal = new THREE.Vector3();
const tmpVertex = new THREE.Vector3();
const tmpObj3d = new THREE.Object3D();
const tmpQuat = new THREE.Quaternion();
const STD_UP = new THREE.Vector3(0, 1, 0);


const SEGMENT_COUNT = 1;

const SQRT3 = Math.sqrt(3);
const H = Math.sqrt(3) / 2;

/* const geom = [
    0, 0, -SQRT3/3,
    1/2, 0, SQRT3/6,
    -1/2, 0, SQRT3/6,
    0, 16, 0,
] */
const geom = new THREE.ConeGeometry(1, 16, 3);


const SEGMENT_SIZE = 3;

const STALK_POINTS = 3;
const STALK_RADIUS = 0.4;


export default class Vine {
    #uniforms = null;

    get position() {
        return this.gridcell.centre;
    }
    get normal() {
        return this.gridcell.normal;
    }

    constructor(gridcell) {
        this.gridcell = gridcell;
        this.findTarget();

        this.getGeometry();

        this.#uniforms = {
            t: { value: 0, type: 'f' },
        }

        /* const material = new THREE.MeshPhongMaterial({
            color: 0x22dd00
        });

        this.mesh = new THREE.Mesh(
            geom,
            material
        ); */
    }

    findTarget() {
        const available = this.gridcell.neighbours.flatMap(
            othercell => othercell.neighbours.map(
                otherothercell => otherothercell !== this.gridcell
                            && !this.gridcell.neighbours.includes(otherothercell)
                                ? otherothercell
                                : null
            ).filter(v => !!v)
        );

        this.target = available[
            Math.floor(Math.random() * available.length)
        ];
    }

    getGeometry() {
        const { centre, normal } = this.target;

        // TODO: adjust curve based on proximity of endpoints and
        //      the angle between normals
        this.curve = new THREE.CubicBezierCurve3(
            this.position,
            this.normal.clone().multiplyScalar(20).add(this.position),
            new THREE.Vector3().copy(normal).multiplyScalar(20).add(centre),
            new THREE.Vector3().copy(centre)
        );

        const length = this.curve.getLength();
        this.segmentCount = Math.floor(length / SEGMENT_SIZE);

        const [
            stalkVertices,
            //stalkNormals,
            stalkIndices,
            stalkUVs
        ] = this.#generateStalk();


        const vertices = [...stalkVertices];
        //const normals = [...stalkNormals];
        const indices = [...stalkIndices];
        const uvs = [...stalkUVs];


        const geom = new THREE.BufferGeometry();
        geom.setIndex(indices);
        geom.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        //geom.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
        geom.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
        geom.toNonIndexed();
        geom.computeVertexNormals();


        this.mesh = new THREE.Mesh(
            geom,
            new THREE.MeshPhongMaterial({ color: 0x22ee00, flatShading: true })
        );
    }

    #generateStalk() {
        const vertices = [];
        //const normals = [];
        const indices = [];
        const uvs = [];

        const frames = this.curve.computeFrenetFrames(this.segmentCount);

        // generate vertices
        for (let i = 0; i <= this.segmentCount; i++) {
            const p = this.curve.getPointAt(i / this.segmentCount);
            const t = frames.tangents[i];
            const n = frames.normals[i];
            const b = frames.binormals[i];

            for (let j = 0; j <= STALK_POINTS; j++) {
                const [vertex, normal] = this.#generateStalkPoint(j, p, n, b);

                //normals.push(normal.x, normal.y, normal.z);
                vertices.push(vertex.x, vertex.y, vertex.z);
            }

            // leaf vertex
            const theta = ((i % STALK_POINTS) / STALK_POINTS) * Math.PI * 2;

            const sin = Math.sin(theta);
            const cos = - Math.cos(theta);

            tmpNormal.x = (cos * n.x) + (sin * b.x);
            tmpNormal.y = (cos * n.y) + (sin * b.y);
            tmpNormal.z = (cos * n.z) + (sin * b.z);
            tmpNormal.normalize();

            tmpVertex.x = p.x + (t.x * 2) + (3 * STALK_RADIUS * tmpNormal.x);
            tmpVertex.y = p.y + (t.y * 2) + (3 * STALK_RADIUS * tmpNormal.y);
            tmpVertex.z = p.z + (t.z * 2) + (3 * STALK_RADIUS * tmpNormal.z);

            //normals.push(tmpNormal.x, tmpNormal.y, tmpNormal.z);
            vertices.push(tmpVertex.x, tmpVertex.y, tmpVertex.z);
        }

        // generate faces + uvs
        for (let i = 0; i < this.segmentCount; i++) {
            for (let j = 0; j < STALK_POINTS; j++) {
                const a = (STALK_POINTS + 2) * i + j;
                const b = (STALK_POINTS + 2) * (i + 1) + j;
                const c = (STALK_POINTS + 2) * (i + 1) + (j + 1);
                const d = (STALK_POINTS + 2) * i + (j + 1);

                indices.push(a, b, d);
                indices.push(b, c, d);

                uvs.push(i / this.segmentCount, j / (STALK_POINTS * 2));
            }

            // leaf faces
            const a = (STALK_POINTS + 2) * i;
            const b = (STALK_POINTS + 2) * i + 1;
            const c = (STALK_POINTS + 2) * i + 2;
            const d = (STALK_POINTS + 2) * i + 4;

            switch (i % STALK_POINTS) {
                case 0:
                    indices.push(a, b, d);
                    indices.push(b, a, d);
        
                    indices.push(a, c, d);
                    indices.push(c, a, d);
                    break;
                case 1:
                    indices.push(c, b, d);
                    indices.push(b, c, d);
        
                    indices.push(a, b, d);
                    indices.push(b, a, d);
                    break;
                case 2:
                    indices.push(c, b, d);
                    indices.push(b, c, d);
        
                    indices.push(a, c, d);
                    indices.push(c, a, d);
                    break;
            }

        }

        return [
            vertices,
            //normals,
            indices,
            uvs
        ];
    }

    #generateStalkPoint(j, p, n, b) {
        const theta = (j / STALK_POINTS) * Math.PI * 2;

        const sin = Math.sin(theta);
        const cos = - Math.cos(theta);

        tmpNormal.x = (cos * n.x) + (sin * b.x);
        tmpNormal.y = (cos * n.y) + (sin * b.y);
        tmpNormal.z = (cos * n.z) + (sin * b.z);
        tmpNormal.normalize();

        tmpVertex.x = p.x + (STALK_RADIUS * tmpNormal.x);
        tmpVertex.y = p.y + (STALK_RADIUS * tmpNormal.y);
        tmpVertex.z = p.z + (STALK_RADIUS * tmpNormal.z);

        return [tmpVertex, tmpNormal];
    }

    tick(dt) {
        this.#uniforms.t.value += dt;
    }
}