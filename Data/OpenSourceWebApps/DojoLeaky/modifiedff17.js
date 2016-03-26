JSProf.LFC(10476, define, false)(JSProf.LNE(10418, [
    "../_base/array",
    "../Deferred",
    "../when"
], 10), JSProf.LNF(10475, function (array, Deferred, when) {
    "use strict";
    // module:
    //		dojo/promise/all
    var some = JSProf.LGD(10419, array, 'some').some;
    return JSProf.LNF(10474, function all(objectOrArray) {
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
        if (JSProf.LRE(10420, objectOrArray) instanceof JSProf.LRU(10421, typeof Array === 'undefined' ? undefined : Array)) {
            array = JSProf.LWR(10423, array, JSProf.LRE(10422, objectOrArray));
        } else if (JSProf.LRE(10424, objectOrArray) && typeof JSProf.LRE(10425, objectOrArray) === "object") {
            object = JSProf.LWR(10427, object, JSProf.LRE(10426, objectOrArray));
        }
        var results;
        var keyLookup = JSProf.LNE(10428, [], 10);
        if (JSProf.LRE(10429, object)) {
            array = JSProf.LWR(10431, array, JSProf.LNE(10430, [], 10));
            for (var key in JSProf.LRE(10432, object)) {
                if (JSProf.LMC(10435, Object.hasOwnProperty, 'call').call(JSProf.LRE(10433, object), JSProf.LRE(10434, key))) {
                    JSProf.LMC(10437, keyLookup, 'push').push(JSProf.LRE(10436, key));
                    JSProf.LMC(10439, array, 'push').push(JSProf.LGE(10438, object, 'key')[key]);
                }
            }
            results = JSProf.LWR(10441, results, JSProf.LNE(10440, {}, 11));
        } else if (JSProf.LRE(10442, array)) {
            results = JSProf.LWR(10444, results, JSProf.LNE(10443, [], 10));
        }
        if (!JSProf.LRE(10445, array) || !JSProf.LGD(10446, array, 'length').length) {
            return JSProf.LMC(10450, JSProf.LNE(10448, new (JSProf.LFC(10447, Deferred, true))(), 'Deferred'), 'resolve').resolve(JSProf.LRE(10449, results));
        }
        var deferred = JSProf.LNE(10452, new (JSProf.LFC(10451, Deferred, true))(), 'Deferred');
        JSProf.LMC(10455, deferred.promise, 'always').always(JSProf.LNF(10454, function () {
            results = JSProf.LWR(10453, results, keyLookup = null);
        }, 12));
        var waiting = JSProf.LGD(10456, array, 'length').length;
        JSProf.LFC(10472, some, false)(JSProf.LRE(10457, array), JSProf.LNF(10471, function (valueOrPromise, index) {
            if (!JSProf.LRE(10458, object)) {
                JSProf.LMC(10460, keyLookup, 'push').push(JSProf.LRE(10459, index));
            }
            JSProf.LFC(10469, when, false)(JSProf.LRE(10461, valueOrPromise), JSProf.LNF(10467, function (value) {
                if (!JSProf.LMC(10462, deferred, 'isFulfilled').isFulfilled()) {
                    JSProf.LPE(10464, results, JSProf.TMPS.te18808f9a41fee14cffc1688e6ec101f17d95e85 = keyLookup[index])[JSProf.TMPS.te18808f9a41fee14cffc1688e6ec101f17d95e85] = JSProf.LRPE(10464, JSProf.LRE(10463, value));
                    if (--waiting === 0) {
                        JSProf.LMC(10466, deferred, 'resolve').resolve(JSProf.LRE(10465, results));
                    }
                }
            }, 12), JSProf.LGD(10468, deferred, 'reject').reject);
            return JSProf.LMC(10470, deferred, 'isFulfilled').isFulfilled();
        }, 12));
        return JSProf.LGD(10473, deferred, 'promise').promise;    // dojo/promise/Promise
    }, 12);
}, 12));