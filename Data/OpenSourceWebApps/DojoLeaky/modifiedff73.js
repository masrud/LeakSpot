JSProf.LFC(26167, define, false)(JSProf.LNE(26144, ["dojo/_base/declare"], 10), JSProf.LNF(26166, function (declare) {
    JSProf.LFD(26165, getHiddenState);
    var ACTIVE = "/active", COMPLETED = "/completed";
    function getHiddenState(props) {
        // summary:
        //		Returns the new hidden state of todo item, given the URL hash and the completed state of todo item.
        // props: Object
        //		An object containing the URL hash and the completed state of todo item.
        return JSProf.LGD(26145, props, 'hash').hash == JSProf.LRE(26146, ACTIVE) ? JSProf.LGD(26147, props, 'completed').completed : JSProf.LGD(26148, props, 'hash').hash == JSProf.LRE(26149, COMPLETED) ? !JSProf.LGD(26150, props, 'completed').completed : false;
    }
    return JSProf.LFC(26164, declare, false)(null, JSProf.LNE(26163, {
        _setHashAttr: JSProf.LNF(26156, function (value) {
            // summary:
            //		Handler for calls to set("hash", val), to update hidden state given the new value and the completed state.
            JSProf.LMC(26153, this, 'set').set("hidden", JSProf.LFC(26152, getHiddenState, false)(JSProf.LNE(26151, {
                hash: value,
                completed: this.completed
            }, 11)));
            // Update hidden state given the new value and the completed state
            JSProf.LMC(26155, this, '_set')._set("hash", JSProf.LRE(26154, value));    // Assign the new value to the attribute
        }, 12),
        _setCompletedAttr: JSProf.LNF(26162, function (value) {
            // summary:
            //		Handler for calls to set("completed", val), to update hidden state given the new value and the hash.
            JSProf.LMC(26159, this, 'set').set("hidden", JSProf.LFC(26158, getHiddenState, false)(JSProf.LNE(26157, {
                hash: this.hash,
                completed: value
            }, 11)));
            // Update hidden state given the new value and the hash
            JSProf.LMC(26161, this, '_set')._set("completed", JSProf.LRE(26160, value));    // Assign the new value to the attribute
        }, 12)
    }, 11));
}, 12));