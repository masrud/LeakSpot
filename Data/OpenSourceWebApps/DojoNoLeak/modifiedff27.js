JSProf.LFC(14066, define, false)(JSProf.LNE(13968, [
    "./tracer",
    "../has",
    "../_base/lang",
    "../_base/array"
], 10), JSProf.LNF(14065, function (tracer, has, lang, arrayUtil) {
    JSProf.LFD(14061, logError);
    JSProf.LFD(14062, reportRejections);
    JSProf.LFD(14063, trackUnhandledRejections);
    JSProf.LFD(14064, logRejected);
    JSProf.LMC(13969, has, 'add').add("config-useDeferredInstrumentation", "report-unhandled-rejections");
    function logError(error, rejection, deferred) {
        var stack = "";
        if (JSProf.LRE(13970, error) && JSProf.LGD(13971, error, 'stack').stack) {
            stack += JSProf.LGD(13972, error, 'stack').stack;
        }
        if (JSProf.LRE(13973, rejection) && JSProf.LGD(13974, rejection, 'stack').stack) {
            stack += "\n    ----------------------------------------\n    rejected" + JSProf.LMC(13977, JSProf.LMC(13976, JSProf.LMC(13975, rejection.stack.split("\n"), 'slice').slice(1), 'join').join("\n"), 'replace').replace(/^\s+/, " ");
        }
        if (JSProf.LRE(13978, deferred) && JSProf.LGD(13979, deferred, 'stack').stack) {
            stack += "\n    ----------------------------------------\n" + JSProf.LGD(13980, deferred, 'stack').stack;
        }
        JSProf.LMC(13983, console, 'error').error(JSProf.LRE(13981, error), JSProf.LRE(13982, stack));
    }
    function reportRejections(error, handled, rejection, deferred) {
        if (!JSProf.LRE(13984, handled)) {
            JSProf.LFC(13988, logError, false)(JSProf.LRE(13985, error), JSProf.LRE(13986, rejection), JSProf.LRE(13987, deferred));
        }
    }
    var errors = JSProf.LNE(13989, [], 10);
    var activeTimeout = false;
    var unhandledWait = 1000;
    function trackUnhandledRejections(error, handled, rejection, deferred) {
        // try to find the existing tracking object
        if (!JSProf.LMC(13996, arrayUtil, 'some').some(JSProf.LRE(13990, errors), JSProf.LNF(13995, function (obj) {
                if (JSProf.LGD(13991, obj, 'error').error === JSProf.LRE(13992, error)) {
                    // found the tracking object for this error
                    if (JSProf.LRE(13993, handled)) {
                        // if handled, update the state
                        JSProf.LPD(13994, obj, 'handled').handled = JSProf.LRSP(13994, true);
                    }
                    return true;
                }
            }, 12))) {
            // no tracking object has been setup, create one
            JSProf.LMC(14001, errors, 'push').push(JSProf.LNE(14000, {
                error: error,
                rejection: rejection,
                handled: handled,
                deferred: deferred,
                timestamp: JSProf.LMC(13999, JSProf.LNE(13998, new (JSProf.LFC(13997, Date, true))(), 'Date'), 'getTime').getTime()
            }, 11));
        }
        if (!JSProf.LRE(14002, activeTimeout)) {
            activeTimeout = JSProf.LWR(14005, activeTimeout, setTimeout(JSProf.LRE(14003, logRejected), JSProf.LRE(14004, unhandledWait)));
        }
    }
    function logRejected() {
        var now = JSProf.LMC(14008, JSProf.LNE(14007, new (JSProf.LFC(14006, Date, true))(), 'Date'), 'getTime').getTime();
        var reportBefore = JSProf.LRE(14009, now) - JSProf.LRE(14010, unhandledWait);
        errors = JSProf.LWR(14021, errors, JSProf.LMC(14020, arrayUtil, 'filter').filter(JSProf.LRE(14011, errors), JSProf.LNF(14019, function (obj) {
            // only report the error if we have waited long enough and
            // it hasn't been handled
            if (JSProf.LGD(14012, obj, 'timestamp').timestamp < JSProf.LRE(14013, reportBefore)) {
                if (!JSProf.LGD(14014, obj, 'handled').handled) {
                    JSProf.LFC(14018, logError, false)(JSProf.LGD(14015, obj, 'error').error, JSProf.LGD(14016, obj, 'rejection').rejection, JSProf.LGD(14017, obj, 'deferred').deferred);
                }
                return false;
            }
            return true;
        }, 12)));
        if (JSProf.LGD(14022, errors, 'length').length) {
            activeTimeout = JSProf.LWR(14027, activeTimeout, setTimeout(JSProf.LRE(14023, logRejected), JSProf.LGD(14024, errors[0], 'timestamp').timestamp + JSProf.LRE(14025, unhandledWait) - JSProf.LRE(14026, now)));
        } else {
            activeTimeout = JSProf.LWR(14028, activeTimeout, false);
        }
    }
    return JSProf.LNF(14060, function (Deferred) {
        // summary:
        //		Initialize instrumentation for the Deferred class.
        // description:
        //		Initialize instrumentation for the Deferred class.
        //		Done automatically by `dojo/Deferred` if the
        //		`deferredInstrumentation` and `useDeferredInstrumentation`
        //		config options are set.
        //
        //		Sets up `dojo/promise/tracer` to log to the console.
        //
        //		Sets up instrumentation of rejected deferreds so unhandled
        //		errors are logged to the console.
        var usage = JSProf.LFC(14029, has, false)("config-useDeferredInstrumentation");
        if (JSProf.LRE(14030, usage)) {
            JSProf.LMC(14033, tracer, 'on').on("resolved", JSProf.LMC(14032, lang, 'hitch').hitch(JSProf.LRU(14031, typeof console === 'undefined' ? undefined : console), "log", "resolved"));
            JSProf.LMC(14036, tracer, 'on').on("rejected", JSProf.LMC(14035, lang, 'hitch').hitch(JSProf.LRU(14034, typeof console === 'undefined' ? undefined : console), "log", "rejected"));
            JSProf.LMC(14039, tracer, 'on').on("progress", JSProf.LMC(14038, lang, 'hitch').hitch(JSProf.LRU(14037, typeof console === 'undefined' ? undefined : console), "log", "progress"));
            var args = JSProf.LNE(14040, [], 10);
            if (typeof JSProf.LRE(14041, usage) === "string") {
                args = JSProf.LWR(14042, args, usage.split(","));
                usage = JSProf.LWR(14044, usage, JSProf.LMC(14043, args, 'shift').shift());
            }
            if (JSProf.LRE(14045, usage) === "report-rejections") {
                JSProf.LPD(14047, Deferred, 'instrumentRejected').instrumentRejected = JSProf.LRSP(14047, JSProf.LRE(14046, reportRejections));
            } else if (JSProf.LRE(14048, usage) === "report-unhandled-rejections" || JSProf.LRE(14049, usage) === true || JSProf.LRE(14050, usage) === 1) {
                JSProf.LPD(14052, Deferred, 'instrumentRejected').instrumentRejected = JSProf.LRSP(14052, JSProf.LRE(14051, trackUnhandledRejections));
                unhandledWait = JSProf.LWR(14056, unhandledWait, JSProf.LFC(14054, parseInt, false)(JSProf.LGE(14053, args, 0)[0], 10) || JSProf.LRE(14055, unhandledWait));
            } else {
                throw JSProf.LNE(14059, new (JSProf.LFC(14058, Error, true))("Unsupported instrumentation usage <" + JSProf.LRE(14057, usage) + ">"), 'Error');
            }
        }
    }, 12);
}, 12));