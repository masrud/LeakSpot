JSProf.LFC(42129, define, false)(JSProf.LNE(41998, [
    "dojo/_base/array",
    "dojo/dom",
    "dojo/dom-attr",
    "dojo/dom-style",
    "dojo/_base/lang",
    "dojo/sniff",
    "./main"
], 10), JSProf.LNF(42128, function (array, dom, domAttr, domStyle, lang, has, dijit) {
    // module:
    //		dijit/a11y
    var undefined;
    var a11y = JSProf.LNE(42122, {
            _isElementShown: JSProf.LNF(42006, function (elem) {
                var s = JSProf.LMC(42000, domStyle, 'get').get(JSProf.LRE(41999, elem));
                return JSProf.LGD(42001, s, 'visibility').visibility != "hidden" && JSProf.LGD(42002, s, 'visibility').visibility != "collapsed" && JSProf.LGD(42003, s, 'display').display != "none" && JSProf.LMC(42005, domAttr, 'get').get(JSProf.LRE(42004, elem), "type") != "hidden";
            }, 12),
            hasDefaultTabStop: JSProf.LNF(42021, function (elem) {
                // summary:
                //		Tests if element is tab-navigable even without an explicit tabIndex setting
                // No explicit tabIndex setting, need to investigate node type
                switch (elem.nodeName.toLowerCase()) {
                case "a":
                    // An <a> w/out a tabindex is only navigable if it has an href
                    return JSProf.LMC(42008, domAttr, 'has').has(JSProf.LRE(42007, elem), "href");
                case "area":
                case "button":
                case "input":
                case "object":
                case "select":
                case "textarea":
                    // These are navigable by default
                    return true;
                case "iframe":
                    // If it's an editor <iframe> then it's tab navigable.
                    var body;
                    try {
                        // non-IE
                        var contentDocument = JSProf.LGD(42009, elem, 'contentDocument').contentDocument;
                        if ("designMode" in JSProf.LRE(42010, contentDocument) && JSProf.LGD(42011, contentDocument, 'designMode').designMode == "on") {
                            return true;
                        }
                        body = JSProf.LWR(42013, body, JSProf.LGD(42012, contentDocument, 'body').body);
                    } catch (e1) {
                        // contentWindow.document isn't accessible within IE7/8
                        // if the iframe.src points to a foreign url and this
                        // page contains an element, that could get focus
                        try {
                            body = JSProf.LWR(42015, body, JSProf.LGD(42014, elem.contentWindow.document, 'body').body);
                        } catch (e2) {
                            return false;
                        }
                    }
                    return JSProf.LRE(42016, body) && (JSProf.LGD(42017, body, 'contentEditable').contentEditable == 'true' || JSProf.LGD(42018, body, 'firstChild').firstChild && JSProf.LGD(42019, body.firstChild, 'contentEditable').contentEditable == 'true');
                default:
                    return JSProf.LGD(42020, elem, 'contentEditable').contentEditable == 'true';
                }
            }, 12),
            effectiveTabIndex: JSProf.LNF(42030, function (elem) {
                // summary:
                //		Returns effective tabIndex of an element, either a number, or undefined if element isn't focusable.
                if (JSProf.LMC(42023, domAttr, 'get').get(JSProf.LRE(42022, elem), "disabled")) {
                    return undefined;
                } else if (JSProf.LMC(42025, domAttr, 'has').has(JSProf.LRE(42024, elem), "tabIndex")) {
                    // Explicit tab index setting
                    return +JSProf.LMC(42027, domAttr, 'get').get(JSProf.LRE(42026, elem), "tabIndex");    // + to convert string --> number
                } else {
                    // No explicit tabIndex setting, so depends on node type
                    return JSProf.LMC(42029, a11y, 'hasDefaultTabStop').hasDefaultTabStop(JSProf.LRE(42028, elem)) ? 0 : undefined;
                }
            }, 12),
            isTabNavigable: JSProf.LNF(42033, function (elem) {
                // summary:
                //		Tests if an element is tab-navigable
                return JSProf.LMC(42032, a11y, 'effectiveTabIndex').effectiveTabIndex(JSProf.LRE(42031, elem)) >= 0;
            }, 12),
            isFocusable: JSProf.LNF(42036, function (elem) {
                // summary:
                //		Tests if an element is focusable by tabbing to it, or clicking it with the mouse.
                return JSProf.LMC(42035, a11y, 'effectiveTabIndex').effectiveTabIndex(JSProf.LRE(42034, elem)) >= -1;
            }, 12),
            _getTabNavigable: JSProf.LNF(42105, function (root) {
                JSProf.LFD(42103, radioName);
                JSProf.LFD(42104, rs);
                // summary:
                //		Finds descendants of the specified root node.
                // description:
                //		Finds the following descendants of the specified root node:
                //
                //		- the first tab-navigable element in document order
                //		  without a tabIndex or with tabIndex="0"
                //		- the last tab-navigable element in document order
                //		  without a tabIndex or with tabIndex="0"
                //		- the first element in document order with the lowest
                //		  positive tabIndex value
                //		- the last element in document order with the highest
                //		  positive tabIndex value
                var first, last, lowest, lowestTabindex, highest, highestTabindex, radioSelected = JSProf.LNE(42037, {}, 11);
                function radioName(node) {
                    // If this element is part of a radio button group, return the name for that group.
                    return JSProf.LRE(42038, node) && node.tagName.toLowerCase() == "input" && JSProf.LGD(42039, node, 'type').type && node.type.toLowerCase() == "radio" && JSProf.LGD(42040, node, 'name').name && node.name.toLowerCase();
                }
                var shown = JSProf.LGD(42041, a11y, '_isElementShown')._isElementShown, effectiveTabIndex = JSProf.LGD(42042, a11y, 'effectiveTabIndex').effectiveTabIndex;
                var walkTree = JSProf.LNF(42085, function (parent) {
                        for (var child = JSProf.LGD(42043, parent, 'firstChild').firstChild; JSProf.LRE(42044, child); child = JSProf.LWR(42046, child, JSProf.LGD(42045, child, 'nextSibling').nextSibling)) {
                            // Skip text elements, hidden elements, and also non-HTML elements (those in custom namespaces) in IE,
                            // since show() invokes getAttribute("type"), which crash on VML nodes in IE.
                            if (JSProf.LGD(42047, child, 'nodeType').nodeType != 1 || JSProf.LFC(42048, has, false)("ie") <= 9 && JSProf.LGD(42049, child, 'scopeName').scopeName !== "HTML" || !JSProf.LFC(42051, shown, false)(JSProf.LRE(42050, child))) {
                                continue;
                            }
                            var tabindex = JSProf.LFC(42053, effectiveTabIndex, false)(JSProf.LRE(42052, child));
                            if (JSProf.LRE(42054, tabindex) >= 0) {
                                if (JSProf.LRE(42055, tabindex) == 0) {
                                    if (!JSProf.LRE(42056, first)) {
                                        first = JSProf.LWR(42058, first, JSProf.LRE(42057, child));
                                    }
                                    last = JSProf.LWR(42060, last, JSProf.LRE(42059, child));
                                } else if (JSProf.LRE(42061, tabindex) > 0) {
                                    if (!JSProf.LRE(42062, lowest) || JSProf.LRE(42063, tabindex) < JSProf.LRE(42064, lowestTabindex)) {
                                        lowestTabindex = JSProf.LWR(42066, lowestTabindex, JSProf.LRE(42065, tabindex));
                                        lowest = JSProf.LWR(42068, lowest, JSProf.LRE(42067, child));
                                    }
                                    if (!JSProf.LRE(42069, highest) || JSProf.LRE(42070, tabindex) >= JSProf.LRE(42071, highestTabindex)) {
                                        highestTabindex = JSProf.LWR(42073, highestTabindex, JSProf.LRE(42072, tabindex));
                                        highest = JSProf.LWR(42075, highest, JSProf.LRE(42074, child));
                                    }
                                }
                                var rn = JSProf.LFC(42077, radioName, false)(JSProf.LRE(42076, child));
                                if (JSProf.LMC(42079, domAttr, 'get').get(JSProf.LRE(42078, child), "checked") && JSProf.LRE(42080, rn)) {
                                    JSProf.LPE(42082, radioSelected, 'rn')[rn] = JSProf.LRPE(42082, JSProf.LRE(42081, child));
                                }
                            }
                            if (child.nodeName.toUpperCase() != 'SELECT') {
                                JSProf.LFC(42084, walkTree, false)(JSProf.LRE(42083, child));
                            }
                        }
                    }, 12);
                if (JSProf.LFC(42087, shown, false)(JSProf.LRE(42086, root))) {
                    JSProf.LFC(42089, walkTree, false)(JSProf.LRE(42088, root));
                }
                function rs(node) {
                    // substitute checked radio button for unchecked one, if there is a checked one with the same name.
                    return JSProf.LGE(42092, radioSelected, JSProf.TMPS.tfeaf29ebb637c7edec652481e92b36e1dadc4397 = JSProf.LFC(42091, radioName, false)(JSProf.LRE(42090, node)))[JSProf.TMPS.tfeaf29ebb637c7edec652481e92b36e1dadc4397] || JSProf.LRE(42093, node);
                }
                return JSProf.LNE(42102, {
                    first: JSProf.LFC(42095, rs, false)(JSProf.LRE(42094, first)),
                    last: JSProf.LFC(42097, rs, false)(JSProf.LRE(42096, last)),
                    lowest: JSProf.LFC(42099, rs, false)(JSProf.LRE(42098, lowest)),
                    highest: JSProf.LFC(42101, rs, false)(JSProf.LRE(42100, highest))
                }, 11);
            }, 12),
            getFirstInTabbingOrder: JSProf.LNF(42113, function (root, doc) {
                // summary:
                //		Finds the descendant of the specified root node
                //		that is first in the tabbing order
                var elems = JSProf.LMC(42109, a11y, '_getTabNavigable')._getTabNavigable(JSProf.LMC(42108, dom, 'byId').byId(JSProf.LRE(42106, root), JSProf.LRE(42107, doc)));
                return JSProf.LGD(42110, elems, 'lowest').lowest ? JSProf.LGD(42111, elems, 'lowest').lowest : JSProf.LGD(42112, elems, 'first').first;    // DomNode
            }, 12),
            getLastInTabbingOrder: JSProf.LNF(42121, function (root, doc) {
                // summary:
                //		Finds the descendant of the specified root node
                //		that is last in the tabbing order
                var elems = JSProf.LMC(42117, a11y, '_getTabNavigable')._getTabNavigable(JSProf.LMC(42116, dom, 'byId').byId(JSProf.LRE(42114, root), JSProf.LRE(42115, doc)));
                return JSProf.LGD(42118, elems, 'last').last ? JSProf.LGD(42119, elems, 'last').last : JSProf.LGD(42120, elems, 'highest').highest;    // DomNode
            }, 12)
        }, 11);
    JSProf.LFC(42123, has, false)("extend-dojo") && JSProf.LMC(42126, lang, 'mixin').mixin(JSProf.LRE(42124, dijit), JSProf.LRE(42125, a11y));
    return JSProf.LRE(42127, a11y);
}, 12));