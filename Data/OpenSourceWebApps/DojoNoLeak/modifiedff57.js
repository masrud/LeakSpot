JSProf.LFC(20604, define, false)(JSProf.LNE(20475, [
    "./_base/lang",
    "./_base/array",
    "./dom"
], 10), JSProf.LNF(20603, function (lang, array, dom) {
    JSProf.LFD(20602, str2array);
    // module:
    //		dojo/dom-class
    var className = "className";
    /* Part I of classList-based implementation is preserved here for posterity
    	var classList = "classList";
    	has.add("dom-classList", function(){
    		return classList in document.createElement("p");
    	});
    	*/
    // =============================
    // (CSS) Class Functions
    // =============================
    var cls,
        // exports object
        spaces = /\s+/, a1 = JSProf.LNE(20476, [""], 10);
    function str2array(s) {
        if (typeof JSProf.LRE(20477, s) == "string" || JSProf.LRE(20478, s) instanceof JSProf.LRU(20479, typeof String === 'undefined' ? undefined : String)) {
            if (JSProf.LRE(20480, s) && !JSProf.LMC(20482, spaces, 'test').test(JSProf.LRE(20481, s))) {
                JSProf.LPE(20484, a1, 0)[0] = JSProf.LRPE(20484, JSProf.LRE(20483, s));
                return JSProf.LRE(20485, a1);
            }
            var a = s.split(JSProf.LRE(20486, spaces));
            if (JSProf.LGD(20487, a, 'length').length && !JSProf.LGE(20488, a, 0)[0]) {
                JSProf.LMC(20489, a, 'shift').shift();
            }
            if (JSProf.LGD(20490, a, 'length').length && !JSProf.LGE(20492, a, JSProf.TMPS.t155cb1635e4abaf6f977dd516f642220740a94e7 = JSProf.LGD(20491, a, 'length').length - 1)[JSProf.TMPS.t155cb1635e4abaf6f977dd516f642220740a94e7]) {
                JSProf.LMC(20493, a, 'pop').pop();
            }
            return JSProf.LRE(20494, a);
        }
        // assumed to be an array
        if (!JSProf.LRE(20495, s)) {
            return JSProf.LNE(20496, [], 10);
        }
        return JSProf.LMC(20500, array, 'filter').filter(JSProf.LRE(20497, s), JSProf.LNF(20499, function (x) {
            return JSProf.LRE(20498, x);
        }, 12));
    }
    /* Part II of classList-based implementation is preserved here for posterity
    	if(has("dom-classList")){
    		// new classList version
    		cls = {
    			contains: function containsClass(node, classStr){
    				var clslst = classStr && dom.byId(node)[classList];
    				return clslst && clslst.contains(classStr); // Boolean
    			},
    
    			add: function addClass(node, classStr){
    				node = dom.byId(node);
    				classStr = str2array(classStr);
    				for(var i = 0, len = classStr.length; i < len; ++i){
    					node[classList].add(classStr[i]);
    				}
    			},
    
    			remove: function removeClass(node, classStr){
    				node = dom.byId(node);
    				if(classStr === undefined){
    					node[className] = "";
    				}else{
    					classStr = str2array(classStr);
    					for(var i = 0, len = classStr.length; i < len; ++i){
    						node[classList].remove(classStr[i]);
    					}
    				}
    			},
    
    			replace: function replaceClass(node, addClassStr, removeClassStr){
    				node = dom.byId(node);
    				if(removeClassStr === undefined){
    					node[className] = "";
    				}else{
    					removeClassStr = str2array(removeClassStr);
    					for(var i = 0, len = removeClassStr.length; i < len; ++i){
    						node[classList].remove(removeClassStr[i]);
    					}
    				}
    				addClassStr = str2array(addClassStr);
    				for(i = 0, len = addClassStr.length; i < len; ++i){
    					node[classList].add(addClassStr[i]);
    				}
    			},
    
    			toggle: function toggleClass(node, classStr, condition){
    				node = dom.byId(node);
    				if(condition === undefined){
    					classStr = str2array(classStr);
    					for(var i = 0, len = classStr.length; i < len; ++i){
    						node[classList].toggle(classStr[i]);
    					}
    				}else{
    					cls[condition ? "add" : "remove"](node, classStr);
    				}
    				return condition;   // Boolean
    			}
    		}
    	}
    	*/
    // regular DOM version
    var fakeNode = JSProf.LNE(20501, {}, 11);
    // for effective replacement
    cls = JSProf.LWR(20600, cls, JSProf.LNE(20599, {
        contains: JSProf.LNF(20507, function containsClass(node, classStr) {
            // summary:
            //		Returns whether or not the specified classes are a portion of the
            //		class list currently applied to the node.
            // node: String|DOMNode
            //		String ID or DomNode reference to check the class for.
            // classStr: String
            //		A string class name to look for.
            // example:
            //		Do something if a node with id="someNode" has class="aSillyClassName" present
            //	|	if(dojo.hasClass("someNode","aSillyClassName")){ ... }
            return JSProf.LMC(20506, " " + JSProf.LGE(20504, JSProf.LMC(20503, dom, 'byId').byId(JSProf.LRE(20502, node)), 'className')[className] + " ", 'indexOf').indexOf(" " + JSProf.LRE(20505, classStr) + " ") >= 0;    // Boolean
        }, 12),
        add: JSProf.LNF(20534, function addClass(node, classStr) {
            // summary:
            //		Adds the specified classes to the end of the class list on the
            //		passed node. Will not re-apply duplicate classes.
            //
            // node: String|DOMNode
            //		String ID or DomNode reference to add a class string too
            //
            // classStr: String|Array
            //		A String class name to add, or several space-separated class names,
            //		or an array of class names.
            //
            // example:
            //		Add a class to some node:
            //	|	require(["dojo/dom-class"], function(domClass){
            //	|		domClass.add("someNode", "anewClass");
            //	|	});
            //
            // example:
            //		Add two classes at once:
            //	|	require(["dojo/dom-class"], function(domClass){
            //	|		domClass.add("someNode", "firstClass secondClass");
            //	|	});
            //
            // example:
            //		Add two classes at once (using array):
            //	|	require(["dojo/dom-class"], function(domClass){
            //	|		domClass.add("someNode", ["firstClass", "secondClass"]);
            //	|	});
            //
            // example:
            //		Available in `dojo/NodeList` for multiple additions
            //	|	require(["dojo/query"], function(query){
            //	|		query("ul > li").addClass("firstLevel");
            //	|	});
            node = JSProf.LWR(20510, node, JSProf.LMC(20509, dom, 'byId').byId(JSProf.LRE(20508, node)));
            classStr = JSProf.LWR(20513, classStr, JSProf.LFC(20512, str2array, false)(JSProf.LRE(20511, classStr)));
            var cls = JSProf.LGE(20514, node, 'className')[className], oldLen;
            cls = JSProf.LWR(20517, cls, JSProf.LRE(20515, cls) ? " " + JSProf.LRE(20516, cls) + " " : " ");
            oldLen = JSProf.LWR(20519, oldLen, JSProf.LGD(20518, cls, 'length').length);
            for (var i = 0, len = JSProf.LGD(20520, classStr, 'length').length, c; JSProf.LRE(20521, i) < JSProf.LRE(20522, len); ++i) {
                c = JSProf.LWR(20524, c, JSProf.LGE(20523, classStr, 'i')[i]);
                if (JSProf.LRE(20525, c) && JSProf.LMC(20527, cls, 'indexOf').indexOf(" " + JSProf.LRE(20526, c) + " ") < 0) {
                    cls += JSProf.LRE(20528, c) + " ";
                }
            }
            if (JSProf.LRE(20529, oldLen) < JSProf.LGD(20530, cls, 'length').length) {
                JSProf.LPE(20533, node, 'className')[className] = JSProf.LRPE(20533, JSProf.LMC(20532, cls, 'substr').substr(1, JSProf.LGD(20531, cls, 'length').length - 2));
            }
        }, 12),
        remove: JSProf.LNF(20558, function removeClass(node, classStr) {
            // summary:
            //		Removes the specified classes from node. No `contains()`
            //		check is required.
            //
            // node: String|DOMNode
            //		String ID or DomNode reference to remove the class from.
            //
            // classStr: String|Array
            //		An optional String class name to remove, or several space-separated
            //		class names, or an array of class names. If omitted, all class names
            //		will be deleted.
            //
            // example:
            //		Remove a class from some node:
            //	|	require(["dojo/dom-class"], function(domClass){
            //	|		domClass.remove("someNode", "firstClass");
            //	|	});
            //
            // example:
            //		Remove two classes from some node:
            //	|	require(["dojo/dom-class"], function(domClass){
            //	|		domClass.remove("someNode", "firstClass secondClass");
            //	|	});
            //
            // example:
            //		Remove two classes from some node (using array):
            //	|	require(["dojo/dom-class"], function(domClass){
            //	|		domClass.remove("someNode", ["firstClass", "secondClass"]);
            //	|	});
            //
            // example:
            //		Remove all classes from some node:
            //	|	require(["dojo/dom-class"], function(domClass){
            //	|		domClass.remove("someNode");
            //	|	});
            //
            // example:
            //		Available in `dojo/NodeList` for multiple removal
            //	|	require(["dojo/query"], function(query){
            //	|		query("ul > li").removeClass("foo");
            //	|	});
            node = JSProf.LWR(20537, node, JSProf.LMC(20536, dom, 'byId').byId(JSProf.LRE(20535, node)));
            var cls;
            if (JSProf.LRE(20538, classStr) !== undefined) {
                classStr = JSProf.LWR(20541, classStr, JSProf.LFC(20540, str2array, false)(JSProf.LRE(20539, classStr)));
                cls = JSProf.LWR(20543, cls, " " + JSProf.LGE(20542, node, 'className')[className] + " ");
                for (var i = 0, len = JSProf.LGD(20544, classStr, 'length').length; JSProf.LRE(20545, i) < JSProf.LRE(20546, len); ++i) {
                    cls = JSProf.LWR(20549, cls, JSProf.LMC(20548, cls, 'replace').replace(" " + JSProf.LGE(20547, classStr, 'i')[i] + " ", " "));
                }
                cls = JSProf.LWR(20552, cls, JSProf.LMC(20551, lang, 'trim').trim(JSProf.LRE(20550, cls)));
            } else {
                cls = JSProf.LWR(20553, cls, "");
            }
            if (JSProf.LGE(20554, node, 'className')[className] != JSProf.LRE(20555, cls)) {
                JSProf.LPE(20557, node, 'className')[className] = JSProf.LRPE(20557, JSProf.LRE(20556, cls));
            }
        }, 12),
        replace: JSProf.LNF(20574, function replaceClass(node, addClassStr, removeClassStr) {
            // summary:
            //		Replaces one or more classes on a node if not present.
            //		Operates more quickly than calling dojo.removeClass and dojo.addClass
            //
            // node: String|DOMNode
            //		String ID or DomNode reference to remove the class from.
            //
            // addClassStr: String|Array
            //		A String class name to add, or several space-separated class names,
            //		or an array of class names.
            //
            // removeClassStr: String|Array?
            //		A String class name to remove, or several space-separated class names,
            //		or an array of class names.
            //
            // example:
            //	|	require(["dojo/dom-class"], function(domClass){
            //	|		domClass.replace("someNode", "add1 add2", "remove1 remove2");
            //	|	});
            //
            // example:
            //	Replace all classes with addMe
            //	|	require(["dojo/dom-class"], function(domClass){
            //	|		domClass.replace("someNode", "addMe");
            //	|	});
            //
            // example:
            //	Available in `dojo/NodeList` for multiple toggles
            //	|	require(["dojo/query"], function(query){
            //	|		query(".findMe").replaceClass("addMe", "removeMe");
            //	|	});
            node = JSProf.LWR(20561, node, JSProf.LMC(20560, dom, 'byId').byId(JSProf.LRE(20559, node)));
            JSProf.LPE(20563, fakeNode, 'className')[className] = JSProf.LRPE(20563, JSProf.LGE(20562, node, 'className')[className]);
            JSProf.LMC(20566, cls, 'remove').remove(JSProf.LRE(20564, fakeNode), JSProf.LRE(20565, removeClassStr));
            JSProf.LMC(20569, cls, 'add').add(JSProf.LRE(20567, fakeNode), JSProf.LRE(20568, addClassStr));
            if (JSProf.LGE(20570, node, 'className')[className] !== JSProf.LGE(20571, fakeNode, 'className')[className]) {
                JSProf.LPE(20573, node, 'className')[className] = JSProf.LRPE(20573, JSProf.LGE(20572, fakeNode, 'className')[className]);
            }
        }, 12),
        toggle: JSProf.LNF(20598, function toggleClass(node, classStr, condition) {
            // summary:
            //		Adds a class to node if not present, or removes if present.
            //		Pass a boolean condition if you want to explicitly add or remove.
            //		Returns the condition that was specified directly or indirectly.
            //
            // node: String|DOMNode
            //		String ID or DomNode reference to toggle a class string
            //
            // classStr: String|Array
            //		A String class name to toggle, or several space-separated class names,
            //		or an array of class names.
            //
            // condition:
            //		If passed, true means to add the class, false means to remove.
            //		Otherwise dojo.hasClass(node, classStr) is used to detect the class presence.
            //
            // example:
            //	|	require(["dojo/dom-class"], function(domClass){
            //	|		domClass.toggle("someNode", "hovered");
            //	|	});
            //
            // example:
            //		Forcefully add a class
            //	|	require(["dojo/dom-class"], function(domClass){
            //	|		domClass.toggle("someNode", "hovered", true);
            //	|	});
            //
            // example:
            //		Available in `dojo/NodeList` for multiple toggles
            //	|	require(["dojo/query"], function(query){
            //	|		query(".toggleMe").toggleClass("toggleMe");
            //	|	});
            node = JSProf.LWR(20577, node, JSProf.LMC(20576, dom, 'byId').byId(JSProf.LRE(20575, node)));
            if (JSProf.LRE(20578, condition) === undefined) {
                classStr = JSProf.LWR(20581, classStr, JSProf.LFC(20580, str2array, false)(JSProf.LRE(20579, classStr)));
                for (var i = 0, len = JSProf.LGD(20582, classStr, 'length').length, c; JSProf.LRE(20583, i) < JSProf.LRE(20584, len); ++i) {
                    c = JSProf.LWR(20586, c, JSProf.LGE(20585, classStr, 'i')[i]);
                    JSProf.LMC(20592, cls, JSProf.TMPS.tdcfaf21a382883ab94b41fe2573b0cf28d946208 = JSProf.LMC(20589, cls, 'contains').contains(JSProf.LRE(20587, node), JSProf.LRE(20588, c)) ? "remove" : "add", 1)[JSProf.TMPS.tdcfaf21a382883ab94b41fe2573b0cf28d946208](JSProf.LRE(20590, node), JSProf.LRE(20591, c));
                }
            } else {
                JSProf.LMC(20596, cls, JSProf.TMPS.tdcfaf21a382883ab94b41fe2573b0cf28d946208 = JSProf.LRE(20593, condition) ? "add" : "remove", 1)[JSProf.TMPS.tdcfaf21a382883ab94b41fe2573b0cf28d946208](JSProf.LRE(20594, node), JSProf.LRE(20595, classStr));
            }
            return JSProf.LRE(20597, condition);    // Boolean
        }, 12)
    }, 11));
    return JSProf.LRE(20601, cls);
}, 12));