JSProf.LFC(43675, define, false)(JSProf.LNE(43644, [
    "require",
    "./_base/config",
    "./dom-class",
    "./dom-style",
    "./has",
    "./domReady",
    "./_base/window"
], 10), JSProf.LNF(43674, function (require, config, domClass, domStyle, has, domReady, win) {
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
    JSProf.LMC(43667, has, 'add').add("highcontrast", JSProf.LNF(43666, function () {
        // note: if multiple documents, doesn't matter which one we use
        var div = JSProf.LMC(43645, win.doc, 'createElement').createElement("div");
        JSProf.LPD(43648, div.style, 'cssText').cssText = JSProf.LRSP(43648, "border: 1px solid; border-color:red green; position: absolute; height: 5px; top: -999px;" + "background-image: url(\"" + (JSProf.LGD(43646, config, 'blankGif').blankGif || JSProf.LMC(43647, require, 'toUrl').toUrl("./resources/blank.gif")) + "\");");
        JSProf.LMC(43651, JSProf.LMC(43649, win, 'body').body(), 'appendChild').appendChild(JSProf.LRE(43650, div));
        var cs = JSProf.LMC(43653, domStyle, 'getComputedStyle').getComputedStyle(JSProf.LRE(43652, div)), bkImg = JSProf.LGD(43654, cs, 'backgroundImage').backgroundImage, hc = JSProf.LGD(43655, cs, 'borderTopColor').borderTopColor == JSProf.LGD(43656, cs, 'borderRightColor').borderRightColor || JSProf.LRE(43657, bkImg) && (JSProf.LRE(43658, bkImg) == "none" || JSProf.LRE(43659, bkImg) == "url(invalid-url:)");
        if (JSProf.LFC(43660, has, false)("ie") <= 8) {
            JSProf.LPD(43661, div, 'outerHTML').outerHTML = JSProf.LRSP(43661, "");    // prevent mixed-content warning, see http://support.microsoft.com/kb/925014
        } else {
            JSProf.LMC(43664, JSProf.LMC(43662, win, 'body').body(), 'removeChild').removeChild(JSProf.LRE(43663, div));
        }
        return JSProf.LRE(43665, hc);
    }, 12));
    JSProf.LFC(43672, domReady, false)(JSProf.LNF(43671, function () {
        if (JSProf.LFC(43668, has, false)("highcontrast")) {
            JSProf.LMC(43670, domClass, 'add').add(JSProf.LMC(43669, win, 'body').body(), "dj_a11y");
        }
    }, 12));
    return JSProf.LRE(43673, has);
}, 12));