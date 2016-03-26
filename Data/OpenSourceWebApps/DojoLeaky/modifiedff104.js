JSProf.LFC(34762, define, false)(JSProf.LNE(34679, [
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/when",
    "./getStateful",
    "./ModelRefController"
], 10), JSProf.LNF(34761, function (declare, lang, when, getStateful, ModelRefController) {
    return JSProf.LFC(34760, declare, false)("dojox.mvc.StoreRefController", JSProf.LRE(34680, ModelRefController), JSProf.LNE(34759, {
        store: null,
        getStatefulOptions: null,
        _refSourceModelProp: "model",
        queryStore: JSProf.LNF(34715, function (query, options) {
            // summary:
            //		Queries the store for objects.
            // query: Object
            //		The query to use for retrieving objects from the store.
            // options: dojo/store/api/Store.QueryOptions?
            //		The optional arguments to apply to the resultset.
            // returns: dojo/store/api/Store.QueryResults
            //		The results of the query, extended with iterative methods.
            if (!JSProf.LGD(34683, JSProf.LGD(34681, this, 'store').store || JSProf.LNE(34682, {}, 11), 'query').query) {
                return;
            }
            if (JSProf.LGD(34684, this, '_queryObserveHandle')._queryObserveHandle) {
                JSProf.LMC(34685, this._queryObserveHandle, 'cancel').cancel();
            }
            var _self = this, queryResult = JSProf.LMC(34688, this.store, 'query').query(JSProf.LRE(34686, query), JSProf.LRE(34687, options)), result = JSProf.LFC(34700, when, false)(JSProf.LRE(34689, queryResult), JSProf.LNF(34699, function (results) {
                    if (JSProf.LGD(34690, _self, '_beingDestroyed')._beingDestroyed) {
                        return;
                    }
                    results = JSProf.LWR(34694, results, JSProf.LFC(34693, getStateful, false)(JSProf.LRE(34691, results), JSProf.LGD(34692, _self, 'getStatefulOptions').getStatefulOptions));
                    JSProf.LMC(34697, _self, 'set').set(JSProf.LGD(34695, _self, '_refSourceModelProp')._refSourceModelProp, JSProf.LRE(34696, results));
                    return JSProf.LRE(34698, results);
                }, 12));
            if (JSProf.LGD(34701, result, 'then').then) {
                result = JSProf.LWR(34704, result, JSProf.LMC(34703, lang, 'delegate').delegate(JSProf.LRE(34702, result)));
            }
            // For dojo/store/Observable, which adds a function to query result
            for (var s in JSProf.LRE(34705, queryResult)) {
                if (JSProf.LFC(34707, isNaN, false)(JSProf.LRE(34706, s)) && JSProf.LMC(34709, queryResult, 'hasOwnProperty').hasOwnProperty(JSProf.LRE(34708, s)) && JSProf.LMC(34711, lang, 'isFunction').isFunction(JSProf.LGE(34710, queryResult, 's')[s])) {
                    JSProf.LPE(34713, result, 's')[s] = JSProf.LRPE(34713, JSProf.LGE(34712, queryResult, 's')[s]);
                }
            }
            return JSProf.LRE(34714, result);
        }, 12),
        getStore: JSProf.LNF(34737, function (id, options) {
            // summary:
            //		Retrieves an object by its identity.
            // id: Number
            //		The identity to use to lookup the object.
            // options: Object
            //		The options for dojo/store.*.get().
            // returns: Object
            //		The object in the store that matches the given id.
            if (!JSProf.LGD(34718, JSProf.LGD(34716, this, 'store').store || JSProf.LNE(34717, {}, 11), 'get').get) {
                return;
            }
            if (JSProf.LGD(34719, this, '_queryObserveHandle')._queryObserveHandle) {
                JSProf.LMC(34720, this._queryObserveHandle, 'cancel').cancel();
            }
            var _self = this;
            result = JSProf.LWU(34735, JSProf.I(typeof result === 'undefined' ? undefined : result), JSProf.LFC(34734, when, false)(JSProf.LMC(34723, this.store, 'get').get(JSProf.LRE(34721, id), JSProf.LRE(34722, options)), JSProf.LNF(34733, function (result) {
                if (JSProf.LGD(34724, _self, '_beingDestroyed')._beingDestroyed) {
                    return;
                }
                result = JSProf.LWR(34728, result, JSProf.LFC(34727, getStateful, false)(JSProf.LRE(34725, result), JSProf.LGD(34726, _self, 'getStatefulOptions').getStatefulOptions));
                JSProf.LMC(34731, _self, 'set').set(JSProf.LGD(34729, _self, '_refSourceModelProp')._refSourceModelProp, JSProf.LRE(34730, result));
                return JSProf.LRE(34732, result);
            }, 12)));
            return JSProf.LRU(34736, typeof result === 'undefined' ? undefined : result);
        }, 12),
        putStore: JSProf.LNF(34744, function (object, options) {
            // summary:
            //		Stores an object.
            // object: Object
            //		The object to store.
            // options: dojo/store/api/Store.PutDirectives?
            //		Additional metadata for storing the data.  Includes an "id" property if a specific id is to be used.
            // returns: Number
            if (!JSProf.LGD(34740, JSProf.LGD(34738, this, 'store').store || JSProf.LNE(34739, {}, 11), 'put').put) {
                return;
            }
            return JSProf.LMC(34743, this.store, 'put').put(JSProf.LRE(34741, object), JSProf.LRE(34742, options));
        }, 12),
        addStore: JSProf.LNF(34751, function (object, options) {
            // summary:
            //		Creates an object, throws an error if the object already exists.
            // object: Object
            //		The object to store.
            // options: dojo/store/api/Store.PutDirectives?
            //		Additional metadata for storing the data.  Includes an "id" property if a specific id is to be used.
            // returns: Number
            if (!JSProf.LGD(34747, JSProf.LGD(34745, this, 'store').store || JSProf.LNE(34746, {}, 11), 'add').add) {
                return;
            }
            return JSProf.LMC(34750, this.store, 'add').add(JSProf.LRE(34748, object), JSProf.LRE(34749, options));
        }, 12),
        removeStore: JSProf.LNF(34758, function (id, options) {
            // summary:
            //		Deletes an object by its identity
            // id: Number
            //		The identity to use to delete the object
            // options: Object
            //		The options for dojo/store/*.remove().
            // returns: Boolean
            //		Returns true if an object was removed, falsy (undefined) if no object matched the id.
            if (!JSProf.LGD(34754, JSProf.LGD(34752, this, 'store').store || JSProf.LNE(34753, {}, 11), 'remove').remove) {
                return;
            }
            return JSProf.LMC(34757, this.store, 'remove').remove(JSProf.LRE(34755, id), JSProf.LRE(34756, options));
        }, 12)
    }, 11));
}, 12));