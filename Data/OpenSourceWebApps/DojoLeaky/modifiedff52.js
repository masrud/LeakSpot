JSProf.LFC(19321, define, false)(JSProf.LNE(19256, [
    "dojo/_base/array",
    "dojo/_base/lang",
    "dojox/mvc/getStateful"
], 10), JSProf.LNF(19320, function (array, lang, getStateful) {
    var defaultData = JSProf.LNE(19258, {
            id: "todos-dojo",
            todos: JSProf.LNE(19257, [], 10),
            incomplete: 0,
            complete: 0
        }, 11);
    var seq = 0;
    // The sequence number to generate unique IDs of todo items
    return JSProf.LNF(19319, function (data) {
        JSProf.LFD(19318, assignPropertiesToNewItem);
        // summary:
        //		The data model for TodoMVC.
        // description:
        //		This data model does:
        //
        //			- Keep complete/incomplete properties up to date
        //			- Add unique ID to new todo items
        //
        // data: Object
        //		The plain data, coming from Dojo Object Store.
        function assignPropertiesToNewItem(item) {
            // summary:
            //		Add additional properties to a todo item.
            // description:
            //		This function does:
            //
            //			- Add unique ID to the given todo item
            //			- Add setter function for completed property to the given todo item
            // item: dojo/Stateful
            //		The todo item.
            console.log("============assignPropertiesToNewItem================");
            JSProf.LMC(19269, lang, 'mixin').mixin(JSProf.LRE(19259, item), JSProf.LNE(19268, {
                _completedSetter: JSProf.LNF(19267, function (value) {
                    // summary
                    //		The setter function for completed property, which keeps complete/incomplete properties of the data model up to date.
                    // value: Boolean
                    //		True means this todo item is completed. Otherwise means this todo item is incomplete.
                    if (JSProf.LGD(19260, this, 'completed').completed ^ JSProf.LRE(19261, value)) {
                        // Update is done only if there is a flip in value
                        // If the todo item is turned to completed state, increase the count of completed items.
                        // If the todo item is turned to incomplete state, decrease the count of completed items.
                        JSProf.LMC(19264, statefulData, 'set').set("complete", JSProf.LMC(19262, statefulData, 'get').get("complete") + (JSProf.LRE(19263, value) ? 1 : -1));
                    }
                    JSProf.LPD(19266, this, 'completed').completed = JSProf.LRSP(19266, JSProf.LRE(19265, value));    // Assign the new value
                }, 12),
                uniqueId: "TODO-" + seq++
            }, 11));
        }
        var statefulData = JSProf.LFC(19272, getStateful, false)(JSProf.LRE(19270, data) || JSProf.LRE(19271, defaultData));
        // Convert a plain object to dojo/Stateful, hierarchically. Use the default data if (lastly saved) data is not there
        JSProf.LMC(19275, array, 'forEach').forEach(JSProf.LGD(19273, statefulData, 'todos').todos, JSProf.LRE(19274, assignPropertiesToNewItem));
        // Add additional properties to todo items
        return JSProf.LMC(19317, lang, 'mixin').mixin(JSProf.LRE(19276, statefulData), JSProf.LNE(19316, {
            _elementWatchHandle: JSProf.LMC(19295, statefulData.todos, 'watchElements').watchElements(JSProf.LNF(19294, function (idx, removals, adds) {
                // summary:
                //		The dojox/mvc/StatefulArray watch callback for adds/removals of todo items.
                // description:
                //		This callback does:
                //
                //			- Keep complete/incomplete properties up to date, upon adds/removals of todo items
                //			- Add unique ID to new todo items
                //			- Add setter function for completed property to new todo items
                //
                // idx: Number
                //		The array index where adds/removals happened at.
                // removals: dojo/Stateful[]
                //		The removed todo items.
                // adds: dojo/Stateful[]
                //		The added todo items.
                console.log("===========Adding watch handler=============");
                var complete = JSProf.LMC(19277, statefulData, 'get').get("complete");
                JSProf.LMC(19281, array, 'forEach').forEach(JSProf.LRE(19278, removals), JSProf.LNF(19280, function (item) {
                    complete -= !!JSProf.LGD(19279, item, 'completed').completed;
                }, 12));
                // If completed items are removed, decrease the count of completed items
                JSProf.LMC(19285, array, 'forEach').forEach(JSProf.LRE(19282, adds), JSProf.LNF(19284, function (item) {
                    complete += !!JSProf.LGD(19283, item, 'completed').completed;
                }, 12));
                // If completed items are added, increase the count of completed items
                JSProf.LMC(19287, statefulData, 'set').set("complete", JSProf.LRE(19286, complete));
                JSProf.LMC(19290, statefulData, 'set').set("incomplete", JSProf.LMC(19288, statefulData.todos, 'get').get("length") - JSProf.LRE(19289, complete));
                JSProf.LMC(19293, array, 'forEach').forEach(JSProf.LRE(19291, adds), JSProf.LRE(19292, assignPropertiesToNewItem));    // Add additional properties to newly added todo items
            }, 12)),
            _incompleteSetter: JSProf.LNF(19304, function (value) {
                // summary:
                //		dojo/Stateful setter function for incomplete property.
                // description:
                //		This setter function keeps complete property up to date.
                // value: Number
                //		The new count of incomplete todo items.
                var changed = JSProf.LGD(19296, this, 'incomplete').incomplete != JSProf.LRE(19297, value);
                JSProf.LPD(19299, this, 'incomplete').incomplete = JSProf.LRSP(19299, JSProf.LRE(19298, value));
                // Assign the new value
                if (JSProf.LRE(19300, changed)) {
                    // Update is done only if there is a change in value
                    JSProf.LMC(19303, this, 'set').set("complete", JSProf.LMC(19301, this.todos, 'get').get("length") - JSProf.LRE(19302, value));    // Make the count of complete items reflect the new count of incomplete items
                }
            }, 12),
            _completeSetter: JSProf.LNF(19313, function (value) {
                // summary:
                //		dojo/Stateful setter function for complete property.
                // description:
                //		This setter function keeps incomplete property up to date.
                // value: Number
                //		The new count of complete todo items.
                var changed = JSProf.LGD(19305, this, 'complete').complete != JSProf.LRE(19306, value);
                JSProf.LPD(19308, this, 'complete').complete = JSProf.LRSP(19308, JSProf.LRE(19307, value));
                // Assign the new value
                if (JSProf.LRE(19309, changed)) {
                    // Update is done only if there is a change in value
                    JSProf.LMC(19312, this, 'set').set("incomplete", JSProf.LMC(19310, this.todos, 'get').get("length") - JSProf.LRE(19311, value));    // Make the count of incomplete items reflect the new count of complete items
                }
            }, 12),
            destroy: JSProf.LNF(19315, function () {
                console.log("remover.....................................watchhandler destory ");
                JSProf.LMC(19314, this._elementWatchHandle, 'remove').remove();    // Stop watching for adds/removals of todo items
            }, 12)
        }, 11));
    }, 12);
}, 12));