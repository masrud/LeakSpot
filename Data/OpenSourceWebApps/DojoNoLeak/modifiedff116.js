JSProf.LFC(39504, define, false)(JSProf.LNE(39481, [
    "dojo/_base/lang",
    "dijit/registry",
    "dojo/Stateful"
], 10), JSProf.LNF(39503, function (lang, registry) {
    var resolve = JSProf.LNF(39500, function (target, parent) {
            // summary:
            //		Find a dojo/Stateful for the target.
            // description:
            //		If target is not a string, return target itself.
            //		If target is "widget:widgetid", returns the widget whose ID is widgetid.
            //		If target is "rel:object.path", or target is other string, returns an object under parent (if specified) or under global scope.
            // target: dojo/Stateful|String
            //		The data binding to resolve.
            // parent: dojo/Stateful?
            //		The parent data binding. Used when the data binding is defined inside repeat.
            if (typeof JSProf.LRE(39482, target) == "string") {
                var tokens = JSProf.LMC(39483, target, 'match').match(/^(expr|rel|widget):(.*)$/) || JSProf.LNE(39484, [], 10);
                try {
                    if (JSProf.LGE(39485, tokens, 1)[1] == "rel") {
                        target = JSProf.LWR(39489, target, JSProf.LMC(39488, lang, 'getObject').getObject(JSProf.LGE(39486, tokens, 2)[2] || "", false, JSProf.LRE(39487, parent)));
                    } else if (JSProf.LGE(39490, tokens, 1)[1] == "widget") {
                        target = JSProf.LWR(39493, target, JSProf.LMC(39492, registry, 'byId').byId(JSProf.LGE(39491, tokens, 2)[2]));
                    } else {
                        target = JSProf.LWR(39498, target, JSProf.LMC(39497, lang, 'getObject').getObject(JSProf.LGE(39494, tokens, 2)[2] || JSProf.LRE(39495, target), false, JSProf.LRE(39496, parent)));
                    }
                } catch (e) {
                }
            }
            return JSProf.LRE(39499, target);    // dojo/Stateful
        }, 12);
    // lang.setObject() thing is for back-compat, remove it in 2.0
    return JSProf.LMC(39502, lang, 'setObject').setObject("dojox.mvc.resolve", JSProf.LRE(39501, resolve));
}, 12));