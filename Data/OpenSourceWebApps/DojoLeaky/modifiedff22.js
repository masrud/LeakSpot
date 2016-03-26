JSProf.LFC(13415, define, false)(JSProf.LNE(13333, [
    "./_base/kernel",
    "./has",
    "require",
    "./has!host-browser?./domReady",
    "./_base/lang"
], 10), JSProf.LNF(13414, function (dojo, has, require, domReady, lang) {
    // module:
    //		dojo/ready
    // note:
    //		This module should be unnecessary in dojo 2.0
    var
        // truthy if DOMContentLoaded or better (e.g., window.onload fired) has been achieved
        isDomReady = 0,
        // The queue of functions waiting to execute as soon as dojo.ready conditions satisfied
        loadQ = JSProf.LNE(13334, [], 10),
        // prevent recursion in onLoad
        onLoadRecursiveGuard = 0, handleDomReady = JSProf.LNF(13339, function () {
            isDomReady = JSProf.LWR(13335, isDomReady, 1);
            JSProf.LPD(13337, dojo, '_postLoad')._postLoad = JSProf.LRSP(13337, JSProf.LPD(13336, dojo.config, 'afterOnLoad').afterOnLoad = JSProf.LRSP(13336, true));
            JSProf.LFC(13338, onEvent, false)();
        }, 12), onEvent = JSProf.LNF(13356, function () {
            // Called when some state changes:
            //		- dom ready
            //		- dojo/domReady has finished processing everything in its queue
            //		- task added to loadQ
            //		- require() has finished loading all currently requested modules
            //
            // Run the functions queued with dojo.ready if appropriate.
            //guard against recursions into this function
            if (JSProf.LRE(13340, onLoadRecursiveGuard)) {
                return;
            }
            onLoadRecursiveGuard = JSProf.LWR(13341, onLoadRecursiveGuard, 1);
            // Run tasks in queue if require() is finished loading modules, the dom is ready, and there are no
            // pending tasks registered via domReady().
            // The last step is necessary so that a user defined dojo.ready() callback is delayed until after the
            // domReady() calls inside of dojo.	  Failure can be seen on dijit/tests/robot/Dialog_ally.html on IE8
            // because the dijit/focus.js domReady() callback doesn't execute until after the test starts running.
            while (JSProf.LRE(13342, isDomReady) && (!JSProf.LRE(13343, domReady) || JSProf.LGD(13344, domReady._Q, 'length').length == 0) && (JSProf.LGD(13345, require, 'idle').idle ? JSProf.LMC(13346, require, 'idle').idle() : true) && JSProf.LGD(13347, loadQ, 'length').length) {
                var f = JSProf.LMC(13348, loadQ, 'shift').shift();
                try {
                    JSProf.LFC(13349, f, false)();
                } catch (e) {
                    // force the dojo.js on("error") handler do display the message
                    JSProf.LPD(13351, e, 'info').info = JSProf.LRSP(13351, JSProf.LGD(13350, e, 'message').message);
                    if (JSProf.LGD(13352, require, 'signal').signal) {
                        JSProf.LMC(13354, require, 'signal').signal("error", JSProf.LRE(13353, e));
                    } else {
                        throw e;
                    }
                }
            }
            onLoadRecursiveGuard = JSProf.LWR(13355, onLoadRecursiveGuard, 0);
        }, 12);
    // Check if we should run the next queue operation whenever require() finishes loading modules or domReady
    // finishes processing it's queue.
    JSProf.LGD(13357, require, 'on').on && JSProf.LMC(13359, require, 'on').on("idle", JSProf.LRE(13358, onEvent));
    if (JSProf.LRE(13360, domReady)) {
        JSProf.LPD(13362, domReady, '_onQEmpty')._onQEmpty = JSProf.LRSP(13362, JSProf.LRE(13361, onEvent));
    }
    var ready = JSProf.LPD(13390, dojo, 'ready').ready = JSProf.LRSP(13390, JSProf.LPD(13389, dojo, 'addOnLoad').addOnLoad = JSProf.LRSP(13389, JSProf.LNF(13388, function (priority, context, callback) {
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
            var hitchArgs = JSProf.LMC(13363, lang, '_toArray')._toArray(arguments);
            if (typeof JSProf.LRE(13364, priority) != "number") {
                callback = JSProf.LWR(13366, callback, JSProf.LRE(13365, context));
                context = JSProf.LWR(13368, context, JSProf.LRE(13367, priority));
                priority = JSProf.LWR(13369, priority, 1000);
            } else {
                JSProf.LMC(13370, hitchArgs, 'shift').shift();
            }
            callback = JSProf.LWR(13377, callback, JSProf.LRE(13371, callback) ? JSProf.LMC(13374, lang.hitch, 'apply').apply(JSProf.LRE(13372, dojo), JSProf.LRE(13373, hitchArgs)) : JSProf.LNF(13376, function () {
                JSProf.LFC(13375, context, false)();
            }, 12));
            JSProf.LPD(13379, callback, 'priority').priority = JSProf.LRSP(13379, JSProf.LRE(13378, priority));
            for (var i = 0; JSProf.LRE(13380, i) < JSProf.LGD(13381, loadQ, 'length').length && JSProf.LRE(13382, priority) >= JSProf.LGD(13383, loadQ[i], 'priority').priority; i++) {
            }
            JSProf.LMC(13386, loadQ, 'splice').splice(JSProf.LRE(13384, i), 0, JSProf.LRE(13385, callback));
            JSProf.LFC(13387, onEvent, false)();
        }, 12)));
    JSProf.LMC(13391, has, 'add').add("dojo-config-addOnLoad", 1);
    if (JSProf.LFC(13392, has, false)("dojo-config-addOnLoad")) {
        var dca = JSProf.LGD(13393, dojo.config, 'addOnLoad').addOnLoad;
        if (JSProf.LRE(13394, dca)) {
            JSProf.LMC(13399, ready, JSProf.TMPS.tfb1553e8fde1b6ff86bd4c9309d180eb70a892a3 = JSProf.LMC(13396, lang, 'isArray').isArray(JSProf.LRE(13395, dca)) ? "apply" : "call", 1)[JSProf.TMPS.tfb1553e8fde1b6ff86bd4c9309d180eb70a892a3](JSProf.LRE(13397, dojo), JSProf.LRE(13398, dca));
        }
    }
    if (JSProf.LFC(13400, has, false)("dojo-sync-loader") && JSProf.LGD(13401, dojo.config, 'parseOnLoad').parseOnLoad && !JSProf.LGD(13402, dojo, 'isAsync').isAsync) {
        JSProf.LFC(13408, ready, false)(99, JSProf.LNF(13407, function () {
            if (!JSProf.LGD(13403, dojo, 'parser').parser) {
                JSProf.LMC(13404, dojo, 'deprecated').deprecated("Add explicit require(['dojo/parser']);", "", "2.0");
                JSProf.LFC(13406, require, false)(JSProf.LNE(13405, ["dojo/parser"], 10));
            }
        }, 12));
    }
    if (JSProf.LRE(13409, domReady)) {
        JSProf.LFC(13411, domReady, false)(JSProf.LRE(13410, handleDomReady));
    } else {
        JSProf.LFC(13412, handleDomReady, false)();
    }
    return JSProf.LRE(13413, ready);
}, 12));