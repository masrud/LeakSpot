JSProf.LFC(23880, define, false)(JSProf.LNE(23847, [
    "dojo/_base/declare",
    "dojo/sniff",
    "./_FormWidget",
    "./_FormValueMixin"
], 10), JSProf.LNF(23879, function (declare, has, _FormWidget, _FormValueMixin) {
    // module:
    //		dijit/form/_FormValueWidget
    return JSProf.LFC(23878, declare, false)("dijit.form._FormValueWidget", JSProf.LNE(23850, [
        JSProf.LRE(23848, _FormWidget),
        JSProf.LRE(23849, _FormValueMixin)
    ], 10), JSProf.LNE(23877, {
        _layoutHackIE7: JSProf.LNF(23876, function () {
            // summary:
            //		Work around table sizing bugs on IE7 by forcing redraw
            if (JSProf.LFC(23851, has, false)("ie") == 7) {
                // fix IE7 layout bug when the widget is scrolled out of sight
                var domNode = JSProf.LGD(23852, this, 'domNode').domNode;
                var parent = JSProf.LGD(23853, domNode, 'parentNode').parentNode;
                var pingNode = JSProf.LGD(23854, domNode, 'firstChild').firstChild || JSProf.LRE(23855, domNode);
                // target node most unlikely to have a custom filter
                var origFilter = JSProf.LGD(23856, pingNode.style, 'filter').filter;
                // save custom filter, most likely nothing
                var _this = this;
                while (JSProf.LRE(23857, parent) && JSProf.LGD(23858, parent, 'clientHeight').clientHeight == 0) {
                    // search for parents that haven't rendered yet
                    JSProf.LFC(23873, JSProf.LNF(23872, function ping() {
                        var disconnectHandle = JSProf.LMC(23871, _this, 'connect').connect(JSProf.LRE(23859, parent), "onscroll", JSProf.LNF(23870, function () {
                                JSProf.LMC(23861, _this, 'disconnect').disconnect(JSProf.LRE(23860, disconnectHandle));
                                // only call once
                                JSProf.LPD(23865, pingNode.style, 'filter').filter = JSProf.LRSP(23865, JSProf.LMC(23864, JSProf.LNE(23863, new (JSProf.LFC(23862, Date, true))(), 'Date'), 'getMilliseconds').getMilliseconds());
                                // set to anything that's unique
                                JSProf.LMC(23869, _this, 'defer').defer(JSProf.LNF(23868, function () {
                                    JSProf.LPD(23867, pingNode.style, 'filter').filter = JSProf.LRSP(23867, JSProf.LRE(23866, origFilter));
                                }, 12));    // restore custom filter, if any
                            }, 12));
                    }, 12), false)();
                    parent = JSProf.LWR(23875, parent, JSProf.LGD(23874, parent, 'parentNode').parentNode);
                }
            }
        }, 12)
    }, 11));
}, 12));