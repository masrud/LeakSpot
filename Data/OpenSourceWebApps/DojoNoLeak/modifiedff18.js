JSProf.LFC(10788, define, false)(JSProf.LNE(10554, [
    "./has",
    "./_base/lang",
    "./errors/CancelError",
    "./promise/Promise",
    "./has!config-deferredInstrumentation?./promise/instrumentation"
], 10), JSProf.LNF(10787, function (has, lang, CancelError, Promise, instrumentation) {
    "use strict";
    // module:
    //		dojo/Deferred
    var PROGRESS = 0, RESOLVED = 1, REJECTED = 2;
    var FULFILLED_ERROR_MESSAGE = "This deferred has already been fulfilled.";
    var freezeObject = JSProf.LGD(10555, Object, 'freeze').freeze || JSProf.LNF(10556, function () {
        }, 12);
    var signalWaiting = JSProf.LNF(10573, function (waiting, type, result, rejection, deferred) {
            if (JSProf.LFC(10557, has, false)("config-deferredInstrumentation")) {
                if (JSProf.LRE(10558, type) === JSProf.LRE(10559, REJECTED) && JSProf.LGD(10560, Deferred, 'instrumentRejected').instrumentRejected && JSProf.LGD(10561, waiting, 'length').length === 0) {
                    JSProf.LMC(10565, Deferred, 'instrumentRejected').instrumentRejected(JSProf.LRE(10562, result), false, JSProf.LRE(10563, rejection), JSProf.LRE(10564, deferred));
                }
            }
            for (var i = 0; JSProf.LRE(10566, i) < JSProf.LGD(10567, waiting, 'length').length; i++) {
                JSProf.LFC(10572, signalListener, false)(JSProf.LGE(10568, waiting, 'i')[i], JSProf.LRE(10569, type), JSProf.LRE(10570, result), JSProf.LRE(10571, rejection));
            }
        }, 12);
    var signalListener = JSProf.LNF(10621, function (listener, type, result, rejection) {
            var func = JSProf.LGE(10574, listener, 'type')[type];
            var deferred = JSProf.LGD(10575, listener, 'deferred').deferred;
            if (JSProf.LRE(10576, func)) {
                try {
                    var newResult = JSProf.LFC(10578, func, false)(JSProf.LRE(10577, result));
                    if (JSProf.LRE(10579, type) === JSProf.LRE(10580, PROGRESS)) {
                        if (typeof JSProf.LRE(10581, newResult) !== "undefined") {
                            JSProf.LFC(10585, signalDeferred, false)(JSProf.LRE(10582, deferred), JSProf.LRE(10583, type), JSProf.LRE(10584, newResult));
                        }
                    } else {
                        if (JSProf.LRE(10586, newResult) && typeof JSProf.LGD(10587, newResult, 'then').then === "function") {
                            JSProf.LPD(10589, listener, 'cancel').cancel = JSProf.LRSP(10589, JSProf.LGD(10588, newResult, 'cancel').cancel);
                            JSProf.LMC(10599, newResult, 'then').then(JSProf.LFC(10592, makeDeferredSignaler, false)(JSProf.LRE(10590, deferred), JSProf.LRE(10591, RESOLVED)), JSProf.LFC(10595, makeDeferredSignaler, false)(JSProf.LRE(10593, deferred), JSProf.LRE(10594, REJECTED)), JSProf.LFC(10598, makeDeferredSignaler, false)(JSProf.LRE(10596, deferred), JSProf.LRE(10597, PROGRESS)));
                            return;
                        }
                        JSProf.LFC(10603, signalDeferred, false)(JSProf.LRE(10600, deferred), JSProf.LRE(10601, RESOLVED), JSProf.LRE(10602, newResult));
                    }
                } catch (error) {
                    JSProf.LFC(10607, signalDeferred, false)(JSProf.LRE(10604, deferred), JSProf.LRE(10605, REJECTED), JSProf.LRE(10606, error));
                }
            } else {
                JSProf.LFC(10611, signalDeferred, false)(JSProf.LRE(10608, deferred), JSProf.LRE(10609, type), JSProf.LRE(10610, result));
            }
            if (JSProf.LFC(10612, has, false)("config-deferredInstrumentation")) {
                if (JSProf.LRE(10613, type) === JSProf.LRE(10614, REJECTED) && JSProf.LGD(10615, Deferred, 'instrumentRejected').instrumentRejected) {
                    JSProf.LMC(10620, Deferred, 'instrumentRejected').instrumentRejected(JSProf.LRE(10616, result), !!JSProf.LRE(10617, func), JSProf.LRE(10618, rejection), JSProf.LGD(10619, deferred, 'promise').promise);
                }
            }
        }, 12);
    var makeDeferredSignaler = JSProf.LNF(10627, function (deferred, type) {
            return JSProf.LNF(10626, function (value) {
                JSProf.LFC(10625, signalDeferred, false)(JSProf.LRE(10622, deferred), JSProf.LRE(10623, type), JSProf.LRE(10624, value));
            }, 12);
        }, 12);
    var signalDeferred = JSProf.LNF(10639, function (deferred, type, result) {
            if (!JSProf.LMC(10628, deferred, 'isCanceled').isCanceled()) {
                switch (JSProf.LRE(10629, type)) {
                case JSProf.LRE(10630, PROGRESS):
                    JSProf.LMC(10632, deferred, 'progress').progress(JSProf.LRE(10631, result));
                    break;
                case JSProf.LRE(10633, RESOLVED):
                    JSProf.LMC(10635, deferred, 'resolve').resolve(JSProf.LRE(10634, result));
                    break;
                case JSProf.LRE(10636, REJECTED):
                    JSProf.LMC(10638, deferred, 'reject').reject(JSProf.LRE(10637, result));
                    break;
                }
            }
        }, 12);
    var Deferred = JSProf.LNF(10780, function (canceler) {
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
            var promise = JSProf.LPD(10642, this, 'promise').promise = JSProf.LRSP(10642, JSProf.LNE(10641, new (JSProf.LFC(10640, Promise, true))(), 'Promise'));
            var deferred = this;
            var fulfilled, result, rejection;
            var canceled = false;
            var waiting = JSProf.LNE(10643, [], 10);
            if (JSProf.LFC(10644, has, false)("config-deferredInstrumentation") && JSProf.LGD(10645, Error, 'captureStackTrace').captureStackTrace) {
                JSProf.LMC(10648, Error, 'captureStackTrace').captureStackTrace(JSProf.LRE(10646, deferred), JSProf.LRE(10647, Deferred));
                JSProf.LMC(10651, Error, 'captureStackTrace').captureStackTrace(JSProf.LRE(10649, promise), JSProf.LRE(10650, Deferred));
            }
            JSProf.LPD(10656, this, 'isResolved').isResolved = JSProf.LRSP(10656, JSProf.LPD(10655, promise, 'isResolved').isResolved = JSProf.LRSP(10655, JSProf.LNF(10654, function () {
                // summary:
                //		Checks whether the deferred has been resolved.
                // returns: Boolean
                return JSProf.LRE(10652, fulfilled) === JSProf.LRE(10653, RESOLVED);
            }, 12)));
            JSProf.LPD(10661, this, 'isRejected').isRejected = JSProf.LRSP(10661, JSProf.LPD(10660, promise, 'isRejected').isRejected = JSProf.LRSP(10660, JSProf.LNF(10659, function () {
                // summary:
                //		Checks whether the deferred has been rejected.
                // returns: Boolean
                return JSProf.LRE(10657, fulfilled) === JSProf.LRE(10658, REJECTED);
            }, 12)));
            JSProf.LPD(10665, this, 'isFulfilled').isFulfilled = JSProf.LRSP(10665, JSProf.LPD(10664, promise, 'isFulfilled').isFulfilled = JSProf.LRSP(10664, JSProf.LNF(10663, function () {
                // summary:
                //		Checks whether the deferred has been resolved or rejected.
                // returns: Boolean
                return !!JSProf.LRE(10662, fulfilled);
            }, 12)));
            JSProf.LPD(10669, this, 'isCanceled').isCanceled = JSProf.LRSP(10669, JSProf.LPD(10668, promise, 'isCanceled').isCanceled = JSProf.LRSP(10668, JSProf.LNF(10667, function () {
                // summary:
                //		Checks whether the deferred has been canceled.
                // returns: Boolean
                return JSProf.LRE(10666, canceled);
            }, 12)));
            JSProf.LPD(10683, this, 'progress').progress = JSProf.LRSP(10683, JSProf.LNF(10682, function (update, strict) {
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
                if (!JSProf.LRE(10670, fulfilled)) {
                    JSProf.LFC(10675, signalWaiting, false)(JSProf.LRE(10671, waiting), JSProf.LRE(10672, PROGRESS), JSProf.LRE(10673, update), null, JSProf.LRE(10674, deferred));
                    return JSProf.LRE(10676, promise);
                } else if (JSProf.LRE(10677, strict) === true) {
                    throw JSProf.LNE(10680, new (JSProf.LFC(10679, Error, true))(JSProf.LRE(10678, FULFILLED_ERROR_MESSAGE)), 'Error');
                } else {
                    return JSProf.LRE(10681, promise);
                }
            }, 12));
            JSProf.LPD(10699, this, 'resolve').resolve = JSProf.LRSP(10699, JSProf.LNF(10698, function (value, strict) {
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
                if (!JSProf.LRE(10684, fulfilled)) {
                    // Set fulfilled, store value. After signaling waiting listeners unset
                    // waiting.
                    JSProf.LFC(10691, signalWaiting, false)(JSProf.LRE(10685, waiting), fulfilled = JSProf.LWR(10687, fulfilled, JSProf.LRE(10686, RESOLVED)), result = JSProf.LWR(10689, result, JSProf.LRE(10688, value)), null, JSProf.LRE(10690, deferred));
                    waiting = null;
                    return JSProf.LRE(10692, promise);
                } else if (JSProf.LRE(10693, strict) === true) {
                    throw JSProf.LNE(10696, new (JSProf.LFC(10695, Error, true))(JSProf.LRE(10694, FULFILLED_ERROR_MESSAGE)), 'Error');
                } else {
                    return JSProf.LRE(10697, promise);
                }
            }, 12));
            var reject = JSProf.LPD(10722, this, 'reject').reject = JSProf.LRSP(10722, JSProf.LNF(10721, function (error, strict) {
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
                    if (!JSProf.LRE(10700, fulfilled)) {
                        if (JSProf.LFC(10701, has, false)("config-deferredInstrumentation") && JSProf.LGD(10702, Error, 'captureStackTrace').captureStackTrace) {
                            JSProf.LMC(10706, Error, 'captureStackTrace').captureStackTrace(rejection = JSProf.LWR(10704, rejection, JSProf.LNE(10703, {}, 11)), JSProf.LRE(10705, reject));
                        }
                        JSProf.LFC(10714, signalWaiting, false)(JSProf.LRE(10707, waiting), fulfilled = JSProf.LWR(10709, fulfilled, JSProf.LRE(10708, REJECTED)), result = JSProf.LWR(10711, result, JSProf.LRE(10710, error)), JSProf.LRE(10712, rejection), JSProf.LRE(10713, deferred));
                        waiting = null;
                        return JSProf.LRE(10715, promise);
                    } else if (JSProf.LRE(10716, strict) === true) {
                        throw JSProf.LNE(10719, new (JSProf.LFC(10718, Error, true))(JSProf.LRE(10717, FULFILLED_ERROR_MESSAGE)), 'Error');
                    } else {
                        return JSProf.LRE(10720, promise);
                    }
                }, 12));
            JSProf.LPD(10748, this, 'then').then = JSProf.LRSP(10748, JSProf.LPD(10747, promise, 'then').then = JSProf.LRSP(10747, JSProf.LNF(10746, function (callback, errback, progback) {
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
                var listener = JSProf.LNE(10726, [
                        JSProf.LRE(10723, progback),
                        JSProf.LRE(10724, callback),
                        JSProf.LRE(10725, errback)
                    ], 10);
                // Ensure we cancel the promise we're waiting for, or if callback/errback
                // have returned a promise, cancel that one.
                JSProf.LPD(10728, listener, 'cancel').cancel = JSProf.LRSP(10728, JSProf.LGD(10727, promise, 'cancel').cancel);
                JSProf.LPD(10735, listener, 'deferred').deferred = JSProf.LRSP(10735, JSProf.LNE(10734, new (JSProf.LFC(10733, Deferred, true))(JSProf.LNF(10732, function (reason) {
                    // Check whether cancel is really available, returned promises are not
                    // required to expose `cancel`
                    return JSProf.LGD(10729, listener, 'cancel').cancel && JSProf.LMC(10731, listener, 'cancel').cancel(JSProf.LRE(10730, reason));
                }, 12)), 'Deferred'));
                if (JSProf.LRE(10736, fulfilled) && !JSProf.LRE(10737, waiting)) {
                    JSProf.LFC(10742, signalListener, false)(JSProf.LRE(10738, listener), JSProf.LRE(10739, fulfilled), JSProf.LRE(10740, result), JSProf.LRE(10741, rejection));
                } else {
                    JSProf.LMC(10744, waiting, 'push').push(JSProf.LRE(10743, listener));
                }
                return JSProf.LGD(10745, listener.deferred, 'promise').promise;
            }, 12)));
            JSProf.LPD(10777, this, 'cancel').cancel = JSProf.LRSP(10777, JSProf.LPD(10776, promise, 'cancel').cancel = JSProf.LRSP(10776, JSProf.LNF(10775, function (reason, strict) {
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
                if (!JSProf.LRE(10749, fulfilled)) {
                    // Cancel can be called even after the deferred is fulfilled
                    if (JSProf.LRE(10750, canceler)) {
                        var returnedReason = JSProf.LFC(10752, canceler, false)(JSProf.LRE(10751, reason));
                        reason = JSProf.LWR(10756, reason, typeof JSProf.LRE(10753, returnedReason) === "undefined" ? JSProf.LRE(10754, reason) : JSProf.LRE(10755, returnedReason));
                    }
                    canceled = JSProf.LWR(10757, canceled, true);
                    if (!JSProf.LRE(10758, fulfilled)) {
                        // Allow canceler to provide its own reason, but fall back to a CancelError
                        if (typeof JSProf.LRE(10759, reason) === "undefined") {
                            reason = JSProf.LWR(10762, reason, JSProf.LNE(10761, new (JSProf.LFC(10760, CancelError, true))(), 'CancelError'));
                        }
                        JSProf.LFC(10764, reject, false)(JSProf.LRE(10763, reason));
                        return JSProf.LRE(10765, reason);
                    } else if (JSProf.LRE(10766, fulfilled) === JSProf.LRE(10767, REJECTED) && JSProf.LRE(10768, result) === JSProf.LRE(10769, reason)) {
                        return JSProf.LRE(10770, reason);
                    }
                } else if (JSProf.LRE(10771, strict) === true) {
                    throw JSProf.LNE(10774, new (JSProf.LFC(10773, Error, true))(JSProf.LRE(10772, FULFILLED_ERROR_MESSAGE)), 'Error');
                }
            }, 12)));
            JSProf.LFC(10779, freezeObject, false)(JSProf.LRE(10778, promise));
        }, 12);
    JSProf.LPD(10782, Deferred.prototype, 'toString').toString = JSProf.LRSP(10782, JSProf.LNF(10781, function () {
        // returns: String
        //		Returns `[object Deferred]`.
        return "[object Deferred]";
    }, 12));
    if (JSProf.LRE(10783, instrumentation)) {
        JSProf.LFC(10785, instrumentation, false)(JSProf.LRE(10784, Deferred));
    }
    return JSProf.LRE(10786, Deferred);
}, 12));