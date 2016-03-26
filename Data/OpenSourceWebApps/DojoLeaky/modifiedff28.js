JSProf.LFC(14190, define, false)(JSProf.LNE(14092, [
    "./tracer",
    "../has",
    "../_base/lang",
    "../_base/array"
], 10), JSProf.LNF(14189, function (tracer, has, lang, arrayUtil) {
    JSProf.LFD(14185, logError);
    JSProf.LFD(14186, reportRejections);
    JSProf.LFD(14187, trackUnhandledRejections);
    JSProf.LFD(14188, logRejected);
    JSProf.LMC(14093, has, 'add').add("config-useDeferredInstrumentation", "report-unhandled-rejections");
    function logError(error, rejection, deferred) {
        var stack = "";
        if (JSProf.LRE(14094, error) && JSProf.LGD(14095, error, 'stack').stack) {
            stack += JSProf.LGD(14096, error, 'stack').stack;
        }
        if (JSProf.LRE(14097, rejection) && JSProf.LGD(14098, rejection, 'stack').stack) {
            stack += "\n    ----------------------------------------\n    rejected" + JSProf.LMC(14101, JSProf.LMC(14100, JSProf.LMC(14099, rejection.stack.split("\n"), 'slice').slice(1), 'join').join("\n"), 'replace').replace(/^\s+/, " ");
        }
        if (JSProf.LRE(14102, deferred) && JSProf.LGD(14103, deferred, 'stack').stack) {
            stack += "\n    ----------------------------------------\n" + JSProf.LGD(14104, deferred, 'stack').stack;
        }
        JSProf.LMC(14107, console, 'error').error(JSProf.LRE(14105, error), JSProf.LRE(14106, stack));
    }
    function reportRejections(error, handled, rejection, deferred) {
        if (!JSProf.LRE(14108, handled)) {
            JSProf.LFC(14112, logError, false)(JSProf.LRE(14109, error), JSProf.LRE(14110, rejection), JSProf.LRE(14111, deferred));
        }
    }
    var errors = JSProf.LNE(14113, [], 10);
    var activeTimeout = false;
    var unhandledWait = 1000;
    function trackUnhandledRejections(error, handled, rejection, deferred) {
        // try to find the existing tracking object
        if (!JSProf.LMC(14120, arrayUtil, 'some').some(JSProf.LRE(14114, errors), JSProf.LNF(14119, function (obj) {
                if (JSProf.LGD(14115, obj, 'error').error === JSProf.LRE(14116, error)) {
                    // found the tracking object for this error
                    if (JSProf.LRE(14117, handled)) {
                        // if handled, update the state
                        JSProf.LPD(14118, obj, 'handled').handled = JSProf.LRSP(14118, true);
                    }
                    return true;
                }
            }, 12))) {
            // no tracking object has been setup, create one
            JSProf.LMC(14125, errors, 'push').push(JSProf.LNE(14124, {
                error: error,
                rejection: rejection,
                handled: handled,
                deferred: deferred,
                timestamp: JSProf.LMC(14123, JSProf.LNE(14122, new (JSProf.LFC(14121, Date, true))(), 'Date'), 'getTime').getTime()
            }, 11));
        }
        if (!JSProf.LRE(14126, activeTimeout)) {
            activeTimeout = JSProf.LWR(14129, activeTimeout, setTimeout(JSProf.LRE(14127, logRejected), JSProf.LRE(14128, unhandledWait)));
        }
    }
    function logRejected() {
        var now = JSProf.LMC(14132, JSProf.LNE(14131, new (JSProf.LFC(14130, Date, true))(), 'Date'), 'getTime').getTime();
        var reportBefore = JSProf.LRE(14133, now) - JSProf.LRE(14134, unhandledWait);
        errors = JSProf.LWR(14145, errors, JSProf.LMC(14144, arrayUtil, 'filter').filter(JSProf.LRE(14135, errors), JSProf.LNF(14143, function (obj) {
            // only report the error if we have waited long enough and
            // it hasn't been handled
            if (JSProf.LGD(14136, obj, 'timestamp').timestamp < JSProf.LRE(14137, reportBefore)) {
                if (!JSProf.LGD(14138, obj, 'handled').handled) {
                    JSProf.LFC(14142, logError, false)(JSProf.LGD(14139, obj, 'error').error, JSProf.LGD(14140, obj, 'rejection').rejection, JSProf.LGD(14141, obj, 'deferred').deferred);
                }
                return false;
            }
            return true;
        }, 12)));
        if (JSProf.LGD(14146, errors, 'length').length) {
            activeTimeout = JSProf.LWR(14151, activeTimeout, setTimeout(JSProf.LRE(14147, logRejected), JSProf.LGD(14148, errors[0], 'timestamp').timestamp + JSProf.LRE(14149, unhandledWait) - JSProf.LRE(14150, now)));
        } else {
            activeTimeout = JSProf.LWR(14152, activeTimeout, false);
        }
    }
    return JSProf.LNF(14184, function (Deferred) {
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
        var usage = JSProf.LFC(14153, has, false)("config-useDeferredInstrumentation");
        if (JSProf.LRE(14154, usage)) {
            JSProf.LMC(14157, tracer, 'on').on("resolved", JSProf.LMC(14156, lang, 'hitch').hitch(JSProf.LRU(14155, typeof console === 'undefined' ? undefined : console), "log", "resolved"));
            JSProf.LMC(14160, tracer, 'on').on("rejected", JSProf.LMC(14159, lang, 'hitch').hitch(JSProf.LRU(14158, typeof console === 'undefined' ? undefined : console), "log", "rejected"));
            JSProf.LMC(14163, tracer, 'on').on("progress", JSProf.LMC(14162, lang, 'hitch').hitch(JSProf.LRU(14161, typeof console === 'undefined' ? undefined : console), "log", "progress"));
            var args = JSProf.LNE(14164, [], 10);
            if (typeof JSProf.LRE(14165, usage) === "string") {
                args = JSProf.LWR(14166, args, usage.split(","));
                usage = JSProf.LWR(14168, usage, JSProf.LMC(14167, args, 'shift').shift());
            }
            if (JSProf.LRE(14169, usage) === "report-rejections") {
                JSProf.LPD(14171, Deferred, 'instrumentRejected').instrumentRejected = JSProf.LRSP(14171, JSProf.LRE(14170, reportRejections));
            } else if (JSProf.LRE(14172, usage) === "report-unhandled-rejections" || JSProf.LRE(14173, usage) === true || JSProf.LRE(14174, usage) === 1) {
                JSProf.LPD(14176, Deferred, 'instrumentRejected').instrumentRejected = JSProf.LRSP(14176, JSProf.LRE(14175, trackUnhandledRejections));
                unhandledWait = JSProf.LWR(14180, unhandledWait, JSProf.LFC(14178, parseInt, false)(JSProf.LGE(14177, args, 0)[0], 10) || JSProf.LRE(14179, unhandledWait));
            } else {
                throw JSProf.LNE(14183, new (JSProf.LFC(14182, Error, true))("Unsupported instrumentation usage <" + JSProf.LRE(14181, usage) + ">"), 'Error');
            }
        }
    }, 12);
}, 12));