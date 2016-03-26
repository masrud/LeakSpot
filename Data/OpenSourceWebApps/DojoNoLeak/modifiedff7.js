JSProf.LFC(7176, define, false)(JSProf.LNE(7079, ['./has'], 10), JSProf.LNF(7175, function (has) {
    JSProf.LFD(7173, domReady);
    JSProf.LFD(7174, processQ);
    var global = JSProf.LFC(7081, JSProf.LNF(7080, function () {
            return this;
        }, 12), false)(), doc = JSProf.LRU(7082, typeof document === 'undefined' ? undefined : document), readyStates = JSProf.LNE(7083, {
            'loaded': 1,
            'complete': 1
        }, 11), fixReadyState = typeof JSProf.LGD(7084, doc, 'readyState').readyState != "string", ready = !!JSProf.LGE(7085, readyStates, JSProf.TMPS.tdb23dfc563f7632aab8e398004206d2dd3a7bb9f = doc.readyState)[JSProf.TMPS.tdb23dfc563f7632aab8e398004206d2dd3a7bb9f], readyQ = JSProf.LNE(7086, [], 10), recursiveGuard;
    function domReady(callback) {
        // summary:
        //		Plugin to delay require()/define() callback from firing until the DOM has finished loading.
        JSProf.LMC(7088, readyQ, 'push').push(JSProf.LRE(7087, callback));
        if (JSProf.LRE(7089, ready)) {
            JSProf.LFC(7090, processQ, false)();
        }
    }
    JSProf.LPD(7094, domReady, 'load').load = JSProf.LRSP(7094, JSProf.LNF(7093, function (id, req, load) {
        JSProf.LFC(7092, domReady, false)(JSProf.LRE(7091, load));
    }, 12));
    // Export queue so that ready() can check if it's empty or not.
    JSProf.LPD(7096, domReady, '_Q')._Q = JSProf.LRSP(7096, JSProf.LRE(7095, readyQ));
    JSProf.LPD(7098, domReady, '_onQEmpty')._onQEmpty = JSProf.LRSP(7098, JSProf.LNF(7097, function () {
    }, 12));
    // For FF <= 3.5
    if (JSProf.LRE(7099, fixReadyState)) {
        JSProf.LPD(7100, doc, 'readyState').readyState = JSProf.LRSP(7100, "loading");
    }
    function processQ() {
        // Calls all functions in the queue in order, unless processQ() is already running, in which case just return
        if (JSProf.LRE(7101, recursiveGuard)) {
            return;
        }
        recursiveGuard = JSProf.LWR(7102, recursiveGuard, true);
        while (JSProf.LGD(7103, readyQ, 'length').length) {
            try {
                JSProf.LFC(7106, JSProf.LMC(7104, readyQ, 'shift').shift(), false)(JSProf.LRE(7105, doc));
            } catch (err) {
                JSProf.LMC(7109, console, 'error').error(JSProf.LRE(7107, err), "in domReady callback", JSProf.LGD(7108, err, 'stack').stack);
            }
        }
        recursiveGuard = JSProf.LWR(7110, recursiveGuard, false);
        // Notification for dojo/ready.  Remove for 2.0.
        // Note that this could add more tasks to the ready queue.
        JSProf.LMC(7111, domReady, '_onQEmpty')._onQEmpty();
    }
    if (!JSProf.LRE(7112, ready)) {
        var tests = JSProf.LNE(7113, [], 10), detectReady = JSProf.LNF(7124, function (evt) {
                evt = JSProf.LWR(7116, evt, JSProf.LRE(7114, evt) || JSProf.LGD(7115, global, 'event').event);
                if (JSProf.LRE(7117, ready) || JSProf.LGD(7118, evt, 'type').type == "readystatechange" && !JSProf.LGE(7119, readyStates, JSProf.TMPS.tdb23dfc563f7632aab8e398004206d2dd3a7bb9f = doc.readyState)[JSProf.TMPS.tdb23dfc563f7632aab8e398004206d2dd3a7bb9f]) {
                    return;
                }
                // For FF <= 3.5
                if (JSProf.LRE(7120, fixReadyState)) {
                    JSProf.LPD(7121, doc, 'readyState').readyState = JSProf.LRSP(7121, "complete");
                }
                ready = JSProf.LWR(7122, ready, 1);
                JSProf.LFC(7123, processQ, false)();
            }, 12), on = JSProf.LNF(7133, function (node, event) {
                JSProf.LMC(7127, node, 'addEventListener').addEventListener(JSProf.LRE(7125, event), JSProf.LRE(7126, detectReady), false);
                JSProf.LMC(7132, readyQ, 'push').push(JSProf.LNF(7131, function () {
                    JSProf.LMC(7130, node, 'removeEventListener').removeEventListener(JSProf.LRE(7128, event), JSProf.LRE(7129, detectReady), false);
                }, 12));
            }, 12);
        if (!JSProf.LFC(7134, has, false)("dom-addeventlistener")) {
            on = JSProf.LWR(7146, on, JSProf.LNF(7145, function (node, event) {
                event = JSProf.LWR(7136, event, "on" + JSProf.LRE(7135, event));
                JSProf.LMC(7139, node, 'attachEvent').attachEvent(JSProf.LRE(7137, event), JSProf.LRE(7138, detectReady));
                JSProf.LMC(7144, readyQ, 'push').push(JSProf.LNF(7143, function () {
                    JSProf.LMC(7142, node, 'detachEvent').detachEvent(JSProf.LRE(7140, event), JSProf.LRE(7141, detectReady));
                }, 12));
            }, 12));
            var div = JSProf.LMC(7147, doc, 'createElement').createElement("div");
            try {
                if (JSProf.LGD(7148, div, 'doScroll').doScroll && JSProf.LGD(7149, global, 'frameElement').frameElement === null) {
                    // the doScroll test is only useful if we're in the top-most frame
                    JSProf.LMC(7152, tests, 'push').push(JSProf.LNF(7151, function () {
                        // Derived with permission from Diego Perini's IEContentLoaded
                        // http://javascript.nwbox.com/IEContentLoaded/
                        try {
                            JSProf.LMC(7150, div, 'doScroll').doScroll("left");
                            return 1;
                        } catch (e) {
                        }
                    }, 12));
                }
            } catch (e) {
            }
        }
        JSProf.LFC(7154, on, false)(JSProf.LRE(7153, doc), "DOMContentLoaded");
        JSProf.LFC(7156, on, false)(JSProf.LRE(7155, global), "load");
        if ("onreadystatechange" in JSProf.LRE(7157, doc)) {
            JSProf.LFC(7159, on, false)(JSProf.LRE(7158, doc), "readystatechange");
        } else if (!JSProf.LRE(7160, fixReadyState)) {
            // if the ready state property exists and there's
            // no readystatechange event, poll for the state
            // to change
            JSProf.LMC(7163, tests, 'push').push(JSProf.LNF(7162, function () {
                return JSProf.LGE(7161, readyStates, JSProf.TMPS.tdb23dfc563f7632aab8e398004206d2dd3a7bb9f = doc.readyState)[JSProf.TMPS.tdb23dfc563f7632aab8e398004206d2dd3a7bb9f];
            }, 12));
        }
        if (JSProf.LGD(7164, tests, 'length').length) {
            var poller = JSProf.LNF(7170, function () {
                    if (JSProf.LRE(7165, ready)) {
                        return;
                    }
                    var i = JSProf.LGD(7166, tests, 'length').length;
                    while (i--) {
                        if (JSProf.LMC(7167, tests, JSProf.TMPS.t0beeec788e290fb95eba48590a3c0764a04be413 = i, 1)[JSProf.TMPS.t0beeec788e290fb95eba48590a3c0764a04be413]()) {
                            JSProf.LFC(7168, detectReady, false)("poller");
                            return;
                        }
                    }
                    setTimeout(JSProf.LRE(7169, poller), 30);
                }, 12);
            JSProf.LFC(7171, poller, false)();
        }
    }
    return JSProf.LRE(7172, domReady);
}, 12));