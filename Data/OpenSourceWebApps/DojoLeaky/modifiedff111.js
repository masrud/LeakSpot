JSProf.LFC(37869, define, false)(JSProf.LNE(37845, [
    "./kernel",
    "./lang",
    "../sniff"
], 10), JSProf.LNF(37868, function (dojo, lang, has) {
    // module:
    //		dojo/_base/sniff
    /*=====
    	return {
    		// summary:
    		//		Deprecated.   New code should use dojo/sniff.
    		//		This module populates the dojo browser version sniffing properties like dojo.isIE.
    	};
    	=====*/
    if (!JSProf.LFC(37846, has, false)("host-browser")) {
        return JSProf.LRE(37847, has);
    }
    // no idea what this is for, or if it's used
    JSProf.LPD(37848, dojo, '_name')._name = JSProf.LRSP(37848, "browser");
    JSProf.LMC(37866, lang, 'mixin').mixin(JSProf.LRE(37849, dojo), JSProf.LNE(37865, {
        isBrowser: true,
        isFF: JSProf.LFC(37850, has, false)("ff"),
        isIE: JSProf.LFC(37851, has, false)("ie"),
        isKhtml: JSProf.LFC(37852, has, false)("khtml"),
        isWebKit: JSProf.LFC(37853, has, false)("webkit"),
        isMozilla: JSProf.LFC(37854, has, false)("mozilla"),
        isMoz: JSProf.LFC(37855, has, false)("mozilla"),
        isOpera: JSProf.LFC(37856, has, false)("opera"),
        isSafari: JSProf.LFC(37857, has, false)("safari"),
        isChrome: JSProf.LFC(37858, has, false)("chrome"),
        isMac: JSProf.LFC(37859, has, false)("mac"),
        isIos: JSProf.LFC(37860, has, false)("ios"),
        isAndroid: JSProf.LFC(37861, has, false)("android"),
        isWii: JSProf.LFC(37862, has, false)("wii"),
        isQuirks: JSProf.LFC(37863, has, false)("quirks"),
        isAir: JSProf.LFC(37864, has, false)("air")
    }, 11));
    return JSProf.LRE(37867, has);
}, 12));