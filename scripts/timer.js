/*
 * Class Timer.
 *
 * Copyright (c) 2010 Jorge Morgado
 * GPL license
 */

/*****************************************************************************
 * Class		Timer
 * Description	Instantiates a new Timer object.
 * Parameters 	none
 * Returns		nothing
 */
function Timer() {
	this.id = 0;		// timer identifier
	this.func = null;	// timer call-back function
}

/*******************************************************************************
 * Function		is_active
 * Description	Check if the timer is active (running).
 * Parameters	none
 * Returns		True = is active; False = is inactive.
 */
Timer.prototype.is_active = function() {
	return (this.id ? true : false);
}

/*******************************************************************************
 * Function		start
 * Description	Start a new timer.
 * Parameters	func - the timer call-back function
 * 				time - the timer interval (in ms)
 * Returns		nothing
 */
Timer.prototype.start = function(func, time) {
	// stop any active timer before starting a new one
	if (this.is_active()) this.stop();

	this.id = setInterval((this.func = func), time);
}

/*******************************************************************************
 * Function		stop
 * Description	Stop an active timer.
 * Parameters	none
 * Returns		nothing
 */
Timer.prototype.stop = function() {
	clearInterval(this.id);
	this.id = 0;
}

/*******************************************************************************
 * Function		change
 * Description	Change the interval on the active timer.
 * Parameters	time - the timer interval (in ms)
 * Returns		nothing
 */
Timer.prototype.change = function(time) {
	this.start(this.func, time);
}