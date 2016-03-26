JSProf.LFC(6181, define, false)(JSProf.LNE(5507, [
    "require",
    "./_base/kernel",
    "./_base/lang",
    "./_base/array",
    "./_base/config",
    "./dom",
    "./_base/window",
    "./_base/url",
    "./aspect",
    "./promise/all",
    "./date/stamp",
    "./Deferred",
    "./has",
    "./query",
    "./on",
    "./ready"
], 10), JSProf.LNF(6180, function (require, dojo, dlang, darray, config, dom, dwindow, _Url, aspect, all, dates, Deferred, has, query, don, ready) {
    JSProf.LFD(6177, myEval);
    JSProf.LFD(6178, getNameMap);
    JSProf.LFD(6179, getCtor);
    // module:
    //		dojo/parser
    JSProf.LNE(5509, new (JSProf.LFC(5508, Date, true))("X"), 'Date');
    // workaround for #11279, new Date("") == NaN
    // data-dojo-props etc. is not restricted to JSON, it can be any javascript
    function myEval(text) {
        return eval("(" + JSProf.LRE(5510, text) + ")");
    }
    // Widgets like BorderContainer add properties to _Widget via dojo.extend().
    // If BorderContainer is loaded after _Widget's parameter list has been cached,
    // we need to refresh that parameter list (for _Widget and all widgets that extend _Widget).
    var extendCnt = 0;
    JSProf.LMC(5513, aspect, 'after').after(JSProf.LRE(5511, dlang), "extend", JSProf.LNF(5512, function () {
        extendCnt++;
    }, 12), true);
    function getNameMap(ctor) {
        // summary:
        //		Returns map from lowercase name to attribute name in class, ex: {onclick: "onClick"}
        var map = JSProf.LGD(5514, ctor, '_nameCaseMap')._nameCaseMap, proto = JSProf.LGD(5515, ctor, 'prototype').prototype;
        // Create the map if it's undefined.
        // Refresh the map if a superclass was possibly extended with new methods since the map was created.
        if (!JSProf.LRE(5516, map) || JSProf.LGD(5517, map, '_extendCnt')._extendCnt < JSProf.LRE(5518, extendCnt)) {
            map = JSProf.LWR(5521, map, JSProf.LPD(5520, ctor, '_nameCaseMap')._nameCaseMap = JSProf.LRSP(5520, JSProf.LNE(5519, {}, 11)));
            for (var name in JSProf.LRE(5522, proto)) {
                if (name.charAt(0) === "_") {
                    continue;
                }
                // skip internal properties
                JSProf.LPE(5524, map, JSProf.TMPS.t2544a7c095cbdde4765cca3192459eff84b86138 = name.toLowerCase())[JSProf.TMPS.t2544a7c095cbdde4765cca3192459eff84b86138] = JSProf.LRPE(5524, JSProf.LRE(5523, name));
            }
            JSProf.LPD(5526, map, '_extendCnt')._extendCnt = JSProf.LRSP(5526, JSProf.LRE(5525, extendCnt));
        }
        return JSProf.LRE(5527, map);
    }
    // Map from widget name or list of widget names(ex: "dijit/form/Button,acme/MyMixin") to a constructor.
    var _ctorMap = JSProf.LNE(5528, {}, 11);
    function getCtor(types, contextRequire) {
        // summary:
        //		Retrieves a constructor.  If the types array contains more than one class/MID then the
        //		subsequent classes will be mixed into the first class and a unique constructor will be
        //		returned for that array.
        var ts = JSProf.LMC(5529, types, 'join').join();
        if (!JSProf.LGE(5530, _ctorMap, 'ts')[ts]) {
            var mixins = JSProf.LNE(5531, [], 10);
            for (var i = 0, l = JSProf.LGD(5532, types, 'length').length; JSProf.LRE(5533, i) < JSProf.LRE(5534, l); i++) {
                var t = JSProf.LGE(5535, types, 'i')[i];
                // TODO: Consider swapping getObject and require in the future
                JSProf.LPE(5546, mixins, JSProf.TMPS.t83a01a468835a01e58ce72622b3058603340747a = mixins.length)[JSProf.TMPS.t83a01a468835a01e58ce72622b3058603340747a] = JSProf.LRPE(5546, JSProf.LPE(5545, _ctorMap, 't')[t] = JSProf.LRPE(5545, JSProf.LGE(5536, _ctorMap, 't')[t] || (JSProf.LMC(5538, dlang, 'getObject').getObject(JSProf.LRE(5537, t)) || ~JSProf.LMC(5539, t, 'indexOf').indexOf('/') && (JSProf.LRE(5540, contextRequire) ? JSProf.LFC(5542, contextRequire, false)(JSProf.LRE(5541, t)) : JSProf.LFC(5544, require, false)(JSProf.LRE(5543, t))))));
            }
            var ctor = JSProf.LMC(5547, mixins, 'shift').shift();
            JSProf.LPE(5556, _ctorMap, 'ts')[ts] = JSProf.LRPE(5556, JSProf.LGD(5548, mixins, 'length').length ? JSProf.LGD(5549, ctor, 'createSubclass').createSubclass ? JSProf.LMC(5551, ctor, 'createSubclass').createSubclass(JSProf.LRE(5550, mixins)) : JSProf.LMC(5554, ctor.extend, 'apply').apply(JSProf.LRE(5552, ctor), JSProf.LRE(5553, mixins)) : JSProf.LRE(5555, ctor));
        }
        return JSProf.LGE(5557, _ctorMap, 'ts')[ts];
    }
    var parser = JSProf.LNE(6169, {
            _clearCache: JSProf.LNF(5560, function () {
                // summary:
                //		Clear cached data.   Used mainly for benchmarking.
                extendCnt++;
                _ctorMap = JSProf.LWR(5559, _ctorMap, JSProf.LNE(5558, {}, 11));
            }, 12),
            _functionFromScript: JSProf.LNF(5577, function (script, attrData) {
                // summary:
                //		Convert a `<script type="dojo/method" args="a, b, c"> ... </script>`
                //		into a function
                // script: DOMNode
                //		The `<script>` DOMNode
                // attrData: String
                //		For HTML5 compliance, searches for attrData + "args" (typically
                //		"data-dojo-args") instead of "args"
                var preamble = "", suffix = "", argsStr = JSProf.LMC(5562, script, 'getAttribute').getAttribute(JSProf.LRE(5561, attrData) + "args") || JSProf.LMC(5563, script, 'getAttribute').getAttribute("args"), withStr = JSProf.LMC(5564, script, 'getAttribute').getAttribute("with");
                // Convert any arguments supplied in script tag into an array to be passed to the
                var fnArgs = (JSProf.LRE(5565, argsStr) || "").split(/\s*,\s*/);
                if (JSProf.LRE(5566, withStr) && JSProf.LGD(5567, withStr, 'length').length) {
                    JSProf.LMC(5570, darray, 'forEach').forEach(withStr.split(/\s*,\s*/), JSProf.LNF(5569, function (part) {
                        preamble += "with(" + JSProf.LRE(5568, part) + "){";
                        suffix += "}";
                    }, 12));
                }
                return JSProf.LNE(5576, new (JSProf.LFC(5575, Function, true))(JSProf.LRE(5571, fnArgs), JSProf.LRE(5572, preamble) + JSProf.LGD(5573, script, 'innerHTML').innerHTML + JSProf.LRE(5574, suffix)), 'Function');
            }, 12),
            instantiate: JSProf.LNF(5615, function (nodes, mixin, options) {
                // summary:
                //		Takes array of nodes, and turns them into class instances and
                //		potentially calls a startup method to allow them to connect with
                //		any children.
                // nodes: Array
                //		Array of DOM nodes
                // mixin: Object?
                //		An object that will be mixed in with each node in the array.
                //		Values in the mixin will override values in the node, if they
                //		exist.
                // options: Object?
                //		An object used to hold kwArgs for instantiation.
                //		See parse.options argument for details.
                // returns:
                //		Array of instances.
                mixin = JSProf.LWR(5580, mixin, JSProf.LRE(5578, mixin) || JSProf.LNE(5579, {}, 11));
                options = JSProf.LWR(5583, options, JSProf.LRE(5581, options) || JSProf.LNE(5582, {}, 11));
                var dojoType = (JSProf.LGD(5584, options, 'scope').scope || JSProf.LGD(5585, dojo, '_scopeName')._scopeName) + "Type",
                    // typically "dojoType"
                    attrData = "data-" + (JSProf.LGD(5586, options, 'scope').scope || JSProf.LGD(5587, dojo, '_scopeName')._scopeName) + "-",
                    // typically "data-dojo-"
                    dataDojoType = JSProf.LRE(5588, attrData) + "type",
                    // typically "data-dojo-type"
                    dataDojoMixins = JSProf.LRE(5589, attrData) + "mixins";
                // typically "data-dojo-mixins"
                var list = JSProf.LNE(5590, [], 10);
                JSProf.LMC(5610, darray, 'forEach').forEach(JSProf.LRE(5591, nodes), JSProf.LNF(5609, function (node) {
                    var type = JSProf.LRE(5592, dojoType) in JSProf.LRE(5593, mixin) ? JSProf.LGE(5594, mixin, 'dojoType')[dojoType] : JSProf.LMC(5596, node, 'getAttribute').getAttribute(JSProf.LRE(5595, dataDojoType)) || JSProf.LMC(5598, node, 'getAttribute').getAttribute(JSProf.LRE(5597, dojoType));
                    if (JSProf.LRE(5599, type)) {
                        var mixinsValue = JSProf.LMC(5601, node, 'getAttribute').getAttribute(JSProf.LRE(5600, dataDojoMixins)), types = JSProf.LRE(5602, mixinsValue) ? JSProf.LNE(5604, [JSProf.LRE(5603, type)], 10).concat(mixinsValue.split(/\s*,\s*/)) : JSProf.LNE(5606, [JSProf.LRE(5605, type)], 10);
                        JSProf.LMC(5608, list, 'push').push(JSProf.LNE(5607, {
                            node: node,
                            types: types
                        }, 11));
                    }
                }, 12));
                // Instantiate the nodes and return the list of instances.
                return JSProf.LMC(5614, this, '_instantiate')._instantiate(JSProf.LRE(5611, list), JSProf.LRE(5612, mixin), JSProf.LRE(5613, options));
            }, 12),
            _instantiate: JSProf.LNF(5651, function (nodes, mixin, options, returnPromise) {
                JSProf.LFD(5650, onConstruct);
                // summary:
                //		Takes array of objects representing nodes, and turns them into class instances and
                //		potentially calls a startup method to allow them to connect with
                //		any children.
                // nodes: Array
                //		Array of objects like
                //	|		{
                //	|			ctor: Function (may be null)
                //	|			types: ["dijit/form/Button", "acme/MyMixin"] (used if ctor not specified)
                //	|			node: DOMNode,
                //	|			scripts: [ ... ],	// array of <script type="dojo/..."> children of node
                //	|			inherited: { ... }	// settings inherited from ancestors like dir, theme, etc.
                //	|		}
                // mixin: Object
                //		An object that will be mixed in with each node in the array.
                //		Values in the mixin will override values in the node, if they
                //		exist.
                // options: Object
                //		An options object used to hold kwArgs for instantiation.
                //		See parse.options argument for details.
                // returnPromise: Boolean
                //		Return a Promise rather than the instance; supports asynchronous widget creation.
                // returns:
                //		Array of instances, or if returnPromise is true, a promise for array of instances
                //		that resolves when instances have finished initializing.
                // Call widget constructors.   Some may be asynchronous and return promises.
                var thelist = JSProf.LMC(5633, darray, 'map').map(JSProf.LRE(5616, nodes), JSProf.LNF(5632, function (obj) {
                        var ctor = JSProf.LGD(5617, obj, 'ctor').ctor || JSProf.LFC(5620, getCtor, false)(JSProf.LGD(5618, obj, 'types').types, JSProf.LGD(5619, options, 'contextRequire').contextRequire);
                        // If we still haven't resolved a ctor, it is fatal now
                        if (!JSProf.LRE(5621, ctor)) {
                            throw JSProf.LNE(5624, new (JSProf.LFC(5623, Error, true))("Unable to resolve constructor for: '" + JSProf.LMC(5622, obj.types, 'join').join() + "'"), 'Error');
                        }
                        return JSProf.LMC(5631, this, 'construct').construct(JSProf.LRE(5625, ctor), JSProf.LGD(5626, obj, 'node').node, JSProf.LRE(5627, mixin), JSProf.LRE(5628, options), JSProf.LGD(5629, obj, 'scripts').scripts, JSProf.LGD(5630, obj, 'inherited').inherited);
                    }, 12), this);
                // After all widget construction finishes, call startup on each top level instance if it makes sense (as for
                // widgets).  Parent widgets will recursively call startup on their (non-top level) children
                function onConstruct(thelist) {
                    if (!JSProf.LGD(5634, mixin, '_started')._started && !JSProf.LGD(5635, options, 'noStart').noStart) {
                        JSProf.LMC(5641, darray, 'forEach').forEach(JSProf.LRE(5636, thelist), JSProf.LNF(5640, function (instance) {
                            if (typeof JSProf.LGD(5637, instance, 'startup').startup === "function" && !JSProf.LGD(5638, instance, '_started')._started) {
                                JSProf.LMC(5639, instance, 'startup').startup();
                            }
                        }, 12));
                    }
                    return JSProf.LRE(5642, thelist);
                }
                if (JSProf.LRE(5643, returnPromise)) {
                    return JSProf.LMC(5647, JSProf.LFC(5645, all, false)(JSProf.LRE(5644, thelist)), 'then').then(JSProf.LRE(5646, onConstruct));
                } else {
                    // Back-compat path, remove for 2.0
                    return JSProf.LFC(5649, onConstruct, false)(JSProf.LRE(5648, thelist));
                }
            }, 12),
            construct: JSProf.LNF(5900, function (ctor, node, mixin, options, scripts, inherited) {
                JSProf.LFD(5899, onInstantiate);
                // summary:
                //		Calls new ctor(params, node), where params is the hash of parameters specified on the node,
                //		excluding data-dojo-type and data-dojo-mixins.   Does not call startup().
                // ctor: Function
                //		Widget constructor.
                // node: DOMNode
                //		This node will be replaced/attached to by the widget.  It also specifies the arguments to pass to ctor.
                // mixin: Object?
                //		Attributes in this object will be passed as parameters to ctor,
                //		overriding attributes specified on the node.
                // options: Object?
                //		An options object used to hold kwArgs for instantiation.   See parse.options argument for details.
                // scripts: DomNode[]?
                //		Array of `<script type="dojo/*">` DOMNodes.  If not specified, will search for `<script>` tags inside node.
                // inherited: Object?
                //		Settings from dir=rtl or lang=... on a node above this node.   Overrides options.inherited.
                // returns:
                //		Instance or Promise for the instance, if markupFactory() itself returned a promise
                var proto = JSProf.LRE(5652, ctor) && JSProf.LGD(5653, ctor, 'prototype').prototype;
                options = JSProf.LWR(5656, options, JSProf.LRE(5654, options) || JSProf.LNE(5655, {}, 11));
                // Setup hash to hold parameter settings for this widget.	Start with the parameter
                // settings inherited from ancestors ("dir" and "lang").
                // Inherited setting may later be overridden by explicit settings on node itself.
                var params = JSProf.LNE(5657, {}, 11);
                if (JSProf.LGD(5658, options, 'defaults').defaults) {
                    // settings for the document itself (or whatever subtree is being parsed)
                    JSProf.LMC(5661, dlang, 'mixin').mixin(JSProf.LRE(5659, params), JSProf.LGD(5660, options, 'defaults').defaults);
                }
                if (JSProf.LRE(5662, inherited)) {
                    // settings from dir=rtl or lang=... on a node above this node
                    JSProf.LMC(5665, dlang, 'mixin').mixin(JSProf.LRE(5663, params), JSProf.LRE(5664, inherited));
                }
                // Get list of attributes explicitly listed in the markup
                var attributes;
                if (JSProf.LFC(5666, has, false)("dom-attributes-explicit")) {
                    // Standard path to get list of user specified attributes
                    attributes = JSProf.LWR(5668, attributes, JSProf.LGD(5667, node, 'attributes').attributes);
                } else if (JSProf.LFC(5669, has, false)("dom-attributes-specified-flag")) {
                    // Special processing needed for IE8, to skip a few faux values in attributes[]
                    attributes = JSProf.LWR(5674, attributes, JSProf.LMC(5673, darray, 'filter').filter(JSProf.LGD(5670, node, 'attributes').attributes, JSProf.LNF(5672, function (a) {
                        return JSProf.LGD(5671, a, 'specified').specified;
                    }, 12)));
                } else {
                    // Special path for IE6-7, avoid (sometimes >100) bogus entries in node.attributes
                    var clone = JSProf.LMC(5676, /^input$|^img$/i, 'test').test(JSProf.LGD(5675, node, 'nodeName').nodeName) ? JSProf.LRE(5677, node) : JSProf.LMC(5678, node, 'cloneNode').cloneNode(false), attrs = JSProf.LMC(5681, JSProf.LMC(5680, JSProf.LMC(5679, clone.outerHTML, 'replace').replace(/=[^\s"']+|="[^"]*"|='[^']*'/g, ""), 'replace').replace(/^\s*<[a-zA-Z0-9]*\s*/, ""), 'replace').replace(/\s*>.*$/, "");
                    attributes = JSProf.LWR(5692, attributes, JSProf.LMC(5691, darray, 'map').map(attrs.split(/\s+/), JSProf.LNF(5690, function (name) {
                        var lcName = name.toLowerCase();
                        return JSProf.LNE(5689, {
                            name: name,
                            value: JSProf.LGD(5682, node, 'nodeName').nodeName == "LI" && JSProf.LRE(5683, name) == "value" || JSProf.LRE(5684, lcName) == "enctype" ? JSProf.LMC(5686, node, 'getAttribute').getAttribute(JSProf.LRE(5685, lcName)) : JSProf.LMC(5688, node, 'getAttributeNode').getAttributeNode(JSProf.LRE(5687, lcName)).value
                        }, 11);
                    }, 12)));
                }
                // Hash to convert scoped attribute name (ex: data-dojo17-params) to something friendly (ex: data-dojo-params)
                // TODO: remove scope for 2.0
                var scope = JSProf.LGD(5693, options, 'scope').scope || JSProf.LGD(5694, dojo, '_scopeName')._scopeName, attrData = "data-" + JSProf.LRE(5695, scope) + "-",
                    // typically "data-dojo-"
                    hash = JSProf.LNE(5696, {}, 11);
                if (JSProf.LRE(5697, scope) !== "dojo") {
                    JSProf.LPE(5699, hash, JSProf.TMPS.t5a1e53623667920a5685e5f717f8c9ab22ad06a7 = JSProf.LRE(5698, attrData) + "props")[JSProf.TMPS.t5a1e53623667920a5685e5f717f8c9ab22ad06a7] = JSProf.LRPE(5699, "data-dojo-props");
                    JSProf.LPE(5701, hash, JSProf.TMPS.t5a1e53623667920a5685e5f717f8c9ab22ad06a7 = JSProf.LRE(5700, attrData) + "type")[JSProf.TMPS.t5a1e53623667920a5685e5f717f8c9ab22ad06a7] = JSProf.LRPE(5701, "data-dojo-type");
                    JSProf.LPE(5703, hash, JSProf.TMPS.t5a1e53623667920a5685e5f717f8c9ab22ad06a7 = JSProf.LRE(5702, attrData) + "mixins")[JSProf.TMPS.t5a1e53623667920a5685e5f717f8c9ab22ad06a7] = JSProf.LRPE(5703, "data-dojo-mixins");
                    JSProf.LPE(5705, hash, JSProf.TMPS.t5a1e53623667920a5685e5f717f8c9ab22ad06a7 = JSProf.LRE(5704, scope) + "type")[JSProf.TMPS.t5a1e53623667920a5685e5f717f8c9ab22ad06a7] = JSProf.LRPE(5705, "dojoType");
                    JSProf.LPE(5707, hash, JSProf.TMPS.t5a1e53623667920a5685e5f717f8c9ab22ad06a7 = JSProf.LRE(5706, attrData) + "id")[JSProf.TMPS.t5a1e53623667920a5685e5f717f8c9ab22ad06a7] = JSProf.LRPE(5707, "data-dojo-id");
                }
                // Read in attributes and process them, including data-dojo-props, data-dojo-type,
                // dojoAttachPoint, etc., as well as normal foo=bar attributes.
                var i = 0, item, funcAttrs = JSProf.LNE(5708, [], 10), jsname, extra;
                while (item = JSProf.LWR(5710, item, JSProf.LGE(5709, attributes, JSProf.TMPS.t4505abfa1e8bff703ee2111e646d1c0df1f3298d = i++)[JSProf.TMPS.t4505abfa1e8bff703ee2111e646d1c0df1f3298d])) {
                    var name = JSProf.LGD(5711, item, 'name').name, lcName = name.toLowerCase(), value = JSProf.LGD(5712, item, 'value').value;
                    switch (JSProf.LGE(5713, hash, 'lcName')[lcName] || JSProf.LRE(5714, lcName)) {
                    // Already processed, just ignore
                    case "data-dojo-type":
                    case "dojotype":
                    case "data-dojo-mixins":
                        break;
                    // Data-dojo-props.   Save for later to make sure it overrides direct foo=bar settings
                    case "data-dojo-props":
                        extra = JSProf.LWR(5716, extra, JSProf.LRE(5715, value));
                        break;
                    // data-dojo-id or jsId. TODO: drop jsId in 2.0
                    case "data-dojo-id":
                    case "jsid":
                        jsname = JSProf.LWR(5718, jsname, JSProf.LRE(5717, value));
                        break;
                    // For the benefit of _Templated
                    case "data-dojo-attach-point":
                    case "dojoattachpoint":
                        JSProf.LPD(5720, params, 'dojoAttachPoint').dojoAttachPoint = JSProf.LRSP(5720, JSProf.LRE(5719, value));
                        break;
                    case "data-dojo-attach-event":
                    case "dojoattachevent":
                        JSProf.LPD(5722, params, 'dojoAttachEvent').dojoAttachEvent = JSProf.LRSP(5722, JSProf.LRE(5721, value));
                        break;
                    // Special parameter handling needed for IE
                    case "class":
                        JSProf.LPE(5724, params, 'class')["class"] = JSProf.LRPE(5724, JSProf.LGD(5723, node, 'className').className);
                        break;
                    case "style":
                        JSProf.LPE(5727, params, 'style')["style"] = JSProf.LRPE(5727, JSProf.LGD(5725, node, 'style').style && JSProf.LGD(5726, node.style, 'cssText').cssText);
                        break;
                    default:
                        // Normal attribute, ex: value="123"
                        // Find attribute in widget corresponding to specified name.
                        // May involve case conversion, ex: onclick --> onClick
                        if (!(JSProf.LRE(5728, name) in JSProf.LRE(5729, proto))) {
                            var map = JSProf.LFC(5731, getNameMap, false)(JSProf.LRE(5730, ctor));
                            name = JSProf.LWR(5734, name, JSProf.LGE(5732, map, 'lcName')[lcName] || JSProf.LRE(5733, name));
                        }
                        // Set params[name] to value, doing type conversion
                        if (JSProf.LRE(5735, name) in JSProf.LRE(5736, proto)) {
                            switch (typeof JSProf.LGE(5737, proto, 'name')[name]) {
                            case "string":
                                JSProf.LPE(5739, params, 'name')[name] = JSProf.LRPE(5739, JSProf.LRE(5738, value));
                                break;
                            case "number":
                                JSProf.LPE(5743, params, 'name')[name] = JSProf.LRPE(5743, JSProf.LGD(5740, value, 'length').length ? JSProf.LFC(5742, Number, false)(JSProf.LRE(5741, value)) : NaN);
                                break;
                            case "boolean":
                                // for checked/disabled value might be "" or "checked".	 interpret as true.
                                JSProf.LPE(5744, params, 'name')[name] = JSProf.LRPE(5744, value.toLowerCase() != "false");
                                break;
                            case "function":
                                if (JSProf.LRE(5745, value) === "" || JSProf.LMC(5746, value, 'search').search(/[^\w\.]+/i) != -1) {
                                    // The user has specified some text for a function like "return x+5"
                                    JSProf.LPE(5750, params, 'name')[name] = JSProf.LRPE(5750, JSProf.LNE(5749, new (JSProf.LFC(5748, Function, true))(JSProf.LRE(5747, value)), 'Function'));
                                } else {
                                    // The user has specified the name of a global function like "myOnClick"
                                    // or a single word function "return"
                                    JSProf.LPE(5756, params, 'name')[name] = JSProf.LRPE(5756, JSProf.LMC(5752, dlang, 'getObject').getObject(JSProf.LRE(5751, value), false) || JSProf.LNE(5755, new (JSProf.LFC(5754, Function, true))(JSProf.LRE(5753, value)), 'Function'));
                                }
                                JSProf.LMC(5758, funcAttrs, 'push').push(JSProf.LRE(5757, name));
                                // prevent "double connect", see #15026
                                break;
                            default:
                                var pVal = JSProf.LGE(5759, proto, 'name')[name];
                                JSProf.LPE(5780, params, 'name')[name] = JSProf.LRPE(5780, JSProf.LRE(5760, pVal) && "length" in JSProf.LRE(5761, pVal) ? JSProf.LRE(5762, value) ? value.split(/\s*,\s*/) : JSProf.LNE(5763, [], 10) : JSProf.LRE(5764, pVal) instanceof JSProf.LRU(5765, typeof Date === 'undefined' ? undefined : Date) ? JSProf.LRE(5766, value) == "" ? JSProf.LNE(5768, new (JSProf.LFC(5767, Date, true))(""), 'Date') : JSProf.LRE(5769, value) == "now" ? JSProf.LNE(5771, new (JSProf.LFC(5770, Date, true))(), 'Date') : JSProf.LMC(5773, dates, 'fromISOString').fromISOString(JSProf.LRE(5772, value)) : JSProf.LRE(5774, pVal) instanceof JSProf.LRE(5775, _Url) ? JSProf.LGD(5776, dojo, 'baseUrl').baseUrl + JSProf.LRE(5777, value) : JSProf.LFC(5779, myEval, false)(JSProf.LRE(5778, value)));
                            }
                        } else {
                            JSProf.LPE(5782, params, 'name')[name] = JSProf.LRPE(5782, JSProf.LRE(5781, value));
                        }
                    }
                }
                // Remove function attributes from DOMNode to prevent "double connect" problem, see #15026.
                // Do this as a separate loop since attributes[] is often a live collection (depends on the browser though).
                for (var j = 0; JSProf.LRE(5783, j) < JSProf.LGD(5784, funcAttrs, 'length').length; j++) {
                    var lcfname = funcAttrs[j].toLowerCase();
                    JSProf.LMC(5786, node, 'removeAttribute').removeAttribute(JSProf.LRE(5785, lcfname));
                    node[lcfname] = null;
                }
                // Mix things found in data-dojo-props into the params, overriding any direct settings
                if (JSProf.LRE(5787, extra)) {
                    try {
                        extra = JSProf.LWR(5791, extra, JSProf.LMC(5790, myEval, 'call').call(JSProf.LGD(5788, options, 'propsThis').propsThis, "{" + JSProf.LRE(5789, extra) + "}"));
                        JSProf.LMC(5794, dlang, 'mixin').mixin(JSProf.LRE(5792, params), JSProf.LRE(5793, extra));
                    } catch (e) {
                        // give the user a pointer to their invalid parameters. FIXME: can we kill this in production?
                        throw JSProf.LNE(5797, new (JSProf.LFC(5796, Error, true))(e.toString() + " in data-dojo-props='" + JSProf.LRE(5795, extra) + "'"), 'Error');
                    }
                }
                // Any parameters specified in "mixin" override everything else.
                JSProf.LMC(5800, dlang, 'mixin').mixin(JSProf.LRE(5798, params), JSProf.LRE(5799, mixin));
                // Get <script> nodes associated with this widget, if they weren't specified explicitly
                if (!JSProf.LRE(5801, scripts)) {
                    scripts = JSProf.LWR(5808, scripts, JSProf.LRE(5802, ctor) && (JSProf.LGD(5803, ctor, '_noScript')._noScript || JSProf.LGD(5804, proto, '_noScript')._noScript) ? JSProf.LNE(5805, [], 10) : JSProf.LFC(5807, query, false)("> script[type^='dojo/']", JSProf.LRE(5806, node)));
                }
                // Process <script type="dojo/*"> script tags
                // <script type="dojo/method" data-dojo-event="foo"> tags are added to params, and passed to
                // the widget on instantiation.
                // <script type="dojo/method"> tags (with no event) are executed after instantiation
                // <script type="dojo/connect" data-dojo-event="foo"> tags are dojo.connected after instantiation,
                // and likewise with <script type="dojo/aspect" data-dojo-method="foo">
                // <script type="dojo/watch" data-dojo-prop="foo"> tags are dojo.watch after instantiation
                // <script type="dojo/on" data-dojo-event="foo"> tags are dojo.on after instantiation
                // note: dojo/* script tags cannot exist in self closing widgets, like <input />
                var aspects = JSProf.LNE(5809, [], 10),
                    // aspects to connect after instantiation
                    calls = JSProf.LNE(5810, [], 10),
                    // functions to call after instantiation
                    watches = JSProf.LNE(5811, [], 10),
                    // functions to watch after instantiation
                    ons = JSProf.LNE(5812, [], 10);
                // functions to on after instantiation
                if (JSProf.LRE(5813, scripts)) {
                    for (i = JSProf.LWR(5814, i, 0); JSProf.LRE(5815, i) < JSProf.LGD(5816, scripts, 'length').length; i++) {
                        var script = JSProf.LGE(5817, scripts, 'i')[i];
                        JSProf.LMC(5819, node, 'removeChild').removeChild(JSProf.LRE(5818, script));
                        // FIXME: drop event="" support in 2.0. use data-dojo-event="" instead
                        var event = JSProf.LMC(5821, script, 'getAttribute').getAttribute(JSProf.LRE(5820, attrData) + "event") || JSProf.LMC(5822, script, 'getAttribute').getAttribute("event"), prop = JSProf.LMC(5824, script, 'getAttribute').getAttribute(JSProf.LRE(5823, attrData) + "prop"), method = JSProf.LMC(5826, script, 'getAttribute').getAttribute(JSProf.LRE(5825, attrData) + "method"), advice = JSProf.LMC(5828, script, 'getAttribute').getAttribute(JSProf.LRE(5827, attrData) + "advice"), scriptType = JSProf.LMC(5829, script, 'getAttribute').getAttribute("type"), nf = JSProf.LMC(5832, this, '_functionFromScript')._functionFromScript(JSProf.LRE(5830, script), JSProf.LRE(5831, attrData));
                        if (JSProf.LRE(5833, event)) {
                            if (JSProf.LRE(5834, scriptType) == "dojo/connect") {
                                JSProf.LMC(5836, aspects, 'push').push(JSProf.LNE(5835, {
                                    method: event,
                                    func: nf
                                }, 11));
                            } else if (JSProf.LRE(5837, scriptType) == "dojo/on") {
                                JSProf.LMC(5839, ons, 'push').push(JSProf.LNE(5838, {
                                    event: event,
                                    func: nf
                                }, 11));
                            } else {
                                // <script type="dojo/method" data-dojo-event="foo">
                                // TODO for 2.0: use data-dojo-method="foo" instead (also affects dijit/Declaration)
                                JSProf.LPE(5841, params, 'event')[event] = JSProf.LRPE(5841, JSProf.LRE(5840, nf));
                            }
                        } else if (JSProf.LRE(5842, scriptType) == "dojo/aspect") {
                            JSProf.LMC(5844, aspects, 'push').push(JSProf.LNE(5843, {
                                method: method,
                                advice: advice,
                                func: nf
                            }, 11));
                        } else if (JSProf.LRE(5845, scriptType) == "dojo/watch") {
                            JSProf.LMC(5847, watches, 'push').push(JSProf.LNE(5846, {
                                prop: prop,
                                func: nf
                            }, 11));
                        } else {
                            JSProf.LMC(5849, calls, 'push').push(JSProf.LRE(5848, nf));
                        }
                    }
                }
                // create the instance
                var markupFactory = JSProf.LGD(5850, ctor, 'markupFactory').markupFactory || JSProf.LGD(5851, proto, 'markupFactory').markupFactory;
                var instance = JSProf.LRE(5852, markupFactory) ? JSProf.LFC(5856, markupFactory, false)(JSProf.LRE(5853, params), JSProf.LRE(5854, node), JSProf.LRE(5855, ctor)) : JSProf.LNE(5860, new (JSProf.LFC(5859, ctor, true))(JSProf.LRE(5857, params), JSProf.LRE(5858, node)), 'ctor');
                function onInstantiate(instance) {
                    // map it to the JS namespace if that makes sense
                    if (JSProf.LRE(5861, jsname)) {
                        JSProf.LMC(5864, dlang, 'setObject').setObject(JSProf.LRE(5862, jsname), JSProf.LRE(5863, instance));
                    }
                    // process connections and startup functions
                    for (i = JSProf.LWR(5865, i, 0); JSProf.LRE(5866, i) < JSProf.LGD(5867, aspects, 'length').length; i++) {
                        JSProf.LMC(5874, aspect, JSProf.TMPS.tfc616f1b1d6f9d6db629ed0380bda3d48b0239d4 = JSProf.LGD(5868, aspects[i], 'advice').advice || "after", 1)[JSProf.TMPS.tfc616f1b1d6f9d6db629ed0380bda3d48b0239d4](JSProf.LRE(5869, instance), JSProf.LGD(5870, aspects[i], 'method').method, JSProf.LMC(5873, dlang, 'hitch').hitch(JSProf.LRE(5871, instance), JSProf.LGD(5872, aspects[i], 'func').func), true);
                    }
                    for (i = JSProf.LWR(5875, i, 0); JSProf.LRE(5876, i) < JSProf.LGD(5877, calls, 'length').length; i++) {
                        JSProf.LMC(5879, calls[i], 'call').call(JSProf.LRE(5878, instance));
                    }
                    for (i = JSProf.LWR(5880, i, 0); JSProf.LRE(5881, i) < JSProf.LGD(5882, watches, 'length').length; i++) {
                        JSProf.LMC(5885, instance, 'watch').watch(JSProf.LGD(5883, watches[i], 'prop').prop, JSProf.LGD(5884, watches[i], 'func').func);
                    }
                    for (i = JSProf.LWR(5886, i, 0); JSProf.LRE(5887, i) < JSProf.LGD(5888, ons, 'length').length; i++) {
                        JSProf.LFC(5892, don, false)(JSProf.LRE(5889, instance), JSProf.LGD(5890, ons[i], 'event').event, JSProf.LGD(5891, ons[i], 'func').func);
                    }
                    return JSProf.LRE(5893, instance);
                }
                if (JSProf.LGD(5894, instance, 'then').then) {
                    return JSProf.LMC(5896, instance, 'then').then(JSProf.LRE(5895, onInstantiate));
                } else {
                    return JSProf.LFC(5898, onInstantiate, false)(JSProf.LRE(5897, instance));
                }
            }, 12),
            scan: JSProf.LNF(6071, function (root, options) {
                JSProf.LFD(6069, findAncestorAttr);
                JSProf.LFD(6070, getEffective);
                // summary:
                //		Scan a DOM tree and return an array of objects representing the DOMNodes
                //		that need to be turned into widgets.
                // description:
                //		Search specified node (or document root node) recursively for class instances
                //		and return an array of objects that represent potential widgets to be
                //		instantiated. Searches for either data-dojo-type="MID" or dojoType="MID" where
                //		"MID" is a module ID like "dijit/form/Button" or a fully qualified Class name
                //		like "dijit/form/Button".  If the MID is not currently available, scan will
                //		attempt to require() in the module.
                //
                //		See parser.parse() for details of markup.
                // root: DomNode?
                //		A default starting root node from which to start the parsing. Can be
                //		omitted, defaulting to the entire document. If omitted, the `options`
                //		object can be passed in this place. If the `options` object has a
                //		`rootNode` member, that is used.
                // options: Object
                //		a kwArgs options object, see parse() for details
                //
                // returns: Promise
                //		A promise that is resolved with the nodes that have been parsed.
                var list = JSProf.LNE(5901, [], 10),
                    // Output List
                    mids = JSProf.LNE(5902, [], 10),
                    // An array of modules that are not yet loaded
                    midsHash = JSProf.LNE(5903, {}, 11);
                // Used to keep the mids array unique
                var dojoType = (JSProf.LGD(5904, options, 'scope').scope || JSProf.LGD(5905, dojo, '_scopeName')._scopeName) + "Type",
                    // typically "dojoType"
                    attrData = "data-" + (JSProf.LGD(5906, options, 'scope').scope || JSProf.LGD(5907, dojo, '_scopeName')._scopeName) + "-",
                    // typically "data-dojo-"
                    dataDojoType = JSProf.LRE(5908, attrData) + "type",
                    // typically "data-dojo-type"
                    dataDojoTextDir = JSProf.LRE(5909, attrData) + "textdir",
                    // typically "data-dojo-textdir"
                    dataDojoMixins = JSProf.LRE(5910, attrData) + "mixins";
                // typically "data-dojo-mixins"
                // Info on DOMNode currently being processed
                var node = JSProf.LGD(5911, root, 'firstChild').firstChild;
                // Info on parent of DOMNode currently being processed
                //	- inherited: dir, lang, and textDir setting of parent, or inherited by parent
                //	- parent: pointer to identical structure for my parent (or null if no parent)
                //	- scripts: if specified, collects <script type="dojo/..."> type nodes from children
                var inherited = JSProf.LGD(5912, options, 'inherited').inherited;
                if (!JSProf.LRE(5913, inherited)) {
                    function findAncestorAttr(node, attr) {
                        return JSProf.LGD(5914, node, 'getAttribute').getAttribute && JSProf.LMC(5916, node, 'getAttribute').getAttribute(JSProf.LRE(5915, attr)) || JSProf.LGD(5917, node, 'parentNode').parentNode && JSProf.LFC(5920, findAncestorAttr, false)(JSProf.LGD(5918, node, 'parentNode').parentNode, JSProf.LRE(5919, attr));
                    }
                    inherited = JSProf.LWR(5929, inherited, JSProf.LNE(5928, {
                        dir: JSProf.LFC(5922, findAncestorAttr, false)(JSProf.LRE(5921, root), "dir"),
                        lang: JSProf.LFC(5924, findAncestorAttr, false)(JSProf.LRE(5923, root), "lang"),
                        textDir: JSProf.LFC(5927, findAncestorAttr, false)(JSProf.LRE(5925, root), JSProf.LRE(5926, dataDojoTextDir))
                    }, 11));
                    for (var key in JSProf.LRE(5930, inherited)) {
                        if (!JSProf.LGE(5931, inherited, 'key')[key]) {
                            delete inherited[key];
                        }
                    }
                }
                // Metadata about parent node
                var parent = JSProf.LNE(5932, { inherited: inherited }, 11);
                // For collecting <script type="dojo/..."> type nodes (when null, we don't need to collect)
                var scripts;
                // when true, only look for <script type="dojo/..."> tags, and don't recurse to children
                var scriptsOnly;
                function getEffective(parent) {
                    // summary:
                    //		Get effective dir, lang, textDir settings for specified obj
                    //		(matching "parent" object structure above), and do caching.
                    //		Take care not to return null entries.
                    if (!JSProf.LGD(5933, parent, 'inherited').inherited) {
                        JSProf.LPD(5935, parent, 'inherited').inherited = JSProf.LRSP(5935, JSProf.LNE(5934, {}, 11));
                        var node = JSProf.LGD(5936, parent, 'node').node, grandparent = JSProf.LFC(5938, getEffective, false)(JSProf.LGD(5937, parent, 'parent').parent);
                        var inherited = JSProf.LNE(5943, {
                                dir: JSProf.LMC(5939, node, 'getAttribute').getAttribute("dir") || grandparent.dir,
                                lang: JSProf.LMC(5940, node, 'getAttribute').getAttribute("lang") || grandparent.lang,
                                textDir: JSProf.LMC(5942, node, 'getAttribute').getAttribute(JSProf.LRE(5941, dataDojoTextDir)) || grandparent.textDir
                            }, 11);
                        for (var key in JSProf.LRE(5944, inherited)) {
                            if (JSProf.LGE(5945, inherited, 'key')[key]) {
                                JSProf.LPE(5947, parent.inherited, 'key')[key] = JSProf.LRPE(5947, JSProf.LGE(5946, inherited, 'key')[key]);
                            }
                        }
                    }
                    return JSProf.LGD(5948, parent, 'inherited').inherited;
                }
                // DFS on DOM tree, collecting nodes with data-dojo-type specified.
                while (true) {
                    if (!JSProf.LRE(5949, node)) {
                        // Finished this level, continue to parent's next sibling
                        if (!JSProf.LRE(5950, parent) || !JSProf.LGD(5951, parent, 'node').node) {
                            break;
                        }
                        node = JSProf.LWR(5953, node, JSProf.LGD(5952, parent.node, 'nextSibling').nextSibling);
                        scriptsOnly = JSProf.LWR(5954, scriptsOnly, false);
                        parent = JSProf.LWR(5956, parent, JSProf.LGD(5955, parent, 'parent').parent);
                        scripts = JSProf.LWR(5958, scripts, JSProf.LGD(5957, parent, 'scripts').scripts);
                        continue;
                    }
                    if (JSProf.LGD(5959, node, 'nodeType').nodeType != 1) {
                        // Text or comment node, skip to next sibling
                        node = JSProf.LWR(5961, node, JSProf.LGD(5960, node, 'nextSibling').nextSibling);
                        continue;
                    }
                    if (JSProf.LRE(5962, scripts) && node.nodeName.toLowerCase() == "script") {
                        // Save <script type="dojo/..."> for parent, then continue to next sibling
                        type = JSProf.LWR(5964, type, JSProf.LMC(5963, node, 'getAttribute').getAttribute("type"));
                        if (JSProf.LRE(5965, type) && JSProf.LMC(5967, /^dojo\/\w/i, 'test').test(JSProf.LRE(5966, type))) {
                            JSProf.LMC(5969, scripts, 'push').push(JSProf.LRE(5968, node));
                        }
                        node = JSProf.LWR(5971, node, JSProf.LGD(5970, node, 'nextSibling').nextSibling);
                        continue;
                    }
                    if (JSProf.LRE(5972, scriptsOnly)) {
                        // scriptsOnly flag is set, we have already collected scripts if the parent wants them, so now we shouldn't
                        // continue further analysis of the node and will continue to the next sibling
                        node = JSProf.LWR(5974, node, JSProf.LGD(5973, node, 'nextSibling').nextSibling);
                        continue;
                    }
                    // Check for data-dojo-type attribute, fallback to backward compatible dojoType
                    // TODO: Remove dojoType in 2.0
                    var type = JSProf.LMC(5976, node, 'getAttribute').getAttribute(JSProf.LRE(5975, dataDojoType)) || JSProf.LMC(5978, node, 'getAttribute').getAttribute(JSProf.LRE(5977, dojoType));
                    // Short circuit for leaf nodes containing nothing [but text]
                    var firstChild = JSProf.LGD(5979, node, 'firstChild').firstChild;
                    if (!JSProf.LRE(5980, type) && (!JSProf.LRE(5981, firstChild) || JSProf.LGD(5982, firstChild, 'nodeType').nodeType == 3 && !JSProf.LGD(5983, firstChild, 'nextSibling').nextSibling)) {
                        node = JSProf.LWR(5985, node, JSProf.LGD(5984, node, 'nextSibling').nextSibling);
                        continue;
                    }
                    // Meta data about current node
                    var current;
                    var ctor = null;
                    if (JSProf.LRE(5986, type)) {
                        // If dojoType/data-dojo-type specified, add to output array of nodes to instantiate.
                        var mixinsValue = JSProf.LMC(5988, node, 'getAttribute').getAttribute(JSProf.LRE(5987, dataDojoMixins)), types = JSProf.LRE(5989, mixinsValue) ? JSProf.LNE(5991, [JSProf.LRE(5990, type)], 10).concat(mixinsValue.split(/\s*,\s*/)) : JSProf.LNE(5993, [JSProf.LRE(5992, type)], 10);
                        // Note: won't find classes declared via dojo/Declaration or any modules that haven't been
                        // loaded yet so use try/catch to avoid throw from require()
                        try {
                            ctor = JSProf.LWR(5997, ctor, JSProf.LFC(5996, getCtor, false)(JSProf.LRE(5994, types), JSProf.LGD(5995, options, 'contextRequire').contextRequire));
                        } catch (e) {
                        }
                        // If the constructor was not found, check to see if it has modules that can be loaded
                        if (!JSProf.LRE(5998, ctor)) {
                            JSProf.LMC(6006, darray, 'forEach').forEach(JSProf.LRE(5999, types), JSProf.LNF(6005, function (t) {
                                if (~JSProf.LMC(6000, t, 'indexOf').indexOf('/') && !JSProf.LGE(6001, midsHash, 't')[t]) {
                                    // If the type looks like a MID and it currently isn't in the array of MIDs to load, add it.
                                    JSProf.LPE(6002, midsHash, 't')[t] = JSProf.LRPE(6002, true);
                                    JSProf.LPE(6004, mids, JSProf.TMPS.tc9dfb6233890464069ca17324649cd28991a04b9 = mids.length)[JSProf.TMPS.tc9dfb6233890464069ca17324649cd28991a04b9] = JSProf.LRPE(6004, JSProf.LRE(6003, t));
                                }
                            }, 12));
                        }
                        var childScripts = JSProf.LRE(6007, ctor) && !JSProf.LGD(6008, ctor.prototype, '_noScript')._noScript ? JSProf.LNE(6009, [], 10) : null;
                        // <script> nodes that are parent's children
                        // Setup meta data about this widget node, and save it to list of nodes to instantiate
                        current = JSProf.LWR(6011, current, JSProf.LNE(6010, {
                            types: types,
                            ctor: ctor,
                            parent: parent,
                            node: node,
                            scripts: childScripts
                        }, 11));
                        JSProf.LPD(6014, current, 'inherited').inherited = JSProf.LRSP(6014, JSProf.LFC(6013, getEffective, false)(JSProf.LRE(6012, current)));
                        // dir & lang settings for current node, explicit or inherited
                        JSProf.LMC(6016, list, 'push').push(JSProf.LRE(6015, current));
                    } else {
                        // Meta data about this non-widget node
                        current = JSProf.LWR(6018, current, JSProf.LNE(6017, {
                            node: node,
                            scripts: scripts,
                            parent: parent
                        }, 11));
                    }
                    // Recurse, collecting <script type="dojo/..."> children, and also looking for
                    // descendant nodes with dojoType specified (unless the widget has the stopParser flag).
                    // When finished with children, go to my next sibling.
                    scripts = JSProf.LWR(6020, scripts, JSProf.LRE(6019, childScripts));
                    scriptsOnly = JSProf.LWR(6025, scriptsOnly, JSProf.LGD(6021, node, 'stopParser').stopParser || JSProf.LRE(6022, ctor) && JSProf.LGD(6023, ctor.prototype, 'stopParser').stopParser && !JSProf.LGD(6024, options, 'template').template);
                    parent = JSProf.LWR(6027, parent, JSProf.LRE(6026, current));
                    node = JSProf.LWR(6029, node, JSProf.LRE(6028, firstChild));
                }
                var d = JSProf.LNE(6031, new (JSProf.LFC(6030, Deferred, true))(), 'Deferred');
                // If there are modules to load then require them in
                if (JSProf.LGD(6032, mids, 'length').length) {
                    // Warn that there are modules being auto-required
                    if (JSProf.LFC(6033, has, false)("dojo-debug-messages")) {
                        JSProf.LMC(6035, console, 'warn').warn("WARNING: Modules being Auto-Required: " + JSProf.LMC(6034, mids, 'join').join(", "));
                    }
                    var r = JSProf.LGD(6036, options, 'contextRequire').contextRequire || JSProf.LRE(6037, require);
                    JSProf.LFC(6065, r, false)(JSProf.LRE(6038, mids), JSProf.LNF(6064, function () {
                        // Go through list of widget nodes, filling in missing constructors, and filtering out nodes that shouldn't
                        // be instantiated due to a stopParser flag on an ancestor that we belatedly learned about due to
                        // auto-require of a module like ContentPane.   Assumes list is in DFS order.
                        JSProf.LMC(6063, d, 'resolve').resolve(JSProf.LMC(6062, darray, 'filter').filter(JSProf.LRE(6039, list), JSProf.LNF(6061, function (widget) {
                            if (!JSProf.LGD(6040, widget, 'ctor').ctor) {
                                // Attempt to find the constructor again.   Still won't find classes defined via
                                // dijit/Declaration so need to try/catch.
                                try {
                                    JSProf.LPD(6044, widget, 'ctor').ctor = JSProf.LRSP(6044, JSProf.LFC(6043, getCtor, false)(JSProf.LGD(6041, widget, 'types').types, JSProf.LGD(6042, options, 'contextRequire').contextRequire));
                                } catch (e) {
                                }
                            }
                            // Get the parent widget
                            var parent = JSProf.LGD(6045, widget, 'parent').parent;
                            while (JSProf.LRE(6046, parent) && !JSProf.LGD(6047, parent, 'types').types) {
                                parent = JSProf.LWR(6049, parent, JSProf.LGD(6048, parent, 'parent').parent);
                            }
                            // Return false if this node should be skipped due to stopParser on an ancestor.
                            // Since list[] is in DFS order, this loop will always set parent.instantiateChildren before
                            // trying to compute widget.instantiate.
                            var proto = JSProf.LGD(6050, widget, 'ctor').ctor && JSProf.LGD(6051, widget.ctor, 'prototype').prototype;
                            JSProf.LPD(6055, widget, 'instantiateChildren').instantiateChildren = JSProf.LRSP(6055, !(JSProf.LRE(6052, proto) && JSProf.LGD(6053, proto, 'stopParser').stopParser && !JSProf.LGD(6054, options, 'template').template));
                            JSProf.LPD(6059, widget, 'instantiate').instantiate = JSProf.LRSP(6059, !JSProf.LRE(6056, parent) || JSProf.LGD(6057, parent, 'instantiate').instantiate && JSProf.LGD(6058, parent, 'instantiateChildren').instantiateChildren);
                            return JSProf.LGD(6060, widget, 'instantiate').instantiate;
                        }, 12)));
                    }, 12));
                } else {
                    // There were no modules to load, so just resolve with the parsed nodes.   This separate code path is for
                    // efficiency, to avoid running the require() and the callback code above.
                    JSProf.LMC(6067, d, 'resolve').resolve(JSProf.LRE(6066, list));
                }
                // Return the promise
                return JSProf.LGD(6068, d, 'promise').promise;
            }, 12),
            _require: JSProf.LNF(6096, function (script, options) {
                // summary:
                //		Helper for _scanAMD().  Takes a `<script type=dojo/require>bar: "acme/bar", ...</script>` node,
                //		calls require() to load the specified modules and (asynchronously) assign them to the specified global
                //		variables, and returns a Promise for when that operation completes.
                //
                //		In the example above, it is effectively doing a require(["acme/bar", ...], function(a){ bar = a; }).
                var hash = JSProf.LFC(6073, myEval, false)("{" + JSProf.LGD(6072, script, 'innerHTML').innerHTML + "}"),
                    // can't use dojo/json::parse() because maybe no quotes
                    vars = JSProf.LNE(6074, [], 10), mids = JSProf.LNE(6075, [], 10), d = JSProf.LNE(6077, new (JSProf.LFC(6076, Deferred, true))(), 'Deferred');
                var contextRequire = JSProf.LRE(6078, options) && JSProf.LGD(6079, options, 'contextRequire').contextRequire || JSProf.LRE(6080, require);
                for (var name in JSProf.LRE(6081, hash)) {
                    JSProf.LMC(6083, vars, 'push').push(JSProf.LRE(6082, name));
                    JSProf.LMC(6085, mids, 'push').push(JSProf.LGE(6084, hash, 'name')[name]);
                }
                JSProf.LFC(6094, contextRequire, false)(JSProf.LRE(6086, mids), JSProf.LNF(6093, function () {
                    for (var i = 0; JSProf.LRE(6087, i) < JSProf.LGD(6088, vars, 'length').length; i++) {
                        JSProf.LMC(6091, dlang, 'setObject').setObject(JSProf.LGE(6089, vars, 'i')[i], JSProf.LGE(6090, arguments, 'i')[i]);
                    }
                    JSProf.LMC(6092, d, 'resolve').resolve(arguments);
                }, 12));
                return JSProf.LGD(6095, d, 'promise').promise;
            }, 12),
            _scanAmd: JSProf.LNF(6114, function (root, options) {
                // summary:
                //		Scans the DOM for any declarative requires and returns their values.
                // description:
                //		Looks for `<script type=dojo/require>bar: "acme/bar", ...</script>` node, calls require() to load the
                //		specified modules and (asynchronously) assign them to the specified global variables,
                //		and returns a Promise for when those operations complete.
                // root: DomNode
                //		The node to base the scan from.
                // options: Object?
                //		a kwArgs options object, see parse() for details
                // Promise that resolves when all the <script type=dojo/require> nodes have finished loading.
                var deferred = JSProf.LNE(6098, new (JSProf.LFC(6097, Deferred, true))(), 'Deferred'), promise = JSProf.LGD(6099, deferred, 'promise').promise;
                JSProf.LMC(6100, deferred, 'resolve').resolve(true);
                var self = this;
                JSProf.LMC(6112, JSProf.LFC(6102, query, false)("script[type='dojo/require']", JSProf.LRE(6101, root)), 'forEach').forEach(JSProf.LNF(6111, function (node) {
                    // Fire off require() call for specified modules.  Chain this require to fire after
                    // any previous requires complete, so that layers can be loaded before individual module require()'s fire.
                    promise = JSProf.LWR(6108, promise, JSProf.LMC(6107, promise, 'then').then(JSProf.LNF(6106, function () {
                        return JSProf.LMC(6105, self, '_require')._require(JSProf.LRE(6103, node), JSProf.LRE(6104, options));
                    }, 12)));
                    // Remove from DOM so it isn't seen again
                    JSProf.LMC(6110, node.parentNode, 'removeChild').removeChild(JSProf.LRE(6109, node));
                }, 12));
                return JSProf.LRE(6113, promise);
            }, 12),
            parse: JSProf.LNF(6168, function (rootNode, options) {
                // summary:
                //		Scan the DOM for class instances, and instantiate them.
                // description:
                //		Search specified node (or root node) recursively for class instances,
                //		and instantiate them. Searches for either data-dojo-type="Class" or
                //		dojoType="Class" where "Class" is a a fully qualified class name,
                //		like `dijit/form/Button`
                //
                //		Using `data-dojo-type`:
                //		Attributes using can be mixed into the parameters used to instantiate the
                //		Class by using a `data-dojo-props` attribute on the node being converted.
                //		`data-dojo-props` should be a string attribute to be converted from JSON.
                //
                //		Using `dojoType`:
                //		Attributes are read from the original domNode and converted to appropriate
                //		types by looking up the Class prototype values. This is the default behavior
                //		from Dojo 1.0 to Dojo 1.5. `dojoType` support is deprecated, and will
                //		go away in Dojo 2.0.
                // rootNode: DomNode?
                //		A default starting root node from which to start the parsing. Can be
                //		omitted, defaulting to the entire document. If omitted, the `options`
                //		object can be passed in this place. If the `options` object has a
                //		`rootNode` member, that is used.
                // options: Object?
                //		A hash of options.
                //
                //		- noStart: Boolean?:
                //			when set will prevent the parser from calling .startup()
                //			when locating the nodes.
                //		- rootNode: DomNode?:
                //			identical to the function's `rootNode` argument, though
                //			allowed to be passed in via this `options object.
                //		- template: Boolean:
                //			If true, ignores ContentPane's stopParser flag and parses contents inside of
                //			a ContentPane inside of a template.   This allows dojoAttachPoint on widgets/nodes
                //			nested inside the ContentPane to work.
                //		- inherited: Object:
                //			Hash possibly containing dir and lang settings to be applied to
                //			parsed widgets, unless there's another setting on a sub-node that overrides
                //		- scope: String:
                //			Root for attribute names to search for.   If scopeName is dojo,
                //			will search for data-dojo-type (or dojoType).   For backwards compatibility
                //			reasons defaults to dojo._scopeName (which is "dojo" except when
                //			multi-version support is used, when it will be something like dojo16, dojo20, etc.)
                //		- propsThis: Object:
                //			If specified, "this" referenced from data-dojo-props will refer to propsThis.
                //			Intended for use from the widgets-in-template feature of `dijit._WidgetsInTemplateMixin`
                //		- contextRequire: Function:
                //			If specified, this require is utilised for looking resolving modules instead of the
                //			`dojo/parser` context `require()`.  Intended for use from the widgets-in-template feature of
                //			`dijit._WidgetsInTemplateMixin`.
                // returns: Mixed
                //		Returns a blended object that is an array of the instantiated objects, but also can include
                //		a promise that is resolved with the instantiated objects.  This is done for backwards
                //		compatibility.  If the parser auto-requires modules, it will always behave in a promise
                //		fashion and `parser.parse().then(function(instances){...})` should be used.
                // example:
                //		Parse all widgets on a page:
                //	|		parser.parse();
                // example:
                //		Parse all classes within the node with id="foo"
                //	|		parser.parse(dojo.byId('foo'));
                // example:
                //		Parse all classes in a page, but do not call .startup() on any
                //		child
                //	|		parser.parse({ noStart: true })
                // example:
                //		Parse all classes in a node, but do not call .startup()
                //	|		parser.parse(someNode, { noStart:true });
                //	|		// or
                //	|		parser.parse({ noStart:true, rootNode: someNode });
                // determine the root node and options based on the passed arguments.
                var root;
                if (!JSProf.LRE(6115, options) && JSProf.LRE(6116, rootNode) && JSProf.LGD(6117, rootNode, 'rootNode').rootNode) {
                    options = JSProf.LWR(6119, options, JSProf.LRE(6118, rootNode));
                    root = JSProf.LWR(6121, root, JSProf.LGD(6120, options, 'rootNode').rootNode);
                } else if (JSProf.LRE(6122, rootNode) && JSProf.LMC(6124, dlang, 'isObject').isObject(JSProf.LRE(6123, rootNode)) && !("nodeType" in JSProf.LRE(6125, rootNode))) {
                    options = JSProf.LWR(6127, options, JSProf.LRE(6126, rootNode));
                } else {
                    root = JSProf.LWR(6129, root, JSProf.LRE(6128, rootNode));
                }
                root = JSProf.LWR(6134, root, JSProf.LRE(6130, root) ? JSProf.LMC(6132, dom, 'byId').byId(JSProf.LRE(6131, root)) : JSProf.LMC(6133, dwindow, 'body').body());
                options = JSProf.LWR(6137, options, JSProf.LRE(6135, options) || JSProf.LNE(6136, {}, 11));
                var mixin = JSProf.LGD(6138, options, 'template').template ? JSProf.LNE(6139, { template: true }, 11) : JSProf.LNE(6140, {}, 11), instances = JSProf.LNE(6141, [], 10), self = this;
                // First scan for any <script type=dojo/require> nodes, and execute.
                // Then scan for all nodes with data-dojo-type, and load any unloaded modules.
                // Then build the object instances.  Add instances to already existing (but empty) instances[] array,
                // which may already have been returned to caller.  Also, use otherwise to collect and throw any errors
                // that occur during the parse().
                var p = JSProf.LMC(6163, JSProf.LMC(6159, JSProf.LMC(6155, JSProf.LMC(6149, JSProf.LMC(6144, this, '_scanAmd')._scanAmd(JSProf.LRE(6142, root), JSProf.LRE(6143, options)), 'then').then(JSProf.LNF(6148, function () {
                        return JSProf.LMC(6147, self, 'scan').scan(JSProf.LRE(6145, root), JSProf.LRE(6146, options));
                    }, 12)), 'then').then(JSProf.LNF(6154, function (parsedNodes) {
                        return JSProf.LMC(6153, self, '_instantiate')._instantiate(JSProf.LRE(6150, parsedNodes), JSProf.LRE(6151, mixin), JSProf.LRE(6152, options), true);
                    }, 12)), 'then').then(JSProf.LNF(6158, function (_instances) {
                        // Copy the instances into the instances[] array we declared above, and are accessing as
                        // our return value.
                        return instances = JSProf.LWR(6157, instances, instances.concat(JSProf.LRE(6156, _instances)));
                    }, 12)), 'otherwise').otherwise(JSProf.LNF(6162, function (e) {
                        // TODO Modify to follow better pattern for promise error management when available
                        JSProf.LMC(6161, console, 'error').error("dojo/parser::parse() error", JSProf.LRE(6160, e));
                        throw e;
                    }, 12));
                // Blend the array with the promise
                JSProf.LMC(6166, dlang, 'mixin').mixin(JSProf.LRE(6164, instances), JSProf.LRE(6165, p));
                return JSProf.LRE(6167, instances);
            }, 12)
        }, 11);
    if (JSProf.LFC(6170, has, false)("extend-dojo")) {
        JSProf.LPD(6172, dojo, 'parser').parser = JSProf.LRSP(6172, JSProf.LRE(6171, parser));
    }
    // Register the parser callback. It should be the first callback
    // after the a11y test.
    if (JSProf.LGD(6173, config, 'parseOnLoad').parseOnLoad) {
        JSProf.LFC(6175, ready, false)(100, JSProf.LRE(6174, parser), "parse");
    }
    return JSProf.LRE(6176, parser);
}, 12));