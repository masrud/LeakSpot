JSProf.LFC(41092, define, false)(JSProf.LNE(41045, [
    "./dom-geometry",
    "./_base/lang",
    "./domReady",
    "./sniff",
    "./_base/window"
], 10), JSProf.LNF(41091, function (geometry, lang, domReady, has, baseWindow) {
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
    var html = JSProf.LGD(41046, baseWindow.doc, 'documentElement').documentElement, ie = JSProf.LFC(41047, has, false)("ie"), opera = JSProf.LFC(41048, has, false)("opera"), maj = JSProf.LGD(41049, Math, 'floor').floor, ff = JSProf.LFC(41050, has, false)("ff"), boxModel = JSProf.LMC(41051, geometry.boxModel, 'replace').replace(/-/, ''), classes = JSProf.LNE(41060, {
            "dj_quirks": JSProf.LFC(41052, has, false)("quirks"),
            "dj_opera": opera,
            "dj_khtml": JSProf.LFC(41053, has, false)("khtml"),
            "dj_webkit": JSProf.LFC(41054, has, false)("webkit"),
            "dj_safari": JSProf.LFC(41055, has, false)("safari"),
            "dj_chrome": JSProf.LFC(41056, has, false)("chrome"),
            "dj_gecko": JSProf.LFC(41057, has, false)("mozilla"),
            "dj_ios": JSProf.LFC(41058, has, false)("ios"),
            "dj_android": JSProf.LFC(41059, has, false)("android")
        }, 11);
    // no dojo unsupported browsers
    if (JSProf.LRE(41061, ie)) {
        JSProf.LPE(41062, classes, 'dj_ie')["dj_ie"] = JSProf.LRPE(41062, true);
        JSProf.LPE(41065, classes, JSProf.TMPS.tbd7f6be11179aa82af5f82da7c261f4d80287a01 = "dj_ie" + JSProf.LFC(41064, maj, false)(JSProf.LRE(41063, ie)))[JSProf.TMPS.tbd7f6be11179aa82af5f82da7c261f4d80287a01] = JSProf.LRPE(41065, true);
        JSProf.LPE(41067, classes, 'dj_iequirks')["dj_iequirks"] = JSProf.LRPE(41067, JSProf.LFC(41066, has, false)("quirks"));
    }
    if (JSProf.LRE(41068, ff)) {
        JSProf.LPE(41071, classes, JSProf.TMPS.tbd7f6be11179aa82af5f82da7c261f4d80287a01 = "dj_ff" + JSProf.LFC(41070, maj, false)(JSProf.LRE(41069, ff)))[JSProf.TMPS.tbd7f6be11179aa82af5f82da7c261f4d80287a01] = JSProf.LRPE(41071, true);
    }
    JSProf.LPE(41073, classes, JSProf.TMPS.tbd7f6be11179aa82af5f82da7c261f4d80287a01 = "dj_" + JSProf.LRE(41072, boxModel))[JSProf.TMPS.tbd7f6be11179aa82af5f82da7c261f4d80287a01] = JSProf.LRPE(41073, true);
    // apply browser, browser version, and box model class names
    var classStr = "";
    for (var clz in JSProf.LRE(41074, classes)) {
        if (JSProf.LGE(41075, classes, 'clz')[clz]) {
            classStr += JSProf.LRE(41076, clz) + " ";
        }
    }
    JSProf.LPD(41080, html, 'className').className = JSProf.LRSP(41080, JSProf.LMC(41079, lang, 'trim').trim(JSProf.LGD(41077, html, 'className').className + " " + JSProf.LRE(41078, classStr)));
    // If RTL mode, then add dj_rtl flag plus repeat existing classes with -rtl extension.
    // We can't run the code below until the <body> tag has loaded (so we can check for dir=rtl).
    JSProf.LFC(41089, domReady, false)(JSProf.LNF(41088, function () {
        if (!JSProf.LMC(41081, geometry, 'isBodyLtr').isBodyLtr()) {
            var rtlClassStr = "dj_rtl dijitRtl " + JSProf.LMC(41082, classStr, 'replace').replace(/ /g, "-rtl ");
            JSProf.LPD(41087, html, 'className').className = JSProf.LRSP(41087, JSProf.LMC(41086, lang, 'trim').trim(JSProf.LGD(41083, html, 'className').className + " " + JSProf.LRE(41084, rtlClassStr) + "dj_rtl dijitRtl " + JSProf.LMC(41085, classStr, 'replace').replace(/ /g, "-rtl ")));
        }
    }, 12));
    return JSProf.LRE(41090, has);
}, 12));