JSProf.LFC(14387, define, false)(JSProf.LNE(14352, ["../_base/lang"], 10), JSProf.LNF(14386, function (lang) {
    return JSProf.LNF(14385, function (name, ctor, base, props) {
        base = JSProf.LWR(14355, base, JSProf.LRE(14353, base) || JSProf.LRU(14354, typeof Error === 'undefined' ? undefined : Error));
        var ErrorCtor = JSProf.LNF(14375, function (message) {
                if (JSProf.LRE(14356, base) === JSProf.LRU(14357, typeof Error === 'undefined' ? undefined : Error)) {
                    if (JSProf.LGD(14358, Error, 'captureStackTrace').captureStackTrace) {
                        JSProf.LMC(14360, Error, 'captureStackTrace').captureStackTrace(this, JSProf.LRE(14359, ErrorCtor));
                    }
                    // Error.call() operates on the returned error
                    // object rather than operating on |this|
                    var err = JSProf.LMC(14362, Error, 'call').call(this, JSProf.LRE(14361, message)), prop;
                    // Copy own properties from err to |this|
                    for (prop in JSProf.LRE(14363, err)) {
                        if (JSProf.LMC(14365, err, 'hasOwnProperty').hasOwnProperty(JSProf.LRE(14364, prop))) {
                            JSProf.LPE(14367, this, 'prop')[prop] = JSProf.LRPE(14367, JSProf.LGE(14366, err, 'prop')[prop]);
                        }
                    }
                    // messsage is non-enumerable in ES5
                    JSProf.LPD(14369, this, 'message').message = JSProf.LRSP(14369, JSProf.LRE(14368, message));
                    // stack is non-enumerable in at least Firefox
                    JSProf.LPD(14371, this, 'stack').stack = JSProf.LRSP(14371, JSProf.LGD(14370, err, 'stack').stack);
                } else {
                    JSProf.LMC(14372, base, 'apply').apply(this, arguments);
                }
                if (JSProf.LRE(14373, ctor)) {
                    JSProf.LMC(14374, ctor, 'apply').apply(this, arguments);
                }
            }, 12);
        JSProf.LPD(14379, ErrorCtor, 'prototype').prototype = JSProf.LRSP(14379, JSProf.LMC(14378, lang, 'delegate').delegate(JSProf.LGD(14376, base, 'prototype').prototype, JSProf.LRE(14377, props)));
        JSProf.LPD(14381, ErrorCtor.prototype, 'name').name = JSProf.LRSP(14381, JSProf.LRE(14380, name));
        JSProf.LPD(14383, ErrorCtor.prototype, 'constructor').constructor = JSProf.LRSP(14383, JSProf.LRE(14382, ErrorCtor));
        return JSProf.LRE(14384, ErrorCtor);
    }, 12);
}, 12));