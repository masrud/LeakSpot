JSProf.LFC(15377, define, false)(JSProf.LNE(15349, [
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/_base/unload",
    "dojo/keys",
    "dojo/string",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "todo/CssToggleWidget",
    "dojo/text!./app18.html",
    "dijit/form/CheckBox",
    "dijit/form/TextBox",
    "dojox/mvc/at",
    "todo/TodoList",
    "todo/ctrl/RouteController",
    "todo/ctrl/TodoListRefController",
    "todo/ctrl/TodoRefController",
    "todo/form/InlineEditBox",
    "todo/misc/HashSelectedConverter",
    "todo/misc/LessThanOrEqualToConverter",
    "todo/model/SimpleTodoModel",
    "todo/store/LocalStorage"
], 10), JSProf.LNF(15376, function (declare, lang, unload, keys, string, _TemplatedMixin, _WidgetsInTemplateMixin, CssToggleWidget, template) {
    return JSProf.LFC(15375, declare, false)(JSProf.LNE(15353, [
        JSProf.LRE(15350, CssToggleWidget),
        JSProf.LRE(15351, _TemplatedMixin),
        JSProf.LRE(15352, _WidgetsInTemplateMixin)
    ], 10), JSProf.LNE(15374, {
        templateString: template,
        _setPresentAttr: JSProf.LNE(15354, {
            type: "classExists",
            className: "todos_present"
        }, 11),
        _setCompleteAttr: JSProf.LNE(15355, {
            type: "classExists",
            className: "todos_selected"
        }, 11),
        startup: JSProf.LNF(15360, function () {
            // summary:
            //		A function called after the DOM fragment declaring this controller is added to the document.
            //		See documentation for dijit/_WidgetBase.startup() for more details.
            var _self = this;
            JSProf.LMC(15356, this, 'inherited').inherited(arguments);
            JSProf.LMC(15359, unload, 'addOnUnload').addOnUnload(JSProf.LNF(15358, function () {
                JSProf.LMC(15357, _self, 'destroy').destroy();    // When this page is being unloaded, call destroy callbacks of inner-widgets to let them clean up
            }, 12));
        }, 12),
        onKeyPressNewItem: JSProf.LNF(15373, function (event) {
            // summary:
            //		Handle key press events for the input field for new todo.
            // description:
            //		If user has pressed enter, add current text value as new todo item in the model.
            if (JSProf.LGD(15361, event, 'keyCode').keyCode !== JSProf.LGD(15362, keys, 'ENTER').ENTER || !JSProf.LGD(15365, JSProf.LMC(15364, string, 'trim').trim(JSProf.LGD(15363, event.target, 'value').value), 'length').length) {
                return;    // If the key is not Enter, or the input field is empty, bail
            }
            JSProf.LMC(15369, JSProf.LMC(15367, lang, 'getObject').getObject(JSProf.LGD(15366, this, 'id').id + "_listCtrl"), 'addItem').addItem(JSProf.LGD(15368, event.target, 'value').value);
            // Add a todo item with the given text
            JSProf.LPD(15370, event.target, 'value').value = JSProf.LRSP(15370, "");
            // Clear the input field
            JSProf.LMC(15371, event, 'preventDefault').preventDefault();
            JSProf.LMC(15372, event, 'stopPropagation').stopPropagation();
        }, 12)
    }, 11));
}, 12));