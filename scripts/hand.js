/*
 * Class Hand.
 *
 * Copyright (c) 2010 Jorge Morgado
 * GPL license
 */

Hand.prototype = new Layer;			// define sub-class of Layer

 /*****************************************************************************
 * Class		Hand
 * Description	Instantiates a new hand object.
 * Parameters 	name - layer's name;
 * 				boardWidth, boardHeight - the board's width and height
 * Returns		nothing
 */
Hand.prototype.constructor = Hand;
function Hand(name, boardX, boardY, boardWidth, boardHeight) {
	this.WIDTH = 41;
	this.HEIGHT = 51;
	this.STEP = 4;
	this.MARGIN = 10;
	this.MARGIN_RIGHT = boardWidth - this.WIDTH - this.MARGIN;
	this.MARGIN_BOTTOM = boardHeight - this.HEIGHT - this.MARGIN;
	this.CENTER_X = boardWidth / 2 - this.WIDTH / 2;
	this.CENTER_Y = boardHeight / 2 - this.HEIGHT / 2;

	this.IMAGES = new Array();
	this.IMAGES[0] = new Image(this.WIDTH, this.HEIGHT);
	this.IMAGES[0].src = 'images/hand0.gif';
	this.IMAGES[1] = new Image(this.WIDTH, this.HEIGHT);
	this.IMAGES[1].src = 'images/hand1.gif';
	this.IMAGES[2] = new Image(this.WIDTH, this.HEIGHT);
	this.IMAGES[2].src = 'images/hand2.gif';
	this.IMAGES[3] = new Image(this.WIDTH, this.HEIGHT);
	this.IMAGES[3].src = 'images/hand3.gif';
	this.IMAGES[4] = new Image(this.WIDTH, this.HEIGHT);
	this.IMAGES[4].src = 'images/hand3.gif';

	this.boardX = boardX;
	this.boardY = boardY;
	this.count = 0;
	this.directionX = 1;
	this.directionY = 1;

	// call the super-class constructor
	Layer.call(this, name, this.boardX, this.boardY, this.WIDTH, this.HEIGHT);
}

/******************************************************************************
 * Function		setBoardXY
 * Description	Set the board coords for the hand layer.
 * Parameters	boardX, boardY - X,Y base coords
 * Returns		nothing
 */
Hand.prototype.setBoardXY = function(boardX, boardY) {
	this.boardX = boardX;
	this.boardY = boardY;
}

/******************************************************************************
 * Function		setImage
 * Description	Set the hand layer image.
 * Parameters	image - the image to set
 * Returns		nothing
 */
Hand.prototype.setImage = function(image) {
	this.setHTML(
		'<img border="0" src="' + this.IMAGES[image].src +
		'" width="' + this.WIDTH +
		'" height="' + this.HEIGHT +
		'" />'
	);
}

/******************************************************************************
 * Function		directionRand
 * Description	Randomizes the hand direction.
 * Parameters	none
 * Returns		nothing
 */
Hand.prototype.directionRand = function() {
	switch (Math.floor(Math.random() * 4)) {
		case 0:			//left
			this.directionLeft();
			break;
		case 1:			//up
			this.directionUp();
			break;
		case 2:			//right
			this.directionRight();
			break;
		default:		//down
			this.directionDown();
	}
}

/******************************************************************************
 * Function		directionLeft, directionUp, directionRight, directionDown
 * Description	Set the hand movement left, up, right and down, respectively.
 * Parameters	none
 * Returns		nothing
 */
Hand.prototype.directionLeft = function() {
	this.directionX = -1;
	this.directionY = 1;
}
Hand.prototype.directionUp = function() {
	this.directionX = -1;
	this.directionY = -1;
}
Hand.prototype.directionRight = function() {
	this.directionX = 1;
	this.directionY = -1;
}
Hand.prototype.directionDown = function() {
	this.directionX = 1;
	this.directionY = 1;
}

/*****************************************************************************¡
 * Function		move
 * Description	Moves the hand layer around the game space.
 * Parameters	none
 * Returns		nothing
 */
Hand.prototype.move = function() {
	var x = Math.ceil(this.x - this.boardX);
	var y = Math.ceil(this.y - this.boardY);

	// changes the Hand's layer direction if it hits the game space margin
	if (x <= this.MARGIN)
		this.directionX = 1;
	else if (x >= this.MARGIN_RIGHT)
		this.directionX = -1;

	if (y <= this.MARGIN)
		this.directionY = 1;
	else if (y >= this.MARGIN_BOTTOM)
		this.directionY = -1;

	this.moveBy(this.directionX * this.STEP, this.directionY * this.STEP);
}

/*****************************************************************************¡
 * Function		moveToCenter
 * Description	Moves the hand layer to the center of the game space.
 * Parameters	none
 * Returns		nothing
 */
Hand.prototype.moveToCenter = function(boardX, boardY) {
	this.moveTo(boardX + this.CENTER_X, boardY + this.CENTER_Y);
}