/*
 * Class Board.
 *
 * Copyright (c) 2010 Jorge Morgado
 * GPL license
 */

Board.prototype = new Layer;			// define sub-class of Layer

 /*****************************************************************************
 * Class		Board
 * Description	Instantiates a new board object.
 * Parameters 	name - layer's name;
 * 				boardWidth, boardHeight - the board's width and height
 * Returns		nothing
 */
Board.prototype.constructor = Board;
function Board(name) {
	this.WIDTH = 496;
	this.HEIGHT = 496;
	this.CENTER_X = this.WIDTH / 2;
	this.CENTER_Y = this.HEIGHT / 2;
	this.MARGIN = 30;

	this.IMAGE = 'images/board.gif';

	this.calcXY();

	// call the super-class constructor
	Layer.call(
		this,
		name,		// board layer's name
		this.x,
		this.y,
		this.WIDTH,
		this.HEIGHT,
		'<img border="0" src="' + this.IMAGE +
			'" width="' + this.WIDTH +
			'" height="' + this.HEIGHT +
			'" />'
	);
}

/******************************************************************************
 * Function		calcXY
 * Description	Calculate the board's layer base coords.
 * Parameters	none
 * Returns		nothing
 */
Board.prototype.calcXY = function() {
	if (typeof(window.innerWidth) == 'number') {
	// Non IE browser
		this.x = Math.floor((window.innerWidth - this.WIDTH) / 2);
		this.y = Math.floor((window.innerHeight - this.HEIGHT) / 2);
	} else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
	//IE 6+ in 'standards compliant mode'
		this.x = Math.floor((document.documentElement.clientWidth - this.WIDTH) / 2);
		this.y = Math.floor((document.documentElement.clientHeight - this.HEIGHT) / 2);
	} else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
	//IE 4 compatible
		this.x = Math.floor((document.body.clientWidth - this.WIDTH) / 2);
		this.y = Math.floor((document.body.clientHeight - this.HEIGHT) / 2);
	}

	// set the minimum left and top margins allowed for the board
	if (this.x < this.MARGIN) this.x = this.MARGIN;
	if (this.y < this.MARGIN) this.y = this.MARGIN;
}
