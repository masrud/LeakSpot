JSProf.LFC(11692, define, false)(JSProf.LNE(11600, ["./has"], 10), JSProf.LNF(11691, function (has) {
    // module:
    //		dojo/sniff
    /*=====
    	return function(){
    		// summary:
    		//		This module sets has() flags based on the current browser.
    		//		It returns the has() function.
    	};
    	=====*/
    if (JSProf.LFC(11601, has, false)("host-browser")) {
        var n = JSProf.LRU(11602, typeof navigator === 'undefined' ? undefined : navigator), dua = JSProf.LGD(11603, n, 'userAgent').userAgent, dav = JSProf.LGD(11604, n, 'appVersion').appVersion, tv = JSProf.LFC(11606, parseFloat, false)(JSProf.LRE(11605, dav));
        JSProf.LMC(11608, has, 'add').add("air", JSProf.LMC(11607, dua, 'indexOf').indexOf("AdobeAIR") >= 0);
        JSProf.LMC(11611, has, 'add').add("msapp", JSProf.LFC(11610, parseFloat, false)(JSProf.LGE(11609, dua.split("MSAppHost/"), 1)[1]) || undefined);
        JSProf.LMC(11614, has, 'add').add("khtml", JSProf.LMC(11612, dav, 'indexOf').indexOf("Konqueror") >= 0 ? JSProf.LRE(11613, tv) : undefined);
        JSProf.LMC(11617, has, 'add').add("webkit", JSProf.LFC(11616, parseFloat, false)(JSProf.LGE(11615, dua.split("WebKit/"), 1)[1]) || undefined);
        JSProf.LMC(11620, has, 'add').add("chrome", JSProf.LFC(11619, parseFloat, false)(JSProf.LGE(11618, dua.split("Chrome/"), 1)[1]) || undefined);
        JSProf.LMC(11625, has, 'add').add("safari", JSProf.LMC(11621, dav, 'indexOf').indexOf("Safari") >= 0 && !JSProf.LFC(11622, has, false)("chrome") ? JSProf.LFC(11624, parseFloat, false)(JSProf.LGE(11623, dav.split("Version/"), 1)[1]) : undefined);
        JSProf.LMC(11627, has, 'add').add("mac", JSProf.LMC(11626, dav, 'indexOf').indexOf("Macintosh") >= 0);
        JSProf.LMC(11629, has, 'add').add("quirks", JSProf.LGD(11628, document, 'compatMode').compatMode == "BackCompat");
        if (JSProf.LMC(11630, dua, 'match').match(/(iPhone|iPod|iPad)/)) {
            var p = JSProf.LMC(11631, RegExp.$1, 'replace').replace(/P/, "p");
            var v = JSProf.LMC(11632, dua, 'match').match(/OS ([\d_]+)/) ? JSProf.LGD(11633, RegExp, '$1').$1 : "1";
            var os = JSProf.LFC(11636, parseFloat, false)(JSProf.LMC(11635, JSProf.LMC(11634, v, 'replace').replace(/_/, "."), 'replace').replace(/_/g, ""));
            JSProf.LMC(11639, has, 'add').add(JSProf.LRE(11637, p), JSProf.LRE(11638, os));
            // "iphone", "ipad" or "ipod"
            JSProf.LMC(11641, has, 'add').add("ios", JSProf.LRE(11640, os));
        }
        JSProf.LMC(11644, has, 'add').add("android", JSProf.LFC(11643, parseFloat, false)(JSProf.LGE(11642, dua.split("Android "), 1)[1]) || undefined);
        JSProf.LMC(11649, has, 'add').add("bb", (JSProf.LMC(11645, dua, 'indexOf').indexOf("BlackBerry") >= 0 || JSProf.LMC(11646, dua, 'indexOf').indexOf("BB10") >= 0) && JSProf.LFC(11648, parseFloat, false)(JSProf.LGE(11647, dua.split("Version/"), 1)[1]) || undefined);
        JSProf.LMC(11652, has, 'add').add("trident", JSProf.LFC(11651, parseFloat, false)(JSProf.LGE(11650, dav.split("Trident/"), 1)[1]) || undefined);
        JSProf.LMC(11654, has, 'add').add("svg", typeof JSProf.LRU(11653, typeof SVGAngle === 'undefined' ? undefined : SVGAngle) !== "undefined");
        if (!JSProf.LFC(11655, has, false)("webkit")) {
            // Opera
            if (JSProf.LMC(11656, dua, 'indexOf').indexOf("Opera") >= 0) {
                // see http://dev.opera.com/articles/view/opera-ua-string-changes and http://www.useragentstring.com/pages/Opera/
                // 9.8 has both styles; <9.8, 9.9 only old style
                JSProf.LMC(11662, has, 'add').add("opera", JSProf.LRE(11657, tv) >= 9.8 ? JSProf.LFC(11659, parseFloat, false)(JSProf.LGE(11658, dua.split("Version/"), 1)[1]) || JSProf.LRE(11660, tv) : JSProf.LRE(11661, tv));
            }
            // Mozilla and firefox
            if (JSProf.LMC(11663, dua, 'indexOf').indexOf("Gecko") >= 0 && !JSProf.LFC(11664, has, false)("khtml") && !JSProf.LFC(11665, has, false)("webkit") && !JSProf.LFC(11666, has, false)("trident")) {
                JSProf.LMC(11668, has, 'add').add("mozilla", JSProf.LRE(11667, tv));
            }
            if (JSProf.LFC(11669, has, false)("mozilla")) {
                //We really need to get away from this. Consider a sane isGecko approach for the future.
                JSProf.LMC(11673, has, 'add').add("ff", JSProf.LFC(11672, parseFloat, false)(JSProf.LGE(11670, dua.split("Firefox/"), 1)[1] || JSProf.LGE(11671, dua.split("Minefield/"), 1)[1]) || undefined);
            }
            // IE
            if (JSProf.LGD(11674, document, 'all').all && !JSProf.LFC(11675, has, false)("opera")) {
                var isIE = JSProf.LFC(11677, parseFloat, false)(JSProf.LGE(11676, dav.split("MSIE "), 1)[1]) || undefined;
                //In cases where the page has an HTTP header or META tag with
                //X-UA-Compatible, then it is in emulation mode.
                //Make sure isIE reflects the desired version.
                //document.documentMode of 5 means quirks mode.
                //Only switch the value if documentMode's major version
                //is different from isIE's major version.
                var mode = JSProf.LGD(11678, document, 'documentMode').documentMode;
                if (JSProf.LRE(11679, mode) && JSProf.LRE(11680, mode) != 5 && Math.floor(JSProf.LRE(11681, isIE)) != JSProf.LRE(11682, mode)) {
                    isIE = JSProf.LWR(11684, isIE, JSProf.LRE(11683, mode));
                }
                JSProf.LMC(11686, has, 'add').add("ie", JSProf.LRE(11685, isIE));
            }
            // Wii
            JSProf.LMC(11689, has, 'add').add("wii", typeof JSProf.LRU(11687, typeof opera === 'undefined' ? undefined : opera) != "undefined" && JSProf.LGD(11688, opera, 'wiiremote').wiiremote);
        }
    }
    return JSProf.LRE(11690, has);
}, 12));