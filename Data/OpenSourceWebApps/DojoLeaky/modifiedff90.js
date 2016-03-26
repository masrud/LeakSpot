JSProf.LFC(30586, define, false)(JSProf.LNE(30504, [
    "dojo/_base/array",
    "dojo/_base/window",
    "./main"
], 10), JSProf.LNF(30585, function (array, win, dijit) {
    // module:
    //		dijit/registry
    var _widgetTypeCtr = JSProf.LNE(30505, {}, 11), hash = JSProf.LNE(30506, {}, 11);
    var registry = JSProf.LNE(30581, {
            length: 0,
            add: JSProf.LNF(30513, function (widget) {
                // summary:
                //		Add a widget to the registry. If a duplicate ID is detected, a error is thrown.
                // widget: dijit/_WidgetBase
                //		Any dijit/_WidgetBase subclass.
                if (JSProf.LGE(30507, hash, JSProf.TMPS.t5a1e53623667920a5685e5f717f8c9ab22ad06a7 = widget.id)[JSProf.TMPS.t5a1e53623667920a5685e5f717f8c9ab22ad06a7]) {
                    throw JSProf.LNE(30510, new (JSProf.LFC(30509, Error, true))("Tried to register widget with id==" + JSProf.LGD(30508, widget, 'id').id + " but that id is already registered"), 'Error');
                }
                JSProf.LPE(30512, hash, JSProf.TMPS.t5a1e53623667920a5685e5f717f8c9ab22ad06a7 = widget.id)[JSProf.TMPS.t5a1e53623667920a5685e5f717f8c9ab22ad06a7] = JSProf.LRPE(30512, JSProf.LRE(30511, widget));
                this.length++;
            }, 12),
            remove: JSProf.LNF(30515, function (id) {
                // summary:
                //		Remove a widget from the registry. Does not destroy the widget; simply
                //		removes the reference.
                if (JSProf.LGE(30514, hash, 'id')[id]) {
                    delete hash[id];
                    this.length--;
                }
            }, 12),
            byId: JSProf.LNF(30519, function (id) {
                // summary:
                //		Find a widget by it's id.
                //		If passed a widget then just returns the widget.
                return typeof JSProf.LRE(30516, id) == "string" ? JSProf.LGE(30517, hash, 'id')[id] : JSProf.LRE(30518, id);    // dijit/_WidgetBase
            }, 12),
            byNode: JSProf.LNF(30522, function (node) {
                // summary:
                //		Returns the widget corresponding to the given DOMNode
                return JSProf.LGE(30521, hash, JSProf.TMPS.t5a1e53623667920a5685e5f717f8c9ab22ad06a7 = JSProf.LMC(30520, node, 'getAttribute').getAttribute("widgetId"))[JSProf.TMPS.t5a1e53623667920a5685e5f717f8c9ab22ad06a7];    // dijit/_WidgetBase
            }, 12),
            toArray: JSProf.LNF(30528, function () {
                // summary:
                //		Convert registry into a true Array
                //
                // example:
                //		Work with the widget .domNodes in a real Array
                //		|	array.map(registry.toArray(), function(w){ return w.domNode; });
                var ar = JSProf.LNE(30523, [], 10);
                for (var id in JSProf.LRE(30524, hash)) {
                    JSProf.LMC(30526, ar, 'push').push(JSProf.LGE(30525, hash, 'id')[id]);
                }
                return JSProf.LRE(30527, ar);    // dijit/_WidgetBase[]
            }, 12),
            getUniqueId: JSProf.LNF(30539, function (widgetType) {
                // summary:
                //		Generates a unique id for a given widgetType
                var id;
                do {
                    id = JSProf.LWR(30533, id, JSProf.LRE(30529, widgetType) + "_" + (JSProf.LRE(30530, widgetType) in JSProf.LRE(30531, _widgetTypeCtr) ? ++_widgetTypeCtr[widgetType] : JSProf.LPE(30532, _widgetTypeCtr, 'widgetType')[widgetType] = JSProf.LRPE(30532, 0)));
                } while (JSProf.LGE(30534, hash, 'id')[id]);
                return JSProf.LGD(30535, dijit, '_scopeName')._scopeName == "dijit" ? JSProf.LRE(30536, id) : JSProf.LGD(30537, dijit, '_scopeName')._scopeName + "_" + JSProf.LRE(30538, id);    // String
            }, 12),
            findWidgets: JSProf.LNF(30560, function (root, skipNode) {
                JSProf.LFD(30559, getChildrenHelper);
                // summary:
                //		Search subtree under root returning widgets found.
                //		Doesn't search for nested widgets (ie, widgets inside other widgets).
                // root: DOMNode
                //		Node to search under.
                // skipNode: DOMNode
                //		If specified, don't search beneath this node (usually containerNode).
                var outAry = JSProf.LNE(30540, [], 10);
                function getChildrenHelper(root) {
                    for (var node = JSProf.LGD(30541, root, 'firstChild').firstChild; JSProf.LRE(30542, node); node = JSProf.LWR(30544, node, JSProf.LGD(30543, node, 'nextSibling').nextSibling)) {
                        if (JSProf.LGD(30545, node, 'nodeType').nodeType == 1) {
                            var widgetId = JSProf.LMC(30546, node, 'getAttribute').getAttribute("widgetId");
                            if (JSProf.LRE(30547, widgetId)) {
                                var widget = JSProf.LGE(30548, hash, 'widgetId')[widgetId];
                                if (JSProf.LRE(30549, widget)) {
                                    // may be null on page w/multiple dojo's loaded
                                    JSProf.LMC(30551, outAry, 'push').push(JSProf.LRE(30550, widget));
                                }
                            } else if (JSProf.LRE(30552, node) !== JSProf.LRE(30553, skipNode)) {
                                JSProf.LFC(30555, getChildrenHelper, false)(JSProf.LRE(30554, node));
                            }
                        }
                    }
                }
                JSProf.LFC(30557, getChildrenHelper, false)(JSProf.LRE(30556, root));
                return JSProf.LRE(30558, outAry);
            }, 12),
            _destroyAll: JSProf.LNF(30572, function () {
                // summary:
                //		Code to destroy all widgets and do other cleanup on page unload
                // Clean up focus manager lingering references to widgets and nodes
                dijit._curFocus = null;
                dijit._prevFocus = null;
                JSProf.LPD(30562, dijit, '_activeStack')._activeStack = JSProf.LRSP(30562, JSProf.LNE(30561, [], 10));
                // Destroy all the widgets, top down
                JSProf.LMC(30571, array, 'forEach').forEach(JSProf.LMC(30564, registry, 'findWidgets').findWidgets(JSProf.LMC(30563, win, 'body').body()), JSProf.LNF(30570, function (widget) {
                    // Avoid double destroy of widgets like Menu that are attached to <body>
                    // even though they are logically children of other widgets.
                    if (!JSProf.LGD(30565, widget, '_destroyed')._destroyed) {
                        if (JSProf.LGD(30566, widget, 'destroyRecursive').destroyRecursive) {
                            JSProf.LMC(30567, widget, 'destroyRecursive').destroyRecursive();
                        } else if (JSProf.LGD(30568, widget, 'destroy').destroy) {
                            JSProf.LMC(30569, widget, 'destroy').destroy();
                        }
                    }
                }, 12));
            }, 12),
            getEnclosingWidget: JSProf.LNF(30580, function (node) {
                // summary:
                //		Returns the widget whose DOM tree contains the specified DOMNode, or null if
                //		the node is not contained within the DOM tree of any widget
                while (JSProf.LRE(30573, node)) {
                    var id = JSProf.LGD(30574, node, 'nodeType').nodeType == 1 && JSProf.LMC(30575, node, 'getAttribute').getAttribute("widgetId");
                    if (JSProf.LRE(30576, id)) {
                        return JSProf.LGE(30577, hash, 'id')[id];
                    }
                    node = JSProf.LWR(30579, node, JSProf.LGD(30578, node, 'parentNode').parentNode);
                }
                return null;
            }, 12),
            _hash: hash
        }, 11);
    JSProf.LPD(30583, dijit, 'registry').registry = JSProf.LRSP(30583, JSProf.LRE(30582, registry));
    return JSProf.LRE(30584, registry);
}, 12));