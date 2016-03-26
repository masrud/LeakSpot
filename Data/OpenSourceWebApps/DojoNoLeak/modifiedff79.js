JSProf.LFC(27201, define, false)(JSProf.LNE(27122, [
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/when",
    "./getPlainValue",
    "./EditModelRefController",
    "./StoreRefController"
], 10), JSProf.LNF(27200, function (declare, lang, when, getPlainValue, EditModelRefController, StoreRefController) {
    return JSProf.LFC(27199, declare, false)("dojox.mvc.EditStoreRefController", JSProf.LNE(27125, [
        JSProf.LRE(27123, StoreRefController),
        JSProf.LRE(27124, EditModelRefController)
    ], 10), JSProf.LNE(27198, {
        getPlainValueOptions: null,
        _removals: JSProf.LNE(27126, [], 10),
        _resultsWatchHandle: null,
        _refSourceModelProp: "sourceModel",
        queryStore: JSProf.LNF(27163, function (query, options) {
            // summary:
            //		Queries the store for objects.
            // query: Object
            //		The query to use for retrieving objects from the store.
            // options: dojo/store/api/Store.QueryOptions?
            //		The optional arguments to apply to the resultset.
            // returns: dojo/store/api/Store.QueryResults
            //		The results of the query, extended with iterative methods.
            if (!JSProf.LGD(27129, JSProf.LGD(27127, this, 'store').store || JSProf.LNE(27128, {}, 11), 'query').query) {
                return;
            }
            if (JSProf.LGD(27130, this, '_resultsWatchHandle')._resultsWatchHandle) {
                JSProf.LMC(27131, this._resultsWatchHandle, 'unwatch').unwatch();
            }
            JSProf.LPD(27133, this, '_removals')._removals = JSProf.LRSP(27133, JSProf.LNE(27132, [], 10));
            var _self = this, queryResult = JSProf.LMC(27134, this, 'inherited').inherited(arguments), result = JSProf.LFC(27148, when, false)(JSProf.LRE(27135, queryResult), JSProf.LNF(27147, function (results) {
                    if (JSProf.LGD(27136, _self, '_beingDestroyed')._beingDestroyed) {
                        return;
                    }
                    if (JSProf.LMC(27138, lang, 'isArray').isArray(JSProf.LRE(27137, results))) {
                        JSProf.LPD(27145, _self, '_resultsWatchHandle')._resultsWatchHandle = JSProf.LRSP(27145, JSProf.LMC(27144, results, 'watchElements').watchElements(JSProf.LNF(27143, function (idx, removals, adds) {
                            JSProf.LMC(27142, JSProf.LNE(27139, [], 10).push, 'apply').apply(JSProf.LGD(27140, _self, '_removals')._removals, JSProf.LRE(27141, removals));
                        }, 12)));
                    }
                    return JSProf.LRE(27146, results);
                }, 12));
            if (JSProf.LGD(27149, result, 'then').then) {
                result = JSProf.LWR(27152, result, JSProf.LMC(27151, lang, 'delegate').delegate(JSProf.LRE(27150, result)));
            }
            // For dojo/store/Observable, which adds a function to query result
            for (var s in JSProf.LRE(27153, queryResult)) {
                if (JSProf.LFC(27155, isNaN, false)(JSProf.LRE(27154, s)) && JSProf.LMC(27157, queryResult, 'hasOwnProperty').hasOwnProperty(JSProf.LRE(27156, s)) && JSProf.LMC(27159, lang, 'isFunction').isFunction(JSProf.LGE(27158, queryResult, 's')[s])) {
                    JSProf.LPE(27161, result, 's')[s] = JSProf.LRPE(27161, JSProf.LGE(27160, queryResult, 's')[s]);
                }
            }
            return JSProf.LRE(27162, result);
        }, 12),
        getStore: JSProf.LNF(27167, function (id, options) {
            // summary:
            //		Retrieves an object by its identity.
            // id: Number
            //		The identity to use to lookup the object.
            // options: Object
            //		The options for dojo/store/*/get().
            // returns: Object
            //		The object in the store that matches the given id.
            if (JSProf.LGD(27164, this, '_resultsWatchHandle')._resultsWatchHandle) {
                JSProf.LMC(27165, this._resultsWatchHandle, 'unwatch').unwatch();
            }
            return JSProf.LMC(27166, this, 'inherited').inherited(arguments);
        }, 12),
        commit: JSProf.LNF(27189, function () {
            // summary:
            //		Send the change back to the data source.
            if (JSProf.LGD(27168, this, '_removals')._removals) {
                for (var i = 0; JSProf.LRE(27169, i) < JSProf.LGD(27170, this._removals, 'length').length; i++) {
                    JSProf.LMC(27173, this.store, 'remove').remove(JSProf.LMC(27172, this.store, 'getIdentity').getIdentity(JSProf.LGE(27171, this._removals, 'i')[i]));
                }
                JSProf.LPD(27175, this, '_removals')._removals = JSProf.LRSP(27175, JSProf.LNE(27174, [], 10));
            }
            var data = JSProf.LFC(27179, getPlainValue, false)(JSProf.LMC(27177, this, 'get').get(JSProf.LGD(27176, this, '_refEditModelProp')._refEditModelProp), JSProf.LGD(27178, this, 'getPlainValueOptions').getPlainValueOptions);
            if (JSProf.LMC(27181, lang, 'isArray').isArray(JSProf.LRE(27180, data))) {
                for (var i = 0; JSProf.LRE(27182, i) < JSProf.LGD(27183, data, 'length').length; i++) {
                    JSProf.LMC(27185, this.store, 'put').put(JSProf.LGE(27184, data, 'i')[i]);
                }
            } else {
                JSProf.LMC(27187, this.store, 'put').put(JSProf.LRE(27186, data));
            }
            JSProf.LMC(27188, this, 'inherited').inherited(arguments);
        }, 12),
        reset: JSProf.LNF(27193, function () {
            // summary:
            //		Change the model back to its original state.
            JSProf.LMC(27190, this, 'inherited').inherited(arguments);
            JSProf.LPD(27192, this, '_removals')._removals = JSProf.LRSP(27192, JSProf.LNE(27191, [], 10));
        }, 12),
        destroy: JSProf.LNF(27197, function () {
            // summary:
            //		Clean up model watch handle as this object is destroyed.
            if (JSProf.LGD(27194, this, '_resultsWatchHandle')._resultsWatchHandle) {
                JSProf.LMC(27195, this._resultsWatchHandle, 'unwatch').unwatch();
            }
            JSProf.LMC(27196, this, 'inherited').inherited(arguments);
        }, 12)
    }, 11));
}, 12));