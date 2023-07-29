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
)


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

        this.keyboarddirection = {
            fwd: 0,
            back: 0,
            left: 0,
            right: 0
        }

        window.addEventListener(
            'keydown',
            evt => {
                const { key } = evt;

                switch (key) {
                    case 'w':
                        this.keyboarddirection.fwd = 1;
                        break;
                    case 'a':
                        this.keyboarddirection.left = 1;
                        break;
                    case 's':
                        this.keyboarddirection.back = 1;
                        break;
                    case 'd':
                        this.keyboarddirection.right = 1;
                        break;
                }
            },
            {signal: ac.signal}
        );

        window.addEventListener(
            'keyup',
            evt => {
                const { key } = evt;

                switch (key) {
                    case 'w':
                        this.keyboarddirection.fwd = 0;
                        break;
                    case 'a':
                        this.keyboarddirection.left = 0;
                        break;
                    case 's':
                        this.keyboarddirection.back = 0;
                        break;
                    case 'd':
                        this.keyboarddirection.right = 0;
                        break;
                }
            },
            {signal: ac.signal}
        );
    }

    get keyMove() {
        const {fwd, back, left, right} = this.keyboarddirection;
        return fwd || back || left || right
            ? [right - left, fwd - back]
            : null;
    }
}