JSProf.LFC(43477, define, false)(JSProf.LNE(43383, [
    "./_base/lang",
    "./dom",
    "./io-query",
    "./json"
], 10), JSProf.LNF(43476, function (lang, dom, ioq, json) {
    JSProf.LFD(43475, setValue);
    // module:
    //		dojo/dom-form
    function setValue(obj, name, value) {
        // summary:
        //		For the named property in object, set the value. If a value
        //		already exists and it is a string, convert the value to be an
        //		array of values.
        // Skip it if there is no value
        if (JSProf.LRE(43384, value) === null) {
            return;
        }
        var val = JSProf.LGE(43385, obj, 'name')[name];
        if (typeof JSProf.LRE(43386, val) == "string") {
            // inline'd type check
            JSProf.LPE(43390, obj, 'name')[name] = JSProf.LRPE(43390, JSProf.LNE(43389, [
                JSProf.LRE(43387, val),
                JSProf.LRE(43388, value)
            ], 10));
        } else if (JSProf.LMC(43392, lang, 'isArray').isArray(JSProf.LRE(43391, val))) {
            JSProf.LMC(43394, val, 'push').push(JSProf.LRE(43393, value));
        } else {
            JSProf.LPE(43396, obj, 'name')[name] = JSProf.LRPE(43396, JSProf.LRE(43395, value));
        }
    }
    var exclude = "file|submit|image|reset|button";
    var form = JSProf.LNE(43473, {
            fieldToObject: JSProf.LNF(43434, function fieldToObject(inputNode) {
                // summary:
                //		Serialize a form field to a JavaScript object.
                // description:
                //		Returns the value encoded in a form field as
                //		as a string or an array of strings. Disabled form elements
                //		and unchecked radio and checkboxes are skipped.	Multi-select
                //		elements are returned as an array of string values.
                // inputNode: DOMNode|String
                // returns: Object
                var ret = null;
                inputNode = JSProf.LWR(43399, inputNode, JSProf.LMC(43398, dom, 'byId').byId(JSProf.LRE(43397, inputNode)));
                if (JSProf.LRE(43400, inputNode)) {
                    var _in = JSProf.LGD(43401, inputNode, 'name').name, type = (JSProf.LGD(43402, inputNode, 'type').type || "").toLowerCase();
                    if (JSProf.LRE(43403, _in) && JSProf.LRE(43404, type) && !JSProf.LGD(43405, inputNode, 'disabled').disabled) {
                        if (JSProf.LRE(43406, type) == "radio" || JSProf.LRE(43407, type) == "checkbox") {
                            if (JSProf.LGD(43408, inputNode, 'checked').checked) {
                                ret = JSProf.LWR(43410, ret, JSProf.LGD(43409, inputNode, 'value').value);
                            }
                        } else if (JSProf.LGD(43411, inputNode, 'multiple').multiple) {
                            ret = JSProf.LWR(43413, ret, JSProf.LNE(43412, [], 10));
                            var nodes = JSProf.LNE(43415, [JSProf.LGD(43414, inputNode, 'firstChild').firstChild], 10);
                            while (JSProf.LGD(43416, nodes, 'length').length) {
                                for (var node = JSProf.LMC(43417, nodes, 'pop').pop(); JSProf.LRE(43418, node); node = JSProf.LWR(43420, node, JSProf.LGD(43419, node, 'nextSibling').nextSibling)) {
                                    if (JSProf.LGD(43421, node, 'nodeType').nodeType == 1 && node.tagName.toLowerCase() == "option") {
                                        if (JSProf.LGD(43422, node, 'selected').selected) {
                                            JSProf.LMC(43424, ret, 'push').push(JSProf.LGD(43423, node, 'value').value);
                                        }
                                    } else {
                                        if (JSProf.LGD(43425, node, 'nextSibling').nextSibling) {
                                            JSProf.LMC(43427, nodes, 'push').push(JSProf.LGD(43426, node, 'nextSibling').nextSibling);
                                        }
                                        if (JSProf.LGD(43428, node, 'firstChild').firstChild) {
                                            JSProf.LMC(43430, nodes, 'push').push(JSProf.LGD(43429, node, 'firstChild').firstChild);
                                        }
                                        break;
                                    }
                                }
                            }
                        } else {
                            ret = JSProf.LWR(43432, ret, JSProf.LGD(43431, inputNode, 'value').value);
                        }
                    }
                }
                return JSProf.LRE(43433, ret);    // Object
            }, 12),
            toObject: JSProf.LNF(43463, function formToObject(formNode) {
                // summary:
                //		Serialize a form node to a JavaScript object.
                // description:
                //		Returns the values encoded in an HTML form as
                //		string properties in an object which it then returns. Disabled form
                //		elements, buttons, and other non-value form elements are skipped.
                //		Multi-select elements are returned as an array of string values.
                // formNode: DOMNode|String
                // example:
                //		This form:
                //		|	<form id="test_form">
                //		|		<input type="text" name="blah" value="blah">
                //		|		<input type="text" name="no_value" value="blah" disabled>
                //		|		<input type="button" name="no_value2" value="blah">
                //		|		<select type="select" multiple name="multi" size="5">
                //		|			<option value="blah">blah</option>
                //		|			<option value="thud" selected>thud</option>
                //		|			<option value="thonk" selected>thonk</option>
                //		|		</select>
                //		|	</form>
                //
                //		yields this object structure as the result of a call to
                //		formToObject():
                //
                //		|	{
                //		|		blah: "blah",
                //		|		multi: [
                //		|			"thud",
                //		|			"thonk"
                //		|		]
                //		|	};
                var ret = JSProf.LNE(43435, {}, 11), elems = JSProf.LGD(43438, JSProf.LMC(43437, dom, 'byId').byId(JSProf.LRE(43436, formNode)), 'elements').elements;
                for (var i = 0, l = JSProf.LGD(43439, elems, 'length').length; JSProf.LRE(43440, i) < JSProf.LRE(43441, l); ++i) {
                    var item = JSProf.LGE(43442, elems, 'i')[i], _in = JSProf.LGD(43443, item, 'name').name, type = (JSProf.LGD(43444, item, 'type').type || "").toLowerCase();
                    if (JSProf.LRE(43445, _in) && JSProf.LRE(43446, type) && JSProf.LMC(43448, exclude, 'indexOf').indexOf(JSProf.LRE(43447, type)) < 0 && !JSProf.LGD(43449, item, 'disabled').disabled) {
                        JSProf.LFC(43454, setValue, false)(JSProf.LRE(43450, ret), JSProf.LRE(43451, _in), JSProf.LMC(43453, form, 'fieldToObject').fieldToObject(JSProf.LRE(43452, item)));
                        if (JSProf.LRE(43455, type) == "image") {
                            JSProf.LPE(43461, ret, JSProf.TMPS.t3313b1038ce4d555856b0e5ea0613d366d950cca = JSProf.LRE(43456, _in) + ".x")[JSProf.TMPS.t3313b1038ce4d555856b0e5ea0613d366d950cca] = JSProf.LRPE(43461, JSProf.LPE(43460, ret, JSProf.TMPS.t3313b1038ce4d555856b0e5ea0613d366d950cca = JSProf.LRE(43457, _in) + ".y")[JSProf.TMPS.t3313b1038ce4d555856b0e5ea0613d366d950cca] = JSProf.LRPE(43460, JSProf.LPD(43459, ret[_in], 'x').x = JSProf.LRSP(43459, JSProf.LPD(43458, ret[_in], 'y').y = JSProf.LRSP(43458, 0))));
                        }
                    }
                }
                return JSProf.LRE(43462, ret);    // Object
            }, 12),
            toQuery: JSProf.LNF(43467, function formToQuery(formNode) {
                // summary:
                //		Returns a URL-encoded string representing the form passed as either a
                //		node or string ID identifying the form to serialize
                // formNode: DOMNode|String
                // returns: String
                return JSProf.LMC(43466, ioq, 'objectToQuery').objectToQuery(JSProf.LMC(43465, form, 'toObject').toObject(JSProf.LRE(43464, formNode)));    // String
            }, 12),
            toJson: JSProf.LNF(43472, function formToJson(formNode, prettyPrint) {
                // summary:
                //		Create a serialized JSON string from a form node or string
                //		ID identifying the form to serialize
                // formNode: DOMNode|String
                // prettyPrint: Boolean?
                // returns: String
                return JSProf.LMC(43471, json, 'stringify').stringify(JSProf.LMC(43469, form, 'toObject').toObject(JSProf.LRE(43468, formNode)), null, JSProf.LRE(43470, prettyPrint) ? 4 : 0);    // String
            }, 12)
        }, 11);
    return JSProf.LRE(43474, form);
}, 12));