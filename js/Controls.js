import nipplejs from 'nipplejs';

document.querySelector('.btn-fullscreen').addEventListener(
    'click',
    () => {
        if (!document.fullscreenElement) {
            document.body.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }
);


const baseMovement = {x: 0, y: 0, z: 0, force: 1};

const keys = {
    'w': (ctrl, reverse) => ctrl.keymove('moving', 'up', reverse),
    'a': (ctrl, reverse) => ctrl.keymove('moving', 'left', reverse),
    's': (ctrl, reverse) => ctrl.keymove('moving', 'down', reverse),
    'd': (ctrl, reverse) => ctrl.keymove('moving', 'right', reverse),
    'ArrowUp': (ctrl, reverse) => ctrl.keymove('looking', 'up', reverse),
    'ArrowLeft': (ctrl, reverse) => ctrl.keymove('looking', 'left', reverse),
    'ArrowDown': (ctrl, reverse) => ctrl.keymove('looking', 'down', reverse),
    'ArrowRight': (ctrl, reverse) => ctrl.keymove('looking', 'right', reverse),
}



export default class Controls {
    constructor() {
        this.moving = null;
        this.looking = null;

        this.abortController = new AbortController();

        this.createJoysticks();
        this.bindKeypress();
    }

    createJoysticks() {
        this.leftstick = nipplejs.create({
            zone: document.querySelector('.controls.left'),
            fadeTime: 0
        });
        this.leftstick.on(
            'move',
            (evt, data) => {
                console.log(evt, data);
                const {vector, force} = data;
                if (vector && force) {
                    this.moving = { ...vector, force };
                }
            }
        );
        this.leftstick.on(
            'end',
            () => {
                this.moving = null;
            }
        );

        this.rightstick = nipplejs.create({
            zone: document.querySelector('.controls.right'),
            fadeTime: 0
        });
        this.rightstick.on(
            'move',
            (evt, data) => {
                console.log(evt, data);
                const {vector, force} = data;
                if (vector && force) {
                    this.looking = { ...vector, force };
                }
            }
        );
        this.rightstick.on(
            'end',
            () => {
                this.looking = null;
            }
        );
    }

    bindKeypress() {
        const ac = this.abortController;

        window.addEventListener(
            'keydown',
            evt => {
                const { key } = evt;

                if (keys[key]) {
                    keys[key](this, false);
                }
            },
            {signal: ac.signal}
        );

        window.addEventListener(
            'keyup',
            evt => {
                const { key } = evt;

                if (keys[key]) {
                    keys[key](this, true);
                }
            },
            {signal: ac.signal}
        );
    }
    keymove = (propname, newMovement, reverse) => {
        if (newMovement) {
            const base = this[propname] || baseMovement;
            const vec = {...base};
            const mv = reverse ? 0 : 1;
            switch(newMovement) {
                case 'up':
                    vec.y = mv;
                    break;
                case 'left':
                    vec.x = -mv;
                    break;
                case 'down':
                    vec.y = -mv;
                    break;
                case 'right':
                    vec.x = mv;
                    break;
    
            }
            if (!vec.x && !vec.y && !vec.z) {
                this[propname] = null;
            } else {
                this[propname] = vec;
            }
        } else {
            this[propname] = null;
        }
    }
}