JSProf.LFC(19226, define, false)(JSProf.LNE(19225, {
    format: JSProf.LNF(19221, function (value) {
        // summary:
        //		Returns whether given value matches href attribute of the widget's DOM node.
        return JSProf.LMC(19219, JSProf.LMC(19218, this.target.domNode, 'getAttribute').getAttribute("href"), 'substr').substr(1) == (JSProf.LRE(19220, value) || "/");
    }, 12),
    parse: JSProf.LNF(19224, function (value) {
        // summary:
        //		This functions throws an error so that the new value won't be reflected.
        throw JSProf.LNE(19223, new (JSProf.LFC(19222, Error, true))(), 'Error');
    }, 12)
}, 11));