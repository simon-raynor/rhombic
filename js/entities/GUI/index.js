import * as THREE from 'three';
//import Swarm from './Swarm';
//import Pin from './Pin';
import Hiliter from './Hilite';


const tmpVec2 = new THREE.Vector2();
const tmpVec3 = new THREE.Vector3();
const tmpQuat = new THREE.Quaternion();
const raycaster = new THREE.Raycaster();

const trimat = new THREE.MeshBasicMaterial({ color: 0xdddd88 });

export default class GameGUI {
    #targeting
    #previouslyTargeting

    constructor(
        cave,
        camera
    ) {
        this.cave = cave;
        this.camera = camera;


        this.hilite = new Hiliter();
        this.hilite.init(camera.scene);


        /* this.path = new ClickPath();
        this.path.init(cave, camera.scene); */


        window.addEventListener(
            'click',
            evt => {
                raycaster.setFromCamera(
                    tmpVec2.set(
                        ...normaliseEventScreenCoords(evt)
                    ),
                    this.camera.instance
                );
                const intersect = raycaster.intersectObjects([
                    this.cave.mesh
                ]);

                if (intersect[0]) {
                    const clickedcell = this.cave.pathfinder.getClosestNode(intersect[0].point).cell;

                    if (this.#targeting === clickedcell) {
                        this.camera.lookAt(clickedcell.centre, clickedcell.normal, 1);
                    } else {
                        this.#previouslyTargeting = this.#targeting;
                        this.#targeting = clickedcell;
                        this.hilite.retarget(clickedcell);

                        this.camera.lookAt(clickedcell.centre, clickedcell.normal, 0.05);

                        /* if (this.#targeting && this.#previouslyTargeting) {
                            this.path.setPoints(
                                this.#previouslyTargeting,
                                this.#targeting
                            );
                        } */
                    }
                }
            }
        )
    }

    tick(dt) { 
        this.hilite.tick(dt);
    }
}



function normaliseEventScreenCoords(evt) {
    return [
        ((evt.clientX / window.innerWidth) * 2) - 1, 
        -(((evt.clientY / window.innerHeight) * 2) - 1)
    ];
}


class ClickPath {
    #mesh

    constructor() {}

    init(cave, scene) {
        this.cave = cave;
        this.scene = scene;

        const geom = new THREE.BufferGeometry();
        geom.setAttribute('position', new THREE.BufferAttribute(new Float32Array(300), 3));

        const mate = new THREE.LineDashedMaterial({
            color: 0x00ff00,
            dashSize: 2,
            gapSize: 1,
        });

        this.#mesh = new THREE.Line(
            geom,
            
        );
        this.#mesh.frustumCulled = false;
        
        scene.add(this.#mesh);
    }

    setPoints(from, to) {
        const path = this.cave.findPathCellToCell(
            from,
            to
        );
        this.#mesh.geometry.attributes.position.set(
            new THREE.CatmullRomCurve3(
                path.map(node => node.normal.clone().multiplyScalar(5).add(node.position))
            ).getPoints(99).flatMap(p => p.toArray())
        );
        this.#mesh.geometry.attributes.position.needsUpdate = true;
    }
}