JSProf.LFC(24701, define, false)(JSProf.LNE(24675, [
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/has"
], 10), JSProf.LNF(24700, function (declare, lang, has) {
    JSProf.LMC(24678, has, 'add').add("dom-qsa", !!JSProf.LGD(24677, JSProf.LMC(24676, document, 'createElement').createElement("div"), 'querySelectorAll').querySelectorAll);
    return JSProf.LFC(24699, declare, false)("dojox.mvc._InlineTemplateMixin", null, JSProf.LNE(24698, {
        buildRendering: JSProf.LNF(24697, function () {
            var root = JSProf.LGD(24679, this, 'srcNodeRef').srcNodeRef;
            if (JSProf.LRE(24680, root)) {
                var nodes = JSProf.LFC(24681, has, false)("dom-qsa") ? JSProf.LMC(24682, root, 'querySelectorAll').querySelectorAll("script[type='dojox/mvc/InlineTemplate']") : root.getElementsByTagName("script"), templates = JSProf.LNE(24683, [], 10);
                for (var i = 0, l = JSProf.LGD(24684, nodes, 'length').length; JSProf.LRE(24685, i) < JSProf.LRE(24686, l); ++i) {
                    if (!JSProf.LFC(24687, has, false)("dom-qsa") && JSProf.LMC(24688, nodes[i], 'getAttribute').getAttribute("type") != "dojox/mvc/InlineTemplate") {
                        continue;
                    }
                    JSProf.LMC(24690, templates, 'push').push(JSProf.LGD(24689, nodes[i], 'innerHTML').innerHTML);
                }
                var templateString = JSProf.LMC(24692, lang, 'trim').trim(JSProf.LMC(24691, templates, 'join').join(""));
                if (JSProf.LRE(24693, templateString)) {
                    JSProf.LPD(24695, this, 'templateString').templateString = JSProf.LRSP(24695, JSProf.LRE(24694, templateString));
                }
            }
            JSProf.LMC(24696, this, 'inherited').inherited(arguments);
        }, 12)
    }, 11));
}, 12));