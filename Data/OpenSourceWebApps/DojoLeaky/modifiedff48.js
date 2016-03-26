JSProf.LFC(19035, define, false)(JSProf.LNE(18989, [
    "dojo/_base/array",
    "dojo/_base/declare",
    "dojox/mvc/EditStoreRefController"
], 10), JSProf.LNF(19034, function (array, declare, EditStoreRefController) {
    return JSProf.LFC(19033, declare, false)(JSProf.LRE(18990, EditStoreRefController), JSProf.LNE(19032, {
        defaultId: "",
        store: null,
        modelClass: null,
        getStatefulOptions: JSProf.LNE(18996, {
            getType: JSProf.LNF(18991, function (v) {
                return "specifiedModel";    // We are converting given object at once using modelClass here, instead of using per-data-item based data conversion callbacks
            }, 12),
            getStatefulSpecifiedModel: JSProf.LNF(18995, function (o) {
                return JSProf.LNE(18994, new (JSProf.LMC(18993, this.parent, 'modelClass')).modelClass(JSProf.LRE(18992, o)), 40);    // Create an instance of modelClass given the plain object from Dojo Object Store
            }, 12)
        }, 11),
        getPlainValueOptions: JSProf.LNE(19004, {
            getType: JSProf.LNF(18997, function (o) {
                return "specifiedModel";    // We are converting given data model at once, instead of using per-data-item based data conversion callbacks
            }, 12),
            getPlainSpecifiedModel: JSProf.LNF(19003, function (o) {
                return JSProf.LNE(19002, {
                    id: o.id,
                    todos: JSProf.LMC(19001, array, 'map').map(JSProf.LGD(18998, o, 'todos').todos, JSProf.LNF(19000, function (item) {
                        return JSProf.LNE(18999, {
                            title: item.title,
                            completed: item.completed
                        }, 11);
                    }, 12)),
                    incomplete: o.incomplete,
                    complete: o.complete
                }, 11);
            }, 12)
        }, 11),
        postscript: JSProf.LNF(19010, function (params, srcNodeRef) {
            // summary:
            //		Kicks off instantiation of this controller, in a similar manner as dijit/_WidgetBase.postscript().
            // params: Object?
            //		The optional parameters for this controller.
            // srcNodeRef: DOMNode?
            //		The DOM node declaring this controller. Set if this controller is created via Dojo parser.
            JSProf.LPD(19005, this.getStatefulOptions, 'parent').parent = JSProf.LRSP(19005, this);
            // For getStatefulOptions object to have a reference to this object
            JSProf.LMC(19006, this, 'inherited').inherited(arguments);
            JSProf.LRE(19007, srcNodeRef) && JSProf.LMC(19009, srcNodeRef, 'setAttribute').setAttribute("widgetId", JSProf.LGD(19008, this, 'id').id);    // If this is created via Dojo parser, set widgetId attribute so that destroyDescendants() of parent widget works
        }, 12),
        startup: JSProf.LNF(19014, function () {
            // summary:
            //		A function called after the DOM fragment declaring this controller is added to the document, in a similar manner as dijit/_WidgetBase.startup().
            JSProf.LMC(19011, this, 'inherited').inherited(arguments);
            JSProf.LMC(19013, this, 'getStore').getStore(JSProf.LGD(19012, this, 'defaultId').defaultId);    // Obtain data from Dojo Object Store as soon as this starts up
        }, 12),
        set: JSProf.LNF(19024, function (name, value) {
            // summary:
            //		A function called when a property value is set to this controller.
            if (JSProf.LRE(19015, name) == JSProf.LGD(19016, this, '_refSourceModelProp')._refSourceModelProp && JSProf.LGE(19017, this, JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd = this._refSourceModelProp)[JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd] != JSProf.LRE(19018, value) && JSProf.LGD(19021, JSProf.LGE(19019, this, JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd = this._refSourceModelProp)[JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd] || JSProf.LNE(19020, {}, 11), 'destroy').destroy) {
                JSProf.LMC(19022, this[this._refSourceModelProp], 'destroy').destroy();    // If we have a data model and it's being replaced, make sure it's cleaned up
            }
            JSProf.LMC(19023, this, 'inherited').inherited(arguments);
        }, 12),
        destroy: JSProf.LNF(19031, function () {
            // summary:
            //		A function called when this controller is being destroyed, in a similar manner as dijit/_WidgetBase.destroy().
            JSProf.LMC(19025, this, 'commit').commit();
            // Save the data to Dojo Object Store when this is destroyed
            if (JSProf.LGD(19028, JSProf.LGE(19026, this, JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd = this._refSourceModelProp)[JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd] || JSProf.LNE(19027, {}, 11), 'destroy').destroy) {
                JSProf.LMC(19029, this[this._refSourceModelProp], 'destroy').destroy();    // If we have a data model, make sure it's cleaned up
            }
            JSProf.LMC(19030, this, 'inherited').inherited(arguments);
        }, 12)
    }, 11));
}, 12));