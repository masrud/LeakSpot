JSProf.LFC(19504, define, false)(JSProf.LNE(19439, [
    "dojo/_base/array",
    "dojo/_base/lang",
    "dojox/mvc/getStateful"
], 10), JSProf.LNF(19503, function (array, lang, getStateful) {
    var defaultData = JSProf.LNE(19441, {
            id: "todos-dojo",
            todos: JSProf.LNE(19440, [], 10),
            incomplete: 0,
            complete: 0
        }, 11);
    var seq = 0;
    // The sequence number to generate unique IDs of todo items
    return JSProf.LNF(19502, function (data) {
        JSProf.LFD(19501, assignPropertiesToNewItem);
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
            JSProf.LMC(19452, lang, 'mixin').mixin(JSProf.LRE(19442, item), JSProf.LNE(19451, {
                _completedSetter: JSProf.LNF(19450, function (value) {
                    // summary
                    //		The setter function for completed property, which keeps complete/incomplete properties of the data model up to date.
                    // value: Boolean
                    //		True means this todo item is completed. Otherwise means this todo item is incomplete.
                    if (JSProf.LGD(19443, this, 'completed').completed ^ JSProf.LRE(19444, value)) {
                        // Update is done only if there is a flip in value
                        // If the todo item is turned to completed state, increase the count of completed items.
                        // If the todo item is turned to incomplete state, decrease the count of completed items.
                        JSProf.LMC(19447, statefulData, 'set').set("complete", JSProf.LMC(19445, statefulData, 'get').get("complete") + (JSProf.LRE(19446, value) ? 1 : -1));
                    }
                    JSProf.LPD(19449, this, 'completed').completed = JSProf.LRSP(19449, JSProf.LRE(19448, value));    // Assign the new value
                }, 12),
                uniqueId: "TODO-" + seq++
            }, 11));
        }
        var statefulData = JSProf.LFC(19455, getStateful, false)(JSProf.LRE(19453, data) || JSProf.LRE(19454, defaultData));
        // Convert a plain object to dojo/Stateful, hierarchically. Use the default data if (lastly saved) data is not there
        JSProf.LMC(19458, array, 'forEach').forEach(JSProf.LGD(19456, statefulData, 'todos').todos, JSProf.LRE(19457, assignPropertiesToNewItem));
        // Add additional properties to todo items
        return JSProf.LMC(19500, lang, 'mixin').mixin(JSProf.LRE(19459, statefulData), JSProf.LNE(19499, {
            _elementWatchHandle: JSProf.LMC(19478, statefulData.todos, 'watchElements').watchElements(JSProf.LNF(19477, function (idx, removals, adds) {
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
                var complete = JSProf.LMC(19460, statefulData, 'get').get("complete");
                JSProf.LMC(19464, array, 'forEach').forEach(JSProf.LRE(19461, removals), JSProf.LNF(19463, function (item) {
                    complete -= !!JSProf.LGD(19462, item, 'completed').completed;
                }, 12));
                // If completed items are removed, decrease the count of completed items
                JSProf.LMC(19468, array, 'forEach').forEach(JSProf.LRE(19465, adds), JSProf.LNF(19467, function (item) {
                    complete += !!JSProf.LGD(19466, item, 'completed').completed;
                }, 12));
                // If completed items are added, increase the count of completed items
                JSProf.LMC(19470, statefulData, 'set').set("complete", JSProf.LRE(19469, complete));
                JSProf.LMC(19473, statefulData, 'set').set("incomplete", JSProf.LMC(19471, statefulData.todos, 'get').get("length") - JSProf.LRE(19472, complete));
                JSProf.LMC(19476, array, 'forEach').forEach(JSProf.LRE(19474, adds), JSProf.LRE(19475, assignPropertiesToNewItem));    // Add additional properties to newly added todo items
            }, 12)),
            _incompleteSetter: JSProf.LNF(19487, function (value) {
                // summary:
                //		dojo/Stateful setter function for incomplete property.
                // description:
                //		This setter function keeps complete property up to date.
                // value: Number
                //		The new count of incomplete todo items.
                var changed = JSProf.LGD(19479, this, 'incomplete').incomplete != JSProf.LRE(19480, value);
                JSProf.LPD(19482, this, 'incomplete').incomplete = JSProf.LRSP(19482, JSProf.LRE(19481, value));
                // Assign the new value
                if (JSProf.LRE(19483, changed)) {
                    // Update is done only if there is a change in value
                    JSProf.LMC(19486, this, 'set').set("complete", JSProf.LMC(19484, this.todos, 'get').get("length") - JSProf.LRE(19485, value));    // Make the count of complete items reflect the new count of incomplete items
                }
            }, 12),
            _completeSetter: JSProf.LNF(19496, function (value) {
                // summary:
                //		dojo/Stateful setter function for complete property.
                // description:
                //		This setter function keeps incomplete property up to date.
                // value: Number
                //		The new count of complete todo items.
                var changed = JSProf.LGD(19488, this, 'complete').complete != JSProf.LRE(19489, value);
                JSProf.LPD(19491, this, 'complete').complete = JSProf.LRSP(19491, JSProf.LRE(19490, value));
                // Assign the new value
                if (JSProf.LRE(19492, changed)) {
                    // Update is done only if there is a change in value
                    JSProf.LMC(19495, this, 'set').set("incomplete", JSProf.LMC(19493, this.todos, 'get').get("length") - JSProf.LRE(19494, value));    // Make the count of incomplete items reflect the new count of complete items
                }
            }, 12),
            destroy: JSProf.LNF(19498, function () {
                console.log("remover.....................................watchhandler destory ");
                JSProf.LMC(19497, this._elementWatchHandle, 'remove').remove();    // Stop watching for adds/removals of todo items
            }, 12)
        }, 11));
    }, 12);
}, 12));