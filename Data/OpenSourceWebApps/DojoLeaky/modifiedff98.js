JSProf.LFC(32950, define, false)(JSProf.LNE(32892, [
    "dojo/_base/array",
    "dojo/_base/declare",
    "dojo/dom-construct",
    "dojo/_base/kernel"
], 10), JSProf.LNF(32949, function (array, declare, domConstruct, kernel) {
    // module:
    //		dijit/_Container
    return JSProf.LFC(32948, declare, false)("dijit._Container", null, JSProf.LNE(32947, {
        buildRendering: JSProf.LNF(32897, function () {
            JSProf.LMC(32893, this, 'inherited').inherited(arguments);
            if (!JSProf.LGD(32894, this, 'containerNode').containerNode) {
                // All widgets with descendants must set containerNode.
                // NB: this code doesn't quite work right because for TabContainer it runs before
                // _TemplatedMixin::buildRendering(), and thus
                // sets this.containerNode to this.domNode, later to be overridden by the assignment in the template.
                JSProf.LPD(32896, this, 'containerNode').containerNode = JSProf.LRSP(32896, JSProf.LGD(32895, this, 'domNode').domNode);
            }
        }, 12),
        addChild: JSProf.LNF(32918, function (widget, insertIndex) {
            // summary:
            //		Makes the given widget a child of this widget.
            // description:
            //		Inserts specified child widget's dom node as a child of this widget's
            //		container node, and possibly does other processing (such as layout).
            // I want to just call domConstruct.place(widget.domNode, this.containerNode, insertIndex), but the counting
            // is thrown off by text nodes and comment nodes that show up when constructed by markup.
            // In the future consider stripping those nodes on construction, either in the parser or this widget code.
            var refNode = JSProf.LGD(32898, this, 'containerNode').containerNode;
            if (JSProf.LRE(32899, insertIndex) > 0) {
                // Old-school way to get nth child; dojo.query would be easier but _Container was weened from dojo.query
                // in #10087 to minimize download size.   Not sure if that's still and issue with new smaller dojo/query.
                refNode = JSProf.LWR(32901, refNode, JSProf.LGD(32900, refNode, 'firstChild').firstChild);
                while (JSProf.LRE(32902, insertIndex) > 0) {
                    if (JSProf.LGD(32903, refNode, 'nodeType').nodeType == 1) {
                        insertIndex--;
                    }
                    refNode = JSProf.LWR(32905, refNode, JSProf.LGD(32904, refNode, 'nextSibling').nextSibling);
                }
                if (JSProf.LRE(32906, refNode)) {
                    insertIndex = JSProf.LWR(32907, insertIndex, "before");
                } else {
                    // to support addChild(child, n-1) where there are n children (should add child at end)
                    refNode = JSProf.LWR(32909, refNode, JSProf.LGD(32908, this, 'containerNode').containerNode);
                    insertIndex = JSProf.LWR(32910, insertIndex, "last");
                }
            }
            JSProf.LMC(32914, domConstruct, 'place').place(JSProf.LGD(32911, widget, 'domNode').domNode, JSProf.LRE(32912, refNode), JSProf.LRE(32913, insertIndex));
            // If I've been started but the child widget hasn't been started,
            // start it now.  Make sure to do this after widget has been
            // inserted into the DOM tree, so it can see that it's being controlled by me,
            // so it doesn't try to size itself.
            if (JSProf.LGD(32915, this, '_started')._started && !JSProf.LGD(32916, widget, '_started')._started) {
                JSProf.LMC(32917, widget, 'startup').startup();
            }
        }, 12),
        removeChild: JSProf.LNF(32929, function (widget) {
            // summary:
            //		Removes the passed widget instance from this widget but does
            //		not destroy it.  You can also pass in an integer indicating
            //		the index within the container to remove (ie, removeChild(5) removes the sixth widget).
            if (typeof JSProf.LRE(32919, widget) == "number") {
                widget = JSProf.LWR(32922, widget, JSProf.LGE(32921, JSProf.LMC(32920, this, 'getChildren').getChildren(), 'widget')[widget]);
            }
            if (JSProf.LRE(32923, widget)) {
                var node = JSProf.LGD(32924, widget, 'domNode').domNode;
                if (JSProf.LRE(32925, node) && JSProf.LGD(32926, node, 'parentNode').parentNode) {
                    JSProf.LMC(32928, node.parentNode, 'removeChild').removeChild(JSProf.LRE(32927, node));    // detach but don't destroy
                }
            }
        }, 12),
        hasChildren: JSProf.LNF(32932, function () {
            // summary:
            //		Returns true if widget has child widgets, i.e. if this.containerNode contains widgets.
            return JSProf.LGD(32931, JSProf.LMC(32930, this, 'getChildren').getChildren(), 'length').length > 0;    // Boolean
        }, 12),
        _getSiblingOfChild: JSProf.LNF(32942, function (child, dir) {
            // summary:
            //		Get the next or previous widget sibling of child
            // dir:
            //		if 1, get the next sibling
            //		if -1, get the previous sibling
            // tags:
            //		private
            JSProf.LMC(32934, kernel, 'deprecated').deprecated(JSProf.LGD(32933, this, 'declaredClass').declaredClass + "::_getSiblingOfChild() is deprecated. Use _KeyNavMixin::_getNext() instead.", "", "2.0");
            var children = JSProf.LMC(32935, this, 'getChildren').getChildren(), idx = JSProf.LMC(32938, array, 'indexOf').indexOf(JSProf.LRE(32936, children), JSProf.LRE(32937, child));
            // int
            return JSProf.LGE(32941, children, JSProf.TMPS.tbbbb14e88e66918c69f6e1ba956cbeb5e3ffa120 = JSProf.LRE(32939, idx) + JSProf.LRE(32940, dir))[JSProf.TMPS.tbbbb14e88e66918c69f6e1ba956cbeb5e3ffa120];
        }, 12),
        getIndexOfChild: JSProf.LNF(32946, function (child) {
            // summary:
            //		Gets the index of the child in this container or -1 if not found
            return JSProf.LMC(32945, array, 'indexOf').indexOf(JSProf.LMC(32943, this, 'getChildren').getChildren(), JSProf.LRE(32944, child));    // int
        }, 12)
    }, 11));
}, 12));