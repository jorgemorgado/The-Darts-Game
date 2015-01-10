/*
 * Class Score.
 *
 * Copyright (c) 2010 Jorge Morgado
 * GPL license
 */

/*****************************************************************************
 * Class		Score
 * Description	Instantiates a new score board.
 * Parameters 	index - the player's counter
 * 				name - the player's name
 * Returns		nothing
 */
function Score(index, name) {
	this.index = index;
	this.name = name;			// player's name

	this.lblPlayer = 'lblPlayer' + this.index;
	this.rowDart = 'rowDart' + this.index;
	this.lblTurn = 'lblTurn' + this.index;
	this.lblDart = 'lblDart' + this.index;
	this.lblScore = 'lblScore' + this.index;

	this.reset();

	setText(this.lblPlayer, this.name);

	this.dartNum = 0;
}

/*******************************************************************************
 * Function		clear
 * Description	clear the player dart scores.
 * Parameters	none
 * Returns		nothing
 */
Score.prototype.clear = function() {
	for (var n = 0; n < 3; n++)
		setText(this.lblDart + n, '-');
}

/*******************************************************************************
 * Function		reset
 * Description	Clear the player dart scores.
 * Parameters	none
 * Returns		nothing
 */
Score.prototype.reset = function() {
	this.clear();

	this.darts = new Array(0, 0, 0);
	this.turns = 0;
	this.total = 501;
	this.total_prev = 501;

	setText(this.lblScore, this.total);
	// TODO: strings should come from the language object
	//setText(this.lblTurn, lang.str(6));
	setText(this.lblTurn, 'Darts');
}

/*******************************************************************************
 * Function		lightHigh, lightLow
 * Description	Turn on and off the light on the dart.
 * Parameters	dart - the dart number
 * Returns		nothing
 */
Score.prototype.lightHigh = function(dart) {
	DOM.get('rowDart' + this.index + dart).style.backgroundColor = '#ffff00';
}
Score.prototype.lightLow = function(dart) {
	DOM.get('rowDart' + this.index + dart).style.backgroundColor = '#ffffff';
}

/*******************************************************************************
 * Function		setDart
 * Description	Set the score of a dart for the player.
 * Parameters	dart - the dart number; score - score value
 * Returns		nothing
 */
Score.prototype.setDart = function(dart, score) {
	this.darts[dart] = score;
	setText(this.lblDart + dart, score);

	this.setTotal(this.total - score);
}

/*******************************************************************************
 * Function		setTotal
 * Description	Set the total score for the player.
 * Parameters	score - total score value
 * Returns		nothing
 */
Score.prototype.setTotal = function(score) {
	this.total = score;
	setText(this.lblScore, score);
}

/*******************************************************************************
 * Function		newTurn
 * Description	Set the score for a new turn.
 * Parameters	none
 * Returns		nothing
 */
Score.prototype.newTurn = function() {
	// record the current score before a new turn
	this.total_prev = this.total;
	
	// set the darts turn label (increment the player's turn counter)
	setText(
		this.lblTurn,
		// TODO: strings should come from the language object
		//lang.str(6) + ' (' + lang.str(7) + ' ' + ++this.turns + ')'
		'Darts' + ' (' + 'turn' + ' ' + ++this.turns + ')'
	);

	this.clear();
}