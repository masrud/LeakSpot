JSProf.LFC(13840, define, false)(JSProf.LNE(13804, [
    "./Deferred",
    "./promise/Promise"
], 10), JSProf.LNF(13839, function (Deferred, Promise) {
    "use strict";
    // module:
    //		dojo/when
    return JSProf.LNF(13838, function when(valueOrPromise, callback, errback, progback) {
        // summary:
        //		Transparently applies callbacks to values and/or promises.
        // description:
        //		Accepts promises but also transparently handles non-promises. If no
        //		callbacks are provided returns a promise, regardless of the initial
        //		value. Foreign promises are converted.
        //
        //		If callbacks are provided and the initial value is not a promise,
        //		the callback is executed immediately with no error handling. Returns
        //		a promise if the initial value is a promise, or the result of the
        //		callback otherwise.
        // valueOrPromise:
        //		Either a regular value or an object with a `then()` method that
        //		follows the Promises/A specification.
        // callback: Function?
        //		Callback to be invoked when the promise is resolved, or a non-promise
        //		is received.
        // errback: Function?
        //		Callback to be invoked when the promise is rejected.
        // progback: Function?
        //		Callback to be invoked when the promise emits a progress update.
        // returns: dojo/promise/Promise
        //		Promise, or if a callback is provided, the result of the callback.
        var receivedPromise = JSProf.LRE(13805, valueOrPromise) && typeof JSProf.LGD(13806, valueOrPromise, 'then').then === "function";
        var nativePromise = JSProf.LRE(13807, receivedPromise) && JSProf.LRE(13808, valueOrPromise) instanceof JSProf.LRE(13809, Promise);
        if (!JSProf.LRE(13810, receivedPromise)) {
            if (JSProf.LGD(13811, arguments, 'length').length > 1) {
                return JSProf.LRE(13812, callback) ? JSProf.LFC(13814, callback, false)(JSProf.LRE(13813, valueOrPromise)) : JSProf.LRE(13815, valueOrPromise);
            } else {
                return JSProf.LMC(13819, JSProf.LNE(13817, new (JSProf.LFC(13816, Deferred, true))(), 'Deferred'), 'resolve').resolve(JSProf.LRE(13818, valueOrPromise));
            }
        } else if (!JSProf.LRE(13820, nativePromise)) {
            var deferred = JSProf.LNE(13823, new (JSProf.LFC(13822, Deferred, true))(JSProf.LGD(13821, valueOrPromise, 'cancel').cancel), 'Deferred');
            JSProf.LMC(13827, valueOrPromise, 'then').then(JSProf.LGD(13824, deferred, 'resolve').resolve, JSProf.LGD(13825, deferred, 'reject').reject, JSProf.LGD(13826, deferred, 'progress').progress);
            valueOrPromise = JSProf.LWR(13829, valueOrPromise, JSProf.LGD(13828, deferred, 'promise').promise);
        }
        if (JSProf.LRE(13830, callback) || JSProf.LRE(13831, errback) || JSProf.LRE(13832, progback)) {
            return JSProf.LMC(13836, valueOrPromise, 'then').then(JSProf.LRE(13833, callback), JSProf.LRE(13834, errback), JSProf.LRE(13835, progback));
        }
        return JSProf.LRE(13837, valueOrPromise);
    }, 12);
}, 12));