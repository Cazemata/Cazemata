class Boot extends Phaser.State {

	preload() {

	}

	create() {
		this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
		this.game.state.start("Preload");
	}

}

export default Boot;