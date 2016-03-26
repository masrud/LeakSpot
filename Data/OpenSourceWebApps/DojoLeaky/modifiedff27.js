JSProf.LFC(14019, define, false)(JSProf.LNE(13968, [
    "../has",
    "require"
], 10), JSProf.LNF(14018, function (has, require) {
    "use strict";
    var testDiv = JSProf.LMC(13969, document, 'createElement').createElement("div");
    JSProf.LMC(13971, has, 'add').add("dom-qsa2.1", !!JSProf.LGD(13970, testDiv, 'querySelectorAll').querySelectorAll);
    JSProf.LMC(13976, has, 'add').add("dom-qsa3", JSProf.LNF(13975, function () {
        // test to see if we have a reasonable native selector engine available
        try {
            JSProf.LPD(13972, testDiv, 'innerHTML').innerHTML = JSProf.LRSP(13972, "<p class='TEST'></p>");
            // test kind of from sizzle
            // Safari can't handle uppercase or unicode characters when
            // in quirks mode, IE8 can't handle pseudos like :empty
            return JSProf.LGD(13974, JSProf.LMC(13973, testDiv, 'querySelectorAll').querySelectorAll(".TEST:empty"), 'length').length == 1;
        } catch (e) {
        }
    }, 12));
    var fullEngine;
    var acme = "./acme", lite = "./lite";
    return JSProf.LNE(14017, {
        load: JSProf.LNF(14016, function (id, parentRequire, loaded, config) {
            var req = JSProf.LRE(13977, require);
            // here we implement the default logic for choosing a selector engine
            id = JSProf.LWR(13981, id, JSProf.LRE(13978, id) == "default" ? JSProf.LFC(13979, has, false)("config-selectorEngine") || "css3" : JSProf.LRE(13980, id));
            id = JSProf.LWR(13998, id, JSProf.LRE(13982, id) == "css2" || JSProf.LRE(13983, id) == "lite" ? JSProf.LRE(13984, lite) : JSProf.LRE(13985, id) == "css2.1" ? JSProf.LFC(13986, has, false)("dom-qsa2.1") ? JSProf.LRE(13987, lite) : JSProf.LRE(13988, acme) : JSProf.LRE(13989, id) == "css3" ? JSProf.LFC(13990, has, false)("dom-qsa3") ? JSProf.LRE(13991, lite) : JSProf.LRE(13992, acme) : JSProf.LRE(13993, id) == "acme" ? JSProf.LRE(13994, acme) : (req = JSProf.LWR(13996, req, JSProf.LRE(13995, parentRequire))) && JSProf.LRE(13997, id));
            if (id.charAt(JSProf.LGD(13999, id, 'length').length - 1) == '?') {
                id = JSProf.LWR(14001, id, id.substring(0, JSProf.LGD(14000, id, 'length').length - 1));
                var optionalLoad = true;
            }
            // the query engine is optional, only load it if a native one is not available or existing one has not been loaded
            if (JSProf.LRE(14002, optionalLoad) && (JSProf.LFC(14003, has, false)("dom-compliant-qsa") || JSProf.LRE(14004, fullEngine))) {
                return JSProf.LFC(14006, loaded, false)(JSProf.LRE(14005, fullEngine));
            }
            // load the referenced selector engine
            JSProf.LFC(14015, req, false)(JSProf.LNE(14008, [JSProf.LRE(14007, id)], 10), JSProf.LNF(14014, function (engine) {
                if (JSProf.LRE(14009, id) != "./lite") {
                    fullEngine = JSProf.LWR(14011, fullEngine, JSProf.LRE(14010, engine));
                }
                JSProf.LFC(14013, loaded, false)(JSProf.LRE(14012, engine));
            }, 12));
        }, 12)
    }, 11);
}, 12));