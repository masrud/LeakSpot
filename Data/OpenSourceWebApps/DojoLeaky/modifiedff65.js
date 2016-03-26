JSProf.LFC(23366, define, false)(JSProf.LNE(23333, [
    "dojo/_base/declare",
    "dojo/sniff",
    "./_FormWidget",
    "./_FormValueMixin"
], 10), JSProf.LNF(23365, function (declare, has, _FormWidget, _FormValueMixin) {
    // module:
    //		dijit/form/_FormValueWidget
    return JSProf.LFC(23364, declare, false)("dijit.form._FormValueWidget", JSProf.LNE(23336, [
        JSProf.LRE(23334, _FormWidget),
        JSProf.LRE(23335, _FormValueMixin)
    ], 10), JSProf.LNE(23363, {
        _layoutHackIE7: JSProf.LNF(23362, function () {
            // summary:
            //		Work around table sizing bugs on IE7 by forcing redraw
            if (JSProf.LFC(23337, has, false)("ie") == 7) {
                // fix IE7 layout bug when the widget is scrolled out of sight
                var domNode = JSProf.LGD(23338, this, 'domNode').domNode;
                var parent = JSProf.LGD(23339, domNode, 'parentNode').parentNode;
                var pingNode = JSProf.LGD(23340, domNode, 'firstChild').firstChild || JSProf.LRE(23341, domNode);
                // target node most unlikely to have a custom filter
                var origFilter = JSProf.LGD(23342, pingNode.style, 'filter').filter;
                // save custom filter, most likely nothing
                var _this = this;
                while (JSProf.LRE(23343, parent) && JSProf.LGD(23344, parent, 'clientHeight').clientHeight == 0) {
                    // search for parents that haven't rendered yet
                    JSProf.LFC(23359, JSProf.LNF(23358, function ping() {
                        var disconnectHandle = JSProf.LMC(23357, _this, 'connect').connect(JSProf.LRE(23345, parent), "onscroll", JSProf.LNF(23356, function () {
                                JSProf.LMC(23347, _this, 'disconnect').disconnect(JSProf.LRE(23346, disconnectHandle));
                                // only call once
                                JSProf.LPD(23351, pingNode.style, 'filter').filter = JSProf.LRSP(23351, JSProf.LMC(23350, JSProf.LNE(23349, new (JSProf.LFC(23348, Date, true))(), 'Date'), 'getMilliseconds').getMilliseconds());
                                // set to anything that's unique
                                JSProf.LMC(23355, _this, 'defer').defer(JSProf.LNF(23354, function () {
                                    JSProf.LPD(23353, pingNode.style, 'filter').filter = JSProf.LRSP(23353, JSProf.LRE(23352, origFilter));
                                }, 12));    // restore custom filter, if any
                            }, 12));
                    }, 12), false)();
                    parent = JSProf.LWR(23361, parent, JSProf.LGD(23360, parent, 'parentNode').parentNode);
                }
            }
        }, 12)
    }, 11));
}, 12));