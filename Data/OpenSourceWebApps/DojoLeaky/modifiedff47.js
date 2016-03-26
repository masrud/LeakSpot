JSProf.LFC(18927, define, false)(JSProf.LNE(18890, [
    "dojo/_base/array",
    "dojo/_base/declare",
    "dojo/Stateful",
    "dojox/mvc/ModelRefController"
], 10), JSProf.LNF(18926, function (array, declare, Stateful, ModelRefController) {
    return JSProf.LFC(18925, declare, false)(JSProf.LRE(18891, ModelRefController), JSProf.LNE(18924, {
        addItem: JSProf.LNF(18896, function (title) {
            // summary:
            //		Adds a todo item with the given title.
            // title: String
            //		The title of todo item.
            JSProf.LMC(18895, this[this._refModelProp], 'push').push(JSProf.LNE(18894, new (JSProf.LFC(18893, Stateful, true))(JSProf.LNE(18892, {
                title: title,
                completed: false
            }, 11)), 'Stateful'));
        }, 12),
        removeItem: JSProf.LNF(18910, function (uniqueId) {
            // summary:
            //		Removes a todo item having the given unique ID.
            // uniqueId: String
            //		The unique ID of the todo item to be removed.
            var model = JSProf.LGE(18897, this, JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd = this._refModelProp)[JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd], indices = JSProf.LMC(18906, array, 'filter').filter(JSProf.LMC(18903, array, 'map').map(JSProf.LRE(18898, model), JSProf.LNF(18902, function (item, idx) {
                    return JSProf.LGD(18899, item, 'uniqueId').uniqueId == JSProf.LRE(18900, uniqueId) ? JSProf.LRE(18901, idx) : -1;
                }, 12)), JSProf.LNF(18905, function (idx) {
                    return JSProf.LRE(18904, idx) >= 0;
                }, 12));
            // The array index of the todo item to bd removed
            if (JSProf.LGD(18907, indices, 'length').length > 0) {
                JSProf.LMC(18909, this[this._refModelProp], 'splice').splice(JSProf.LGE(18908, indices, 0)[0], 1);    //model.splice(indices[0], 1);
            }
        }, 12),
        removeCompletedItems: JSProf.LNF(18917, function () {
            // summary:
            //		Removes todo items that have been marked as complete.
            var model = JSProf.LGE(18911, this, JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd = this._refModelProp)[JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd];
            for (var i = JSProf.LGD(18912, model, 'length').length - 1; JSProf.LRE(18913, i) >= 0; --i) {
                if (JSProf.LMC(18914, model[i], 'get').get("completed")) {
                    JSProf.LMC(18916, model, 'splice').splice(JSProf.LRE(18915, i), 1);
                }
            }
        }, 12),
        markAll: JSProf.LNF(18923, function (markComplete) {
            // summary:
            //		Mark all todo items as complete or incomplete.
            // markComplete: Boolean
            //		True to mark all todo items as complete. Otherwise to mark all todo items as incomplete.
            JSProf.LMC(18922, array, 'forEach').forEach(JSProf.LGE(18918, this, JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd = this._refModelProp)[JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd], JSProf.LNF(18921, function (item) {
                JSProf.LMC(18920, item, 'set').set("completed", JSProf.LRE(18919, markComplete));
            }, 12));
        }, 12)
    }, 11));
}, 12));