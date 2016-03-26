JSProf.LFC(15232, define, false)(JSProf.LNE(15193, [
    "../_base/lang",
    "./Promise",
    "../Evented"
], 10), JSProf.LNF(15231, function (lang, Promise, Evented) {
    JSProf.LFD(15230, emitAsync);
    "use strict";
    // module:
    //		dojo/promise/tracer
    /*=====
    	return {
    		// summary:
    		//		Trace promise fulfillment.
    		// description:
    		//		Trace promise fulfillment. Calling `.trace()` or `.traceError()` on a
    		//		promise enables tracing. Will emit `resolved`, `rejected` or `progress`
    		//		events.
    
    		on: function(type, listener){
    			// summary:
    			//		Subscribe to traces.
    			// description:
    			//		See `dojo/Evented#on()`.
    			// type: String
    			//		`resolved`, `rejected`, or `progress`
    			// listener: Function
    			//		The listener is passed the traced value and any arguments
    			//		that were used with the `.trace()` call.
    		}
    	};
    	=====*/
    var evented = JSProf.LNE(15195, new (JSProf.LFC(15194, Evented, true))(), 'Evented');
    var emit = JSProf.LGD(15196, evented, 'emit').emit;
    evented.emit = null;
    // Emit events asynchronously since they should not change the promise state.
    function emitAsync(args) {
        setTimeout(JSProf.LNF(15200, function () {
            JSProf.LMC(15199, emit, 'apply').apply(JSProf.LRE(15197, evented), JSProf.LRE(15198, args));
        }, 12), 0);
    }
    JSProf.LPD(15219, Promise.prototype, 'trace').trace = JSProf.LRSP(15219, JSProf.LNF(15218, function () {
        // summary:
        //		Trace the promise.
        // description:
        //		Tracing allows you to transparently log progress,
        //		resolution and rejection of promises, without affecting the
        //		promise itself. Any arguments passed to `trace()` are
        //		emitted in trace events. See `dojo/promise/tracer` on how
        //		to handle traces.
        // returns: dojo/promise/Promise
        //		The promise instance `trace()` is called on.
        var args = JSProf.LMC(15201, lang, '_toArray')._toArray(arguments);
        JSProf.LMC(15217, this, 'then').then(JSProf.LNF(15206, function (value) {
            JSProf.LFC(15205, emitAsync, false)(JSProf.LNE(15203, [
                "resolved",
                JSProf.LRE(15202, value)
            ], 10).concat(JSProf.LRE(15204, args)));
        }, 12), JSProf.LNF(15211, function (error) {
            JSProf.LFC(15210, emitAsync, false)(JSProf.LNE(15208, [
                "rejected",
                JSProf.LRE(15207, error)
            ], 10).concat(JSProf.LRE(15209, args)));
        }, 12), JSProf.LNF(15216, function (update) {
            JSProf.LFC(15215, emitAsync, false)(JSProf.LNE(15213, [
                "progress",
                JSProf.LRE(15212, update)
            ], 10).concat(JSProf.LRE(15214, args)));
        }, 12));
        return this;
    }, 12));
    JSProf.LPD(15228, Promise.prototype, 'traceRejected').traceRejected = JSProf.LRSP(15228, JSProf.LNF(15227, function () {
        // summary:
        //		Trace rejection of the promise.
        // description:
        //		Tracing allows you to transparently log progress,
        //		resolution and rejection of promises, without affecting the
        //		promise itself. Any arguments passed to `trace()` are
        //		emitted in trace events. See `dojo/promise/tracer` on how
        //		to handle traces.
        // returns: dojo/promise/Promise
        //		The promise instance `traceRejected()` is called on.
        var args = JSProf.LMC(15220, lang, '_toArray')._toArray(arguments);
        JSProf.LMC(15226, this, 'otherwise').otherwise(JSProf.LNF(15225, function (error) {
            JSProf.LFC(15224, emitAsync, false)(JSProf.LNE(15222, [
                "rejected",
                JSProf.LRE(15221, error)
            ], 10).concat(JSProf.LRE(15223, args)));
        }, 12));
        return this;
    }, 12));
    return JSProf.LRE(15229, evented);
}, 12));