JSProf.LFC(41914, define, false)(JSProf.LNE(41783, [
    "dojo/_base/array",
    "dojo/dom",
    "dojo/dom-attr",
    "dojo/dom-style",
    "dojo/_base/lang",
    "dojo/sniff",
    "./main"
], 10), JSProf.LNF(41913, function (array, dom, domAttr, domStyle, lang, has, dijit) {
    // module:
    //		dijit/a11y
    var undefined;
    var a11y = JSProf.LNE(41907, {
            _isElementShown: JSProf.LNF(41791, function (elem) {
                var s = JSProf.LMC(41785, domStyle, 'get').get(JSProf.LRE(41784, elem));
                return JSProf.LGD(41786, s, 'visibility').visibility != "hidden" && JSProf.LGD(41787, s, 'visibility').visibility != "collapsed" && JSProf.LGD(41788, s, 'display').display != "none" && JSProf.LMC(41790, domAttr, 'get').get(JSProf.LRE(41789, elem), "type") != "hidden";
            }, 12),
            hasDefaultTabStop: JSProf.LNF(41806, function (elem) {
                // summary:
                //		Tests if element is tab-navigable even without an explicit tabIndex setting
                // No explicit tabIndex setting, need to investigate node type
                switch (elem.nodeName.toLowerCase()) {
                case "a":
                    // An <a> w/out a tabindex is only navigable if it has an href
                    return JSProf.LMC(41793, domAttr, 'has').has(JSProf.LRE(41792, elem), "href");
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
                        var contentDocument = JSProf.LGD(41794, elem, 'contentDocument').contentDocument;
                        if ("designMode" in JSProf.LRE(41795, contentDocument) && JSProf.LGD(41796, contentDocument, 'designMode').designMode == "on") {
                            return true;
                        }
                        body = JSProf.LWR(41798, body, JSProf.LGD(41797, contentDocument, 'body').body);
                    } catch (e1) {
                        // contentWindow.document isn't accessible within IE7/8
                        // if the iframe.src points to a foreign url and this
                        // page contains an element, that could get focus
                        try {
                            body = JSProf.LWR(41800, body, JSProf.LGD(41799, elem.contentWindow.document, 'body').body);
                        } catch (e2) {
                            return false;
                        }
                    }
                    return JSProf.LRE(41801, body) && (JSProf.LGD(41802, body, 'contentEditable').contentEditable == 'true' || JSProf.LGD(41803, body, 'firstChild').firstChild && JSProf.LGD(41804, body.firstChild, 'contentEditable').contentEditable == 'true');
                default:
                    return JSProf.LGD(41805, elem, 'contentEditable').contentEditable == 'true';
                }
            }, 12),
            effectiveTabIndex: JSProf.LNF(41815, function (elem) {
                // summary:
                //		Returns effective tabIndex of an element, either a number, or undefined if element isn't focusable.
                if (JSProf.LMC(41808, domAttr, 'get').get(JSProf.LRE(41807, elem), "disabled")) {
                    return undefined;
                } else if (JSProf.LMC(41810, domAttr, 'has').has(JSProf.LRE(41809, elem), "tabIndex")) {
                    // Explicit tab index setting
                    return +JSProf.LMC(41812, domAttr, 'get').get(JSProf.LRE(41811, elem), "tabIndex");    // + to convert string --> number
                } else {
                    // No explicit tabIndex setting, so depends on node type
                    return JSProf.LMC(41814, a11y, 'hasDefaultTabStop').hasDefaultTabStop(JSProf.LRE(41813, elem)) ? 0 : undefined;
                }
            }, 12),
            isTabNavigable: JSProf.LNF(41818, function (elem) {
                // summary:
                //		Tests if an element is tab-navigable
                return JSProf.LMC(41817, a11y, 'effectiveTabIndex').effectiveTabIndex(JSProf.LRE(41816, elem)) >= 0;
            }, 12),
            isFocusable: JSProf.LNF(41821, function (elem) {
                // summary:
                //		Tests if an element is focusable by tabbing to it, or clicking it with the mouse.
                return JSProf.LMC(41820, a11y, 'effectiveTabIndex').effectiveTabIndex(JSProf.LRE(41819, elem)) >= -1;
            }, 12),
            _getTabNavigable: JSProf.LNF(41890, function (root) {
                JSProf.LFD(41888, radioName);
                JSProf.LFD(41889, rs);
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
                var first, last, lowest, lowestTabindex, highest, highestTabindex, radioSelected = JSProf.LNE(41822, {}, 11);
                function radioName(node) {
                    // If this element is part of a radio button group, return the name for that group.
                    return JSProf.LRE(41823, node) && node.tagName.toLowerCase() == "input" && JSProf.LGD(41824, node, 'type').type && node.type.toLowerCase() == "radio" && JSProf.LGD(41825, node, 'name').name && node.name.toLowerCase();
                }
                var shown = JSProf.LGD(41826, a11y, '_isElementShown')._isElementShown, effectiveTabIndex = JSProf.LGD(41827, a11y, 'effectiveTabIndex').effectiveTabIndex;
                var walkTree = JSProf.LNF(41870, function (parent) {
                        for (var child = JSProf.LGD(41828, parent, 'firstChild').firstChild; JSProf.LRE(41829, child); child = JSProf.LWR(41831, child, JSProf.LGD(41830, child, 'nextSibling').nextSibling)) {
                            // Skip text elements, hidden elements, and also non-HTML elements (those in custom namespaces) in IE,
                            // since show() invokes getAttribute("type"), which crash on VML nodes in IE.
                            if (JSProf.LGD(41832, child, 'nodeType').nodeType != 1 || JSProf.LFC(41833, has, false)("ie") <= 9 && JSProf.LGD(41834, child, 'scopeName').scopeName !== "HTML" || !JSProf.LFC(41836, shown, false)(JSProf.LRE(41835, child))) {
                                continue;
                            }
                            var tabindex = JSProf.LFC(41838, effectiveTabIndex, false)(JSProf.LRE(41837, child));
                            if (JSProf.LRE(41839, tabindex) >= 0) {
                                if (JSProf.LRE(41840, tabindex) == 0) {
                                    if (!JSProf.LRE(41841, first)) {
                                        first = JSProf.LWR(41843, first, JSProf.LRE(41842, child));
                                    }
                                    last = JSProf.LWR(41845, last, JSProf.LRE(41844, child));
                                } else if (JSProf.LRE(41846, tabindex) > 0) {
                                    if (!JSProf.LRE(41847, lowest) || JSProf.LRE(41848, tabindex) < JSProf.LRE(41849, lowestTabindex)) {
                                        lowestTabindex = JSProf.LWR(41851, lowestTabindex, JSProf.LRE(41850, tabindex));
                                        lowest = JSProf.LWR(41853, lowest, JSProf.LRE(41852, child));
                                    }
                                    if (!JSProf.LRE(41854, highest) || JSProf.LRE(41855, tabindex) >= JSProf.LRE(41856, highestTabindex)) {
                                        highestTabindex = JSProf.LWR(41858, highestTabindex, JSProf.LRE(41857, tabindex));
                                        highest = JSProf.LWR(41860, highest, JSProf.LRE(41859, child));
                                    }
                                }
                                var rn = JSProf.LFC(41862, radioName, false)(JSProf.LRE(41861, child));
                                if (JSProf.LMC(41864, domAttr, 'get').get(JSProf.LRE(41863, child), "checked") && JSProf.LRE(41865, rn)) {
                                    JSProf.LPE(41867, radioSelected, 'rn')[rn] = JSProf.LRPE(41867, JSProf.LRE(41866, child));
                                }
                            }
                            if (child.nodeName.toUpperCase() != 'SELECT') {
                                JSProf.LFC(41869, walkTree, false)(JSProf.LRE(41868, child));
                            }
                        }
                    }, 12);
                if (JSProf.LFC(41872, shown, false)(JSProf.LRE(41871, root))) {
                    JSProf.LFC(41874, walkTree, false)(JSProf.LRE(41873, root));
                }
                function rs(node) {
                    // substitute checked radio button for unchecked one, if there is a checked one with the same name.
                    return JSProf.LGE(41877, radioSelected, JSProf.TMPS.tfeaf29ebb637c7edec652481e92b36e1dadc4397 = JSProf.LFC(41876, radioName, false)(JSProf.LRE(41875, node)))[JSProf.TMPS.tfeaf29ebb637c7edec652481e92b36e1dadc4397] || JSProf.LRE(41878, node);
                }
                return JSProf.LNE(41887, {
                    first: JSProf.LFC(41880, rs, false)(JSProf.LRE(41879, first)),
                    last: JSProf.LFC(41882, rs, false)(JSProf.LRE(41881, last)),
                    lowest: JSProf.LFC(41884, rs, false)(JSProf.LRE(41883, lowest)),
                    highest: JSProf.LFC(41886, rs, false)(JSProf.LRE(41885, highest))
                }, 11);
            }, 12),
            getFirstInTabbingOrder: JSProf.LNF(41898, function (root, doc) {
                // summary:
                //		Finds the descendant of the specified root node
                //		that is first in the tabbing order
                var elems = JSProf.LMC(41894, a11y, '_getTabNavigable')._getTabNavigable(JSProf.LMC(41893, dom, 'byId').byId(JSProf.LRE(41891, root), JSProf.LRE(41892, doc)));
                return JSProf.LGD(41895, elems, 'lowest').lowest ? JSProf.LGD(41896, elems, 'lowest').lowest : JSProf.LGD(41897, elems, 'first').first;    // DomNode
            }, 12),
            getLastInTabbingOrder: JSProf.LNF(41906, function (root, doc) {
                // summary:
                //		Finds the descendant of the specified root node
                //		that is last in the tabbing order
                var elems = JSProf.LMC(41902, a11y, '_getTabNavigable')._getTabNavigable(JSProf.LMC(41901, dom, 'byId').byId(JSProf.LRE(41899, root), JSProf.LRE(41900, doc)));
                return JSProf.LGD(41903, elems, 'last').last ? JSProf.LGD(41904, elems, 'last').last : JSProf.LGD(41905, elems, 'highest').highest;    // DomNode
            }, 12)
        }, 11);
    JSProf.LFC(41908, has, false)("extend-dojo") && JSProf.LMC(41911, lang, 'mixin').mixin(JSProf.LRE(41909, dijit), JSProf.LRE(41910, a11y));
    return JSProf.LRE(41912, a11y);
}, 12));