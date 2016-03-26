JSProf.LFC(18782, define, false)(JSProf.LNE(18759, [
    "dojo/_base/declare",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojox/mvc/WidgetList",
    "dojox/mvc/_InlineTemplateMixin",
    "todo/CssToggleWidget",
    "todo/ctrl/_HashCompletedMixin"
], 10), JSProf.LNF(18781, function (declare, _TemplatedMixin, _WidgetsInTemplateMixin, WidgetList, _InlineTemplateMixin, CssToggleWidget, _HashCompletedMixin) {
    return JSProf.LFC(18780, declare, false)(JSProf.LNE(18762, [
        JSProf.LRE(18760, WidgetList),
        JSProf.LRE(18761, _InlineTemplateMixin)
    ], 10), JSProf.LNE(18779, {
        childClz: JSProf.LFC(18778, declare, false)(JSProf.LNE(18767, [
            JSProf.LRE(18763, CssToggleWidget),
            JSProf.LRE(18764, _TemplatedMixin),
            JSProf.LRE(18765, _WidgetsInTemplateMixin),
            JSProf.LRE(18766, _HashCompletedMixin)
        ], 10), JSProf.LNE(18777, {
            _setCompletedAttr: JSProf.LNE(18768, {
                type: "classExists",
                className: "completed"
            }, 11),
            _setHiddenAttr: JSProf.LNE(18769, {
                type: "classExists",
                className: "hidden"
            }, 11),
            onRemoveClick: JSProf.LNF(18772, function () {
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
                JSProf.LMC(18771, this.parent.listCtrl, 'removeItem').removeItem(JSProf.LGD(18770, this, 'uniqueId').uniqueId);    //To fix memory leak:
                                                                                                                                   //            this.destroyRecursive();
                                                                                                                                   //this.destroy();
            }, 12),
            onEditBoxChange: JSProf.LNF(18776, function () {
                if (!JSProf.LGD(18773, this.editBox, 'value').value) {
                    JSProf.LMC(18775, this.parent.listCtrl, 'removeItem').removeItem(JSProf.LGD(18774, this, 'uniqueId').uniqueId);
                }
            }, 12)
        }, 11))
    }, 11));
}, 12));