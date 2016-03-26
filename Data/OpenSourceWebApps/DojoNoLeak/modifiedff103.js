JSProf.LFC(34571, define, false)(JSProf.LNE(34497, [
    "dojo/_base/declare",
    "dojo/_base/lang",
    "./getPlainValue",
    "./getStateful",
    "./ModelRefController"
], 10), JSProf.LNF(34570, function (declare, lang, getPlainValue, getStateful, ModelRefController) {
    JSProf.LFD(34569, setRefSourceModel);
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
        if (JSProf.LRE(34498, old) !== JSProf.LRE(34499, current)) {
            JSProf.LMC(34505, ctrl, 'set').set(JSProf.LGD(34500, ctrl, '_refOriginalModelProp')._refOriginalModelProp, JSProf.LGD(34501, ctrl, 'holdModelUntilCommit').holdModelUntilCommit ? JSProf.LRE(34502, current) : JSProf.LMC(34504, ctrl, 'cloneModel').cloneModel(JSProf.LRE(34503, current)));
            JSProf.LMC(34511, ctrl, 'set').set(JSProf.LGD(34506, ctrl, '_refEditModelProp')._refEditModelProp, JSProf.LGD(34507, ctrl, 'holdModelUntilCommit').holdModelUntilCommit ? JSProf.LMC(34509, ctrl, 'cloneModel').cloneModel(JSProf.LRE(34508, current)) : JSProf.LRE(34510, current));
        }
    }
    return JSProf.LFC(34568, declare, false)("dojox.mvc.EditModelRefController", JSProf.LRE(34512, ModelRefController), JSProf.LNE(34567, {
        getStatefulOptions: null,
        getPlainValueOptions: null,
        holdModelUntilCommit: false,
        originalModel: null,
        sourceModel: null,
        _refOriginalModelProp: "originalModel",
        _refSourceModelProp: "sourceModel",
        _refEditModelProp: "model",
        postscript: JSProf.LNF(34521, function (params, srcNodeRef) {
            // summary:
            //		Sets certain properties before setting models.
            for (var s in JSProf.LNE(34513, {
                    getStatefulOptions: 1,
                    getPlainValueOptions: 1,
                    holdModelUntilCommit: 1
                }, 11)) {
                var value = JSProf.LGE(34516, JSProf.LRE(34514, params) || JSProf.LNE(34515, {}, 11), 's')[s];
                if (typeof JSProf.LRE(34517, value) != "undefined") {
                    JSProf.LPE(34519, this, 's')[s] = JSProf.LRPE(34519, JSProf.LRE(34518, value));
                }
            }
            JSProf.LMC(34520, this, 'inherited').inherited(arguments);
        }, 12),
        set: JSProf.LNF(34528, function (name, value) {
            // summary:
            //		Set a property to this.
            // name: String
            //		The property to set.
            // value: Anything
            //		The value to set in the property.
            if (JSProf.LRE(34522, name) == JSProf.LGD(34523, this, '_refSourceModelProp')._refSourceModelProp) {
                JSProf.LFC(34526, setRefSourceModel, false)(this, JSProf.LGE(34524, this, JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd = this._refSourceModelProp)[JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd], JSProf.LRE(34525, value));
            }
            JSProf.LMC(34527, this, 'inherited').inherited(arguments);
        }, 12),
        cloneModel: JSProf.LNF(34544, function (value) {
            // summary:
            //		Create a clone object of the data source.
            //		Child classes of this controller can override it to achieve its specific needs.
            // value: Anything
            //		The data serving as the data source.
            var plain = JSProf.LMC(34532, lang, 'isFunction').isFunction(JSProf.LGD(34531, JSProf.LRE(34529, value) || JSProf.LNE(34530, {}, 11), 'set').set) && JSProf.LMC(34536, lang, 'isFunction').isFunction(JSProf.LGD(34535, JSProf.LRE(34533, value) || JSProf.LNE(34534, {}, 11), 'watch').watch) ? JSProf.LFC(34539, getPlainValue, false)(JSProf.LRE(34537, value), JSProf.LGD(34538, this, 'getPlainValueOptions').getPlainValueOptions) : JSProf.LRE(34540, value);
            return JSProf.LFC(34543, getStateful, false)(JSProf.LRE(34541, plain), JSProf.LGD(34542, this, 'getStatefulOptions').getStatefulOptions);
        }, 12),
        commit: JSProf.LNF(34552, function () {
            // summary:
            //		Send the change back to the data source.
            JSProf.LMC(34551, this, 'set').set(JSProf.LGD(34545, this, 'holdModelUntilCommit').holdModelUntilCommit ? JSProf.LGD(34546, this, '_refSourceModelProp')._refSourceModelProp : JSProf.LGD(34547, this, '_refOriginalModelProp')._refOriginalModelProp, JSProf.LMC(34550, this, 'cloneModel').cloneModel(JSProf.LMC(34549, this, 'get').get(JSProf.LGD(34548, this, '_refEditModelProp')._refEditModelProp)));
        }, 12),
        reset: JSProf.LNF(34560, function () {
            // summary:
            //		Change the model back to its original state.
            JSProf.LMC(34559, this, 'set').set(JSProf.LGD(34553, this, 'holdModelUntilCommit').holdModelUntilCommit ? JSProf.LGD(34554, this, '_refEditModelProp')._refEditModelProp : JSProf.LGD(34555, this, '_refSourceModelProp')._refSourceModelProp, JSProf.LMC(34558, this, 'cloneModel').cloneModel(JSProf.LMC(34557, this, 'get').get(JSProf.LGD(34556, this, '_refOriginalModelProp')._refOriginalModelProp)));
        }, 12),
        hasControllerProperty: JSProf.LNF(34566, function (name) {
            // summary:
            //		Returns true if this controller itself owns the given property.
            // name: String
            //		The property name.
            return JSProf.LMC(34561, this, 'inherited').inherited(arguments) || JSProf.LRE(34562, name) == JSProf.LGD(34563, this, '_refOriginalModelProp')._refOriginalModelProp || JSProf.LRE(34564, name) == JSProf.LGD(34565, this, '_refSourceModelProp')._refSourceModelProp;
        }, 12)
    }, 11));
}, 12));