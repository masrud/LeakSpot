JSProf.LFC(19738, define, false)(JSProf.LNE(19614, [
    "require",
    "dojo/_base/array",
    "dojo/_base/connect",
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/mouse",
    "dojo/on",
    "dojo/touch",
    "./_WidgetBase"
], 10), JSProf.LNF(19737, function (require, array, connect, declare, lang, mouse, on, touch, _WidgetBase) {
    // module:
    //		dijit/_AttachMixin
    // Map from string name like "mouseenter" to synthetic event like mouse.enter
    var synthEvents = JSProf.LMC(19617, lang, 'delegate').delegate(JSProf.LRE(19615, touch), JSProf.LNE(19616, {
            "mouseenter": mouse.enter,
            "mouseleave": mouse.leave,
            "keypress": connect._keypress
        }, 11));
    // To be lightweight, _AttachMixin doesn't require() dijit/a11yclick.
    // If the subclass has a template using "ondijitclick", it must load dijit/a11yclick itself.
    // In that case, the a11yclick variable below will get set to point to that synthetic event.
    var a11yclick;
    var _AttachMixin = JSProf.LFC(19732, declare, false)("dijit._AttachMixin", null, JSProf.LNE(19731, {
            constructor: JSProf.LNF(19622, function () {
                // summary:
                //		Create the widget.
                // params: Object|null
                //		Hash of initialization parameters for widget, including scalar values (like title, duration etc.)
                //		and functions, typically callbacks like onClick.
                //		The hash can contain any of the widget's properties, excluding read-only properties.
                // srcNodeRef: DOMNode|String?
                //		If a srcNodeRef (DOM node) is specified, replace srcNodeRef with my generated DOM tree.
                JSProf.LPD(19619, this, '_attachPoints')._attachPoints = JSProf.LRSP(19619, JSProf.LNE(19618, [], 10));
                JSProf.LPD(19621, this, '_attachEvents')._attachEvents = JSProf.LRSP(19621, JSProf.LNE(19620, [], 10));
            }, 12),
            buildRendering: JSProf.LNF(19627, function () {
                // summary:
                //		Attach to DOM nodes marked with special attributes.
                // tags:
                //		protected
                JSProf.LMC(19623, this, 'inherited').inherited(arguments);
                // recurse through the node, looking for, and attaching to, our
                // attachment points and events, which should be defined on the template node.
                JSProf.LMC(19625, this, '_attachTemplateNodes')._attachTemplateNodes(JSProf.LGD(19624, this, 'domNode').domNode);
                JSProf.LMC(19626, this, '_beforeFillContent')._beforeFillContent();    // hook for _WidgetsInTemplateMixin
            }, 12),
            _beforeFillContent: JSProf.LNF(19628, function () {
            }, 12),
            _attachTemplateNodes: JSProf.LNF(19650, function (rootNode) {
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
                var node = JSProf.LRE(19629, rootNode);
                while (true) {
                    if (JSProf.LGD(19630, node, 'nodeType').nodeType == 1 && (JSProf.LMC(19636, this, '_processTemplateNode')._processTemplateNode(JSProf.LRE(19631, node), JSProf.LNF(19634, function (n, p) {
                            return JSProf.LMC(19633, n, 'getAttribute').getAttribute(JSProf.LRE(19632, p));
                        }, 12), JSProf.LGD(19635, this, '_attach')._attach) || JSProf.LGD(19637, this, 'searchContainerNode').searchContainerNode) && JSProf.LGD(19638, node, 'firstChild').firstChild) {
                        node = JSProf.LWR(19640, node, JSProf.LGD(19639, node, 'firstChild').firstChild);
                    } else {
                        if (JSProf.LRE(19641, node) == JSProf.LRE(19642, rootNode)) {
                            return;
                        }
                        while (!JSProf.LGD(19643, node, 'nextSibling').nextSibling) {
                            node = JSProf.LWR(19645, node, JSProf.LGD(19644, node, 'parentNode').parentNode);
                            if (JSProf.LRE(19646, node) == JSProf.LRE(19647, rootNode)) {
                                return;
                            }
                        }
                        node = JSProf.LWR(19649, node, JSProf.LGD(19648, node, 'nextSibling').nextSibling);
                    }
                }
            }, 12),
            _processTemplateNode: JSProf.LNF(19699, function (baseNode, getAttrFunc, attachFunc) {
                // summary:
                //		Process data-dojo-attach-point and data-dojo-attach-event for given node or widget.
                //		Returns true if caller should process baseNode's children too.
                var ret = true;
                // Process data-dojo-attach-point
                var _attachScope = JSProf.LGD(19651, this, 'attachScope').attachScope || this, attachPoint = JSProf.LFC(19653, getAttrFunc, false)(JSProf.LRE(19652, baseNode), "dojoAttachPoint") || JSProf.LFC(19655, getAttrFunc, false)(JSProf.LRE(19654, baseNode), "data-dojo-attach-point");
                if (JSProf.LRE(19656, attachPoint)) {
                    var point, points = attachPoint.split(/\s*,\s*/);
                    while (point = JSProf.LWR(19658, point, JSProf.LMC(19657, points, 'shift').shift())) {
                        if (JSProf.LMC(19660, lang, 'isArray').isArray(JSProf.LGE(19659, _attachScope, 'point')[point])) {
                            JSProf.LMC(19662, _attachScope[point], 'push').push(JSProf.LRE(19661, baseNode));
                        } else {
                            JSProf.LPE(19664, _attachScope, 'point')[point] = JSProf.LRPE(19664, JSProf.LRE(19663, baseNode));
                        }
                        ret = JSProf.LWR(19666, ret, JSProf.LRE(19665, point) != "containerNode");
                        JSProf.LMC(19668, this._attachPoints, 'push').push(JSProf.LRE(19667, point));
                    }
                }
                // Process data-dojo-attach-event
                var attachEvent = JSProf.LFC(19670, getAttrFunc, false)(JSProf.LRE(19669, baseNode), "dojoAttachEvent") || JSProf.LFC(19672, getAttrFunc, false)(JSProf.LRE(19671, baseNode), "data-dojo-attach-event");
                if (JSProf.LRE(19673, attachEvent)) {
                    // NOTE: we want to support attributes that have the form
                    // "domEvent: nativeEvent; ..."
                    var event, events = attachEvent.split(/\s*,\s*/);
                    var trim = JSProf.LGD(19674, lang, 'trim').trim;
                    while (event = JSProf.LWR(19676, event, JSProf.LMC(19675, events, 'shift').shift())) {
                        if (JSProf.LRE(19677, event)) {
                            var thisFunc = null;
                            if (JSProf.LMC(19678, event, 'indexOf').indexOf(":") != -1) {
                                // oh, if only JS had tuple assignment
                                var funcNameArr = event.split(":");
                                event = JSProf.LWR(19681, event, JSProf.LFC(19680, trim, false)(JSProf.LGE(19679, funcNameArr, 0)[0]));
                                thisFunc = JSProf.LWR(19684, thisFunc, JSProf.LFC(19683, trim, false)(JSProf.LGE(19682, funcNameArr, 1)[1]));
                            } else {
                                event = JSProf.LWR(19687, event, JSProf.LFC(19686, trim, false)(JSProf.LRE(19685, event)));
                            }
                            if (!JSProf.LRE(19688, thisFunc)) {
                                thisFunc = JSProf.LWR(19690, thisFunc, JSProf.LRE(19689, event));
                            }
                            JSProf.LMC(19697, this._attachEvents, 'push').push(JSProf.LFC(19696, attachFunc, false)(JSProf.LRE(19691, baseNode), JSProf.LRE(19692, event), JSProf.LMC(19695, lang, 'hitch').hitch(JSProf.LRE(19693, _attachScope), JSProf.LRE(19694, thisFunc))));
                        }
                    }
                }
                return JSProf.LRE(19698, ret);
            }, 12),
            _attach: JSProf.LNF(19714, function (node, type, func) {
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
                type = JSProf.LWR(19701, type, JSProf.LMC(19700, type, 'replace').replace(/^on/, "").toLowerCase());
                if (JSProf.LRE(19702, type) == "dijitclick") {
                    type = JSProf.LWR(19706, type, JSProf.LRE(19703, a11yclick) || (a11yclick = JSProf.LWR(19705, a11yclick, JSProf.LFC(19704, require, false)("./a11yclick"))));
                } else {
                    type = JSProf.LWR(19709, type, JSProf.LGE(19707, synthEvents, 'type')[type] || JSProf.LRE(19708, type));
                }
                return JSProf.LFC(19713, on, false)(JSProf.LRE(19710, node), JSProf.LRE(19711, type), JSProf.LRE(19712, func));
            }, 12),
            _detachTemplateNodes: JSProf.LNF(19727, function () {
                // summary:
                //		Detach and clean up the attachments made in _attachtempalteNodes.
                // Delete all attach points to prevent IE6 memory leaks.
                var _attachScope = JSProf.LGD(19715, this, 'attachScope').attachScope || this;
                JSProf.LMC(19718, array, 'forEach').forEach(JSProf.LGD(19716, this, '_attachPoints')._attachPoints, JSProf.LNF(19717, function (point) {
                    delete _attachScope[point];
                }, 12));
                JSProf.LPD(19720, this, '_attachPoints')._attachPoints = JSProf.LRSP(19720, JSProf.LNE(19719, [], 10));
                // And same for event handlers
                JSProf.LMC(19724, array, 'forEach').forEach(JSProf.LGD(19721, this, '_attachEvents')._attachEvents, JSProf.LNF(19723, function (handle) {
                    JSProf.LMC(19722, handle, 'remove').remove();
                }, 12));
                JSProf.LPD(19726, this, '_attachEvents')._attachEvents = JSProf.LRSP(19726, JSProf.LNE(19725, [], 10));
            }, 12),
            destroyRendering: JSProf.LNF(19730, function () {
                JSProf.LMC(19728, this, '_detachTemplateNodes')._detachTemplateNodes();
                JSProf.LMC(19729, this, 'inherited').inherited(arguments);
            }, 12)
        }, 11));
    // These arguments can be specified for widgets which are used in templates.
    // Since any widget can be specified as sub widgets in template, mix it
    // into the base widget class.  (This is a hack, but it's effective.).
    // Remove for 2.0.   Also, hide from API doc parser.
    JSProf.LMC(19735, lang, 'extend').extend(JSProf.LRE(19733, _WidgetBase), JSProf.LNE(19734, {
        dojoAttachEvent: "",
        dojoAttachPoint: ""
    }, 11));
    return JSProf.LRE(19736, _AttachMixin);
}, 12));