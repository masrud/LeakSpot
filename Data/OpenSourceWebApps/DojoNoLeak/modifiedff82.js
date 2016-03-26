JSProf.LFC(28356, define, false)(JSProf.LNE(28317, [
    "../../_base/array",
    "../../_base/lang",
    "../../when"
], 10), JSProf.LNF(28355, function (array, lang, when) {
    // module:
    //		dojo/store/util/QueryResults
    var QueryResults = JSProf.LNF(28351, function (results) {
            JSProf.LFD(28350, addIterativeMethod);
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
            if (!JSProf.LRE(28318, results)) {
                return JSProf.LRE(28319, results);
            }
            var isPromise = !!JSProf.LGD(28320, results, 'then').then;
            // if it is a promise it may be frozen
            if (JSProf.LRE(28321, isPromise)) {
                results = JSProf.LWR(28324, results, JSProf.LMC(28323, lang, 'delegate').delegate(JSProf.LRE(28322, results)));
            }
            function addIterativeMethod(method) {
                // Always add the iterative methods so a QueryResults is
                // returned whether the environment is ES3 or ES5
                JSProf.LPE(28339, results, 'method')[method] = JSProf.LRPE(28339, JSProf.LNF(28338, function () {
                    var args = arguments;
                    var result = JSProf.LFC(28334, when, false)(JSProf.LRE(28325, results), JSProf.LNF(28333, function (results) {
                            JSProf.LMC(28328, Array.prototype.unshift, 'call').call(JSProf.LRE(28326, args), JSProf.LRE(28327, results));
                            return JSProf.LFC(28332, QueryResults, false)(JSProf.LMC(28331, array[method], 'apply').apply(JSProf.LRE(28329, array), JSProf.LRE(28330, args)));
                        }, 12));
                    // forEach should only return the result of when()
                    // when we're wrapping a promise
                    if (JSProf.LRE(28335, method) !== "forEach" || JSProf.LRE(28336, isPromise)) {
                        return JSProf.LRE(28337, result);
                    }
                }, 12));
            }
            JSProf.LFC(28340, addIterativeMethod, false)("forEach");
            JSProf.LFC(28341, addIterativeMethod, false)("filter");
            JSProf.LFC(28342, addIterativeMethod, false)("map");
            if (JSProf.LGD(28343, results, 'total').total == null) {
                JSProf.LPD(28348, results, 'total').total = JSProf.LRSP(28348, JSProf.LFC(28347, when, false)(JSProf.LRE(28344, results), JSProf.LNF(28346, function (results) {
                    return JSProf.LGD(28345, results, 'length').length;
                }, 12)));
            }
            return JSProf.LRE(28349, results);    // Object
        }, 12);
    JSProf.LMC(28353, lang, 'setObject').setObject("dojo.store.util.QueryResults", JSProf.LRE(28352, QueryResults));
    return JSProf.LRE(28354, QueryResults);
}, 12));