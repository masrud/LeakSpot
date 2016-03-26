JSProf.LFC(27199, define, false)(JSProf.LNE(27120, [
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/when",
    "./getPlainValue",
    "./EditModelRefController",
    "./StoreRefController"
], 10), JSProf.LNF(27198, function (declare, lang, when, getPlainValue, EditModelRefController, StoreRefController) {
    return JSProf.LFC(27197, declare, false)("dojox.mvc.EditStoreRefController", JSProf.LNE(27123, [
        JSProf.LRE(27121, StoreRefController),
        JSProf.LRE(27122, EditModelRefController)
    ], 10), JSProf.LNE(27196, {
        getPlainValueOptions: null,
        _removals: JSProf.LNE(27124, [], 10),
        _resultsWatchHandle: null,
        _refSourceModelProp: "sourceModel",
        queryStore: JSProf.LNF(27161, function (query, options) {
            // summary:
            //		Queries the store for objects.
            // query: Object
            //		The query to use for retrieving objects from the store.
            // options: dojo/store/api/Store.QueryOptions?
            //		The optional arguments to apply to the resultset.
            // returns: dojo/store/api/Store.QueryResults
            //		The results of the query, extended with iterative methods.
            if (!JSProf.LGD(27127, JSProf.LGD(27125, this, 'store').store || JSProf.LNE(27126, {}, 11), 'query').query) {
                return;
            }
            if (JSProf.LGD(27128, this, '_resultsWatchHandle')._resultsWatchHandle) {
                JSProf.LMC(27129, this._resultsWatchHandle, 'unwatch').unwatch();
            }
            JSProf.LPD(27131, this, '_removals')._removals = JSProf.LRSP(27131, JSProf.LNE(27130, [], 10));
            var _self = this, queryResult = JSProf.LMC(27132, this, 'inherited').inherited(arguments), result = JSProf.LFC(27146, when, false)(JSProf.LRE(27133, queryResult), JSProf.LNF(27145, function (results) {
                    if (JSProf.LGD(27134, _self, '_beingDestroyed')._beingDestroyed) {
                        return;
                    }
                    if (JSProf.LMC(27136, lang, 'isArray').isArray(JSProf.LRE(27135, results))) {
                        JSProf.LPD(27143, _self, '_resultsWatchHandle')._resultsWatchHandle = JSProf.LRSP(27143, JSProf.LMC(27142, results, 'watchElements').watchElements(JSProf.LNF(27141, function (idx, removals, adds) {
                            JSProf.LMC(27140, JSProf.LNE(27137, [], 10).push, 'apply').apply(JSProf.LGD(27138, _self, '_removals')._removals, JSProf.LRE(27139, removals));
                        }, 12)));
                    }
                    return JSProf.LRE(27144, results);
                }, 12));
            if (JSProf.LGD(27147, result, 'then').then) {
                result = JSProf.LWR(27150, result, JSProf.LMC(27149, lang, 'delegate').delegate(JSProf.LRE(27148, result)));
            }
            // For dojo/store/Observable, which adds a function to query result
            for (var s in JSProf.LRE(27151, queryResult)) {
                if (JSProf.LFC(27153, isNaN, false)(JSProf.LRE(27152, s)) && JSProf.LMC(27155, queryResult, 'hasOwnProperty').hasOwnProperty(JSProf.LRE(27154, s)) && JSProf.LMC(27157, lang, 'isFunction').isFunction(JSProf.LGE(27156, queryResult, 's')[s])) {
                    JSProf.LPE(27159, result, 's')[s] = JSProf.LRPE(27159, JSProf.LGE(27158, queryResult, 's')[s]);
                }
            }
            return JSProf.LRE(27160, result);
        }, 12),
        getStore: JSProf.LNF(27165, function (id, options) {
            // summary:
            //		Retrieves an object by its identity.
            // id: Number
            //		The identity to use to lookup the object.
            // options: Object
            //		The options for dojo/store/*/get().
            // returns: Object
            //		The object in the store that matches the given id.
            if (JSProf.LGD(27162, this, '_resultsWatchHandle')._resultsWatchHandle) {
                JSProf.LMC(27163, this._resultsWatchHandle, 'unwatch').unwatch();
            }
            return JSProf.LMC(27164, this, 'inherited').inherited(arguments);
        }, 12),
        commit: JSProf.LNF(27187, function () {
            // summary:
            //		Send the change back to the data source.
            if (JSProf.LGD(27166, this, '_removals')._removals) {
                for (var i = 0; JSProf.LRE(27167, i) < JSProf.LGD(27168, this._removals, 'length').length; i++) {
                    JSProf.LMC(27171, this.store, 'remove').remove(JSProf.LMC(27170, this.store, 'getIdentity').getIdentity(JSProf.LGE(27169, this._removals, 'i')[i]));
                }
                JSProf.LPD(27173, this, '_removals')._removals = JSProf.LRSP(27173, JSProf.LNE(27172, [], 10));
            }
            var data = JSProf.LFC(27177, getPlainValue, false)(JSProf.LMC(27175, this, 'get').get(JSProf.LGD(27174, this, '_refEditModelProp')._refEditModelProp), JSProf.LGD(27176, this, 'getPlainValueOptions').getPlainValueOptions);
            if (JSProf.LMC(27179, lang, 'isArray').isArray(JSProf.LRE(27178, data))) {
                for (var i = 0; JSProf.LRE(27180, i) < JSProf.LGD(27181, data, 'length').length; i++) {
                    JSProf.LMC(27183, this.store, 'put').put(JSProf.LGE(27182, data, 'i')[i]);
                }
            } else {
                JSProf.LMC(27185, this.store, 'put').put(JSProf.LRE(27184, data));
            }
            JSProf.LMC(27186, this, 'inherited').inherited(arguments);
        }, 12),
        reset: JSProf.LNF(27191, function () {
            // summary:
            //		Change the model back to its original state.
            JSProf.LMC(27188, this, 'inherited').inherited(arguments);
            JSProf.LPD(27190, this, '_removals')._removals = JSProf.LRSP(27190, JSProf.LNE(27189, [], 10));
        }, 12),
        destroy: JSProf.LNF(27195, function () {
            // summary:
            //		Clean up model watch handle as this object is destroyed.
            if (JSProf.LGD(27192, this, '_resultsWatchHandle')._resultsWatchHandle) {
                JSProf.LMC(27193, this._resultsWatchHandle, 'unwatch').unwatch();
            }
            JSProf.LMC(27194, this, 'inherited').inherited(arguments);
        }, 12)
    }, 11));
}, 12));