JSProf.LFC(20062, define, false)(JSProf.LNE(19933, [
    "./_base/lang",
    "./_base/array",
    "./dom"
], 10), JSProf.LNF(20061, function (lang, array, dom) {
    JSProf.LFD(20060, str2array);
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
        spaces = /\s+/, a1 = JSProf.LNE(19934, [""], 10);
    function str2array(s) {
        if (typeof JSProf.LRE(19935, s) == "string" || JSProf.LRE(19936, s) instanceof JSProf.LRU(19937, typeof String === 'undefined' ? undefined : String)) {
            if (JSProf.LRE(19938, s) && !JSProf.LMC(19940, spaces, 'test').test(JSProf.LRE(19939, s))) {
                JSProf.LPE(19942, a1, 0)[0] = JSProf.LRPE(19942, JSProf.LRE(19941, s));
                return JSProf.LRE(19943, a1);
            }
            var a = s.split(JSProf.LRE(19944, spaces));
            if (JSProf.LGD(19945, a, 'length').length && !JSProf.LGE(19946, a, 0)[0]) {
                JSProf.LMC(19947, a, 'shift').shift();
            }
            if (JSProf.LGD(19948, a, 'length').length && !JSProf.LGE(19950, a, JSProf.TMPS.t155cb1635e4abaf6f977dd516f642220740a94e7 = JSProf.LGD(19949, a, 'length').length - 1)[JSProf.TMPS.t155cb1635e4abaf6f977dd516f642220740a94e7]) {
                JSProf.LMC(19951, a, 'pop').pop();
            }
            return JSProf.LRE(19952, a);
        }
        // assumed to be an array
        if (!JSProf.LRE(19953, s)) {
            return JSProf.LNE(19954, [], 10);
        }
        return JSProf.LMC(19958, array, 'filter').filter(JSProf.LRE(19955, s), JSProf.LNF(19957, function (x) {
            return JSProf.LRE(19956, x);
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
    var fakeNode = JSProf.LNE(19959, {}, 11);
    // for effective replacement
    cls = JSProf.LWR(20058, cls, JSProf.LNE(20057, {
        contains: JSProf.LNF(19965, function containsClass(node, classStr) {
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
            return JSProf.LMC(19964, " " + JSProf.LGE(19962, JSProf.LMC(19961, dom, 'byId').byId(JSProf.LRE(19960, node)), 'className')[className] + " ", 'indexOf').indexOf(" " + JSProf.LRE(19963, classStr) + " ") >= 0;    // Boolean
        }, 12),
        add: JSProf.LNF(19992, function addClass(node, classStr) {
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
            node = JSProf.LWR(19968, node, JSProf.LMC(19967, dom, 'byId').byId(JSProf.LRE(19966, node)));
            classStr = JSProf.LWR(19971, classStr, JSProf.LFC(19970, str2array, false)(JSProf.LRE(19969, classStr)));
            var cls = JSProf.LGE(19972, node, 'className')[className], oldLen;
            cls = JSProf.LWR(19975, cls, JSProf.LRE(19973, cls) ? " " + JSProf.LRE(19974, cls) + " " : " ");
            oldLen = JSProf.LWR(19977, oldLen, JSProf.LGD(19976, cls, 'length').length);
            for (var i = 0, len = JSProf.LGD(19978, classStr, 'length').length, c; JSProf.LRE(19979, i) < JSProf.LRE(19980, len); ++i) {
                c = JSProf.LWR(19982, c, JSProf.LGE(19981, classStr, 'i')[i]);
                if (JSProf.LRE(19983, c) && JSProf.LMC(19985, cls, 'indexOf').indexOf(" " + JSProf.LRE(19984, c) + " ") < 0) {
                    cls += JSProf.LRE(19986, c) + " ";
                }
            }
            if (JSProf.LRE(19987, oldLen) < JSProf.LGD(19988, cls, 'length').length) {
                JSProf.LPE(19991, node, 'className')[className] = JSProf.LRPE(19991, JSProf.LMC(19990, cls, 'substr').substr(1, JSProf.LGD(19989, cls, 'length').length - 2));
            }
        }, 12),
        remove: JSProf.LNF(20016, function removeClass(node, classStr) {
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
            node = JSProf.LWR(19995, node, JSProf.LMC(19994, dom, 'byId').byId(JSProf.LRE(19993, node)));
            var cls;
            if (JSProf.LRE(19996, classStr) !== undefined) {
                classStr = JSProf.LWR(19999, classStr, JSProf.LFC(19998, str2array, false)(JSProf.LRE(19997, classStr)));
                cls = JSProf.LWR(20001, cls, " " + JSProf.LGE(20000, node, 'className')[className] + " ");
                for (var i = 0, len = JSProf.LGD(20002, classStr, 'length').length; JSProf.LRE(20003, i) < JSProf.LRE(20004, len); ++i) {
                    cls = JSProf.LWR(20007, cls, JSProf.LMC(20006, cls, 'replace').replace(" " + JSProf.LGE(20005, classStr, 'i')[i] + " ", " "));
                }
                cls = JSProf.LWR(20010, cls, JSProf.LMC(20009, lang, 'trim').trim(JSProf.LRE(20008, cls)));
            } else {
                cls = JSProf.LWR(20011, cls, "");
            }
            if (JSProf.LGE(20012, node, 'className')[className] != JSProf.LRE(20013, cls)) {
                JSProf.LPE(20015, node, 'className')[className] = JSProf.LRPE(20015, JSProf.LRE(20014, cls));
            }
        }, 12),
        replace: JSProf.LNF(20032, function replaceClass(node, addClassStr, removeClassStr) {
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
            node = JSProf.LWR(20019, node, JSProf.LMC(20018, dom, 'byId').byId(JSProf.LRE(20017, node)));
            JSProf.LPE(20021, fakeNode, 'className')[className] = JSProf.LRPE(20021, JSProf.LGE(20020, node, 'className')[className]);
            JSProf.LMC(20024, cls, 'remove').remove(JSProf.LRE(20022, fakeNode), JSProf.LRE(20023, removeClassStr));
            JSProf.LMC(20027, cls, 'add').add(JSProf.LRE(20025, fakeNode), JSProf.LRE(20026, addClassStr));
            if (JSProf.LGE(20028, node, 'className')[className] !== JSProf.LGE(20029, fakeNode, 'className')[className]) {
                JSProf.LPE(20031, node, 'className')[className] = JSProf.LRPE(20031, JSProf.LGE(20030, fakeNode, 'className')[className]);
            }
        }, 12),
        toggle: JSProf.LNF(20056, function toggleClass(node, classStr, condition) {
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
            node = JSProf.LWR(20035, node, JSProf.LMC(20034, dom, 'byId').byId(JSProf.LRE(20033, node)));
            if (JSProf.LRE(20036, condition) === undefined) {
                classStr = JSProf.LWR(20039, classStr, JSProf.LFC(20038, str2array, false)(JSProf.LRE(20037, classStr)));
                for (var i = 0, len = JSProf.LGD(20040, classStr, 'length').length, c; JSProf.LRE(20041, i) < JSProf.LRE(20042, len); ++i) {
                    c = JSProf.LWR(20044, c, JSProf.LGE(20043, classStr, 'i')[i]);
                    JSProf.LMC(20050, cls, JSProf.TMPS.tdcfaf21a382883ab94b41fe2573b0cf28d946208 = JSProf.LMC(20047, cls, 'contains').contains(JSProf.LRE(20045, node), JSProf.LRE(20046, c)) ? "remove" : "add", 1)[JSProf.TMPS.tdcfaf21a382883ab94b41fe2573b0cf28d946208](JSProf.LRE(20048, node), JSProf.LRE(20049, c));
                }
            } else {
                JSProf.LMC(20054, cls, JSProf.TMPS.tdcfaf21a382883ab94b41fe2573b0cf28d946208 = JSProf.LRE(20051, condition) ? "add" : "remove", 1)[JSProf.TMPS.tdcfaf21a382883ab94b41fe2573b0cf28d946208](JSProf.LRE(20052, node), JSProf.LRE(20053, classStr));
            }
            return JSProf.LRE(20055, condition);    // Boolean
        }, 12)
    }, 11));
    return JSProf.LRE(20059, cls);
}, 12));