JSProf.LFC(17535, define, false)(JSProf.LNE(17427, [
    "dojo/cache",
    "dojo/_base/declare",
    "dojo/dom-construct",
    "dojo/_base/lang",
    "dojo/on",
    "dojo/sniff",
    "dojo/string",
    "./_AttachMixin"
], 10), JSProf.LNF(17534, function (cache, declare, domConstruct, lang, on, has, string, _AttachMixin) {
    // module:
    //		dijit/_TemplatedMixin
    var _TemplatedMixin = JSProf.LFC(17491, declare, false)("dijit._TemplatedMixin", JSProf.LRE(17428, _AttachMixin), JSProf.LNE(17490, {
            templateString: null,
            templatePath: null,
            _skipNodeCache: false,
            searchContainerNode: true,
            _stringRepl: JSProf.LNF(17446, function (tmpl) {
                // summary:
                //		Does substitution of ${foo} type properties in template string
                // tags:
                //		private
                var className = JSProf.LGD(17429, this, 'declaredClass').declaredClass, _this = this;
                // Cache contains a string because we need to do property replacement
                // do the property replacement
                return JSProf.LMC(17445, string, 'substitute').substitute(JSProf.LRE(17430, tmpl), this, JSProf.LNF(17444, function (value, key) {
                    if (key.charAt(0) == '!') {
                        value = JSProf.LWR(17434, value, JSProf.LMC(17433, lang, 'getObject').getObject(JSProf.LMC(17431, key, 'substr').substr(1), false, JSProf.LRE(17432, _this)));
                    }
                    if (typeof JSProf.LRE(17435, value) == "undefined") {
                        throw JSProf.LNE(17439, new (JSProf.LFC(17438, Error, true))(JSProf.LRE(17436, className) + " template:" + JSProf.LRE(17437, key)), 'Error');
                    }
                    // a debugging aide
                    if (JSProf.LRE(17440, value) == null) {
                        return "";
                    }
                    // Substitution keys beginning with ! will skip the transform step,
                    // in case a user wishes to insert unescaped markup, e.g. ${!foo}
                    return key.charAt(0) == "!" ? JSProf.LRE(17441, value) : JSProf.LMC(17443, this, '_escapeValue')._escapeValue("" + JSProf.LRE(17442, value));
                }, 12), this);
            }, 12),
            _escapeValue: JSProf.LNF(17451, function (val) {
                // summary:
                //		Escape a value to be inserted into the template, either into an attribute value
                //		(ex: foo="${bar}") or as inner text of an element (ex: <span>${foo}</span>)
                // Safer substitution, see heading "Attribute values" in
                // http://www.w3.org/TR/REC-html40/appendix/notes.html#h-B.3.2
                // and also https://www.owasp.org/index.php/XSS_%28Cross_Site_Scripting%29_Prevention_Cheat_Sheet#RULE_.231_-_HTML_Escape_Before_Inserting_Untrusted_Data_into_HTML_Element_Content
                return JSProf.LMC(17450, val, 'replace').replace(/["'<>&]/g, JSProf.LNF(17449, function (val) {
                    return JSProf.LGE(17448, JSProf.LNE(17447, {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        "\"": "&quot;",
                        "'": "&#x27;"
                    }, 11), 'val')[val];
                }, 12));
            }, 12),
            buildRendering: JSProf.LNF(17482, function () {
                // summary:
                //		Construct the UI for this widget from a template, setting this.domNode.
                // tags:
                //		protected
                if (!JSProf.LGD(17452, this, '_rendered')._rendered) {
                    if (!JSProf.LGD(17453, this, 'templateString').templateString) {
                        JSProf.LPD(17457, this, 'templateString').templateString = JSProf.LRSP(17457, JSProf.LFC(17456, cache, false)(JSProf.LGD(17454, this, 'templatePath').templatePath, JSProf.LNE(17455, { sanitize: true }, 11)));
                    }
                    // Lookup cached version of template, and download to cache if it
                    // isn't there already.  Returns either a DomNode or a string, depending on
                    // whether or not the template contains ${foo} replacement parameters.
                    var cached = JSProf.LMC(17461, _TemplatedMixin, 'getCachedTemplate').getCachedTemplate(JSProf.LGD(17458, this, 'templateString').templateString, JSProf.LGD(17459, this, '_skipNodeCache')._skipNodeCache, JSProf.LGD(17460, this, 'ownerDocument').ownerDocument);
                    var node;
                    if (JSProf.LMC(17463, lang, 'isString').isString(JSProf.LRE(17462, cached))) {
                        node = JSProf.LWR(17468, node, JSProf.LMC(17467, domConstruct, 'toDom').toDom(JSProf.LMC(17465, this, '_stringRepl')._stringRepl(JSProf.LRE(17464, cached)), JSProf.LGD(17466, this, 'ownerDocument').ownerDocument));
                        if (JSProf.LGD(17469, node, 'nodeType').nodeType != 1) {
                            // Flag common problems such as templates with multiple top level nodes (nodeType == 11)
                            throw JSProf.LNE(17472, new (JSProf.LFC(17471, Error, true))("Invalid template: " + JSProf.LRE(17470, cached)), 'Error');
                        }
                    } else {
                        // if it's a node, all we have to do is clone it
                        node = JSProf.LWR(17474, node, JSProf.LMC(17473, cached, 'cloneNode').cloneNode(true));
                    }
                    JSProf.LPD(17476, this, 'domNode').domNode = JSProf.LRSP(17476, JSProf.LRE(17475, node));
                }
                // Call down to _WidgetBase.buildRendering() to get base classes assigned
                // TODO: change the baseClass assignment to _setBaseClassAttr
                JSProf.LMC(17477, this, 'inherited').inherited(arguments);
                if (!JSProf.LGD(17478, this, '_rendered')._rendered) {
                    JSProf.LMC(17480, this, '_fillContent')._fillContent(JSProf.LGD(17479, this, 'srcNodeRef').srcNodeRef);
                }
                JSProf.LPD(17481, this, '_rendered')._rendered = JSProf.LRSP(17481, true);
            }, 12),
            _fillContent: JSProf.LNF(17489, function (source) {
                // summary:
                //		Relocate source contents to templated container node.
                //		this.containerNode must be able to receive children, or exceptions will be thrown.
                // tags:
                //		protected
                var dest = JSProf.LGD(17483, this, 'containerNode').containerNode;
                if (JSProf.LRE(17484, source) && JSProf.LRE(17485, dest)) {
                    while (JSProf.LMC(17486, source, 'hasChildNodes').hasChildNodes()) {
                        JSProf.LMC(17488, dest, 'appendChild').appendChild(JSProf.LGD(17487, source, 'firstChild').firstChild);
                    }
                }
            }, 12)
        }, 11));
    // key is templateString; object is either string or DOM tree
    JSProf.LPD(17493, _TemplatedMixin, '_templateCache')._templateCache = JSProf.LRSP(17493, JSProf.LNE(17492, {}, 11));
    JSProf.LPD(17522, _TemplatedMixin, 'getCachedTemplate').getCachedTemplate = JSProf.LRSP(17522, JSProf.LNF(17521, function (templateString, alwaysUseString, doc) {
        // summary:
        //		Static method to get a template based on the templatePath or
        //		templateString key
        // templateString: String
        //		The template
        // alwaysUseString: Boolean
        //		Don't cache the DOM tree for this template, even if it doesn't have any variables
        // doc: Document?
        //		The target document.   Defaults to document global if unspecified.
        // returns: Mixed
        //		Either string (if there are ${} variables that need to be replaced) or just
        //		a DOM tree (if the node can be cloned directly)
        // is it already cached?
        var tmplts = JSProf.LGD(17494, _TemplatedMixin, '_templateCache')._templateCache;
        var key = JSProf.LRE(17495, templateString);
        var cached = JSProf.LGE(17496, tmplts, 'key')[key];
        if (JSProf.LRE(17497, cached)) {
            try {
                // if the cached value is an innerHTML string (no ownerDocument) or a DOM tree created within the
                // current document, then use the current cached value
                if (!JSProf.LGD(17498, cached, 'ownerDocument').ownerDocument || JSProf.LGD(17499, cached, 'ownerDocument').ownerDocument == (JSProf.LRE(17500, doc) || JSProf.LRU(17501, typeof document === 'undefined' ? undefined : document))) {
                    // string or node of the same document
                    return JSProf.LRE(17502, cached);
                }
            } catch (e) {
            }
            // IE can throw an exception if cached.ownerDocument was reloaded
            JSProf.LMC(17504, domConstruct, 'destroy').destroy(JSProf.LRE(17503, cached));
        }
        templateString = JSProf.LWR(17507, templateString, JSProf.LMC(17506, string, 'trim').trim(JSProf.LRE(17505, templateString)));
        if (JSProf.LRE(17508, alwaysUseString) || JSProf.LMC(17509, templateString, 'match').match(/\$\{([^\}]+)\}/g)) {
            // there are variables in the template so all we can do is cache the string
            return JSProf.LPE(17511, tmplts, 'key')[key] = JSProf.LRPE(17511, JSProf.LRE(17510, templateString));    //String
        } else {
            // there are no variables in the template so we can cache the DOM tree
            var node = JSProf.LMC(17514, domConstruct, 'toDom').toDom(JSProf.LRE(17512, templateString), JSProf.LRE(17513, doc));
            if (JSProf.LGD(17515, node, 'nodeType').nodeType != 1) {
                throw JSProf.LNE(17518, new (JSProf.LFC(17517, Error, true))("Invalid template: " + JSProf.LRE(17516, templateString)), 'Error');
            }
            return JSProf.LPE(17520, tmplts, 'key')[key] = JSProf.LRPE(17520, JSProf.LRE(17519, node));    //Node
        }
    }, 12));
    if (JSProf.LFC(17523, has, false)("ie")) {
        JSProf.LFC(17532, on, false)(JSProf.LRU(17524, typeof window === 'undefined' ? undefined : window), "unload", JSProf.LNF(17531, function () {
            var cache = JSProf.LGD(17525, _TemplatedMixin, '_templateCache')._templateCache;
            for (var key in JSProf.LRE(17526, cache)) {
                var value = JSProf.LGE(17527, cache, 'key')[key];
                if (typeof JSProf.LRE(17528, value) == "object") {
                    // value is either a string or a DOM node template
                    JSProf.LMC(17530, domConstruct, 'destroy').destroy(JSProf.LRE(17529, value));
                }
                delete cache[key];
            }
        }, 12));
    }
    return JSProf.LRE(17533, _TemplatedMixin);
}, 12));