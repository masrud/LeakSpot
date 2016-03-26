JSProf.LFC(11467, define, false)(JSProf.LNE(11385, [
    "./_base/kernel",
    "./has",
    "require",
    "./has!host-browser?./domReady",
    "./_base/lang"
], 10), JSProf.LNF(11466, function (dojo, has, require, domReady, lang) {
    // module:
    //		dojo/ready
    // note:
    //		This module should be unnecessary in dojo 2.0
    var
        // truthy if DOMContentLoaded or better (e.g., window.onload fired) has been achieved
        isDomReady = 0,
        // The queue of functions waiting to execute as soon as dojo.ready conditions satisfied
        loadQ = JSProf.LNE(11386, [], 10),
        // prevent recursion in onLoad
        onLoadRecursiveGuard = 0, handleDomReady = JSProf.LNF(11391, function () {
            isDomReady = JSProf.LWR(11387, isDomReady, 1);
            JSProf.LPD(11389, dojo, '_postLoad')._postLoad = JSProf.LRSP(11389, JSProf.LPD(11388, dojo.config, 'afterOnLoad').afterOnLoad = JSProf.LRSP(11388, true));
            JSProf.LFC(11390, onEvent, false)();
        }, 12), onEvent = JSProf.LNF(11408, function () {
            // Called when some state changes:
            //		- dom ready
            //		- dojo/domReady has finished processing everything in its queue
            //		- task added to loadQ
            //		- require() has finished loading all currently requested modules
            //
            // Run the functions queued with dojo.ready if appropriate.
            //guard against recursions into this function
            if (JSProf.LRE(11392, onLoadRecursiveGuard)) {
                return;
            }
            onLoadRecursiveGuard = JSProf.LWR(11393, onLoadRecursiveGuard, 1);
            // Run tasks in queue if require() is finished loading modules, the dom is ready, and there are no
            // pending tasks registered via domReady().
            // The last step is necessary so that a user defined dojo.ready() callback is delayed until after the
            // domReady() calls inside of dojo.	  Failure can be seen on dijit/tests/robot/Dialog_ally.html on IE8
            // because the dijit/focus.js domReady() callback doesn't execute until after the test starts running.
            while (JSProf.LRE(11394, isDomReady) && (!JSProf.LRE(11395, domReady) || JSProf.LGD(11396, domReady._Q, 'length').length == 0) && (JSProf.LGD(11397, require, 'idle').idle ? JSProf.LMC(11398, require, 'idle').idle() : true) && JSProf.LGD(11399, loadQ, 'length').length) {
                var f = JSProf.LMC(11400, loadQ, 'shift').shift();
                try {
                    JSProf.LFC(11401, f, false)();
                } catch (e) {
                    // force the dojo.js on("error") handler do display the message
                    JSProf.LPD(11403, e, 'info').info = JSProf.LRSP(11403, JSProf.LGD(11402, e, 'message').message);
                    if (JSProf.LGD(11404, require, 'signal').signal) {
                        JSProf.LMC(11406, require, 'signal').signal("error", JSProf.LRE(11405, e));
                    } else {
                        throw e;
                    }
                }
            }
            onLoadRecursiveGuard = JSProf.LWR(11407, onLoadRecursiveGuard, 0);
        }, 12);
    // Check if we should run the next queue operation whenever require() finishes loading modules or domReady
    // finishes processing it's queue.
    JSProf.LGD(11409, require, 'on').on && JSProf.LMC(11411, require, 'on').on("idle", JSProf.LRE(11410, onEvent));
    if (JSProf.LRE(11412, domReady)) {
        JSProf.LPD(11414, domReady, '_onQEmpty')._onQEmpty = JSProf.LRSP(11414, JSProf.LRE(11413, onEvent));
    }
    var ready = JSProf.LPD(11442, dojo, 'ready').ready = JSProf.LRSP(11442, JSProf.LPD(11441, dojo, 'addOnLoad').addOnLoad = JSProf.LRSP(11441, JSProf.LNF(11440, function (priority, context, callback) {
            // summary:
            //		Add a function to execute on DOM content loaded and all requested modules have arrived and been evaluated.
            //		In most cases, the `domReady` plug-in should suffice and this method should not be needed.
            //
            //		When called in a non-browser environment, just checks that all requested modules have arrived and been
            //		evaluated.
            // priority: Integer?
            //		The order in which to exec this callback relative to other callbacks, defaults to 1000
            // context: Object?|Function
            //		The context in which to run execute callback, or a callback if not using context
            // callback: Function?
            //		The function to execute.
            //
            // example:
            //	Simple DOM and Modules ready syntax
            //	|	require(["dojo/ready"], function(ready){
            //	|		ready(function(){ alert("Dom ready!"); });
            //	|	});
            //
            // example:
            //	Using a priority
            //	|	require(["dojo/ready"], function(ready){
            //	|		ready(2, function(){ alert("low priority ready!"); })
            //	|	});
            //
            // example:
            //	Using context
            //	|	require(["dojo/ready"], function(ready){
            //	|		ready(foo, function(){
            //	|			// in here, this == foo
            //	|		});
            //	|	});
            //
            // example:
            //	Using dojo/hitch style args:
            //	|	require(["dojo/ready"], function(ready){
            //	|		var foo = { dojoReady: function(){ console.warn(this, "dojo dom and modules ready."); } };
            //	|		ready(foo, "dojoReady");
            //	|	});
            var hitchArgs = JSProf.LMC(11415, lang, '_toArray')._toArray(arguments);
            if (typeof JSProf.LRE(11416, priority) != "number") {
                callback = JSProf.LWR(11418, callback, JSProf.LRE(11417, context));
                context = JSProf.LWR(11420, context, JSProf.LRE(11419, priority));
                priority = JSProf.LWR(11421, priority, 1000);
            } else {
                JSProf.LMC(11422, hitchArgs, 'shift').shift();
            }
            callback = JSProf.LWR(11429, callback, JSProf.LRE(11423, callback) ? JSProf.LMC(11426, lang.hitch, 'apply').apply(JSProf.LRE(11424, dojo), JSProf.LRE(11425, hitchArgs)) : JSProf.LNF(11428, function () {
                JSProf.LFC(11427, context, false)();
            }, 12));
            JSProf.LPD(11431, callback, 'priority').priority = JSProf.LRSP(11431, JSProf.LRE(11430, priority));
            for (var i = 0; JSProf.LRE(11432, i) < JSProf.LGD(11433, loadQ, 'length').length && JSProf.LRE(11434, priority) >= JSProf.LGD(11435, loadQ[i], 'priority').priority; i++) {
            }
            JSProf.LMC(11438, loadQ, 'splice').splice(JSProf.LRE(11436, i), 0, JSProf.LRE(11437, callback));
            JSProf.LFC(11439, onEvent, false)();
        }, 12)));
    JSProf.LMC(11443, has, 'add').add("dojo-config-addOnLoad", 1);
    if (JSProf.LFC(11444, has, false)("dojo-config-addOnLoad")) {
        var dca = JSProf.LGD(11445, dojo.config, 'addOnLoad').addOnLoad;
        if (JSProf.LRE(11446, dca)) {
            JSProf.LMC(11451, ready, JSProf.TMPS.tfb1553e8fde1b6ff86bd4c9309d180eb70a892a3 = JSProf.LMC(11448, lang, 'isArray').isArray(JSProf.LRE(11447, dca)) ? "apply" : "call", 1)[JSProf.TMPS.tfb1553e8fde1b6ff86bd4c9309d180eb70a892a3](JSProf.LRE(11449, dojo), JSProf.LRE(11450, dca));
        }
    }
    if (JSProf.LFC(11452, has, false)("dojo-sync-loader") && JSProf.LGD(11453, dojo.config, 'parseOnLoad').parseOnLoad && !JSProf.LGD(11454, dojo, 'isAsync').isAsync) {
        JSProf.LFC(11460, ready, false)(99, JSProf.LNF(11459, function () {
            if (!JSProf.LGD(11455, dojo, 'parser').parser) {
                JSProf.LMC(11456, dojo, 'deprecated').deprecated("Add explicit require(['dojo/parser']);", "", "2.0");
                JSProf.LFC(11458, require, false)(JSProf.LNE(11457, ["dojo/parser"], 10));
            }
        }, 12));
    }
    if (JSProf.LRE(11461, domReady)) {
        JSProf.LFC(11463, domReady, false)(JSProf.LRE(11462, handleDomReady));
    } else {
        JSProf.LFC(11464, handleDomReady, false)();
    }
    return JSProf.LRE(11465, ready);
}, 12));