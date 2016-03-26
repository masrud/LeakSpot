define([
	"dojo/_base/declare",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dojox/mvc/WidgetList",
	"dojox/mvc/_InlineTemplateMixin",
	"todo/CssToggleWidget",
	"todo/ctrl/_HashCompletedMixin"
], function(declare, _TemplatedMixin, _WidgetsInTemplateMixin, WidgetList, _InlineTemplateMixin, CssToggleWidget, _HashCompletedMixin){
	return declare([WidgetList, _InlineTemplateMixin], {
		childClz: declare([CssToggleWidget,  _TemplatedMixin, _WidgetsInTemplateMixin, _HashCompletedMixin], {
			_setCompletedAttr: {type: "classExists", className: "completed"},
			_setHiddenAttr: {type: "classExists", className: "hidden"},

			onRemoveClick: function(){
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
				this.parent.listCtrl.removeItem(this.uniqueId);
                //To fix memory leak:
                //            this.destroyRecursive();
                //this.destroy();
			},

			onEditBoxChange: function(){
				if(!this.editBox.value){
					this.parent.listCtrl.removeItem(this.uniqueId);
				}
			}
		})
	});
});
