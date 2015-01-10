/*
 * Specific functions for The Darts Game.
 *
 * Copyright (c) 2010 Jorge Morgado
 * GPL license
 */

/* TODO list for the game
 * - Implement the missing rules
 * - Change-language
 * - Change game speed only works if we change the speed with mouse-select events, not with the keyboard.
 * - Define a timer for each dart during which the player has to throw the dart of the score will be zero.
 * - Implement the arrow keys as movement keys.
 *
 * BUGS:
 * - When a game is already running and the player's name is changed, it also changes the name on the
 *   top. Although, on the lblFeed it has written 'Now playing: Player 1' but that doesn't change.
 */

// game object
var oGame;

// game events
Event.add(window, 'load', function() {
	oGame = new Game();
});

Event.add(window, 'resize', function() {
	oGame.resize();
});

Event.add(document, 'keydown', function(key) {
	return oGame.keyDown(isIE ? event.keyCode : key.which);
});