JSProf.LFC(14486, define, false)(JSProf.LNE(14447, [
    "../_base/lang",
    "./Promise",
    "../Evented"
], 10), JSProf.LNF(14485, function (lang, Promise, Evented) {
    JSProf.LFD(14484, emitAsync);
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
    var evented = JSProf.LNE(14449, new (JSProf.LFC(14448, Evented, true))(), 'Evented');
    var emit = JSProf.LGD(14450, evented, 'emit').emit;
    evented.emit = null;
    // Emit events asynchronously since they should not change the promise state.
    function emitAsync(args) {
        setTimeout(JSProf.LNF(14454, function () {
            JSProf.LMC(14453, emit, 'apply').apply(JSProf.LRE(14451, evented), JSProf.LRE(14452, args));
        }, 12), 0);
    }
    JSProf.LPD(14473, Promise.prototype, 'trace').trace = JSProf.LRSP(14473, JSProf.LNF(14472, function () {
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
        var args = JSProf.LMC(14455, lang, '_toArray')._toArray(arguments);
        JSProf.LMC(14471, this, 'then').then(JSProf.LNF(14460, function (value) {
            JSProf.LFC(14459, emitAsync, false)(JSProf.LNE(14457, [
                "resolved",
                JSProf.LRE(14456, value)
            ], 10).concat(JSProf.LRE(14458, args)));
        }, 12), JSProf.LNF(14465, function (error) {
            JSProf.LFC(14464, emitAsync, false)(JSProf.LNE(14462, [
                "rejected",
                JSProf.LRE(14461, error)
            ], 10).concat(JSProf.LRE(14463, args)));
        }, 12), JSProf.LNF(14470, function (update) {
            JSProf.LFC(14469, emitAsync, false)(JSProf.LNE(14467, [
                "progress",
                JSProf.LRE(14466, update)
            ], 10).concat(JSProf.LRE(14468, args)));
        }, 12));
        return this;
    }, 12));
    JSProf.LPD(14482, Promise.prototype, 'traceRejected').traceRejected = JSProf.LRSP(14482, JSProf.LNF(14481, function () {
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
        var args = JSProf.LMC(14474, lang, '_toArray')._toArray(arguments);
        JSProf.LMC(14480, this, 'otherwise').otherwise(JSProf.LNF(14479, function (error) {
            JSProf.LFC(14478, emitAsync, false)(JSProf.LNE(14476, [
                "rejected",
                JSProf.LRE(14475, error)
            ], 10).concat(JSProf.LRE(14477, args)));
        }, 12));
        return this;
    }, 12));
    return JSProf.LRE(14483, evented);
}, 12));