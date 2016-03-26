JSProf.LFC(11078, define, false)(JSProf.LNE(10844, [
    "./has",
    "./_base/lang",
    "./errors/CancelError",
    "./promise/Promise",
    "./has!config-deferredInstrumentation?./promise/instrumentation"
], 10), JSProf.LNF(11077, function (has, lang, CancelError, Promise, instrumentation) {
    "use strict";
    // module:
    //		dojo/Deferred
    var PROGRESS = 0, RESOLVED = 1, REJECTED = 2;
    var FULFILLED_ERROR_MESSAGE = "This deferred has already been fulfilled.";
    var freezeObject = JSProf.LGD(10845, Object, 'freeze').freeze || JSProf.LNF(10846, function () {
        }, 12);
    var signalWaiting = JSProf.LNF(10863, function (waiting, type, result, rejection, deferred) {
            if (JSProf.LFC(10847, has, false)("config-deferredInstrumentation")) {
                if (JSProf.LRE(10848, type) === JSProf.LRE(10849, REJECTED) && JSProf.LGD(10850, Deferred, 'instrumentRejected').instrumentRejected && JSProf.LGD(10851, waiting, 'length').length === 0) {
                    JSProf.LMC(10855, Deferred, 'instrumentRejected').instrumentRejected(JSProf.LRE(10852, result), false, JSProf.LRE(10853, rejection), JSProf.LRE(10854, deferred));
                }
            }
            for (var i = 0; JSProf.LRE(10856, i) < JSProf.LGD(10857, waiting, 'length').length; i++) {
                JSProf.LFC(10862, signalListener, false)(JSProf.LGE(10858, waiting, 'i')[i], JSProf.LRE(10859, type), JSProf.LRE(10860, result), JSProf.LRE(10861, rejection));
            }
        }, 12);
    var signalListener = JSProf.LNF(10911, function (listener, type, result, rejection) {
            var func = JSProf.LGE(10864, listener, 'type')[type];
            var deferred = JSProf.LGD(10865, listener, 'deferred').deferred;
            if (JSProf.LRE(10866, func)) {
                try {
                    var newResult = JSProf.LFC(10868, func, false)(JSProf.LRE(10867, result));
                    if (JSProf.LRE(10869, type) === JSProf.LRE(10870, PROGRESS)) {
                        if (typeof JSProf.LRE(10871, newResult) !== "undefined") {
                            JSProf.LFC(10875, signalDeferred, false)(JSProf.LRE(10872, deferred), JSProf.LRE(10873, type), JSProf.LRE(10874, newResult));
                        }
                    } else {
                        if (JSProf.LRE(10876, newResult) && typeof JSProf.LGD(10877, newResult, 'then').then === "function") {
                            JSProf.LPD(10879, listener, 'cancel').cancel = JSProf.LRSP(10879, JSProf.LGD(10878, newResult, 'cancel').cancel);
                            JSProf.LMC(10889, newResult, 'then').then(JSProf.LFC(10882, makeDeferredSignaler, false)(JSProf.LRE(10880, deferred), JSProf.LRE(10881, RESOLVED)), JSProf.LFC(10885, makeDeferredSignaler, false)(JSProf.LRE(10883, deferred), JSProf.LRE(10884, REJECTED)), JSProf.LFC(10888, makeDeferredSignaler, false)(JSProf.LRE(10886, deferred), JSProf.LRE(10887, PROGRESS)));
                            return;
                        }
                        JSProf.LFC(10893, signalDeferred, false)(JSProf.LRE(10890, deferred), JSProf.LRE(10891, RESOLVED), JSProf.LRE(10892, newResult));
                    }
                } catch (error) {
                    JSProf.LFC(10897, signalDeferred, false)(JSProf.LRE(10894, deferred), JSProf.LRE(10895, REJECTED), JSProf.LRE(10896, error));
                }
            } else {
                JSProf.LFC(10901, signalDeferred, false)(JSProf.LRE(10898, deferred), JSProf.LRE(10899, type), JSProf.LRE(10900, result));
            }
            if (JSProf.LFC(10902, has, false)("config-deferredInstrumentation")) {
                if (JSProf.LRE(10903, type) === JSProf.LRE(10904, REJECTED) && JSProf.LGD(10905, Deferred, 'instrumentRejected').instrumentRejected) {
                    JSProf.LMC(10910, Deferred, 'instrumentRejected').instrumentRejected(JSProf.LRE(10906, result), !!JSProf.LRE(10907, func), JSProf.LRE(10908, rejection), JSProf.LGD(10909, deferred, 'promise').promise);
                }
            }
        }, 12);
    var makeDeferredSignaler = JSProf.LNF(10917, function (deferred, type) {
            return JSProf.LNF(10916, function (value) {
                JSProf.LFC(10915, signalDeferred, false)(JSProf.LRE(10912, deferred), JSProf.LRE(10913, type), JSProf.LRE(10914, value));
            }, 12);
        }, 12);
    var signalDeferred = JSProf.LNF(10929, function (deferred, type, result) {
            if (!JSProf.LMC(10918, deferred, 'isCanceled').isCanceled()) {
                switch (JSProf.LRE(10919, type)) {
                case JSProf.LRE(10920, PROGRESS):
                    JSProf.LMC(10922, deferred, 'progress').progress(JSProf.LRE(10921, result));
                    break;
                case JSProf.LRE(10923, RESOLVED):
                    JSProf.LMC(10925, deferred, 'resolve').resolve(JSProf.LRE(10924, result));
                    break;
                case JSProf.LRE(10926, REJECTED):
                    JSProf.LMC(10928, deferred, 'reject').reject(JSProf.LRE(10927, result));
                    break;
                }
            }
        }, 12);
    var Deferred = JSProf.LNF(11070, function (canceler) {
            // summary:
            //		Creates a new deferred. This API is preferred over
            //		`dojo/_base/Deferred`.
            // description:
            //		Creates a new deferred, as an abstraction over (primarily)
            //		asynchronous operations. The deferred is the private interface
            //		that should not be returned to calling code. That's what the
            //		`promise` is for. See `dojo/promise/Promise`.
            // canceler: Function?
            //		Will be invoked if the deferred is canceled. The canceler
            //		receives the reason the deferred was canceled as its argument.
            //		The deferred is rejected with its return value, or a new
            //		`dojo/errors/CancelError` instance.
            // promise: dojo/promise/Promise
            //		The public promise object that clients can add callbacks to. 
            var promise = JSProf.LPD(10932, this, 'promise').promise = JSProf.LRSP(10932, JSProf.LNE(10931, new (JSProf.LFC(10930, Promise, true))(), 'Promise'));
            var deferred = this;
            var fulfilled, result, rejection;
            var canceled = false;
            var waiting = JSProf.LNE(10933, [], 10);
            if (JSProf.LFC(10934, has, false)("config-deferredInstrumentation") && JSProf.LGD(10935, Error, 'captureStackTrace').captureStackTrace) {
                JSProf.LMC(10938, Error, 'captureStackTrace').captureStackTrace(JSProf.LRE(10936, deferred), JSProf.LRE(10937, Deferred));
                JSProf.LMC(10941, Error, 'captureStackTrace').captureStackTrace(JSProf.LRE(10939, promise), JSProf.LRE(10940, Deferred));
            }
            JSProf.LPD(10946, this, 'isResolved').isResolved = JSProf.LRSP(10946, JSProf.LPD(10945, promise, 'isResolved').isResolved = JSProf.LRSP(10945, JSProf.LNF(10944, function () {
                // summary:
                //		Checks whether the deferred has been resolved.
                // returns: Boolean
                return JSProf.LRE(10942, fulfilled) === JSProf.LRE(10943, RESOLVED);
            }, 12)));
            JSProf.LPD(10951, this, 'isRejected').isRejected = JSProf.LRSP(10951, JSProf.LPD(10950, promise, 'isRejected').isRejected = JSProf.LRSP(10950, JSProf.LNF(10949, function () {
                // summary:
                //		Checks whether the deferred has been rejected.
                // returns: Boolean
                return JSProf.LRE(10947, fulfilled) === JSProf.LRE(10948, REJECTED);
            }, 12)));
            JSProf.LPD(10955, this, 'isFulfilled').isFulfilled = JSProf.LRSP(10955, JSProf.LPD(10954, promise, 'isFulfilled').isFulfilled = JSProf.LRSP(10954, JSProf.LNF(10953, function () {
                // summary:
                //		Checks whether the deferred has been resolved or rejected.
                // returns: Boolean
                return !!JSProf.LRE(10952, fulfilled);
            }, 12)));
            JSProf.LPD(10959, this, 'isCanceled').isCanceled = JSProf.LRSP(10959, JSProf.LPD(10958, promise, 'isCanceled').isCanceled = JSProf.LRSP(10958, JSProf.LNF(10957, function () {
                // summary:
                //		Checks whether the deferred has been canceled.
                // returns: Boolean
                return JSProf.LRE(10956, canceled);
            }, 12)));
            JSProf.LPD(10973, this, 'progress').progress = JSProf.LRSP(10973, JSProf.LNF(10972, function (update, strict) {
                // summary:
                //		Emit a progress update on the deferred.
                // description:
                //		Emit a progress update on the deferred. Progress updates
                //		can be used to communicate updates about the asynchronous
                //		operation before it has finished.
                // update: any
                //		The progress update. Passed to progbacks.
                // strict: Boolean?
                //		If strict, will throw an error if the deferred has already
                //		been fulfilled and consequently no progress can be emitted.
                // returns: dojo/promise/Promise
                //		Returns the original promise for the deferred.
                if (!JSProf.LRE(10960, fulfilled)) {
                    JSProf.LFC(10965, signalWaiting, false)(JSProf.LRE(10961, waiting), JSProf.LRE(10962, PROGRESS), JSProf.LRE(10963, update), null, JSProf.LRE(10964, deferred));
                    return JSProf.LRE(10966, promise);
                } else if (JSProf.LRE(10967, strict) === true) {
                    throw JSProf.LNE(10970, new (JSProf.LFC(10969, Error, true))(JSProf.LRE(10968, FULFILLED_ERROR_MESSAGE)), 'Error');
                } else {
                    return JSProf.LRE(10971, promise);
                }
            }, 12));
            JSProf.LPD(10989, this, 'resolve').resolve = JSProf.LRSP(10989, JSProf.LNF(10988, function (value, strict) {
                // summary:
                //		Resolve the deferred.
                // description:
                //		Resolve the deferred, putting it in a success state.
                // value: any
                //		The result of the deferred. Passed to callbacks.
                // strict: Boolean?
                //		If strict, will throw an error if the deferred has already
                //		been fulfilled and consequently cannot be resolved.
                // returns: dojo/promise/Promise
                //		Returns the original promise for the deferred.
                if (!JSProf.LRE(10974, fulfilled)) {
                    // Set fulfilled, store value. After signaling waiting listeners unset
                    // waiting.
                    JSProf.LFC(10981, signalWaiting, false)(JSProf.LRE(10975, waiting), fulfilled = JSProf.LWR(10977, fulfilled, JSProf.LRE(10976, RESOLVED)), result = JSProf.LWR(10979, result, JSProf.LRE(10978, value)), null, JSProf.LRE(10980, deferred));
                    waiting = null;
                    return JSProf.LRE(10982, promise);
                } else if (JSProf.LRE(10983, strict) === true) {
                    throw JSProf.LNE(10986, new (JSProf.LFC(10985, Error, true))(JSProf.LRE(10984, FULFILLED_ERROR_MESSAGE)), 'Error');
                } else {
                    return JSProf.LRE(10987, promise);
                }
            }, 12));
            var reject = JSProf.LPD(11012, this, 'reject').reject = JSProf.LRSP(11012, JSProf.LNF(11011, function (error, strict) {
                    // summary:
                    //		Reject the deferred.
                    // description:
                    //		Reject the deferred, putting it in an error state.
                    // error: any
                    //		The error result of the deferred. Passed to errbacks.
                    // strict: Boolean?
                    //		If strict, will throw an error if the deferred has already
                    //		been fulfilled and consequently cannot be rejected.
                    // returns: dojo/promise/Promise
                    //		Returns the original promise for the deferred.
                    if (!JSProf.LRE(10990, fulfilled)) {
                        if (JSProf.LFC(10991, has, false)("config-deferredInstrumentation") && JSProf.LGD(10992, Error, 'captureStackTrace').captureStackTrace) {
                            JSProf.LMC(10996, Error, 'captureStackTrace').captureStackTrace(rejection = JSProf.LWR(10994, rejection, JSProf.LNE(10993, {}, 11)), JSProf.LRE(10995, reject));
                        }
                        JSProf.LFC(11004, signalWaiting, false)(JSProf.LRE(10997, waiting), fulfilled = JSProf.LWR(10999, fulfilled, JSProf.LRE(10998, REJECTED)), result = JSProf.LWR(11001, result, JSProf.LRE(11000, error)), JSProf.LRE(11002, rejection), JSProf.LRE(11003, deferred));
                        waiting = null;
                        return JSProf.LRE(11005, promise);
                    } else if (JSProf.LRE(11006, strict) === true) {
                        throw JSProf.LNE(11009, new (JSProf.LFC(11008, Error, true))(JSProf.LRE(11007, FULFILLED_ERROR_MESSAGE)), 'Error');
                    } else {
                        return JSProf.LRE(11010, promise);
                    }
                }, 12));
            JSProf.LPD(11038, this, 'then').then = JSProf.LRSP(11038, JSProf.LPD(11037, promise, 'then').then = JSProf.LRSP(11037, JSProf.LNF(11036, function (callback, errback, progback) {
                // summary:
                //		Add new callbacks to the deferred.
                // description:
                //		Add new callbacks to the deferred. Callbacks can be added
                //		before or after the deferred is fulfilled.
                // callback: Function?
                //		Callback to be invoked when the promise is resolved.
                //		Receives the resolution value.
                // errback: Function?
                //		Callback to be invoked when the promise is rejected.
                //		Receives the rejection error.
                // progback: Function?
                //		Callback to be invoked when the promise emits a progress
                //		update. Receives the progress update.
                // returns: dojo/promise/Promise
                //		Returns a new promise for the result of the callback(s).
                //		This can be used for chaining many asynchronous operations.
                var listener = JSProf.LNE(11016, [
                        JSProf.LRE(11013, progback),
                        JSProf.LRE(11014, callback),
                        JSProf.LRE(11015, errback)
                    ], 10);
                // Ensure we cancel the promise we're waiting for, or if callback/errback
                // have returned a promise, cancel that one.
                JSProf.LPD(11018, listener, 'cancel').cancel = JSProf.LRSP(11018, JSProf.LGD(11017, promise, 'cancel').cancel);
                JSProf.LPD(11025, listener, 'deferred').deferred = JSProf.LRSP(11025, JSProf.LNE(11024, new (JSProf.LFC(11023, Deferred, true))(JSProf.LNF(11022, function (reason) {
                    // Check whether cancel is really available, returned promises are not
                    // required to expose `cancel`
                    return JSProf.LGD(11019, listener, 'cancel').cancel && JSProf.LMC(11021, listener, 'cancel').cancel(JSProf.LRE(11020, reason));
                }, 12)), 'Deferred'));
                if (JSProf.LRE(11026, fulfilled) && !JSProf.LRE(11027, waiting)) {
                    JSProf.LFC(11032, signalListener, false)(JSProf.LRE(11028, listener), JSProf.LRE(11029, fulfilled), JSProf.LRE(11030, result), JSProf.LRE(11031, rejection));
                } else {
                    JSProf.LMC(11034, waiting, 'push').push(JSProf.LRE(11033, listener));
                }
                return JSProf.LGD(11035, listener.deferred, 'promise').promise;
            }, 12)));
            JSProf.LPD(11067, this, 'cancel').cancel = JSProf.LRSP(11067, JSProf.LPD(11066, promise, 'cancel').cancel = JSProf.LRSP(11066, JSProf.LNF(11065, function (reason, strict) {
                // summary:
                //		Inform the deferred it may cancel its asynchronous operation.
                // description:
                //		Inform the deferred it may cancel its asynchronous operation.
                //		The deferred's (optional) canceler is invoked and the
                //		deferred will be left in a rejected state. Can affect other
                //		promises that originate with the same deferred.
                // reason: any
                //		A message that may be sent to the deferred's canceler,
                //		explaining why it's being canceled.
                // strict: Boolean?
                //		If strict, will throw an error if the deferred has already
                //		been fulfilled and consequently cannot be canceled.
                // returns: any
                //		Returns the rejection reason if the deferred was canceled
                //		normally.
                if (!JSProf.LRE(11039, fulfilled)) {
                    // Cancel can be called even after the deferred is fulfilled
                    if (JSProf.LRE(11040, canceler)) {
                        var returnedReason = JSProf.LFC(11042, canceler, false)(JSProf.LRE(11041, reason));
                        reason = JSProf.LWR(11046, reason, typeof JSProf.LRE(11043, returnedReason) === "undefined" ? JSProf.LRE(11044, reason) : JSProf.LRE(11045, returnedReason));
                    }
                    canceled = JSProf.LWR(11047, canceled, true);
                    if (!JSProf.LRE(11048, fulfilled)) {
                        // Allow canceler to provide its own reason, but fall back to a CancelError
                        if (typeof JSProf.LRE(11049, reason) === "undefined") {
                            reason = JSProf.LWR(11052, reason, JSProf.LNE(11051, new (JSProf.LFC(11050, CancelError, true))(), 'CancelError'));
                        }
                        JSProf.LFC(11054, reject, false)(JSProf.LRE(11053, reason));
                        return JSProf.LRE(11055, reason);
                    } else if (JSProf.LRE(11056, fulfilled) === JSProf.LRE(11057, REJECTED) && JSProf.LRE(11058, result) === JSProf.LRE(11059, reason)) {
                        return JSProf.LRE(11060, reason);
                    }
                } else if (JSProf.LRE(11061, strict) === true) {
                    throw JSProf.LNE(11064, new (JSProf.LFC(11063, Error, true))(JSProf.LRE(11062, FULFILLED_ERROR_MESSAGE)), 'Error');
                }
            }, 12)));
            JSProf.LFC(11069, freezeObject, false)(JSProf.LRE(11068, promise));
        }, 12);
    JSProf.LPD(11072, Deferred.prototype, 'toString').toString = JSProf.LRSP(11072, JSProf.LNF(11071, function () {
        // returns: String
        //		Returns `[object Deferred]`.
        return "[object Deferred]";
    }, 12));
    if (JSProf.LRE(11073, instrumentation)) {
        JSProf.LFC(11075, instrumentation, false)(JSProf.LRE(11074, Deferred));
    }
    return JSProf.LRE(11076, Deferred);
}, 12));