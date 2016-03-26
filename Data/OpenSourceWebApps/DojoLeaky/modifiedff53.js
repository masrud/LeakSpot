/**
* Original source from https://gist.github.com/880822
* Converted to AMD-baseless format
*/
JSProf.LFC(19498, define, false)(JSProf.LNE(19433, [
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/_base/json",
    "dojo/store/util/QueryResults",
    "dojo/store/util/SimpleQueryEngine"
], 10), JSProf.LNF(19497, function (declare, lang, json, QueryResults, SimpleQueryEngine) {
    return JSProf.LFC(19496, declare, false)(null, JSProf.LNE(19495, {
        constructor: JSProf.LNF(19441, function (options) {
            // summary:
            //		localStorage based object store.
            // options:
            //		This provides any configuration information that will be mixed into the store.
            // 		This should generally include the data property to provide the starting set of data.
            if (!JSProf.LGD(19434, window, 'localStorage').localStorage) {
                throw JSProf.LFC(19435, Error, false)("LocalStorage not available on this device");
            }
            JSProf.LMC(19437, lang, 'mixin').mixin(this, JSProf.LRE(19436, options));
            JSProf.LMC(19440, this, 'setData').setData(JSProf.LGD(19438, this, 'data').data || JSProf.LNE(19439, [], 10));
        }, 12),
        idProperty: "id",
        queryEngine: SimpleQueryEngine,
        get: JSProf.LNF(19445, function (id) {
            //	summary:
            //		Retrieves an object by its identity
            //	id: Number
            //		The identity to use to lookup the object
            //	returns: Object
            //		The object in the store that matches the given id.
            return JSProf.LMC(19444, json, 'fromJson').fromJson(JSProf.LMC(19443, localStorage, 'getItem').getItem(JSProf.LRE(19442, id)));
        }, 12),
        getIdentity: JSProf.LNF(19447, function (object) {
            // 	summary:
            //		Returns an object's identity
            // 	object: Object
            //		The object to get the identity from
            //	returns: Number
            return JSProf.LGE(19446, object, JSProf.TMPS.t88540f3d668a04bdf372bb791bc0379473761ebb = this.idProperty)[JSProf.TMPS.t88540f3d668a04bdf372bb791bc0379473761ebb];
        }, 12),
        put: JSProf.LNF(19456, function (object, options) {
            // 	summary:
            //		Stores an object
            // 	object: Object
            //		The object to store.
            // 	options: Object?
            //		Additional metadata for storing the data.  Includes an "id"
            //		property if a specific id is to be used.
            //	returns: Number
            var id = JSProf.LRE(19448, options) && JSProf.LGD(19449, options, 'id').id || JSProf.LGE(19450, object, JSProf.TMPS.t88540f3d668a04bdf372bb791bc0379473761ebb = this.idProperty)[JSProf.TMPS.t88540f3d668a04bdf372bb791bc0379473761ebb] || Math.random();
            JSProf.LMC(19454, localStorage, 'setItem').setItem(JSProf.LRE(19451, id), JSProf.LMC(19453, json, 'toJson').toJson(JSProf.LRE(19452, object)));
            return JSProf.LRE(19455, id);
        }, 12),
        add: JSProf.LNF(19464, function (object, options) {
            // 	summary:
            //		Creates an object, throws an error if the object already exists
            // 	object: Object
            //		The object to store.
            // 	options: Object?
            //		Additional metadata for storing the data.  Includes an "id"
            //		property if a specific id is to be used.
            //	returns: Number
            if (JSProf.LMC(19458, this, 'get').get(JSProf.LGE(19457, object, JSProf.TMPS.t88540f3d668a04bdf372bb791bc0379473761ebb = this.idProperty)[JSProf.TMPS.t88540f3d668a04bdf372bb791bc0379473761ebb])) {
                throw JSProf.LNE(19460, new (JSProf.LFC(19459, Error, true))("Object already exists"), 'Error');
            }
            return JSProf.LMC(19463, this, 'put').put(JSProf.LRE(19461, object), JSProf.LRE(19462, options));
        }, 12),
        remove: JSProf.LNF(19467, function (id) {
            // 	summary:
            //		Deletes an object by its identity
            // 	id: Number
            //		The identity to use to delete the object
            JSProf.LMC(19466, localStorage, 'removeItem').removeItem(JSProf.LRE(19465, id));
        }, 12),
        query: JSProf.LNF(19481, function (query, options) {
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
            var data = JSProf.LNE(19468, [], 10);
            for (var i = 0; JSProf.LRE(19469, i) < JSProf.LGD(19470, localStorage, 'length').length; i++) {
                JSProf.LMC(19474, data, 'push').push(JSProf.LMC(19473, this, 'get').get(JSProf.LMC(19472, localStorage, 'key').key(JSProf.LRE(19471, i))));
            }
            return JSProf.LFC(19480, QueryResults, false)(JSProf.LFC(19479, JSProf.LMC(19477, this, 'queryEngine').queryEngine(JSProf.LRE(19475, query), JSProf.LRE(19476, options)), false)(JSProf.LRE(19478, data)));
        }, 12),
        setData: JSProf.LNF(19494, function (data) {
            // 	summary:
            //		Sets the given data as the source for this store, and indexes it
            //	data: Object[]
            //		An array of objects to use as the source of data.
            if (JSProf.LGD(19482, data, 'items').items) {
                // just for convenience with the data format IFRS expects
                JSProf.LPD(19484, this, 'idProperty').idProperty = JSProf.LRSP(19484, JSProf.LGD(19483, data, 'identifier').identifier);
                data = JSProf.LWR(19487, data, JSProf.LPD(19486, this, 'data').data = JSProf.LRSP(19486, JSProf.LGD(19485, data, 'items').items));
            }
            for (var i = 0, l = JSProf.LGD(19488, data, 'length').length; JSProf.LRE(19489, i) < JSProf.LRE(19490, l); i++) {
                var object = JSProf.LGE(19491, data, 'i')[i];
                JSProf.LMC(19493, this, 'put').put(JSProf.LRE(19492, object));
            }
        }, 12)
    }, 11));
}, 12));