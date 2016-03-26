JSProf.LFC(19228, define, false)(JSProf.LNE(19227, {
    format: JSProf.LNF(19223, function (value) {
        // summary:
        //		Returns whether given value matches href attribute of the widget's DOM node.
        return JSProf.LMC(19221, JSProf.LMC(19220, this.target.domNode, 'getAttribute').getAttribute("href"), 'substr').substr(1) == (JSProf.LRE(19222, value) || "/");
    }, 12),
    parse: JSProf.LNF(19226, function (value) {
        // summary:
        //		This functions throws an error so that the new value won't be reflected.
        throw JSProf.LNE(19225, new (JSProf.LFC(19224, Error, true))(), 'Error');
    }, 12)
}, 11));