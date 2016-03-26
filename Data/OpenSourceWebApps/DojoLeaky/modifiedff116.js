JSProf.LFC(39502, define, false)(JSProf.LNE(39479, [
    "dojo/_base/lang",
    "dijit/registry",
    "dojo/Stateful"
], 10), JSProf.LNF(39501, function (lang, registry) {
    var resolve = JSProf.LNF(39498, function (target, parent) {
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
            if (typeof JSProf.LRE(39480, target) == "string") {
                var tokens = JSProf.LMC(39481, target, 'match').match(/^(expr|rel|widget):(.*)$/) || JSProf.LNE(39482, [], 10);
                try {
                    if (JSProf.LGE(39483, tokens, 1)[1] == "rel") {
                        target = JSProf.LWR(39487, target, JSProf.LMC(39486, lang, 'getObject').getObject(JSProf.LGE(39484, tokens, 2)[2] || "", false, JSProf.LRE(39485, parent)));
                    } else if (JSProf.LGE(39488, tokens, 1)[1] == "widget") {
                        target = JSProf.LWR(39491, target, JSProf.LMC(39490, registry, 'byId').byId(JSProf.LGE(39489, tokens, 2)[2]));
                    } else {
                        target = JSProf.LWR(39496, target, JSProf.LMC(39495, lang, 'getObject').getObject(JSProf.LGE(39492, tokens, 2)[2] || JSProf.LRE(39493, target), false, JSProf.LRE(39494, parent)));
                    }
                } catch (e) {
                }
            }
            return JSProf.LRE(39497, target);    // dojo/Stateful
        }, 12);
    // lang.setObject() thing is for back-compat, remove it in 2.0
    return JSProf.LMC(39500, lang, 'setObject').setObject("dojox.mvc.resolve", JSProf.LRE(39499, resolve));
}, 12));