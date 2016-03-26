/**
 * Extension to the "InlineEditBox" widget to support editing on double click
 * events rather than single clicks. We need to override base "postMixInProperties"
 * lifecycle method where the event handlers are setup. This method is just a clone
 * of that code with the modified event list.
 */
JSProf.LFC(19155, define, false)(JSProf.LNE(19116, [
    "dijit/InlineEditBox",
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/dom-class"
], 10), JSProf.LNF(19154, function (InlineEditBox, declare, lang, domClass) {
    JSProf.LPD(19122, InlineEditBox._InlineEditor.prototype, '_onChange')._onChange = JSProf.LRSP(19122, JSProf.LNF(19121, function () {
        if (JSProf.LGD(19117, this.inlineEditBox, 'autoSave').autoSave && JSProf.LGD(19118, this.inlineEditBox, 'editing').editing && JSProf.LMC(19119, this, 'enableSave').enableSave()) {
            JSProf.LMC(19120, this, '_onBlur')._onBlur();
        }
    }, 12));
    return JSProf.LFC(19153, declare, false)("todo.form.InlineEditBox", JSProf.LRE(19123, InlineEditBox), JSProf.LNE(19152, {
        postMixInProperties: JSProf.LNF(19148, function () {
            // save pointer to original source node, since Widget nulls-out srcNodeRef
            JSProf.LPD(19125, this, 'displayNode').displayNode = JSProf.LRSP(19125, JSProf.LGD(19124, this, 'srcNodeRef').srcNodeRef);
            // connect handlers to the display node
            var events = JSProf.LNE(19126, {
                    ondblclick: "_onClick",
                    onmouseover: "_onMouseOver",
                    onmouseout: "_onMouseOut",
                    onfocus: "_onMouseOver",
                    onblur: "_onMouseOut"
                }, 11);
            for (var name in JSProf.LRE(19127, events)) {
                JSProf.LMC(19131, this, 'connect').connect(JSProf.LGD(19128, this, 'displayNode').displayNode, JSProf.LRE(19129, name), JSProf.LGE(19130, events, 'name')[name]);
            }
            JSProf.LMC(19132, this.displayNode, 'setAttribute').setAttribute("role", "button");
            if (!JSProf.LMC(19133, this.displayNode, 'getAttribute').getAttribute("tabIndex")) {
                JSProf.LMC(19134, this.displayNode, 'setAttribute').setAttribute("tabIndex", 0);
            }
            if (!JSProf.LGD(19135, this, 'value').value && !("value" in JSProf.LGD(19136, this, 'params').params)) {
                // "" is a good value if specified directly so check params){
                JSProf.LPD(19142, this, 'value').value = JSProf.LRSP(19142, JSProf.LMC(19141, lang, 'trim').trim(JSProf.LGD(19137, this, 'renderAsHtml').renderAsHtml ? JSProf.LGD(19138, this.displayNode, 'innerHTML').innerHTML : JSProf.LGD(19139, this.displayNode, 'innerText').innerText || JSProf.LGD(19140, this.displayNode, 'textContent').textContent || ""));
            }
            if (!JSProf.LGD(19143, this, 'value').value) {
                JSProf.LPD(19145, this.displayNode, 'innerHTML').innerHTML = JSProf.LRSP(19145, JSProf.LGD(19144, this, 'noValueIndicator').noValueIndicator);
            }
            JSProf.LMC(19147, domClass, 'add').add(JSProf.LGD(19146, this, 'displayNode').displayNode, 'dijitInlineEditBoxDisplayMode');
        }, 12),
        _onChange: JSProf.LNF(19151, function () {
            JSProf.LMC(19149, this, 'inherited').inherited(arguments);
            JSProf.LMC(19150, this, '_onBlur')._onBlur();
        }, 12)
    }, 11));
}, 12));