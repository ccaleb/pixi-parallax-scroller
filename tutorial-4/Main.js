function Main() {
	this.stage = new PIXI.Container();
	this.renderer = PIXI.autoDetectRenderer(
		512,
		384,
		{view:document.getElementById("game-canvas")}
	);

	this.scrollSpeed = Main.MIN_SCROLL_SPEED;

	this.loadSpriteSheet();
}

Main.MIN_SCROLL_SPEED = 5;
Main.MAX_SCROLL_SPEED = 15;
Main.SCROLL_ACCELERATION = 0.005;

Main.prototype.update = function() {
	this.scroller.moveViewportXBy(this.scrollSpeed);
	this.scrollSpeed += Main.SCROLL_ACCELERATION;
	if (this.scrollSpeed > Main.MAX_SCROLL_SPEED)
	{
		this.scrollSpeed = Main.MAX_SCROLL_SPEED;
	}

	this.renderer.render(this.stage);
	requestAnimationFrame(this.update.bind(this));
};

Main.prototype.loadSpriteSheet = function() {
	var loader = PIXI.loader;
	loader.add("wall", "resources/wall.json");
	loader.add("bg-mid", "resources/bg-mid.png");
	loader.add("bg-far", "resources/bg-far.png");
	loader.once("complete", this.spriteSheetLoaded.bind(this));
	loader.load();
};

Main.prototype.spriteSheetLoaded = function() {
	this.scroller = new Scroller(this.stage);
	requestAnimationFrame(this.update.bind(this));
};
