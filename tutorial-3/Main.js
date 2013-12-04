function Main() {
	this.stage = new PIXI.Stage(0x66FF99);
	this.renderer = new PIXI.autoDetectRenderer(
		512,
		384,
		document.getElementById("game-canvas")
	);

	this.loadSpriteSheet();
}

Main.SCROLL_SPEED = 5;

Main.prototype.update = function() {
	this.scroller.moveViewportXBy(Main.SCROLL_SPEED);
	this.renderer.render(this.stage);
	requestAnimFrame(this.update.bind(this));
};

Main.prototype.loadSpriteSheet = function() {
	var assetsToLoad = ["resources/wall.json", "resources/bg-mid.png", "resources/bg-far.png"];
	loader = new PIXI.AssetLoader(assetsToLoad);
	loader.onComplete = this.spriteSheetLoaded.bind(this);
	loader.load();
};

Main.prototype.spriteSheetLoaded = function() {
	this.scroller = new Scroller(this.stage);
	requestAnimFrame(this.update.bind(this));
};
