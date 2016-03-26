JSProf.LFC(17296, define, false)(JSProf.LNE(17213, [
    "./_base/kernel",
    "./_base/lang"
], 10), JSProf.LNF(17295, function (kernel, lang) {
    // module:
    //		dojo/string
    var ESCAPE_REGEXP = /[&<>'"\/]/g;
    var ESCAPE_MAP = JSProf.LNE(17214, {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#x27;',
            '/': '&#x2F;'
        }, 11);
    var string = JSProf.LNE(17215, {}, 11);
    JSProf.LMC(17217, lang, 'setObject').setObject("dojo.string", JSProf.LRE(17216, string));
    JSProf.LPD(17224, string, 'escape').escape = JSProf.LRSP(17224, JSProf.LNF(17223, function (str) {
        // summary:
        //		Efficiently escape a string for insertion into HTML (innerHTML or attributes), replacing &, <, >, ", ', and / characters.
        // str:
        //		the string to escape
        if (!JSProf.LRE(17218, str)) {
            return "";
        }
        return JSProf.LMC(17222, str, 'replace').replace(JSProf.LRE(17219, ESCAPE_REGEXP), JSProf.LNF(17221, function (c) {
            return JSProf.LGE(17220, ESCAPE_MAP, 'c')[c];
        }, 12));
    }, 12));
    JSProf.LPD(17234, string, 'rep').rep = JSProf.LRSP(17234, JSProf.LNF(17233, function (str, num) {
        // summary:
        //		Efficiently replicate a string `n` times.
        // str:
        //		the string to replicate
        // num:
        //		number of times to replicate the string
        if (JSProf.LRE(17225, num) <= 0 || !JSProf.LRE(17226, str)) {
            return "";
        }
        var buf = JSProf.LNE(17227, [], 10);
        for (;;) {
            if (JSProf.LRE(17228, num) & 1) {
                JSProf.LMC(17230, buf, 'push').push(JSProf.LRE(17229, str));
            }
            if (!(num >>= 1)) {
                break;
            }
            str += JSProf.LRE(17231, str);
        }
        return JSProf.LMC(17232, buf, 'join').join("");    // String
    }, 12));
    JSProf.LPD(17251, string, 'pad').pad = JSProf.LRSP(17251, JSProf.LNF(17250, function (text, size, ch, end) {
        // summary:
        //		Pad a string to guarantee that it is at least `size` length by
        //		filling with the character `ch` at either the start or end of the
        //		string. Pads at the start, by default.
        // text:
        //		the string to pad
        // size:
        //		length to provide padding
        // ch:
        //		character to pad, defaults to '0'
        // end:
        //		adds padding at the end if true, otherwise pads at start
        // example:
        //	|	// Fill the string to length 10 with "+" characters on the right.  Yields "Dojo++++++".
        //	|	string.pad("Dojo", 10, "+", true);
        if (!JSProf.LRE(17235, ch)) {
            ch = JSProf.LWR(17236, ch, '0');
        }
        var out = JSProf.LFC(17238, String, false)(JSProf.LRE(17237, text)), pad = JSProf.LMC(17244, string, 'rep').rep(JSProf.LRE(17239, ch), JSProf.LMC(17243, Math, 'ceil').ceil((JSProf.LRE(17240, size) - JSProf.LGD(17241, out, 'length').length) / JSProf.LGD(17242, ch, 'length').length));
        return JSProf.LRE(17245, end) ? JSProf.LRE(17246, out) + JSProf.LRE(17247, pad) : JSProf.LRE(17248, pad) + JSProf.LRE(17249, out);    // String
    }, 12));
    JSProf.LPD(17280, string, 'substitute').substitute = JSProf.LRSP(17280, JSProf.LNF(17279, function (template, map, transform, thisObject) {
        // summary:
        //		Performs parameterized substitutions on a string. Throws an
        //		exception if any parameter is unmatched.
        // template:
        //		a string with expressions in the form `${key}` to be replaced or
        //		`${key:format}` which specifies a format function. keys are case-sensitive.
        // map:
        //		hash to search for substitutions
        // transform:
        //		a function to process all parameters before substitution takes
        //		place, e.g. mylib.encodeXML
        // thisObject:
        //		where to look for optional format function; default to the global
        //		namespace
        // example:
        //		Substitutes two expressions in a string from an Array or Object
        //	|	// returns "File 'foo.html' is not found in directory '/temp'."
        //	|	// by providing substitution data in an Array
        //	|	string.substitute(
        //	|		"File '${0}' is not found in directory '${1}'.",
        //	|		["foo.html","/temp"]
        //	|	);
        //	|
        //	|	// also returns "File 'foo.html' is not found in directory '/temp'."
        //	|	// but provides substitution data in an Object structure.  Dotted
        //	|	// notation may be used to traverse the structure.
        //	|	string.substitute(
        //	|		"File '${name}' is not found in directory '${info.dir}'.",
        //	|		{ name: "foo.html", info: { dir: "/temp" } }
        //	|	);
        // example:
        //		Use a transform function to modify the values:
        //	|	// returns "file 'foo.html' is not found in directory '/temp'."
        //	|	string.substitute(
        //	|		"${0} is not found in ${1}.",
        //	|		["foo.html","/temp"],
        //	|		function(str){
        //	|			// try to figure out the type
        //	|			var prefix = (str.charAt(0) == "/") ? "directory": "file";
        //	|			return prefix + " '" + str + "'";
        //	|		}
        //	|	);
        // example:
        //		Use a formatter
        //	|	// returns "thinger -- howdy"
        //	|	string.substitute(
        //	|		"${0:postfix}", ["thinger"], null, {
        //	|			postfix: function(value, key){
        //	|				return value + " -- howdy";
        //	|			}
        //	|		}
        //	|	);
        thisObject = JSProf.LWR(17254, thisObject, JSProf.LRE(17252, thisObject) || JSProf.LGD(17253, kernel, 'global').global);
        transform = JSProf.LWR(17261, transform, JSProf.LRE(17255, transform) ? JSProf.LMC(17258, lang, 'hitch').hitch(JSProf.LRE(17256, thisObject), JSProf.LRE(17257, transform)) : JSProf.LNF(17260, function (v) {
            return JSProf.LRE(17259, v);
        }, 12));
        return JSProf.LMC(17278, template, 'replace').replace(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g, JSProf.LNF(17277, function (match, key, format) {
            var value = JSProf.LMC(17264, lang, 'getObject').getObject(JSProf.LRE(17262, key), false, JSProf.LRE(17263, map));
            if (JSProf.LRE(17265, format)) {
                value = JSProf.LWR(17273, value, JSProf.LMC(17272, JSProf.LMC(17268, lang, 'getObject').getObject(JSProf.LRE(17266, format), false, JSProf.LRE(17267, thisObject)), 'call').call(JSProf.LRE(17269, thisObject), JSProf.LRE(17270, value), JSProf.LRE(17271, key)));
            }
            return JSProf.LFC(17276, transform, false)(JSProf.LRE(17274, value), JSProf.LRE(17275, key)).toString();
        }, 12));    // String
    }, 12));
    JSProf.LPD(17293, string, 'trim').trim = JSProf.LRSP(17293, JSProf.LGD(17281, String.prototype, 'trim').trim ? JSProf.LGD(17282, lang, 'trim').trim : JSProf.LNF(17292, function (str) {
        str = JSProf.LWR(17284, str, JSProf.LMC(17283, str, 'replace').replace(/^\s+/, ''));
        for (var i = JSProf.LGD(17285, str, 'length').length - 1; JSProf.LRE(17286, i) >= 0; i--) {
            if (JSProf.LMC(17288, /\S/, 'test').test(str.charAt(JSProf.LRE(17287, i)))) {
                str = JSProf.LWR(17290, str, str.substring(0, JSProf.LRE(17289, i) + 1));
                break;
            }
        }
        return JSProf.LRE(17291, str);
    }, 12));
    /*=====
     string.trim = function(str){
    	 // summary:
    	 //		Trims whitespace from both sides of the string
    	 // str: String
    	 //		String to be trimmed
    	 // returns: String
    	 //		Returns the trimmed string
    	 // description:
    	 //		This version of trim() was taken from [Steven Levithan's blog](http://blog.stevenlevithan.com/archives/faster-trim-javascript).
    	 //		The short yet performant version of this function is dojo/_base/lang.trim(),
    	 //		which is part of Dojo base.  Uses String.prototype.trim instead, if available.
    	 return "";	// String
     };
     =====*/
    return JSProf.LRE(17294, string);
}, 12));