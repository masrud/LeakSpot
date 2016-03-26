JSProf.LFC(34569, define, false)(JSProf.LNE(34495, [
    "dojo/_base/declare",
    "dojo/_base/lang",
    "./getPlainValue",
    "./getStateful",
    "./ModelRefController"
], 10), JSProf.LNF(34568, function (declare, lang, getPlainValue, getStateful, ModelRefController) {
    JSProf.LFD(34567, setRefSourceModel);
    // module:
    //		dojox/mvc/EditModelRefController
    function setRefSourceModel(ctrl, old, current) {
        // summary:
        //		A function called when this controller gets newer value as the data source.
        // ctrl: dojox/mvc/EditModelRefController
        //		The controller.
        // old: Anything
        //		The older value.
        // current: Anything
        //		The newer value.
        if (JSProf.LRE(34496, old) !== JSProf.LRE(34497, current)) {
            JSProf.LMC(34503, ctrl, 'set').set(JSProf.LGD(34498, ctrl, '_refOriginalModelProp')._refOriginalModelProp, JSProf.LGD(34499, ctrl, 'holdModelUntilCommit').holdModelUntilCommit ? JSProf.LRE(34500, current) : JSProf.LMC(34502, ctrl, 'cloneModel').cloneModel(JSProf.LRE(34501, current)));
            JSProf.LMC(34509, ctrl, 'set').set(JSProf.LGD(34504, ctrl, '_refEditModelProp')._refEditModelProp, JSProf.LGD(34505, ctrl, 'holdModelUntilCommit').holdModelUntilCommit ? JSProf.LMC(34507, ctrl, 'cloneModel').cloneModel(JSProf.LRE(34506, current)) : JSProf.LRE(34508, current));
        }
    }
    return JSProf.LFC(34566, declare, false)("dojox.mvc.EditModelRefController", JSProf.LRE(34510, ModelRefController), JSProf.LNE(34565, {
        getStatefulOptions: null,
        getPlainValueOptions: null,
        holdModelUntilCommit: false,
        originalModel: null,
        sourceModel: null,
        _refOriginalModelProp: "originalModel",
        _refSourceModelProp: "sourceModel",
        _refEditModelProp: "model",
        postscript: JSProf.LNF(34519, function (params, srcNodeRef) {
            // summary:
            //		Sets certain properties before setting models.
            for (var s in JSProf.LNE(34511, {
                    getStatefulOptions: 1,
                    getPlainValueOptions: 1,
                    holdModelUntilCommit: 1
                }, 11)) {
                var value = JSProf.LGE(34514, JSProf.LRE(34512, params) || JSProf.LNE(34513, {}, 11), 's')[s];
                if (typeof JSProf.LRE(34515, value) != "undefined") {
                    JSProf.LPE(34517, this, 's')[s] = JSProf.LRPE(34517, JSProf.LRE(34516, value));
                }
            }
            JSProf.LMC(34518, this, 'inherited').inherited(arguments);
        }, 12),
        set: JSProf.LNF(34526, function (name, value) {
            // summary:
            //		Set a property to this.
            // name: String
            //		The property to set.
            // value: Anything
            //		The value to set in the property.
            if (JSProf.LRE(34520, name) == JSProf.LGD(34521, this, '_refSourceModelProp')._refSourceModelProp) {
                JSProf.LFC(34524, setRefSourceModel, false)(this, JSProf.LGE(34522, this, JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd = this._refSourceModelProp)[JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd], JSProf.LRE(34523, value));
            }
            JSProf.LMC(34525, this, 'inherited').inherited(arguments);
        }, 12),
        cloneModel: JSProf.LNF(34542, function (value) {
            // summary:
            //		Create a clone object of the data source.
            //		Child classes of this controller can override it to achieve its specific needs.
            // value: Anything
            //		The data serving as the data source.
            var plain = JSProf.LMC(34530, lang, 'isFunction').isFunction(JSProf.LGD(34529, JSProf.LRE(34527, value) || JSProf.LNE(34528, {}, 11), 'set').set) && JSProf.LMC(34534, lang, 'isFunction').isFunction(JSProf.LGD(34533, JSProf.LRE(34531, value) || JSProf.LNE(34532, {}, 11), 'watch').watch) ? JSProf.LFC(34537, getPlainValue, false)(JSProf.LRE(34535, value), JSProf.LGD(34536, this, 'getPlainValueOptions').getPlainValueOptions) : JSProf.LRE(34538, value);
            return JSProf.LFC(34541, getStateful, false)(JSProf.LRE(34539, plain), JSProf.LGD(34540, this, 'getStatefulOptions').getStatefulOptions);
        }, 12),
        commit: JSProf.LNF(34550, function () {
            // summary:
            //		Send the change back to the data source.
            JSProf.LMC(34549, this, 'set').set(JSProf.LGD(34543, this, 'holdModelUntilCommit').holdModelUntilCommit ? JSProf.LGD(34544, this, '_refSourceModelProp')._refSourceModelProp : JSProf.LGD(34545, this, '_refOriginalModelProp')._refOriginalModelProp, JSProf.LMC(34548, this, 'cloneModel').cloneModel(JSProf.LMC(34547, this, 'get').get(JSProf.LGD(34546, this, '_refEditModelProp')._refEditModelProp)));
        }, 12),
        reset: JSProf.LNF(34558, function () {
            // summary:
            //		Change the model back to its original state.
            JSProf.LMC(34557, this, 'set').set(JSProf.LGD(34551, this, 'holdModelUntilCommit').holdModelUntilCommit ? JSProf.LGD(34552, this, '_refEditModelProp')._refEditModelProp : JSProf.LGD(34553, this, '_refSourceModelProp')._refSourceModelProp, JSProf.LMC(34556, this, 'cloneModel').cloneModel(JSProf.LMC(34555, this, 'get').get(JSProf.LGD(34554, this, '_refOriginalModelProp')._refOriginalModelProp)));
        }, 12),
        hasControllerProperty: JSProf.LNF(34564, function (name) {
            // summary:
            //		Returns true if this controller itself owns the given property.
            // name: String
            //		The property name.
            return JSProf.LMC(34559, this, 'inherited').inherited(arguments) || JSProf.LRE(34560, name) == JSProf.LGD(34561, this, '_refOriginalModelProp')._refOriginalModelProp || JSProf.LRE(34562, name) == JSProf.LGD(34563, this, '_refSourceModelProp')._refSourceModelProp;
        }, 12)
    }, 11));
}, 12));