import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class FixedHeader {
    constructor() {
        this.siteHeader = $('.site-header');
        this.headerTriggerElement = $('.btn--orange');
        this.createHederWaypoint();
        this.pageSections = $('.page-section');
        this.headerLinks = $('.primary-nav a');
        this.createPageSectionWaypoints();
        this.addSmoothScrolling();
    }

    addSmoothScrolling() {
    	this.headerLinks.smoothScroll();
    }

    createHederWaypoint() {
        const that = this;
        new Waypoint({
            element: this.headerTriggerElement[0],
            handler: function() {
                    that.siteHeader.toggleClass('site-header--dark');
                }
                // non jQuery approach(after changing jquery methods to vanilla js :P)
                // 	handler: function(direction) {
                // 		if( direction == 'down'){
                // 			that.siteHeader.addClass('site-header--dark');
                // 		} else {
                // 			that.siteHeader.removeClass('site-header--dark');
                // 		}
                // 	}
        })
    }

    createPageSectionWaypoints() {
        const that = this;
        this.pageSections.each(function() {
            const currentPageSection = this;
            new Waypoint({
                element: currentPageSection,
                handler: function(direction) {
                    if (direction == 'down') {
                        const matchingDataLink = currentPageSection.getAttribute('data-link');
                        that.headerLinks.removeClass('active-link');
                        $(matchingDataLink).addClass('active-link');
                    }
                },
                offset: '15%'
            });

            new Waypoint({
                element: currentPageSection,
                handler: function(direction) {
                    if (direction == 'up') {
                        const matchingDataLink = currentPageSection.getAttribute('data-link');
                        that.headerLinks.removeClass('active-link');
                        $(matchingDataLink).addClass('active-link');
                    }
                },
                offset: '-40%'
            });
        })
    }
}


export default FixedHeader;
