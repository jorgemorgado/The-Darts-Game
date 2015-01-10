/*
 * Drag & drop floating windows for The Darts Game.
 *
 * Copyright (c) 2010 Jorge Morgado
 * GPL license
 */

var divPlayer1;
var divPlayer2;

var offsetX, offsetY;
var nowX, nowY;
var isOver = false;

/*******************************************************************************
 * Initializes the respective drag & drop window.
 */
function ddInit(e) {
	var topElem, curElem;
	var obj;

	if (isIE) {
		obj = event;
		topElem = 'BODY';
		curElem = obj.srcElement;
		divPlayer1 = document.all.Player1;
		divPlayer2 = document.all.Player2;
	} else {
		obj = e;
		topElem = 'HTML';
		curElem = obj.target;
		divPlayer1 = document.getElementById('Player1');
		divPlayer2 = document.getElementById('Player2');
	}

	offsetX = obj.clientX;
	offsetY = obj.clientY;

	// find out which title bar has received the click
	while (curElem.id != 'titleBar1' && curElem.id != 'titleBar2' && curElem.tagName != topElem) {
		curElem = isIE ? curElem.parentElement : curElem.parentNode;
	} 

	// assign the "move" function for the respective window
	if (curElem.id == 'titleBar1') {
		nowX = parseInt(divPlayer1.style.left);		// layer is left-aligned
		nowY = parseInt(divPlayer1.style.top);
		ddEnabled = true;
		document.onmousemove = ddPlayer1;
	} else if (curElem.id == 'titleBar2') {
		nowX = parseInt(divPlayer2.style.right);	// layer is right-aligned
		nowY = parseInt(divPlayer2.style.top);
		ddEnabled = true;
		document.onmousemove = ddPlayer2;
	}
}

/*******************************************************************************
 * Drag & drop for Player1's window.
 */
function ddPlayer1(e) {
	if (!ddEnabled) return;

	var obj = isIE ? event : e;
	divPlayer1.style.left = nowX + obj.clientX - offsetX;	// layer is left-aligned
	divPlayer1.style.top = nowY + obj.clientY - offsetY;

	return false;  
}

/*******************************************************************************
 * Drag & drop for Player2's window.
 */
function ddPlayer2(e) {
	if (!ddEnabled) return;

	var obj = isIE ? event : e;
	divPlayer2.style.right = nowX - obj.clientX + offsetX;	// layer is right-aligned
	divPlayer2.style.top = nowY + obj.clientY - offsetY;

	return false;  
}

/*******************************************************************************
 * Drag & drop for Navigator 4.
 */
function ddN4(obj) {
	if (!isN4) return;

	N4 = eval(obj);
	N4.captureEvents(Event.MOUSEDOWN | Event.MOUSEUP);

	N4.onmousedown = function(e) {
		N4.captureEvents(Event.MOUSEMOVE);
		N4x = e.x;
		N4y = e.y;
	}

	N4.onmousemove = function(e) {
		if (isOver) {
			N4.moveBy(e.x - N4x, e.y - N4y);
			return false;
		}
	}

	N4.onmouseup = function() {
		N4.releaseEvents(Event.MOUSEMOVE);
	}
}

document.onmousedown = ddInit;
document.onmouseup = Function('ddEnabled=false;');