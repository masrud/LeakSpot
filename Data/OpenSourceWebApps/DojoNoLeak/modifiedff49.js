/**
 * Extension to the "InlineEditBox" widget to support editing on double click
 * events rather than single clicks. We need to override base "postMixInProperties"
 * lifecycle method where the event handlers are setup. This method is just a clone
 * of that code with the modified event list.
 */
JSProf.LFC(19157, define, false)(JSProf.LNE(19118, [
    "dijit/InlineEditBox",
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/dom-class"
], 10), JSProf.LNF(19156, function (InlineEditBox, declare, lang, domClass) {
    JSProf.LPD(19124, InlineEditBox._InlineEditor.prototype, '_onChange')._onChange = JSProf.LRSP(19124, JSProf.LNF(19123, function () {
        if (JSProf.LGD(19119, this.inlineEditBox, 'autoSave').autoSave && JSProf.LGD(19120, this.inlineEditBox, 'editing').editing && JSProf.LMC(19121, this, 'enableSave').enableSave()) {
            JSProf.LMC(19122, this, '_onBlur')._onBlur();
        }
    }, 12));
    return JSProf.LFC(19155, declare, false)("todo.form.InlineEditBox", JSProf.LRE(19125, InlineEditBox), JSProf.LNE(19154, {
        postMixInProperties: JSProf.LNF(19150, function () {
            // save pointer to original source node, since Widget nulls-out srcNodeRef
            JSProf.LPD(19127, this, 'displayNode').displayNode = JSProf.LRSP(19127, JSProf.LGD(19126, this, 'srcNodeRef').srcNodeRef);
            // connect handlers to the display node
            var events = JSProf.LNE(19128, {
                    ondblclick: "_onClick",
                    onmouseover: "_onMouseOver",
                    onmouseout: "_onMouseOut",
                    onfocus: "_onMouseOver",
                    onblur: "_onMouseOut"
                }, 11);
            for (var name in JSProf.LRE(19129, events)) {
                JSProf.LMC(19133, this, 'connect').connect(JSProf.LGD(19130, this, 'displayNode').displayNode, JSProf.LRE(19131, name), JSProf.LGE(19132, events, 'name')[name]);
            }
            JSProf.LMC(19134, this.displayNode, 'setAttribute').setAttribute("role", "button");
            if (!JSProf.LMC(19135, this.displayNode, 'getAttribute').getAttribute("tabIndex")) {
                JSProf.LMC(19136, this.displayNode, 'setAttribute').setAttribute("tabIndex", 0);
            }
            if (!JSProf.LGD(19137, this, 'value').value && !("value" in JSProf.LGD(19138, this, 'params').params)) {
                // "" is a good value if specified directly so check params){
                JSProf.LPD(19144, this, 'value').value = JSProf.LRSP(19144, JSProf.LMC(19143, lang, 'trim').trim(JSProf.LGD(19139, this, 'renderAsHtml').renderAsHtml ? JSProf.LGD(19140, this.displayNode, 'innerHTML').innerHTML : JSProf.LGD(19141, this.displayNode, 'innerText').innerText || JSProf.LGD(19142, this.displayNode, 'textContent').textContent || ""));
            }
            if (!JSProf.LGD(19145, this, 'value').value) {
                JSProf.LPD(19147, this.displayNode, 'innerHTML').innerHTML = JSProf.LRSP(19147, JSProf.LGD(19146, this, 'noValueIndicator').noValueIndicator);
            }
            JSProf.LMC(19149, domClass, 'add').add(JSProf.LGD(19148, this, 'displayNode').displayNode, 'dijitInlineEditBoxDisplayMode');
        }, 12),
        _onChange: JSProf.LNF(19153, function () {
            JSProf.LMC(19151, this, 'inherited').inherited(arguments);
            JSProf.LMC(19152, this, '_onBlur')._onBlur();
        }, 12)
    }, 11));
}, 12));