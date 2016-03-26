JSProf.LFC(43833, define, false)(JSProf.LNE(43646, [
    "./kernel",
    "../Deferred",
    "../promise/Promise",
    "../errors/CancelError",
    "../has",
    "./lang",
    "../when"
], 10), JSProf.LNF(43832, function (dojo, NewDeferred, Promise, CancelError, has, lang, when) {
    // module:
    //		dojo/_base/Deferred
    var mutator = JSProf.LNF(43647, function () {
        }, 12);
    var freeze = JSProf.LGD(43648, Object, 'freeze').freeze || JSProf.LNF(43649, function () {
        }, 12);
    // A deferred provides an API for creating and resolving a promise.
    var Deferred = JSProf.LPD(43810, dojo, 'Deferred').Deferred = JSProf.LRSP(43810, JSProf.LNF(43809, function (canceller) {
            JSProf.LFD(43807, complete);
            JSProf.LFD(43808, notify);
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
            var promise = JSProf.LPD(43652, this, 'promise').promise = JSProf.LRSP(43652, JSProf.LNE(43651, new (JSProf.LFC(43650, Promise, true))(), 'Promise'));
            function complete(value) {
                if (JSProf.LRE(43653, finished)) {
                    throw JSProf.LNE(43655, new (JSProf.LFC(43654, Error, true))("This deferred has already been resolved"), 'Error');
                }
                result = JSProf.LWR(43657, result, JSProf.LRE(43656, value));
                finished = JSProf.LWR(43658, finished, true);
                JSProf.LFC(43659, notify, false)();
            }
            function notify() {
                var mutated;
                while (!JSProf.LRE(43660, mutated) && JSProf.LRE(43661, nextListener)) {
                    var listener = JSProf.LRE(43662, nextListener);
                    nextListener = JSProf.LWR(43664, nextListener, JSProf.LGD(43663, nextListener, 'next').next);
                    if (mutated = JSProf.LWR(43667, mutated, JSProf.LGD(43665, listener, 'progress').progress == JSProf.LRE(43666, mutator))) {
                        // assignment and check
                        finished = JSProf.LWR(43668, finished, false);
                    }
                    var func = JSProf.LRE(43669, isError) ? JSProf.LGD(43670, listener, 'error').error : JSProf.LGD(43671, listener, 'resolved').resolved;
                    if (JSProf.LFC(43672, has, false)("config-useDeferredInstrumentation")) {
                        if (JSProf.LRE(43673, isError) && JSProf.LGD(43674, NewDeferred, 'instrumentRejected').instrumentRejected) {
                            JSProf.LMC(43677, NewDeferred, 'instrumentRejected').instrumentRejected(JSProf.LRE(43675, result), !!JSProf.LRE(43676, func));
                        }
                    }
                    if (JSProf.LRE(43678, func)) {
                        try {
                            var newResult = JSProf.LFC(43680, func, false)(JSProf.LRE(43679, result));
                            if (JSProf.LRE(43681, newResult) && typeof JSProf.LGD(43682, newResult, 'then').then === "function") {
                                JSProf.LMC(43689, newResult, 'then').then(JSProf.LMC(43684, lang, 'hitch').hitch(JSProf.LGD(43683, listener, 'deferred').deferred, "resolve"), JSProf.LMC(43686, lang, 'hitch').hitch(JSProf.LGD(43685, listener, 'deferred').deferred, "reject"), JSProf.LMC(43688, lang, 'hitch').hitch(JSProf.LGD(43687, listener, 'deferred').deferred, "progress"));
                                continue;
                            }
                            var unchanged = JSProf.LRE(43690, mutated) && JSProf.LRE(43691, newResult) === undefined;
                            if (JSProf.LRE(43692, mutated) && !JSProf.LRE(43693, unchanged)) {
                                isError = JSProf.LWR(43696, isError, JSProf.LRE(43694, newResult) instanceof JSProf.LRU(43695, typeof Error === 'undefined' ? undefined : Error));
                            }
                            JSProf.LMC(43702, listener.deferred, JSProf.TMPS.tc4131ad8209617903c7afb081fd76e1268fd567a = JSProf.LRE(43697, unchanged) && JSProf.LRE(43698, isError) ? "reject" : "resolve", 1)[JSProf.TMPS.tc4131ad8209617903c7afb081fd76e1268fd567a](JSProf.LRE(43699, unchanged) ? JSProf.LRE(43700, result) : JSProf.LRE(43701, newResult));
                        } catch (e) {
                            JSProf.LMC(43704, listener.deferred, 'reject').reject(JSProf.LRE(43703, e));
                        }
                    } else {
                        if (JSProf.LRE(43705, isError)) {
                            JSProf.LMC(43707, listener.deferred, 'reject').reject(JSProf.LRE(43706, result));
                        } else {
                            JSProf.LMC(43709, listener.deferred, 'resolve').resolve(JSProf.LRE(43708, result));
                        }
                    }
                }
            }
            JSProf.LPD(43713, this, 'isResolved').isResolved = JSProf.LRSP(43713, JSProf.LPD(43712, promise, 'isResolved').isResolved = JSProf.LRSP(43712, JSProf.LNF(43711, function () {
                // summary:
                //		Checks whether the deferred has been resolved.
                // returns: Boolean
                return JSProf.LRE(43710, fired) == 0;
            }, 12)));
            JSProf.LPD(43717, this, 'isRejected').isRejected = JSProf.LRSP(43717, JSProf.LPD(43716, promise, 'isRejected').isRejected = JSProf.LRSP(43716, JSProf.LNF(43715, function () {
                // summary:
                //		Checks whether the deferred has been rejected.
                // returns: Boolean
                return JSProf.LRE(43714, fired) == 1;
            }, 12)));
            JSProf.LPD(43721, this, 'isFulfilled').isFulfilled = JSProf.LRSP(43721, JSProf.LPD(43720, promise, 'isFulfilled').isFulfilled = JSProf.LRSP(43720, JSProf.LNF(43719, function () {
                // summary:
                //		Checks whether the deferred has been resolved or rejected.
                // returns: Boolean
                return JSProf.LRE(43718, fired) >= 0;
            }, 12)));
            JSProf.LPD(43725, this, 'isCanceled').isCanceled = JSProf.LRSP(43725, JSProf.LPD(43724, promise, 'isCanceled').isCanceled = JSProf.LRSP(43724, JSProf.LNF(43723, function () {
                // summary:
                //		Checks whether the deferred has been canceled.
                // returns: Boolean
                return JSProf.LRE(43722, canceled);
            }, 12)));
            // calling resolve will resolve the promise
            JSProf.LPD(43735, this, 'resolve').resolve = JSProf.LRSP(43735, JSProf.LPD(43734, this, 'callback').callback = JSProf.LRSP(43734, JSProf.LNF(43733, function (value) {
                // summary:
                //		Fulfills the Deferred instance successfully with the provide value
                JSProf.LPD(43727, this, 'fired').fired = JSProf.LRSP(43727, fired = JSProf.LWR(43726, fired, 0));
                JSProf.LPD(43730, this, 'results').results = JSProf.LRSP(43730, JSProf.LNE(43729, [
                    JSProf.LRE(43728, value),
                    null
                ], 10));
                JSProf.LFC(43732, complete, false)(JSProf.LRE(43731, value));
            }, 12)));
            // calling error will indicate that the promise failed
            JSProf.LPD(43751, this, 'reject').reject = JSProf.LRSP(43751, JSProf.LPD(43750, this, 'errback').errback = JSProf.LRSP(43750, JSProf.LNF(43749, function (error) {
                // summary:
                //		Fulfills the Deferred instance as an error with the provided error
                isError = JSProf.LWR(43736, isError, true);
                JSProf.LPD(43738, this, 'fired').fired = JSProf.LRSP(43738, fired = JSProf.LWR(43737, fired, 1));
                if (JSProf.LFC(43739, has, false)("config-useDeferredInstrumentation")) {
                    if (JSProf.LGD(43740, NewDeferred, 'instrumentRejected').instrumentRejected) {
                        JSProf.LMC(43743, NewDeferred, 'instrumentRejected').instrumentRejected(JSProf.LRE(43741, error), !!JSProf.LRE(43742, nextListener));
                    }
                }
                JSProf.LFC(43745, complete, false)(JSProf.LRE(43744, error));
                JSProf.LPD(43748, this, 'results').results = JSProf.LRSP(43748, JSProf.LNE(43747, [
                    null,
                    JSProf.LRE(43746, error)
                ], 10));
            }, 12)));
            // call progress to provide updates on the progress on the completion of the promise
            JSProf.LPD(43761, this, 'progress').progress = JSProf.LRSP(43761, JSProf.LNF(43760, function (update) {
                // summary:
                //		Send progress events to all listeners
                var listener = JSProf.LRE(43752, nextListener);
                while (JSProf.LRE(43753, listener)) {
                    var progress = JSProf.LGD(43754, listener, 'progress').progress;
                    JSProf.LRE(43755, progress) && JSProf.LFC(43757, progress, false)(JSProf.LRE(43756, update));
                    listener = JSProf.LWR(43759, listener, JSProf.LGD(43758, listener, 'next').next);
                }
            }, 12));
            JSProf.LPD(43767, this, 'addCallbacks').addCallbacks = JSProf.LRSP(43767, JSProf.LNF(43766, function (callback, errback) {
                // summary:
                //		Adds callback and error callback for this deferred instance.
                // callback: Function?
                //		The callback attached to this deferred object.
                // errback: Function?
                //		The error callback attached to this deferred object.
                // returns:
                //		Returns this deferred object.
                JSProf.LMC(43765, this, 'then').then(JSProf.LRE(43762, callback), JSProf.LRE(43763, errback), JSProf.LRE(43764, mutator));
                return this;    // Deferred
            }, 12));
            // provide the implementation of the promise
            JSProf.LPD(43786, promise, 'then').then = JSProf.LRSP(43786, JSProf.LPD(43785, this, 'then').then = JSProf.LRSP(43785, JSProf.LNF(43784, function (resolvedCallback, errorCallback, progressCallback) {
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
                var returnDeferred = JSProf.LRE(43768, progressCallback) == JSProf.LRE(43769, mutator) ? this : JSProf.LNE(43772, new (JSProf.LFC(43771, Deferred, true))(JSProf.LGD(43770, promise, 'cancel').cancel), 'Deferred');
                var listener = JSProf.LNE(43773, {
                        resolved: resolvedCallback,
                        error: errorCallback,
                        progress: progressCallback,
                        deferred: returnDeferred
                    }, 11);
                if (JSProf.LRE(43774, nextListener)) {
                    head = JSProf.LWR(43777, head, JSProf.LPD(43776, head, 'next').next = JSProf.LRSP(43776, JSProf.LRE(43775, listener)));
                } else {
                    nextListener = JSProf.LWR(43780, nextListener, head = JSProf.LWR(43779, head, JSProf.LRE(43778, listener)));
                }
                if (JSProf.LRE(43781, finished)) {
                    JSProf.LFC(43782, notify, false)();
                }
                return JSProf.LGD(43783, returnDeferred, 'promise').promise;    // Promise
            }, 12)));
            var deferred = this;
            JSProf.LPD(43804, promise, 'cancel').cancel = JSProf.LRSP(43804, JSProf.LPD(43803, this, 'cancel').cancel = JSProf.LRSP(43803, JSProf.LNF(43802, function () {
                // summary:
                //		Cancels the asynchronous operation
                if (!JSProf.LRE(43787, finished)) {
                    var error = JSProf.LRE(43788, canceller) && JSProf.LFC(43790, canceller, false)(JSProf.LRE(43789, deferred));
                    if (!JSProf.LRE(43791, finished)) {
                        if (!(JSProf.LRE(43792, error) instanceof JSProf.LRU(43793, typeof Error === 'undefined' ? undefined : Error))) {
                            error = JSProf.LWR(43797, error, JSProf.LNE(43796, new (JSProf.LFC(43795, CancelError, true))(JSProf.LRE(43794, error)), 'CancelError'));
                        }
                        JSProf.LPD(43798, error, 'log').log = JSProf.LRSP(43798, false);
                        JSProf.LMC(43800, deferred, 'reject').reject(JSProf.LRE(43799, error));
                    }
                }
                canceled = JSProf.LWR(43801, canceled, true);
            }, 12)));
            JSProf.LFC(43806, freeze, false)(JSProf.LRE(43805, promise));
        }, 12));
    JSProf.LMC(43827, lang, 'extend').extend(JSProf.LRE(43811, Deferred), JSProf.LNE(43826, {
        addCallback: JSProf.LNF(43815, function (callback) {
            // summary:
            //		Adds successful callback for this deferred instance.
            // returns:
            //		Returns this deferred object.
            return JSProf.LMC(43814, this, 'addCallbacks').addCallbacks(JSProf.LMC(43813, lang.hitch, 'apply').apply(JSProf.LRE(43812, dojo), arguments));    // Deferred
        }, 12),
        addErrback: JSProf.LNF(43819, function (errback) {
            // summary:
            //		Adds error callback for this deferred instance.
            // returns:
            //		Returns this deferred object.
            return JSProf.LMC(43818, this, 'addCallbacks').addCallbacks(null, JSProf.LMC(43817, lang.hitch, 'apply').apply(JSProf.LRE(43816, dojo), arguments));    // Deferred
        }, 12),
        addBoth: JSProf.LNF(43825, function (callback) {
            // summary:
            //		Add handler as both successful callback and error callback for this deferred instance.
            // returns:
            //		Returns this deferred object.
            var enclosed = JSProf.LMC(43821, lang.hitch, 'apply').apply(JSProf.LRE(43820, dojo), arguments);
            return JSProf.LMC(43824, this, 'addCallbacks').addCallbacks(JSProf.LRE(43822, enclosed), JSProf.LRE(43823, enclosed));    // Deferred
        }, 12),
        fired: -1
    }, 11));
    JSProf.LPD(43830, Deferred, 'when').when = JSProf.LRSP(43830, JSProf.LPD(43829, dojo, 'when').when = JSProf.LRSP(43829, JSProf.LRE(43828, when)));
    return JSProf.LRE(43831, Deferred);
}, 12));