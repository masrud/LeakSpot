JSProf.LFC(32961, define, false)(JSProf.LNE(32937, [
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "./at"
], 10), JSProf.LNF(32960, function (declare, lang, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin) {
    return JSProf.LFC(32959, declare, false)("dojox.mvc.Templated", JSProf.LNE(32941, [
        JSProf.LRE(32938, _WidgetBase),
        JSProf.LRE(32939, _TemplatedMixin),
        JSProf.LRE(32940, _WidgetsInTemplateMixin)
    ], 10), JSProf.LNE(32958, {
        bindings: null,
        startup: JSProf.LNF(32957, function () {
            // Code to support childBindings property in dojox/mvc/WidgetList, etc.
            // This implementation makes sure childBindings is set before this widget starts up, as dijit/_WidgetsInTemplatedMixin starts up child widgets before it starts itself up.
            var bindings = JSProf.LMC(32943, lang, 'isFunction').isFunction(JSProf.LGD(32942, this, 'bindings').bindings) && JSProf.LMC(32944, this.bindings, 'call').call(this) || JSProf.LGD(32945, this, 'bindings').bindings;
            for (var s in JSProf.LRE(32946, bindings)) {
                var w = JSProf.LGE(32947, this, 's')[s], props = JSProf.LGE(32948, bindings, 's')[s];
                if (JSProf.LRE(32949, w)) {
                    for (var prop in JSProf.LRE(32950, props)) {
                        JSProf.LMC(32953, w, 'set').set(JSProf.LRE(32951, prop), JSProf.LGE(32952, props, 'prop')[prop]);
                    }
                } else {
                    JSProf.LMC(32955, console, 'warn').warn("Widget with the following attach point was not found: " + JSProf.LRE(32954, s));
                }
            }
            JSProf.LMC(32956, this, 'inherited').inherited(arguments);
        }, 12)
    }, 11));
}, 12));