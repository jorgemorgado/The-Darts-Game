/*
 * Class Layer.
 *
 * Copyright (c) 2010 Jorge Morgado
 * GPL license
 */

/*****************************************************************************
 * Class		Layer
 * Description	Instantiates a new layer.
 * Parameters 	name - the layer's name
 *				x, y - the layer's coords
 *				width, height - the layer's size
 *				html - the layer's HTML code
 *				zindex - the layer's zindex
 *				visible - true/false to show/hide the layer
 * Returns		nothing
 */
function Layer(name, x, y, width, height, html, zindex, visible) {
	// at least the layer's name is mandatory
	if (name == null) return;

	this.name = name;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.zindex = zindex == null ? 0 : zindex;
	this.visible = visible == null ? true : visible;

	this.html =
		'<div id="' + this.name +
		'" style="position:absolute' +
		';top:' + this.y +
		';left:' + this.x +
		';width:' + this.width +
		';height:' + this.height +
		';z-index:' + this.zindex +
		';visibility:' + (this.visible ? 'visible' : 'hidden') +
		';">' + (html == null ? '' : html) +
		'</div>';
}

/*****************************************************************************
 * Function		show
 * Description	Show the layer.
 * Parameters	none
 * Returns		nothing
 */
Layer.prototype.show = function() {
	if (!this.visible) {
		this.visible = true;
		DOM.get(this.name).style.visibility = 'visible';
	}
}

/*****************************************************************************
 * Function		hide
 * Description	Hide the layer.
 * Parameters	none
 * Returns		nothing
 */
Layer.prototype.hide = function() {
	if (this.visible) {
		this.visible = false;
		DOM.get(this.name).style.visibility = 'hidden';
	}
}

/*****************************************************************************
 * Function		setHTML
 * Description	Puts HTML code into a layer.
 * Parameters	html - the HTML code
 * Returns		nothing
 */
Layer.prototype.setHTML = function(html) {
	DOM.get(this.name).innerHTML = html;
}

/*****************************************************************************
 * Function		moveBy
 * Description	Moves a layer by (x,y) from the layer's current position.
 * Parameters	x, y - horizontal and vertical shifts
 * Returns		nothing
 */
Layer.prototype.moveBy = function(x, y) {
	this.moveTo(this.x + x, this.y + y)
}

/*****************************************************************************
 * Function		moveTo
 * Description	Moves a layer to a specified position.
 * Parameters	x, y - coords (X, Y)
 * Returns		nothing
 */
Layer.prototype.moveTo = function(x, y) {
	DOM.get(this.name).style.left = (this.x = x);
	DOM.get(this.name).style.top = (this.y = y);
}

/*****************************************************************************
 * Function		create
 * Description	Sets the layer code and makes it visible.
 * Parameters	nothing
 * Returns		nothing
 */
Layer.prototype.create = function() {
	var el = document.createElement('div');

	el.innerHTML = this.html;
	DOM.add(el, document.body);
}