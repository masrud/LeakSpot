JSProf.LFC(5363, define, false)(JSProf.LNE(5266, ['./has'], 10), JSProf.LNF(5362, function (has) {
    JSProf.LFD(5360, domReady);
    JSProf.LFD(5361, processQ);
    var global = JSProf.LFC(5268, JSProf.LNF(5267, function () {
            return this;
        }, 12), false)(), doc = JSProf.LRU(5269, typeof document === 'undefined' ? undefined : document), readyStates = JSProf.LNE(5270, {
            'loaded': 1,
            'complete': 1
        }, 11), fixReadyState = typeof JSProf.LGD(5271, doc, 'readyState').readyState != "string", ready = !!JSProf.LGE(5272, readyStates, JSProf.TMPS.tdb23dfc563f7632aab8e398004206d2dd3a7bb9f = doc.readyState)[JSProf.TMPS.tdb23dfc563f7632aab8e398004206d2dd3a7bb9f], readyQ = JSProf.LNE(5273, [], 10), recursiveGuard;
    function domReady(callback) {
        // summary:
        //		Plugin to delay require()/define() callback from firing until the DOM has finished loading.
        JSProf.LMC(5275, readyQ, 'push').push(JSProf.LRE(5274, callback));
        if (JSProf.LRE(5276, ready)) {
            JSProf.LFC(5277, processQ, false)();
        }
    }
    JSProf.LPD(5281, domReady, 'load').load = JSProf.LRSP(5281, JSProf.LNF(5280, function (id, req, load) {
        JSProf.LFC(5279, domReady, false)(JSProf.LRE(5278, load));
    }, 12));
    // Export queue so that ready() can check if it's empty or not.
    JSProf.LPD(5283, domReady, '_Q')._Q = JSProf.LRSP(5283, JSProf.LRE(5282, readyQ));
    JSProf.LPD(5285, domReady, '_onQEmpty')._onQEmpty = JSProf.LRSP(5285, JSProf.LNF(5284, function () {
    }, 12));
    // For FF <= 3.5
    if (JSProf.LRE(5286, fixReadyState)) {
        JSProf.LPD(5287, doc, 'readyState').readyState = JSProf.LRSP(5287, "loading");
    }
    function processQ() {
        // Calls all functions in the queue in order, unless processQ() is already running, in which case just return
        if (JSProf.LRE(5288, recursiveGuard)) {
            return;
        }
        recursiveGuard = JSProf.LWR(5289, recursiveGuard, true);
        while (JSProf.LGD(5290, readyQ, 'length').length) {
            try {
                JSProf.LFC(5293, JSProf.LMC(5291, readyQ, 'shift').shift(), false)(JSProf.LRE(5292, doc));
            } catch (err) {
                JSProf.LMC(5296, console, 'error').error(JSProf.LRE(5294, err), "in domReady callback", JSProf.LGD(5295, err, 'stack').stack);
            }
        }
        recursiveGuard = JSProf.LWR(5297, recursiveGuard, false);
        // Notification for dojo/ready.  Remove for 2.0.
        // Note that this could add more tasks to the ready queue.
        JSProf.LMC(5298, domReady, '_onQEmpty')._onQEmpty();
    }
    if (!JSProf.LRE(5299, ready)) {
        var tests = JSProf.LNE(5300, [], 10), detectReady = JSProf.LNF(5311, function (evt) {
                evt = JSProf.LWR(5303, evt, JSProf.LRE(5301, evt) || JSProf.LGD(5302, global, 'event').event);
                if (JSProf.LRE(5304, ready) || JSProf.LGD(5305, evt, 'type').type == "readystatechange" && !JSProf.LGE(5306, readyStates, JSProf.TMPS.tdb23dfc563f7632aab8e398004206d2dd3a7bb9f = doc.readyState)[JSProf.TMPS.tdb23dfc563f7632aab8e398004206d2dd3a7bb9f]) {
                    return;
                }
                // For FF <= 3.5
                if (JSProf.LRE(5307, fixReadyState)) {
                    JSProf.LPD(5308, doc, 'readyState').readyState = JSProf.LRSP(5308, "complete");
                }
                ready = JSProf.LWR(5309, ready, 1);
                JSProf.LFC(5310, processQ, false)();
            }, 12), on = JSProf.LNF(5320, function (node, event) {
                JSProf.LMC(5314, node, 'addEventListener').addEventListener(JSProf.LRE(5312, event), JSProf.LRE(5313, detectReady), false);
                JSProf.LMC(5319, readyQ, 'push').push(JSProf.LNF(5318, function () {
                    JSProf.LMC(5317, node, 'removeEventListener').removeEventListener(JSProf.LRE(5315, event), JSProf.LRE(5316, detectReady), false);
                }, 12));
            }, 12);
        if (!JSProf.LFC(5321, has, false)("dom-addeventlistener")) {
            on = JSProf.LWR(5333, on, JSProf.LNF(5332, function (node, event) {
                event = JSProf.LWR(5323, event, "on" + JSProf.LRE(5322, event));
                JSProf.LMC(5326, node, 'attachEvent').attachEvent(JSProf.LRE(5324, event), JSProf.LRE(5325, detectReady));
                JSProf.LMC(5331, readyQ, 'push').push(JSProf.LNF(5330, function () {
                    JSProf.LMC(5329, node, 'detachEvent').detachEvent(JSProf.LRE(5327, event), JSProf.LRE(5328, detectReady));
                }, 12));
            }, 12));
            var div = JSProf.LMC(5334, doc, 'createElement').createElement("div");
            try {
                if (JSProf.LGD(5335, div, 'doScroll').doScroll && JSProf.LGD(5336, global, 'frameElement').frameElement === null) {
                    // the doScroll test is only useful if we're in the top-most frame
                    JSProf.LMC(5339, tests, 'push').push(JSProf.LNF(5338, function () {
                        // Derived with permission from Diego Perini's IEContentLoaded
                        // http://javascript.nwbox.com/IEContentLoaded/
                        try {
                            JSProf.LMC(5337, div, 'doScroll').doScroll("left");
                            return 1;
                        } catch (e) {
                        }
                    }, 12));
                }
            } catch (e) {
            }
        }
        JSProf.LFC(5341, on, false)(JSProf.LRE(5340, doc), "DOMContentLoaded");
        JSProf.LFC(5343, on, false)(JSProf.LRE(5342, global), "load");
        if ("onreadystatechange" in JSProf.LRE(5344, doc)) {
            JSProf.LFC(5346, on, false)(JSProf.LRE(5345, doc), "readystatechange");
        } else if (!JSProf.LRE(5347, fixReadyState)) {
            // if the ready state property exists and there's
            // no readystatechange event, poll for the state
            // to change
            JSProf.LMC(5350, tests, 'push').push(JSProf.LNF(5349, function () {
                return JSProf.LGE(5348, readyStates, JSProf.TMPS.tdb23dfc563f7632aab8e398004206d2dd3a7bb9f = doc.readyState)[JSProf.TMPS.tdb23dfc563f7632aab8e398004206d2dd3a7bb9f];
            }, 12));
        }
        if (JSProf.LGD(5351, tests, 'length').length) {
            var poller = JSProf.LNF(5357, function () {
                    if (JSProf.LRE(5352, ready)) {
                        return;
                    }
                    var i = JSProf.LGD(5353, tests, 'length').length;
                    while (i--) {
                        if (JSProf.LMC(5354, tests, JSProf.TMPS.t0beeec788e290fb95eba48590a3c0764a04be413 = i, 1)[JSProf.TMPS.t0beeec788e290fb95eba48590a3c0764a04be413]()) {
                            JSProf.LFC(5355, detectReady, false)("poller");
                            return;
                        }
                    }
                    setTimeout(JSProf.LRE(5356, poller), 30);
                }, 12);
            JSProf.LFC(5358, poller, false)();
        }
    }
    return JSProf.LRE(5359, domReady);
}, 12));