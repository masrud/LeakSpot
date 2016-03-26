JSProf.LFC(34764, define, false)(JSProf.LNE(34681, [
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/when",
    "./getStateful",
    "./ModelRefController"
], 10), JSProf.LNF(34763, function (declare, lang, when, getStateful, ModelRefController) {
    return JSProf.LFC(34762, declare, false)("dojox.mvc.StoreRefController", JSProf.LRE(34682, ModelRefController), JSProf.LNE(34761, {
        store: null,
        getStatefulOptions: null,
        _refSourceModelProp: "model",
        queryStore: JSProf.LNF(34717, function (query, options) {
            // summary:
            //		Queries the store for objects.
            // query: Object
            //		The query to use for retrieving objects from the store.
            // options: dojo/store/api/Store.QueryOptions?
            //		The optional arguments to apply to the resultset.
            // returns: dojo/store/api/Store.QueryResults
            //		The results of the query, extended with iterative methods.
            if (!JSProf.LGD(34685, JSProf.LGD(34683, this, 'store').store || JSProf.LNE(34684, {}, 11), 'query').query) {
                return;
            }
            if (JSProf.LGD(34686, this, '_queryObserveHandle')._queryObserveHandle) {
                JSProf.LMC(34687, this._queryObserveHandle, 'cancel').cancel();
            }
            var _self = this, queryResult = JSProf.LMC(34690, this.store, 'query').query(JSProf.LRE(34688, query), JSProf.LRE(34689, options)), result = JSProf.LFC(34702, when, false)(JSProf.LRE(34691, queryResult), JSProf.LNF(34701, function (results) {
                    if (JSProf.LGD(34692, _self, '_beingDestroyed')._beingDestroyed) {
                        return;
                    }
                    results = JSProf.LWR(34696, results, JSProf.LFC(34695, getStateful, false)(JSProf.LRE(34693, results), JSProf.LGD(34694, _self, 'getStatefulOptions').getStatefulOptions));
                    JSProf.LMC(34699, _self, 'set').set(JSProf.LGD(34697, _self, '_refSourceModelProp')._refSourceModelProp, JSProf.LRE(34698, results));
                    return JSProf.LRE(34700, results);
                }, 12));
            if (JSProf.LGD(34703, result, 'then').then) {
                result = JSProf.LWR(34706, result, JSProf.LMC(34705, lang, 'delegate').delegate(JSProf.LRE(34704, result)));
            }
            // For dojo/store/Observable, which adds a function to query result
            for (var s in JSProf.LRE(34707, queryResult)) {
                if (JSProf.LFC(34709, isNaN, false)(JSProf.LRE(34708, s)) && JSProf.LMC(34711, queryResult, 'hasOwnProperty').hasOwnProperty(JSProf.LRE(34710, s)) && JSProf.LMC(34713, lang, 'isFunction').isFunction(JSProf.LGE(34712, queryResult, 's')[s])) {
                    JSProf.LPE(34715, result, 's')[s] = JSProf.LRPE(34715, JSProf.LGE(34714, queryResult, 's')[s]);
                }
            }
            return JSProf.LRE(34716, result);
        }, 12),
        getStore: JSProf.LNF(34739, function (id, options) {
            // summary:
            //		Retrieves an object by its identity.
            // id: Number
            //		The identity to use to lookup the object.
            // options: Object
            //		The options for dojo/store.*.get().
            // returns: Object
            //		The object in the store that matches the given id.
            if (!JSProf.LGD(34720, JSProf.LGD(34718, this, 'store').store || JSProf.LNE(34719, {}, 11), 'get').get) {
                return;
            }
            if (JSProf.LGD(34721, this, '_queryObserveHandle')._queryObserveHandle) {
                JSProf.LMC(34722, this._queryObserveHandle, 'cancel').cancel();
            }
            var _self = this;
            result = JSProf.LWU(34737, JSProf.I(typeof result === 'undefined' ? undefined : result), JSProf.LFC(34736, when, false)(JSProf.LMC(34725, this.store, 'get').get(JSProf.LRE(34723, id), JSProf.LRE(34724, options)), JSProf.LNF(34735, function (result) {
                if (JSProf.LGD(34726, _self, '_beingDestroyed')._beingDestroyed) {
                    return;
                }
                result = JSProf.LWR(34730, result, JSProf.LFC(34729, getStateful, false)(JSProf.LRE(34727, result), JSProf.LGD(34728, _self, 'getStatefulOptions').getStatefulOptions));
                JSProf.LMC(34733, _self, 'set').set(JSProf.LGD(34731, _self, '_refSourceModelProp')._refSourceModelProp, JSProf.LRE(34732, result));
                return JSProf.LRE(34734, result);
            }, 12)));
            return JSProf.LRU(34738, typeof result === 'undefined' ? undefined : result);
        }, 12),
        putStore: JSProf.LNF(34746, function (object, options) {
            // summary:
            //		Stores an object.
            // object: Object
            //		The object to store.
            // options: dojo/store/api/Store.PutDirectives?
            //		Additional metadata for storing the data.  Includes an "id" property if a specific id is to be used.
            // returns: Number
            if (!JSProf.LGD(34742, JSProf.LGD(34740, this, 'store').store || JSProf.LNE(34741, {}, 11), 'put').put) {
                return;
            }
            return JSProf.LMC(34745, this.store, 'put').put(JSProf.LRE(34743, object), JSProf.LRE(34744, options));
        }, 12),
        addStore: JSProf.LNF(34753, function (object, options) {
            // summary:
            //		Creates an object, throws an error if the object already exists.
            // object: Object
            //		The object to store.
            // options: dojo/store/api/Store.PutDirectives?
            //		Additional metadata for storing the data.  Includes an "id" property if a specific id is to be used.
            // returns: Number
            if (!JSProf.LGD(34749, JSProf.LGD(34747, this, 'store').store || JSProf.LNE(34748, {}, 11), 'add').add) {
                return;
            }
            return JSProf.LMC(34752, this.store, 'add').add(JSProf.LRE(34750, object), JSProf.LRE(34751, options));
        }, 12),
        removeStore: JSProf.LNF(34760, function (id, options) {
            // summary:
            //		Deletes an object by its identity
            // id: Number
            //		The identity to use to delete the object
            // options: Object
            //		The options for dojo/store/*.remove().
            // returns: Boolean
            //		Returns true if an object was removed, falsy (undefined) if no object matched the id.
            if (!JSProf.LGD(34756, JSProf.LGD(34754, this, 'store').store || JSProf.LNE(34755, {}, 11), 'remove').remove) {
                return;
            }
            return JSProf.LMC(34759, this.store, 'remove').remove(JSProf.LRE(34757, id), JSProf.LRE(34758, options));
        }, 12)
    }, 11));
}, 12));