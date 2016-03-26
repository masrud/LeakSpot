JSProf.LFC(19245, define, false)(JSProf.LNE(19244, {
    format: JSProf.LNF(19240, function (value, constraints) {
        // summary:
        //		Returns whether given value is less than or equal to the given number in data converter options (default zero).
        return JSProf.LRE(19238, value) <= (JSProf.LGD(19239, constraints, 'lessThanOrEqualTo').lessThanOrEqualTo || 0);
    }, 12),
    parse: JSProf.LNF(19243, function (value) {
        // summary:
        //		This functions throws an error so that the new value won't be reflected.
        throw JSProf.LNE(19242, new (JSProf.LFC(19241, Error, true))(), 'Error');
    }, 12)
}, 11));