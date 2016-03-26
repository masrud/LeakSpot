/**
* Original source from https://gist.github.com/880822
* Converted to AMD-baseless format
*/
JSProf.LFC(19323, define, false)(JSProf.LNE(19258, [
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/_base/json",
    "dojo/store/util/QueryResults",
    "dojo/store/util/SimpleQueryEngine"
], 10), JSProf.LNF(19322, function (declare, lang, json, QueryResults, SimpleQueryEngine) {
    return JSProf.LFC(19321, declare, false)(null, JSProf.LNE(19320, {
        constructor: JSProf.LNF(19266, function (options) {
            // summary:
            //		localStorage based object store.
            // options:
            //		This provides any configuration information that will be mixed into the store.
            // 		This should generally include the data property to provide the starting set of data.
            if (!JSProf.LGD(19259, window, 'localStorage').localStorage) {
                throw JSProf.LFC(19260, Error, false)("LocalStorage not available on this device");
            }
            JSProf.LMC(19262, lang, 'mixin').mixin(this, JSProf.LRE(19261, options));
            JSProf.LMC(19265, this, 'setData').setData(JSProf.LGD(19263, this, 'data').data || JSProf.LNE(19264, [], 10));
        }, 12),
        idProperty: "id",
        queryEngine: SimpleQueryEngine,
        get: JSProf.LNF(19270, function (id) {
            //	summary:
            //		Retrieves an object by its identity
            //	id: Number
            //		The identity to use to lookup the object
            //	returns: Object
            //		The object in the store that matches the given id.
            return JSProf.LMC(19269, json, 'fromJson').fromJson(JSProf.LMC(19268, localStorage, 'getItem').getItem(JSProf.LRE(19267, id)));
        }, 12),
        getIdentity: JSProf.LNF(19272, function (object) {
            // 	summary:
            //		Returns an object's identity
            // 	object: Object
            //		The object to get the identity from
            //	returns: Number
            return JSProf.LGE(19271, object, JSProf.TMPS.t88540f3d668a04bdf372bb791bc0379473761ebb = this.idProperty)[JSProf.TMPS.t88540f3d668a04bdf372bb791bc0379473761ebb];
        }, 12),
        put: JSProf.LNF(19281, function (object, options) {
            // 	summary:
            //		Stores an object
            // 	object: Object
            //		The object to store.
            // 	options: Object?
            //		Additional metadata for storing the data.  Includes an "id"
            //		property if a specific id is to be used.
            //	returns: Number
            var id = JSProf.LRE(19273, options) && JSProf.LGD(19274, options, 'id').id || JSProf.LGE(19275, object, JSProf.TMPS.t88540f3d668a04bdf372bb791bc0379473761ebb = this.idProperty)[JSProf.TMPS.t88540f3d668a04bdf372bb791bc0379473761ebb] || Math.random();
            JSProf.LMC(19279, localStorage, 'setItem').setItem(JSProf.LRE(19276, id), JSProf.LMC(19278, json, 'toJson').toJson(JSProf.LRE(19277, object)));
            return JSProf.LRE(19280, id);
        }, 12),
        add: JSProf.LNF(19289, function (object, options) {
            // 	summary:
            //		Creates an object, throws an error if the object already exists
            // 	object: Object
            //		The object to store.
            // 	options: Object?
            //		Additional metadata for storing the data.  Includes an "id"
            //		property if a specific id is to be used.
            //	returns: Number
            if (JSProf.LMC(19283, this, 'get').get(JSProf.LGE(19282, object, JSProf.TMPS.t88540f3d668a04bdf372bb791bc0379473761ebb = this.idProperty)[JSProf.TMPS.t88540f3d668a04bdf372bb791bc0379473761ebb])) {
                throw JSProf.LNE(19285, new (JSProf.LFC(19284, Error, true))("Object already exists"), 'Error');
            }
            return JSProf.LMC(19288, this, 'put').put(JSProf.LRE(19286, object), JSProf.LRE(19287, options));
        }, 12),
        remove: JSProf.LNF(19292, function (id) {
            // 	summary:
            //		Deletes an object by its identity
            // 	id: Number
            //		The identity to use to delete the object
            JSProf.LMC(19291, localStorage, 'removeItem').removeItem(JSProf.LRE(19290, id));
        }, 12),
        query: JSProf.LNF(19306, function (query, options) {
            // 	summary:
            //		Queries the store for objects.
            // 	query: Object
            //		The query to use for retrieving objects from the store.
            //	options: dojo.store.util.SimpleQueryEngine.__queryOptions?
            //		The optional arguments to apply to the resultset.
            //	returns: dojo.store.util.QueryResults
            //		The results of the query, extended with iterative methods.
            //
            // 	example:
            // 		Given the following store:
            //
            // 	|	var store = new dojo.store.LocalStorage({
            // 	|		data: [
            // 	|			{id: 1, name: "one", prime: false },
            //	|			{id: 2, name: "two", even: true, prime: true},
            //	|			{id: 3, name: "three", prime: true},
            //	|			{id: 4, name: "four", even: true, prime: false},
            //	|			{id: 5, name: "five", prime: true}
            //	|		]
            //	|	});
            //
            //	...find all items where "prime" is true:
            //
            //	|	var results = store.query({ prime: true });
            //
            //	...or find all items where "even" is true:
            //
            //	|	var results = store.query({ even: true });
            var data = JSProf.LNE(19293, [], 10);
            for (var i = 0; JSProf.LRE(19294, i) < JSProf.LGD(19295, localStorage, 'length').length; i++) {
                JSProf.LMC(19299, data, 'push').push(JSProf.LMC(19298, this, 'get').get(JSProf.LMC(19297, localStorage, 'key').key(JSProf.LRE(19296, i))));
            }
            return JSProf.LFC(19305, QueryResults, false)(JSProf.LFC(19304, JSProf.LMC(19302, this, 'queryEngine').queryEngine(JSProf.LRE(19300, query), JSProf.LRE(19301, options)), false)(JSProf.LRE(19303, data)));
        }, 12),
        setData: JSProf.LNF(19319, function (data) {
            // 	summary:
            //		Sets the given data as the source for this store, and indexes it
            //	data: Object[]
            //		An array of objects to use as the source of data.
            if (JSProf.LGD(19307, data, 'items').items) {
                // just for convenience with the data format IFRS expects
                JSProf.LPD(19309, this, 'idProperty').idProperty = JSProf.LRSP(19309, JSProf.LGD(19308, data, 'identifier').identifier);
                data = JSProf.LWR(19312, data, JSProf.LPD(19311, this, 'data').data = JSProf.LRSP(19311, JSProf.LGD(19310, data, 'items').items));
            }
            for (var i = 0, l = JSProf.LGD(19313, data, 'length').length; JSProf.LRE(19314, i) < JSProf.LRE(19315, l); i++) {
                var object = JSProf.LGE(19316, data, 'i')[i];
                JSProf.LMC(19318, this, 'put').put(JSProf.LRE(19317, object));
            }
        }, 12)
    }, 11));
}, 12));