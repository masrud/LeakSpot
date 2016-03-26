JSProf.LFC(28379, define, false)(JSProf.LNE(28356, [
    "./kernel",
    "../json"
], 10), JSProf.LNF(28378, function (dojo, json) {
    // module:
    //		dojo/_base/json
    /*=====
    return {
    	// summary:
    	//		This module defines the dojo JSON API.
    };
    =====*/
    JSProf.LPD(28359, dojo, 'fromJson').fromJson = JSProf.LRSP(28359, JSProf.LNF(28358, function (js) {
        // summary:
        //		Parses a JavaScript expression and returns a JavaScript value.
        // description:
        //		Throws for invalid JavaScript expressions. It does not use a strict JSON parser. It
        //		always delegates to eval(). The content passed to this method must therefore come
        //		from a trusted source.
        //		It is recommend that you use dojo/json's parse function for an
        //		implementation uses the (faster) native JSON parse when available.
        // js:
        //		a string literal of a JavaScript expression, for instance:
        //		`'{ "foo": [ "bar", 1, { "baz": "thud" } ] }'`
        return eval("(" + JSProf.LRE(28357, js) + ")");    // Object
    }, 12));
    /*=====
    dojo._escapeString = function(){
    	// summary:
    	//		Adds escape sequences for non-visual characters, double quote and
    	//		backslash and surrounds with double quotes to form a valid string
    	//		literal.
    };
    =====*/
    JSProf.LPD(28361, dojo, '_escapeString')._escapeString = JSProf.LRSP(28361, JSProf.LGD(28360, json, 'stringify').stringify);
    // just delegate to json.stringify
    JSProf.LPD(28362, dojo, 'toJsonIndentStr').toJsonIndentStr = JSProf.LRSP(28362, "\t");
    JSProf.LPD(28376, dojo, 'toJson').toJson = JSProf.LRSP(28376, JSProf.LNF(28375, function (it, prettyPrint) {
        // summary:
        //		Returns a [JSON](http://json.org) serialization of an object.
        // description:
        //		Returns a [JSON](http://json.org) serialization of an object.
        //		Note that this doesn't check for infinite recursion, so don't do that!
        //		It is recommend that you use dojo/json's stringify function for an lighter
        //		and faster implementation that matches the native JSON API and uses the
        //		native JSON serializer when available.
        // it:
        //		an object to be serialized. Objects may define their own
        //		serialization via a special "__json__" or "json" function
        //		property. If a specialized serializer has been defined, it will
        //		be used as a fallback.
        //		Note that in 1.6, toJson would serialize undefined, but this no longer supported
        //		since it is not supported by native JSON serializer.
        // prettyPrint:
        //		if true, we indent objects and arrays to make the output prettier.
        //		The variable `dojo.toJsonIndentStr` is used as the indent string --
        //		to use something other than the default (tab), change that variable
        //		before calling dojo.toJson().
        //		Note that if native JSON support is available, it will be used for serialization,
        //		and native implementations vary on the exact spacing used in pretty printing.
        // returns:
        //		A JSON string serialization of the passed-in object.
        // example:
        //		simple serialization of a trivial object
        //		|	var jsonStr = dojo.toJson({ howdy: "stranger!", isStrange: true });
        //		|	doh.is('{"howdy":"stranger!","isStrange":true}', jsonStr);
        // example:
        //		a custom serializer for an objects of a particular class:
        //		|	dojo.declare("Furby", null, {
        //		|		furbies: "are strange",
        //		|		furbyCount: 10,
        //		|		__json__: function(){
        //		|		},
        //		|	});
        // use dojo/json
        return JSProf.LMC(28374, json, 'stringify').stringify(JSProf.LRE(28363, it), JSProf.LNF(28371, function (key, value) {
            if (JSProf.LRE(28364, value)) {
                var tf = JSProf.LGD(28365, value, '__json__').__json__ || JSProf.LGD(28366, value, 'json').json;
                if (typeof JSProf.LRE(28367, tf) == "function") {
                    return JSProf.LMC(28369, tf, 'call').call(JSProf.LRE(28368, value));
                }
            }
            return JSProf.LRE(28370, value);
        }, 12), JSProf.LRE(28372, prettyPrint) && JSProf.LGD(28373, dojo, 'toJsonIndentStr').toJsonIndentStr);    // String
    }, 12));
    return JSProf.LRE(28377, dojo);
}, 12));