JSProf.LFC(14279, define, false)(JSProf.LNE(14228, [
    "../has",
    "require"
], 10), JSProf.LNF(14278, function (has, require) {
    "use strict";
    var testDiv = JSProf.LMC(14229, document, 'createElement').createElement("div");
    JSProf.LMC(14231, has, 'add').add("dom-qsa2.1", !!JSProf.LGD(14230, testDiv, 'querySelectorAll').querySelectorAll);
    JSProf.LMC(14236, has, 'add').add("dom-qsa3", JSProf.LNF(14235, function () {
        // test to see if we have a reasonable native selector engine available
        try {
            JSProf.LPD(14232, testDiv, 'innerHTML').innerHTML = JSProf.LRSP(14232, "<p class='TEST'></p>");
            // test kind of from sizzle
            // Safari can't handle uppercase or unicode characters when
            // in quirks mode, IE8 can't handle pseudos like :empty
            return JSProf.LGD(14234, JSProf.LMC(14233, testDiv, 'querySelectorAll').querySelectorAll(".TEST:empty"), 'length').length == 1;
        } catch (e) {
        }
    }, 12));
    var fullEngine;
    var acme = "./acme", lite = "./lite";
    return JSProf.LNE(14277, {
        load: JSProf.LNF(14276, function (id, parentRequire, loaded, config) {
            var req = JSProf.LRE(14237, require);
            // here we implement the default logic for choosing a selector engine
            id = JSProf.LWR(14241, id, JSProf.LRE(14238, id) == "default" ? JSProf.LFC(14239, has, false)("config-selectorEngine") || "css3" : JSProf.LRE(14240, id));
            id = JSProf.LWR(14258, id, JSProf.LRE(14242, id) == "css2" || JSProf.LRE(14243, id) == "lite" ? JSProf.LRE(14244, lite) : JSProf.LRE(14245, id) == "css2.1" ? JSProf.LFC(14246, has, false)("dom-qsa2.1") ? JSProf.LRE(14247, lite) : JSProf.LRE(14248, acme) : JSProf.LRE(14249, id) == "css3" ? JSProf.LFC(14250, has, false)("dom-qsa3") ? JSProf.LRE(14251, lite) : JSProf.LRE(14252, acme) : JSProf.LRE(14253, id) == "acme" ? JSProf.LRE(14254, acme) : (req = JSProf.LWR(14256, req, JSProf.LRE(14255, parentRequire))) && JSProf.LRE(14257, id));
            if (id.charAt(JSProf.LGD(14259, id, 'length').length - 1) == '?') {
                id = JSProf.LWR(14261, id, id.substring(0, JSProf.LGD(14260, id, 'length').length - 1));
                var optionalLoad = true;
            }
            // the query engine is optional, only load it if a native one is not available or existing one has not been loaded
            if (JSProf.LRE(14262, optionalLoad) && (JSProf.LFC(14263, has, false)("dom-compliant-qsa") || JSProf.LRE(14264, fullEngine))) {
                return JSProf.LFC(14266, loaded, false)(JSProf.LRE(14265, fullEngine));
            }
            // load the referenced selector engine
            JSProf.LFC(14275, req, false)(JSProf.LNE(14268, [JSProf.LRE(14267, id)], 10), JSProf.LNF(14274, function (engine) {
                if (JSProf.LRE(14269, id) != "./lite") {
                    fullEngine = JSProf.LWR(14271, fullEngine, JSProf.LRE(14270, engine));
                }
                JSProf.LFC(14273, loaded, false)(JSProf.LRE(14272, engine));
            }, 12));
        }, 12)
    }, 11);
}, 12));