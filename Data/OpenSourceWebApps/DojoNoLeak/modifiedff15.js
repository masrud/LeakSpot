JSProf.LFC(9860, define, false)(JSProf.LNE(9802, [
    "../_base/array",
    "../Deferred",
    "../when"
], 10), JSProf.LNF(9859, function (array, Deferred, when) {
    "use strict";
    // module:
    //		dojo/promise/all
    var some = JSProf.LGD(9803, array, 'some').some;
    return JSProf.LNF(9858, function all(objectOrArray) {
        // summary:
        //		Takes multiple promises and returns a new promise that is fulfilled
        //		when all promises have been resolved or one has been rejected.
        // description:
        //		Takes multiple promises and returns a new promise that is fulfilled
        //		when all promises have been resolved or one has been rejected. If one of
        //		the promises is rejected, the returned promise is also rejected. Canceling
        //		the returned promise will *not* cancel any passed promises.
        // objectOrArray: Object|Array?
        //		The promise will be fulfilled with a list of results if invoked with an
        //		array, or an object of results when passed an object (using the same
        //		keys). If passed neither an object or array it is resolved with an
        //		undefined value.
        // returns: dojo/promise/Promise
        var object, array;
        if (JSProf.LRE(9804, objectOrArray) instanceof JSProf.LRU(9805, typeof Array === 'undefined' ? undefined : Array)) {
            array = JSProf.LWR(9807, array, JSProf.LRE(9806, objectOrArray));
        } else if (JSProf.LRE(9808, objectOrArray) && typeof JSProf.LRE(9809, objectOrArray) === "object") {
            object = JSProf.LWR(9811, object, JSProf.LRE(9810, objectOrArray));
        }
        var results;
        var keyLookup = JSProf.LNE(9812, [], 10);
        if (JSProf.LRE(9813, object)) {
            array = JSProf.LWR(9815, array, JSProf.LNE(9814, [], 10));
            for (var key in JSProf.LRE(9816, object)) {
                if (JSProf.LMC(9819, Object.hasOwnProperty, 'call').call(JSProf.LRE(9817, object), JSProf.LRE(9818, key))) {
                    JSProf.LMC(9821, keyLookup, 'push').push(JSProf.LRE(9820, key));
                    JSProf.LMC(9823, array, 'push').push(JSProf.LGE(9822, object, 'key')[key]);
                }
            }
            results = JSProf.LWR(9825, results, JSProf.LNE(9824, {}, 11));
        } else if (JSProf.LRE(9826, array)) {
            results = JSProf.LWR(9828, results, JSProf.LNE(9827, [], 10));
        }
        if (!JSProf.LRE(9829, array) || !JSProf.LGD(9830, array, 'length').length) {
            return JSProf.LMC(9834, JSProf.LNE(9832, new (JSProf.LFC(9831, Deferred, true))(), 'Deferred'), 'resolve').resolve(JSProf.LRE(9833, results));
        }
        var deferred = JSProf.LNE(9836, new (JSProf.LFC(9835, Deferred, true))(), 'Deferred');
        JSProf.LMC(9839, deferred.promise, 'always').always(JSProf.LNF(9838, function () {
            results = JSProf.LWR(9837, results, keyLookup = null);
        }, 12));
        var waiting = JSProf.LGD(9840, array, 'length').length;
        JSProf.LFC(9856, some, false)(JSProf.LRE(9841, array), JSProf.LNF(9855, function (valueOrPromise, index) {
            if (!JSProf.LRE(9842, object)) {
                JSProf.LMC(9844, keyLookup, 'push').push(JSProf.LRE(9843, index));
            }
            JSProf.LFC(9853, when, false)(JSProf.LRE(9845, valueOrPromise), JSProf.LNF(9851, function (value) {
                if (!JSProf.LMC(9846, deferred, 'isFulfilled').isFulfilled()) {
                    JSProf.LPE(9848, results, JSProf.TMPS.te18808f9a41fee14cffc1688e6ec101f17d95e85 = keyLookup[index])[JSProf.TMPS.te18808f9a41fee14cffc1688e6ec101f17d95e85] = JSProf.LRPE(9848, JSProf.LRE(9847, value));
                    if (--waiting === 0) {
                        JSProf.LMC(9850, deferred, 'resolve').resolve(JSProf.LRE(9849, results));
                    }
                }
            }, 12), JSProf.LGD(9852, deferred, 'reject').reject);
            return JSProf.LMC(9854, deferred, 'isFulfilled').isFulfilled();
        }, 12));
        return JSProf.LGD(9857, deferred, 'promise').promise;    // dojo/promise/Promise
    }, 12);
}, 12));