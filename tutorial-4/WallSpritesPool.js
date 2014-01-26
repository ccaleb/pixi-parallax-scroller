function WallSpritesPool() {
	this.createWindows();
	this.createDecorations();
	this.createFrontEdges();
	this.createBackEdges();
	this.createSteps();
}

WallSpritesPool.prototype.borrowWindow = function() {
	return this.windows.shift();
};

WallSpritesPool.prototype.returnWindow = function(sprite) {
	this.windows.push(sprite);
};

WallSpritesPool.prototype.borrowDecoration = function() {
	return this.decorations.shift();
};
	
WallSpritesPool.prototype.returnDecoration = function(sprite) {
	this.decorations.push(sprite);
};

WallSpritesPool.prototype.borrowFrontEdge = function() {
	return this.frontEdges.shift();
};

WallSpritesPool.prototype.returnFrontEdge = function(sprite) {
	this.frontEdges.push(sprite);
};

WallSpritesPool.prototype.borrowBackEdge = function() {
	return this.backEdges.shift();
};

WallSpritesPool.prototype.returnBackEdge = function(sprite) {
	this.backEdges.push(sprite);
};

WallSpritesPool.prototype.borrowStep = function() {
	return this.steps.shift();
};

WallSpritesPool.prototype.returnStep = function(sprite) {
	this.steps.push(sprite);
};

WallSpritesPool.prototype.createWindows = function() {
	this.windows = [];

	this.addWindowSprites(6, "window_01");
	this.addWindowSprites(6, "window_02");

	this.shuffle(this.windows);
};

WallSpritesPool.prototype.createDecorations = function() {
	this.decorations = [];

	this.addDecorationSprites(6, "decoration_01");
	this.addDecorationSprites(6, "decoration_02");
	this.addDecorationSprites(6, "decoration_03");

	this.shuffle(this.decorations);
};

WallSpritesPool.prototype.createFrontEdges = function() {
	this.frontEdges = [];

	this.addFrontEdgeSprites(2, "edge_01");
	this.addFrontEdgeSprites(2, "edge_02");

	this.shuffle(this.frontEdges);
};

WallSpritesPool.prototype.createBackEdges = function() {
	this.backEdges = [];

	this.addBackEdgeSprites(2, "edge_01");
	this.addBackEdgeSprites(2, "edge_02");

	this.shuffle(this.backEdges);
};

WallSpritesPool.prototype.createSteps = function() {
	this.steps = [];
	this.addStepSprites(2, "step_01");
};

WallSpritesPool.prototype.addWindowSprites = function(amount, frameId) {
	for (var i = 0; i < amount; i++)
	{
		var sprite = PIXI.Sprite.fromFrame(frameId);
		this.windows.push(sprite);
	}
};

WallSpritesPool.prototype.addDecorationSprites = function(amount, frameId) {
	for (var i = 0; i < amount; i++)
	{
		var sprite = PIXI.Sprite.fromFrame(frameId);
		this.decorations.push(sprite);
	}
};

WallSpritesPool.prototype.addFrontEdgeSprites = function(amount, frameId) {
	for (var i = 0; i < amount; i++)
	{
		var sprite = PIXI.Sprite.fromFrame(frameId);
		this.frontEdges.push(sprite);
	}
};

WallSpritesPool.prototype.addBackEdgeSprites = function(amount, frameId) {
	for (var i = 0; i < amount; i++)
	{
		var sprite = PIXI.Sprite.fromFrame(frameId);
		sprite.anchor.x = 1;
		sprite.scale.x = -1;
		this.backEdges.push(sprite);
	}
};

WallSpritesPool.prototype.addStepSprites = function(amount, frameId) {
	for (var i = 0; i < amount; i++)
	{
		var sprite = PIXI.Sprite.fromFrame(frameId);
		sprite.anchor.y = 0.25;
		this.steps.push(sprite);
	}
};

WallSpritesPool.prototype.shuffle = function(array) {
	var len = array.length;
	var shuffles = len * 3;
	for (var i = 0; i < shuffles; i++)
	{
		var wallSlice = array.pop();
		var pos = Math.floor(Math.random() * (len-1));
		array.splice(pos, 0, wallSlice);
	}
};