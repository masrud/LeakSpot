JSProf.LFC(26096, define, false)(JSProf.LNE(26070, [
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/has"
], 10), JSProf.LNF(26095, function (declare, lang, has) {
    JSProf.LMC(26073, has, 'add').add("dom-qsa", !!JSProf.LGD(26072, JSProf.LMC(26071, document, 'createElement').createElement("div"), 'querySelectorAll').querySelectorAll);
    return JSProf.LFC(26094, declare, false)("dojox.mvc._InlineTemplateMixin", null, JSProf.LNE(26093, {
        buildRendering: JSProf.LNF(26092, function () {
            var root = JSProf.LGD(26074, this, 'srcNodeRef').srcNodeRef;
            if (JSProf.LRE(26075, root)) {
                var nodes = JSProf.LFC(26076, has, false)("dom-qsa") ? JSProf.LMC(26077, root, 'querySelectorAll').querySelectorAll("script[type='dojox/mvc/InlineTemplate']") : root.getElementsByTagName("script"), templates = JSProf.LNE(26078, [], 10);
                for (var i = 0, l = JSProf.LGD(26079, nodes, 'length').length; JSProf.LRE(26080, i) < JSProf.LRE(26081, l); ++i) {
                    if (!JSProf.LFC(26082, has, false)("dom-qsa") && JSProf.LMC(26083, nodes[i], 'getAttribute').getAttribute("type") != "dojox/mvc/InlineTemplate") {
                        continue;
                    }
                    JSProf.LMC(26085, templates, 'push').push(JSProf.LGD(26084, nodes[i], 'innerHTML').innerHTML);
                }
                var templateString = JSProf.LMC(26087, lang, 'trim').trim(JSProf.LMC(26086, templates, 'join').join(""));
                if (JSProf.LRE(26088, templateString)) {
                    JSProf.LPD(26090, this, 'templateString').templateString = JSProf.LRSP(26090, JSProf.LRE(26089, templateString));
                }
            }
            JSProf.LMC(26091, this, 'inherited').inherited(arguments);
        }, 12)
    }, 11));
}, 12));