JSProf.LFC(33042, define, false)(JSProf.LNE(33001, [
    "dojo/aspect",
    "dojo/_base/array",
    "dojo/_base/lang",
    "dijit/_WidgetBase",
    "./_atBindingMixin",
    "dijit/registry"
], 10), JSProf.LNF(33041, function (aspect, array, lang, _WidgetBase, _atBindingMixin) {
    return JSProf.LNF(33040, function (w) {
        // summary:
        //		Monkey-patch the given widget so that they looks at dojox/mvc/at set in them and start data binding specified there.
        // w: dijit/_WidgetBase...
        //		The widget.
        JSProf.LMC(33039, array, 'forEach').forEach(arguments, JSProf.LNF(33038, function (w) {
            if (JSProf.LGD(33002, w, 'dataBindAttr').dataBindAttr) {
                JSProf.LMC(33003, console, 'warn').warn("Detected a widget or a widget class that has already been applied data binding extension. Skipping...");
                return;
            }
            // Apply the at binding mixin
            JSProf.LMC(33006, lang, '_mixin')._mixin(JSProf.LRE(33004, w), JSProf.LGD(33005, _atBindingMixin, 'mixin').mixin);
            // Monkey patch widget.postscript to get the list of dojox/mvc/at handles before startup
            JSProf.LMC(33012, aspect, 'before').before(JSProf.LRE(33007, w), "postscript", JSProf.LNF(33011, function (params, srcNodeRef) {
                JSProf.LMC(33010, this, '_dbpostscript')._dbpostscript(JSProf.LRE(33008, params), JSProf.LRE(33009, srcNodeRef));
            }, 12));
            // Monkey patch widget.startup to get data binds set up
            JSProf.LMC(33017, aspect, 'before').before(JSProf.LRE(33013, w), "startup", JSProf.LNF(33016, function () {
                if (JSProf.LGD(33014, this, '_started')._started) {
                    return;
                }
                JSProf.LMC(33015, this, '_startAtWatchHandles')._startAtWatchHandles();
            }, 12));
            // Monkey patch widget.destroy to remove watches setup in _DataBindingMixin
            JSProf.LMC(33021, aspect, 'before').before(JSProf.LRE(33018, w), "destroy", JSProf.LNF(33020, function () {
                JSProf.LMC(33019, this, '_stopAtWatchHandles')._stopAtWatchHandles();
            }, 12));
            // Monkey patch widget.set to establish data binding if a dojox/mvc/at handle comes
            JSProf.LMC(33037, aspect, 'around').around(JSProf.LRE(33022, w), "set", JSProf.LNF(33036, function (oldWidgetBaseSet) {
                return JSProf.LNF(33035, function (name, value) {
                    if (JSProf.LRE(33023, name) == JSProf.LGD(33024, _atBindingMixin.prototype, 'dataBindAttr').dataBindAttr) {
                        return JSProf.LMC(33026, this, '_setBind')._setBind(JSProf.LRE(33025, value));
                    } else if (JSProf.LGD(33029, JSProf.LRE(33027, value) || JSProf.LNE(33028, {}, 11), 'atsignature').atsignature == "dojox.mvc.at") {
                        return JSProf.LMC(33032, this, '_setAtWatchHandle')._setAtWatchHandle(JSProf.LRE(33030, name), JSProf.LRE(33031, value));
                    }
                    return JSProf.LMC(33034, oldWidgetBaseSet, 'apply').apply(this, JSProf.LMC(33033, lang, '_toArray')._toArray(arguments));
                }, 12);
            }, 12));
        }, 12));
        return arguments;    // dijit/_WidgetBase...
    }, 12);
}, 12));