JSProf.LFC(17759, define, false)(JSProf.LNE(17703, [
    "dojo/_base/array",
    "dojo/aspect",
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/parser"
], 10), JSProf.LNF(17758, function (array, aspect, declare, lang, parser) {
    // module:
    //		dijit/_WidgetsInTemplateMixin
    return JSProf.LFC(17757, declare, false)("dijit._WidgetsInTemplateMixin", null, JSProf.LNE(17756, {
        _earlyTemplatedStartup: false,
        widgetsInTemplate: true,
        contextRequire: null,
        _beforeFillContent: JSProf.LNF(17740, function () {
            if (JSProf.LGD(17704, this, 'widgetsInTemplate').widgetsInTemplate) {
                // Before copying over content, instantiate widgets in template
                var node = JSProf.LGD(17705, this, 'domNode').domNode;
                if (JSProf.LGD(17706, this, 'containerNode').containerNode && !JSProf.LGD(17707, this, 'searchContainerNode').searchContainerNode) {
                    // Tell parse call below not to look for widgets inside of this.containerNode
                    JSProf.LPD(17708, this.containerNode, 'stopParser').stopParser = JSProf.LRSP(17708, true);
                }
                JSProf.LMC(17735, JSProf.LMC(17712, parser, 'parse').parse(JSProf.LRE(17709, node), JSProf.LNE(17711, {
                    noStart: !this._earlyTemplatedStartup,
                    template: true,
                    inherited: JSProf.LNE(17710, {
                        dir: this.dir,
                        lang: this.lang,
                        textDir: this.textDir
                    }, 11),
                    propsThis: this,
                    contextRequire: this.contextRequire,
                    scope: "dojo"
                }, 11)), 'then').then(JSProf.LMC(17734, lang, 'hitch').hitch(this, JSProf.LNF(17733, function (widgets) {
                    JSProf.LPD(17714, this, '_startupWidgets')._startupWidgets = JSProf.LRSP(17714, JSProf.LRE(17713, widgets));
                    // _WidgetBase::destroy() will destroy any supporting widgets under this.domNode.
                    // If we wanted to, we could call this.own() on anything in this._startupWidgets that was moved outside
                    // of this.domNode (like Dialog, which is moved to <body>).
                    // Hook up attach points and events for nodes that were converted to widgets
                    for (var i = 0; JSProf.LRE(17715, i) < JSProf.LGD(17716, widgets, 'length').length; i++) {
                        JSProf.LMC(17730, this, '_processTemplateNode')._processTemplateNode(JSProf.LGE(17717, widgets, 'i')[i], JSProf.LNF(17719, function (n, p) {
                            // callback to get a property of a widget
                            return JSProf.LGE(17718, n, 'p')[p];
                        }, 12), JSProf.LNF(17729, function (widget, type, callback) {
                            // callback to do data-dojo-attach-event to a widget
                            if (JSProf.LRE(17720, type) in JSProf.LRE(17721, widget)) {
                                // back-compat, remove for 2.0
                                return JSProf.LMC(17725, widget, 'connect').connect(JSProf.LRE(17722, widget), JSProf.LRE(17723, type), JSProf.LRE(17724, callback));
                            } else {
                                // 1.x may never hit this branch, but it's the default for 2.0
                                return JSProf.LMC(17728, widget, 'on').on(JSProf.LRE(17726, type), JSProf.LRE(17727, callback), true);
                            }
                        }, 12));
                    }
                    // Cleanup flag set above, just in case
                    if (JSProf.LGD(17731, this, 'containerNode').containerNode && JSProf.LGD(17732, this.containerNode, 'stopParser').stopParser) {
                        delete this.containerNode.stopParser;
                    }
                }, 12)));
                if (!JSProf.LGD(17736, this, '_startupWidgets')._startupWidgets) {
                    throw JSProf.LNE(17739, new (JSProf.LFC(17738, Error, true))(JSProf.LGD(17737, this, 'declaredClass').declaredClass + ": parser returned unfilled promise (probably waiting for module auto-load), " + "unsupported by _WidgetsInTemplateMixin.   Must pre-load all supporting widgets before instantiation."), 'Error');
                }
            }
        }, 12),
        _processTemplateNode: JSProf.LNF(17746, function (baseNode, getAttrFunc, attachFunc) {
            // Override _AttachMixin._processNode to skip DOMNodes with data-dojo-type set.   They are handled separately
            // in the _beforeFillContent() code above.
            if (JSProf.LFC(17742, getAttrFunc, false)(JSProf.LRE(17741, baseNode), "dojoType") || JSProf.LFC(17744, getAttrFunc, false)(JSProf.LRE(17743, baseNode), "data-dojo-type")) {
                return true;
            }
            return JSProf.LMC(17745, this, 'inherited').inherited(arguments);
        }, 12),
        startup: JSProf.LNF(17755, function () {
            JSProf.LMC(17753, array, 'forEach').forEach(JSProf.LGD(17747, this, '_startupWidgets')._startupWidgets, JSProf.LNF(17752, function (w) {
                if (JSProf.LRE(17748, w) && !JSProf.LGD(17749, w, '_started')._started && JSProf.LGD(17750, w, 'startup').startup) {
                    JSProf.LMC(17751, w, 'startup').startup();
                }
            }, 12));
            this._startupWidgets = null;
            JSProf.LMC(17754, this, 'inherited').inherited(arguments);
        }, 12)
    }, 11));
}, 12));