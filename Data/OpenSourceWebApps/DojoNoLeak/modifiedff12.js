JSProf.LFC(9253, define, false)(JSProf.LNE(9174, [
    "./kernel",
    "./lang",
    "../sniff"
], 10), JSProf.LNF(9252, function (dojo, lang, has) {
    // module:
    //		dojo/_base/window
    var ret = JSProf.LNE(9246, {
            global: dojo.global,
            doc: dojo.global["document"] || null,
            body: JSProf.LNF(9180, function (doc) {
                // summary:
                //		Return the body element of the specified document or of dojo/_base/window::doc.
                // example:
                //	|	win.body().appendChild(dojo.doc.createElement('div'));
                // Note: document.body is not defined for a strict xhtml document
                // Would like to memoize this, but dojo.doc can change vi dojo.withDoc().
                doc = JSProf.LWR(9177, doc, JSProf.LRE(9175, doc) || JSProf.LGD(9176, dojo, 'doc').doc);
                return JSProf.LGD(9178, doc, 'body').body || JSProf.LGE(9179, doc.getElementsByTagName("body"), 0)[0];    // Node
            }, 12),
            setContext: JSProf.LNF(9187, function (globalObject, globalDocument) {
                // summary:
                //		changes the behavior of many core Dojo functions that deal with
                //		namespace and DOM lookup, changing them to work in a new global
                //		context (e.g., an iframe). The varibles dojo.global and dojo.doc
                //		are modified as a result of calling this function and the result of
                //		`dojo.body()` likewise differs.
                JSProf.LPD(9183, dojo, 'global').global = JSProf.LRSP(9183, JSProf.LPD(9182, ret, 'global').global = JSProf.LRSP(9182, JSProf.LRE(9181, globalObject)));
                JSProf.LPD(9186, dojo, 'doc').doc = JSProf.LRSP(9186, JSProf.LPD(9185, ret, 'doc').doc = JSProf.LRSP(9185, JSProf.LRE(9184, globalDocument)));
            }, 12),
            withGlobal: JSProf.LNF(9200, function (globalObject, callback, thisObject, cbArguments) {
                // summary:
                //		Invoke callback with globalObject as dojo.global and
                //		globalObject.document as dojo.doc.
                // description:
                //		Invoke callback with globalObject as dojo.global and
                //		globalObject.document as dojo.doc. If provided, globalObject
                //		will be executed in the context of object thisObject
                //		When callback() returns or throws an error, the dojo.global
                //		and dojo.doc will be restored to its previous state.
                var oldGlob = JSProf.LGD(9188, dojo, 'global').global;
                try {
                    JSProf.LPD(9191, dojo, 'global').global = JSProf.LRSP(9191, JSProf.LPD(9190, ret, 'global').global = JSProf.LRSP(9190, JSProf.LRE(9189, globalObject)));
                    return JSProf.LMC(9196, ret.withDoc, 'call').call(null, JSProf.LGD(9192, globalObject, 'document').document, JSProf.LRE(9193, callback), JSProf.LRE(9194, thisObject), JSProf.LRE(9195, cbArguments));
                } finally {
                    JSProf.LPD(9199, dojo, 'global').global = JSProf.LRSP(9199, JSProf.LPD(9198, ret, 'global').global = JSProf.LRSP(9198, JSProf.LRE(9197, oldGlob)));
                }
            }, 12),
            withDoc: JSProf.LNF(9245, function (documentObject, callback, thisObject, cbArguments) {
                // summary:
                //		Invoke callback with documentObject as dojo/_base/window::doc.
                // description:
                //		Invoke callback with documentObject as dojo/_base/window::doc. If provided,
                //		callback will be executed in the context of object thisObject
                //		When callback() returns or throws an error, the dojo/_base/window::doc will
                //		be restored to its previous state.
                var oldDoc = JSProf.LGD(9201, ret, 'doc').doc, oldQ = JSProf.LFC(9202, has, false)("quirks"), oldIE = JSProf.LFC(9203, has, false)("ie"), isIE, mode, pwin;
                try {
                    JSProf.LPD(9206, dojo, 'doc').doc = JSProf.LRSP(9206, JSProf.LPD(9205, ret, 'doc').doc = JSProf.LRSP(9205, JSProf.LRE(9204, documentObject)));
                    // update dojo.isQuirks and the value of the has feature "quirks".
                    // remove setting dojo.isQuirks and dojo.isIE for 2.0
                    JSProf.LPD(9209, dojo, 'isQuirks').isQuirks = JSProf.LRSP(9209, JSProf.LMC(9208, has, 'add').add("quirks", JSProf.LGD(9207, dojo.doc, 'compatMode').compatMode == "BackCompat", true, true));
                    // no need to check for QuirksMode which was Opera 7 only
                    if (JSProf.LFC(9210, has, false)("ie")) {
                        if ((pwin = JSProf.LWR(9212, pwin, JSProf.LGD(9211, documentObject, 'parentWindow').parentWindow)) && JSProf.LGD(9213, pwin, 'navigator').navigator) {
                            // re-run IE detection logic and update dojo.isIE / has("ie")
                            // (the only time parentWindow/navigator wouldn't exist is if we were not
                            // passed an actual legitimate document object)
                            isIE = JSProf.LWR(9216, isIE, JSProf.LFC(9215, parseFloat, false)(JSProf.LGE(9214, pwin.navigator.appVersion.split("MSIE "), 1)[1]) || undefined);
                            mode = JSProf.LWR(9218, mode, JSProf.LGD(9217, documentObject, 'documentMode').documentMode);
                            if (JSProf.LRE(9219, mode) && JSProf.LRE(9220, mode) != 5 && Math.floor(JSProf.LRE(9221, isIE)) != JSProf.LRE(9222, mode)) {
                                isIE = JSProf.LWR(9224, isIE, JSProf.LRE(9223, mode));
                            }
                            JSProf.LPD(9227, dojo, 'isIE').isIE = JSProf.LRSP(9227, JSProf.LMC(9226, has, 'add').add("ie", JSProf.LRE(9225, isIE), true, true));
                        }
                    }
                    if (JSProf.LRE(9228, thisObject) && typeof JSProf.LRE(9229, callback) == "string") {
                        callback = JSProf.LWR(9231, callback, JSProf.LGE(9230, thisObject, 'callback')[callback]);
                    }
                    return JSProf.LMC(9235, callback, 'apply').apply(JSProf.LRE(9232, thisObject), JSProf.LRE(9233, cbArguments) || JSProf.LNE(9234, [], 10));
                } finally {
                    JSProf.LPD(9238, dojo, 'doc').doc = JSProf.LRSP(9238, JSProf.LPD(9237, ret, 'doc').doc = JSProf.LRSP(9237, JSProf.LRE(9236, oldDoc)));
                    JSProf.LPD(9241, dojo, 'isQuirks').isQuirks = JSProf.LRSP(9241, JSProf.LMC(9240, has, 'add').add("quirks", JSProf.LRE(9239, oldQ), true, true));
                    JSProf.LPD(9244, dojo, 'isIE').isIE = JSProf.LRSP(9244, JSProf.LMC(9243, has, 'add').add("ie", JSProf.LRE(9242, oldIE), true, true));
                }
            }, 12)
        }, 11);
    JSProf.LFC(9247, has, false)("extend-dojo") && JSProf.LMC(9250, lang, 'mixin').mixin(JSProf.LRE(9248, dojo), JSProf.LRE(9249, ret));
    return JSProf.LRE(9251, ret);
}, 12));