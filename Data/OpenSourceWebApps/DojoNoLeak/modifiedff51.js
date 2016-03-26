JSProf.LFC(19247, define, false)(JSProf.LNE(19246, {
    format: JSProf.LNF(19242, function (value, constraints) {
        // summary:
        //		Returns whether given value is less than or equal to the given number in data converter options (default zero).
        return JSProf.LRE(19240, value) <= (JSProf.LGD(19241, constraints, 'lessThanOrEqualTo').lessThanOrEqualTo || 0);
    }, 12),
    parse: JSProf.LNF(19245, function (value) {
        // summary:
        //		This functions throws an error so that the new value won't be reflected.
        throw JSProf.LNE(19244, new (JSProf.LFC(19243, Error, true))(), 'Error');
    }, 12)
}, 11));