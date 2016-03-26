JSProf.LFC(28457, define, false)(JSProf.LNE(28418, [
    "../../_base/array",
    "../../_base/lang",
    "../../when"
], 10), JSProf.LNF(28456, function (array, lang, when) {
    // module:
    //		dojo/store/util/QueryResults
    var QueryResults = JSProf.LNF(28452, function (results) {
            JSProf.LFD(28451, addIterativeMethod);
            // summary:
            //		A function that wraps the results of a store query with additional
            //		methods.
            // description:
            //		QueryResults is a basic wrapper that allows for array-like iteration
            //		over any kind of returned data from a query.  While the simplest store
            //		will return a plain array of data, other stores may return deferreds or
            //		promises; this wrapper makes sure that *all* results can be treated
            //		the same.
            //
            //		Additional methods include `forEach`, `filter` and `map`.
            // results: Array|dojo/promise/Promise
            //		The result set as an array, or a promise for an array.
            // returns:
            //		An array-like object that can be used for iterating over.
            // example:
            //		Query a store and iterate over the results.
            //
            //	|	store.query({ prime: true }).forEach(function(item){
            //	|		//	do something
            //	|	});
            if (!JSProf.LRE(28419, results)) {
                return JSProf.LRE(28420, results);
            }
            var isPromise = !!JSProf.LGD(28421, results, 'then').then;
            // if it is a promise it may be frozen
            if (JSProf.LRE(28422, isPromise)) {
                results = JSProf.LWR(28425, results, JSProf.LMC(28424, lang, 'delegate').delegate(JSProf.LRE(28423, results)));
            }
            function addIterativeMethod(method) {
                // Always add the iterative methods so a QueryResults is
                // returned whether the environment is ES3 or ES5
                JSProf.LPE(28440, results, 'method')[method] = JSProf.LRPE(28440, JSProf.LNF(28439, function () {
                    var args = arguments;
                    var result = JSProf.LFC(28435, when, false)(JSProf.LRE(28426, results), JSProf.LNF(28434, function (results) {
                            JSProf.LMC(28429, Array.prototype.unshift, 'call').call(JSProf.LRE(28427, args), JSProf.LRE(28428, results));
                            return JSProf.LFC(28433, QueryResults, false)(JSProf.LMC(28432, array[method], 'apply').apply(JSProf.LRE(28430, array), JSProf.LRE(28431, args)));
                        }, 12));
                    // forEach should only return the result of when()
                    // when we're wrapping a promise
                    if (JSProf.LRE(28436, method) !== "forEach" || JSProf.LRE(28437, isPromise)) {
                        return JSProf.LRE(28438, result);
                    }
                }, 12));
            }
            JSProf.LFC(28441, addIterativeMethod, false)("forEach");
            JSProf.LFC(28442, addIterativeMethod, false)("filter");
            JSProf.LFC(28443, addIterativeMethod, false)("map");
            if (JSProf.LGD(28444, results, 'total').total == null) {
                JSProf.LPD(28449, results, 'total').total = JSProf.LRSP(28449, JSProf.LFC(28448, when, false)(JSProf.LRE(28445, results), JSProf.LNF(28447, function (results) {
                    return JSProf.LGD(28446, results, 'length').length;
                }, 12)));
            }
            return JSProf.LRE(28450, results);    // Object
        }, 12);
    JSProf.LMC(28454, lang, 'setObject').setObject("dojo.store.util.QueryResults", JSProf.LRE(28453, QueryResults));
    return JSProf.LRE(28455, QueryResults);
}, 12));