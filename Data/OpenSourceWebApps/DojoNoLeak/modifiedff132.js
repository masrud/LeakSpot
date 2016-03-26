JSProf.LFC(44134, define, false)(JSProf.LNE(44103, [
    "require",
    "./_base/config",
    "./dom-class",
    "./dom-style",
    "./has",
    "./domReady",
    "./_base/window"
], 10), JSProf.LNF(44133, function (require, config, domClass, domStyle, has, domReady, win) {
    // module:
    //		dojo/hccss
    /*=====
    	return function(){
    		// summary:
    		//		Test if computer is in high contrast mode (i.e. if browser is not displaying background images).
    		//		Defines `has("highcontrast")` and sets `dj_a11y` CSS class on `<body>` if machine is in high contrast mode.
    		//		Returns `has()` method;
    	};
    	=====*/
    // Has() test for when background images aren't displayed.  Don't call has("highcontrast") before dojo/domReady!.
    JSProf.LMC(44126, has, 'add').add("highcontrast", JSProf.LNF(44125, function () {
        // note: if multiple documents, doesn't matter which one we use
        var div = JSProf.LMC(44104, win.doc, 'createElement').createElement("div");
        JSProf.LPD(44107, div.style, 'cssText').cssText = JSProf.LRSP(44107, "border: 1px solid; border-color:red green; position: absolute; height: 5px; top: -999px;" + "background-image: url(\"" + (JSProf.LGD(44105, config, 'blankGif').blankGif || JSProf.LMC(44106, require, 'toUrl').toUrl("./resources/blank.gif")) + "\");");
        JSProf.LMC(44110, JSProf.LMC(44108, win, 'body').body(), 'appendChild').appendChild(JSProf.LRE(44109, div));
        var cs = JSProf.LMC(44112, domStyle, 'getComputedStyle').getComputedStyle(JSProf.LRE(44111, div)), bkImg = JSProf.LGD(44113, cs, 'backgroundImage').backgroundImage, hc = JSProf.LGD(44114, cs, 'borderTopColor').borderTopColor == JSProf.LGD(44115, cs, 'borderRightColor').borderRightColor || JSProf.LRE(44116, bkImg) && (JSProf.LRE(44117, bkImg) == "none" || JSProf.LRE(44118, bkImg) == "url(invalid-url:)");
        if (JSProf.LFC(44119, has, false)("ie") <= 8) {
            JSProf.LPD(44120, div, 'outerHTML').outerHTML = JSProf.LRSP(44120, "");    // prevent mixed-content warning, see http://support.microsoft.com/kb/925014
        } else {
            JSProf.LMC(44123, JSProf.LMC(44121, win, 'body').body(), 'removeChild').removeChild(JSProf.LRE(44122, div));
        }
        return JSProf.LRE(44124, hc);
    }, 12));
    JSProf.LFC(44131, domReady, false)(JSProf.LNF(44130, function () {
        if (JSProf.LFC(44127, has, false)("highcontrast")) {
            JSProf.LMC(44129, domClass, 'add').add(JSProf.LMC(44128, win, 'body').body(), "dj_a11y");
        }
    }, 12));
    return JSProf.LRE(44132, has);
}, 12));