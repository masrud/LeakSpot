JSProf.LFC(42352, define, false)(JSProf.LNE(42344, [
    "dojo/dom-class",
    "dojo/hccss",
    "dojo/domReady",
    "dojo/_base/window"
], 10), JSProf.LNF(42351, function (domClass, has, domReady, win) {
    // module:
    //		dijit/hccss
    /*=====
    	return function(){
    		// summary:
    		//		Test if computer is in high contrast mode, and sets `dijit_a11y` flag on `<body>` if it is.
    		//		Deprecated, use ``dojo/hccss`` instead.
    	};
    	=====*/
    JSProf.LFC(42349, domReady, false)(JSProf.LNF(42348, function () {
        if (JSProf.LFC(42345, has, false)("highcontrast")) {
            JSProf.LMC(42347, domClass, 'add').add(JSProf.LMC(42346, win, 'body').body(), "dijit_a11y");
        }
    }, 12));
    return JSProf.LRE(42350, has);
}, 12));