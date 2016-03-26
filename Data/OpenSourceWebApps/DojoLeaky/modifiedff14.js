JSProf.LFC(9636, define, false)(JSProf.LNE(9557, [
    "./kernel",
    "./lang",
    "../sniff"
], 10), JSProf.LNF(9635, function (dojo, lang, has) {
    // module:
    //		dojo/_base/window
    var ret = JSProf.LNE(9629, {
            global: dojo.global,
            doc: dojo.global["document"] || null,
            body: JSProf.LNF(9563, function (doc) {
                // summary:
                //		Return the body element of the specified document or of dojo/_base/window::doc.
                // example:
                //	|	win.body().appendChild(dojo.doc.createElement('div'));
                // Note: document.body is not defined for a strict xhtml document
                // Would like to memoize this, but dojo.doc can change vi dojo.withDoc().
                doc = JSProf.LWR(9560, doc, JSProf.LRE(9558, doc) || JSProf.LGD(9559, dojo, 'doc').doc);
                return JSProf.LGD(9561, doc, 'body').body || JSProf.LGE(9562, doc.getElementsByTagName("body"), 0)[0];    // Node
            }, 12),
            setContext: JSProf.LNF(9570, function (globalObject, globalDocument) {
                // summary:
                //		changes the behavior of many core Dojo functions that deal with
                //		namespace and DOM lookup, changing them to work in a new global
                //		context (e.g., an iframe). The varibles dojo.global and dojo.doc
                //		are modified as a result of calling this function and the result of
                //		`dojo.body()` likewise differs.
                JSProf.LPD(9566, dojo, 'global').global = JSProf.LRSP(9566, JSProf.LPD(9565, ret, 'global').global = JSProf.LRSP(9565, JSProf.LRE(9564, globalObject)));
                JSProf.LPD(9569, dojo, 'doc').doc = JSProf.LRSP(9569, JSProf.LPD(9568, ret, 'doc').doc = JSProf.LRSP(9568, JSProf.LRE(9567, globalDocument)));
            }, 12),
            withGlobal: JSProf.LNF(9583, function (globalObject, callback, thisObject, cbArguments) {
                // summary:
                //		Invoke callback with globalObject as dojo.global and
                //		globalObject.document as dojo.doc.
                // description:
                //		Invoke callback with globalObject as dojo.global and
                //		globalObject.document as dojo.doc. If provided, globalObject
                //		will be executed in the context of object thisObject
                //		When callback() returns or throws an error, the dojo.global
                //		and dojo.doc will be restored to its previous state.
                var oldGlob = JSProf.LGD(9571, dojo, 'global').global;
                try {
                    JSProf.LPD(9574, dojo, 'global').global = JSProf.LRSP(9574, JSProf.LPD(9573, ret, 'global').global = JSProf.LRSP(9573, JSProf.LRE(9572, globalObject)));
                    return JSProf.LMC(9579, ret.withDoc, 'call').call(null, JSProf.LGD(9575, globalObject, 'document').document, JSProf.LRE(9576, callback), JSProf.LRE(9577, thisObject), JSProf.LRE(9578, cbArguments));
                } finally {
                    JSProf.LPD(9582, dojo, 'global').global = JSProf.LRSP(9582, JSProf.LPD(9581, ret, 'global').global = JSProf.LRSP(9581, JSProf.LRE(9580, oldGlob)));
                }
            }, 12),
            withDoc: JSProf.LNF(9628, function (documentObject, callback, thisObject, cbArguments) {
                // summary:
                //		Invoke callback with documentObject as dojo/_base/window::doc.
                // description:
                //		Invoke callback with documentObject as dojo/_base/window::doc. If provided,
                //		callback will be executed in the context of object thisObject
                //		When callback() returns or throws an error, the dojo/_base/window::doc will
                //		be restored to its previous state.
                var oldDoc = JSProf.LGD(9584, ret, 'doc').doc, oldQ = JSProf.LFC(9585, has, false)("quirks"), oldIE = JSProf.LFC(9586, has, false)("ie"), isIE, mode, pwin;
                try {
                    JSProf.LPD(9589, dojo, 'doc').doc = JSProf.LRSP(9589, JSProf.LPD(9588, ret, 'doc').doc = JSProf.LRSP(9588, JSProf.LRE(9587, documentObject)));
                    // update dojo.isQuirks and the value of the has feature "quirks".
                    // remove setting dojo.isQuirks and dojo.isIE for 2.0
                    JSProf.LPD(9592, dojo, 'isQuirks').isQuirks = JSProf.LRSP(9592, JSProf.LMC(9591, has, 'add').add("quirks", JSProf.LGD(9590, dojo.doc, 'compatMode').compatMode == "BackCompat", true, true));
                    // no need to check for QuirksMode which was Opera 7 only
                    if (JSProf.LFC(9593, has, false)("ie")) {
                        if ((pwin = JSProf.LWR(9595, pwin, JSProf.LGD(9594, documentObject, 'parentWindow').parentWindow)) && JSProf.LGD(9596, pwin, 'navigator').navigator) {
                            // re-run IE detection logic and update dojo.isIE / has("ie")
                            // (the only time parentWindow/navigator wouldn't exist is if we were not
                            // passed an actual legitimate document object)
                            isIE = JSProf.LWR(9599, isIE, JSProf.LFC(9598, parseFloat, false)(JSProf.LGE(9597, pwin.navigator.appVersion.split("MSIE "), 1)[1]) || undefined);
                            mode = JSProf.LWR(9601, mode, JSProf.LGD(9600, documentObject, 'documentMode').documentMode);
                            if (JSProf.LRE(9602, mode) && JSProf.LRE(9603, mode) != 5 && Math.floor(JSProf.LRE(9604, isIE)) != JSProf.LRE(9605, mode)) {
                                isIE = JSProf.LWR(9607, isIE, JSProf.LRE(9606, mode));
                            }
                            JSProf.LPD(9610, dojo, 'isIE').isIE = JSProf.LRSP(9610, JSProf.LMC(9609, has, 'add').add("ie", JSProf.LRE(9608, isIE), true, true));
                        }
                    }
                    if (JSProf.LRE(9611, thisObject) && typeof JSProf.LRE(9612, callback) == "string") {
                        callback = JSProf.LWR(9614, callback, JSProf.LGE(9613, thisObject, 'callback')[callback]);
                    }
                    return JSProf.LMC(9618, callback, 'apply').apply(JSProf.LRE(9615, thisObject), JSProf.LRE(9616, cbArguments) || JSProf.LNE(9617, [], 10));
                } finally {
                    JSProf.LPD(9621, dojo, 'doc').doc = JSProf.LRSP(9621, JSProf.LPD(9620, ret, 'doc').doc = JSProf.LRSP(9620, JSProf.LRE(9619, oldDoc)));
                    JSProf.LPD(9624, dojo, 'isQuirks').isQuirks = JSProf.LRSP(9624, JSProf.LMC(9623, has, 'add').add("quirks", JSProf.LRE(9622, oldQ), true, true));
                    JSProf.LPD(9627, dojo, 'isIE').isIE = JSProf.LRSP(9627, JSProf.LMC(9626, has, 'add').add("ie", JSProf.LRE(9625, oldIE), true, true));
                }
            }, 12)
        }, 11);
    JSProf.LFC(9630, has, false)("extend-dojo") && JSProf.LMC(9633, lang, 'mixin').mixin(JSProf.LRE(9631, dojo), JSProf.LRE(9632, ret));
    return JSProf.LRE(9634, ret);
}, 12));