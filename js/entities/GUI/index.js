import * as THREE from 'three';
import Swarm from './Swarm.js';
import Pin from './Pin.js';
import Hiliter from './Hilite.js';


const tmpVec2 = new THREE.Vector2();
const tmpVec3 = new THREE.Vector3();
const tmpQuat = new THREE.Quaternion();
const raycaster = new THREE.Raycaster();

const trimat = new THREE.MeshBasicMaterial({ color: 0xdddd88 });

export default class GameGUI {
    #targeting

    constructor(
        cave,
        camera
    ) {
        this.cave = cave;
        this.camera = camera;


        /* this.pin = new Pin();
        this.pin.init(camera.scene);

        this.swarm = new Swarm();
        this.swarm.init(
            camera.scene,
            camera.renderer
        ); */

        this.hilite = new Hiliter();
        this.hilite.init(camera.scene);


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
                    
                    /* this.camera.scene.add(
                        new THREE.ArrowHelper(
                            clickedcell.normal,
                            clickedcell.centre,
                            25,
                            0xdddd88
                        )
                    ); */

                    if (this.#targeting === clickedcell) {
                        this.camera.lookAt(clickedcell.centre, clickedcell.normal);
                    } else {
                        this.#targeting = clickedcell;
                        /* this.pin.target(clickedcell);
                        this.swarm.target(clickedcell); */
                        this.hilite.retarget(clickedcell);
                    }
                }
            }
        )
    }

    tick(dt) { 
        /* this.pin.tick(dt);
        this.swarm.tick(dt); */
        this.hilite.tick(dt);
    }
}



function normaliseEventScreenCoords(evt) {
    return [
        ((evt.clientX / window.innerWidth) * 2) - 1, 
        -(((evt.clientY / window.innerHeight) * 2) - 1)
    ];
}