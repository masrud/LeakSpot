JSProf.LFC(42267, define, false)(JSProf.LNE(42220, [
    "./dom-geometry",
    "./_base/lang",
    "./domReady",
    "./sniff",
    "./_base/window"
], 10), JSProf.LNF(42266, function (geometry, lang, domReady, has, baseWindow) {
    // module:
    //		dojo/uacss
    /*=====
    	return {
    		// summary:
    		//		Applies pre-set CSS classes to the top-level HTML node, based on:
    		//
    		//		- browser (ex: dj_ie)
    		//		- browser version (ex: dj_ie6)
    		//		- box model (ex: dj_contentBox)
    		//		- text direction (ex: dijitRtl)
    		//
    		//		In addition, browser, browser version, and box model are
    		//		combined with an RTL flag when browser text is RTL. ex: dj_ie-rtl.
    		//
    		//		Returns the has() method.
    	};
    	=====*/
    var html = JSProf.LGD(42221, baseWindow.doc, 'documentElement').documentElement, ie = JSProf.LFC(42222, has, false)("ie"), opera = JSProf.LFC(42223, has, false)("opera"), maj = JSProf.LGD(42224, Math, 'floor').floor, ff = JSProf.LFC(42225, has, false)("ff"), boxModel = JSProf.LMC(42226, geometry.boxModel, 'replace').replace(/-/, ''), classes = JSProf.LNE(42235, {
            "dj_quirks": JSProf.LFC(42227, has, false)("quirks"),
            "dj_opera": opera,
            "dj_khtml": JSProf.LFC(42228, has, false)("khtml"),
            "dj_webkit": JSProf.LFC(42229, has, false)("webkit"),
            "dj_safari": JSProf.LFC(42230, has, false)("safari"),
            "dj_chrome": JSProf.LFC(42231, has, false)("chrome"),
            "dj_gecko": JSProf.LFC(42232, has, false)("mozilla"),
            "dj_ios": JSProf.LFC(42233, has, false)("ios"),
            "dj_android": JSProf.LFC(42234, has, false)("android")
        }, 11);
    // no dojo unsupported browsers
    if (JSProf.LRE(42236, ie)) {
        JSProf.LPE(42237, classes, 'dj_ie')["dj_ie"] = JSProf.LRPE(42237, true);
        JSProf.LPE(42240, classes, JSProf.TMPS.tbd7f6be11179aa82af5f82da7c261f4d80287a01 = "dj_ie" + JSProf.LFC(42239, maj, false)(JSProf.LRE(42238, ie)))[JSProf.TMPS.tbd7f6be11179aa82af5f82da7c261f4d80287a01] = JSProf.LRPE(42240, true);
        JSProf.LPE(42242, classes, 'dj_iequirks')["dj_iequirks"] = JSProf.LRPE(42242, JSProf.LFC(42241, has, false)("quirks"));
    }
    if (JSProf.LRE(42243, ff)) {
        JSProf.LPE(42246, classes, JSProf.TMPS.tbd7f6be11179aa82af5f82da7c261f4d80287a01 = "dj_ff" + JSProf.LFC(42245, maj, false)(JSProf.LRE(42244, ff)))[JSProf.TMPS.tbd7f6be11179aa82af5f82da7c261f4d80287a01] = JSProf.LRPE(42246, true);
    }
    JSProf.LPE(42248, classes, JSProf.TMPS.tbd7f6be11179aa82af5f82da7c261f4d80287a01 = "dj_" + JSProf.LRE(42247, boxModel))[JSProf.TMPS.tbd7f6be11179aa82af5f82da7c261f4d80287a01] = JSProf.LRPE(42248, true);
    // apply browser, browser version, and box model class names
    var classStr = "";
    for (var clz in JSProf.LRE(42249, classes)) {
        if (JSProf.LGE(42250, classes, 'clz')[clz]) {
            classStr += JSProf.LRE(42251, clz) + " ";
        }
    }
    JSProf.LPD(42255, html, 'className').className = JSProf.LRSP(42255, JSProf.LMC(42254, lang, 'trim').trim(JSProf.LGD(42252, html, 'className').className + " " + JSProf.LRE(42253, classStr)));
    // If RTL mode, then add dj_rtl flag plus repeat existing classes with -rtl extension.
    // We can't run the code below until the <body> tag has loaded (so we can check for dir=rtl).
    JSProf.LFC(42264, domReady, false)(JSProf.LNF(42263, function () {
        if (!JSProf.LMC(42256, geometry, 'isBodyLtr').isBodyLtr()) {
            var rtlClassStr = "dj_rtl dijitRtl " + JSProf.LMC(42257, classStr, 'replace').replace(/ /g, "-rtl ");
            JSProf.LPD(42262, html, 'className').className = JSProf.LRSP(42262, JSProf.LMC(42261, lang, 'trim').trim(JSProf.LGD(42258, html, 'className').className + " " + JSProf.LRE(42259, rtlClassStr) + "dj_rtl dijitRtl " + JSProf.LMC(42260, classStr, 'replace').replace(/ /g, "-rtl ")));
        }
    }, 12));
    return JSProf.LRE(42265, has);
}, 12));