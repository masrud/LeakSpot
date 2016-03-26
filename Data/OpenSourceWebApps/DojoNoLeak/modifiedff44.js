JSProf.LFC(18716, define, false)(JSProf.LNE(18692, [
    "dojo/_base/declare",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojox/mvc/WidgetList",
    "dojox/mvc/_InlineTemplateMixin",
    "todo/CssToggleWidget",
    "todo/ctrl/_HashCompletedMixin"
], 10), JSProf.LNF(18715, function (declare, _TemplatedMixin, _WidgetsInTemplateMixin, WidgetList, _InlineTemplateMixin, CssToggleWidget, _HashCompletedMixin) {
    return JSProf.LFC(18714, declare, false)(JSProf.LNE(18695, [
        JSProf.LRE(18693, WidgetList),
        JSProf.LRE(18694, _InlineTemplateMixin)
    ], 10), JSProf.LNE(18713, {
        childClz: JSProf.LFC(18712, declare, false)(JSProf.LNE(18700, [
            JSProf.LRE(18696, CssToggleWidget),
            JSProf.LRE(18697, _TemplatedMixin),
            JSProf.LRE(18698, _WidgetsInTemplateMixin),
            JSProf.LRE(18699, _HashCompletedMixin)
        ], 10), JSProf.LNE(18711, {
            _setCompletedAttr: JSProf.LNE(18701, {
                type: "classExists",
                className: "completed"
            }, 11),
            _setHiddenAttr: JSProf.LNE(18702, {
                type: "classExists",
                className: "hidden"
            }, 11),
            onRemoveClick: JSProf.LNF(18706, function () {
                console.log("onRemoveClickLLLLLLLLLLLLLLLLLLLLLLLLLLLL");
                //console.log(this);
                //Actually I can say that since in MVC pattern, the logic and UI are separated, once the item is removed from logic,
                //then when the item is removed from the control, it is needed to 
                //The reason for the leak is that when the widjects are created, they are automatically added 
                //to the registry (where in the code the widgets are created? in the app18.html when a TodoList item is created)
                //Therefore, when removing a todo item, the widget should be removed. How I justify this:
                //One way is that in the MVC model, the model and view are updated by the controller,
                //so when applying the changes when an item is removed ( the controller only update the model
                // but it forgets to update the view, therefore widgets are not removed from the registry.
                // The problem is that whether TodoList is part of the view???? but it is not inside controller
                JSProf.LMC(18704, this.parent.listCtrl, 'removeItem').removeItem(JSProf.LGD(18703, this, 'uniqueId').uniqueId);
                //To fix memory leak:
                //            this.destroyRecursive();
                JSProf.LMC(18705, this, 'destroy').destroy();
            }, 12),
            onEditBoxChange: JSProf.LNF(18710, function () {
                if (!JSProf.LGD(18707, this.editBox, 'value').value) {
                    JSProf.LMC(18709, this.parent.listCtrl, 'removeItem').removeItem(JSProf.LGD(18708, this, 'uniqueId').uniqueId);
                }
            }, 12)
        }, 11))
    }, 11));
}, 12));