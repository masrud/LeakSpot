JSProf.LFC(15460, define, false)(JSProf.LNE(15434, [
    "./kernel",
    "./lang",
    "../on"
], 10), JSProf.LNF(15459, function (dojo, lang, on) {
    // module:
    //		dojo/unload
    var win = JSProf.LRU(15435, typeof window === 'undefined' ? undefined : window);
    var unload = JSProf.LNE(15453, {
            addOnWindowUnload: JSProf.LNF(15446, function (obj, functionName) {
                // summary:
                //		Registers a function to be triggered when window.onunload fires.
                //		Deprecated, use on(window, "unload", lang.hitch(obj, functionName)) instead.
                // description:
                //		The first time that addOnWindowUnload is called Dojo
                //		will register a page listener to trigger your unload
                //		handler with. Note that registering these handlers may
                //		destroy "fastback" page caching in browsers that support
                //		it. Be careful trying to modify the DOM or access
                //		JavaScript properties during this phase of page unloading:
                //		they may not always be available. Consider
                //		addOnUnload() if you need to modify the DOM or do
                //		heavy JavaScript work since it fires at the equivalent of
                //		the page's "onbeforeunload" event.
                // example:
                //	|	var afunc = function() {console.log("global function");};
                //	|	require(["dojo/_base/unload"], function(unload) {
                //	|		var foo = {bar: function(){ console.log("bar unloading...");}, 
                //	|		           data: "mydata"};
                //	|		unload.addOnWindowUnload(afunc);
                //	|		unload.addOnWindowUnload(foo, "bar");
                //	|		unload.addOnWindowUnload(foo, function(){console.log("", this.data);});
                //	|	});
                if (!JSProf.LGD(15436, dojo, 'windowUnloaded').windowUnloaded) {
                    JSProf.LFC(15440, on, false)(JSProf.LRE(15437, win), "unload", JSProf.LPD(15439, dojo, 'windowUnloaded').windowUnloaded = JSProf.LRSP(15439, JSProf.LNF(15438, function () {
                    }, 12)));
                }
                JSProf.LFC(15445, on, false)(JSProf.LRE(15441, win), "unload", JSProf.LMC(15444, lang, 'hitch').hitch(JSProf.LRE(15442, obj), JSProf.LRE(15443, functionName)));
            }, 12),
            addOnUnload: JSProf.LNF(15452, function (obj, functionName) {
                // summary:
                //		Registers a function to be triggered when the page unloads.
                //		Deprecated, use on(window, "beforeunload", lang.hitch(obj, functionName)) instead.
                // description:
                //		The first time that addOnUnload is called Dojo will
                //		register a page listener to trigger your unload handler
                //		with.
                //
                //		In a browser environment, the functions will be triggered
                //		during the window.onbeforeunload event. Be careful of doing
                //		too much work in an unload handler. onbeforeunload can be
                //		triggered if a link to download a file is clicked, or if
                //		the link is a javascript: link. In these cases, the
                //		onbeforeunload event fires, but the document is not
                //		actually destroyed. So be careful about doing destructive
                //		operations in a dojo.addOnUnload callback.
                //
                //		Further note that calling dojo.addOnUnload will prevent
                //		browsers from using a "fast back" cache to make page
                //		loading via back button instantaneous.
                // example:
                //	|	var afunc = function() {console.log("global function");};
                //	|	require(["dojo/_base/unload"], function(unload) {
                //	|		var foo = {bar: function(){ console.log("bar unloading...");}, 
                //	|		           data: "mydata"};
                //	|		unload.addOnUnload(afunc);
                //	|		unload.addOnUnload(foo, "bar");
                //	|		unload.addOnUnload(foo, function(){console.log("", this.data);});
                //	|	});
                JSProf.LFC(15451, on, false)(JSProf.LRE(15447, win), "beforeunload", JSProf.LMC(15450, lang, 'hitch').hitch(JSProf.LRE(15448, obj), JSProf.LRE(15449, functionName)));
            }, 12)
        }, 11);
    JSProf.LPD(15455, dojo, 'addOnWindowUnload').addOnWindowUnload = JSProf.LRSP(15455, JSProf.LGD(15454, unload, 'addOnWindowUnload').addOnWindowUnload);
    JSProf.LPD(15457, dojo, 'addOnUnload').addOnUnload = JSProf.LRSP(15457, JSProf.LGD(15456, unload, 'addOnUnload').addOnUnload);
    return JSProf.LRE(15458, unload);
}, 12));