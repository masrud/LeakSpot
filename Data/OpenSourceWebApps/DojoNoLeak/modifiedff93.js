JSProf.LFC(32370, define, false)(JSProf.LNE(32288, [
    "dojo/_base/array",
    "dojo/_base/window",
    "./main"
], 10), JSProf.LNF(32369, function (array, win, dijit) {
    // module:
    //		dijit/registry
    var _widgetTypeCtr = JSProf.LNE(32289, {}, 11), hash = JSProf.LNE(32290, {}, 11);
    var registry = JSProf.LNE(32365, {
            length: 0,
            add: JSProf.LNF(32297, function (widget) {
                // summary:
                //		Add a widget to the registry. If a duplicate ID is detected, a error is thrown.
                // widget: dijit/_WidgetBase
                //		Any dijit/_WidgetBase subclass.
                if (JSProf.LGE(32291, hash, JSProf.TMPS.t5a1e53623667920a5685e5f717f8c9ab22ad06a7 = widget.id)[JSProf.TMPS.t5a1e53623667920a5685e5f717f8c9ab22ad06a7]) {
                    throw JSProf.LNE(32294, new (JSProf.LFC(32293, Error, true))("Tried to register widget with id==" + JSProf.LGD(32292, widget, 'id').id + " but that id is already registered"), 'Error');
                }
                JSProf.LPE(32296, hash, JSProf.TMPS.t5a1e53623667920a5685e5f717f8c9ab22ad06a7 = widget.id)[JSProf.TMPS.t5a1e53623667920a5685e5f717f8c9ab22ad06a7] = JSProf.LRPE(32296, JSProf.LRE(32295, widget));
                this.length++;
            }, 12),
            remove: JSProf.LNF(32299, function (id) {
                // summary:
                //		Remove a widget from the registry. Does not destroy the widget; simply
                //		removes the reference.
                if (JSProf.LGE(32298, hash, 'id')[id]) {
                    delete hash[id];
                    this.length--;
                }
            }, 12),
            byId: JSProf.LNF(32303, function (id) {
                // summary:
                //		Find a widget by it's id.
                //		If passed a widget then just returns the widget.
                return typeof JSProf.LRE(32300, id) == "string" ? JSProf.LGE(32301, hash, 'id')[id] : JSProf.LRE(32302, id);    // dijit/_WidgetBase
            }, 12),
            byNode: JSProf.LNF(32306, function (node) {
                // summary:
                //		Returns the widget corresponding to the given DOMNode
                return JSProf.LGE(32305, hash, JSProf.TMPS.t5a1e53623667920a5685e5f717f8c9ab22ad06a7 = JSProf.LMC(32304, node, 'getAttribute').getAttribute("widgetId"))[JSProf.TMPS.t5a1e53623667920a5685e5f717f8c9ab22ad06a7];    // dijit/_WidgetBase
            }, 12),
            toArray: JSProf.LNF(32312, function () {
                // summary:
                //		Convert registry into a true Array
                //
                // example:
                //		Work with the widget .domNodes in a real Array
                //		|	array.map(registry.toArray(), function(w){ return w.domNode; });
                var ar = JSProf.LNE(32307, [], 10);
                for (var id in JSProf.LRE(32308, hash)) {
                    JSProf.LMC(32310, ar, 'push').push(JSProf.LGE(32309, hash, 'id')[id]);
                }
                return JSProf.LRE(32311, ar);    // dijit/_WidgetBase[]
            }, 12),
            getUniqueId: JSProf.LNF(32323, function (widgetType) {
                // summary:
                //		Generates a unique id for a given widgetType
                var id;
                do {
                    id = JSProf.LWR(32317, id, JSProf.LRE(32313, widgetType) + "_" + (JSProf.LRE(32314, widgetType) in JSProf.LRE(32315, _widgetTypeCtr) ? ++_widgetTypeCtr[widgetType] : JSProf.LPE(32316, _widgetTypeCtr, 'widgetType')[widgetType] = JSProf.LRPE(32316, 0)));
                } while (JSProf.LGE(32318, hash, 'id')[id]);
                return JSProf.LGD(32319, dijit, '_scopeName')._scopeName == "dijit" ? JSProf.LRE(32320, id) : JSProf.LGD(32321, dijit, '_scopeName')._scopeName + "_" + JSProf.LRE(32322, id);    // String
            }, 12),
            findWidgets: JSProf.LNF(32344, function (root, skipNode) {
                JSProf.LFD(32343, getChildrenHelper);
                // summary:
                //		Search subtree under root returning widgets found.
                //		Doesn't search for nested widgets (ie, widgets inside other widgets).
                // root: DOMNode
                //		Node to search under.
                // skipNode: DOMNode
                //		If specified, don't search beneath this node (usually containerNode).
                var outAry = JSProf.LNE(32324, [], 10);
                function getChildrenHelper(root) {
                    for (var node = JSProf.LGD(32325, root, 'firstChild').firstChild; JSProf.LRE(32326, node); node = JSProf.LWR(32328, node, JSProf.LGD(32327, node, 'nextSibling').nextSibling)) {
                        if (JSProf.LGD(32329, node, 'nodeType').nodeType == 1) {
                            var widgetId = JSProf.LMC(32330, node, 'getAttribute').getAttribute("widgetId");
                            if (JSProf.LRE(32331, widgetId)) {
                                var widget = JSProf.LGE(32332, hash, 'widgetId')[widgetId];
                                if (JSProf.LRE(32333, widget)) {
                                    // may be null on page w/multiple dojo's loaded
                                    JSProf.LMC(32335, outAry, 'push').push(JSProf.LRE(32334, widget));
                                }
                            } else if (JSProf.LRE(32336, node) !== JSProf.LRE(32337, skipNode)) {
                                JSProf.LFC(32339, getChildrenHelper, false)(JSProf.LRE(32338, node));
                            }
                        }
                    }
                }
                JSProf.LFC(32341, getChildrenHelper, false)(JSProf.LRE(32340, root));
                return JSProf.LRE(32342, outAry);
            }, 12),
            _destroyAll: JSProf.LNF(32356, function () {
                // summary:
                //		Code to destroy all widgets and do other cleanup on page unload
                // Clean up focus manager lingering references to widgets and nodes
                dijit._curFocus = null;
                dijit._prevFocus = null;
                JSProf.LPD(32346, dijit, '_activeStack')._activeStack = JSProf.LRSP(32346, JSProf.LNE(32345, [], 10));
                // Destroy all the widgets, top down
                JSProf.LMC(32355, array, 'forEach').forEach(JSProf.LMC(32348, registry, 'findWidgets').findWidgets(JSProf.LMC(32347, win, 'body').body()), JSProf.LNF(32354, function (widget) {
                    // Avoid double destroy of widgets like Menu that are attached to <body>
                    // even though they are logically children of other widgets.
                    if (!JSProf.LGD(32349, widget, '_destroyed')._destroyed) {
                        if (JSProf.LGD(32350, widget, 'destroyRecursive').destroyRecursive) {
                            JSProf.LMC(32351, widget, 'destroyRecursive').destroyRecursive();
                        } else if (JSProf.LGD(32352, widget, 'destroy').destroy) {
                            JSProf.LMC(32353, widget, 'destroy').destroy();
                        }
                    }
                }, 12));
            }, 12),
            getEnclosingWidget: JSProf.LNF(32364, function (node) {
                // summary:
                //		Returns the widget whose DOM tree contains the specified DOMNode, or null if
                //		the node is not contained within the DOM tree of any widget
                while (JSProf.LRE(32357, node)) {
                    var id = JSProf.LGD(32358, node, 'nodeType').nodeType == 1 && JSProf.LMC(32359, node, 'getAttribute').getAttribute("widgetId");
                    if (JSProf.LRE(32360, id)) {
                        return JSProf.LGE(32361, hash, 'id')[id];
                    }
                    node = JSProf.LWR(32363, node, JSProf.LGD(32362, node, 'parentNode').parentNode);
                }
                return null;
            }, 12),
            _hash: hash
        }, 11);
    JSProf.LPD(32367, dijit, 'registry').registry = JSProf.LRSP(32367, JSProf.LRE(32366, registry));
    return JSProf.LRE(32368, registry);
}, 12));