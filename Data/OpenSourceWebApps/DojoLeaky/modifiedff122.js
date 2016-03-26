JSProf.LFC(41177, define, false)(JSProf.LNE(41169, [
    "dojo/dom-class",
    "dojo/hccss",
    "dojo/domReady",
    "dojo/_base/window"
], 10), JSProf.LNF(41176, function (domClass, has, domReady, win) {
    // module:
    //		dijit/hccss
    /*=====
    	return function(){
    		// summary:
    		//		Test if computer is in high contrast mode, and sets `dijit_a11y` flag on `<body>` if it is.
    		//		Deprecated, use ``dojo/hccss`` instead.
    	};
    	=====*/
    JSProf.LFC(41174, domReady, false)(JSProf.LNF(41173, function () {
        if (JSProf.LFC(41170, has, false)("highcontrast")) {
            JSProf.LMC(41172, domClass, 'add').add(JSProf.LMC(41171, win, 'body').body(), "dijit_a11y");
        }
    }, 12));
    return JSProf.LRE(41175, has);
}, 12));