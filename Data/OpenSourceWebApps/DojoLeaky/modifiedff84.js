JSProf.LFC(28585, define, false)(JSProf.LNE(28516, ["../../_base/array"], 10), JSProf.LNF(28584, function (arrayUtil) {
    // module:
    //		dojo/store/util/SimpleQueryEngine
    return JSProf.LNF(28583, function (query, options) {
        JSProf.LFD(28582, execute);
        // summary:
        //		Simple query engine that matches using filter functions, named filter
        //		functions or objects by name-value on a query object hash
        //
        // description:
        //		The SimpleQueryEngine provides a way of getting a QueryResults through
        //		the use of a simple object hash as a filter.  The hash will be used to
        //		match properties on data objects with the corresponding value given. In
        //		other words, only exact matches will be returned.
        //
        //		This function can be used as a template for more complex query engines;
        //		for example, an engine can be created that accepts an object hash that
        //		contains filtering functions, or a string that gets evaluated, etc.
        //
        //		When creating a new dojo.store, simply set the store's queryEngine
        //		field as a reference to this function.
        //
        // query: Object
        //		An object hash with fields that may match fields of items in the store.
        //		Values in the hash will be compared by normal == operator, but regular expressions
        //		or any object that provides a test() method are also supported and can be
        //		used to match strings by more complex expressions
        //		(and then the regex's or object's test() method will be used to match values).
        //
        // options: dojo/store/api/Store.QueryOptions?
        //		An object that contains optional information such as sort, start, and count.
        //
        // returns: Function
        //		A function that caches the passed query under the field "matches".  See any
        //		of the "query" methods on dojo.stores.
        //
        // example:
        //		Define a store with a reference to this engine, and set up a query method.
        //
        //	|	var myStore = function(options){
        //	|		//	...more properties here
        //	|		this.queryEngine = SimpleQueryEngine;
        //	|		//	define our query method
        //	|		this.query = function(query, options){
        //	|			return QueryResults(this.queryEngine(query, options)(this.data));
        //	|		};
        //	|	};
        // create our matching query function
        switch (typeof JSProf.LRE(28517, query)) {
        default:
            throw JSProf.LNE(28520, new (JSProf.LFC(28519, Error, true))("Can not query with a " + typeof JSProf.LRE(28518, query)), 'Error');
        case "object":
        case "undefined":
            var queryObject = JSProf.LRE(28521, query);
            query = JSProf.LWR(28532, query, JSProf.LNF(28531, function (object) {
                for (var key in JSProf.LRE(28522, queryObject)) {
                    var required = JSProf.LGE(28523, queryObject, 'key')[key];
                    if (JSProf.LRE(28524, required) && JSProf.LGD(28525, required, 'test').test) {
                        // an object can provide a test method, which makes it work with regex
                        if (!JSProf.LMC(28528, required, 'test').test(JSProf.LGE(28526, object, 'key')[key], JSProf.LRE(28527, object))) {
                            return false;
                        }
                    } else if (JSProf.LRE(28529, required) != JSProf.LGE(28530, object, 'key')[key]) {
                        return false;
                    }
                }
                return true;
            }, 12));
            break;
        case "string":
            // named query
            if (!JSProf.LGE(28533, this, 'query')[query]) {
                throw JSProf.LNE(28536, new (JSProf.LFC(28535, Error, true))("No filter function " + JSProf.LRE(28534, query) + " was found in store"), 'Error');
            }
            query = JSProf.LWR(28538, query, JSProf.LGE(28537, this, 'query')[query]);
        // fall through
        case "function":    // fall through
        }
        function execute(array) {
            // execute the whole query, first we filter
            var results = JSProf.LMC(28541, arrayUtil, 'filter').filter(JSProf.LRE(28539, array), JSProf.LRE(28540, query));
            // next we sort
            var sortSet = JSProf.LRE(28542, options) && JSProf.LGD(28543, options, 'sort').sort;
            if (JSProf.LRE(28544, sortSet)) {
                JSProf.LMC(28566, results, 'sort').sort(typeof JSProf.LRE(28545, sortSet) == "function" ? JSProf.LRE(28546, sortSet) : JSProf.LNF(28565, function (a, b) {
                    for (var sort, i = 0; sort = JSProf.LWR(28548, sort, JSProf.LGE(28547, sortSet, 'i')[i]); i++) {
                        var aValue = JSProf.LGE(28549, a, JSProf.TMPS.t155cb1635e4abaf6f977dd516f642220740a94e7 = sort.attribute)[JSProf.TMPS.t155cb1635e4abaf6f977dd516f642220740a94e7];
                        var bValue = JSProf.LGE(28550, b, JSProf.TMPS.t4cb6afd43912421bfe781a25d8a638c9b5714b6a = sort.attribute)[JSProf.TMPS.t4cb6afd43912421bfe781a25d8a638c9b5714b6a];
                        // valueOf enables proper comparison of dates
                        aValue = JSProf.LWR(28554, aValue, JSProf.LRE(28551, aValue) != null ? JSProf.LMC(28552, aValue, 'valueOf').valueOf() : JSProf.LRE(28553, aValue));
                        bValue = JSProf.LWR(28558, bValue, JSProf.LRE(28555, bValue) != null ? JSProf.LMC(28556, bValue, 'valueOf').valueOf() : JSProf.LRE(28557, bValue));
                        if (JSProf.LRE(28559, aValue) != JSProf.LRE(28560, bValue)) {
                            return !!JSProf.LGD(28561, sort, 'descending').descending == (JSProf.LRE(28562, aValue) == null || JSProf.LRE(28563, aValue) > JSProf.LRE(28564, bValue)) ? -1 : 1;
                        }
                    }
                    return 0;
                }, 12));
            }
            // now we paginate
            if (JSProf.LRE(28567, options) && (JSProf.LGD(28568, options, 'start').start || JSProf.LGD(28569, options, 'count').count)) {
                var total = JSProf.LGD(28570, results, 'length').length;
                results = JSProf.LWR(28575, results, JSProf.LMC(28574, results, 'slice').slice(JSProf.LGD(28571, options, 'start').start || 0, (JSProf.LGD(28572, options, 'start').start || 0) + (JSProf.LGD(28573, options, 'count').count || Infinity)));
                JSProf.LPD(28577, results, 'total').total = JSProf.LRSP(28577, JSProf.LRE(28576, total));
            }
            return JSProf.LRE(28578, results);
        }
        JSProf.LPD(28580, execute, 'matches').matches = JSProf.LRSP(28580, JSProf.LRE(28579, query));
        return JSProf.LRE(28581, execute);
    }, 12);
}, 12));