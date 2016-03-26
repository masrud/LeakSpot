JSProf.LFC(13640, define, false)(JSProf.LNE(13548, ["./has"], 10), JSProf.LNF(13639, function (has) {
    // module:
    //		dojo/sniff
    /*=====
    	return function(){
    		// summary:
    		//		This module sets has() flags based on the current browser.
    		//		It returns the has() function.
    	};
    	=====*/
    if (JSProf.LFC(13549, has, false)("host-browser")) {
        var n = JSProf.LRU(13550, typeof navigator === 'undefined' ? undefined : navigator), dua = JSProf.LGD(13551, n, 'userAgent').userAgent, dav = JSProf.LGD(13552, n, 'appVersion').appVersion, tv = JSProf.LFC(13554, parseFloat, false)(JSProf.LRE(13553, dav));
        JSProf.LMC(13556, has, 'add').add("air", JSProf.LMC(13555, dua, 'indexOf').indexOf("AdobeAIR") >= 0);
        JSProf.LMC(13559, has, 'add').add("msapp", JSProf.LFC(13558, parseFloat, false)(JSProf.LGE(13557, dua.split("MSAppHost/"), 1)[1]) || undefined);
        JSProf.LMC(13562, has, 'add').add("khtml", JSProf.LMC(13560, dav, 'indexOf').indexOf("Konqueror") >= 0 ? JSProf.LRE(13561, tv) : undefined);
        JSProf.LMC(13565, has, 'add').add("webkit", JSProf.LFC(13564, parseFloat, false)(JSProf.LGE(13563, dua.split("WebKit/"), 1)[1]) || undefined);
        JSProf.LMC(13568, has, 'add').add("chrome", JSProf.LFC(13567, parseFloat, false)(JSProf.LGE(13566, dua.split("Chrome/"), 1)[1]) || undefined);
        JSProf.LMC(13573, has, 'add').add("safari", JSProf.LMC(13569, dav, 'indexOf').indexOf("Safari") >= 0 && !JSProf.LFC(13570, has, false)("chrome") ? JSProf.LFC(13572, parseFloat, false)(JSProf.LGE(13571, dav.split("Version/"), 1)[1]) : undefined);
        JSProf.LMC(13575, has, 'add').add("mac", JSProf.LMC(13574, dav, 'indexOf').indexOf("Macintosh") >= 0);
        JSProf.LMC(13577, has, 'add').add("quirks", JSProf.LGD(13576, document, 'compatMode').compatMode == "BackCompat");
        if (JSProf.LMC(13578, dua, 'match').match(/(iPhone|iPod|iPad)/)) {
            var p = JSProf.LMC(13579, RegExp.$1, 'replace').replace(/P/, "p");
            var v = JSProf.LMC(13580, dua, 'match').match(/OS ([\d_]+)/) ? JSProf.LGD(13581, RegExp, '$1').$1 : "1";
            var os = JSProf.LFC(13584, parseFloat, false)(JSProf.LMC(13583, JSProf.LMC(13582, v, 'replace').replace(/_/, "."), 'replace').replace(/_/g, ""));
            JSProf.LMC(13587, has, 'add').add(JSProf.LRE(13585, p), JSProf.LRE(13586, os));
            // "iphone", "ipad" or "ipod"
            JSProf.LMC(13589, has, 'add').add("ios", JSProf.LRE(13588, os));
        }
        JSProf.LMC(13592, has, 'add').add("android", JSProf.LFC(13591, parseFloat, false)(JSProf.LGE(13590, dua.split("Android "), 1)[1]) || undefined);
        JSProf.LMC(13597, has, 'add').add("bb", (JSProf.LMC(13593, dua, 'indexOf').indexOf("BlackBerry") >= 0 || JSProf.LMC(13594, dua, 'indexOf').indexOf("BB10") >= 0) && JSProf.LFC(13596, parseFloat, false)(JSProf.LGE(13595, dua.split("Version/"), 1)[1]) || undefined);
        JSProf.LMC(13600, has, 'add').add("trident", JSProf.LFC(13599, parseFloat, false)(JSProf.LGE(13598, dav.split("Trident/"), 1)[1]) || undefined);
        JSProf.LMC(13602, has, 'add').add("svg", typeof JSProf.LRU(13601, typeof SVGAngle === 'undefined' ? undefined : SVGAngle) !== "undefined");
        if (!JSProf.LFC(13603, has, false)("webkit")) {
            // Opera
            if (JSProf.LMC(13604, dua, 'indexOf').indexOf("Opera") >= 0) {
                // see http://dev.opera.com/articles/view/opera-ua-string-changes and http://www.useragentstring.com/pages/Opera/
                // 9.8 has both styles; <9.8, 9.9 only old style
                JSProf.LMC(13610, has, 'add').add("opera", JSProf.LRE(13605, tv) >= 9.8 ? JSProf.LFC(13607, parseFloat, false)(JSProf.LGE(13606, dua.split("Version/"), 1)[1]) || JSProf.LRE(13608, tv) : JSProf.LRE(13609, tv));
            }
            // Mozilla and firefox
            if (JSProf.LMC(13611, dua, 'indexOf').indexOf("Gecko") >= 0 && !JSProf.LFC(13612, has, false)("khtml") && !JSProf.LFC(13613, has, false)("webkit") && !JSProf.LFC(13614, has, false)("trident")) {
                JSProf.LMC(13616, has, 'add').add("mozilla", JSProf.LRE(13615, tv));
            }
            if (JSProf.LFC(13617, has, false)("mozilla")) {
                //We really need to get away from this. Consider a sane isGecko approach for the future.
                JSProf.LMC(13621, has, 'add').add("ff", JSProf.LFC(13620, parseFloat, false)(JSProf.LGE(13618, dua.split("Firefox/"), 1)[1] || JSProf.LGE(13619, dua.split("Minefield/"), 1)[1]) || undefined);
            }
            // IE
            if (JSProf.LGD(13622, document, 'all').all && !JSProf.LFC(13623, has, false)("opera")) {
                var isIE = JSProf.LFC(13625, parseFloat, false)(JSProf.LGE(13624, dav.split("MSIE "), 1)[1]) || undefined;
                //In cases where the page has an HTTP header or META tag with
                //X-UA-Compatible, then it is in emulation mode.
                //Make sure isIE reflects the desired version.
                //document.documentMode of 5 means quirks mode.
                //Only switch the value if documentMode's major version
                //is different from isIE's major version.
                var mode = JSProf.LGD(13626, document, 'documentMode').documentMode;
                if (JSProf.LRE(13627, mode) && JSProf.LRE(13628, mode) != 5 && Math.floor(JSProf.LRE(13629, isIE)) != JSProf.LRE(13630, mode)) {
                    isIE = JSProf.LWR(13632, isIE, JSProf.LRE(13631, mode));
                }
                JSProf.LMC(13634, has, 'add').add("ie", JSProf.LRE(13633, isIE));
            }
            // Wii
            JSProf.LMC(13637, has, 'add').add("wii", typeof JSProf.LRU(13635, typeof opera === 'undefined' ? undefined : opera) != "undefined" && JSProf.LGD(13636, opera, 'wiiremote').wiiremote);
        }
    }
    return JSProf.LRE(13638, has);
}, 12));