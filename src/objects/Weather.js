class Weather {

    constructor(game) {
        this.game = game;
    }

    addFog() {

        let fog = this.game.add.bitmapData(this.game.width, this.game.height);

        fog.ctx.rect(0, 0, this.game.width, this.game.height);
        fog.ctx.fillStyle = "#c9bb90";
        fog.ctx.fill();

        this.fogSprite = this.game.add.sprite(0, 0, fog);
        this.fogSprite.alpha = 0;
        this.game.add.tween(this.fogSprite).to({alpha:0.3}, 6000, null, true);

    }

    removeFog() {

        let fogTween = this.game.add.tween(this.fogSprite).to({alpha:0}, 6000, null, true);
        fogTween.onComplete.add(() => {
            this.fogSprite.kill();
        }, this);

    }

    addSnow() {

        let snowParticle = this.game.add.bitmapData(15, 15);

        snowParticle.circle(7, 7, 7, 'rgb(255,255,255)');

        this.emitter = this.game.add.emitter(this.game.world.centerX, -300, 400);

        this.emitter.width = this.game.world.width;

        this.emitter.makeParticles(snowParticle);

        this.emitter.minParticleScale = 0.2;
        this.emitter.maxParticleScale = 0.4;

        this.emitter.minParticleAlpha = 0.2;
        this.emitter.maxParticleAlpha = 0.4;

        this.emitter.setYSpeed(100, 300);
        this.emitter.gravity = 0;
        this.emitter.minRotation = 0;
        this.emitter.maxRotation = 40;

        this.emitter.start(false, 7000, 5, 0);
    }

    addRain() {

        let rainParticle = this.game.add.bitmapData(15, 50);

        rainParticle.ctx.rect(0, 0, 15, 50);
        rainParticle.ctx.fillStyle = '#9cc9de';
        rainParticle.ctx.fill();

        //Position emitter
        this.emitter = this.game.add.emitter(this.game.world.centerX, -300, 400);

        //Emitter size and angle
        this.emitter.width = this.game.world.width;
        this.emitter.angle = 10;

        //Emitter transparency
        this.emitter.minParticleAlpha = 0.1;
        this.emitter.maxParticleAlpha = 0.2;

        //Particle type
        this.emitter.makeParticles(rainParticle);

        //Particle scale
        this.emitter.minParticleScale = 0.1;
        this.emitter.maxParticleScale = 0.3;

        //Particle speed
        this.emitter.setYSpeed(600, 1000);
        this.emitter.setXSpeed(-5, 5);

        //Particle rotation
        this.emitter.minRotation = 0;
        this.emitter.maxRotation = 0;

        this.emitter.start(false, 1600, 5, 0);
    }

    removeEmitter() {

        this.emitter.kill();

    }
}

export default Weather;