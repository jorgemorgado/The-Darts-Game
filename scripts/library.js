/*
 * A library of generic Javascript functions.
 *
 * Copyright (c) 2010 Jorge Morgado
 * GPL license
 */

var isIE = document.all;
var isNN = !document.all && document.getElementById;
var isN4 = document.layers;


/*****************************************************************************
 * Get/add/remove elements from the Document Object Model (DOM).
 * Source: http://www.dustindiaz.com/add-remove-elements-reprise/
 */
var DOM = {
	get: function(el) {
		if (typeof el === 'string') {
			return document.getElementById(el);
		} else {
			return el;
		}
	},
	add: function(el, dest) {
		var el = this.get(el);
		var dest = this.get(dest);

		dest.appendChild(el);
	},
	remove: function(el) {
		var el = this.get(el);

		el.parentNode.removeChild(el);
	}
};

/*****************************************************************************
 * Add events to DOM objects.
 * Source: http://www.dustindiaz.com/add-remove-elements-reprise/
 */
var Event = {
	add: function() {
		if (window.addEventListener) {
			return function(el, type, fn) {
				DOM.get(el).addEventListener(type, fn, false);
			};
		} else if (window.attachEvent) {
			return function(el, type, fn) {
				var f = function() {
					fn.call(DOM.get(el), window.event);
				};
				DOM.get(el).attachEvent('on' + type, f);
			};
		}
	}()
};


/*****************************************************************************
 * Function		setText
 * Description	Set the text of an object.
 * Parameters	id - the object identifier
 *				txt - the text to set
 * Returns		The text to set.
 */
function setText(id, txt) {
	DOM.get(id).innerHTML = txt;
	
	return txt;
}

/*******************************************************************************
 * Function		hypotenuse
 * Description	Gets a triangle's hypotenuse using the Pythagoras's theorem
 * Parameters	a - triangle's base; c - triangle's height
 * Returns		triangle's hypotenuse
 */
function hypotenuse(a, c) {
	return Math.sqrt(Math.pow(a, 2) + Math.pow(c, 2));
}

/*****************************************************************************
 * Function		sleep
 * Description	Implements some kind of sleep (blocking) function in Javascript.
 * Parameters	How long to sleep (in ms).
 * Returns		nothing
 */
function sleep(delay) {
	var start = new Date().getTime();

	while (new Date().getTime() < start + delay);
}

/*****************************************************************************
 * Function		is_empty
 * Description	Check if the received argument is empty.
 * Parameters	The value to check.
 * Returns		True if it is empty; false if not.
 */
function is_empty(arg) {
	return (arg == null || (typeof(arg) == 'string' && arg == ''));
}

/*****************************************************************************
 * Function		getX
 * Description	Get the absolute X position of an object.
 * Parameters	The object
 * Returns		Objects's X position.
 * Source		http://blog.firetree.net/2005/07/04/javascript-find-position/
 */
/*
function getX(obj) {
	var x = 0;

	if (obj.offsetParent) {
		do
			x += obj.offsetLeft;
		while (obj = obj.offsetParent);
	} else if (obj.x)
        x = obj.x;
        
	return x;
}
*/

/*****************************************************************************
 * Function		getY
 * Description	Get the absolute Y position of an object.
 * Parameters	The object
 * Returns		Objects's Y position.
 * Source		http://blog.firetree.net/2005/07/04/javascript-find-position/
 */
/*
function getY(obj) {
	var y = 0;

	if (obj.offsetParent) {
		do
			y += obj.offsetTop;
		while (obj = obj.offsetParent);
	} else if (obj.y)
		y = obj.y;

	return y;
}
*/
