function Main() {
	this.stage = new PIXI.Stage(0x66FF99);
	this.renderer = new PIXI.autoDetectRenderer(
		512,
		384,
		document.getElementById("game-canvas")
	);

	this.viewportX = 0;
	this.scroller = new Scroller(this.stage);

	requestAnimFrame(this.update.bind(this));
}

Main.SCROLL_SPEED = 5;

Main.prototype.update = function() {
	this.scroller.moveViewportXBy(Main.SCROLL_SPEED);
    this.renderer.render(this.stage);
	requestAnimFrame(this.update.bind(this));
};

