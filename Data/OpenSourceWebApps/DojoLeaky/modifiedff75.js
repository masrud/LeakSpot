JSProf.LFC(26252, define, false)(JSProf.LNE(26214, [
    "dojo/_base/array",
    "dojo/aspect",
    "dojo/_base/declare"
], 10), JSProf.LNF(26251, function (array, aspect, declare) {
    // module:
    //		dijit/Destroyable
    return JSProf.LFC(26250, declare, false)("dijit.Destroyable", null, JSProf.LNE(26249, {
        destroy: JSProf.LNF(26216, function (preserveDom) {
            // summary:
            //		Destroy this class, releasing any resources registered via own().
            JSProf.LPD(26215, this, '_destroyed')._destroyed = JSProf.LRSP(26215, true);
        }, 12),
        own: JSProf.LNF(26248, function () {
            // summary:
            //		Track specified handles and remove/destroy them when this instance is destroyed, unless they were
            //		already removed/destroyed manually.
            // tags:
            //		protected
            // returns:
            //		The array of specified handles, so you can do for example:
            //	|		var handle = this.own(on(...))[0];
            var cleanupMethods = JSProf.LNE(26217, [
                    "destroyRecursive",
                    "destroy",
                    "remove"
                ], 10);
            JSProf.LMC(26247, array, 'forEach').forEach(arguments, JSProf.LNF(26246, function (handle) {
                JSProf.LFD(26245, onManualDestroy);
                // When this.destroy() is called, destroy handle.  Since I'm using aspect.before(),
                // the handle will be destroyed before a subclass's destroy() method starts running, before it calls
                // this.inherited() or even if it doesn't call this.inherited() at all.  If that's an issue, make an
                // onDestroy() method and connect to that instead.
                var destroyMethodName;
                var odh = JSProf.LMC(26221, aspect, 'before').before(this, "destroy", JSProf.LNF(26220, function (preserveDom) {
                        JSProf.LMC(26219, handle, JSProf.TMPS.t7dca2bcaa35cd0a0b814c28d1273f959a048191a = destroyMethodName, 1)[JSProf.TMPS.t7dca2bcaa35cd0a0b814c28d1273f959a048191a](JSProf.LRE(26218, preserveDom));
                    }, 12));
                // Callback for when handle is manually destroyed.
                var hdhs = JSProf.LNE(26222, [], 10);
                function onManualDestroy() {
                    JSProf.LMC(26223, odh, 'remove').remove();
                    JSProf.LMC(26227, array, 'forEach').forEach(JSProf.LRE(26224, hdhs), JSProf.LNF(26226, function (hdh) {
                        JSProf.LMC(26225, hdh, 'remove').remove();
                    }, 12));
                }
                // Setup listeners for manual destroy of handle.
                // Also computes destroyMethodName, used in listener above.
                if (JSProf.LGD(26228, handle, 'then').then) {
                    // Special path for Promises.  Detect when Promise is resolved, rejected, or
                    // canceled (nb: cancelling a Promise causes it to be rejected).
                    destroyMethodName = JSProf.LWR(26229, destroyMethodName, "cancel");
                    JSProf.LMC(26232, handle, 'then').then(JSProf.LRE(26230, onManualDestroy), JSProf.LRE(26231, onManualDestroy));
                } else {
                    // Path for other handles.  Just use AOP to detect when handle is manually destroyed.
                    JSProf.LMC(26244, array, 'forEach').forEach(JSProf.LRE(26233, cleanupMethods), JSProf.LNF(26243, function (cleanupMethod) {
                        if (typeof JSProf.LGE(26234, handle, 'cleanupMethod')[cleanupMethod] === "function") {
                            if (!JSProf.LRE(26235, destroyMethodName)) {
                                // Use first matching method name in above listener (prefer destroyRecursive() to destroy())
                                destroyMethodName = JSProf.LWR(26237, destroyMethodName, JSProf.LRE(26236, cleanupMethod));
                            }
                            JSProf.LMC(26242, hdhs, 'push').push(JSProf.LMC(26241, aspect, 'after').after(JSProf.LRE(26238, handle), JSProf.LRE(26239, cleanupMethod), JSProf.LRE(26240, onManualDestroy), true));
                        }
                    }, 12));
                }
            }, 12), this);
            return arguments;    // handle
        }, 12)
    }, 11));
}, 12));