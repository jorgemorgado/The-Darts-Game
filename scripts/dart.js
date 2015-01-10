/*
 * Class Dart.
 *
 * Copyright (c) 2010 Jorge Morgado
 * GPL license
 */

Dart.prototype = new Layer;			// define sub-class of Layer

 /*****************************************************************************
 * Class		Dart
 * Description	Instantiates a new dart object.
 * Parameters 	name - layer's name;
 * 				boardWidth, boardHeight - the board's width and height
 * Returns		nothing
 */
Dart.prototype.constructor = Dart;
function Dart(name, playerId, dartId, boardWidth, boardHeight) {
	this.WIDTH = 17;
	this.HEIGHT = 15;
	this.MARGIN = 5;
	this.MARGIN_BOTTOM = boardHeight - this.HEIGHT - this.MARGIN;

	this.IMAGES = new Array();
	this.IMAGES[0] = new Image(this.WIDTH, this.HEIGHT);
	this.IMAGES[0].src = 'images/dart0.gif';
	this.IMAGES[1] = new Image(this.WIDTH, this.HEIGHT);
	this.IMAGES[1].src = 'images/dart1.gif';

	this.playerId = playerId;		// player id
	this.dartId = dartId;			// dart id

	// call the super-class constructor
	Layer.call(this, name, 0, 0, this.WIDTH, this.HEIGHT);
}

/*****************************************************************************
 * Function		dartSetImage
 * Description	Set the dart layer image.
 * Parameters	image - the image to set
 * Returns		nothing
 */
Dart.prototype.setImage = function(image) {
	this.setHTML(
		'<img border="0" src="' + this.IMAGES[image].src +
		'" width="' + this.WIDTH +
		'" height="' + this.HEIGHT +
		'" />'
	);
}

/*******************************************************************************
 * Function		showByPlayer
 * Description	Show the player dart in the game space footer.
 * Parameters	none
 * Returns		nothing
 */
Dart.prototype.showByPlayer = function(boardX, boardY) {
	var x = (this.playerId ? 418 : 16) + (this.dartId * 25);

	this.setImage(0);
	this.moveTo(boardX + x, boardY + this.MARGIN_BOTTOM);
	this.show();
}

/*******************************************************************************
 * Function		realX, realY
 * Description	Calculate the real coords of the layer.
 * Parameters	none
 * Returns		The X and Y coordinates of the dart layer.
 * 
 * Note: The board position should always be centered inside the game space.
 * We need to sum 3 pixels to the coords to correct the point where the dart
 * hits the board because of the center in the dart's image. Even if this is
 * a quadratic mode (remember the old X modes?) we need to do this hack ;-)
 */
Dart.prototype.realX = function() {
	return this.x + Math.floor(this.WIDTH / 2) - 3;
}
Dart.prototype.realY = function() {
	return this.y + Math.floor(this.HEIGHT / 2) - 3;
}