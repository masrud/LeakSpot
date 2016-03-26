JSProf.LFC(14839, define, false)(JSProf.LNE(14542, [
    "../has",
    "../_base/kernel"
], 10), JSProf.LNF(14838, function (has, dojo) {
    "use strict";
    var testDiv = JSProf.LMC(14543, document, 'createElement').createElement("div");
    var matchesSelector = JSProf.LGD(14544, testDiv, 'matches').matches || JSProf.LGD(14545, testDiv, 'webkitMatchesSelector').webkitMatchesSelector || JSProf.LGD(14546, testDiv, 'mozMatchesSelector').mozMatchesSelector || JSProf.LGD(14547, testDiv, 'msMatchesSelector').msMatchesSelector || JSProf.LGD(14548, testDiv, 'oMatchesSelector').oMatchesSelector;
    var querySelectorAll = JSProf.LGD(14549, testDiv, 'querySelectorAll').querySelectorAll;
    var unionSplit = /([^\s,](?:"(?:\\.|[^"])+"|'(?:\\.|[^'])+'|[^,])*)/g;
    JSProf.LMC(14551, has, 'add').add("dom-matches-selector", !!JSProf.LRE(14550, matchesSelector));
    JSProf.LMC(14553, has, 'add').add("dom-qsa", !!JSProf.LRE(14552, querySelectorAll));
    // this is a simple query engine. It has handles basic selectors, and for simple
    // common selectors is extremely fast
    var liteEngine = JSProf.LNF(14632, function (selector, root) {
            // summary:
            //		A small lightweight query selector engine that implements CSS2.1 selectors
            //		minus pseudo-classes and the sibling combinator, plus CSS3 attribute selectors
            if (JSProf.LRE(14554, combine) && JSProf.LMC(14555, selector, 'indexOf').indexOf(',') > -1) {
                return JSProf.LFC(14558, combine, false)(JSProf.LRE(14556, selector), JSProf.LRE(14557, root));
            }
            // use the root's ownerDocument if provided, otherwise try to use dojo.doc. Note 
            // that we don't use dojo/_base/window's doc to reduce dependencies, and 
            // fallback to plain document if dojo.doc hasn't been defined (by dojo/_base/window).
            // presumably we will have a better way to do this in 2.0 
            var doc = JSProf.LRE(14559, root) ? JSProf.LGD(14560, root, 'ownerDocument').ownerDocument || JSProf.LRE(14561, root) : JSProf.LGD(14562, dojo, 'doc').doc || JSProf.LRU(14563, typeof document === 'undefined' ? undefined : document), match = (JSProf.LRE(14564, querySelectorAll) ? /^([\w]*)#([\w\-]+$)|^(\.)([\w\-\*]+$)|^(\w+$)/ : /^([\w]*)#([\w\-]+)(?:\s+(.*))?$|(?:^|(>|.+\s+))([\w\-\*]+)(\S*$)/).exec(JSProf.LRE(14565, selector));
            root = JSProf.LWR(14568, root, JSProf.LRE(14566, root) || JSProf.LRE(14567, doc));
            if (JSProf.LRE(14569, match)) {
                // fast path regardless of whether or not querySelectorAll exists
                if (JSProf.LGE(14570, match, 2)[2]) {
                    // an #id
                    // use dojo.byId if available as it fixes the id retrieval in IE, note that we can't use the dojo namespace in 2.0, but if there is a conditional module use, we will use that
                    var found = JSProf.LGD(14571, dojo, 'byId').byId ? JSProf.LMC(14574, dojo, 'byId').byId(JSProf.LGE(14572, match, 2)[2], JSProf.LRE(14573, doc)) : JSProf.LMC(14576, doc, 'getElementById').getElementById(JSProf.LGE(14575, match, 2)[2]);
                    if (!JSProf.LRE(14577, found) || JSProf.LGE(14578, match, 1)[1] && JSProf.LGE(14579, match, 1)[1] != found.tagName.toLowerCase()) {
                        // if there is a tag qualifer and it doesn't match, no matches
                        return JSProf.LNE(14580, [], 10);
                    }
                    if (JSProf.LRE(14581, root) != JSProf.LRE(14582, doc)) {
                        // there is a root element, make sure we are a child of it
                        var parent = JSProf.LRE(14583, found);
                        while (JSProf.LRE(14584, parent) != JSProf.LRE(14585, root)) {
                            parent = JSProf.LWR(14587, parent, JSProf.LGD(14586, parent, 'parentNode').parentNode);
                            if (!JSProf.LRE(14588, parent)) {
                                return JSProf.LNE(14589, [], 10);
                            }
                        }
                    }
                    return JSProf.LGE(14590, match, 3)[3] ? JSProf.LFC(14593, liteEngine, false)(JSProf.LGE(14591, match, 3)[3], JSProf.LRE(14592, found)) : JSProf.LNE(14595, [JSProf.LRE(14594, found)], 10);
                }
                if (JSProf.LGE(14596, match, 3)[3] && JSProf.LGD(14597, root, 'getElementsByClassName').getElementsByClassName) {
                    // a .class
                    return JSProf.LMC(14599, root, 'getElementsByClassName').getElementsByClassName(JSProf.LGE(14598, match, 4)[4]);
                }
                var found;
                if (JSProf.LGE(14600, match, 5)[5]) {
                    // a tag
                    found = JSProf.LWR(14602, found, root.getElementsByTagName(JSProf.LGE(14601, match, 5)[5]));
                    if (JSProf.LGE(14603, match, 4)[4] || JSProf.LGE(14604, match, 6)[6]) {
                        selector = JSProf.LWR(14607, selector, (JSProf.LGE(14605, match, 4)[4] || "") + JSProf.LGE(14606, match, 6)[6]);
                    } else {
                        // that was the entirety of the query, return results
                        return JSProf.LRE(14608, found);
                    }
                }
            }
            if (JSProf.LRE(14609, querySelectorAll)) {
                // qSA works strangely on Element-rooted queries
                // We can work around this by specifying an extra ID on the root
                // and working up from there (Thanks to Andrew Dupont for the technique)
                // IE 8 doesn't work on object elements
                if (JSProf.LGD(14610, root, 'nodeType').nodeType === 1 && root.nodeName.toLowerCase() !== "object") {
                    return JSProf.LFC(14614, useRoot, false)(JSProf.LRE(14611, root), JSProf.LRE(14612, selector), JSProf.LGD(14613, root, 'querySelectorAll').querySelectorAll);
                } else {
                    // we can use the native qSA
                    return JSProf.LMC(14616, root, 'querySelectorAll').querySelectorAll(JSProf.LRE(14615, selector));
                }
            } else if (!JSProf.LRE(14617, found)) {
                // search all children and then filter
                found = JSProf.LWR(14618, found, root.getElementsByTagName("*"));
            }
            // now we filter the nodes that were found using the matchesSelector
            var results = JSProf.LNE(14619, [], 10);
            for (var i = 0, l = JSProf.LGD(14620, found, 'length').length; JSProf.LRE(14621, i) < JSProf.LRE(14622, l); i++) {
                var node = JSProf.LGE(14623, found, 'i')[i];
                if (JSProf.LGD(14624, node, 'nodeType').nodeType == 1 && JSProf.LFC(14628, jsMatchesSelector, false)(JSProf.LRE(14625, node), JSProf.LRE(14626, selector), JSProf.LRE(14627, root))) {
                    // keep the nodes that match the selector
                    JSProf.LMC(14630, results, 'push').push(JSProf.LRE(14629, node));
                }
            }
            return JSProf.LRE(14631, results);
        }, 12);
    var useRoot = JSProf.LNF(14665, function (context, query, method) {
            // this function creates a temporary id so we can do rooted qSA queries, this is taken from sizzle
            var oldContext = JSProf.LRE(14633, context), old = JSProf.LMC(14634, context, 'getAttribute').getAttribute("id"), nid = JSProf.LRE(14635, old) || "__dojo__", hasParent = JSProf.LGD(14636, context, 'parentNode').parentNode, relativeHierarchySelector = JSProf.LMC(14638, /^\s*[+~]/, 'test').test(JSProf.LRE(14637, query));
            if (JSProf.LRE(14639, relativeHierarchySelector) && !JSProf.LRE(14640, hasParent)) {
                return JSProf.LNE(14641, [], 10);
            }
            if (!JSProf.LRE(14642, old)) {
                JSProf.LMC(14644, context, 'setAttribute').setAttribute("id", JSProf.LRE(14643, nid));
            } else {
                nid = JSProf.LWR(14646, nid, JSProf.LMC(14645, nid, 'replace').replace(/'/g, "\\$&"));
            }
            if (JSProf.LRE(14647, relativeHierarchySelector) && JSProf.LRE(14648, hasParent)) {
                context = JSProf.LWR(14650, context, JSProf.LGD(14649, context, 'parentNode').parentNode);
            }
            var selectors = JSProf.LMC(14652, query, 'match').match(JSProf.LRE(14651, unionSplit));
            for (var i = 0; JSProf.LRE(14653, i) < JSProf.LGD(14654, selectors, 'length').length; i++) {
                JSProf.LPE(14657, selectors, 'i')[i] = JSProf.LRPE(14657, "[id='" + JSProf.LRE(14655, nid) + "'] " + JSProf.LGE(14656, selectors, 'i')[i]);
            }
            query = JSProf.LWR(14659, query, JSProf.LMC(14658, selectors, 'join').join(","));
            try {
                return JSProf.LMC(14662, method, 'call').call(JSProf.LRE(14660, context), JSProf.LRE(14661, query));
            } finally {
                if (!JSProf.LRE(14663, old)) {
                    JSProf.LMC(14664, oldContext, 'removeAttribute').removeAttribute("id");
                }
            }
        }, 12);
    if (!JSProf.LFC(14666, has, false)("dom-matches-selector")) {
        var jsMatchesSelector = JSProf.LFC(14793, JSProf.LNF(14792, function () {
                JSProf.LFD(14788, attr);
                JSProf.LFD(14789, ancestor);
                JSProf.LFD(14790, parent);
                JSProf.LFD(14791, and);
                // a JS implementation of CSS selector matching, first we start with the various handlers
                var caseFix = JSProf.LGD(14667, testDiv, 'tagName').tagName == "div" ? "toLowerCase" : "toUpperCase";
                var selectorTypes = JSProf.LNE(14686, {
                        "": JSProf.LNF(14673, function (tagName) {
                            tagName = JSProf.LWR(14669, tagName, JSProf.LMC(14668, tagName, JSProf.TMPS.t14cb0e7d18f554132e47aae709ee5f22df0043f4 = caseFix, 1)[JSProf.TMPS.t14cb0e7d18f554132e47aae709ee5f22df0043f4]());
                            return JSProf.LNF(14672, function (node) {
                                return JSProf.LGD(14670, node, 'tagName').tagName == JSProf.LRE(14671, tagName);
                            }, 12);
                        }, 12),
                        ".": JSProf.LNF(14681, function (className) {
                            var classNameSpaced = ' ' + JSProf.LRE(14674, className) + ' ';
                            return JSProf.LNF(14680, function (node) {
                                return JSProf.LMC(14676, node.className, 'indexOf').indexOf(JSProf.LRE(14675, className)) > -1 && JSProf.LMC(14679, ' ' + JSProf.LGD(14677, node, 'className').className + ' ', 'indexOf').indexOf(JSProf.LRE(14678, classNameSpaced)) > -1;
                            }, 12);
                        }, 12),
                        "#": JSProf.LNF(14685, function (id) {
                            return JSProf.LNF(14684, function (node) {
                                return JSProf.LGD(14682, node, 'id').id == JSProf.LRE(14683, id);
                            }, 12);
                        }, 12)
                    }, 11);
                var attrComparators = JSProf.LNE(14710, {
                        "^=": JSProf.LNF(14689, function (attrValue, value) {
                            return JSProf.LMC(14688, attrValue, 'indexOf').indexOf(JSProf.LRE(14687, value)) == 0;
                        }, 12),
                        "*=": JSProf.LNF(14692, function (attrValue, value) {
                            return JSProf.LMC(14691, attrValue, 'indexOf').indexOf(JSProf.LRE(14690, value)) > -1;
                        }, 12),
                        "$=": JSProf.LNF(14697, function (attrValue, value) {
                            return attrValue.substring(JSProf.LGD(14693, attrValue, 'length').length - JSProf.LGD(14694, value, 'length').length, JSProf.LGD(14695, attrValue, 'length').length) == JSProf.LRE(14696, value);
                        }, 12),
                        "~=": JSProf.LNF(14701, function (attrValue, value) {
                            return JSProf.LMC(14700, ' ' + JSProf.LRE(14698, attrValue) + ' ', 'indexOf').indexOf(' ' + JSProf.LRE(14699, value) + ' ') > -1;
                        }, 12),
                        "|=": JSProf.LNF(14705, function (attrValue, value) {
                            return JSProf.LMC(14704, JSProf.LRE(14702, attrValue) + '-', 'indexOf').indexOf(JSProf.LRE(14703, value) + '-') == 0;
                        }, 12),
                        "=": JSProf.LNF(14708, function (attrValue, value) {
                            return JSProf.LRE(14706, attrValue) == JSProf.LRE(14707, value);
                        }, 12),
                        "": JSProf.LNF(14709, function (attrValue, value) {
                            return true;
                        }, 12)
                    }, 11);
                function attr(name, value, type) {
                    var firstChar = value.charAt(0);
                    if (JSProf.LRE(14711, firstChar) == '"' || JSProf.LRE(14712, firstChar) == "'") {
                        // it is quoted, remove the quotes
                        value = JSProf.LWR(14714, value, JSProf.LMC(14713, value, 'slice').slice(1, -1));
                    }
                    value = JSProf.LWR(14716, value, JSProf.LMC(14715, value, 'replace').replace(/\\/g, ''));
                    var comparator = JSProf.LGE(14718, attrComparators, JSProf.TMPS.t7c862b73af5e903fea698b66a846529931aa4e70 = JSProf.LRE(14717, type) || "")[JSProf.TMPS.t7c862b73af5e903fea698b66a846529931aa4e70];
                    return JSProf.LNF(14725, function (node) {
                        var attrValue = JSProf.LMC(14720, node, 'getAttribute').getAttribute(JSProf.LRE(14719, name));
                        return JSProf.LRE(14721, attrValue) && JSProf.LFC(14724, comparator, false)(JSProf.LRE(14722, attrValue), JSProf.LRE(14723, value));
                    }, 12);
                }
                function ancestor(matcher) {
                    return JSProf.LNF(14732, function (node, root) {
                        while ((node = JSProf.LWR(14727, node, JSProf.LGD(14726, node, 'parentNode').parentNode)) != JSProf.LRE(14728, root)) {
                            if (JSProf.LFC(14731, matcher, false)(JSProf.LRE(14729, node), JSProf.LRE(14730, root))) {
                                return true;
                            }
                        }
                    }, 12);
                }
                function parent(matcher) {
                    return JSProf.LNF(14743, function (node, root) {
                        node = JSProf.LWR(14734, node, JSProf.LGD(14733, node, 'parentNode').parentNode);
                        return JSProf.LRE(14735, matcher) ? JSProf.LRE(14736, node) != JSProf.LRE(14737, root) && JSProf.LFC(14740, matcher, false)(JSProf.LRE(14738, node), JSProf.LRE(14739, root)) : JSProf.LRE(14741, node) == JSProf.LRE(14742, root);
                    }, 12);
                }
                var cache = JSProf.LNE(14744, {}, 11);
                function and(matcher, next) {
                    return JSProf.LRE(14745, matcher) ? JSProf.LNF(14751, function (node, root) {
                        return JSProf.LFC(14747, next, false)(JSProf.LRE(14746, node)) && JSProf.LFC(14750, matcher, false)(JSProf.LRE(14748, node), JSProf.LRE(14749, root));
                    }, 12) : JSProf.LRE(14752, next);
                }
                return JSProf.LNF(14787, function (node, selector, root) {
                    // this returns true or false based on if the node matches the selector (optionally within the given root)
                    var matcher = JSProf.LGE(14753, cache, 'selector')[selector];
                    // check to see if we have created a matcher function for the given selector
                    if (!JSProf.LRE(14754, matcher)) {
                        // create a matcher function for the given selector
                        // parse the selectors
                        if (JSProf.LMC(14778, selector, 'replace').replace(/(?:\s*([> ])\s*)|(#|\.)?((?:\\.|[\w-])+)|\[\s*([\w-]+)\s*(.?=)?\s*("(?:\\.|[^"])+"|'(?:\\.|[^'])+'|(?:\\.|[^\]])*)\s*\]/g, JSProf.LNF(14777, function (t, combinator, type, value, attrName, attrType, attrValue) {
                                if (JSProf.LRE(14755, value)) {
                                    matcher = JSProf.LWR(14761, matcher, JSProf.LFC(14760, and, false)(JSProf.LRE(14756, matcher), JSProf.LMC(14759, selectorTypes, JSProf.TMPS.t8156f7bd05b579d774b58a23c633485937f2bb34 = JSProf.LRE(14757, type) || "", 1)[JSProf.TMPS.t8156f7bd05b579d774b58a23c633485937f2bb34](JSProf.LMC(14758, value, 'replace').replace(/\\/g, ''))));
                                } else if (JSProf.LRE(14762, combinator)) {
                                    matcher = JSProf.LWR(14768, matcher, JSProf.LFC(14767, JSProf.LRE(14763, combinator) == " " ? JSProf.LRE(14764, ancestor) : JSProf.LRE(14765, parent), false)(JSProf.LRE(14766, matcher)));
                                } else if (JSProf.LRE(14769, attrName)) {
                                    matcher = JSProf.LWR(14776, matcher, JSProf.LFC(14775, and, false)(JSProf.LRE(14770, matcher), JSProf.LFC(14774, attr, false)(JSProf.LRE(14771, attrName), JSProf.LRE(14772, attrValue), JSProf.LRE(14773, attrType))));
                                }
                                return "";
                            }, 12))) {
                            throw JSProf.LNE(14780, new (JSProf.LFC(14779, Error, true))("Syntax error in query"), 'Error');
                        }
                        if (!JSProf.LRE(14781, matcher)) {
                            return true;
                        }
                        JSProf.LPE(14783, cache, 'selector')[selector] = JSProf.LRPE(14783, JSProf.LRE(14782, matcher));
                    }
                    // now run the matcher function on the node
                    return JSProf.LFC(14786, matcher, false)(JSProf.LRE(14784, node), JSProf.LRE(14785, root));
                }, 12);
            }, 12), false)();
    }
    if (!JSProf.LFC(14794, has, false)("dom-qsa")) {
        var combine = JSProf.LNF(14820, function (selector, root) {
                // combined queries
                var selectors = JSProf.LMC(14796, selector, 'match').match(JSProf.LRE(14795, unionSplit));
                var indexed = JSProf.LNE(14797, [], 10);
                // add all results and keep unique ones, this only runs in IE, so we take advantage 
                // of known IE features, particularly sourceIndex which is unique and allows us to 
                // order the results 
                for (var i = 0; JSProf.LRE(14798, i) < JSProf.LGD(14799, selectors, 'length').length; i++) {
                    selector = JSProf.LWR(14803, selector, JSProf.LNE(14802, new (JSProf.LFC(14801, String, true))(JSProf.LMC(14800, selectors[i], 'replace').replace(/\s*$/, '')), 'String'));
                    JSProf.LPD(14805, selector, 'indexOf').indexOf = JSProf.LRSP(14805, JSProf.LRU(14804, typeof escape === 'undefined' ? undefined : escape));
                    // keep it from recursively entering combine
                    var results = JSProf.LFC(14808, liteEngine, false)(JSProf.LRE(14806, selector), JSProf.LRE(14807, root));
                    for (var j = 0, l = JSProf.LGD(14809, results, 'length').length; JSProf.LRE(14810, j) < JSProf.LRE(14811, l); j++) {
                        var node = JSProf.LGE(14812, results, 'j')[j];
                        JSProf.LPE(14814, indexed, JSProf.TMPS.t6917881844a2834bf7836c3a9ac2f5a0ba3e0aa1 = node.sourceIndex)[JSProf.TMPS.t6917881844a2834bf7836c3a9ac2f5a0ba3e0aa1] = JSProf.LRPE(14814, JSProf.LRE(14813, node));
                    }
                }
                // now convert from a sparse array to a dense array
                var totalResults = JSProf.LNE(14815, [], 10);
                for (i in JSProf.LRE(14816, indexed)) {
                    JSProf.LMC(14818, totalResults, 'push').push(JSProf.LGE(14817, indexed, 'i')[i]);
                }
                return JSProf.LRE(14819, totalResults);
            }, 12);
    }
    JSProf.LPD(14836, liteEngine, 'match').match = JSProf.LRSP(14836, JSProf.LRE(14821, matchesSelector) ? JSProf.LNF(14834, function (node, selector, root) {
        if (JSProf.LRE(14822, root) && JSProf.LGD(14823, root, 'nodeType').nodeType != 9) {
            // doesn't support three args, use rooted id trick
            return JSProf.LFC(14830, useRoot, false)(JSProf.LRE(14824, root), JSProf.LRE(14825, selector), JSProf.LNF(14829, function (query) {
                return JSProf.LMC(14828, matchesSelector, 'call').call(JSProf.LRE(14826, node), JSProf.LRE(14827, query));
            }, 12));
        }
        // we have a native matchesSelector, use that
        return JSProf.LMC(14833, matchesSelector, 'call').call(JSProf.LRE(14831, node), JSProf.LRE(14832, selector));
    }, 12) : JSProf.LRE(14835, jsMatchesSelector));
    // otherwise use the JS matches impl
    return JSProf.LRE(14837, liteEngine);
}, 12));