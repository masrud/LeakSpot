JSProf.LFC(32831, define, false)(JSProf.LNE(32790, [
    "dojo/aspect",
    "dojo/_base/array",
    "dojo/_base/lang",
    "dijit/_WidgetBase",
    "./_atBindingMixin",
    "dijit/registry"
], 10), JSProf.LNF(32830, function (aspect, array, lang, _WidgetBase, _atBindingMixin) {
    return JSProf.LNF(32829, function (w) {
        // summary:
        //		Monkey-patch the given widget so that they looks at dojox/mvc/at set in them and start data binding specified there.
        // w: dijit/_WidgetBase...
        //		The widget.
        JSProf.LMC(32828, array, 'forEach').forEach(arguments, JSProf.LNF(32827, function (w) {
            if (JSProf.LGD(32791, w, 'dataBindAttr').dataBindAttr) {
                JSProf.LMC(32792, console, 'warn').warn("Detected a widget or a widget class that has already been applied data binding extension. Skipping...");
                return;
            }
            // Apply the at binding mixin
            JSProf.LMC(32795, lang, '_mixin')._mixin(JSProf.LRE(32793, w), JSProf.LGD(32794, _atBindingMixin, 'mixin').mixin);
            // Monkey patch widget.postscript to get the list of dojox/mvc/at handles before startup
            JSProf.LMC(32801, aspect, 'before').before(JSProf.LRE(32796, w), "postscript", JSProf.LNF(32800, function (params, srcNodeRef) {
                JSProf.LMC(32799, this, '_dbpostscript')._dbpostscript(JSProf.LRE(32797, params), JSProf.LRE(32798, srcNodeRef));
            }, 12));
            // Monkey patch widget.startup to get data binds set up
            JSProf.LMC(32806, aspect, 'before').before(JSProf.LRE(32802, w), "startup", JSProf.LNF(32805, function () {
                if (JSProf.LGD(32803, this, '_started')._started) {
                    return;
                }
                JSProf.LMC(32804, this, '_startAtWatchHandles')._startAtWatchHandles();
            }, 12));
            // Monkey patch widget.destroy to remove watches setup in _DataBindingMixin
            JSProf.LMC(32810, aspect, 'before').before(JSProf.LRE(32807, w), "destroy", JSProf.LNF(32809, function () {
                JSProf.LMC(32808, this, '_stopAtWatchHandles')._stopAtWatchHandles();
            }, 12));
            // Monkey patch widget.set to establish data binding if a dojox/mvc/at handle comes
            JSProf.LMC(32826, aspect, 'around').around(JSProf.LRE(32811, w), "set", JSProf.LNF(32825, function (oldWidgetBaseSet) {
                return JSProf.LNF(32824, function (name, value) {
                    if (JSProf.LRE(32812, name) == JSProf.LGD(32813, _atBindingMixin.prototype, 'dataBindAttr').dataBindAttr) {
                        return JSProf.LMC(32815, this, '_setBind')._setBind(JSProf.LRE(32814, value));
                    } else if (JSProf.LGD(32818, JSProf.LRE(32816, value) || JSProf.LNE(32817, {}, 11), 'atsignature').atsignature == "dojox.mvc.at") {
                        return JSProf.LMC(32821, this, '_setAtWatchHandle')._setAtWatchHandle(JSProf.LRE(32819, name), JSProf.LRE(32820, value));
                    }
                    return JSProf.LMC(32823, oldWidgetBaseSet, 'apply').apply(this, JSProf.LMC(32822, lang, '_toArray')._toArray(arguments));
                }, 12);
            }, 12));
        }, 12));
        return arguments;    // dijit/_WidgetBase...
    }, 12);
}, 12));