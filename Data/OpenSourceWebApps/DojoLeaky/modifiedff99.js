JSProf.LFC(33061, define, false)(JSProf.LNE(33037, [
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "./at"
], 10), JSProf.LNF(33060, function (declare, lang, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin) {
    return JSProf.LFC(33059, declare, false)("dojox.mvc.Templated", JSProf.LNE(33041, [
        JSProf.LRE(33038, _WidgetBase),
        JSProf.LRE(33039, _TemplatedMixin),
        JSProf.LRE(33040, _WidgetsInTemplateMixin)
    ], 10), JSProf.LNE(33058, {
        bindings: null,
        startup: JSProf.LNF(33057, function () {
            // Code to support childBindings property in dojox/mvc/WidgetList, etc.
            // This implementation makes sure childBindings is set before this widget starts up, as dijit/_WidgetsInTemplatedMixin starts up child widgets before it starts itself up.
            var bindings = JSProf.LMC(33043, lang, 'isFunction').isFunction(JSProf.LGD(33042, this, 'bindings').bindings) && JSProf.LMC(33044, this.bindings, 'call').call(this) || JSProf.LGD(33045, this, 'bindings').bindings;
            for (var s in JSProf.LRE(33046, bindings)) {
                var w = JSProf.LGE(33047, this, 's')[s], props = JSProf.LGE(33048, bindings, 's')[s];
                if (JSProf.LRE(33049, w)) {
                    for (var prop in JSProf.LRE(33050, props)) {
                        JSProf.LMC(33053, w, 'set').set(JSProf.LRE(33051, prop), JSProf.LGE(33052, props, 'prop')[prop]);
                    }
                } else {
                    JSProf.LMC(33055, console, 'warn').warn("Widget with the following attach point was not found: " + JSProf.LRE(33054, s));
                }
            }
            JSProf.LMC(33056, this, 'inherited').inherited(arguments);
        }, 12)
    }, 11));
}, 12));