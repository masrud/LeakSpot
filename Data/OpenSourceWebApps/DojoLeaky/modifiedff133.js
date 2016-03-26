JSProf.LFC(43930, define, false)(JSProf.LNE(43743, [
    "./kernel",
    "../Deferred",
    "../promise/Promise",
    "../errors/CancelError",
    "../has",
    "./lang",
    "../when"
], 10), JSProf.LNF(43929, function (dojo, NewDeferred, Promise, CancelError, has, lang, when) {
    // module:
    //		dojo/_base/Deferred
    var mutator = JSProf.LNF(43744, function () {
        }, 12);
    var freeze = JSProf.LGD(43745, Object, 'freeze').freeze || JSProf.LNF(43746, function () {
        }, 12);
    // A deferred provides an API for creating and resolving a promise.
    var Deferred = JSProf.LPD(43907, dojo, 'Deferred').Deferred = JSProf.LRSP(43907, JSProf.LNF(43906, function (canceller) {
            JSProf.LFD(43904, complete);
            JSProf.LFD(43905, notify);
            // summary:
            //		Deprecated.   This module defines the legacy dojo/_base/Deferred API.
            //		New code should use dojo/Deferred instead.
            // description:
            //		The Deferred API is based on the concept of promises that provide a
            //		generic interface into the eventual completion of an asynchronous action.
            //		The motivation for promises fundamentally is about creating a
            //		separation of concerns that allows one to achieve the same type of
            //		call patterns and logical data flow in asynchronous code as can be
            //		achieved in synchronous code. Promises allows one
            //		to be able to call a function purely with arguments needed for
            //		execution, without conflating the call with concerns of whether it is
            //		sync or async. One shouldn't need to alter a call's arguments if the
            //		implementation switches from sync to async (or vice versa). By having
            //		async functions return promises, the concerns of making the call are
            //		separated from the concerns of asynchronous interaction (which are
            //		handled by the promise).
            //
            //		The Deferred is a type of promise that provides methods for fulfilling the
            //		promise with a successful result or an error. The most important method for
            //		working with Dojo's promises is the then() method, which follows the
            //		CommonJS proposed promise API. An example of using a Dojo promise:
            //
            //		|	var resultingPromise = someAsyncOperation.then(function(result){
            //		|		... handle result ...
            //		|	},
            //		|	function(error){
            //		|		... handle error ...
            //		|	});
            //
            //		The .then() call returns a new promise that represents the result of the
            //		execution of the callback. The callbacks will never affect the original promises value.
            //
            //		The Deferred instances also provide the following functions for backwards compatibility:
            //
            //		- addCallback(handler)
            //		- addErrback(handler)
            //		- callback(result)
            //		- errback(result)
            //
            //		Callbacks are allowed to return promises themselves, so
            //		you can build complicated sequences of events with ease.
            //
            //		The creator of the Deferred may specify a canceller.  The canceller
            //		is a function that will be called if Deferred.cancel is called
            //		before the Deferred fires. You can use this to implement clean
            //		aborting of an XMLHttpRequest, etc. Note that cancel will fire the
            //		deferred with a CancelledError (unless your canceller returns
            //		another kind of error), so the errbacks should be prepared to
            //		handle that error for cancellable Deferreds.
            // example:
            //	|	var deferred = new Deferred();
            //	|	setTimeout(function(){ deferred.callback({success: true}); }, 1000);
            //	|	return deferred;
            // example:
            //		Deferred objects are often used when making code asynchronous. It
            //		may be easiest to write functions in a synchronous manner and then
            //		split code using a deferred to trigger a response to a long-lived
            //		operation. For example, instead of register a callback function to
            //		denote when a rendering operation completes, the function can
            //		simply return a deferred:
            //
            //		|	// callback style:
            //		|	function renderLotsOfData(data, callback){
            //		|		var success = false
            //		|		try{
            //		|			for(var x in data){
            //		|				renderDataitem(data[x]);
            //		|			}
            //		|			success = true;
            //		|		}catch(e){ }
            //		|		if(callback){
            //		|			callback(success);
            //		|		}
            //		|	}
            //
            //		|	// using callback style
            //		|	renderLotsOfData(someDataObj, function(success){
            //		|		// handles success or failure
            //		|		if(!success){
            //		|			promptUserToRecover();
            //		|		}
            //		|	});
            //		|	// NOTE: no way to add another callback here!!
            // example:
            //		Using a Deferred doesn't simplify the sending code any, but it
            //		provides a standard interface for callers and senders alike,
            //		providing both with a simple way to service multiple callbacks for
            //		an operation and freeing both sides from worrying about details
            //		such as "did this get called already?". With Deferreds, new
            //		callbacks can be added at any time.
            //
            //		|	// Deferred style:
            //		|	function renderLotsOfData(data){
            //		|		var d = new Deferred();
            //		|		try{
            //		|			for(var x in data){
            //		|				renderDataitem(data[x]);
            //		|			}
            //		|			d.callback(true);
            //		|		}catch(e){
            //		|			d.errback(new Error("rendering failed"));
            //		|		}
            //		|		return d;
            //		|	}
            //
            //		|	// using Deferred style
            //		|	renderLotsOfData(someDataObj).then(null, function(){
            //		|		promptUserToRecover();
            //		|	});
            //		|	// NOTE: addErrback and addCallback both return the Deferred
            //		|	// again, so we could chain adding callbacks or save the
            //		|	// deferred for later should we need to be notified again.
            // example:
            //		In this example, renderLotsOfData is synchronous and so both
            //		versions are pretty artificial. Putting the data display on a
            //		timeout helps show why Deferreds rock:
            //
            //		|	// Deferred style and async func
            //		|	function renderLotsOfData(data){
            //		|		var d = new Deferred();
            //		|		setTimeout(function(){
            //		|			try{
            //		|				for(var x in data){
            //		|					renderDataitem(data[x]);
            //		|				}
            //		|				d.callback(true);
            //		|			}catch(e){
            //		|				d.errback(new Error("rendering failed"));
            //		|			}
            //		|		}, 100);
            //		|		return d;
            //		|	}
            //
            //		|	// using Deferred style
            //		|	renderLotsOfData(someDataObj).then(null, function(){
            //		|		promptUserToRecover();
            //		|	});
            //
            //		Note that the caller doesn't have to change his code at all to
            //		handle the asynchronous case.
            var result, finished, canceled, fired, isError, head, nextListener;
            var promise = JSProf.LPD(43749, this, 'promise').promise = JSProf.LRSP(43749, JSProf.LNE(43748, new (JSProf.LFC(43747, Promise, true))(), 'Promise'));
            function complete(value) {
                if (JSProf.LRE(43750, finished)) {
                    throw JSProf.LNE(43752, new (JSProf.LFC(43751, Error, true))("This deferred has already been resolved"), 'Error');
                }
                result = JSProf.LWR(43754, result, JSProf.LRE(43753, value));
                finished = JSProf.LWR(43755, finished, true);
                JSProf.LFC(43756, notify, false)();
            }
            function notify() {
                var mutated;
                while (!JSProf.LRE(43757, mutated) && JSProf.LRE(43758, nextListener)) {
                    var listener = JSProf.LRE(43759, nextListener);
                    nextListener = JSProf.LWR(43761, nextListener, JSProf.LGD(43760, nextListener, 'next').next);
                    if (mutated = JSProf.LWR(43764, mutated, JSProf.LGD(43762, listener, 'progress').progress == JSProf.LRE(43763, mutator))) {
                        // assignment and check
                        finished = JSProf.LWR(43765, finished, false);
                    }
                    var func = JSProf.LRE(43766, isError) ? JSProf.LGD(43767, listener, 'error').error : JSProf.LGD(43768, listener, 'resolved').resolved;
                    if (JSProf.LFC(43769, has, false)("config-useDeferredInstrumentation")) {
                        if (JSProf.LRE(43770, isError) && JSProf.LGD(43771, NewDeferred, 'instrumentRejected').instrumentRejected) {
                            JSProf.LMC(43774, NewDeferred, 'instrumentRejected').instrumentRejected(JSProf.LRE(43772, result), !!JSProf.LRE(43773, func));
                        }
                    }
                    if (JSProf.LRE(43775, func)) {
                        try {
                            var newResult = JSProf.LFC(43777, func, false)(JSProf.LRE(43776, result));
                            if (JSProf.LRE(43778, newResult) && typeof JSProf.LGD(43779, newResult, 'then').then === "function") {
                                JSProf.LMC(43786, newResult, 'then').then(JSProf.LMC(43781, lang, 'hitch').hitch(JSProf.LGD(43780, listener, 'deferred').deferred, "resolve"), JSProf.LMC(43783, lang, 'hitch').hitch(JSProf.LGD(43782, listener, 'deferred').deferred, "reject"), JSProf.LMC(43785, lang, 'hitch').hitch(JSProf.LGD(43784, listener, 'deferred').deferred, "progress"));
                                continue;
                            }
                            var unchanged = JSProf.LRE(43787, mutated) && JSProf.LRE(43788, newResult) === undefined;
                            if (JSProf.LRE(43789, mutated) && !JSProf.LRE(43790, unchanged)) {
                                isError = JSProf.LWR(43793, isError, JSProf.LRE(43791, newResult) instanceof JSProf.LRU(43792, typeof Error === 'undefined' ? undefined : Error));
                            }
                            JSProf.LMC(43799, listener.deferred, JSProf.TMPS.tc4131ad8209617903c7afb081fd76e1268fd567a = JSProf.LRE(43794, unchanged) && JSProf.LRE(43795, isError) ? "reject" : "resolve", 1)[JSProf.TMPS.tc4131ad8209617903c7afb081fd76e1268fd567a](JSProf.LRE(43796, unchanged) ? JSProf.LRE(43797, result) : JSProf.LRE(43798, newResult));
                        } catch (e) {
                            JSProf.LMC(43801, listener.deferred, 'reject').reject(JSProf.LRE(43800, e));
                        }
                    } else {
                        if (JSProf.LRE(43802, isError)) {
                            JSProf.LMC(43804, listener.deferred, 'reject').reject(JSProf.LRE(43803, result));
                        } else {
                            JSProf.LMC(43806, listener.deferred, 'resolve').resolve(JSProf.LRE(43805, result));
                        }
                    }
                }
            }
            JSProf.LPD(43810, this, 'isResolved').isResolved = JSProf.LRSP(43810, JSProf.LPD(43809, promise, 'isResolved').isResolved = JSProf.LRSP(43809, JSProf.LNF(43808, function () {
                // summary:
                //		Checks whether the deferred has been resolved.
                // returns: Boolean
                return JSProf.LRE(43807, fired) == 0;
            }, 12)));
            JSProf.LPD(43814, this, 'isRejected').isRejected = JSProf.LRSP(43814, JSProf.LPD(43813, promise, 'isRejected').isRejected = JSProf.LRSP(43813, JSProf.LNF(43812, function () {
                // summary:
                //		Checks whether the deferred has been rejected.
                // returns: Boolean
                return JSProf.LRE(43811, fired) == 1;
            }, 12)));
            JSProf.LPD(43818, this, 'isFulfilled').isFulfilled = JSProf.LRSP(43818, JSProf.LPD(43817, promise, 'isFulfilled').isFulfilled = JSProf.LRSP(43817, JSProf.LNF(43816, function () {
                // summary:
                //		Checks whether the deferred has been resolved or rejected.
                // returns: Boolean
                return JSProf.LRE(43815, fired) >= 0;
            }, 12)));
            JSProf.LPD(43822, this, 'isCanceled').isCanceled = JSProf.LRSP(43822, JSProf.LPD(43821, promise, 'isCanceled').isCanceled = JSProf.LRSP(43821, JSProf.LNF(43820, function () {
                // summary:
                //		Checks whether the deferred has been canceled.
                // returns: Boolean
                return JSProf.LRE(43819, canceled);
            }, 12)));
            // calling resolve will resolve the promise
            JSProf.LPD(43832, this, 'resolve').resolve = JSProf.LRSP(43832, JSProf.LPD(43831, this, 'callback').callback = JSProf.LRSP(43831, JSProf.LNF(43830, function (value) {
                // summary:
                //		Fulfills the Deferred instance successfully with the provide value
                JSProf.LPD(43824, this, 'fired').fired = JSProf.LRSP(43824, fired = JSProf.LWR(43823, fired, 0));
                JSProf.LPD(43827, this, 'results').results = JSProf.LRSP(43827, JSProf.LNE(43826, [
                    JSProf.LRE(43825, value),
                    null
                ], 10));
                JSProf.LFC(43829, complete, false)(JSProf.LRE(43828, value));
            }, 12)));
            // calling error will indicate that the promise failed
            JSProf.LPD(43848, this, 'reject').reject = JSProf.LRSP(43848, JSProf.LPD(43847, this, 'errback').errback = JSProf.LRSP(43847, JSProf.LNF(43846, function (error) {
                // summary:
                //		Fulfills the Deferred instance as an error with the provided error
                isError = JSProf.LWR(43833, isError, true);
                JSProf.LPD(43835, this, 'fired').fired = JSProf.LRSP(43835, fired = JSProf.LWR(43834, fired, 1));
                if (JSProf.LFC(43836, has, false)("config-useDeferredInstrumentation")) {
                    if (JSProf.LGD(43837, NewDeferred, 'instrumentRejected').instrumentRejected) {
                        JSProf.LMC(43840, NewDeferred, 'instrumentRejected').instrumentRejected(JSProf.LRE(43838, error), !!JSProf.LRE(43839, nextListener));
                    }
                }
                JSProf.LFC(43842, complete, false)(JSProf.LRE(43841, error));
                JSProf.LPD(43845, this, 'results').results = JSProf.LRSP(43845, JSProf.LNE(43844, [
                    null,
                    JSProf.LRE(43843, error)
                ], 10));
            }, 12)));
            // call progress to provide updates on the progress on the completion of the promise
            JSProf.LPD(43858, this, 'progress').progress = JSProf.LRSP(43858, JSProf.LNF(43857, function (update) {
                // summary:
                //		Send progress events to all listeners
                var listener = JSProf.LRE(43849, nextListener);
                while (JSProf.LRE(43850, listener)) {
                    var progress = JSProf.LGD(43851, listener, 'progress').progress;
                    JSProf.LRE(43852, progress) && JSProf.LFC(43854, progress, false)(JSProf.LRE(43853, update));
                    listener = JSProf.LWR(43856, listener, JSProf.LGD(43855, listener, 'next').next);
                }
            }, 12));
            JSProf.LPD(43864, this, 'addCallbacks').addCallbacks = JSProf.LRSP(43864, JSProf.LNF(43863, function (callback, errback) {
                // summary:
                //		Adds callback and error callback for this deferred instance.
                // callback: Function?
                //		The callback attached to this deferred object.
                // errback: Function?
                //		The error callback attached to this deferred object.
                // returns:
                //		Returns this deferred object.
                JSProf.LMC(43862, this, 'then').then(JSProf.LRE(43859, callback), JSProf.LRE(43860, errback), JSProf.LRE(43861, mutator));
                return this;    // Deferred
            }, 12));
            // provide the implementation of the promise
            JSProf.LPD(43883, promise, 'then').then = JSProf.LRSP(43883, JSProf.LPD(43882, this, 'then').then = JSProf.LRSP(43882, JSProf.LNF(43881, function (resolvedCallback, errorCallback, progressCallback) {
                // summary:
                //		Adds a fulfilledHandler, errorHandler, and progressHandler to be called for
                //		completion of a promise. The fulfilledHandler is called when the promise
                //		is fulfilled. The errorHandler is called when a promise fails. The
                //		progressHandler is called for progress events. All arguments are optional
                //		and non-function values are ignored. The progressHandler is not only an
                //		optional argument, but progress events are purely optional. Promise
                //		providers are not required to ever create progress events.
                //
                //		This function will return a new promise that is fulfilled when the given
                //		fulfilledHandler or errorHandler callback is finished. This allows promise
                //		operations to be chained together. The value returned from the callback
                //		handler is the fulfillment value for the returned promise. If the callback
                //		throws an error, the returned promise will be moved to failed state.
                //
                // returns:
                //		Returns a new promise that represents the result of the
                //		execution of the callback. The callbacks will never affect the original promises value.
                // example:
                //		An example of using a CommonJS compliant promise:
                //		|	asyncComputeTheAnswerToEverything().
                //		|		then(addTwo).
                //		|		then(printResult, onError);
                //		|	>44
                //
                var returnDeferred = JSProf.LRE(43865, progressCallback) == JSProf.LRE(43866, mutator) ? this : JSProf.LNE(43869, new (JSProf.LFC(43868, Deferred, true))(JSProf.LGD(43867, promise, 'cancel').cancel), 'Deferred');
                var listener = JSProf.LNE(43870, {
                        resolved: resolvedCallback,
                        error: errorCallback,
                        progress: progressCallback,
                        deferred: returnDeferred
                    }, 11);
                if (JSProf.LRE(43871, nextListener)) {
                    head = JSProf.LWR(43874, head, JSProf.LPD(43873, head, 'next').next = JSProf.LRSP(43873, JSProf.LRE(43872, listener)));
                } else {
                    nextListener = JSProf.LWR(43877, nextListener, head = JSProf.LWR(43876, head, JSProf.LRE(43875, listener)));
                }
                if (JSProf.LRE(43878, finished)) {
                    JSProf.LFC(43879, notify, false)();
                }
                return JSProf.LGD(43880, returnDeferred, 'promise').promise;    // Promise
            }, 12)));
            var deferred = this;
            JSProf.LPD(43901, promise, 'cancel').cancel = JSProf.LRSP(43901, JSProf.LPD(43900, this, 'cancel').cancel = JSProf.LRSP(43900, JSProf.LNF(43899, function () {
                // summary:
                //		Cancels the asynchronous operation
                if (!JSProf.LRE(43884, finished)) {
                    var error = JSProf.LRE(43885, canceller) && JSProf.LFC(43887, canceller, false)(JSProf.LRE(43886, deferred));
                    if (!JSProf.LRE(43888, finished)) {
                        if (!(JSProf.LRE(43889, error) instanceof JSProf.LRU(43890, typeof Error === 'undefined' ? undefined : Error))) {
                            error = JSProf.LWR(43894, error, JSProf.LNE(43893, new (JSProf.LFC(43892, CancelError, true))(JSProf.LRE(43891, error)), 'CancelError'));
                        }
                        JSProf.LPD(43895, error, 'log').log = JSProf.LRSP(43895, false);
                        JSProf.LMC(43897, deferred, 'reject').reject(JSProf.LRE(43896, error));
                    }
                }
                canceled = JSProf.LWR(43898, canceled, true);
            }, 12)));
            JSProf.LFC(43903, freeze, false)(JSProf.LRE(43902, promise));
        }, 12));
    JSProf.LMC(43924, lang, 'extend').extend(JSProf.LRE(43908, Deferred), JSProf.LNE(43923, {
        addCallback: JSProf.LNF(43912, function (callback) {
            // summary:
            //		Adds successful callback for this deferred instance.
            // returns:
            //		Returns this deferred object.
            return JSProf.LMC(43911, this, 'addCallbacks').addCallbacks(JSProf.LMC(43910, lang.hitch, 'apply').apply(JSProf.LRE(43909, dojo), arguments));    // Deferred
        }, 12),
        addErrback: JSProf.LNF(43916, function (errback) {
            // summary:
            //		Adds error callback for this deferred instance.
            // returns:
            //		Returns this deferred object.
            return JSProf.LMC(43915, this, 'addCallbacks').addCallbacks(null, JSProf.LMC(43914, lang.hitch, 'apply').apply(JSProf.LRE(43913, dojo), arguments));    // Deferred
        }, 12),
        addBoth: JSProf.LNF(43922, function (callback) {
            // summary:
            //		Add handler as both successful callback and error callback for this deferred instance.
            // returns:
            //		Returns this deferred object.
            var enclosed = JSProf.LMC(43918, lang.hitch, 'apply').apply(JSProf.LRE(43917, dojo), arguments);
            return JSProf.LMC(43921, this, 'addCallbacks').addCallbacks(JSProf.LRE(43919, enclosed), JSProf.LRE(43920, enclosed));    // Deferred
        }, 12),
        fired: -1
    }, 11));
    JSProf.LPD(43927, Deferred, 'when').when = JSProf.LRSP(43927, JSProf.LPD(43926, dojo, 'when').when = JSProf.LRSP(43926, JSProf.LRE(43925, when)));
    return JSProf.LRE(43928, Deferred);
}, 12));