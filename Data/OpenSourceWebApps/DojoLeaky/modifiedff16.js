JSProf.LFC(10212, define, false)(JSProf.LNE(10092, [], 10), JSProf.LNF(10211, function () {
    JSProf.LFD(10209, advise);
    JSProf.LFD(10210, aspect);
    // module:
    //		dojo/aspect
    "use strict";
    var undefined, nextId = 0;
    function advise(dispatcher, type, advice, receiveArguments) {
        var previous = JSProf.LGE(10093, dispatcher, 'type')[type];
        var around = JSProf.LRE(10094, type) == "around";
        var signal;
        if (JSProf.LRE(10095, around)) {
            var advised = JSProf.LFC(10098, advice, false)(JSProf.LNF(10097, function () {
                    return JSProf.LMC(10096, previous, 'advice').advice(this, arguments);
                }, 12));
            signal = JSProf.LWR(10112, signal, JSProf.LNE(10111, {
                remove: JSProf.LNF(10102, function () {
                    if (JSProf.LRE(10099, advised)) {
                        advised = JSProf.LWR(10101, advised, dispatcher = JSProf.LWR(10100, dispatcher, advice = null));
                    }
                }, 12),
                advice: JSProf.LNF(10110, function (target, args) {
                    return JSProf.LRE(10103, advised) ? JSProf.LMC(10106, advised, 'apply').apply(JSProf.LRE(10104, target), JSProf.LRE(10105, args)) : JSProf.LMC(10109, previous, 'advice').advice(JSProf.LRE(10107, target), JSProf.LRE(10108, args));    // cancelled, skip to next one
                }, 12)
            }, 11));
        } else {
            // create the remove handler
            signal = JSProf.LWR(10130, signal, JSProf.LNE(10129, {
                remove: JSProf.LNF(10128, function () {
                    if (JSProf.LGD(10113, signal, 'advice').advice) {
                        var previous = JSProf.LGD(10114, signal, 'previous').previous;
                        var next = JSProf.LGD(10115, signal, 'next').next;
                        if (!JSProf.LRE(10116, next) && !JSProf.LRE(10117, previous)) {
                            delete dispatcher[type];
                        } else {
                            if (JSProf.LRE(10118, previous)) {
                                JSProf.LPD(10120, previous, 'next').next = JSProf.LRSP(10120, JSProf.LRE(10119, next));
                            } else {
                                JSProf.LPE(10122, dispatcher, 'type')[type] = JSProf.LRPE(10122, JSProf.LRE(10121, next));
                            }
                            if (JSProf.LRE(10123, next)) {
                                JSProf.LPD(10125, next, 'previous').previous = JSProf.LRSP(10125, JSProf.LRE(10124, previous));
                            }
                        }
                        // remove the advice to signal that this signal has been removed
                        dispatcher = JSProf.LWR(10127, dispatcher, advice = JSProf.LWR(10126, advice, signal.advice = null));
                    }
                }, 12),
                id: nextId++,
                advice: advice,
                receiveArguments: receiveArguments
            }, 11));
        }
        if (JSProf.LRE(10131, previous) && !JSProf.LRE(10132, around)) {
            if (JSProf.LRE(10133, type) == "after") {
                // add the listener to the end of the list
                // note that we had to change this loop a little bit to workaround a bizarre IE10 JIT bug
                while (JSProf.LGD(10134, previous, 'next').next && (previous = JSProf.LWR(10136, previous, JSProf.LGD(10135, previous, 'next').next))) {
                }
                JSProf.LPD(10138, previous, 'next').next = JSProf.LRSP(10138, JSProf.LRE(10137, signal));
                JSProf.LPD(10140, signal, 'previous').previous = JSProf.LRSP(10140, JSProf.LRE(10139, previous));
            } else if (JSProf.LRE(10141, type) == "before") {
                // add to beginning
                JSProf.LPE(10143, dispatcher, 'type')[type] = JSProf.LRPE(10143, JSProf.LRE(10142, signal));
                JSProf.LPD(10145, signal, 'next').next = JSProf.LRSP(10145, JSProf.LRE(10144, previous));
                JSProf.LPD(10147, previous, 'previous').previous = JSProf.LRSP(10147, JSProf.LRE(10146, signal));
            }
        } else {
            // around or first one just replaces
            JSProf.LPE(10149, dispatcher, 'type')[type] = JSProf.LRPE(10149, JSProf.LRE(10148, signal));
        }
        return JSProf.LRE(10150, signal);
    }
    function aspect(type) {
        return JSProf.LNF(10204, function (target, methodName, advice, receiveArguments) {
            var existing = JSProf.LGE(10151, target, 'methodName')[methodName], dispatcher;
            if (!JSProf.LRE(10152, existing) || JSProf.LGD(10153, existing, 'target').target != JSProf.LRE(10154, target)) {
                // no dispatcher in place
                JSProf.LPE(10187, target, 'methodName')[methodName] = JSProf.LRPE(10187, dispatcher = JSProf.LWR(10186, dispatcher, JSProf.LNF(10185, function () {
                    var executionId = JSProf.LRE(10155, nextId);
                    // before advice
                    var args = arguments;
                    var before = JSProf.LGD(10156, dispatcher, 'before').before;
                    while (JSProf.LRE(10157, before)) {
                        args = JSProf.LWR(10161, args, JSProf.LMC(10159, before.advice, 'apply').apply(this, JSProf.LRE(10158, args)) || JSProf.LRE(10160, args));
                        before = JSProf.LWR(10163, before, JSProf.LGD(10162, before, 'next').next);
                    }
                    // around advice
                    if (JSProf.LGD(10164, dispatcher, 'around').around) {
                        var results = JSProf.LMC(10166, dispatcher.around, 'advice').advice(this, JSProf.LRE(10165, args));
                    }
                    // after advice
                    var after = JSProf.LGD(10167, dispatcher, 'after').after;
                    while (JSProf.LRE(10168, after) && JSProf.LGD(10169, after, 'id').id < JSProf.LRE(10170, executionId)) {
                        if (JSProf.LGD(10171, after, 'receiveArguments').receiveArguments) {
                            var newResults = JSProf.LMC(10173, after.advice, 'apply').apply(this, JSProf.LRE(10172, args));
                            // change the return value only if a new value was returned
                            results = JSProf.LWR(10177, results, JSProf.LRE(10174, newResults) === undefined ? JSProf.LRE(10175, results) : JSProf.LRE(10176, newResults));
                        } else {
                            results = JSProf.LWR(10181, results, JSProf.LMC(10180, after.advice, 'call').call(this, JSProf.LRE(10178, results), JSProf.LRE(10179, args)));
                        }
                        after = JSProf.LWR(10183, after, JSProf.LGD(10182, after, 'next').next);
                    }
                    return JSProf.LRE(10184, results);
                }, 12)));
                if (JSProf.LRE(10188, existing)) {
                    JSProf.LPD(10194, dispatcher, 'around').around = JSProf.LRSP(10194, JSProf.LNE(10193, {
                        advice: JSProf.LNF(10192, function (target, args) {
                            return JSProf.LMC(10191, existing, 'apply').apply(JSProf.LRE(10189, target), JSProf.LRE(10190, args));
                        }, 12)
                    }, 11));
                }
                JSProf.LPD(10196, dispatcher, 'target').target = JSProf.LRSP(10196, JSProf.LRE(10195, target));
            }
            var results = JSProf.LFC(10202, advise, false)(JSProf.LRE(10197, dispatcher) || JSProf.LRE(10198, existing), JSProf.LRE(10199, type), JSProf.LRE(10200, advice), JSProf.LRE(10201, receiveArguments));
            advice = null;
            return JSProf.LRE(10203, results);
        }, 12);
    }
    // TODOC: after/before/around return object
    var after = JSProf.LFC(10205, aspect, false)("after");
    /*=====
    	after = function(target, methodName, advice, receiveArguments){
    		// summary:
    		//		The "after" export of the aspect module is a function that can be used to attach
    		//		"after" advice to a method. This function will be executed after the original method
    		//		is executed. By default the function will be called with a single argument, the return
    		//		value of the original method, or the the return value of the last executed advice (if a previous one exists).
    		//		The fourth (optional) argument can be set to true to so the function receives the original
    		//		arguments (from when the original method was called) rather than the return value.
    		//		If there are multiple "after" advisors, they are executed in the order they were registered.
    		// target: Object
    		//		This is the target object
    		// methodName: String
    		//		This is the name of the method to attach to.
    		// advice: Function
    		//		This is function to be called after the original method
    		// receiveArguments: Boolean?
    		//		If this is set to true, the advice function receives the original arguments (from when the original mehtod
    		//		was called) rather than the return value of the original/previous method.
    		// returns:
    		//		A signal object that can be used to cancel the advice. If remove() is called on this signal object, it will
    		//		stop the advice function from being executed.
    	};
    	=====*/
    var before = JSProf.LFC(10206, aspect, false)("before");
    /*=====
    	before = function(target, methodName, advice){
    		// summary:
    		//		The "before" export of the aspect module is a function that can be used to attach
    		//		"before" advice to a method. This function will be executed before the original method
    		//		is executed. This function will be called with the arguments used to call the method.
    		//		This function may optionally return an array as the new arguments to use to call
    		//		the original method (or the previous, next-to-execute before advice, if one exists).
    		//		If the before method doesn't return anything (returns undefined) the original arguments
    		//		will be preserved.
    		//		If there are multiple "before" advisors, they are executed in the reverse order they were registered.
    		// target: Object
    		//		This is the target object
    		// methodName: String
    		//		This is the name of the method to attach to.
    		// advice: Function
    		//		This is function to be called before the original method
    	};
    	=====*/
    var around = JSProf.LFC(10207, aspect, false)("around");
    /*=====
    	 around = function(target, methodName, advice){
    		// summary:
    		//		The "around" export of the aspect module is a function that can be used to attach
    		//		"around" advice to a method. The advisor function is immediately executed when
    		//		the around() is called, is passed a single argument that is a function that can be
    		//		called to continue execution of the original method (or the next around advisor).
    		//		The advisor function should return a function, and this function will be called whenever
    		//		the method is called. It will be called with the arguments used to call the method.
    		//		Whatever this function returns will be returned as the result of the method call (unless after advise changes it).
    		// example:
    		//		If there are multiple "around" advisors, the most recent one is executed first,
    		//		which can then delegate to the next one and so on. For example:
    		//		|	around(obj, "foo", function(originalFoo){
    		//		|		return function(){
    		//		|			var start = new Date().getTime();
    		//		|			var results = originalFoo.apply(this, arguments); // call the original
    		//		|			var end = new Date().getTime();
    		//		|			console.log("foo execution took " + (end - start) + " ms");
    		//		|			return results;
    		//		|		};
    		//		|	});
    		// target: Object
    		//		This is the target object
    		// methodName: String
    		//		This is the name of the method to attach to.
    		// advice: Function
    		//		This is function to be called around the original method
    	};
    	=====*/
    return JSProf.LNE(10208, {
        before: before,
        around: around,
        after: after
    }, 11);
}, 12));