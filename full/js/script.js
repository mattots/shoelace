/* Resize helper variables for IE8 */
/* Explanation:
IE8 treats changes to page length caused by dynamic content changes (e.g. toggling an element) as window.resize() events.
To prevent this causing problems, use this convention:
1) set allow_resize to false
2) change the content
3) set allow_resize back to true
Anything that should happen on a genuine window.resize event should be wrapped in
if (allow_resize) { ... }
Use resize_timeout where necessary to allow time for changes to take place before resetting allow_resize.*/
var resize_timeout = null, allow_resize = true;

/* Media query breakpoints - these should match those in variables.less */
/* Use minWidthIs(), maxWidthIs() and widthIsBetween() to test if particular media query conditions are met */
var _1col_ =   95;
var _2cols_ =  170;
var _3cols_ =  245;
var _4cols_ =  320;
var _5cols_ =  395;
var _6cols_ =  470;
var _7cols_ =  545;
var _8cols_ =  620;
var _9cols_ =  695;
var _10cols_ = 770;
var _11cols_ = 845;
var _12cols_ = 920;
var _13cols_ = 995;
var _14cols_ = 1070;
var _15cols_ = 1145;
var _16cols_ = 1220;

function minWidthIs(minwidth) {
    /* Test if the client width is at least [minwidth]px. Evaluates to true if
     * it is. Use media query breakpoint variables (defined above) as minwidth argument. */

    /* In < IE9 the Modernizr.mq() test doesn't work, even with respond.js, so
     * we need a way of isolating these browsers so we can use a different
     * width check */

    var ltIE9 = true;
    if ( Modernizr.mq('(min-width:0)') ) {
        ltIE9 = false;
    }

    /* Modernizr.mq() checks whether a media query's criteria is currently met.
     * For IE6/7/8 we use clientWidth instead (We can't use it for everything
     * as Firefox screws up on this by including the scrollbar width in the
     * reported value of clientWidth, leading to a mismatch bewteen CSS and
     * JS!) */

    if (
        ( Modernizr.mq('only screen and (min-width: '+ minwidth +'px)') ) ||
        ( ltIE9 && (document.documentElement.clientWidth >= minwidth) )
    ) {
        return true;
    } else {
        return;
    }
}

function maxWidthIs(maxwidth) {
    /* Test if the client width is no greater than [maxwidth]px. Evaluates to true if
     * it is. Use media query breakpoint variables (defined above) as maxwidth argument. */

    /* In < IE9 the Modernizr.mq() test doesn't work, even with respond.js, so
     * we need a way of isolating these browsers so we can use a different
     * width check */

    var ltIE9 = true;
    if ( Modernizr.mq('(min-width:0)') ) {
        ltIE9 = false;
    }

    /* Modernizr.mq() checks whether a media query's criteria is currently met.
     * For IE6/7/8 we use clientWidth instead (We can't use it for everything
     * as Firefox screws up on this by including the scrollbar width in the
     * reported value of clientWidth, leading to a mismatch bewteen CSS and
     * JS!) */

    if (
        ( Modernizr.mq('(max-width: '+ maxwidth +'px)') ) ||
        ( ltIE9 && (document.documentElement.clientWidth <= maxwidth) )
    ) {
        return true;
    } else {
        return;
    }
}


function widthIsBetween(minwidth, maxwidth) {
    /* Test if the client width is between [minwidth]px and [maxwidth]px (inclusive).
    /* Evaluates to true if it is.
    /* Use media query breakpoint variables (defined above) as arguments. */

    /* In < IE9 the Modernizr.mq() test doesn't work, even with respond.js, so
     * we need a way of isolating these browsers so we can use a different
     * width check */

    var ltIE9 = true;
    if ( Modernizr.mq('(min-width:0)') ) {
        ltIE9 = false;
    }

    /* Modernizr.mq() checks whether a media query's criteria is currently met.
     * For IE6/7/8 we use clientWidth instead (We can't use it for everything
     * as Firefox screws up on this by including the scrollbar width in the
     * reported value of clientWidth, leading to a mismatch bewteen CSS and
     * JS!) */

    if (
        ( Modernizr.mq('(min-width: '+ minwidth +'px) and (max-width: '+ maxwidth +'px)') ) ||
        ( ltIE9 && (document.documentElement.clientWidth >= minwidth && document.documentElement.clientWidth <= maxwidth) )
    ) {
        return true;
    } else {
        return;
    }
}