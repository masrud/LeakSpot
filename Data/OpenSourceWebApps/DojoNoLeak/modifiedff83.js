JSProf.LFC(28484, define, false)(JSProf.LNE(28415, ["../../_base/array"], 10), JSProf.LNF(28483, function (arrayUtil) {
    // module:
    //		dojo/store/util/SimpleQueryEngine
    return JSProf.LNF(28482, function (query, options) {
        JSProf.LFD(28481, execute);
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
        switch (typeof JSProf.LRE(28416, query)) {
        default:
            throw JSProf.LNE(28419, new (JSProf.LFC(28418, Error, true))("Can not query with a " + typeof JSProf.LRE(28417, query)), 'Error');
        case "object":
        case "undefined":
            var queryObject = JSProf.LRE(28420, query);
            query = JSProf.LWR(28431, query, JSProf.LNF(28430, function (object) {
                for (var key in JSProf.LRE(28421, queryObject)) {
                    var required = JSProf.LGE(28422, queryObject, 'key')[key];
                    if (JSProf.LRE(28423, required) && JSProf.LGD(28424, required, 'test').test) {
                        // an object can provide a test method, which makes it work with regex
                        if (!JSProf.LMC(28427, required, 'test').test(JSProf.LGE(28425, object, 'key')[key], JSProf.LRE(28426, object))) {
                            return false;
                        }
                    } else if (JSProf.LRE(28428, required) != JSProf.LGE(28429, object, 'key')[key]) {
                        return false;
                    }
                }
                return true;
            }, 12));
            break;
        case "string":
            // named query
            if (!JSProf.LGE(28432, this, 'query')[query]) {
                throw JSProf.LNE(28435, new (JSProf.LFC(28434, Error, true))("No filter function " + JSProf.LRE(28433, query) + " was found in store"), 'Error');
            }
            query = JSProf.LWR(28437, query, JSProf.LGE(28436, this, 'query')[query]);
        // fall through
        case "function":    // fall through
        }
        function execute(array) {
            // execute the whole query, first we filter
            var results = JSProf.LMC(28440, arrayUtil, 'filter').filter(JSProf.LRE(28438, array), JSProf.LRE(28439, query));
            // next we sort
            var sortSet = JSProf.LRE(28441, options) && JSProf.LGD(28442, options, 'sort').sort;
            if (JSProf.LRE(28443, sortSet)) {
                JSProf.LMC(28465, results, 'sort').sort(typeof JSProf.LRE(28444, sortSet) == "function" ? JSProf.LRE(28445, sortSet) : JSProf.LNF(28464, function (a, b) {
                    for (var sort, i = 0; sort = JSProf.LWR(28447, sort, JSProf.LGE(28446, sortSet, 'i')[i]); i++) {
                        var aValue = JSProf.LGE(28448, a, JSProf.TMPS.t155cb1635e4abaf6f977dd516f642220740a94e7 = sort.attribute)[JSProf.TMPS.t155cb1635e4abaf6f977dd516f642220740a94e7];
                        var bValue = JSProf.LGE(28449, b, JSProf.TMPS.t4cb6afd43912421bfe781a25d8a638c9b5714b6a = sort.attribute)[JSProf.TMPS.t4cb6afd43912421bfe781a25d8a638c9b5714b6a];
                        // valueOf enables proper comparison of dates
                        aValue = JSProf.LWR(28453, aValue, JSProf.LRE(28450, aValue) != null ? JSProf.LMC(28451, aValue, 'valueOf').valueOf() : JSProf.LRE(28452, aValue));
                        bValue = JSProf.LWR(28457, bValue, JSProf.LRE(28454, bValue) != null ? JSProf.LMC(28455, bValue, 'valueOf').valueOf() : JSProf.LRE(28456, bValue));
                        if (JSProf.LRE(28458, aValue) != JSProf.LRE(28459, bValue)) {
                            return !!JSProf.LGD(28460, sort, 'descending').descending == (JSProf.LRE(28461, aValue) == null || JSProf.LRE(28462, aValue) > JSProf.LRE(28463, bValue)) ? -1 : 1;
                        }
                    }
                    return 0;
                }, 12));
            }
            // now we paginate
            if (JSProf.LRE(28466, options) && (JSProf.LGD(28467, options, 'start').start || JSProf.LGD(28468, options, 'count').count)) {
                var total = JSProf.LGD(28469, results, 'length').length;
                results = JSProf.LWR(28474, results, JSProf.LMC(28473, results, 'slice').slice(JSProf.LGD(28470, options, 'start').start || 0, (JSProf.LGD(28471, options, 'start').start || 0) + (JSProf.LGD(28472, options, 'count').count || Infinity)));
                JSProf.LPD(28476, results, 'total').total = JSProf.LRSP(28476, JSProf.LRE(28475, total));
            }
            return JSProf.LRE(28477, results);
        }
        JSProf.LPD(28479, execute, 'matches').matches = JSProf.LRSP(28479, JSProf.LRE(28478, query));
        return JSProf.LRE(28480, execute);
    }, 12);
}, 12));