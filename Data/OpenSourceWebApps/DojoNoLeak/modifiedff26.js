JSProf.LFC(13931, define, false)(JSProf.LNE(13901, ["../_base/lang"], 10), JSProf.LNF(13930, function (lang) {
    JSProf.LFD(13929, throwAbstract);
    "use strict";
    // module:
    //		dojo/promise/Promise
    function throwAbstract() {
        throw JSProf.LNE(13903, new (JSProf.LFC(13902, TypeError, true))("abstract"), 'TypeError');
    }
    return JSProf.LMC(13928, lang, 'extend').extend(JSProf.LNF(13904, function Promise() {
    }, 12), JSProf.LNE(13927, {
        then: JSProf.LNF(13906, function (callback, errback, progback) {
            // summary:
            //		Add new callbacks to the promise.
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
            JSProf.LFC(13905, throwAbstract, false)();
        }, 12),
        cancel: JSProf.LNF(13908, function (reason, strict) {
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
            JSProf.LFC(13907, throwAbstract, false)();
        }, 12),
        isResolved: JSProf.LNF(13910, function () {
            // summary:
            //		Checks whether the promise has been resolved.
            // returns: Boolean
            JSProf.LFC(13909, throwAbstract, false)();
        }, 12),
        isRejected: JSProf.LNF(13912, function () {
            // summary:
            //		Checks whether the promise has been rejected.
            // returns: Boolean
            JSProf.LFC(13911, throwAbstract, false)();
        }, 12),
        isFulfilled: JSProf.LNF(13914, function () {
            // summary:
            //		Checks whether the promise has been resolved or rejected.
            // returns: Boolean
            JSProf.LFC(13913, throwAbstract, false)();
        }, 12),
        isCanceled: JSProf.LNF(13916, function () {
            // summary:
            //		Checks whether the promise has been canceled.
            // returns: Boolean
            JSProf.LFC(13915, throwAbstract, false)();
        }, 12),
        always: JSProf.LNF(13920, function (callbackOrErrback) {
            // summary:
            //		Add a callback to be invoked when the promise is resolved
            //		or rejected.
            // callbackOrErrback: Function?
            //		A function that is used both as a callback and errback.
            // returns: dojo/promise/Promise
            //		Returns a new promise for the result of the callback/errback.
            return JSProf.LMC(13919, this, 'then').then(JSProf.LRE(13917, callbackOrErrback), JSProf.LRE(13918, callbackOrErrback));
        }, 12),
        otherwise: JSProf.LNF(13923, function (errback) {
            // summary:
            //		Add new errbacks to the promise.
            // errback: Function?
            //		Callback to be invoked when the promise is rejected.
            // returns: dojo/promise/Promise
            //		Returns a new promise for the result of the errback.
            return JSProf.LMC(13922, this, 'then').then(null, JSProf.LRE(13921, errback));
        }, 12),
        trace: JSProf.LNF(13924, function () {
            return this;
        }, 12),
        traceRejected: JSProf.LNF(13925, function () {
            return this;
        }, 12),
        toString: JSProf.LNF(13926, function () {
            // returns: string
            //		Returns `[object Promise]`.
            return "[object Promise]";
        }, 12)
    }, 11));
}, 12));