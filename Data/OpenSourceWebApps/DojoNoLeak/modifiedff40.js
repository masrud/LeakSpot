JSProf.LFC(17893, define, false)(JSProf.LNE(17860, [
    "dojo/_base/array",
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/dom-class",
    "dijit/_WidgetBase"
], 10), JSProf.LNF(17892, function (array, declare, lang, domClass, _WidgetBase) {
    return JSProf.LFC(17891, declare, false)(JSProf.LRE(17861, _WidgetBase), JSProf.LNE(17890, {
        _attrToDom: JSProf.LNF(17889, function (attr, value, commands) {
            // summary:
            //		Handle widget attribute with classExists type.
            //		See dijit/_WidgetBase._attrToDom() for more details.
            //console.log("CSS TOGGLE =============================");
            //console.log(this);
            var callee = JSProf.LGD(17862, arguments, 'callee').callee;
            JSProf.LMC(17888, array, 'forEach').forEach(JSProf.LFC(17872, JSProf.LNF(17868, function () {
                return JSProf.LMC(17864, lang, 'isArray').isArray(JSProf.LRE(17863, commands)) ? JSProf.LMC(17865, commands, 'slice').slice(0) : JSProf.LNE(17867, [JSProf.LRE(17866, commands)], 10);
            }, 12), false)(JSProf.LGD(17869, arguments, 'length').length >= 3 ? JSProf.LRE(17870, commands) : JSProf.LGE(17871, this.attributeMap, 'attr')[attr]), JSProf.LNF(17887, function (command) {
                JSProf.LGD(17873, command, 'type').type != "classExists" ? JSProf.LMC(17880, this, 'inherited').inherited("_attrToDom", JSProf.LMC(17879, lang, 'mixin').mixin(JSProf.LNE(17877, [
                    JSProf.LRE(17874, attr),
                    JSProf.LRE(17875, value),
                    JSProf.LRE(17876, command)
                ], 10), JSProf.LNE(17878, { callee: callee }, 11))) : JSProf.LMC(17886, domClass, 'toggle').toggle(JSProf.LGE(17882, this, JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd = JSProf.LGD(17881, command, 'node').node || "domNode")[JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd], JSProf.LGD(17883, command, 'className').className || JSProf.LRE(17884, attr), JSProf.LRE(17885, value));
            }, 12), this);
        }, 12)
    }, 11));
}, 12));