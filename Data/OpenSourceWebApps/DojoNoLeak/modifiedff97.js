JSProf.LFC(32850, define, false)(JSProf.LNE(32792, [
    "dojo/_base/array",
    "dojo/_base/declare",
    "dojo/dom-construct",
    "dojo/_base/kernel"
], 10), JSProf.LNF(32849, function (array, declare, domConstruct, kernel) {
    // module:
    //		dijit/_Container
    return JSProf.LFC(32848, declare, false)("dijit._Container", null, JSProf.LNE(32847, {
        buildRendering: JSProf.LNF(32797, function () {
            JSProf.LMC(32793, this, 'inherited').inherited(arguments);
            if (!JSProf.LGD(32794, this, 'containerNode').containerNode) {
                // All widgets with descendants must set containerNode.
                // NB: this code doesn't quite work right because for TabContainer it runs before
                // _TemplatedMixin::buildRendering(), and thus
                // sets this.containerNode to this.domNode, later to be overridden by the assignment in the template.
                JSProf.LPD(32796, this, 'containerNode').containerNode = JSProf.LRSP(32796, JSProf.LGD(32795, this, 'domNode').domNode);
            }
        }, 12),
        addChild: JSProf.LNF(32818, function (widget, insertIndex) {
            // summary:
            //		Makes the given widget a child of this widget.
            // description:
            //		Inserts specified child widget's dom node as a child of this widget's
            //		container node, and possibly does other processing (such as layout).
            // I want to just call domConstruct.place(widget.domNode, this.containerNode, insertIndex), but the counting
            // is thrown off by text nodes and comment nodes that show up when constructed by markup.
            // In the future consider stripping those nodes on construction, either in the parser or this widget code.
            var refNode = JSProf.LGD(32798, this, 'containerNode').containerNode;
            if (JSProf.LRE(32799, insertIndex) > 0) {
                // Old-school way to get nth child; dojo.query would be easier but _Container was weened from dojo.query
                // in #10087 to minimize download size.   Not sure if that's still and issue with new smaller dojo/query.
                refNode = JSProf.LWR(32801, refNode, JSProf.LGD(32800, refNode, 'firstChild').firstChild);
                while (JSProf.LRE(32802, insertIndex) > 0) {
                    if (JSProf.LGD(32803, refNode, 'nodeType').nodeType == 1) {
                        insertIndex--;
                    }
                    refNode = JSProf.LWR(32805, refNode, JSProf.LGD(32804, refNode, 'nextSibling').nextSibling);
                }
                if (JSProf.LRE(32806, refNode)) {
                    insertIndex = JSProf.LWR(32807, insertIndex, "before");
                } else {
                    // to support addChild(child, n-1) where there are n children (should add child at end)
                    refNode = JSProf.LWR(32809, refNode, JSProf.LGD(32808, this, 'containerNode').containerNode);
                    insertIndex = JSProf.LWR(32810, insertIndex, "last");
                }
            }
            JSProf.LMC(32814, domConstruct, 'place').place(JSProf.LGD(32811, widget, 'domNode').domNode, JSProf.LRE(32812, refNode), JSProf.LRE(32813, insertIndex));
            // If I've been started but the child widget hasn't been started,
            // start it now.  Make sure to do this after widget has been
            // inserted into the DOM tree, so it can see that it's being controlled by me,
            // so it doesn't try to size itself.
            if (JSProf.LGD(32815, this, '_started')._started && !JSProf.LGD(32816, widget, '_started')._started) {
                JSProf.LMC(32817, widget, 'startup').startup();
            }
        }, 12),
        removeChild: JSProf.LNF(32829, function (widget) {
            // summary:
            //		Removes the passed widget instance from this widget but does
            //		not destroy it.  You can also pass in an integer indicating
            //		the index within the container to remove (ie, removeChild(5) removes the sixth widget).
            if (typeof JSProf.LRE(32819, widget) == "number") {
                widget = JSProf.LWR(32822, widget, JSProf.LGE(32821, JSProf.LMC(32820, this, 'getChildren').getChildren(), 'widget')[widget]);
            }
            if (JSProf.LRE(32823, widget)) {
                var node = JSProf.LGD(32824, widget, 'domNode').domNode;
                if (JSProf.LRE(32825, node) && JSProf.LGD(32826, node, 'parentNode').parentNode) {
                    JSProf.LMC(32828, node.parentNode, 'removeChild').removeChild(JSProf.LRE(32827, node));    // detach but don't destroy
                }
            }
        }, 12),
        hasChildren: JSProf.LNF(32832, function () {
            // summary:
            //		Returns true if widget has child widgets, i.e. if this.containerNode contains widgets.
            return JSProf.LGD(32831, JSProf.LMC(32830, this, 'getChildren').getChildren(), 'length').length > 0;    // Boolean
        }, 12),
        _getSiblingOfChild: JSProf.LNF(32842, function (child, dir) {
            // summary:
            //		Get the next or previous widget sibling of child
            // dir:
            //		if 1, get the next sibling
            //		if -1, get the previous sibling
            // tags:
            //		private
            JSProf.LMC(32834, kernel, 'deprecated').deprecated(JSProf.LGD(32833, this, 'declaredClass').declaredClass + "::_getSiblingOfChild() is deprecated. Use _KeyNavMixin::_getNext() instead.", "", "2.0");
            var children = JSProf.LMC(32835, this, 'getChildren').getChildren(), idx = JSProf.LMC(32838, array, 'indexOf').indexOf(JSProf.LRE(32836, children), JSProf.LRE(32837, child));
            // int
            return JSProf.LGE(32841, children, JSProf.TMPS.tbbbb14e88e66918c69f6e1ba956cbeb5e3ffa120 = JSProf.LRE(32839, idx) + JSProf.LRE(32840, dir))[JSProf.TMPS.tbbbb14e88e66918c69f6e1ba956cbeb5e3ffa120];
        }, 12),
        getIndexOfChild: JSProf.LNF(32846, function (child) {
            // summary:
            //		Gets the index of the child in this container or -1 if not found
            return JSProf.LMC(32845, array, 'indexOf').indexOf(JSProf.LMC(32843, this, 'getChildren').getChildren(), JSProf.LRE(32844, child));    // int
        }, 12)
    }, 11));
}, 12));