import * as THREE from 'three';
import Swarm from './Swarm.js';
import Pin from './Pin.js';


const tmpVec2 = new THREE.Vector2();
const tmpVec3 = new THREE.Vector3();
const tmpQuat = new THREE.Quaternion();
const raycaster = new THREE.Raycaster();

const trimat = new THREE.MeshBasicMaterial({ color: 0xdddd88 });

export default class GameGUI {
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

                    if (this.swarm.targeting === clickedcell) {
                        this.camera.lookAt(clickedcell.centre, clickedcell.normal);
                    } else {
                        this.pin.target(clickedcell);
                        this.swarm.target(clickedcell);
                    }
                }
            }
        )
    }

    tick(dt) { 
        this.pin.tick(dt);
        this.swarm.tick(dt);
    }
}



function normaliseEventScreenCoords(evt) {
    return [
        ((evt.clientX / window.innerWidth) * 2) - 1, 
        -(((evt.clientY / window.innerHeight) * 2) - 1)
    ];
}