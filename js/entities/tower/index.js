import * as THREE from 'three';
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';
import { CAVESCALE } from '../cave/index.js';



const vshader = `
uniform float amplitude;
uniform float t;

attribute float height;
attribute float radius;
attribute float theta;

varying vec3 vColor;
varying float vZ;

void main() {
    vColor = color;

    float angle1 = (theta + radius + (t * 2.0)) * 2.0;
    float angle2 = (theta * 17.0) - (t * 2.0);

    float actualheight = amplitude * (
        height
        + (
            sin(angle1)
            *  cos(angle2)
            * height
        )
    );

    vec3 newPosition = position + (normal * actualheight);

    vec4 mvPosition = modelViewMatrix * vec4(newPosition, 1.0);

    gl_PointSize = ( 50.0 / -mvPosition.z );

    gl_Position = projectionMatrix * mvPosition;

    vZ = gl_Position.z;
}
`

const fshader = `
varying vec3 vColor;

void main() {
    gl_FragColor = vec4( vColor, 1.0 );
}
`

const RINGS = 5;


const raycaster = new THREE.Raycaster();
const tmpQuat = new THREE.Quaternion(),
    tmpVec3 = new THREE.Vector3(),
    tmpNormal = new THREE.Vector3();

const tmpPosn = new THREE.Vector3(),
    tmpColor = new THREE.Color();

const up = new THREE.Vector3(0, 1, 0);

class Tower {
    constructor(cavemesh, position, normal, color) {
        this.position = new THREE.Vector3().copy(position);
        this.normal = new THREE.Vector3().copy(normal);
        this.color = new THREE.Color().setHex(color);

        this.#getMesh(
            this.#getGeometry(cavemesh)
        );
    }

    #getGeometry(cavemesh) {
        const points = [],
            normals = [],
            colors = [],
            radii = [],
            heights = [],
            thetas = [];

        tmpQuat.setFromUnitVectors(up, this.normal);
        tmpVec3.copy(this.normal).multiplyScalar(3).add(this.position);
        tmpNormal.copy(this.normal).negate();

        for (let r = 0; r <= RINGS; r += 1) {
            const perRing = r * 6;
            for (let t = 0; t < perRing; t++) {
                const fraction = t / perRing;
                const theta = fraction * Math.PI * 2;

                tmpPosn.set(
                    Math.sin(theta) * (r),
                    0,
                    Math.cos(theta) * (r)
                )
                .applyQuaternion(tmpQuat)
                .add(tmpVec3);

                raycaster.set(
                    tmpPosn,
                    tmpNormal
                );

                const tintersects = raycaster.intersectObject(cavemesh);
                
                if (tintersects.length && tintersects[0].distance < 10) {
                    points.push(
                        tintersects[0].point.x,
                        tintersects[0].point.y,
                        tintersects[0].point.z
                    );
                    normals.push(
                        tintersects[0].normal.x,
                        tintersects[0].normal.y,
                        tintersects[0].normal.z
                    );
                    colors.push(...this.color.toArray());
                    radii.push(r * 2);
                    heights.push(3 / r);
                    thetas.push(theta);
                }
                
            }
        }

        const geom = new THREE.BufferGeometry();
        geom.setAttribute(
            'position',
            new THREE.BufferAttribute( new Float32Array(points), 3 )
        );
        geom.setAttribute(
            'normal',
            new THREE.BufferAttribute( new Float32Array(normals), 3 )
        );
        geom.setAttribute(
            'color',
            new THREE.BufferAttribute( new Float32Array(colors), 3 )
        );
        geom.setAttribute(
            'radius',
            new THREE.BufferAttribute( new Float32Array(radii), 1 )
        );
        geom.setAttribute(
            'height',
            new THREE.BufferAttribute( new Float32Array(heights), 1 )
        );
        geom.setAttribute(
            'theta',
            new THREE.BufferAttribute( new Float32Array(thetas), 1 )
        );

        return geom;
    }

    #getMesh(geom) {
        this.uniforms = {
            t: { value: 0},
            amplitude: { value: 0.5 }
        };
        const material = new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: vshader,
            fragmentShader: fshader,
        
            depthTest: true,
            vertexColors: true
        });
        
        this.mesh = new THREE.Points(
            geom,
            //new THREE.PointsMaterial({ color: this.color, size: 0.1 })
            //new THREE.PointsMaterial({ vertexColors: true }),
            material
        );

        const light = new THREE.PointLight(
            this.color,
            1,
            CAVESCALE * 2
        );

        light.position.copy(this.position).add(this.normal);

        this.mesh.add(light);
    }

    tick(dt) {
        this.uniforms.t.value += dt;
    }
}








export function generateAlongPath(path, color = 0xff0088, cavemesh) {
    const towers = [];
    path.getPoints(Math.round(path.getLength() / 200)).forEach(
        point => {
            raycaster.set(point, tmpVec3.random());
            const tintersects = raycaster.intersectObject(cavemesh);
            
            if (tintersects.length) {
                towers.push(
                    new Tower(
                        cavemesh,
                        tintersects[0].point,
                        tintersects[0].normal,
                        color
                    )
                );
            }
        }
    );
    console.log(towers);
    return towers;
}