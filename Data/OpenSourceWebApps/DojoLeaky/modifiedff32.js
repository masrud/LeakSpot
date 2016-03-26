JSProf.LFC(15311, define, false)(JSProf.LNE(15288, [
    "./aspect",
    "./on"
], 10), JSProf.LNF(15310, function (aspect, on) {
    JSProf.LFD(15309, Evented);
    // module:
    //		dojo/Evented
    "use strict";
    var after = JSProf.LGD(15289, aspect, 'after').after;
    function Evented() {
    }
    JSProf.LPD(15307, Evented, 'prototype').prototype = JSProf.LRSP(15307, JSProf.LNE(15306, {
        on: JSProf.LNF(15298, function (type, listener) {
            return JSProf.LMC(15297, on, 'parse').parse(this, JSProf.LRE(15290, type), JSProf.LRE(15291, listener), JSProf.LNF(15296, function (target, type) {
                return JSProf.LFC(15295, after, false)(JSProf.LRE(15292, target), 'on' + JSProf.LRE(15293, type), JSProf.LRE(15294, listener), true);
            }, 12));
        }, 12),
        emit: JSProf.LNF(15305, function (type, event) {
            var args = JSProf.LNE(15299, [this], 10);
            JSProf.LMC(15301, args.push, 'apply').apply(JSProf.LRE(15300, args), arguments);
            return JSProf.LMC(15304, on.emit, 'apply').apply(JSProf.LRE(15302, on), JSProf.LRE(15303, args));
        }, 12)
    }, 11));
    return JSProf.LRE(15308, Evented);
}, 12));