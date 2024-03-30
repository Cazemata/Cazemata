class Preload extends Phaser.State {

    preload() {
        /* Preload required assets */
        //this.game.load.image('myImage', 'assets/my-image.png');
        //this.game.load.audio('myAudio', 'assets/my-audio.wav');
        //this.game.load.atlas('myAtlas', 'assets/my-atlas.png', 'assets/my-atlas.json');
        this.game.load.image('back', '../static/assets/ilu_bg.png');
        this.game.load.image('mid3', '../static/assets/ilu_03.png');
        this.game.load.image('mid2', '../static/assets/ilu_02.png');
        this.game.load.image('mid1', '../static/assets/ilu_01.png');
        this.game.load.image('man', '../static/assets/ilu_man.png');
        this.game.load.image('sun', '../static/assets/sun.png');
        this.game.load.image('moon', '../static/assets/moon.png');
    }

    create() {
        //NOTE: Change to GameTitle if required
        this.game.state.start("Main");
    }

}

export default Preload;
