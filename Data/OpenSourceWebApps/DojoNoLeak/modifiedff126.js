JSProf.LFC(42454, define, false)(JSProf.LNE(42379, [
    './util',
    '../errors/RequestTimeoutError',
    '../errors/CancelError',
    '../_base/array',
    '../has!host-browser?../_base/window:',
    '../has!host-browser?dom-addeventlistener?:../on:'
], 10), JSProf.LNF(42453, function (util, RequestTimeoutError, CancelError, array, win, on) {
    JSProf.LFD(42451, watchInFlight);
    JSProf.LFD(42452, watch);
    // avoid setting a timer per request. It degrades performance on IE
    // something fierece if we don't use unified loops.
    var _inFlightIntvl = null, _inFlight = JSProf.LNE(42380, [], 10);
    function watchInFlight() {
        // summary:
        //		internal method that checks each inflight XMLHttpRequest to see
        //		if it has completed or if the timeout situation applies.
        var now = +JSProf.LNE(42382, new (JSProf.LFC(42381, Date, true))(), 'Date');
        // we need manual loop because we often modify _inFlight (and therefore 'i') while iterating
        for (var i = 0, dfd; JSProf.LRE(42383, i) < JSProf.LGD(42384, _inFlight, 'length').length && (dfd = JSProf.LWR(42386, dfd, JSProf.LGE(42385, _inFlight, 'i')[i])); i++) {
            var response = JSProf.LGD(42387, dfd, 'response').response, options = JSProf.LGD(42388, response, 'options').options;
            if (JSProf.LGD(42389, dfd, 'isCanceled').isCanceled && JSProf.LMC(42390, dfd, 'isCanceled').isCanceled() || JSProf.LGD(42391, dfd, 'isValid').isValid && !JSProf.LMC(42393, dfd, 'isValid').isValid(JSProf.LRE(42392, response))) {
                JSProf.LMC(42394, _inFlight, 'splice').splice(i--, 1);
                JSProf.LGD(42395, watch, '_onAction')._onAction && JSProf.LMC(42396, watch, '_onAction')._onAction();
            } else if (JSProf.LGD(42397, dfd, 'isReady').isReady && JSProf.LMC(42399, dfd, 'isReady').isReady(JSProf.LRE(42398, response))) {
                JSProf.LMC(42400, _inFlight, 'splice').splice(i--, 1);
                JSProf.LMC(42402, dfd, 'handleResponse').handleResponse(JSProf.LRE(42401, response));
                JSProf.LGD(42403, watch, '_onAction')._onAction && JSProf.LMC(42404, watch, '_onAction')._onAction();
            } else if (JSProf.LGD(42405, dfd, 'startTime').startTime) {
                // did we timeout?
                if (JSProf.LGD(42406, dfd, 'startTime').startTime + (JSProf.LGD(42407, options, 'timeout').timeout || 0) < JSProf.LRE(42408, now)) {
                    JSProf.LMC(42409, _inFlight, 'splice').splice(i--, 1);
                    // Cancel the request so the io module can do appropriate cleanup.
                    JSProf.LMC(42413, dfd, 'cancel').cancel(JSProf.LNE(42412, new (JSProf.LFC(42411, RequestTimeoutError, true))('Timeout exceeded', JSProf.LRE(42410, response)), 'RequestTimeoutError'));
                    JSProf.LGD(42414, watch, '_onAction')._onAction && JSProf.LMC(42415, watch, '_onAction')._onAction();
                }
            }
        }
        JSProf.LGD(42416, watch, '_onInFlight')._onInFlight && JSProf.LMC(42418, watch, '_onInFlight')._onInFlight(JSProf.LRE(42417, dfd));
        if (!JSProf.LGD(42419, _inFlight, 'length').length) {
            JSProf.LFC(42421, clearInterval, false)(JSProf.LRE(42420, _inFlightIntvl));
            _inFlightIntvl = null;
        }
    }
    function watch(dfd) {
        // summary:
        //		Watches the io request represented by dfd to see if it completes.
        // dfd: Deferred
        //		The Deferred object to watch.
        // response: Object
        //		The object used as the value of the request promise.
        // validCheck: Function
        //		Function used to check if the IO request is still valid. Gets the dfd
        //		object as its only argument.
        // ioCheck: Function
        //		Function used to check if basic IO call worked. Gets the dfd
        //		object as its only argument.
        // resHandle: Function
        //		Function used to process response. Gets the dfd
        //		object as its only argument.
        if (JSProf.LGD(42422, dfd.response.options, 'timeout').timeout) {
            JSProf.LPD(42425, dfd, 'startTime').startTime = JSProf.LRSP(42425, +JSProf.LNE(42424, new (JSProf.LFC(42423, Date, true))(), 'Date'));
        }
        if (JSProf.LMC(42426, dfd, 'isFulfilled').isFulfilled()) {
            // bail out if the deferred is already fulfilled
            return;
        }
        JSProf.LMC(42428, _inFlight, 'push').push(JSProf.LRE(42427, dfd));
        if (!JSProf.LRE(42429, _inFlightIntvl)) {
            _inFlightIntvl = JSProf.LWR(42432, _inFlightIntvl, JSProf.LFC(42431, setInterval, false)(JSProf.LRE(42430, watchInFlight), 50));
        }
        // handle sync requests separately from async:
        // http://bugs.dojotoolkit.org/ticket/8467
        if (JSProf.LGD(42433, dfd.response.options, 'sync').sync) {
            JSProf.LFC(42434, watchInFlight, false)();
        }
    }
    JSProf.LPD(42442, watch, 'cancelAll').cancelAll = JSProf.LRSP(42442, JSProf.LNF(42441, function cancelAll() {
        // summary:
        //		Cancels all pending IO requests, regardless of IO type
        try {
            JSProf.LMC(42440, array, 'forEach').forEach(JSProf.LRE(42435, _inFlight), JSProf.LNF(42439, function (dfd) {
                try {
                    JSProf.LMC(42438, dfd, 'cancel').cancel(JSProf.LNE(42437, new (JSProf.LFC(42436, CancelError, true))('All requests canceled.'), 'CancelError'));
                } catch (e) {
                }
            }, 12));
        } catch (e) {
        }
    }, 12));
    if (JSProf.LRE(42443, win) && JSProf.LRE(42444, on) && JSProf.LGD(42445, win.doc, 'attachEvent').attachEvent) {
        // Automatically call cancel all io calls on unload in IE
        // http://bugs.dojotoolkit.org/ticket/2357
        JSProf.LFC(42449, on, false)(JSProf.LGD(42446, win, 'global').global, 'unload', JSProf.LNF(42448, function () {
            JSProf.LMC(42447, watch, 'cancelAll').cancelAll();
        }, 12));
    }
    return JSProf.LRE(42450, watch);
}, 12));