JSProf.LFC(25459, define, false)(JSProf.LNE(25436, ["dojo/_base/declare"], 10), JSProf.LNF(25458, function (declare) {
    JSProf.LFD(25457, getHiddenState);
    var ACTIVE = "/active", COMPLETED = "/completed";
    function getHiddenState(props) {
        // summary:
        //		Returns the new hidden state of todo item, given the URL hash and the completed state of todo item.
        // props: Object
        //		An object containing the URL hash and the completed state of todo item.
        return JSProf.LGD(25437, props, 'hash').hash == JSProf.LRE(25438, ACTIVE) ? JSProf.LGD(25439, props, 'completed').completed : JSProf.LGD(25440, props, 'hash').hash == JSProf.LRE(25441, COMPLETED) ? !JSProf.LGD(25442, props, 'completed').completed : false;
    }
    return JSProf.LFC(25456, declare, false)(null, JSProf.LNE(25455, {
        _setHashAttr: JSProf.LNF(25448, function (value) {
            // summary:
            //		Handler for calls to set("hash", val), to update hidden state given the new value and the completed state.
            JSProf.LMC(25445, this, 'set').set("hidden", JSProf.LFC(25444, getHiddenState, false)(JSProf.LNE(25443, {
                hash: value,
                completed: this.completed
            }, 11)));
            // Update hidden state given the new value and the completed state
            JSProf.LMC(25447, this, '_set')._set("hash", JSProf.LRE(25446, value));    // Assign the new value to the attribute
        }, 12),
        _setCompletedAttr: JSProf.LNF(25454, function (value) {
            // summary:
            //		Handler for calls to set("completed", val), to update hidden state given the new value and the hash.
            JSProf.LMC(25451, this, 'set').set("hidden", JSProf.LFC(25450, getHiddenState, false)(JSProf.LNE(25449, {
                hash: this.hash,
                completed: value
            }, 11)));
            // Update hidden state given the new value and the hash
            JSProf.LMC(25453, this, '_set')._set("completed", JSProf.LRE(25452, value));    // Assign the new value to the attribute
        }, 12)
    }, 11));
}, 12));