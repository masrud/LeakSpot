JSProf.LFC(26254, define, false)(JSProf.LNE(26216, [
    "dojo/_base/array",
    "dojo/aspect",
    "dojo/_base/declare"
], 10), JSProf.LNF(26253, function (array, aspect, declare) {
    // module:
    //		dijit/Destroyable
    return JSProf.LFC(26252, declare, false)("dijit.Destroyable", null, JSProf.LNE(26251, {
        destroy: JSProf.LNF(26218, function (preserveDom) {
            // summary:
            //		Destroy this class, releasing any resources registered via own().
            JSProf.LPD(26217, this, '_destroyed')._destroyed = JSProf.LRSP(26217, true);
        }, 12),
        own: JSProf.LNF(26250, function () {
            // summary:
            //		Track specified handles and remove/destroy them when this instance is destroyed, unless they were
            //		already removed/destroyed manually.
            // tags:
            //		protected
            // returns:
            //		The array of specified handles, so you can do for example:
            //	|		var handle = this.own(on(...))[0];
            var cleanupMethods = JSProf.LNE(26219, [
                    "destroyRecursive",
                    "destroy",
                    "remove"
                ], 10);
            JSProf.LMC(26249, array, 'forEach').forEach(arguments, JSProf.LNF(26248, function (handle) {
                JSProf.LFD(26247, onManualDestroy);
                // When this.destroy() is called, destroy handle.  Since I'm using aspect.before(),
                // the handle will be destroyed before a subclass's destroy() method starts running, before it calls
                // this.inherited() or even if it doesn't call this.inherited() at all.  If that's an issue, make an
                // onDestroy() method and connect to that instead.
                var destroyMethodName;
                var odh = JSProf.LMC(26223, aspect, 'before').before(this, "destroy", JSProf.LNF(26222, function (preserveDom) {
                        JSProf.LMC(26221, handle, JSProf.TMPS.t7dca2bcaa35cd0a0b814c28d1273f959a048191a = destroyMethodName, 1)[JSProf.TMPS.t7dca2bcaa35cd0a0b814c28d1273f959a048191a](JSProf.LRE(26220, preserveDom));
                    }, 12));
                // Callback for when handle is manually destroyed.
                var hdhs = JSProf.LNE(26224, [], 10);
                function onManualDestroy() {
                    JSProf.LMC(26225, odh, 'remove').remove();
                    JSProf.LMC(26229, array, 'forEach').forEach(JSProf.LRE(26226, hdhs), JSProf.LNF(26228, function (hdh) {
                        JSProf.LMC(26227, hdh, 'remove').remove();
                    }, 12));
                }
                // Setup listeners for manual destroy of handle.
                // Also computes destroyMethodName, used in listener above.
                if (JSProf.LGD(26230, handle, 'then').then) {
                    // Special path for Promises.  Detect when Promise is resolved, rejected, or
                    // canceled (nb: cancelling a Promise causes it to be rejected).
                    destroyMethodName = JSProf.LWR(26231, destroyMethodName, "cancel");
                    JSProf.LMC(26234, handle, 'then').then(JSProf.LRE(26232, onManualDestroy), JSProf.LRE(26233, onManualDestroy));
                } else {
                    // Path for other handles.  Just use AOP to detect when handle is manually destroyed.
                    JSProf.LMC(26246, array, 'forEach').forEach(JSProf.LRE(26235, cleanupMethods), JSProf.LNF(26245, function (cleanupMethod) {
                        if (typeof JSProf.LGE(26236, handle, 'cleanupMethod')[cleanupMethod] === "function") {
                            if (!JSProf.LRE(26237, destroyMethodName)) {
                                // Use first matching method name in above listener (prefer destroyRecursive() to destroy())
                                destroyMethodName = JSProf.LWR(26239, destroyMethodName, JSProf.LRE(26238, cleanupMethod));
                            }
                            JSProf.LMC(26244, hdhs, 'push').push(JSProf.LMC(26243, aspect, 'after').after(JSProf.LRE(26240, handle), JSProf.LRE(26241, cleanupMethod), JSProf.LRE(26242, onManualDestroy), true));
                        }
                    }, 12));
                }
            }, 12), this);
            return arguments;    // handle
        }, 12)
    }, 11));
}, 12));