function Far() {
	var texture = PIXI.Texture.fromImage("resources/bg-far.png");
	PIXI.extras.TilingSprite.call(this, texture, 512, 256);

	this.position.x = 0;
	this.position.y = 0;
	this.tilePosition.x = 0;
	this.tilePosition.y = 0;

	this.viewportX = 0;
}

Far.prototype = Object.create(PIXI.extras.TilingSprite.prototype);

Far.DELTA_X = 0.064;

Far.prototype.setViewportX = function(newViewportX) {
	var distanceTravelled = newViewportX - this.viewportX;
	this.viewportX = newViewportX;
	this.tilePosition.x -= (distanceTravelled * Far.DELTA_X);
};