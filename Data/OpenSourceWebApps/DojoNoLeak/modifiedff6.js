JSProf.LFC(5940, define, false)(JSProf.LNE(5266, [
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
], 10), JSProf.LNF(5939, function (require, dojo, dlang, darray, config, dom, dwindow, _Url, aspect, all, dates, Deferred, has, query, don, ready) {
    JSProf.LFD(5936, myEval);
    JSProf.LFD(5937, getNameMap);
    JSProf.LFD(5938, getCtor);
    // module:
    //		dojo/parser
    JSProf.LNE(5268, new (JSProf.LFC(5267, Date, true))("X"), 'Date');
    // workaround for #11279, new Date("") == NaN
    // data-dojo-props etc. is not restricted to JSON, it can be any javascript
    function myEval(text) {
        return eval("(" + JSProf.LRE(5269, text) + ")");
    }
    // Widgets like BorderContainer add properties to _Widget via dojo.extend().
    // If BorderContainer is loaded after _Widget's parameter list has been cached,
    // we need to refresh that parameter list (for _Widget and all widgets that extend _Widget).
    var extendCnt = 0;
    JSProf.LMC(5272, aspect, 'after').after(JSProf.LRE(5270, dlang), "extend", JSProf.LNF(5271, function () {
        extendCnt++;
    }, 12), true);
    function getNameMap(ctor) {
        // summary:
        //		Returns map from lowercase name to attribute name in class, ex: {onclick: "onClick"}
        var map = JSProf.LGD(5273, ctor, '_nameCaseMap')._nameCaseMap, proto = JSProf.LGD(5274, ctor, 'prototype').prototype;
        // Create the map if it's undefined.
        // Refresh the map if a superclass was possibly extended with new methods since the map was created.
        if (!JSProf.LRE(5275, map) || JSProf.LGD(5276, map, '_extendCnt')._extendCnt < JSProf.LRE(5277, extendCnt)) {
            map = JSProf.LWR(5280, map, JSProf.LPD(5279, ctor, '_nameCaseMap')._nameCaseMap = JSProf.LRSP(5279, JSProf.LNE(5278, {}, 11)));
            for (var name in JSProf.LRE(5281, proto)) {
                if (name.charAt(0) === "_") {
                    continue;
                }
                // skip internal properties
                JSProf.LPE(5283, map, JSProf.TMPS.t2544a7c095cbdde4765cca3192459eff84b86138 = name.toLowerCase())[JSProf.TMPS.t2544a7c095cbdde4765cca3192459eff84b86138] = JSProf.LRPE(5283, JSProf.LRE(5282, name));
            }
            JSProf.LPD(5285, map, '_extendCnt')._extendCnt = JSProf.LRSP(5285, JSProf.LRE(5284, extendCnt));
        }
        return JSProf.LRE(5286, map);
    }
    // Map from widget name or list of widget names(ex: "dijit/form/Button,acme/MyMixin") to a constructor.
    var _ctorMap = JSProf.LNE(5287, {}, 11);
    function getCtor(types, contextRequire) {
        // summary:
        //		Retrieves a constructor.  If the types array contains more than one class/MID then the
        //		subsequent classes will be mixed into the first class and a unique constructor will be
        //		returned for that array.
        var ts = JSProf.LMC(5288, types, 'join').join();
        if (!JSProf.LGE(5289, _ctorMap, 'ts')[ts]) {
            var mixins = JSProf.LNE(5290, [], 10);
            for (var i = 0, l = JSProf.LGD(5291, types, 'length').length; JSProf.LRE(5292, i) < JSProf.LRE(5293, l); i++) {
                var t = JSProf.LGE(5294, types, 'i')[i];
                // TODO: Consider swapping getObject and require in the future
                JSProf.LPE(5305, mixins, JSProf.TMPS.t83a01a468835a01e58ce72622b3058603340747a = mixins.length)[JSProf.TMPS.t83a01a468835a01e58ce72622b3058603340747a] = JSProf.LRPE(5305, JSProf.LPE(5304, _ctorMap, 't')[t] = JSProf.LRPE(5304, JSProf.LGE(5295, _ctorMap, 't')[t] || (JSProf.LMC(5297, dlang, 'getObject').getObject(JSProf.LRE(5296, t)) || ~JSProf.LMC(5298, t, 'indexOf').indexOf('/') && (JSProf.LRE(5299, contextRequire) ? JSProf.LFC(5301, contextRequire, false)(JSProf.LRE(5300, t)) : JSProf.LFC(5303, require, false)(JSProf.LRE(5302, t))))));
            }
            var ctor = JSProf.LMC(5306, mixins, 'shift').shift();
            JSProf.LPE(5315, _ctorMap, 'ts')[ts] = JSProf.LRPE(5315, JSProf.LGD(5307, mixins, 'length').length ? JSProf.LGD(5308, ctor, 'createSubclass').createSubclass ? JSProf.LMC(5310, ctor, 'createSubclass').createSubclass(JSProf.LRE(5309, mixins)) : JSProf.LMC(5313, ctor.extend, 'apply').apply(JSProf.LRE(5311, ctor), JSProf.LRE(5312, mixins)) : JSProf.LRE(5314, ctor));
        }
        return JSProf.LGE(5316, _ctorMap, 'ts')[ts];
    }
    var parser = JSProf.LNE(5928, {
            _clearCache: JSProf.LNF(5319, function () {
                // summary:
                //		Clear cached data.   Used mainly for benchmarking.
                extendCnt++;
                _ctorMap = JSProf.LWR(5318, _ctorMap, JSProf.LNE(5317, {}, 11));
            }, 12),
            _functionFromScript: JSProf.LNF(5336, function (script, attrData) {
                // summary:
                //		Convert a `<script type="dojo/method" args="a, b, c"> ... </script>`
                //		into a function
                // script: DOMNode
                //		The `<script>` DOMNode
                // attrData: String
                //		For HTML5 compliance, searches for attrData + "args" (typically
                //		"data-dojo-args") instead of "args"
                var preamble = "", suffix = "", argsStr = JSProf.LMC(5321, script, 'getAttribute').getAttribute(JSProf.LRE(5320, attrData) + "args") || JSProf.LMC(5322, script, 'getAttribute').getAttribute("args"), withStr = JSProf.LMC(5323, script, 'getAttribute').getAttribute("with");
                // Convert any arguments supplied in script tag into an array to be passed to the
                var fnArgs = (JSProf.LRE(5324, argsStr) || "").split(/\s*,\s*/);
                if (JSProf.LRE(5325, withStr) && JSProf.LGD(5326, withStr, 'length').length) {
                    JSProf.LMC(5329, darray, 'forEach').forEach(withStr.split(/\s*,\s*/), JSProf.LNF(5328, function (part) {
                        preamble += "with(" + JSProf.LRE(5327, part) + "){";
                        suffix += "}";
                    }, 12));
                }
                return JSProf.LNE(5335, new (JSProf.LFC(5334, Function, true))(JSProf.LRE(5330, fnArgs), JSProf.LRE(5331, preamble) + JSProf.LGD(5332, script, 'innerHTML').innerHTML + JSProf.LRE(5333, suffix)), 'Function');
            }, 12),
            instantiate: JSProf.LNF(5374, function (nodes, mixin, options) {
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
                mixin = JSProf.LWR(5339, mixin, JSProf.LRE(5337, mixin) || JSProf.LNE(5338, {}, 11));
                options = JSProf.LWR(5342, options, JSProf.LRE(5340, options) || JSProf.LNE(5341, {}, 11));
                var dojoType = (JSProf.LGD(5343, options, 'scope').scope || JSProf.LGD(5344, dojo, '_scopeName')._scopeName) + "Type",
                    // typically "dojoType"
                    attrData = "data-" + (JSProf.LGD(5345, options, 'scope').scope || JSProf.LGD(5346, dojo, '_scopeName')._scopeName) + "-",
                    // typically "data-dojo-"
                    dataDojoType = JSProf.LRE(5347, attrData) + "type",
                    // typically "data-dojo-type"
                    dataDojoMixins = JSProf.LRE(5348, attrData) + "mixins";
                // typically "data-dojo-mixins"
                var list = JSProf.LNE(5349, [], 10);
                JSProf.LMC(5369, darray, 'forEach').forEach(JSProf.LRE(5350, nodes), JSProf.LNF(5368, function (node) {
                    var type = JSProf.LRE(5351, dojoType) in JSProf.LRE(5352, mixin) ? JSProf.LGE(5353, mixin, 'dojoType')[dojoType] : JSProf.LMC(5355, node, 'getAttribute').getAttribute(JSProf.LRE(5354, dataDojoType)) || JSProf.LMC(5357, node, 'getAttribute').getAttribute(JSProf.LRE(5356, dojoType));
                    if (JSProf.LRE(5358, type)) {
                        var mixinsValue = JSProf.LMC(5360, node, 'getAttribute').getAttribute(JSProf.LRE(5359, dataDojoMixins)), types = JSProf.LRE(5361, mixinsValue) ? JSProf.LNE(5363, [JSProf.LRE(5362, type)], 10).concat(mixinsValue.split(/\s*,\s*/)) : JSProf.LNE(5365, [JSProf.LRE(5364, type)], 10);
                        JSProf.LMC(5367, list, 'push').push(JSProf.LNE(5366, {
                            node: node,
                            types: types
                        }, 11));
                    }
                }, 12));
                // Instantiate the nodes and return the list of instances.
                return JSProf.LMC(5373, this, '_instantiate')._instantiate(JSProf.LRE(5370, list), JSProf.LRE(5371, mixin), JSProf.LRE(5372, options));
            }, 12),
            _instantiate: JSProf.LNF(5410, function (nodes, mixin, options, returnPromise) {
                JSProf.LFD(5409, onConstruct);
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
                var thelist = JSProf.LMC(5392, darray, 'map').map(JSProf.LRE(5375, nodes), JSProf.LNF(5391, function (obj) {
                        var ctor = JSProf.LGD(5376, obj, 'ctor').ctor || JSProf.LFC(5379, getCtor, false)(JSProf.LGD(5377, obj, 'types').types, JSProf.LGD(5378, options, 'contextRequire').contextRequire);
                        // If we still haven't resolved a ctor, it is fatal now
                        if (!JSProf.LRE(5380, ctor)) {
                            throw JSProf.LNE(5383, new (JSProf.LFC(5382, Error, true))("Unable to resolve constructor for: '" + JSProf.LMC(5381, obj.types, 'join').join() + "'"), 'Error');
                        }
                        return JSProf.LMC(5390, this, 'construct').construct(JSProf.LRE(5384, ctor), JSProf.LGD(5385, obj, 'node').node, JSProf.LRE(5386, mixin), JSProf.LRE(5387, options), JSProf.LGD(5388, obj, 'scripts').scripts, JSProf.LGD(5389, obj, 'inherited').inherited);
                    }, 12), this);
                // After all widget construction finishes, call startup on each top level instance if it makes sense (as for
                // widgets).  Parent widgets will recursively call startup on their (non-top level) children
                function onConstruct(thelist) {
                    if (!JSProf.LGD(5393, mixin, '_started')._started && !JSProf.LGD(5394, options, 'noStart').noStart) {
                        JSProf.LMC(5400, darray, 'forEach').forEach(JSProf.LRE(5395, thelist), JSProf.LNF(5399, function (instance) {
                            if (typeof JSProf.LGD(5396, instance, 'startup').startup === "function" && !JSProf.LGD(5397, instance, '_started')._started) {
                                JSProf.LMC(5398, instance, 'startup').startup();
                            }
                        }, 12));
                    }
                    return JSProf.LRE(5401, thelist);
                }
                if (JSProf.LRE(5402, returnPromise)) {
                    return JSProf.LMC(5406, JSProf.LFC(5404, all, false)(JSProf.LRE(5403, thelist)), 'then').then(JSProf.LRE(5405, onConstruct));
                } else {
                    // Back-compat path, remove for 2.0
                    return JSProf.LFC(5408, onConstruct, false)(JSProf.LRE(5407, thelist));
                }
            }, 12),
            construct: JSProf.LNF(5659, function (ctor, node, mixin, options, scripts, inherited) {
                JSProf.LFD(5658, onInstantiate);
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
                var proto = JSProf.LRE(5411, ctor) && JSProf.LGD(5412, ctor, 'prototype').prototype;
                options = JSProf.LWR(5415, options, JSProf.LRE(5413, options) || JSProf.LNE(5414, {}, 11));
                // Setup hash to hold parameter settings for this widget.	Start with the parameter
                // settings inherited from ancestors ("dir" and "lang").
                // Inherited setting may later be overridden by explicit settings on node itself.
                var params = JSProf.LNE(5416, {}, 11);
                if (JSProf.LGD(5417, options, 'defaults').defaults) {
                    // settings for the document itself (or whatever subtree is being parsed)
                    JSProf.LMC(5420, dlang, 'mixin').mixin(JSProf.LRE(5418, params), JSProf.LGD(5419, options, 'defaults').defaults);
                }
                if (JSProf.LRE(5421, inherited)) {
                    // settings from dir=rtl or lang=... on a node above this node
                    JSProf.LMC(5424, dlang, 'mixin').mixin(JSProf.LRE(5422, params), JSProf.LRE(5423, inherited));
                }
                // Get list of attributes explicitly listed in the markup
                var attributes;
                if (JSProf.LFC(5425, has, false)("dom-attributes-explicit")) {
                    // Standard path to get list of user specified attributes
                    attributes = JSProf.LWR(5427, attributes, JSProf.LGD(5426, node, 'attributes').attributes);
                } else if (JSProf.LFC(5428, has, false)("dom-attributes-specified-flag")) {
                    // Special processing needed for IE8, to skip a few faux values in attributes[]
                    attributes = JSProf.LWR(5433, attributes, JSProf.LMC(5432, darray, 'filter').filter(JSProf.LGD(5429, node, 'attributes').attributes, JSProf.LNF(5431, function (a) {
                        return JSProf.LGD(5430, a, 'specified').specified;
                    }, 12)));
                } else {
                    // Special path for IE6-7, avoid (sometimes >100) bogus entries in node.attributes
                    var clone = JSProf.LMC(5435, /^input$|^img$/i, 'test').test(JSProf.LGD(5434, node, 'nodeName').nodeName) ? JSProf.LRE(5436, node) : JSProf.LMC(5437, node, 'cloneNode').cloneNode(false), attrs = JSProf.LMC(5440, JSProf.LMC(5439, JSProf.LMC(5438, clone.outerHTML, 'replace').replace(/=[^\s"']+|="[^"]*"|='[^']*'/g, ""), 'replace').replace(/^\s*<[a-zA-Z0-9]*\s*/, ""), 'replace').replace(/\s*>.*$/, "");
                    attributes = JSProf.LWR(5451, attributes, JSProf.LMC(5450, darray, 'map').map(attrs.split(/\s+/), JSProf.LNF(5449, function (name) {
                        var lcName = name.toLowerCase();
                        return JSProf.LNE(5448, {
                            name: name,
                            value: JSProf.LGD(5441, node, 'nodeName').nodeName == "LI" && JSProf.LRE(5442, name) == "value" || JSProf.LRE(5443, lcName) == "enctype" ? JSProf.LMC(5445, node, 'getAttribute').getAttribute(JSProf.LRE(5444, lcName)) : JSProf.LMC(5447, node, 'getAttributeNode').getAttributeNode(JSProf.LRE(5446, lcName)).value
                        }, 11);
                    }, 12)));
                }
                // Hash to convert scoped attribute name (ex: data-dojo17-params) to something friendly (ex: data-dojo-params)
                // TODO: remove scope for 2.0
                var scope = JSProf.LGD(5452, options, 'scope').scope || JSProf.LGD(5453, dojo, '_scopeName')._scopeName, attrData = "data-" + JSProf.LRE(5454, scope) + "-",
                    // typically "data-dojo-"
                    hash = JSProf.LNE(5455, {}, 11);
                if (JSProf.LRE(5456, scope) !== "dojo") {
                    JSProf.LPE(5458, hash, JSProf.TMPS.t5a1e53623667920a5685e5f717f8c9ab22ad06a7 = JSProf.LRE(5457, attrData) + "props")[JSProf.TMPS.t5a1e53623667920a5685e5f717f8c9ab22ad06a7] = JSProf.LRPE(5458, "data-dojo-props");
                    JSProf.LPE(5460, hash, JSProf.TMPS.t5a1e53623667920a5685e5f717f8c9ab22ad06a7 = JSProf.LRE(5459, attrData) + "type")[JSProf.TMPS.t5a1e53623667920a5685e5f717f8c9ab22ad06a7] = JSProf.LRPE(5460, "data-dojo-type");
                    JSProf.LPE(5462, hash, JSProf.TMPS.t5a1e53623667920a5685e5f717f8c9ab22ad06a7 = JSProf.LRE(5461, attrData) + "mixins")[JSProf.TMPS.t5a1e53623667920a5685e5f717f8c9ab22ad06a7] = JSProf.LRPE(5462, "data-dojo-mixins");
                    JSProf.LPE(5464, hash, JSProf.TMPS.t5a1e53623667920a5685e5f717f8c9ab22ad06a7 = JSProf.LRE(5463, scope) + "type")[JSProf.TMPS.t5a1e53623667920a5685e5f717f8c9ab22ad06a7] = JSProf.LRPE(5464, "dojoType");
                    JSProf.LPE(5466, hash, JSProf.TMPS.t5a1e53623667920a5685e5f717f8c9ab22ad06a7 = JSProf.LRE(5465, attrData) + "id")[JSProf.TMPS.t5a1e53623667920a5685e5f717f8c9ab22ad06a7] = JSProf.LRPE(5466, "data-dojo-id");
                }
                // Read in attributes and process them, including data-dojo-props, data-dojo-type,
                // dojoAttachPoint, etc., as well as normal foo=bar attributes.
                var i = 0, item, funcAttrs = JSProf.LNE(5467, [], 10), jsname, extra;
                while (item = JSProf.LWR(5469, item, JSProf.LGE(5468, attributes, JSProf.TMPS.t4505abfa1e8bff703ee2111e646d1c0df1f3298d = i++)[JSProf.TMPS.t4505abfa1e8bff703ee2111e646d1c0df1f3298d])) {
                    var name = JSProf.LGD(5470, item, 'name').name, lcName = name.toLowerCase(), value = JSProf.LGD(5471, item, 'value').value;
                    switch (JSProf.LGE(5472, hash, 'lcName')[lcName] || JSProf.LRE(5473, lcName)) {
                    // Already processed, just ignore
                    case "data-dojo-type":
                    case "dojotype":
                    case "data-dojo-mixins":
                        break;
                    // Data-dojo-props.   Save for later to make sure it overrides direct foo=bar settings
                    case "data-dojo-props":
                        extra = JSProf.LWR(5475, extra, JSProf.LRE(5474, value));
                        break;
                    // data-dojo-id or jsId. TODO: drop jsId in 2.0
                    case "data-dojo-id":
                    case "jsid":
                        jsname = JSProf.LWR(5477, jsname, JSProf.LRE(5476, value));
                        break;
                    // For the benefit of _Templated
                    case "data-dojo-attach-point":
                    case "dojoattachpoint":
                        JSProf.LPD(5479, params, 'dojoAttachPoint').dojoAttachPoint = JSProf.LRSP(5479, JSProf.LRE(5478, value));
                        break;
                    case "data-dojo-attach-event":
                    case "dojoattachevent":
                        JSProf.LPD(5481, params, 'dojoAttachEvent').dojoAttachEvent = JSProf.LRSP(5481, JSProf.LRE(5480, value));
                        break;
                    // Special parameter handling needed for IE
                    case "class":
                        JSProf.LPE(5483, params, 'class')["class"] = JSProf.LRPE(5483, JSProf.LGD(5482, node, 'className').className);
                        break;
                    case "style":
                        JSProf.LPE(5486, params, 'style')["style"] = JSProf.LRPE(5486, JSProf.LGD(5484, node, 'style').style && JSProf.LGD(5485, node.style, 'cssText').cssText);
                        break;
                    default:
                        // Normal attribute, ex: value="123"
                        // Find attribute in widget corresponding to specified name.
                        // May involve case conversion, ex: onclick --> onClick
                        if (!(JSProf.LRE(5487, name) in JSProf.LRE(5488, proto))) {
                            var map = JSProf.LFC(5490, getNameMap, false)(JSProf.LRE(5489, ctor));
                            name = JSProf.LWR(5493, name, JSProf.LGE(5491, map, 'lcName')[lcName] || JSProf.LRE(5492, name));
                        }
                        // Set params[name] to value, doing type conversion
                        if (JSProf.LRE(5494, name) in JSProf.LRE(5495, proto)) {
                            switch (typeof JSProf.LGE(5496, proto, 'name')[name]) {
                            case "string":
                                JSProf.LPE(5498, params, 'name')[name] = JSProf.LRPE(5498, JSProf.LRE(5497, value));
                                break;
                            case "number":
                                JSProf.LPE(5502, params, 'name')[name] = JSProf.LRPE(5502, JSProf.LGD(5499, value, 'length').length ? JSProf.LFC(5501, Number, false)(JSProf.LRE(5500, value)) : NaN);
                                break;
                            case "boolean":
                                // for checked/disabled value might be "" or "checked".	 interpret as true.
                                JSProf.LPE(5503, params, 'name')[name] = JSProf.LRPE(5503, value.toLowerCase() != "false");
                                break;
                            case "function":
                                if (JSProf.LRE(5504, value) === "" || JSProf.LMC(5505, value, 'search').search(/[^\w\.]+/i) != -1) {
                                    // The user has specified some text for a function like "return x+5"
                                    JSProf.LPE(5509, params, 'name')[name] = JSProf.LRPE(5509, JSProf.LNE(5508, new (JSProf.LFC(5507, Function, true))(JSProf.LRE(5506, value)), 'Function'));
                                } else {
                                    // The user has specified the name of a global function like "myOnClick"
                                    // or a single word function "return"
                                    JSProf.LPE(5515, params, 'name')[name] = JSProf.LRPE(5515, JSProf.LMC(5511, dlang, 'getObject').getObject(JSProf.LRE(5510, value), false) || JSProf.LNE(5514, new (JSProf.LFC(5513, Function, true))(JSProf.LRE(5512, value)), 'Function'));
                                }
                                JSProf.LMC(5517, funcAttrs, 'push').push(JSProf.LRE(5516, name));
                                // prevent "double connect", see #15026
                                break;
                            default:
                                var pVal = JSProf.LGE(5518, proto, 'name')[name];
                                JSProf.LPE(5539, params, 'name')[name] = JSProf.LRPE(5539, JSProf.LRE(5519, pVal) && "length" in JSProf.LRE(5520, pVal) ? JSProf.LRE(5521, value) ? value.split(/\s*,\s*/) : JSProf.LNE(5522, [], 10) : JSProf.LRE(5523, pVal) instanceof JSProf.LRU(5524, typeof Date === 'undefined' ? undefined : Date) ? JSProf.LRE(5525, value) == "" ? JSProf.LNE(5527, new (JSProf.LFC(5526, Date, true))(""), 'Date') : JSProf.LRE(5528, value) == "now" ? JSProf.LNE(5530, new (JSProf.LFC(5529, Date, true))(), 'Date') : JSProf.LMC(5532, dates, 'fromISOString').fromISOString(JSProf.LRE(5531, value)) : JSProf.LRE(5533, pVal) instanceof JSProf.LRE(5534, _Url) ? JSProf.LGD(5535, dojo, 'baseUrl').baseUrl + JSProf.LRE(5536, value) : JSProf.LFC(5538, myEval, false)(JSProf.LRE(5537, value)));
                            }
                        } else {
                            JSProf.LPE(5541, params, 'name')[name] = JSProf.LRPE(5541, JSProf.LRE(5540, value));
                        }
                    }
                }
                // Remove function attributes from DOMNode to prevent "double connect" problem, see #15026.
                // Do this as a separate loop since attributes[] is often a live collection (depends on the browser though).
                for (var j = 0; JSProf.LRE(5542, j) < JSProf.LGD(5543, funcAttrs, 'length').length; j++) {
                    var lcfname = funcAttrs[j].toLowerCase();
                    JSProf.LMC(5545, node, 'removeAttribute').removeAttribute(JSProf.LRE(5544, lcfname));
                    node[lcfname] = null;
                }
                // Mix things found in data-dojo-props into the params, overriding any direct settings
                if (JSProf.LRE(5546, extra)) {
                    try {
                        extra = JSProf.LWR(5550, extra, JSProf.LMC(5549, myEval, 'call').call(JSProf.LGD(5547, options, 'propsThis').propsThis, "{" + JSProf.LRE(5548, extra) + "}"));
                        JSProf.LMC(5553, dlang, 'mixin').mixin(JSProf.LRE(5551, params), JSProf.LRE(5552, extra));
                    } catch (e) {
                        // give the user a pointer to their invalid parameters. FIXME: can we kill this in production?
                        throw JSProf.LNE(5556, new (JSProf.LFC(5555, Error, true))(e.toString() + " in data-dojo-props='" + JSProf.LRE(5554, extra) + "'"), 'Error');
                    }
                }
                // Any parameters specified in "mixin" override everything else.
                JSProf.LMC(5559, dlang, 'mixin').mixin(JSProf.LRE(5557, params), JSProf.LRE(5558, mixin));
                // Get <script> nodes associated with this widget, if they weren't specified explicitly
                if (!JSProf.LRE(5560, scripts)) {
                    scripts = JSProf.LWR(5567, scripts, JSProf.LRE(5561, ctor) && (JSProf.LGD(5562, ctor, '_noScript')._noScript || JSProf.LGD(5563, proto, '_noScript')._noScript) ? JSProf.LNE(5564, [], 10) : JSProf.LFC(5566, query, false)("> script[type^='dojo/']", JSProf.LRE(5565, node)));
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
                var aspects = JSProf.LNE(5568, [], 10),
                    // aspects to connect after instantiation
                    calls = JSProf.LNE(5569, [], 10),
                    // functions to call after instantiation
                    watches = JSProf.LNE(5570, [], 10),
                    // functions to watch after instantiation
                    ons = JSProf.LNE(5571, [], 10);
                // functions to on after instantiation
                if (JSProf.LRE(5572, scripts)) {
                    for (i = JSProf.LWR(5573, i, 0); JSProf.LRE(5574, i) < JSProf.LGD(5575, scripts, 'length').length; i++) {
                        var script = JSProf.LGE(5576, scripts, 'i')[i];
                        JSProf.LMC(5578, node, 'removeChild').removeChild(JSProf.LRE(5577, script));
                        // FIXME: drop event="" support in 2.0. use data-dojo-event="" instead
                        var event = JSProf.LMC(5580, script, 'getAttribute').getAttribute(JSProf.LRE(5579, attrData) + "event") || JSProf.LMC(5581, script, 'getAttribute').getAttribute("event"), prop = JSProf.LMC(5583, script, 'getAttribute').getAttribute(JSProf.LRE(5582, attrData) + "prop"), method = JSProf.LMC(5585, script, 'getAttribute').getAttribute(JSProf.LRE(5584, attrData) + "method"), advice = JSProf.LMC(5587, script, 'getAttribute').getAttribute(JSProf.LRE(5586, attrData) + "advice"), scriptType = JSProf.LMC(5588, script, 'getAttribute').getAttribute("type"), nf = JSProf.LMC(5591, this, '_functionFromScript')._functionFromScript(JSProf.LRE(5589, script), JSProf.LRE(5590, attrData));
                        if (JSProf.LRE(5592, event)) {
                            if (JSProf.LRE(5593, scriptType) == "dojo/connect") {
                                JSProf.LMC(5595, aspects, 'push').push(JSProf.LNE(5594, {
                                    method: event,
                                    func: nf
                                }, 11));
                            } else if (JSProf.LRE(5596, scriptType) == "dojo/on") {
                                JSProf.LMC(5598, ons, 'push').push(JSProf.LNE(5597, {
                                    event: event,
                                    func: nf
                                }, 11));
                            } else {
                                // <script type="dojo/method" data-dojo-event="foo">
                                // TODO for 2.0: use data-dojo-method="foo" instead (also affects dijit/Declaration)
                                JSProf.LPE(5600, params, 'event')[event] = JSProf.LRPE(5600, JSProf.LRE(5599, nf));
                            }
                        } else if (JSProf.LRE(5601, scriptType) == "dojo/aspect") {
                            JSProf.LMC(5603, aspects, 'push').push(JSProf.LNE(5602, {
                                method: method,
                                advice: advice,
                                func: nf
                            }, 11));
                        } else if (JSProf.LRE(5604, scriptType) == "dojo/watch") {
                            JSProf.LMC(5606, watches, 'push').push(JSProf.LNE(5605, {
                                prop: prop,
                                func: nf
                            }, 11));
                        } else {
                            JSProf.LMC(5608, calls, 'push').push(JSProf.LRE(5607, nf));
                        }
                    }
                }
                // create the instance
                var markupFactory = JSProf.LGD(5609, ctor, 'markupFactory').markupFactory || JSProf.LGD(5610, proto, 'markupFactory').markupFactory;
                var instance = JSProf.LRE(5611, markupFactory) ? JSProf.LFC(5615, markupFactory, false)(JSProf.LRE(5612, params), JSProf.LRE(5613, node), JSProf.LRE(5614, ctor)) : JSProf.LNE(5619, new (JSProf.LFC(5618, ctor, true))(JSProf.LRE(5616, params), JSProf.LRE(5617, node)), 'ctor');
                function onInstantiate(instance) {
                    // map it to the JS namespace if that makes sense
                    if (JSProf.LRE(5620, jsname)) {
                        JSProf.LMC(5623, dlang, 'setObject').setObject(JSProf.LRE(5621, jsname), JSProf.LRE(5622, instance));
                    }
                    // process connections and startup functions
                    for (i = JSProf.LWR(5624, i, 0); JSProf.LRE(5625, i) < JSProf.LGD(5626, aspects, 'length').length; i++) {
                        JSProf.LMC(5633, aspect, JSProf.TMPS.tfc616f1b1d6f9d6db629ed0380bda3d48b0239d4 = JSProf.LGD(5627, aspects[i], 'advice').advice || "after", 1)[JSProf.TMPS.tfc616f1b1d6f9d6db629ed0380bda3d48b0239d4](JSProf.LRE(5628, instance), JSProf.LGD(5629, aspects[i], 'method').method, JSProf.LMC(5632, dlang, 'hitch').hitch(JSProf.LRE(5630, instance), JSProf.LGD(5631, aspects[i], 'func').func), true);
                    }
                    for (i = JSProf.LWR(5634, i, 0); JSProf.LRE(5635, i) < JSProf.LGD(5636, calls, 'length').length; i++) {
                        JSProf.LMC(5638, calls[i], 'call').call(JSProf.LRE(5637, instance));
                    }
                    for (i = JSProf.LWR(5639, i, 0); JSProf.LRE(5640, i) < JSProf.LGD(5641, watches, 'length').length; i++) {
                        JSProf.LMC(5644, instance, 'watch').watch(JSProf.LGD(5642, watches[i], 'prop').prop, JSProf.LGD(5643, watches[i], 'func').func);
                    }
                    for (i = JSProf.LWR(5645, i, 0); JSProf.LRE(5646, i) < JSProf.LGD(5647, ons, 'length').length; i++) {
                        JSProf.LFC(5651, don, false)(JSProf.LRE(5648, instance), JSProf.LGD(5649, ons[i], 'event').event, JSProf.LGD(5650, ons[i], 'func').func);
                    }
                    return JSProf.LRE(5652, instance);
                }
                if (JSProf.LGD(5653, instance, 'then').then) {
                    return JSProf.LMC(5655, instance, 'then').then(JSProf.LRE(5654, onInstantiate));
                } else {
                    return JSProf.LFC(5657, onInstantiate, false)(JSProf.LRE(5656, instance));
                }
            }, 12),
            scan: JSProf.LNF(5830, function (root, options) {
                JSProf.LFD(5828, findAncestorAttr);
                JSProf.LFD(5829, getEffective);
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
                var list = JSProf.LNE(5660, [], 10),
                    // Output List
                    mids = JSProf.LNE(5661, [], 10),
                    // An array of modules that are not yet loaded
                    midsHash = JSProf.LNE(5662, {}, 11);
                // Used to keep the mids array unique
                var dojoType = (JSProf.LGD(5663, options, 'scope').scope || JSProf.LGD(5664, dojo, '_scopeName')._scopeName) + "Type",
                    // typically "dojoType"
                    attrData = "data-" + (JSProf.LGD(5665, options, 'scope').scope || JSProf.LGD(5666, dojo, '_scopeName')._scopeName) + "-",
                    // typically "data-dojo-"
                    dataDojoType = JSProf.LRE(5667, attrData) + "type",
                    // typically "data-dojo-type"
                    dataDojoTextDir = JSProf.LRE(5668, attrData) + "textdir",
                    // typically "data-dojo-textdir"
                    dataDojoMixins = JSProf.LRE(5669, attrData) + "mixins";
                // typically "data-dojo-mixins"
                // Info on DOMNode currently being processed
                var node = JSProf.LGD(5670, root, 'firstChild').firstChild;
                // Info on parent of DOMNode currently being processed
                //	- inherited: dir, lang, and textDir setting of parent, or inherited by parent
                //	- parent: pointer to identical structure for my parent (or null if no parent)
                //	- scripts: if specified, collects <script type="dojo/..."> type nodes from children
                var inherited = JSProf.LGD(5671, options, 'inherited').inherited;
                if (!JSProf.LRE(5672, inherited)) {
                    function findAncestorAttr(node, attr) {
                        return JSProf.LGD(5673, node, 'getAttribute').getAttribute && JSProf.LMC(5675, node, 'getAttribute').getAttribute(JSProf.LRE(5674, attr)) || JSProf.LGD(5676, node, 'parentNode').parentNode && JSProf.LFC(5679, findAncestorAttr, false)(JSProf.LGD(5677, node, 'parentNode').parentNode, JSProf.LRE(5678, attr));
                    }
                    inherited = JSProf.LWR(5688, inherited, JSProf.LNE(5687, {
                        dir: JSProf.LFC(5681, findAncestorAttr, false)(JSProf.LRE(5680, root), "dir"),
                        lang: JSProf.LFC(5683, findAncestorAttr, false)(JSProf.LRE(5682, root), "lang"),
                        textDir: JSProf.LFC(5686, findAncestorAttr, false)(JSProf.LRE(5684, root), JSProf.LRE(5685, dataDojoTextDir))
                    }, 11));
                    for (var key in JSProf.LRE(5689, inherited)) {
                        if (!JSProf.LGE(5690, inherited, 'key')[key]) {
                            delete inherited[key];
                        }
                    }
                }
                // Metadata about parent node
                var parent = JSProf.LNE(5691, { inherited: inherited }, 11);
                // For collecting <script type="dojo/..."> type nodes (when null, we don't need to collect)
                var scripts;
                // when true, only look for <script type="dojo/..."> tags, and don't recurse to children
                var scriptsOnly;
                function getEffective(parent) {
                    // summary:
                    //		Get effective dir, lang, textDir settings for specified obj
                    //		(matching "parent" object structure above), and do caching.
                    //		Take care not to return null entries.
                    if (!JSProf.LGD(5692, parent, 'inherited').inherited) {
                        JSProf.LPD(5694, parent, 'inherited').inherited = JSProf.LRSP(5694, JSProf.LNE(5693, {}, 11));
                        var node = JSProf.LGD(5695, parent, 'node').node, grandparent = JSProf.LFC(5697, getEffective, false)(JSProf.LGD(5696, parent, 'parent').parent);
                        var inherited = JSProf.LNE(5702, {
                                dir: JSProf.LMC(5698, node, 'getAttribute').getAttribute("dir") || grandparent.dir,
                                lang: JSProf.LMC(5699, node, 'getAttribute').getAttribute("lang") || grandparent.lang,
                                textDir: JSProf.LMC(5701, node, 'getAttribute').getAttribute(JSProf.LRE(5700, dataDojoTextDir)) || grandparent.textDir
                            }, 11);
                        for (var key in JSProf.LRE(5703, inherited)) {
                            if (JSProf.LGE(5704, inherited, 'key')[key]) {
                                JSProf.LPE(5706, parent.inherited, 'key')[key] = JSProf.LRPE(5706, JSProf.LGE(5705, inherited, 'key')[key]);
                            }
                        }
                    }
                    return JSProf.LGD(5707, parent, 'inherited').inherited;
                }
                // DFS on DOM tree, collecting nodes with data-dojo-type specified.
                while (true) {
                    if (!JSProf.LRE(5708, node)) {
                        // Finished this level, continue to parent's next sibling
                        if (!JSProf.LRE(5709, parent) || !JSProf.LGD(5710, parent, 'node').node) {
                            break;
                        }
                        node = JSProf.LWR(5712, node, JSProf.LGD(5711, parent.node, 'nextSibling').nextSibling);
                        scriptsOnly = JSProf.LWR(5713, scriptsOnly, false);
                        parent = JSProf.LWR(5715, parent, JSProf.LGD(5714, parent, 'parent').parent);
                        scripts = JSProf.LWR(5717, scripts, JSProf.LGD(5716, parent, 'scripts').scripts);
                        continue;
                    }
                    if (JSProf.LGD(5718, node, 'nodeType').nodeType != 1) {
                        // Text or comment node, skip to next sibling
                        node = JSProf.LWR(5720, node, JSProf.LGD(5719, node, 'nextSibling').nextSibling);
                        continue;
                    }
                    if (JSProf.LRE(5721, scripts) && node.nodeName.toLowerCase() == "script") {
                        // Save <script type="dojo/..."> for parent, then continue to next sibling
                        type = JSProf.LWR(5723, type, JSProf.LMC(5722, node, 'getAttribute').getAttribute("type"));
                        if (JSProf.LRE(5724, type) && JSProf.LMC(5726, /^dojo\/\w/i, 'test').test(JSProf.LRE(5725, type))) {
                            JSProf.LMC(5728, scripts, 'push').push(JSProf.LRE(5727, node));
                        }
                        node = JSProf.LWR(5730, node, JSProf.LGD(5729, node, 'nextSibling').nextSibling);
                        continue;
                    }
                    if (JSProf.LRE(5731, scriptsOnly)) {
                        // scriptsOnly flag is set, we have already collected scripts if the parent wants them, so now we shouldn't
                        // continue further analysis of the node and will continue to the next sibling
                        node = JSProf.LWR(5733, node, JSProf.LGD(5732, node, 'nextSibling').nextSibling);
                        continue;
                    }
                    // Check for data-dojo-type attribute, fallback to backward compatible dojoType
                    // TODO: Remove dojoType in 2.0
                    var type = JSProf.LMC(5735, node, 'getAttribute').getAttribute(JSProf.LRE(5734, dataDojoType)) || JSProf.LMC(5737, node, 'getAttribute').getAttribute(JSProf.LRE(5736, dojoType));
                    // Short circuit for leaf nodes containing nothing [but text]
                    var firstChild = JSProf.LGD(5738, node, 'firstChild').firstChild;
                    if (!JSProf.LRE(5739, type) && (!JSProf.LRE(5740, firstChild) || JSProf.LGD(5741, firstChild, 'nodeType').nodeType == 3 && !JSProf.LGD(5742, firstChild, 'nextSibling').nextSibling)) {
                        node = JSProf.LWR(5744, node, JSProf.LGD(5743, node, 'nextSibling').nextSibling);
                        continue;
                    }
                    // Meta data about current node
                    var current;
                    var ctor = null;
                    if (JSProf.LRE(5745, type)) {
                        // If dojoType/data-dojo-type specified, add to output array of nodes to instantiate.
                        var mixinsValue = JSProf.LMC(5747, node, 'getAttribute').getAttribute(JSProf.LRE(5746, dataDojoMixins)), types = JSProf.LRE(5748, mixinsValue) ? JSProf.LNE(5750, [JSProf.LRE(5749, type)], 10).concat(mixinsValue.split(/\s*,\s*/)) : JSProf.LNE(5752, [JSProf.LRE(5751, type)], 10);
                        // Note: won't find classes declared via dojo/Declaration or any modules that haven't been
                        // loaded yet so use try/catch to avoid throw from require()
                        try {
                            ctor = JSProf.LWR(5756, ctor, JSProf.LFC(5755, getCtor, false)(JSProf.LRE(5753, types), JSProf.LGD(5754, options, 'contextRequire').contextRequire));
                        } catch (e) {
                        }
                        // If the constructor was not found, check to see if it has modules that can be loaded
                        if (!JSProf.LRE(5757, ctor)) {
                            JSProf.LMC(5765, darray, 'forEach').forEach(JSProf.LRE(5758, types), JSProf.LNF(5764, function (t) {
                                if (~JSProf.LMC(5759, t, 'indexOf').indexOf('/') && !JSProf.LGE(5760, midsHash, 't')[t]) {
                                    // If the type looks like a MID and it currently isn't in the array of MIDs to load, add it.
                                    JSProf.LPE(5761, midsHash, 't')[t] = JSProf.LRPE(5761, true);
                                    JSProf.LPE(5763, mids, JSProf.TMPS.tc9dfb6233890464069ca17324649cd28991a04b9 = mids.length)[JSProf.TMPS.tc9dfb6233890464069ca17324649cd28991a04b9] = JSProf.LRPE(5763, JSProf.LRE(5762, t));
                                }
                            }, 12));
                        }
                        var childScripts = JSProf.LRE(5766, ctor) && !JSProf.LGD(5767, ctor.prototype, '_noScript')._noScript ? JSProf.LNE(5768, [], 10) : null;
                        // <script> nodes that are parent's children
                        // Setup meta data about this widget node, and save it to list of nodes to instantiate
                        current = JSProf.LWR(5770, current, JSProf.LNE(5769, {
                            types: types,
                            ctor: ctor,
                            parent: parent,
                            node: node,
                            scripts: childScripts
                        }, 11));
                        JSProf.LPD(5773, current, 'inherited').inherited = JSProf.LRSP(5773, JSProf.LFC(5772, getEffective, false)(JSProf.LRE(5771, current)));
                        // dir & lang settings for current node, explicit or inherited
                        JSProf.LMC(5775, list, 'push').push(JSProf.LRE(5774, current));
                    } else {
                        // Meta data about this non-widget node
                        current = JSProf.LWR(5777, current, JSProf.LNE(5776, {
                            node: node,
                            scripts: scripts,
                            parent: parent
                        }, 11));
                    }
                    // Recurse, collecting <script type="dojo/..."> children, and also looking for
                    // descendant nodes with dojoType specified (unless the widget has the stopParser flag).
                    // When finished with children, go to my next sibling.
                    scripts = JSProf.LWR(5779, scripts, JSProf.LRE(5778, childScripts));
                    scriptsOnly = JSProf.LWR(5784, scriptsOnly, JSProf.LGD(5780, node, 'stopParser').stopParser || JSProf.LRE(5781, ctor) && JSProf.LGD(5782, ctor.prototype, 'stopParser').stopParser && !JSProf.LGD(5783, options, 'template').template);
                    parent = JSProf.LWR(5786, parent, JSProf.LRE(5785, current));
                    node = JSProf.LWR(5788, node, JSProf.LRE(5787, firstChild));
                }
                var d = JSProf.LNE(5790, new (JSProf.LFC(5789, Deferred, true))(), 'Deferred');
                // If there are modules to load then require them in
                if (JSProf.LGD(5791, mids, 'length').length) {
                    // Warn that there are modules being auto-required
                    if (JSProf.LFC(5792, has, false)("dojo-debug-messages")) {
                        JSProf.LMC(5794, console, 'warn').warn("WARNING: Modules being Auto-Required: " + JSProf.LMC(5793, mids, 'join').join(", "));
                    }
                    var r = JSProf.LGD(5795, options, 'contextRequire').contextRequire || JSProf.LRE(5796, require);
                    JSProf.LFC(5824, r, false)(JSProf.LRE(5797, mids), JSProf.LNF(5823, function () {
                        // Go through list of widget nodes, filling in missing constructors, and filtering out nodes that shouldn't
                        // be instantiated due to a stopParser flag on an ancestor that we belatedly learned about due to
                        // auto-require of a module like ContentPane.   Assumes list is in DFS order.
                        JSProf.LMC(5822, d, 'resolve').resolve(JSProf.LMC(5821, darray, 'filter').filter(JSProf.LRE(5798, list), JSProf.LNF(5820, function (widget) {
                            if (!JSProf.LGD(5799, widget, 'ctor').ctor) {
                                // Attempt to find the constructor again.   Still won't find classes defined via
                                // dijit/Declaration so need to try/catch.
                                try {
                                    JSProf.LPD(5803, widget, 'ctor').ctor = JSProf.LRSP(5803, JSProf.LFC(5802, getCtor, false)(JSProf.LGD(5800, widget, 'types').types, JSProf.LGD(5801, options, 'contextRequire').contextRequire));
                                } catch (e) {
                                }
                            }
                            // Get the parent widget
                            var parent = JSProf.LGD(5804, widget, 'parent').parent;
                            while (JSProf.LRE(5805, parent) && !JSProf.LGD(5806, parent, 'types').types) {
                                parent = JSProf.LWR(5808, parent, JSProf.LGD(5807, parent, 'parent').parent);
                            }
                            // Return false if this node should be skipped due to stopParser on an ancestor.
                            // Since list[] is in DFS order, this loop will always set parent.instantiateChildren before
                            // trying to compute widget.instantiate.
                            var proto = JSProf.LGD(5809, widget, 'ctor').ctor && JSProf.LGD(5810, widget.ctor, 'prototype').prototype;
                            JSProf.LPD(5814, widget, 'instantiateChildren').instantiateChildren = JSProf.LRSP(5814, !(JSProf.LRE(5811, proto) && JSProf.LGD(5812, proto, 'stopParser').stopParser && !JSProf.LGD(5813, options, 'template').template));
                            JSProf.LPD(5818, widget, 'instantiate').instantiate = JSProf.LRSP(5818, !JSProf.LRE(5815, parent) || JSProf.LGD(5816, parent, 'instantiate').instantiate && JSProf.LGD(5817, parent, 'instantiateChildren').instantiateChildren);
                            return JSProf.LGD(5819, widget, 'instantiate').instantiate;
                        }, 12)));
                    }, 12));
                } else {
                    // There were no modules to load, so just resolve with the parsed nodes.   This separate code path is for
                    // efficiency, to avoid running the require() and the callback code above.
                    JSProf.LMC(5826, d, 'resolve').resolve(JSProf.LRE(5825, list));
                }
                // Return the promise
                return JSProf.LGD(5827, d, 'promise').promise;
            }, 12),
            _require: JSProf.LNF(5855, function (script, options) {
                // summary:
                //		Helper for _scanAMD().  Takes a `<script type=dojo/require>bar: "acme/bar", ...</script>` node,
                //		calls require() to load the specified modules and (asynchronously) assign them to the specified global
                //		variables, and returns a Promise for when that operation completes.
                //
                //		In the example above, it is effectively doing a require(["acme/bar", ...], function(a){ bar = a; }).
                var hash = JSProf.LFC(5832, myEval, false)("{" + JSProf.LGD(5831, script, 'innerHTML').innerHTML + "}"),
                    // can't use dojo/json::parse() because maybe no quotes
                    vars = JSProf.LNE(5833, [], 10), mids = JSProf.LNE(5834, [], 10), d = JSProf.LNE(5836, new (JSProf.LFC(5835, Deferred, true))(), 'Deferred');
                var contextRequire = JSProf.LRE(5837, options) && JSProf.LGD(5838, options, 'contextRequire').contextRequire || JSProf.LRE(5839, require);
                for (var name in JSProf.LRE(5840, hash)) {
                    JSProf.LMC(5842, vars, 'push').push(JSProf.LRE(5841, name));
                    JSProf.LMC(5844, mids, 'push').push(JSProf.LGE(5843, hash, 'name')[name]);
                }
                JSProf.LFC(5853, contextRequire, false)(JSProf.LRE(5845, mids), JSProf.LNF(5852, function () {
                    for (var i = 0; JSProf.LRE(5846, i) < JSProf.LGD(5847, vars, 'length').length; i++) {
                        JSProf.LMC(5850, dlang, 'setObject').setObject(JSProf.LGE(5848, vars, 'i')[i], JSProf.LGE(5849, arguments, 'i')[i]);
                    }
                    JSProf.LMC(5851, d, 'resolve').resolve(arguments);
                }, 12));
                return JSProf.LGD(5854, d, 'promise').promise;
            }, 12),
            _scanAmd: JSProf.LNF(5873, function (root, options) {
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
                var deferred = JSProf.LNE(5857, new (JSProf.LFC(5856, Deferred, true))(), 'Deferred'), promise = JSProf.LGD(5858, deferred, 'promise').promise;
                JSProf.LMC(5859, deferred, 'resolve').resolve(true);
                var self = this;
                JSProf.LMC(5871, JSProf.LFC(5861, query, false)("script[type='dojo/require']", JSProf.LRE(5860, root)), 'forEach').forEach(JSProf.LNF(5870, function (node) {
                    // Fire off require() call for specified modules.  Chain this require to fire after
                    // any previous requires complete, so that layers can be loaded before individual module require()'s fire.
                    promise = JSProf.LWR(5867, promise, JSProf.LMC(5866, promise, 'then').then(JSProf.LNF(5865, function () {
                        return JSProf.LMC(5864, self, '_require')._require(JSProf.LRE(5862, node), JSProf.LRE(5863, options));
                    }, 12)));
                    // Remove from DOM so it isn't seen again
                    JSProf.LMC(5869, node.parentNode, 'removeChild').removeChild(JSProf.LRE(5868, node));
                }, 12));
                return JSProf.LRE(5872, promise);
            }, 12),
            parse: JSProf.LNF(5927, function (rootNode, options) {
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
                if (!JSProf.LRE(5874, options) && JSProf.LRE(5875, rootNode) && JSProf.LGD(5876, rootNode, 'rootNode').rootNode) {
                    options = JSProf.LWR(5878, options, JSProf.LRE(5877, rootNode));
                    root = JSProf.LWR(5880, root, JSProf.LGD(5879, options, 'rootNode').rootNode);
                } else if (JSProf.LRE(5881, rootNode) && JSProf.LMC(5883, dlang, 'isObject').isObject(JSProf.LRE(5882, rootNode)) && !("nodeType" in JSProf.LRE(5884, rootNode))) {
                    options = JSProf.LWR(5886, options, JSProf.LRE(5885, rootNode));
                } else {
                    root = JSProf.LWR(5888, root, JSProf.LRE(5887, rootNode));
                }
                root = JSProf.LWR(5893, root, JSProf.LRE(5889, root) ? JSProf.LMC(5891, dom, 'byId').byId(JSProf.LRE(5890, root)) : JSProf.LMC(5892, dwindow, 'body').body());
                options = JSProf.LWR(5896, options, JSProf.LRE(5894, options) || JSProf.LNE(5895, {}, 11));
                var mixin = JSProf.LGD(5897, options, 'template').template ? JSProf.LNE(5898, { template: true }, 11) : JSProf.LNE(5899, {}, 11), instances = JSProf.LNE(5900, [], 10), self = this;
                // First scan for any <script type=dojo/require> nodes, and execute.
                // Then scan for all nodes with data-dojo-type, and load any unloaded modules.
                // Then build the object instances.  Add instances to already existing (but empty) instances[] array,
                // which may already have been returned to caller.  Also, use otherwise to collect and throw any errors
                // that occur during the parse().
                var p = JSProf.LMC(5922, JSProf.LMC(5918, JSProf.LMC(5914, JSProf.LMC(5908, JSProf.LMC(5903, this, '_scanAmd')._scanAmd(JSProf.LRE(5901, root), JSProf.LRE(5902, options)), 'then').then(JSProf.LNF(5907, function () {
                        return JSProf.LMC(5906, self, 'scan').scan(JSProf.LRE(5904, root), JSProf.LRE(5905, options));
                    }, 12)), 'then').then(JSProf.LNF(5913, function (parsedNodes) {
                        return JSProf.LMC(5912, self, '_instantiate')._instantiate(JSProf.LRE(5909, parsedNodes), JSProf.LRE(5910, mixin), JSProf.LRE(5911, options), true);
                    }, 12)), 'then').then(JSProf.LNF(5917, function (_instances) {
                        // Copy the instances into the instances[] array we declared above, and are accessing as
                        // our return value.
                        return instances = JSProf.LWR(5916, instances, instances.concat(JSProf.LRE(5915, _instances)));
                    }, 12)), 'otherwise').otherwise(JSProf.LNF(5921, function (e) {
                        // TODO Modify to follow better pattern for promise error management when available
                        JSProf.LMC(5920, console, 'error').error("dojo/parser::parse() error", JSProf.LRE(5919, e));
                        throw e;
                    }, 12));
                // Blend the array with the promise
                JSProf.LMC(5925, dlang, 'mixin').mixin(JSProf.LRE(5923, instances), JSProf.LRE(5924, p));
                return JSProf.LRE(5926, instances);
            }, 12)
        }, 11);
    if (JSProf.LFC(5929, has, false)("extend-dojo")) {
        JSProf.LPD(5931, dojo, 'parser').parser = JSProf.LRSP(5931, JSProf.LRE(5930, parser));
    }
    // Register the parser callback. It should be the first callback
    // after the a11y test.
    if (JSProf.LGD(5932, config, 'parseOnLoad').parseOnLoad) {
        JSProf.LFC(5934, ready, false)(100, JSProf.LRE(5933, parser), "parse");
    }
    return JSProf.LRE(5935, parser);
}, 12));