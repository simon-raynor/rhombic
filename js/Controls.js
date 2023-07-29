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

        this.createJoysticks();
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
}