JSProf.LFC(42452, define, false)(JSProf.LNE(42377, [
    './util',
    '../errors/RequestTimeoutError',
    '../errors/CancelError',
    '../_base/array',
    '../has!host-browser?../_base/window:',
    '../has!host-browser?dom-addeventlistener?:../on:'
], 10), JSProf.LNF(42451, function (util, RequestTimeoutError, CancelError, array, win, on) {
    JSProf.LFD(42449, watchInFlight);
    JSProf.LFD(42450, watch);
    // avoid setting a timer per request. It degrades performance on IE
    // something fierece if we don't use unified loops.
    var _inFlightIntvl = null, _inFlight = JSProf.LNE(42378, [], 10);
    function watchInFlight() {
        // summary:
        //		internal method that checks each inflight XMLHttpRequest to see
        //		if it has completed or if the timeout situation applies.
        var now = +JSProf.LNE(42380, new (JSProf.LFC(42379, Date, true))(), 'Date');
        // we need manual loop because we often modify _inFlight (and therefore 'i') while iterating
        for (var i = 0, dfd; JSProf.LRE(42381, i) < JSProf.LGD(42382, _inFlight, 'length').length && (dfd = JSProf.LWR(42384, dfd, JSProf.LGE(42383, _inFlight, 'i')[i])); i++) {
            var response = JSProf.LGD(42385, dfd, 'response').response, options = JSProf.LGD(42386, response, 'options').options;
            if (JSProf.LGD(42387, dfd, 'isCanceled').isCanceled && JSProf.LMC(42388, dfd, 'isCanceled').isCanceled() || JSProf.LGD(42389, dfd, 'isValid').isValid && !JSProf.LMC(42391, dfd, 'isValid').isValid(JSProf.LRE(42390, response))) {
                JSProf.LMC(42392, _inFlight, 'splice').splice(i--, 1);
                JSProf.LGD(42393, watch, '_onAction')._onAction && JSProf.LMC(42394, watch, '_onAction')._onAction();
            } else if (JSProf.LGD(42395, dfd, 'isReady').isReady && JSProf.LMC(42397, dfd, 'isReady').isReady(JSProf.LRE(42396, response))) {
                JSProf.LMC(42398, _inFlight, 'splice').splice(i--, 1);
                JSProf.LMC(42400, dfd, 'handleResponse').handleResponse(JSProf.LRE(42399, response));
                JSProf.LGD(42401, watch, '_onAction')._onAction && JSProf.LMC(42402, watch, '_onAction')._onAction();
            } else if (JSProf.LGD(42403, dfd, 'startTime').startTime) {
                // did we timeout?
                if (JSProf.LGD(42404, dfd, 'startTime').startTime + (JSProf.LGD(42405, options, 'timeout').timeout || 0) < JSProf.LRE(42406, now)) {
                    JSProf.LMC(42407, _inFlight, 'splice').splice(i--, 1);
                    // Cancel the request so the io module can do appropriate cleanup.
                    JSProf.LMC(42411, dfd, 'cancel').cancel(JSProf.LNE(42410, new (JSProf.LFC(42409, RequestTimeoutError, true))('Timeout exceeded', JSProf.LRE(42408, response)), 'RequestTimeoutError'));
                    JSProf.LGD(42412, watch, '_onAction')._onAction && JSProf.LMC(42413, watch, '_onAction')._onAction();
                }
            }
        }
        JSProf.LGD(42414, watch, '_onInFlight')._onInFlight && JSProf.LMC(42416, watch, '_onInFlight')._onInFlight(JSProf.LRE(42415, dfd));
        if (!JSProf.LGD(42417, _inFlight, 'length').length) {
            JSProf.LFC(42419, clearInterval, false)(JSProf.LRE(42418, _inFlightIntvl));
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
        if (JSProf.LGD(42420, dfd.response.options, 'timeout').timeout) {
            JSProf.LPD(42423, dfd, 'startTime').startTime = JSProf.LRSP(42423, +JSProf.LNE(42422, new (JSProf.LFC(42421, Date, true))(), 'Date'));
        }
        if (JSProf.LMC(42424, dfd, 'isFulfilled').isFulfilled()) {
            // bail out if the deferred is already fulfilled
            return;
        }
        JSProf.LMC(42426, _inFlight, 'push').push(JSProf.LRE(42425, dfd));
        if (!JSProf.LRE(42427, _inFlightIntvl)) {
            _inFlightIntvl = JSProf.LWR(42430, _inFlightIntvl, JSProf.LFC(42429, setInterval, false)(JSProf.LRE(42428, watchInFlight), 50));
        }
        // handle sync requests separately from async:
        // http://bugs.dojotoolkit.org/ticket/8467
        if (JSProf.LGD(42431, dfd.response.options, 'sync').sync) {
            JSProf.LFC(42432, watchInFlight, false)();
        }
    }
    JSProf.LPD(42440, watch, 'cancelAll').cancelAll = JSProf.LRSP(42440, JSProf.LNF(42439, function cancelAll() {
        // summary:
        //		Cancels all pending IO requests, regardless of IO type
        try {
            JSProf.LMC(42438, array, 'forEach').forEach(JSProf.LRE(42433, _inFlight), JSProf.LNF(42437, function (dfd) {
                try {
                    JSProf.LMC(42436, dfd, 'cancel').cancel(JSProf.LNE(42435, new (JSProf.LFC(42434, CancelError, true))('All requests canceled.'), 'CancelError'));
                } catch (e) {
                }
            }, 12));
        } catch (e) {
        }
    }, 12));
    if (JSProf.LRE(42441, win) && JSProf.LRE(42442, on) && JSProf.LGD(42443, win.doc, 'attachEvent').attachEvent) {
        // Automatically call cancel all io calls on unload in IE
        // http://bugs.dojotoolkit.org/ticket/2357
        JSProf.LFC(42447, on, false)(JSProf.LGD(42444, win, 'global').global, 'unload', JSProf.LNF(42446, function () {
            JSProf.LMC(42445, watch, 'cancelAll').cancelAll();
        }, 12));
    }
    return JSProf.LRE(42448, watch);
}, 12));