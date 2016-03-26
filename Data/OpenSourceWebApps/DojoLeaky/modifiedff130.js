JSProf.LFC(43475, define, false)(JSProf.LNE(43381, [
    "./_base/lang",
    "./dom",
    "./io-query",
    "./json"
], 10), JSProf.LNF(43474, function (lang, dom, ioq, json) {
    JSProf.LFD(43473, setValue);
    // module:
    //		dojo/dom-form
    function setValue(obj, name, value) {
        // summary:
        //		For the named property in object, set the value. If a value
        //		already exists and it is a string, convert the value to be an
        //		array of values.
        // Skip it if there is no value
        if (JSProf.LRE(43382, value) === null) {
            return;
        }
        var val = JSProf.LGE(43383, obj, 'name')[name];
        if (typeof JSProf.LRE(43384, val) == "string") {
            // inline'd type check
            JSProf.LPE(43388, obj, 'name')[name] = JSProf.LRPE(43388, JSProf.LNE(43387, [
                JSProf.LRE(43385, val),
                JSProf.LRE(43386, value)
            ], 10));
        } else if (JSProf.LMC(43390, lang, 'isArray').isArray(JSProf.LRE(43389, val))) {
            JSProf.LMC(43392, val, 'push').push(JSProf.LRE(43391, value));
        } else {
            JSProf.LPE(43394, obj, 'name')[name] = JSProf.LRPE(43394, JSProf.LRE(43393, value));
        }
    }
    var exclude = "file|submit|image|reset|button";
    var form = JSProf.LNE(43471, {
            fieldToObject: JSProf.LNF(43432, function fieldToObject(inputNode) {
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
                inputNode = JSProf.LWR(43397, inputNode, JSProf.LMC(43396, dom, 'byId').byId(JSProf.LRE(43395, inputNode)));
                if (JSProf.LRE(43398, inputNode)) {
                    var _in = JSProf.LGD(43399, inputNode, 'name').name, type = (JSProf.LGD(43400, inputNode, 'type').type || "").toLowerCase();
                    if (JSProf.LRE(43401, _in) && JSProf.LRE(43402, type) && !JSProf.LGD(43403, inputNode, 'disabled').disabled) {
                        if (JSProf.LRE(43404, type) == "radio" || JSProf.LRE(43405, type) == "checkbox") {
                            if (JSProf.LGD(43406, inputNode, 'checked').checked) {
                                ret = JSProf.LWR(43408, ret, JSProf.LGD(43407, inputNode, 'value').value);
                            }
                        } else if (JSProf.LGD(43409, inputNode, 'multiple').multiple) {
                            ret = JSProf.LWR(43411, ret, JSProf.LNE(43410, [], 10));
                            var nodes = JSProf.LNE(43413, [JSProf.LGD(43412, inputNode, 'firstChild').firstChild], 10);
                            while (JSProf.LGD(43414, nodes, 'length').length) {
                                for (var node = JSProf.LMC(43415, nodes, 'pop').pop(); JSProf.LRE(43416, node); node = JSProf.LWR(43418, node, JSProf.LGD(43417, node, 'nextSibling').nextSibling)) {
                                    if (JSProf.LGD(43419, node, 'nodeType').nodeType == 1 && node.tagName.toLowerCase() == "option") {
                                        if (JSProf.LGD(43420, node, 'selected').selected) {
                                            JSProf.LMC(43422, ret, 'push').push(JSProf.LGD(43421, node, 'value').value);
                                        }
                                    } else {
                                        if (JSProf.LGD(43423, node, 'nextSibling').nextSibling) {
                                            JSProf.LMC(43425, nodes, 'push').push(JSProf.LGD(43424, node, 'nextSibling').nextSibling);
                                        }
                                        if (JSProf.LGD(43426, node, 'firstChild').firstChild) {
                                            JSProf.LMC(43428, nodes, 'push').push(JSProf.LGD(43427, node, 'firstChild').firstChild);
                                        }
                                        break;
                                    }
                                }
                            }
                        } else {
                            ret = JSProf.LWR(43430, ret, JSProf.LGD(43429, inputNode, 'value').value);
                        }
                    }
                }
                return JSProf.LRE(43431, ret);    // Object
            }, 12),
            toObject: JSProf.LNF(43461, function formToObject(formNode) {
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
                var ret = JSProf.LNE(43433, {}, 11), elems = JSProf.LGD(43436, JSProf.LMC(43435, dom, 'byId').byId(JSProf.LRE(43434, formNode)), 'elements').elements;
                for (var i = 0, l = JSProf.LGD(43437, elems, 'length').length; JSProf.LRE(43438, i) < JSProf.LRE(43439, l); ++i) {
                    var item = JSProf.LGE(43440, elems, 'i')[i], _in = JSProf.LGD(43441, item, 'name').name, type = (JSProf.LGD(43442, item, 'type').type || "").toLowerCase();
                    if (JSProf.LRE(43443, _in) && JSProf.LRE(43444, type) && JSProf.LMC(43446, exclude, 'indexOf').indexOf(JSProf.LRE(43445, type)) < 0 && !JSProf.LGD(43447, item, 'disabled').disabled) {
                        JSProf.LFC(43452, setValue, false)(JSProf.LRE(43448, ret), JSProf.LRE(43449, _in), JSProf.LMC(43451, form, 'fieldToObject').fieldToObject(JSProf.LRE(43450, item)));
                        if (JSProf.LRE(43453, type) == "image") {
                            JSProf.LPE(43459, ret, JSProf.TMPS.t3313b1038ce4d555856b0e5ea0613d366d950cca = JSProf.LRE(43454, _in) + ".x")[JSProf.TMPS.t3313b1038ce4d555856b0e5ea0613d366d950cca] = JSProf.LRPE(43459, JSProf.LPE(43458, ret, JSProf.TMPS.t3313b1038ce4d555856b0e5ea0613d366d950cca = JSProf.LRE(43455, _in) + ".y")[JSProf.TMPS.t3313b1038ce4d555856b0e5ea0613d366d950cca] = JSProf.LRPE(43458, JSProf.LPD(43457, ret[_in], 'x').x = JSProf.LRSP(43457, JSProf.LPD(43456, ret[_in], 'y').y = JSProf.LRSP(43456, 0))));
                        }
                    }
                }
                return JSProf.LRE(43460, ret);    // Object
            }, 12),
            toQuery: JSProf.LNF(43465, function formToQuery(formNode) {
                // summary:
                //		Returns a URL-encoded string representing the form passed as either a
                //		node or string ID identifying the form to serialize
                // formNode: DOMNode|String
                // returns: String
                return JSProf.LMC(43464, ioq, 'objectToQuery').objectToQuery(JSProf.LMC(43463, form, 'toObject').toObject(JSProf.LRE(43462, formNode)));    // String
            }, 12),
            toJson: JSProf.LNF(43470, function formToJson(formNode, prettyPrint) {
                // summary:
                //		Create a serialized JSON string from a form node or string
                //		ID identifying the form to serialize
                // formNode: DOMNode|String
                // prettyPrint: Boolean?
                // returns: String
                return JSProf.LMC(43469, json, 'stringify').stringify(JSProf.LMC(43467, form, 'toObject').toObject(JSProf.LRE(43466, formNode)), null, JSProf.LRE(43468, prettyPrint) ? 4 : 0);    // String
            }, 12)
        }, 11);
    return JSProf.LRE(43472, form);
}, 12));