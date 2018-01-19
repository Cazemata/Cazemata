//import ExampleObject from 'objects/ExampleObject';
import DayCycle from 'objects/DayCycle';
import Weather from 'objects/Weather';

class Main extends Phaser.State {

	create() {

		//Enable Arcade Physics
		this.game.physics.startSystem(Phaser.Physics.ARCADE);

        //Set the games background colour
		this.game.stage.backgroundColor = '#000';

		//Day-night cycle length
		this.dayCycle = new DayCycle(this.game, 10000);

		//Add weather
        this.weather = new Weather(this.game);

        this.controls = this.input.keyboard.addKeys({
            'key1': Phaser.KeyCode.ONE,
            'key2': Phaser.KeyCode.TWO
        });

		//Adding bitmapData to var
		let bgBitMap = this.game.add.bitmapData(this.game.width, this.game.height);

		//Var properties
		bgBitMap.ctx.rect(0, 0, this.game.width, this.game.height);
		bgBitMap.ctx.fillStyle = '#dbddda';
		bgBitMap.ctx.fill();

        //Adds bg sprite - not visible atm.
		this.backgroundSprite = this.game.add.sprite(0, 0, bgBitMap);

		//Example of including an object
		//let exampleObject = new ExampleObject(this.game);

        //Positions and scales image layers
        //y coordinate trick, elements align to the bottom of the screen

        //Background
        this.back = this.game.add.tileSprite(0,
            this.game.height - this.game.cache.getImage('back').height,
            this.game.width, this.game.cache.getImage('back').height, 'back');

        //Sun
        this.sunSprite = this.game.add.sprite(50, -250, 'sun');

        //Moon
        this.moonSprite = this.game.add.sprite(this.game.width - (this.game.width / 4), this.game.height + 500, 'moon');

        //Mountain
        this.mid3 = this.game.add.tileSprite(0,
            this.game.height - this.game.cache.getImage('mid3').height,
            this.game.width, this.game.cache.getImage('mid3').height, 'mid3');

        //Foreground 1
        this.mid2 = this.game.add.tileSprite(0,
            this.game.height - this.game.cache.getImage('mid2').height,
            this.game.width, this.game.cache.getImage('mid2').height, 'mid2');

        //Foreground 2
        this.mid1 = this.game.add.tileSprite(0,
            this.game.height - this.game.cache.getImage('mid1').height,
            this.game.width, this.game.cache.getImage('mid1').height, 'mid1');

        //Character
        this.man = this.game.add.sprite(this.game.width / 4,
            this.game.height - this.game.cache.getImage('man').height, 'man');

        //Add rain & fog
        this.weather.addRain();
        //this.weather.addFog();

        //Array to tween all layers from: to:
        let backgroundSprites = [
            {sprite: this.backgroundSprite, from: 0x1f2a27, to: 0xB2DDC8},
            {sprite: this.back, from: 0x000000, to: 0xbcba8b},
            {sprite: this.mid3, from: 0x2a0f0f, to: 0xbcba8b},
            {sprite: this.mid2, from: 0x2a0f0f, to: 0xbcba8b},
            {sprite: this.mid1, from: 0x2a0f0f, to:0xbcba8b},
            {sprite: this.man, from: 0x2a0f0f, to:0xbcba8b}
        ];

        //Initialise DayCycle, pass sprites
        this.dayCycle.initShading(backgroundSprites);
        this.dayCycle.initSun(this.sunSprite);
        this.dayCycle.initMoon(this.moonSprite);

    }

	update() {

	    //Move layers at different speeds
	    this.back.tilePosition.x -= 0.1;
	    this.mid3.tilePosition.x -= 0.3;
	    this.mid2.tilePosition.x -= 0.5;
	    this.mid1.tilePosition.x -= 0.75;
	    this.man.position.x -= 1;
        //Reset character position on x coordinate once it exits the screen
	    if (this.man.position.x < (this.game.width - (this.game.width + this.man.width)))
	        this.man.position.x = this.game.width;

	    //Rain toggle
        if (this.controls.key1.isDown)
            this.weather.emitter.on = false;// & this.weather.removeFog();
        if (this.controls.key2.isDown)
            this.weather.emitter.on = true;// & this.weather.addFog();
        //if (this.weather.emitter.on = false && this.controls.key1.isUp) this.weather.emitter.on = true;

    }

}

export default Main;
