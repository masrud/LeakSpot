JSProf.LFC(20280, define, false)(JSProf.LNE(20156, [
    "require",
    "dojo/_base/array",
    "dojo/_base/connect",
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/mouse",
    "dojo/on",
    "dojo/touch",
    "./_WidgetBase"
], 10), JSProf.LNF(20279, function (require, array, connect, declare, lang, mouse, on, touch, _WidgetBase) {
    // module:
    //		dijit/_AttachMixin
    // Map from string name like "mouseenter" to synthetic event like mouse.enter
    var synthEvents = JSProf.LMC(20159, lang, 'delegate').delegate(JSProf.LRE(20157, touch), JSProf.LNE(20158, {
            "mouseenter": mouse.enter,
            "mouseleave": mouse.leave,
            "keypress": connect._keypress
        }, 11));
    // To be lightweight, _AttachMixin doesn't require() dijit/a11yclick.
    // If the subclass has a template using "ondijitclick", it must load dijit/a11yclick itself.
    // In that case, the a11yclick variable below will get set to point to that synthetic event.
    var a11yclick;
    var _AttachMixin = JSProf.LFC(20274, declare, false)("dijit._AttachMixin", null, JSProf.LNE(20273, {
            constructor: JSProf.LNF(20164, function () {
                // summary:
                //		Create the widget.
                // params: Object|null
                //		Hash of initialization parameters for widget, including scalar values (like title, duration etc.)
                //		and functions, typically callbacks like onClick.
                //		The hash can contain any of the widget's properties, excluding read-only properties.
                // srcNodeRef: DOMNode|String?
                //		If a srcNodeRef (DOM node) is specified, replace srcNodeRef with my generated DOM tree.
                JSProf.LPD(20161, this, '_attachPoints')._attachPoints = JSProf.LRSP(20161, JSProf.LNE(20160, [], 10));
                JSProf.LPD(20163, this, '_attachEvents')._attachEvents = JSProf.LRSP(20163, JSProf.LNE(20162, [], 10));
            }, 12),
            buildRendering: JSProf.LNF(20169, function () {
                // summary:
                //		Attach to DOM nodes marked with special attributes.
                // tags:
                //		protected
                JSProf.LMC(20165, this, 'inherited').inherited(arguments);
                // recurse through the node, looking for, and attaching to, our
                // attachment points and events, which should be defined on the template node.
                JSProf.LMC(20167, this, '_attachTemplateNodes')._attachTemplateNodes(JSProf.LGD(20166, this, 'domNode').domNode);
                JSProf.LMC(20168, this, '_beforeFillContent')._beforeFillContent();    // hook for _WidgetsInTemplateMixin
            }, 12),
            _beforeFillContent: JSProf.LNF(20170, function () {
            }, 12),
            _attachTemplateNodes: JSProf.LNF(20192, function (rootNode) {
                // summary:
                //		Iterate through the dom nodes and attach functions and nodes accordingly.
                // description:
                //		Map widget properties and functions to the handlers specified in
                //		the dom node and it's descendants. This function iterates over all
                //		nodes and looks for these properties:
                //
                //		- dojoAttachPoint/data-dojo-attach-point
                //		- dojoAttachEvent/data-dojo-attach-event
                // rootNode: DomNode
                //		The node to search for properties. All descendants will be searched.
                // tags:
                //		private
                // DFS to process all nodes except those inside of this.containerNode
                var node = JSProf.LRE(20171, rootNode);
                while (true) {
                    if (JSProf.LGD(20172, node, 'nodeType').nodeType == 1 && (JSProf.LMC(20178, this, '_processTemplateNode')._processTemplateNode(JSProf.LRE(20173, node), JSProf.LNF(20176, function (n, p) {
                            return JSProf.LMC(20175, n, 'getAttribute').getAttribute(JSProf.LRE(20174, p));
                        }, 12), JSProf.LGD(20177, this, '_attach')._attach) || JSProf.LGD(20179, this, 'searchContainerNode').searchContainerNode) && JSProf.LGD(20180, node, 'firstChild').firstChild) {
                        node = JSProf.LWR(20182, node, JSProf.LGD(20181, node, 'firstChild').firstChild);
                    } else {
                        if (JSProf.LRE(20183, node) == JSProf.LRE(20184, rootNode)) {
                            return;
                        }
                        while (!JSProf.LGD(20185, node, 'nextSibling').nextSibling) {
                            node = JSProf.LWR(20187, node, JSProf.LGD(20186, node, 'parentNode').parentNode);
                            if (JSProf.LRE(20188, node) == JSProf.LRE(20189, rootNode)) {
                                return;
                            }
                        }
                        node = JSProf.LWR(20191, node, JSProf.LGD(20190, node, 'nextSibling').nextSibling);
                    }
                }
            }, 12),
            _processTemplateNode: JSProf.LNF(20241, function (baseNode, getAttrFunc, attachFunc) {
                // summary:
                //		Process data-dojo-attach-point and data-dojo-attach-event for given node or widget.
                //		Returns true if caller should process baseNode's children too.
                var ret = true;
                // Process data-dojo-attach-point
                var _attachScope = JSProf.LGD(20193, this, 'attachScope').attachScope || this, attachPoint = JSProf.LFC(20195, getAttrFunc, false)(JSProf.LRE(20194, baseNode), "dojoAttachPoint") || JSProf.LFC(20197, getAttrFunc, false)(JSProf.LRE(20196, baseNode), "data-dojo-attach-point");
                if (JSProf.LRE(20198, attachPoint)) {
                    var point, points = attachPoint.split(/\s*,\s*/);
                    while (point = JSProf.LWR(20200, point, JSProf.LMC(20199, points, 'shift').shift())) {
                        if (JSProf.LMC(20202, lang, 'isArray').isArray(JSProf.LGE(20201, _attachScope, 'point')[point])) {
                            JSProf.LMC(20204, _attachScope[point], 'push').push(JSProf.LRE(20203, baseNode));
                        } else {
                            JSProf.LPE(20206, _attachScope, 'point')[point] = JSProf.LRPE(20206, JSProf.LRE(20205, baseNode));
                        }
                        ret = JSProf.LWR(20208, ret, JSProf.LRE(20207, point) != "containerNode");
                        JSProf.LMC(20210, this._attachPoints, 'push').push(JSProf.LRE(20209, point));
                    }
                }
                // Process data-dojo-attach-event
                var attachEvent = JSProf.LFC(20212, getAttrFunc, false)(JSProf.LRE(20211, baseNode), "dojoAttachEvent") || JSProf.LFC(20214, getAttrFunc, false)(JSProf.LRE(20213, baseNode), "data-dojo-attach-event");
                if (JSProf.LRE(20215, attachEvent)) {
                    // NOTE: we want to support attributes that have the form
                    // "domEvent: nativeEvent; ..."
                    var event, events = attachEvent.split(/\s*,\s*/);
                    var trim = JSProf.LGD(20216, lang, 'trim').trim;
                    while (event = JSProf.LWR(20218, event, JSProf.LMC(20217, events, 'shift').shift())) {
                        if (JSProf.LRE(20219, event)) {
                            var thisFunc = null;
                            if (JSProf.LMC(20220, event, 'indexOf').indexOf(":") != -1) {
                                // oh, if only JS had tuple assignment
                                var funcNameArr = event.split(":");
                                event = JSProf.LWR(20223, event, JSProf.LFC(20222, trim, false)(JSProf.LGE(20221, funcNameArr, 0)[0]));
                                thisFunc = JSProf.LWR(20226, thisFunc, JSProf.LFC(20225, trim, false)(JSProf.LGE(20224, funcNameArr, 1)[1]));
                            } else {
                                event = JSProf.LWR(20229, event, JSProf.LFC(20228, trim, false)(JSProf.LRE(20227, event)));
                            }
                            if (!JSProf.LRE(20230, thisFunc)) {
                                thisFunc = JSProf.LWR(20232, thisFunc, JSProf.LRE(20231, event));
                            }
                            JSProf.LMC(20239, this._attachEvents, 'push').push(JSProf.LFC(20238, attachFunc, false)(JSProf.LRE(20233, baseNode), JSProf.LRE(20234, event), JSProf.LMC(20237, lang, 'hitch').hitch(JSProf.LRE(20235, _attachScope), JSProf.LRE(20236, thisFunc))));
                        }
                    }
                }
                return JSProf.LRE(20240, ret);
            }, 12),
            _attach: JSProf.LNF(20256, function (node, type, func) {
                // summary:
                //		Roughly corresponding to dojo/on, this is the default function for processing a
                //		data-dojo-attach-event.  Meant to attach to DOMNodes, not to widgets.
                // node: DOMNode
                //		The node to setup a listener on.
                // type: String
                //		Event name like "click".
                // getAttrFunc: Function
                //		Function to get the specified property for a given DomNode/Widget.
                // attachFunc: Function?
                //		Attaches an event handler from the specified node/widget to specified function.
                // Map special type names like "mouseenter" to synthetic events.
                // Subclasses are responsible to require() dijit/a11yclick if they want to use it.
                type = JSProf.LWR(20243, type, JSProf.LMC(20242, type, 'replace').replace(/^on/, "").toLowerCase());
                if (JSProf.LRE(20244, type) == "dijitclick") {
                    type = JSProf.LWR(20248, type, JSProf.LRE(20245, a11yclick) || (a11yclick = JSProf.LWR(20247, a11yclick, JSProf.LFC(20246, require, false)("./a11yclick"))));
                } else {
                    type = JSProf.LWR(20251, type, JSProf.LGE(20249, synthEvents, 'type')[type] || JSProf.LRE(20250, type));
                }
                return JSProf.LFC(20255, on, false)(JSProf.LRE(20252, node), JSProf.LRE(20253, type), JSProf.LRE(20254, func));
            }, 12),
            _detachTemplateNodes: JSProf.LNF(20269, function () {
                // summary:
                //		Detach and clean up the attachments made in _attachtempalteNodes.
                // Delete all attach points to prevent IE6 memory leaks.
                var _attachScope = JSProf.LGD(20257, this, 'attachScope').attachScope || this;
                JSProf.LMC(20260, array, 'forEach').forEach(JSProf.LGD(20258, this, '_attachPoints')._attachPoints, JSProf.LNF(20259, function (point) {
                    delete _attachScope[point];
                }, 12));
                JSProf.LPD(20262, this, '_attachPoints')._attachPoints = JSProf.LRSP(20262, JSProf.LNE(20261, [], 10));
                // And same for event handlers
                JSProf.LMC(20266, array, 'forEach').forEach(JSProf.LGD(20263, this, '_attachEvents')._attachEvents, JSProf.LNF(20265, function (handle) {
                    JSProf.LMC(20264, handle, 'remove').remove();
                }, 12));
                JSProf.LPD(20268, this, '_attachEvents')._attachEvents = JSProf.LRSP(20268, JSProf.LNE(20267, [], 10));
            }, 12),
            destroyRendering: JSProf.LNF(20272, function () {
                JSProf.LMC(20270, this, '_detachTemplateNodes')._detachTemplateNodes();
                JSProf.LMC(20271, this, 'inherited').inherited(arguments);
            }, 12)
        }, 11));
    // These arguments can be specified for widgets which are used in templates.
    // Since any widget can be specified as sub widgets in template, mix it
    // into the base widget class.  (This is a hack, but it's effective.).
    // Remove for 2.0.   Also, hide from API doc parser.
    JSProf.LMC(20277, lang, 'extend').extend(JSProf.LRE(20275, _WidgetBase), JSProf.LNE(20276, {
        dojoAttachEvent: "",
        dojoAttachPoint: ""
    }, 11));
    return JSProf.LRE(20278, _AttachMixin);
}, 12));