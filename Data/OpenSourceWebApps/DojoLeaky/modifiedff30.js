JSProf.LFC(14744, define, false)(JSProf.LNE(14447, [
    "../has",
    "../_base/kernel"
], 10), JSProf.LNF(14743, function (has, dojo) {
    "use strict";
    var testDiv = JSProf.LMC(14448, document, 'createElement').createElement("div");
    var matchesSelector = JSProf.LGD(14449, testDiv, 'matches').matches || JSProf.LGD(14450, testDiv, 'webkitMatchesSelector').webkitMatchesSelector || JSProf.LGD(14451, testDiv, 'mozMatchesSelector').mozMatchesSelector || JSProf.LGD(14452, testDiv, 'msMatchesSelector').msMatchesSelector || JSProf.LGD(14453, testDiv, 'oMatchesSelector').oMatchesSelector;
    var querySelectorAll = JSProf.LGD(14454, testDiv, 'querySelectorAll').querySelectorAll;
    var unionSplit = /([^\s,](?:"(?:\\.|[^"])+"|'(?:\\.|[^'])+'|[^,])*)/g;
    JSProf.LMC(14456, has, 'add').add("dom-matches-selector", !!JSProf.LRE(14455, matchesSelector));
    JSProf.LMC(14458, has, 'add').add("dom-qsa", !!JSProf.LRE(14457, querySelectorAll));
    // this is a simple query engine. It has handles basic selectors, and for simple
    // common selectors is extremely fast
    var liteEngine = JSProf.LNF(14537, function (selector, root) {
            // summary:
            //		A small lightweight query selector engine that implements CSS2.1 selectors
            //		minus pseudo-classes and the sibling combinator, plus CSS3 attribute selectors
            if (JSProf.LRE(14459, combine) && JSProf.LMC(14460, selector, 'indexOf').indexOf(',') > -1) {
                return JSProf.LFC(14463, combine, false)(JSProf.LRE(14461, selector), JSProf.LRE(14462, root));
            }
            // use the root's ownerDocument if provided, otherwise try to use dojo.doc. Note 
            // that we don't use dojo/_base/window's doc to reduce dependencies, and 
            // fallback to plain document if dojo.doc hasn't been defined (by dojo/_base/window).
            // presumably we will have a better way to do this in 2.0 
            var doc = JSProf.LRE(14464, root) ? JSProf.LGD(14465, root, 'ownerDocument').ownerDocument || JSProf.LRE(14466, root) : JSProf.LGD(14467, dojo, 'doc').doc || JSProf.LRU(14468, typeof document === 'undefined' ? undefined : document), match = (JSProf.LRE(14469, querySelectorAll) ? /^([\w]*)#([\w\-]+$)|^(\.)([\w\-\*]+$)|^(\w+$)/ : /^([\w]*)#([\w\-]+)(?:\s+(.*))?$|(?:^|(>|.+\s+))([\w\-\*]+)(\S*$)/).exec(JSProf.LRE(14470, selector));
            root = JSProf.LWR(14473, root, JSProf.LRE(14471, root) || JSProf.LRE(14472, doc));
            if (JSProf.LRE(14474, match)) {
                // fast path regardless of whether or not querySelectorAll exists
                if (JSProf.LGE(14475, match, 2)[2]) {
                    // an #id
                    // use dojo.byId if available as it fixes the id retrieval in IE, note that we can't use the dojo namespace in 2.0, but if there is a conditional module use, we will use that
                    var found = JSProf.LGD(14476, dojo, 'byId').byId ? JSProf.LMC(14479, dojo, 'byId').byId(JSProf.LGE(14477, match, 2)[2], JSProf.LRE(14478, doc)) : JSProf.LMC(14481, doc, 'getElementById').getElementById(JSProf.LGE(14480, match, 2)[2]);
                    if (!JSProf.LRE(14482, found) || JSProf.LGE(14483, match, 1)[1] && JSProf.LGE(14484, match, 1)[1] != found.tagName.toLowerCase()) {
                        // if there is a tag qualifer and it doesn't match, no matches
                        return JSProf.LNE(14485, [], 10);
                    }
                    if (JSProf.LRE(14486, root) != JSProf.LRE(14487, doc)) {
                        // there is a root element, make sure we are a child of it
                        var parent = JSProf.LRE(14488, found);
                        while (JSProf.LRE(14489, parent) != JSProf.LRE(14490, root)) {
                            parent = JSProf.LWR(14492, parent, JSProf.LGD(14491, parent, 'parentNode').parentNode);
                            if (!JSProf.LRE(14493, parent)) {
                                return JSProf.LNE(14494, [], 10);
                            }
                        }
                    }
                    return JSProf.LGE(14495, match, 3)[3] ? JSProf.LFC(14498, liteEngine, false)(JSProf.LGE(14496, match, 3)[3], JSProf.LRE(14497, found)) : JSProf.LNE(14500, [JSProf.LRE(14499, found)], 10);
                }
                if (JSProf.LGE(14501, match, 3)[3] && JSProf.LGD(14502, root, 'getElementsByClassName').getElementsByClassName) {
                    // a .class
                    return JSProf.LMC(14504, root, 'getElementsByClassName').getElementsByClassName(JSProf.LGE(14503, match, 4)[4]);
                }
                var found;
                if (JSProf.LGE(14505, match, 5)[5]) {
                    // a tag
                    found = JSProf.LWR(14507, found, root.getElementsByTagName(JSProf.LGE(14506, match, 5)[5]));
                    if (JSProf.LGE(14508, match, 4)[4] || JSProf.LGE(14509, match, 6)[6]) {
                        selector = JSProf.LWR(14512, selector, (JSProf.LGE(14510, match, 4)[4] || "") + JSProf.LGE(14511, match, 6)[6]);
                    } else {
                        // that was the entirety of the query, return results
                        return JSProf.LRE(14513, found);
                    }
                }
            }
            if (JSProf.LRE(14514, querySelectorAll)) {
                // qSA works strangely on Element-rooted queries
                // We can work around this by specifying an extra ID on the root
                // and working up from there (Thanks to Andrew Dupont for the technique)
                // IE 8 doesn't work on object elements
                if (JSProf.LGD(14515, root, 'nodeType').nodeType === 1 && root.nodeName.toLowerCase() !== "object") {
                    return JSProf.LFC(14519, useRoot, false)(JSProf.LRE(14516, root), JSProf.LRE(14517, selector), JSProf.LGD(14518, root, 'querySelectorAll').querySelectorAll);
                } else {
                    // we can use the native qSA
                    return JSProf.LMC(14521, root, 'querySelectorAll').querySelectorAll(JSProf.LRE(14520, selector));
                }
            } else if (!JSProf.LRE(14522, found)) {
                // search all children and then filter
                found = JSProf.LWR(14523, found, root.getElementsByTagName("*"));
            }
            // now we filter the nodes that were found using the matchesSelector
            var results = JSProf.LNE(14524, [], 10);
            for (var i = 0, l = JSProf.LGD(14525, found, 'length').length; JSProf.LRE(14526, i) < JSProf.LRE(14527, l); i++) {
                var node = JSProf.LGE(14528, found, 'i')[i];
                if (JSProf.LGD(14529, node, 'nodeType').nodeType == 1 && JSProf.LFC(14533, jsMatchesSelector, false)(JSProf.LRE(14530, node), JSProf.LRE(14531, selector), JSProf.LRE(14532, root))) {
                    // keep the nodes that match the selector
                    JSProf.LMC(14535, results, 'push').push(JSProf.LRE(14534, node));
                }
            }
            return JSProf.LRE(14536, results);
        }, 12);
    var useRoot = JSProf.LNF(14570, function (context, query, method) {
            // this function creates a temporary id so we can do rooted qSA queries, this is taken from sizzle
            var oldContext = JSProf.LRE(14538, context), old = JSProf.LMC(14539, context, 'getAttribute').getAttribute("id"), nid = JSProf.LRE(14540, old) || "__dojo__", hasParent = JSProf.LGD(14541, context, 'parentNode').parentNode, relativeHierarchySelector = JSProf.LMC(14543, /^\s*[+~]/, 'test').test(JSProf.LRE(14542, query));
            if (JSProf.LRE(14544, relativeHierarchySelector) && !JSProf.LRE(14545, hasParent)) {
                return JSProf.LNE(14546, [], 10);
            }
            if (!JSProf.LRE(14547, old)) {
                JSProf.LMC(14549, context, 'setAttribute').setAttribute("id", JSProf.LRE(14548, nid));
            } else {
                nid = JSProf.LWR(14551, nid, JSProf.LMC(14550, nid, 'replace').replace(/'/g, "\\$&"));
            }
            if (JSProf.LRE(14552, relativeHierarchySelector) && JSProf.LRE(14553, hasParent)) {
                context = JSProf.LWR(14555, context, JSProf.LGD(14554, context, 'parentNode').parentNode);
            }
            var selectors = JSProf.LMC(14557, query, 'match').match(JSProf.LRE(14556, unionSplit));
            for (var i = 0; JSProf.LRE(14558, i) < JSProf.LGD(14559, selectors, 'length').length; i++) {
                JSProf.LPE(14562, selectors, 'i')[i] = JSProf.LRPE(14562, "[id='" + JSProf.LRE(14560, nid) + "'] " + JSProf.LGE(14561, selectors, 'i')[i]);
            }
            query = JSProf.LWR(14564, query, JSProf.LMC(14563, selectors, 'join').join(","));
            try {
                return JSProf.LMC(14567, method, 'call').call(JSProf.LRE(14565, context), JSProf.LRE(14566, query));
            } finally {
                if (!JSProf.LRE(14568, old)) {
                    JSProf.LMC(14569, oldContext, 'removeAttribute').removeAttribute("id");
                }
            }
        }, 12);
    if (!JSProf.LFC(14571, has, false)("dom-matches-selector")) {
        var jsMatchesSelector = JSProf.LFC(14698, JSProf.LNF(14697, function () {
                JSProf.LFD(14693, attr);
                JSProf.LFD(14694, ancestor);
                JSProf.LFD(14695, parent);
                JSProf.LFD(14696, and);
                // a JS implementation of CSS selector matching, first we start with the various handlers
                var caseFix = JSProf.LGD(14572, testDiv, 'tagName').tagName == "div" ? "toLowerCase" : "toUpperCase";
                var selectorTypes = JSProf.LNE(14591, {
                        "": JSProf.LNF(14578, function (tagName) {
                            tagName = JSProf.LWR(14574, tagName, JSProf.LMC(14573, tagName, JSProf.TMPS.t14cb0e7d18f554132e47aae709ee5f22df0043f4 = caseFix, 1)[JSProf.TMPS.t14cb0e7d18f554132e47aae709ee5f22df0043f4]());
                            return JSProf.LNF(14577, function (node) {
                                return JSProf.LGD(14575, node, 'tagName').tagName == JSProf.LRE(14576, tagName);
                            }, 12);
                        }, 12),
                        ".": JSProf.LNF(14586, function (className) {
                            var classNameSpaced = ' ' + JSProf.LRE(14579, className) + ' ';
                            return JSProf.LNF(14585, function (node) {
                                return JSProf.LMC(14581, node.className, 'indexOf').indexOf(JSProf.LRE(14580, className)) > -1 && JSProf.LMC(14584, ' ' + JSProf.LGD(14582, node, 'className').className + ' ', 'indexOf').indexOf(JSProf.LRE(14583, classNameSpaced)) > -1;
                            }, 12);
                        }, 12),
                        "#": JSProf.LNF(14590, function (id) {
                            return JSProf.LNF(14589, function (node) {
                                return JSProf.LGD(14587, node, 'id').id == JSProf.LRE(14588, id);
                            }, 12);
                        }, 12)
                    }, 11);
                var attrComparators = JSProf.LNE(14615, {
                        "^=": JSProf.LNF(14594, function (attrValue, value) {
                            return JSProf.LMC(14593, attrValue, 'indexOf').indexOf(JSProf.LRE(14592, value)) == 0;
                        }, 12),
                        "*=": JSProf.LNF(14597, function (attrValue, value) {
                            return JSProf.LMC(14596, attrValue, 'indexOf').indexOf(JSProf.LRE(14595, value)) > -1;
                        }, 12),
                        "$=": JSProf.LNF(14602, function (attrValue, value) {
                            return attrValue.substring(JSProf.LGD(14598, attrValue, 'length').length - JSProf.LGD(14599, value, 'length').length, JSProf.LGD(14600, attrValue, 'length').length) == JSProf.LRE(14601, value);
                        }, 12),
                        "~=": JSProf.LNF(14606, function (attrValue, value) {
                            return JSProf.LMC(14605, ' ' + JSProf.LRE(14603, attrValue) + ' ', 'indexOf').indexOf(' ' + JSProf.LRE(14604, value) + ' ') > -1;
                        }, 12),
                        "|=": JSProf.LNF(14610, function (attrValue, value) {
                            return JSProf.LMC(14609, JSProf.LRE(14607, attrValue) + '-', 'indexOf').indexOf(JSProf.LRE(14608, value) + '-') == 0;
                        }, 12),
                        "=": JSProf.LNF(14613, function (attrValue, value) {
                            return JSProf.LRE(14611, attrValue) == JSProf.LRE(14612, value);
                        }, 12),
                        "": JSProf.LNF(14614, function (attrValue, value) {
                            return true;
                        }, 12)
                    }, 11);
                function attr(name, value, type) {
                    var firstChar = value.charAt(0);
                    if (JSProf.LRE(14616, firstChar) == '"' || JSProf.LRE(14617, firstChar) == "'") {
                        // it is quoted, remove the quotes
                        value = JSProf.LWR(14619, value, JSProf.LMC(14618, value, 'slice').slice(1, -1));
                    }
                    value = JSProf.LWR(14621, value, JSProf.LMC(14620, value, 'replace').replace(/\\/g, ''));
                    var comparator = JSProf.LGE(14623, attrComparators, JSProf.TMPS.t7c862b73af5e903fea698b66a846529931aa4e70 = JSProf.LRE(14622, type) || "")[JSProf.TMPS.t7c862b73af5e903fea698b66a846529931aa4e70];
                    return JSProf.LNF(14630, function (node) {
                        var attrValue = JSProf.LMC(14625, node, 'getAttribute').getAttribute(JSProf.LRE(14624, name));
                        return JSProf.LRE(14626, attrValue) && JSProf.LFC(14629, comparator, false)(JSProf.LRE(14627, attrValue), JSProf.LRE(14628, value));
                    }, 12);
                }
                function ancestor(matcher) {
                    return JSProf.LNF(14637, function (node, root) {
                        while ((node = JSProf.LWR(14632, node, JSProf.LGD(14631, node, 'parentNode').parentNode)) != JSProf.LRE(14633, root)) {
                            if (JSProf.LFC(14636, matcher, false)(JSProf.LRE(14634, node), JSProf.LRE(14635, root))) {
                                return true;
                            }
                        }
                    }, 12);
                }
                function parent(matcher) {
                    return JSProf.LNF(14648, function (node, root) {
                        node = JSProf.LWR(14639, node, JSProf.LGD(14638, node, 'parentNode').parentNode);
                        return JSProf.LRE(14640, matcher) ? JSProf.LRE(14641, node) != JSProf.LRE(14642, root) && JSProf.LFC(14645, matcher, false)(JSProf.LRE(14643, node), JSProf.LRE(14644, root)) : JSProf.LRE(14646, node) == JSProf.LRE(14647, root);
                    }, 12);
                }
                var cache = JSProf.LNE(14649, {}, 11);
                function and(matcher, next) {
                    return JSProf.LRE(14650, matcher) ? JSProf.LNF(14656, function (node, root) {
                        return JSProf.LFC(14652, next, false)(JSProf.LRE(14651, node)) && JSProf.LFC(14655, matcher, false)(JSProf.LRE(14653, node), JSProf.LRE(14654, root));
                    }, 12) : JSProf.LRE(14657, next);
                }
                return JSProf.LNF(14692, function (node, selector, root) {
                    // this returns true or false based on if the node matches the selector (optionally within the given root)
                    var matcher = JSProf.LGE(14658, cache, 'selector')[selector];
                    // check to see if we have created a matcher function for the given selector
                    if (!JSProf.LRE(14659, matcher)) {
                        // create a matcher function for the given selector
                        // parse the selectors
                        if (JSProf.LMC(14683, selector, 'replace').replace(/(?:\s*([> ])\s*)|(#|\.)?((?:\\.|[\w-])+)|\[\s*([\w-]+)\s*(.?=)?\s*("(?:\\.|[^"])+"|'(?:\\.|[^'])+'|(?:\\.|[^\]])*)\s*\]/g, JSProf.LNF(14682, function (t, combinator, type, value, attrName, attrType, attrValue) {
                                if (JSProf.LRE(14660, value)) {
                                    matcher = JSProf.LWR(14666, matcher, JSProf.LFC(14665, and, false)(JSProf.LRE(14661, matcher), JSProf.LMC(14664, selectorTypes, JSProf.TMPS.t8156f7bd05b579d774b58a23c633485937f2bb34 = JSProf.LRE(14662, type) || "", 1)[JSProf.TMPS.t8156f7bd05b579d774b58a23c633485937f2bb34](JSProf.LMC(14663, value, 'replace').replace(/\\/g, ''))));
                                } else if (JSProf.LRE(14667, combinator)) {
                                    matcher = JSProf.LWR(14673, matcher, JSProf.LFC(14672, JSProf.LRE(14668, combinator) == " " ? JSProf.LRE(14669, ancestor) : JSProf.LRE(14670, parent), false)(JSProf.LRE(14671, matcher)));
                                } else if (JSProf.LRE(14674, attrName)) {
                                    matcher = JSProf.LWR(14681, matcher, JSProf.LFC(14680, and, false)(JSProf.LRE(14675, matcher), JSProf.LFC(14679, attr, false)(JSProf.LRE(14676, attrName), JSProf.LRE(14677, attrValue), JSProf.LRE(14678, attrType))));
                                }
                                return "";
                            }, 12))) {
                            throw JSProf.LNE(14685, new (JSProf.LFC(14684, Error, true))("Syntax error in query"), 'Error');
                        }
                        if (!JSProf.LRE(14686, matcher)) {
                            return true;
                        }
                        JSProf.LPE(14688, cache, 'selector')[selector] = JSProf.LRPE(14688, JSProf.LRE(14687, matcher));
                    }
                    // now run the matcher function on the node
                    return JSProf.LFC(14691, matcher, false)(JSProf.LRE(14689, node), JSProf.LRE(14690, root));
                }, 12);
            }, 12), false)();
    }
    if (!JSProf.LFC(14699, has, false)("dom-qsa")) {
        var combine = JSProf.LNF(14725, function (selector, root) {
                // combined queries
                var selectors = JSProf.LMC(14701, selector, 'match').match(JSProf.LRE(14700, unionSplit));
                var indexed = JSProf.LNE(14702, [], 10);
                // add all results and keep unique ones, this only runs in IE, so we take advantage 
                // of known IE features, particularly sourceIndex which is unique and allows us to 
                // order the results 
                for (var i = 0; JSProf.LRE(14703, i) < JSProf.LGD(14704, selectors, 'length').length; i++) {
                    selector = JSProf.LWR(14708, selector, JSProf.LNE(14707, new (JSProf.LFC(14706, String, true))(JSProf.LMC(14705, selectors[i], 'replace').replace(/\s*$/, '')), 'String'));
                    JSProf.LPD(14710, selector, 'indexOf').indexOf = JSProf.LRSP(14710, JSProf.LRU(14709, typeof escape === 'undefined' ? undefined : escape));
                    // keep it from recursively entering combine
                    var results = JSProf.LFC(14713, liteEngine, false)(JSProf.LRE(14711, selector), JSProf.LRE(14712, root));
                    for (var j = 0, l = JSProf.LGD(14714, results, 'length').length; JSProf.LRE(14715, j) < JSProf.LRE(14716, l); j++) {
                        var node = JSProf.LGE(14717, results, 'j')[j];
                        JSProf.LPE(14719, indexed, JSProf.TMPS.t6917881844a2834bf7836c3a9ac2f5a0ba3e0aa1 = node.sourceIndex)[JSProf.TMPS.t6917881844a2834bf7836c3a9ac2f5a0ba3e0aa1] = JSProf.LRPE(14719, JSProf.LRE(14718, node));
                    }
                }
                // now convert from a sparse array to a dense array
                var totalResults = JSProf.LNE(14720, [], 10);
                for (i in JSProf.LRE(14721, indexed)) {
                    JSProf.LMC(14723, totalResults, 'push').push(JSProf.LGE(14722, indexed, 'i')[i]);
                }
                return JSProf.LRE(14724, totalResults);
            }, 12);
    }
    JSProf.LPD(14741, liteEngine, 'match').match = JSProf.LRSP(14741, JSProf.LRE(14726, matchesSelector) ? JSProf.LNF(14739, function (node, selector, root) {
        if (JSProf.LRE(14727, root) && JSProf.LGD(14728, root, 'nodeType').nodeType != 9) {
            // doesn't support three args, use rooted id trick
            return JSProf.LFC(14735, useRoot, false)(JSProf.LRE(14729, root), JSProf.LRE(14730, selector), JSProf.LNF(14734, function (query) {
                return JSProf.LMC(14733, matchesSelector, 'call').call(JSProf.LRE(14731, node), JSProf.LRE(14732, query));
            }, 12));
        }
        // we have a native matchesSelector, use that
        return JSProf.LMC(14738, matchesSelector, 'call').call(JSProf.LRE(14736, node), JSProf.LRE(14737, selector));
    }, 12) : JSProf.LRE(14740, jsMatchesSelector));
    // otherwise use the JS matches impl
    return JSProf.LRE(14742, liteEngine);
}, 12));