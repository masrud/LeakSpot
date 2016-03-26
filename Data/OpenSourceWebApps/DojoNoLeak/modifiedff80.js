JSProf.LFC(27350, define, false)(JSProf.LNE(27327, [
    "./kernel",
    "../json"
], 10), JSProf.LNF(27349, function (dojo, json) {
    // module:
    //		dojo/_base/json
    /*=====
    return {
    	// summary:
    	//		This module defines the dojo JSON API.
    };
    =====*/
    JSProf.LPD(27330, dojo, 'fromJson').fromJson = JSProf.LRSP(27330, JSProf.LNF(27329, function (js) {
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
        return eval("(" + JSProf.LRE(27328, js) + ")");    // Object
    }, 12));
    /*=====
    dojo._escapeString = function(){
    	// summary:
    	//		Adds escape sequences for non-visual characters, double quote and
    	//		backslash and surrounds with double quotes to form a valid string
    	//		literal.
    };
    =====*/
    JSProf.LPD(27332, dojo, '_escapeString')._escapeString = JSProf.LRSP(27332, JSProf.LGD(27331, json, 'stringify').stringify);
    // just delegate to json.stringify
    JSProf.LPD(27333, dojo, 'toJsonIndentStr').toJsonIndentStr = JSProf.LRSP(27333, "\t");
    JSProf.LPD(27347, dojo, 'toJson').toJson = JSProf.LRSP(27347, JSProf.LNF(27346, function (it, prettyPrint) {
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
        return JSProf.LMC(27345, json, 'stringify').stringify(JSProf.LRE(27334, it), JSProf.LNF(27342, function (key, value) {
            if (JSProf.LRE(27335, value)) {
                var tf = JSProf.LGD(27336, value, '__json__').__json__ || JSProf.LGD(27337, value, 'json').json;
                if (typeof JSProf.LRE(27338, tf) == "function") {
                    return JSProf.LMC(27340, tf, 'call').call(JSProf.LRE(27339, value));
                }
            }
            return JSProf.LRE(27341, value);
        }, 12), JSProf.LRE(27343, prettyPrint) && JSProf.LGD(27344, dojo, 'toJsonIndentStr').toJsonIndentStr);    // String
    }, 12));
    return JSProf.LRE(27348, dojo);
}, 12));