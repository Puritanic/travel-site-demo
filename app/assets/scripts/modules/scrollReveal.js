import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	constructor(elements, offset) {		// order of this lines mattter
		this.itemsToReveal = elements; // look for elements with feature-items class
		this.offsetPercentage = offset;
		this.hideInitialy();
		this.createWaypoints();
	}

	hideInitialy(){
		this.itemsToReveal.addClass('reveal-item');
	}

	createWaypoints() {
		var that = this;  // binding this to RevealOnScroll
		this.itemsToReveal.each(function(){
			var currentItem = this;
			new Waypoint({
				element: currentItem,			// is the dom element we want to watch for as we scroll down the page
				handler: function() {			// what we want to happen when that element is scrolled to
					 $(currentItem).addClass('reveal-item--visible');
				},
				offset: that.offsetPercentage 			
			});
		})
	}
}


export default RevealOnScroll;