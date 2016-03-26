JSProf.LFC(10348, define, false)(JSProf.LNE(10228, [], 10), JSProf.LNF(10347, function () {
    JSProf.LFD(10345, advise);
    JSProf.LFD(10346, aspect);
    // module:
    //		dojo/aspect
    "use strict";
    var undefined, nextId = 0;
    function advise(dispatcher, type, advice, receiveArguments) {
        var previous = JSProf.LGE(10229, dispatcher, 'type')[type];
        var around = JSProf.LRE(10230, type) == "around";
        var signal;
        if (JSProf.LRE(10231, around)) {
            var advised = JSProf.LFC(10234, advice, false)(JSProf.LNF(10233, function () {
                    return JSProf.LMC(10232, previous, 'advice').advice(this, arguments);
                }, 12));
            signal = JSProf.LWR(10248, signal, JSProf.LNE(10247, {
                remove: JSProf.LNF(10238, function () {
                    if (JSProf.LRE(10235, advised)) {
                        advised = JSProf.LWR(10237, advised, dispatcher = JSProf.LWR(10236, dispatcher, advice = null));
                    }
                }, 12),
                advice: JSProf.LNF(10246, function (target, args) {
                    return JSProf.LRE(10239, advised) ? JSProf.LMC(10242, advised, 'apply').apply(JSProf.LRE(10240, target), JSProf.LRE(10241, args)) : JSProf.LMC(10245, previous, 'advice').advice(JSProf.LRE(10243, target), JSProf.LRE(10244, args));    // cancelled, skip to next one
                }, 12)
            }, 11));
        } else {
            // create the remove handler
            signal = JSProf.LWR(10266, signal, JSProf.LNE(10265, {
                remove: JSProf.LNF(10264, function () {
                    if (JSProf.LGD(10249, signal, 'advice').advice) {
                        var previous = JSProf.LGD(10250, signal, 'previous').previous;
                        var next = JSProf.LGD(10251, signal, 'next').next;
                        if (!JSProf.LRE(10252, next) && !JSProf.LRE(10253, previous)) {
                            delete dispatcher[type];
                        } else {
                            if (JSProf.LRE(10254, previous)) {
                                JSProf.LPD(10256, previous, 'next').next = JSProf.LRSP(10256, JSProf.LRE(10255, next));
                            } else {
                                JSProf.LPE(10258, dispatcher, 'type')[type] = JSProf.LRPE(10258, JSProf.LRE(10257, next));
                            }
                            if (JSProf.LRE(10259, next)) {
                                JSProf.LPD(10261, next, 'previous').previous = JSProf.LRSP(10261, JSProf.LRE(10260, previous));
                            }
                        }
                        // remove the advice to signal that this signal has been removed
                        dispatcher = JSProf.LWR(10263, dispatcher, advice = JSProf.LWR(10262, advice, signal.advice = null));
                    }
                }, 12),
                id: nextId++,
                advice: advice,
                receiveArguments: receiveArguments
            }, 11));
        }
        if (JSProf.LRE(10267, previous) && !JSProf.LRE(10268, around)) {
            if (JSProf.LRE(10269, type) == "after") {
                // add the listener to the end of the list
                // note that we had to change this loop a little bit to workaround a bizarre IE10 JIT bug
                while (JSProf.LGD(10270, previous, 'next').next && (previous = JSProf.LWR(10272, previous, JSProf.LGD(10271, previous, 'next').next))) {
                }
                JSProf.LPD(10274, previous, 'next').next = JSProf.LRSP(10274, JSProf.LRE(10273, signal));
                JSProf.LPD(10276, signal, 'previous').previous = JSProf.LRSP(10276, JSProf.LRE(10275, previous));
            } else if (JSProf.LRE(10277, type) == "before") {
                // add to beginning
                JSProf.LPE(10279, dispatcher, 'type')[type] = JSProf.LRPE(10279, JSProf.LRE(10278, signal));
                JSProf.LPD(10281, signal, 'next').next = JSProf.LRSP(10281, JSProf.LRE(10280, previous));
                JSProf.LPD(10283, previous, 'previous').previous = JSProf.LRSP(10283, JSProf.LRE(10282, signal));
            }
        } else {
            // around or first one just replaces
            JSProf.LPE(10285, dispatcher, 'type')[type] = JSProf.LRPE(10285, JSProf.LRE(10284, signal));
        }
        return JSProf.LRE(10286, signal);
    }
    function aspect(type) {
        return JSProf.LNF(10340, function (target, methodName, advice, receiveArguments) {
            var existing = JSProf.LGE(10287, target, 'methodName')[methodName], dispatcher;
            if (!JSProf.LRE(10288, existing) || JSProf.LGD(10289, existing, 'target').target != JSProf.LRE(10290, target)) {
                // no dispatcher in place
                JSProf.LPE(10323, target, 'methodName')[methodName] = JSProf.LRPE(10323, dispatcher = JSProf.LWR(10322, dispatcher, JSProf.LNF(10321, function () {
                    var executionId = JSProf.LRE(10291, nextId);
                    // before advice
                    var args = arguments;
                    var before = JSProf.LGD(10292, dispatcher, 'before').before;
                    while (JSProf.LRE(10293, before)) {
                        args = JSProf.LWR(10297, args, JSProf.LMC(10295, before.advice, 'apply').apply(this, JSProf.LRE(10294, args)) || JSProf.LRE(10296, args));
                        before = JSProf.LWR(10299, before, JSProf.LGD(10298, before, 'next').next);
                    }
                    // around advice
                    if (JSProf.LGD(10300, dispatcher, 'around').around) {
                        var results = JSProf.LMC(10302, dispatcher.around, 'advice').advice(this, JSProf.LRE(10301, args));
                    }
                    // after advice
                    var after = JSProf.LGD(10303, dispatcher, 'after').after;
                    while (JSProf.LRE(10304, after) && JSProf.LGD(10305, after, 'id').id < JSProf.LRE(10306, executionId)) {
                        if (JSProf.LGD(10307, after, 'receiveArguments').receiveArguments) {
                            var newResults = JSProf.LMC(10309, after.advice, 'apply').apply(this, JSProf.LRE(10308, args));
                            // change the return value only if a new value was returned
                            results = JSProf.LWR(10313, results, JSProf.LRE(10310, newResults) === undefined ? JSProf.LRE(10311, results) : JSProf.LRE(10312, newResults));
                        } else {
                            results = JSProf.LWR(10317, results, JSProf.LMC(10316, after.advice, 'call').call(this, JSProf.LRE(10314, results), JSProf.LRE(10315, args)));
                        }
                        after = JSProf.LWR(10319, after, JSProf.LGD(10318, after, 'next').next);
                    }
                    return JSProf.LRE(10320, results);
                }, 12)));
                if (JSProf.LRE(10324, existing)) {
                    JSProf.LPD(10330, dispatcher, 'around').around = JSProf.LRSP(10330, JSProf.LNE(10329, {
                        advice: JSProf.LNF(10328, function (target, args) {
                            return JSProf.LMC(10327, existing, 'apply').apply(JSProf.LRE(10325, target), JSProf.LRE(10326, args));
                        }, 12)
                    }, 11));
                }
                JSProf.LPD(10332, dispatcher, 'target').target = JSProf.LRSP(10332, JSProf.LRE(10331, target));
            }
            var results = JSProf.LFC(10338, advise, false)(JSProf.LRE(10333, dispatcher) || JSProf.LRE(10334, existing), JSProf.LRE(10335, type), JSProf.LRE(10336, advice), JSProf.LRE(10337, receiveArguments));
            advice = null;
            return JSProf.LRE(10339, results);
        }, 12);
    }
    // TODOC: after/before/around return object
    var after = JSProf.LFC(10341, aspect, false)("after");
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
    var before = JSProf.LFC(10342, aspect, false)("before");
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
    var around = JSProf.LFC(10343, aspect, false)("around");
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
    return JSProf.LNE(10344, {
        before: before,
        around: around,
        after: after
    }, 11);
}, 12));