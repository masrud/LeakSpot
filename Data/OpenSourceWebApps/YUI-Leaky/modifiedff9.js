/*
YUI 3.14.1 (build 63049cb)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
JSProf.LMC(78007, YUI, 'add').add("event-simulate", JSProf.LNF(78004, function (e, t) {
    JSProf.LFC(78003, JSProf.LNF(78002, function () {
        JSProf.LFD(77997, d);
        JSProf.LFD(77998, v);
        JSProf.LFD(77999, m);
        JSProf.LFD(78000, g);
        JSProf.LFD(78001, y);
        function d(t, u, a, f, l, c, h, p, d, v, m) {
            JSProf.LRE(77369, t) || JSProf.LMC(77370, e, 'error').error("simulateKeyEvent(): Invalid target.");
            if (JSProf.LFC(77372, r, false)(JSProf.LRE(77371, u))) {
                u = JSProf.LWR(77373, u, u.toLowerCase());
                switch (JSProf.LRE(77374, u)) {
                case "textevent":
                    u = JSProf.LWR(77375, u, "keypress");
                    break;
                case "keyup":
                case "keydown":
                case "keypress":
                    break;
                default:
                    JSProf.LMC(77377, e, 'error').error("simulateKeyEvent(): Event type '" + JSProf.LRE(77376, u) + "' not supported.");
                }
            } else
                JSProf.LMC(77378, e, 'error').error("simulateKeyEvent(): Event type must be a string.");
            JSProf.LFC(77380, i, false)(JSProf.LRE(77379, a)) || (a = JSProf.LWR(77381, a, !0)), JSProf.LFC(77383, i, false)(JSProf.LRE(77382, f)) || (f = JSProf.LWR(77384, f, !0)), JSProf.LFC(77386, s, false)(JSProf.LRE(77385, l)) || (l = JSProf.LWR(77388, l, JSProf.LGD(77387, e.config, 'win').win)), JSProf.LFC(77390, i, false)(JSProf.LRE(77389, c)) || (c = JSProf.LWR(77391, c, !1)), JSProf.LFC(77393, i, false)(JSProf.LRE(77392, h)) || (h = JSProf.LWR(77394, h, !1)), JSProf.LFC(77396, i, false)(JSProf.LRE(77395, p)) || (p = JSProf.LWR(77397, p, !1)), JSProf.LFC(77399, i, false)(JSProf.LRE(77398, d)) || (d = JSProf.LWR(77400, d, !1)), JSProf.LFC(77402, o, false)(JSProf.LRE(77401, v)) || (v = JSProf.LWR(77403, v, 0)), JSProf.LFC(77405, o, false)(JSProf.LRE(77404, m)) || (m = JSProf.LWR(77406, m, 0));
            var g = null;
            if (JSProf.LFC(77408, n, false)(JSProf.LGD(77407, e.config.doc, 'createEvent').createEvent)) {
                try {
                    g = JSProf.LWR(77410, g, JSProf.LMC(77409, e.config.doc, 'createEvent').createEvent("KeyEvents")), JSProf.LMC(77421, g, 'initKeyEvent').initKeyEvent(JSProf.LRE(77411, u), JSProf.LRE(77412, a), JSProf.LRE(77413, f), JSProf.LRE(77414, l), JSProf.LRE(77415, c), JSProf.LRE(77416, h), JSProf.LRE(77417, p), JSProf.LRE(77418, d), JSProf.LRE(77419, v), JSProf.LRE(77420, m));
                } catch (y) {
                    try {
                        g = JSProf.LWR(77423, g, JSProf.LMC(77422, e.config.doc, 'createEvent').createEvent("Events"));
                    } catch (b) {
                        g = JSProf.LWR(77425, g, JSProf.LMC(77424, e.config.doc, 'createEvent').createEvent("UIEvents"));
                    } finally {
                        JSProf.LMC(77429, g, 'initEvent').initEvent(JSProf.LRE(77426, u), JSProf.LRE(77427, a), JSProf.LRE(77428, f)), JSProf.LPD(77431, g, 'view').view = JSProf.LRSP(77431, JSProf.LRE(77430, l)), JSProf.LPD(77433, g, 'altKey').altKey = JSProf.LRSP(77433, JSProf.LRE(77432, h)), JSProf.LPD(77435, g, 'ctrlKey').ctrlKey = JSProf.LRSP(77435, JSProf.LRE(77434, c)), JSProf.LPD(77437, g, 'shiftKey').shiftKey = JSProf.LRSP(77437, JSProf.LRE(77436, p)), JSProf.LPD(77439, g, 'metaKey').metaKey = JSProf.LRSP(77439, JSProf.LRE(77438, d)), JSProf.LPD(77441, g, 'keyCode').keyCode = JSProf.LRSP(77441, JSProf.LRE(77440, v)), JSProf.LPD(77443, g, 'charCode').charCode = JSProf.LRSP(77443, JSProf.LRE(77442, m));
                    }
                }
                t.dispatchEvent(JSProf.LRE(77444, g));
            } else
                JSProf.LFC(77446, s, false)(JSProf.LGD(77445, e.config.doc, 'createEventObject').createEventObject) ? (g = JSProf.LWR(77448, g, JSProf.LMC(77447, e.config.doc, 'createEventObject').createEventObject()), JSProf.LPD(77450, g, 'bubbles').bubbles = JSProf.LRSP(77450, JSProf.LRE(77449, a)), JSProf.LPD(77452, g, 'cancelable').cancelable = JSProf.LRSP(77452, JSProf.LRE(77451, f)), JSProf.LPD(77454, g, 'view').view = JSProf.LRSP(77454, JSProf.LRE(77453, l)), JSProf.LPD(77456, g, 'ctrlKey').ctrlKey = JSProf.LRSP(77456, JSProf.LRE(77455, c)), JSProf.LPD(77458, g, 'altKey').altKey = JSProf.LRSP(77458, JSProf.LRE(77457, h)), JSProf.LPD(77460, g, 'shiftKey').shiftKey = JSProf.LRSP(77460, JSProf.LRE(77459, p)), JSProf.LPD(77462, g, 'metaKey').metaKey = JSProf.LRSP(77462, JSProf.LRE(77461, d)), JSProf.LPD(77466, g, 'keyCode').keyCode = JSProf.LRSP(77466, JSProf.LRE(77463, m) > 0 ? JSProf.LRE(77464, m) : JSProf.LRE(77465, v)), JSProf.LMC(77469, t, 'fireEvent').fireEvent("on" + JSProf.LRE(77467, u), JSProf.LRE(77468, g))) : JSProf.LMC(77470, e, 'error').error("simulateKeyEvent(): No event simulation framework present.");
        }
        function v(t, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x) {
            JSProf.LRE(77471, t) || JSProf.LMC(77472, e, 'error').error("simulateMouseEvent(): Invalid target."), JSProf.LFC(77474, r, false)(JSProf.LRE(77473, f)) ? !JSProf.LGE(77475, u, JSProf.TMPS.t95e748336a75c3b561b7a748a3f8d58f07a6f2d9 = f.toLowerCase())[JSProf.TMPS.t95e748336a75c3b561b7a748a3f8d58f07a6f2d9] && !JSProf.LGE(77476, a, 'f')[f] && JSProf.LMC(77478, e, 'error').error("simulateMouseEvent(): Event type '" + JSProf.LRE(77477, f) + "' not supported.") : JSProf.LMC(77479, e, 'error').error("simulateMouseEvent(): Event type must be a string."), JSProf.LFC(77481, i, false)(JSProf.LRE(77480, l)) || (l = JSProf.LWR(77482, l, !0)), JSProf.LFC(77484, i, false)(JSProf.LRE(77483, c)) || (c = JSProf.LWR(77486, c, JSProf.LRE(77485, f) !== "mousemove")), JSProf.LFC(77488, s, false)(JSProf.LRE(77487, h)) || (h = JSProf.LWR(77490, h, JSProf.LGD(77489, e.config, 'win').win)), JSProf.LFC(77492, o, false)(JSProf.LRE(77491, p)) || (p = JSProf.LWR(77493, p, 1)), JSProf.LFC(77495, o, false)(JSProf.LRE(77494, d)) || (d = JSProf.LWR(77496, d, 0)), JSProf.LFC(77498, o, false)(JSProf.LRE(77497, v)) || (v = JSProf.LWR(77499, v, 0)), JSProf.LFC(77501, o, false)(JSProf.LRE(77500, m)) || (m = JSProf.LWR(77502, m, 0)), JSProf.LFC(77504, o, false)(JSProf.LRE(77503, g)) || (g = JSProf.LWR(77505, g, 0)), JSProf.LFC(77507, i, false)(JSProf.LRE(77506, y)) || (y = JSProf.LWR(77508, y, !1)), JSProf.LFC(77510, i, false)(JSProf.LRE(77509, b)) || (b = JSProf.LWR(77511, b, !1)), JSProf.LFC(77513, i, false)(JSProf.LRE(77512, w)) || (w = JSProf.LWR(77514, w, !1)), JSProf.LFC(77516, i, false)(JSProf.LRE(77515, E)) || (E = JSProf.LWR(77517, E, !1)), JSProf.LFC(77519, o, false)(JSProf.LRE(77518, S)) || (S = JSProf.LWR(77520, S, 0)), x = JSProf.LWR(77522, x, JSProf.LRE(77521, x) || null);
            var T = null;
            if (JSProf.LFC(77524, n, false)(JSProf.LGD(77523, e.config.doc, 'createEvent').createEvent))
                T = JSProf.LWR(77526, T, JSProf.LMC(77525, e.config.doc, 'createEvent').createEvent("MouseEvents")), JSProf.LGD(77527, T, 'initMouseEvent').initMouseEvent ? JSProf.LMC(77543, T, 'initMouseEvent').initMouseEvent(JSProf.LRE(77528, f), JSProf.LRE(77529, l), JSProf.LRE(77530, c), JSProf.LRE(77531, h), JSProf.LRE(77532, p), JSProf.LRE(77533, d), JSProf.LRE(77534, v), JSProf.LRE(77535, m), JSProf.LRE(77536, g), JSProf.LRE(77537, y), JSProf.LRE(77538, b), JSProf.LRE(77539, w), JSProf.LRE(77540, E), JSProf.LRE(77541, S), JSProf.LRE(77542, x)) : (T = JSProf.LWR(77545, T, JSProf.LMC(77544, e.config.doc, 'createEvent').createEvent("UIEvents")), JSProf.LMC(77549, T, 'initEvent').initEvent(JSProf.LRE(77546, f), JSProf.LRE(77547, l), JSProf.LRE(77548, c)), JSProf.LPD(77551, T, 'view').view = JSProf.LRSP(77551, JSProf.LRE(77550, h)), JSProf.LPD(77553, T, 'detail').detail = JSProf.LRSP(77553, JSProf.LRE(77552, p)), JSProf.LPD(77555, T, 'screenX').screenX = JSProf.LRSP(77555, JSProf.LRE(77554, d)), JSProf.LPD(77557, T, 'screenY').screenY = JSProf.LRSP(77557, JSProf.LRE(77556, v)), JSProf.LPD(77559, T, 'clientX').clientX = JSProf.LRSP(77559, JSProf.LRE(77558, m)), JSProf.LPD(77561, T, 'clientY').clientY = JSProf.LRSP(77561, JSProf.LRE(77560, g)), JSProf.LPD(77563, T, 'ctrlKey').ctrlKey = JSProf.LRSP(77563, JSProf.LRE(77562, y)), JSProf.LPD(77565, T, 'altKey').altKey = JSProf.LRSP(77565, JSProf.LRE(77564, b)), JSProf.LPD(77567, T, 'metaKey').metaKey = JSProf.LRSP(77567, JSProf.LRE(77566, E)), JSProf.LPD(77569, T, 'shiftKey').shiftKey = JSProf.LRSP(77569, JSProf.LRE(77568, w)), JSProf.LPD(77571, T, 'button').button = JSProf.LRSP(77571, JSProf.LRE(77570, S)), JSProf.LPD(77573, T, 'relatedTarget').relatedTarget = JSProf.LRSP(77573, JSProf.LRE(77572, x))), JSProf.LRE(77574, x) && !JSProf.LGD(77575, T, 'relatedTarget').relatedTarget && (JSProf.LRE(77576, f) === "mouseout" ? JSProf.LPD(77578, T, 'toElement').toElement = JSProf.LRSP(77578, JSProf.LRE(77577, x)) : JSProf.LRE(77579, f) === "mouseover" && (JSProf.LPD(77581, T, 'fromElement').fromElement = JSProf.LRSP(77581, JSProf.LRE(77580, x)))), t.dispatchEvent(JSProf.LRE(77582, T));
            else if (JSProf.LFC(77584, s, false)(JSProf.LGD(77583, e.config.doc, 'createEventObject').createEventObject)) {
                T = JSProf.LWR(77586, T, JSProf.LMC(77585, e.config.doc, 'createEventObject').createEventObject()), JSProf.LPD(77588, T, 'bubbles').bubbles = JSProf.LRSP(77588, JSProf.LRE(77587, l)), JSProf.LPD(77590, T, 'cancelable').cancelable = JSProf.LRSP(77590, JSProf.LRE(77589, c)), JSProf.LPD(77592, T, 'view').view = JSProf.LRSP(77592, JSProf.LRE(77591, h)), JSProf.LPD(77594, T, 'detail').detail = JSProf.LRSP(77594, JSProf.LRE(77593, p)), JSProf.LPD(77596, T, 'screenX').screenX = JSProf.LRSP(77596, JSProf.LRE(77595, d)), JSProf.LPD(77598, T, 'screenY').screenY = JSProf.LRSP(77598, JSProf.LRE(77597, v)), JSProf.LPD(77600, T, 'clientX').clientX = JSProf.LRSP(77600, JSProf.LRE(77599, m)), JSProf.LPD(77602, T, 'clientY').clientY = JSProf.LRSP(77602, JSProf.LRE(77601, g)), JSProf.LPD(77604, T, 'ctrlKey').ctrlKey = JSProf.LRSP(77604, JSProf.LRE(77603, y)), JSProf.LPD(77606, T, 'altKey').altKey = JSProf.LRSP(77606, JSProf.LRE(77605, b)), JSProf.LPD(77608, T, 'metaKey').metaKey = JSProf.LRSP(77608, JSProf.LRE(77607, E)), JSProf.LPD(77610, T, 'shiftKey').shiftKey = JSProf.LRSP(77610, JSProf.LRE(77609, w));
                switch (JSProf.LRE(77611, S)) {
                case 0:
                    JSProf.LPD(77612, T, 'button').button = JSProf.LRSP(77612, 1);
                    break;
                case 1:
                    JSProf.LPD(77613, T, 'button').button = JSProf.LRSP(77613, 4);
                    break;
                case 2:
                    break;
                default:
                    JSProf.LPD(77614, T, 'button').button = JSProf.LRSP(77614, 0);
                }
                JSProf.LPD(77616, T, 'relatedTarget').relatedTarget = JSProf.LRSP(77616, JSProf.LRE(77615, x)), JSProf.LMC(77619, t, 'fireEvent').fireEvent("on" + JSProf.LRE(77617, f), JSProf.LRE(77618, T));
            } else
                JSProf.LMC(77620, e, 'error').error("simulateMouseEvent(): No event simulation framework present.");
        }
        function m(t, u, a, f, h, p) {
            JSProf.LRE(77621, t) || JSProf.LMC(77622, e, 'error').error("simulateUIEvent(): Invalid target."), JSProf.LFC(77624, r, false)(JSProf.LRE(77623, u)) ? (u = JSProf.LWR(77625, u, u.toLowerCase()), JSProf.LGE(77626, l, 'u')[u] || JSProf.LMC(77628, e, 'error').error("simulateUIEvent(): Event type '" + JSProf.LRE(77627, u) + "' not supported.")) : JSProf.LMC(77629, e, 'error').error("simulateUIEvent(): Event type must be a string.");
            var d = null;
            JSProf.LFC(77631, i, false)(JSProf.LRE(77630, a)) || (a = JSProf.LWR(77634, a, JSProf.LRE(77632, u) in JSProf.LRE(77633, c))), JSProf.LFC(77636, i, false)(JSProf.LRE(77635, f)) || (f = JSProf.LWR(77638, f, JSProf.LRE(77637, u) === "submit")), JSProf.LFC(77640, s, false)(JSProf.LRE(77639, h)) || (h = JSProf.LWR(77642, h, JSProf.LGD(77641, e.config, 'win').win)), JSProf.LFC(77644, o, false)(JSProf.LRE(77643, p)) || (p = JSProf.LWR(77645, p, 1)), JSProf.LFC(77647, n, false)(JSProf.LGD(77646, e.config.doc, 'createEvent').createEvent) ? (d = JSProf.LWR(77649, d, JSProf.LMC(77648, e.config.doc, 'createEvent').createEvent("UIEvents")), JSProf.LMC(77655, d, 'initUIEvent').initUIEvent(JSProf.LRE(77650, u), JSProf.LRE(77651, a), JSProf.LRE(77652, f), JSProf.LRE(77653, h), JSProf.LRE(77654, p)), t.dispatchEvent(JSProf.LRE(77656, d))) : JSProf.LFC(77658, s, false)(JSProf.LGD(77657, e.config.doc, 'createEventObject').createEventObject) ? (d = JSProf.LWR(77660, d, JSProf.LMC(77659, e.config.doc, 'createEventObject').createEventObject()), JSProf.LPD(77662, d, 'bubbles').bubbles = JSProf.LRSP(77662, JSProf.LRE(77661, a)), JSProf.LPD(77664, d, 'cancelable').cancelable = JSProf.LRSP(77664, JSProf.LRE(77663, f)), JSProf.LPD(77666, d, 'view').view = JSProf.LRSP(77666, JSProf.LRE(77665, h)), JSProf.LPD(77668, d, 'detail').detail = JSProf.LRSP(77668, JSProf.LRE(77667, p)), JSProf.LMC(77671, t, 'fireEvent').fireEvent("on" + JSProf.LRE(77669, u), JSProf.LRE(77670, d))) : JSProf.LMC(77672, e, 'error').error("simulateUIEvent(): No event simulation framework present.");
        }
        function g(t, n, r, i, s, o, u, a, f, l, c, h, d, v, m, g) {
            var y;
            (!JSProf.LGD(77673, e.UA, 'ios').ios || JSProf.LGD(77674, e.UA, 'ios').ios < 2) && JSProf.LMC(77675, e, 'error').error("simulateGestureEvent(): Native gesture DOM eventframe is not available in this platform."), JSProf.LRE(77676, t) || JSProf.LMC(77677, e, 'error').error("simulateGestureEvent(): Invalid target."), JSProf.LMC(77679, e.Lang, 'isString').isString(JSProf.LRE(77678, n)) ? (n = JSProf.LWR(77680, n, n.toLowerCase()), JSProf.LGE(77681, p, 'n')[n] || JSProf.LMC(77683, e, 'error').error("simulateTouchEvent(): Event type '" + JSProf.LRE(77682, n) + "' not supported.")) : JSProf.LMC(77684, e, 'error').error("simulateGestureEvent(): Event type must be a string."), JSProf.LMC(77686, e.Lang, 'isBoolean').isBoolean(JSProf.LRE(77685, r)) || (r = JSProf.LWR(77687, r, !0)), JSProf.LMC(77689, e.Lang, 'isBoolean').isBoolean(JSProf.LRE(77688, i)) || (i = JSProf.LWR(77690, i, !0)), JSProf.LMC(77692, e.Lang, 'isObject').isObject(JSProf.LRE(77691, s)) || (s = JSProf.LWR(77694, s, JSProf.LGD(77693, e.config, 'win').win)), JSProf.LMC(77696, e.Lang, 'isNumber').isNumber(JSProf.LRE(77695, o)) || (o = JSProf.LWR(77697, o, 2)), JSProf.LMC(77699, e.Lang, 'isNumber').isNumber(JSProf.LRE(77698, u)) || (u = JSProf.LWR(77700, u, 0)), JSProf.LMC(77702, e.Lang, 'isNumber').isNumber(JSProf.LRE(77701, a)) || (a = JSProf.LWR(77703, a, 0)), JSProf.LMC(77705, e.Lang, 'isNumber').isNumber(JSProf.LRE(77704, f)) || (f = JSProf.LWR(77706, f, 0)), JSProf.LMC(77708, e.Lang, 'isNumber').isNumber(JSProf.LRE(77707, l)) || (l = JSProf.LWR(77709, l, 0)), JSProf.LMC(77711, e.Lang, 'isBoolean').isBoolean(JSProf.LRE(77710, c)) || (c = JSProf.LWR(77712, c, !1)), JSProf.LMC(77714, e.Lang, 'isBoolean').isBoolean(JSProf.LRE(77713, h)) || (h = JSProf.LWR(77715, h, !1)), JSProf.LMC(77717, e.Lang, 'isBoolean').isBoolean(JSProf.LRE(77716, d)) || (d = JSProf.LWR(77718, d, !1)), JSProf.LMC(77720, e.Lang, 'isBoolean').isBoolean(JSProf.LRE(77719, v)) || (v = JSProf.LWR(77721, v, !1)), JSProf.LMC(77723, e.Lang, 'isNumber').isNumber(JSProf.LRE(77722, m)) || (m = JSProf.LWR(77724, m, 1)), JSProf.LMC(77726, e.Lang, 'isNumber').isNumber(JSProf.LRE(77725, g)) || (g = JSProf.LWR(77727, g, 0)), y = JSProf.LWR(77729, y, JSProf.LMC(77728, e.config.doc, 'createEvent').createEvent("GestureEvent")), JSProf.LMC(77746, y, 'initGestureEvent').initGestureEvent(JSProf.LRE(77730, n), JSProf.LRE(77731, r), JSProf.LRE(77732, i), JSProf.LRE(77733, s), JSProf.LRE(77734, o), JSProf.LRE(77735, u), JSProf.LRE(77736, a), JSProf.LRE(77737, f), JSProf.LRE(77738, l), JSProf.LRE(77739, c), JSProf.LRE(77740, h), JSProf.LRE(77741, d), JSProf.LRE(77742, v), JSProf.LRE(77743, t), JSProf.LRE(77744, m), JSProf.LRE(77745, g)), t.dispatchEvent(JSProf.LRE(77747, y));
        }
        function y(t, n, r, i, s, o, u, a, f, l, c, p, d, v, m, g, y, b, w) {
            var E;
            JSProf.LRE(77748, t) || JSProf.LMC(77749, e, 'error').error("simulateTouchEvent(): Invalid target."), JSProf.LMC(77751, e.Lang, 'isString').isString(JSProf.LRE(77750, n)) ? (n = JSProf.LWR(77752, n, n.toLowerCase()), JSProf.LGE(77753, h, 'n')[n] || JSProf.LMC(77755, e, 'error').error("simulateTouchEvent(): Event type '" + JSProf.LRE(77754, n) + "' not supported.")) : JSProf.LMC(77756, e, 'error').error("simulateTouchEvent(): Event type must be a string."), JSProf.LRE(77757, n) === "touchstart" || JSProf.LRE(77758, n) === "touchmove" ? JSProf.LGD(77759, m, 'length').length === 0 && JSProf.LMC(77760, e, 'error').error("simulateTouchEvent(): No touch object in touches") : JSProf.LRE(77761, n) === "touchend" && JSProf.LGD(77762, y, 'length').length === 0 && JSProf.LMC(77763, e, 'error').error("simulateTouchEvent(): No touch object in changedTouches"), JSProf.LMC(77765, e.Lang, 'isBoolean').isBoolean(JSProf.LRE(77764, r)) || (r = JSProf.LWR(77766, r, !0)), JSProf.LMC(77768, e.Lang, 'isBoolean').isBoolean(JSProf.LRE(77767, i)) || (i = JSProf.LWR(77770, i, JSProf.LRE(77769, n) !== "touchcancel")), JSProf.LMC(77772, e.Lang, 'isObject').isObject(JSProf.LRE(77771, s)) || (s = JSProf.LWR(77774, s, JSProf.LGD(77773, e.config, 'win').win)), JSProf.LMC(77776, e.Lang, 'isNumber').isNumber(JSProf.LRE(77775, o)) || (o = JSProf.LWR(77777, o, 1)), JSProf.LMC(77779, e.Lang, 'isNumber').isNumber(JSProf.LRE(77778, u)) || (u = JSProf.LWR(77780, u, 0)), JSProf.LMC(77782, e.Lang, 'isNumber').isNumber(JSProf.LRE(77781, a)) || (a = JSProf.LWR(77783, a, 0)), JSProf.LMC(77785, e.Lang, 'isNumber').isNumber(JSProf.LRE(77784, f)) || (f = JSProf.LWR(77786, f, 0)), JSProf.LMC(77788, e.Lang, 'isNumber').isNumber(JSProf.LRE(77787, l)) || (l = JSProf.LWR(77789, l, 0)), JSProf.LMC(77791, e.Lang, 'isBoolean').isBoolean(JSProf.LRE(77790, c)) || (c = JSProf.LWR(77792, c, !1)), JSProf.LMC(77794, e.Lang, 'isBoolean').isBoolean(JSProf.LRE(77793, p)) || (p = JSProf.LWR(77795, p, !1)), JSProf.LMC(77797, e.Lang, 'isBoolean').isBoolean(JSProf.LRE(77796, d)) || (d = JSProf.LWR(77798, d, !1)), JSProf.LMC(77800, e.Lang, 'isBoolean').isBoolean(JSProf.LRE(77799, v)) || (v = JSProf.LWR(77801, v, !1)), JSProf.LMC(77803, e.Lang, 'isNumber').isNumber(JSProf.LRE(77802, b)) || (b = JSProf.LWR(77804, b, 1)), JSProf.LMC(77806, e.Lang, 'isNumber').isNumber(JSProf.LRE(77805, w)) || (w = JSProf.LWR(77807, w, 0)), JSProf.LMC(77809, e.Lang, 'isFunction').isFunction(JSProf.LGD(77808, e.config.doc, 'createEvent').createEvent) ? (JSProf.LGD(77810, e.UA, 'android').android ? JSProf.LGD(77811, e.UA, 'android').android < 4 ? (E = JSProf.LWR(77813, E, JSProf.LMC(77812, e.config.doc, 'createEvent').createEvent("MouseEvents")), JSProf.LMC(77828, E, 'initMouseEvent').initMouseEvent(JSProf.LRE(77814, n), JSProf.LRE(77815, r), JSProf.LRE(77816, i), JSProf.LRE(77817, s), JSProf.LRE(77818, o), JSProf.LRE(77819, u), JSProf.LRE(77820, a), JSProf.LRE(77821, f), JSProf.LRE(77822, l), JSProf.LRE(77823, c), JSProf.LRE(77824, p), JSProf.LRE(77825, d), JSProf.LRE(77826, v), 0, JSProf.LRE(77827, t)), JSProf.LPD(77830, E, 'touches').touches = JSProf.LRSP(77830, JSProf.LRE(77829, m)), JSProf.LPD(77832, E, 'targetTouches').targetTouches = JSProf.LRSP(77832, JSProf.LRE(77831, g)), JSProf.LPD(77834, E, 'changedTouches').changedTouches = JSProf.LRSP(77834, JSProf.LRE(77833, y))) : (E = JSProf.LWR(77836, E, JSProf.LMC(77835, e.config.doc, 'createEvent').createEvent("TouchEvent")), JSProf.LMC(77850, E, 'initTouchEvent').initTouchEvent(JSProf.LRE(77837, m), JSProf.LRE(77838, g), JSProf.LRE(77839, y), JSProf.LRE(77840, n), JSProf.LRE(77841, s), JSProf.LRE(77842, u), JSProf.LRE(77843, a), JSProf.LRE(77844, f), JSProf.LRE(77845, l), JSProf.LRE(77846, c), JSProf.LRE(77847, p), JSProf.LRE(77848, d), JSProf.LRE(77849, v))) : JSProf.LGD(77851, e.UA, 'ios').ios ? JSProf.LGD(77852, e.UA, 'ios').ios >= 2 ? (E = JSProf.LWR(77854, E, JSProf.LMC(77853, e.config.doc, 'createEvent').createEvent("TouchEvent")), JSProf.LMC(77873, E, 'initTouchEvent').initTouchEvent(JSProf.LRE(77855, n), JSProf.LRE(77856, r), JSProf.LRE(77857, i), JSProf.LRE(77858, s), JSProf.LRE(77859, o), JSProf.LRE(77860, u), JSProf.LRE(77861, a), JSProf.LRE(77862, f), JSProf.LRE(77863, l), JSProf.LRE(77864, c), JSProf.LRE(77865, p), JSProf.LRE(77866, d), JSProf.LRE(77867, v), JSProf.LRE(77868, m), JSProf.LRE(77869, g), JSProf.LRE(77870, y), JSProf.LRE(77871, b), JSProf.LRE(77872, w))) : JSProf.LMC(77875, e, 'error').error("simulateTouchEvent(): No touch event simulation framework present for iOS, " + JSProf.LGD(77874, e.UA, 'ios').ios + ".") : JSProf.LMC(77877, e, 'error').error("simulateTouchEvent(): Not supported agent yet, " + JSProf.LGD(77876, e.UA, 'userAgent').userAgent), t.dispatchEvent(JSProf.LRE(77878, E))) : JSProf.LMC(77879, e, 'error').error("simulateTouchEvent(): No event simulation framework present.");
        }
        var t = JSProf.LGD(77880, e, 'Lang').Lang, n = JSProf.LGD(77881, t, 'isFunction').isFunction, r = JSProf.LGD(77882, t, 'isString').isString, i = JSProf.LGD(77883, t, 'isBoolean').isBoolean, s = JSProf.LGD(77884, t, 'isObject').isObject, o = JSProf.LGD(77885, t, 'isNumber').isNumber, u = JSProf.LNE(77886, {
                click: 1,
                dblclick: 1,
                mouseover: 1,
                mouseout: 1,
                mousedown: 1,
                mouseup: 1,
                mousemove: 1,
                contextmenu: 1
            }, 11), a = JSProf.LNE(77887, {
                MSPointerOver: 1,
                MSPointerOut: 1,
                MSPointerDown: 1,
                MSPointerUp: 1,
                MSPointerMove: 1
            }, 11), f = JSProf.LNE(77888, {
                keydown: 1,
                keyup: 1,
                keypress: 1
            }, 11), l = JSProf.LNE(77889, {
                submit: 1,
                blur: 1,
                change: 1,
                focus: 1,
                resize: 1,
                scroll: 1,
                select: 1
            }, 11), c = JSProf.LNE(77890, {
                scroll: 1,
                resize: 1,
                reset: 1,
                submit: 1,
                change: 1,
                select: 1,
                error: 1,
                abort: 1
            }, 11), h = JSProf.LNE(77891, {
                touchstart: 1,
                touchmove: 1,
                touchend: 1,
                touchcancel: 1
            }, 11), p = JSProf.LNE(77892, {
                gesturestart: 1,
                gesturechange: 1,
                gestureend: 1
            }, 11);
        JSProf.LMC(77895, e, 'mix').mix(JSProf.LRE(77893, c), JSProf.LRE(77894, u)), JSProf.LMC(77898, e, 'mix').mix(JSProf.LRE(77896, c), JSProf.LRE(77897, f)), JSProf.LMC(77901, e, 'mix').mix(JSProf.LRE(77899, c), JSProf.LRE(77900, h)), JSProf.LPD(77996, e.Event, 'simulate').simulate = JSProf.LRSP(77996, JSProf.LNF(77995, function (t, n, r) {
            r = JSProf.LWR(77904, r, JSProf.LRE(77902, r) || JSProf.LNE(77903, {}, 11)), JSProf.LGE(77905, u, 'n')[n] || JSProf.LGE(77906, a, 'n')[n] ? JSProf.LFC(77923, v, false)(JSProf.LRE(77907, t), JSProf.LRE(77908, n), JSProf.LGD(77909, r, 'bubbles').bubbles, JSProf.LGD(77910, r, 'cancelable').cancelable, JSProf.LGD(77911, r, 'view').view, JSProf.LGD(77912, r, 'detail').detail, JSProf.LGD(77913, r, 'screenX').screenX, JSProf.LGD(77914, r, 'screenY').screenY, JSProf.LGD(77915, r, 'clientX').clientX, JSProf.LGD(77916, r, 'clientY').clientY, JSProf.LGD(77917, r, 'ctrlKey').ctrlKey, JSProf.LGD(77918, r, 'altKey').altKey, JSProf.LGD(77919, r, 'shiftKey').shiftKey, JSProf.LGD(77920, r, 'metaKey').metaKey, JSProf.LGD(77921, r, 'button').button, JSProf.LGD(77922, r, 'relatedTarget').relatedTarget) : JSProf.LGE(77924, f, 'n')[n] ? JSProf.LFC(77936, d, false)(JSProf.LRE(77925, t), JSProf.LRE(77926, n), JSProf.LGD(77927, r, 'bubbles').bubbles, JSProf.LGD(77928, r, 'cancelable').cancelable, JSProf.LGD(77929, r, 'view').view, JSProf.LGD(77930, r, 'ctrlKey').ctrlKey, JSProf.LGD(77931, r, 'altKey').altKey, JSProf.LGD(77932, r, 'shiftKey').shiftKey, JSProf.LGD(77933, r, 'metaKey').metaKey, JSProf.LGD(77934, r, 'keyCode').keyCode, JSProf.LGD(77935, r, 'charCode').charCode) : JSProf.LGE(77937, l, 'n')[n] ? JSProf.LFC(77944, m, false)(JSProf.LRE(77938, t), JSProf.LRE(77939, n), JSProf.LGD(77940, r, 'bubbles').bubbles, JSProf.LGD(77941, r, 'cancelable').cancelable, JSProf.LGD(77942, r, 'view').view, JSProf.LGD(77943, r, 'detail').detail) : JSProf.LGE(77945, h, 'n')[n] ? JSProf.LGD(77946, e.config, 'win').win && "ontouchstart" in JSProf.LGD(77947, e.config, 'win').win && !JSProf.LGD(77948, e.UA, 'phantomjs').phantomjs && !(JSProf.LGD(77949, e.UA, 'chrome').chrome && JSProf.LGD(77950, e.UA, 'chrome').chrome < 6) ? JSProf.LFC(77970, y, false)(JSProf.LRE(77951, t), JSProf.LRE(77952, n), JSProf.LGD(77953, r, 'bubbles').bubbles, JSProf.LGD(77954, r, 'cancelable').cancelable, JSProf.LGD(77955, r, 'view').view, JSProf.LGD(77956, r, 'detail').detail, JSProf.LGD(77957, r, 'screenX').screenX, JSProf.LGD(77958, r, 'screenY').screenY, JSProf.LGD(77959, r, 'clientX').clientX, JSProf.LGD(77960, r, 'clientY').clientY, JSProf.LGD(77961, r, 'ctrlKey').ctrlKey, JSProf.LGD(77962, r, 'altKey').altKey, JSProf.LGD(77963, r, 'shiftKey').shiftKey, JSProf.LGD(77964, r, 'metaKey').metaKey, JSProf.LGD(77965, r, 'touches').touches, JSProf.LGD(77966, r, 'targetTouches').targetTouches, JSProf.LGD(77967, r, 'changedTouches').changedTouches, JSProf.LGD(77968, r, 'scale').scale, JSProf.LGD(77969, r, 'rotation').rotation) : JSProf.LMC(77972, e, 'error').error("simulate(): Event '" + JSProf.LRE(77971, n) + "' can't be simulated. Use gesture-simulate module instead.") : JSProf.LGD(77973, e.UA, 'ios').ios && JSProf.LGD(77974, e.UA, 'ios').ios >= 2 && JSProf.LGE(77975, p, 'n')[n] ? JSProf.LFC(77992, g, false)(JSProf.LRE(77976, t), JSProf.LRE(77977, n), JSProf.LGD(77978, r, 'bubbles').bubbles, JSProf.LGD(77979, r, 'cancelable').cancelable, JSProf.LGD(77980, r, 'view').view, JSProf.LGD(77981, r, 'detail').detail, JSProf.LGD(77982, r, 'screenX').screenX, JSProf.LGD(77983, r, 'screenY').screenY, JSProf.LGD(77984, r, 'clientX').clientX, JSProf.LGD(77985, r, 'clientY').clientY, JSProf.LGD(77986, r, 'ctrlKey').ctrlKey, JSProf.LGD(77987, r, 'altKey').altKey, JSProf.LGD(77988, r, 'shiftKey').shiftKey, JSProf.LGD(77989, r, 'metaKey').metaKey, JSProf.LGD(77990, r, 'scale').scale, JSProf.LGD(77991, r, 'rotation').rotation) : JSProf.LMC(77994, e, 'error').error("simulate(): Event '" + JSProf.LRE(77993, n) + "' can't be simulated.");
        }, 12));
    }, 12), false)();
}, 12), "3.14.1", JSProf.LNE(78006, { requires: JSProf.LNE(78005, ["event-base"], 10) }, 11));
/*
YUI 3.14.1 (build 63049cb)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
JSProf.LMC(78230, YUI, 'add').add("async-queue", JSProf.LNF(78227, function (e, t) {
    JSProf.LPD(78011, e, 'AsyncQueue').AsyncQueue = JSProf.LRSP(78011, JSProf.LNF(78010, function () {
        JSProf.LMC(78008, this, '_init')._init(), JSProf.LMC(78009, this.add, 'apply').apply(this, arguments);
    }, 12));
    var n = JSProf.LGD(78012, e, 'AsyncQueue').AsyncQueue, r = "execute", i = "shift", s = "promote", o = "remove", u = JSProf.LGD(78013, e.Lang, 'isObject').isObject, a = JSProf.LGD(78014, e.Lang, 'isFunction').isFunction;
    JSProf.LPD(78021, n, 'defaults').defaults = JSProf.LRSP(78021, JSProf.LMC(78020, e, 'mix').mix(JSProf.LNE(78017, {
        autoContinue: !0,
        iterations: 1,
        timeout: 10,
        until: JSProf.LNF(78016, function () {
            return this.iterations |= 0, JSProf.LGD(78015, this, 'iterations').iterations <= 0;
        }, 12)
    }, 11), JSProf.LGD(78018, e.config, 'queueDefaults').queueDefaults || JSProf.LNE(78019, {}, 11))), JSProf.LMC(78226, e, 'extend').extend(JSProf.LRE(78022, n), JSProf.LGD(78023, e, 'EventTarget').EventTarget, JSProf.LNE(78225, {
        _running: !1,
        _init: JSProf.LNF(78031, function () {
            JSProf.LMC(78025, e.EventTarget, 'call').call(this, JSProf.LNE(78024, {
                prefix: "queue",
                emitFacade: !0
            }, 11)), JSProf.LPD(78027, this, '_q')._q = JSProf.LRSP(78027, JSProf.LNE(78026, [], 10)), JSProf.LPD(78029, this, 'defaults').defaults = JSProf.LRSP(78029, JSProf.LNE(78028, {}, 11)), JSProf.LMC(78030, this, '_initEvents')._initEvents();
        }, 12),
        _initEvents: JSProf.LNF(78039, function () {
            JSProf.LMC(78038, this, 'publish').publish(JSProf.LNE(78037, {
                execute: JSProf.LNE(78032, {
                    defaultFn: this._defExecFn,
                    emitFacade: !0
                }, 11),
                shift: JSProf.LNE(78033, {
                    defaultFn: this._defShiftFn,
                    emitFacade: !0
                }, 11),
                add: JSProf.LNE(78034, {
                    defaultFn: this._defAddFn,
                    emitFacade: !0
                }, 11),
                promote: JSProf.LNE(78035, {
                    defaultFn: this._defPromoteFn,
                    emitFacade: !0
                }, 11),
                remove: JSProf.LNE(78036, {
                    defaultFn: this._defRemoveFn,
                    emitFacade: !0
                }, 11)
            }, 11));
        }, 12),
        next: JSProf.LNF(78051, function () {
            var e;
            while (JSProf.LGD(78040, this._q, 'length').length) {
                e = JSProf.LWR(78044, e, JSProf.LPE(78043, this._q, 0)[0] = JSProf.LRPE(78043, JSProf.LMC(78042, this, '_prepare')._prepare(JSProf.LGE(78041, this._q, 0)[0])));
                if (!JSProf.LRE(78045, e) || !JSProf.LMC(78046, e, 'until').until())
                    break;
                JSProf.LMC(78049, this, 'fire').fire(JSProf.LRE(78047, i), JSProf.LNE(78048, { callback: e }, 11)), e = null;
            }
            return JSProf.LRE(78050, e) || null;
        }, 12),
        _defShiftFn: JSProf.LNF(78055, function (e) {
            JSProf.LMC(78053, this, 'indexOf').indexOf(JSProf.LGD(78052, e, 'callback').callback) === 0 && JSProf.LMC(78054, this._q, 'shift').shift();
        }, 12),
        _prepare: JSProf.LNF(78081, function (t) {
            if (JSProf.LFC(78057, a, false)(JSProf.LRE(78056, t)) && JSProf.LGD(78058, t, '_prepared')._prepared)
                return JSProf.LRE(78059, t);
            var r = JSProf.LMC(78068, e, 'merge').merge(JSProf.LGD(78060, n, 'defaults').defaults, JSProf.LNE(78062, {
                    context: this,
                    args: JSProf.LNE(78061, [], 10),
                    _prepared: !0
                }, 11), JSProf.LGD(78063, this, 'defaults').defaults, JSProf.LFC(78065, a, false)(JSProf.LRE(78064, t)) ? JSProf.LNE(78066, { fn: t }, 11) : JSProf.LRE(78067, t)), i = e.bind(JSProf.LNF(78077, function () {
                    JSProf.LGD(78069, i, '_running')._running || i.iterations--, JSProf.LFC(78071, a, false)(JSProf.LGD(78070, i, 'fn').fn) && JSProf.LMC(78076, i.fn, 'apply').apply(JSProf.LGD(78072, i, 'context').context || JSProf.LRE(78073, e), JSProf.LMC(78075, e, 'Array').Array(JSProf.LGD(78074, i, 'args').args));
                }, 12), this);
            return JSProf.LMC(78080, e, 'mix').mix(JSProf.LRE(78078, i), JSProf.LRE(78079, r));
        }, 12),
        run: JSProf.LNF(78099, function () {
            var e, t = !0;
            if (JSProf.LGD(78082, this, '_executing')._executing)
                return JSProf.LPD(78083, this, '_running')._running = JSProf.LRSP(78083, !0), this;
            for (e = JSProf.LWR(78085, e, JSProf.LMC(78084, this, 'next').next()); JSProf.LRE(78086, e) && !JSProf.LMC(78087, this, 'isRunning').isRunning(); e = JSProf.LWR(78089, e, JSProf.LMC(78088, this, 'next').next())) {
                t = JSProf.LWR(78095, t, JSProf.LGD(78090, e, 'timeout').timeout < 0 ? JSProf.LMC(78092, this, '_execute')._execute(JSProf.LRE(78091, e)) : JSProf.LMC(78094, this, '_schedule')._schedule(JSProf.LRE(78093, e)));
                if (!JSProf.LRE(78096, t))
                    break;
            }
            return JSProf.LRE(78097, e) || JSProf.LMC(78098, this, 'fire').fire("complete"), this;
        }, 12),
        _execute: JSProf.LNF(78113, function (e) {
            JSProf.LPD(78101, this, '_running')._running = JSProf.LRSP(78101, JSProf.LPD(78100, e, '_running')._running = JSProf.LRSP(78100, !0)), JSProf.LPD(78103, this, '_executing')._executing = JSProf.LRSP(78103, JSProf.LRE(78102, e)), e.iterations--, JSProf.LMC(78106, this, 'fire').fire(JSProf.LRE(78104, r), JSProf.LNE(78105, { callback: e }, 11));
            var t = JSProf.LGD(78107, this, '_running')._running && JSProf.LGD(78108, e, 'autoContinue').autoContinue;
            return JSProf.LPD(78110, this, '_running')._running = JSProf.LRSP(78110, JSProf.LPD(78109, e, '_running')._running = JSProf.LRSP(78109, !1)), JSProf.LPD(78111, this, '_executing')._executing = JSProf.LRSP(78111, !1), JSProf.LRE(78112, t);
        }, 12),
        _schedule: JSProf.LNF(78121, function (t) {
            return JSProf.LPD(78120, this, '_running')._running = JSProf.LRSP(78120, JSProf.LMC(78119, e, 'later').later(JSProf.LGD(78114, t, 'timeout').timeout, this, JSProf.LNF(78118, function () {
                JSProf.LMC(78116, this, '_execute')._execute(JSProf.LRE(78115, t)) && JSProf.LMC(78117, this, 'run').run();
            }, 12))), !1;
        }, 12),
        isRunning: JSProf.LNF(78123, function () {
            return !!JSProf.LGD(78122, this, '_running')._running;
        }, 12),
        _defExecFn: JSProf.LNF(78125, function (e) {
            JSProf.LMC(78124, e, 'callback').callback();
        }, 12),
        add: JSProf.LNF(78129, function () {
            return JSProf.LMC(78128, this, 'fire').fire("add", JSProf.LNE(78127, { callbacks: JSProf.LMC(78126, e, 'Array').Array(arguments, 0, !0) }, 11)), this;
        }, 12),
        _defAddFn: JSProf.LNF(78143, function (t) {
            var n = JSProf.LGD(78130, this, '_q')._q, r = JSProf.LNE(78131, [], 10);
            JSProf.LMC(78140, e.Array, 'each').each(JSProf.LGD(78132, t, 'callbacks').callbacks, JSProf.LNF(78139, function (e) {
                JSProf.LFC(78134, u, false)(JSProf.LRE(78133, e)) && (JSProf.LMC(78136, n, 'push').push(JSProf.LRE(78135, e)), JSProf.LMC(78138, r, 'push').push(JSProf.LRE(78137, e)));
            }, 12)), JSProf.LPD(78142, t, 'added').added = JSProf.LRSP(78142, JSProf.LRE(78141, r));
        }, 12),
        pause: JSProf.LNF(78149, function () {
            return JSProf.LGD(78144, this, '_running')._running && JSProf.LFC(78146, u, false)(JSProf.LGD(78145, this, '_running')._running) && JSProf.LMC(78147, this._running, 'cancel').cancel(), JSProf.LPD(78148, this, '_running')._running = JSProf.LRSP(78148, !1), this;
        }, 12),
        stop: JSProf.LNF(78157, function () {
            return JSProf.LPD(78151, this, '_q')._q = JSProf.LRSP(78151, JSProf.LNE(78150, [], 10)), JSProf.LGD(78152, this, '_running')._running && JSProf.LFC(78154, u, false)(JSProf.LGD(78153, this, '_running')._running) && (JSProf.LMC(78155, this._running, 'cancel').cancel(), JSProf.LPD(78156, this, '_running')._running = JSProf.LRSP(78156, !1)), this;
        }, 12),
        indexOf: JSProf.LNF(78168, function (e) {
            var t = 0, n = JSProf.LGD(78158, this._q, 'length').length, r;
            for (; JSProf.LRE(78159, t) < JSProf.LRE(78160, n); ++t) {
                r = JSProf.LWR(78162, r, JSProf.LGE(78161, this._q, 't')[t]);
                if (JSProf.LRE(78163, r) === JSProf.LRE(78164, e) || JSProf.LGD(78165, r, 'id').id === JSProf.LRE(78166, e))
                    return JSProf.LRE(78167, t);
            }
            return -1;
        }, 12),
        getCallback: JSProf.LNF(78173, function (e) {
            var t = JSProf.LMC(78170, this, 'indexOf').indexOf(JSProf.LRE(78169, e));
            return JSProf.LRE(78171, t) > -1 ? JSProf.LGE(78172, this._q, 't')[t] : null;
        }, 12),
        promote: JSProf.LNF(78187, function (e) {
            var t = JSProf.LNE(78174, { callback: e }, 11), n;
            return JSProf.LMC(78175, this, 'isRunning').isRunning() ? n = JSProf.LWR(78183, n, JSProf.LMC(78182, this, 'after').after(JSProf.LRE(78176, i), JSProf.LNF(78181, function () {
                JSProf.LMC(78179, this, 'fire').fire(JSProf.LRE(78177, s), JSProf.LRE(78178, t)), JSProf.LMC(78180, n, 'detach').detach();
            }, 12), this)) : JSProf.LMC(78186, this, 'fire').fire(JSProf.LRE(78184, s), JSProf.LRE(78185, t)), this;
        }, 12),
        _defPromoteFn: JSProf.LNF(78198, function (e) {
            var t = JSProf.LMC(78189, this, 'indexOf').indexOf(JSProf.LGD(78188, e, 'callback').callback), n = JSProf.LRE(78190, t) > -1 ? JSProf.LGE(78193, JSProf.LMC(78192, this._q, 'splice').splice(JSProf.LRE(78191, t), 1), 0)[0] : null;
            JSProf.LPD(78195, e, 'promoted').promoted = JSProf.LRSP(78195, JSProf.LRE(78194, n)), JSProf.LRE(78196, n) && this._q.unshift(JSProf.LRE(78197, n));
        }, 12),
        remove: JSProf.LNF(78212, function (e) {
            var t = JSProf.LNE(78199, { callback: e }, 11), n;
            return JSProf.LMC(78200, this, 'isRunning').isRunning() ? n = JSProf.LWR(78208, n, JSProf.LMC(78207, this, 'after').after(JSProf.LRE(78201, i), JSProf.LNF(78206, function () {
                JSProf.LMC(78204, this, 'fire').fire(JSProf.LRE(78202, o), JSProf.LRE(78203, t)), JSProf.LMC(78205, n, 'detach').detach();
            }, 12), this)) : JSProf.LMC(78211, this, 'fire').fire(JSProf.LRE(78209, o), JSProf.LRE(78210, t)), this;
        }, 12),
        _defRemoveFn: JSProf.LNF(78220, function (e) {
            var t = JSProf.LMC(78214, this, 'indexOf').indexOf(JSProf.LGD(78213, e, 'callback').callback);
            JSProf.LPD(78219, e, 'removed').removed = JSProf.LRSP(78219, JSProf.LRE(78215, t) > -1 ? JSProf.LGE(78218, JSProf.LMC(78217, this._q, 'splice').splice(JSProf.LRE(78216, t), 1), 0)[0] : null);
        }, 12),
        size: JSProf.LNF(78224, function () {
            return JSProf.LMC(78221, this, 'isRunning').isRunning() || JSProf.LMC(78222, this, 'next').next(), JSProf.LGD(78223, this._q, 'length').length;
        }, 12)
    }, 11));
}, 12), "3.14.1", JSProf.LNE(78229, { requires: JSProf.LNE(78228, ["event-custom"], 10) }, 11));
/*
YUI 3.14.1 (build 63049cb)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
JSProf.LMC(79117, YUI, 'add').add("gesture-simulate", JSProf.LNF(79114, function (e, t) {
    JSProf.LFD(79113, T);
    function T(n) {
        JSProf.LRE(78231, n) || JSProf.LMC(78233, e, 'error').error(JSProf.LRE(78232, t) + ": invalid target node"), JSProf.LPD(78235, this, 'node').node = JSProf.LRSP(78235, JSProf.LRE(78234, n)), JSProf.LPD(78238, this, 'target').target = JSProf.LRSP(78238, JSProf.LMC(78237, e.Node, 'getDOMNode').getDOMNode(JSProf.LRE(78236, n)));
        var r = JSProf.LMC(78239, this.node, 'getXY').getXY(), i = JSProf.LMC(78240, this, '_getDims')._getDims();
        a = JSProf.LWR(78243, a, JSProf.LGE(78241, r, 0)[0] + JSProf.LGE(78242, i, 0)[0] / 2), f = JSProf.LWR(78246, f, JSProf.LGE(78244, r, 1)[1] + JSProf.LGE(78245, i, 1)[1] / 2);
    }
    var t = "gesture-simulate", n = JSProf.LGD(78247, e.config, 'win').win && "ontouchstart" in JSProf.LGD(78248, e.config, 'win').win && !JSProf.LGD(78249, e.UA, 'phantomjs').phantomjs && !(JSProf.LGD(78250, e.UA, 'chrome').chrome && JSProf.LGD(78251, e.UA, 'chrome').chrome < 6), r = JSProf.LNE(78252, {
            tap: 1,
            doubletap: 1,
            press: 1,
            move: 1,
            flick: 1,
            pinch: 1,
            rotate: 1
        }, 11), i = JSProf.LNE(78253, {
            touchstart: 1,
            touchmove: 1,
            touchend: 1,
            touchcancel: 1
        }, 11), s = JSProf.LGD(78254, e.config, 'doc').doc, o, u = 20, a, f, l = JSProf.LNE(78255, {
            HOLD_TAP: 10,
            DELAY_TAP: 10,
            HOLD_PRESS: 3e3,
            MIN_HOLD_PRESS: 1e3,
            MAX_HOLD_PRESS: 6e4,
            DISTANCE_MOVE: 200,
            DURATION_MOVE: 1e3,
            MAX_DURATION_MOVE: 5e3,
            MIN_VELOCITY_FLICK: 1.3,
            DISTANCE_FLICK: 200,
            DURATION_FLICK: 1e3,
            MAX_DURATION_FLICK: 5e3,
            DURATION_PINCH: 1e3
        }, 11), c = "touchstart", h = "touchmove", p = "touchend", d = "gesturestart", v = "gesturechange", m = "gestureend", g = "mouseup", y = "mousemove", b = "mousedown", w = "click", E = "dblclick", S = "x", x = "y";
    JSProf.LPD(79031, T, 'prototype').prototype = JSProf.LRSP(79031, JSProf.LNE(79030, {
        _toRadian: JSProf.LNF(78258, function (e) {
            return JSProf.LRE(78256, e) * (JSProf.LGD(78257, Math, 'PI').PI / 180);
        }, 12),
        _getDims: JSProf.LNF(78285, function () {
            var e, t, n;
            return JSProf.LGD(78259, this.target, 'getBoundingClientRect').getBoundingClientRect ? (e = JSProf.LWR(78261, e, JSProf.LMC(78260, this.target, 'getBoundingClientRect').getBoundingClientRect()), "height" in JSProf.LRE(78262, e) ? n = JSProf.LWR(78264, n, JSProf.LGD(78263, e, 'height').height) : n = JSProf.LWR(78268, n, JSProf.LMC(78267, Math, 'abs').abs(JSProf.LGD(78265, e, 'bottom').bottom - JSProf.LGD(78266, e, 'top').top)), "width" in JSProf.LRE(78269, e) ? t = JSProf.LWR(78271, t, JSProf.LGD(78270, e, 'width').width) : t = JSProf.LWR(78275, t, JSProf.LMC(78274, Math, 'abs').abs(JSProf.LGD(78272, e, 'right').right - JSProf.LGD(78273, e, 'left').left))) : (e = JSProf.LWR(78277, e, JSProf.LMC(78276, this.node, 'get').get("region")), t = JSProf.LWR(78279, t, JSProf.LGD(78278, e, 'width').width), n = JSProf.LWR(78281, n, JSProf.LGD(78280, e, 'height').height)), JSProf.LNE(78284, [
                JSProf.LRE(78282, t),
                JSProf.LRE(78283, n)
            ], 10);
        }, 12),
        _calculateDefaultPoint: JSProf.LNF(78305, function (t) {
            var n;
            return !JSProf.LMC(78287, e.Lang, 'isArray').isArray(JSProf.LRE(78286, t)) || JSProf.LGD(78288, t, 'length').length === 0 ? t = JSProf.LWR(78292, t, JSProf.LNE(78291, [
                JSProf.LRE(78289, a),
                JSProf.LRE(78290, f)
            ], 10)) : (JSProf.LGD(78293, t, 'length').length == 1 && (n = JSProf.LWR(78295, n, JSProf.LGE(78294, this._getDims, 1)[1]), JSProf.LPE(78297, t, 1)[1] = JSProf.LRPE(78297, JSProf.LRE(78296, n) / 2)), JSProf.LPE(78300, t, 0)[0] = JSProf.LRPE(78300, JSProf.LMC(78298, this.node, 'getX').getX() + JSProf.LGE(78299, t, 0)[0]), JSProf.LPE(78303, t, 1)[1] = JSProf.LRPE(78303, JSProf.LMC(78301, this.node, 'getY').getY() + JSProf.LGE(78302, t, 1)[1])), JSProf.LRE(78304, t);
        }, 12),
        rotate: JSProf.LNF(78335, function (n, r, i, s, o, u, a) {
            var f, l = JSProf.LRE(78306, i), c = JSProf.LRE(78307, s);
            if (!JSProf.LMC(78309, e.Lang, 'isNumber').isNumber(JSProf.LRE(78308, l)) || !JSProf.LMC(78311, e.Lang, 'isNumber').isNumber(JSProf.LRE(78310, c)) || JSProf.LRE(78312, l) < 0 || JSProf.LRE(78313, c) < 0)
                f = JSProf.LWR(78318, f, JSProf.LGD(78314, this.target, 'offsetWidth').offsetWidth < JSProf.LGD(78315, this.target, 'offsetHeight').offsetHeight ? JSProf.LGD(78316, this.target, 'offsetWidth').offsetWidth / 4 : JSProf.LGD(78317, this.target, 'offsetHeight').offsetHeight / 4), l = JSProf.LWR(78320, l, JSProf.LRE(78319, f)), c = JSProf.LWR(78322, c, JSProf.LRE(78321, f));
            JSProf.LMC(78324, e.Lang, 'isNumber').isNumber(JSProf.LRE(78323, a)) || JSProf.LMC(78326, e, 'error').error(JSProf.LRE(78325, t) + "Invalid rotation detected."), JSProf.LMC(78334, this, 'pinch').pinch(JSProf.LRE(78327, n), JSProf.LRE(78328, r), JSProf.LRE(78329, l), JSProf.LRE(78330, c), JSProf.LRE(78331, o), JSProf.LRE(78332, u), JSProf.LRE(78333, a));
        }, 12),
        pinch: JSProf.LNF(78614, function (n, r, i, s, o, a, f) {
            var g, y, b = JSProf.LRE(78336, u), w, E = 0, S = JSProf.LRE(78337, i), x = JSProf.LRE(78338, s), T, N, C, k, L, A, O, M, _, D = JSProf.LNE(78341, {
                    start: JSProf.LNE(78339, [], 10),
                    end: JSProf.LNE(78340, [], 10)
                }, 11), P = JSProf.LNE(78344, {
                    start: JSProf.LNE(78342, [], 10),
                    end: JSProf.LNE(78343, [], 10)
                }, 11), H, B;
            r = JSProf.LWR(78347, r, JSProf.LMC(78346, this, '_calculateDefaultPoint')._calculateDefaultPoint(JSProf.LRE(78345, r))), (!JSProf.LMC(78349, e.Lang, 'isNumber').isNumber(JSProf.LRE(78348, S)) || !JSProf.LMC(78351, e.Lang, 'isNumber').isNumber(JSProf.LRE(78350, x)) || JSProf.LRE(78352, S) < 0 || JSProf.LRE(78353, x) < 0) && JSProf.LMC(78355, e, 'error').error(JSProf.LRE(78354, t) + "Invalid startRadius and endRadius detected.");
            if (!JSProf.LMC(78357, e.Lang, 'isNumber').isNumber(JSProf.LRE(78356, o)) || JSProf.LRE(78358, o) <= 0)
                o = JSProf.LWR(78360, o, JSProf.LGD(78359, l, 'DURATION_PINCH').DURATION_PINCH);
            if (!JSProf.LMC(78362, e.Lang, 'isNumber').isNumber(JSProf.LRE(78361, a)))
                a = JSProf.LWR(78363, a, 0);
            else {
                a %= 360;
                while (JSProf.LRE(78364, a) < 0)
                    a += 360;
            }
            JSProf.LMC(78366, e.Lang, 'isNumber').isNumber(JSProf.LRE(78365, f)) || (f = JSProf.LWR(78367, f, 0)), JSProf.LPD(78369, e.AsyncQueue.defaults, 'timeout').timeout = JSProf.LRSP(78369, JSProf.LRE(78368, b)), g = JSProf.LWR(78372, g, JSProf.LNE(78371, new (JSProf.LMC(78370, e, 'AsyncQueue')).AsyncQueue(), 40)), N = JSProf.LWR(78374, N, JSProf.LGE(78373, r, 0)[0]), C = JSProf.LWR(78376, C, JSProf.LGE(78375, r, 1)[1]), O = JSProf.LWR(78378, O, JSProf.LRE(78377, a)), M = JSProf.LWR(78381, M, JSProf.LRE(78379, a) + JSProf.LRE(78380, f)), JSProf.LPD(78393, D, 'start').start = JSProf.LRSP(78393, JSProf.LNE(78392, [
                JSProf.LRE(78382, N) + JSProf.LRE(78383, S) * JSProf.LMC(78386, Math, 'sin').sin(JSProf.LMC(78385, this, '_toRadian')._toRadian(JSProf.LRE(78384, O))),
                JSProf.LRE(78387, C) - JSProf.LRE(78388, S) * JSProf.LMC(78391, Math, 'cos').cos(JSProf.LMC(78390, this, '_toRadian')._toRadian(JSProf.LRE(78389, O)))
            ], 10)), JSProf.LPD(78405, D, 'end').end = JSProf.LRSP(78405, JSProf.LNE(78404, [
                JSProf.LRE(78394, N) + JSProf.LRE(78395, x) * JSProf.LMC(78398, Math, 'sin').sin(JSProf.LMC(78397, this, '_toRadian')._toRadian(JSProf.LRE(78396, M))),
                JSProf.LRE(78399, C) - JSProf.LRE(78400, x) * JSProf.LMC(78403, Math, 'cos').cos(JSProf.LMC(78402, this, '_toRadian')._toRadian(JSProf.LRE(78401, M)))
            ], 10)), JSProf.LPD(78417, P, 'start').start = JSProf.LRSP(78417, JSProf.LNE(78416, [
                JSProf.LRE(78406, N) - JSProf.LRE(78407, S) * JSProf.LMC(78410, Math, 'sin').sin(JSProf.LMC(78409, this, '_toRadian')._toRadian(JSProf.LRE(78408, O))),
                JSProf.LRE(78411, C) + JSProf.LRE(78412, S) * JSProf.LMC(78415, Math, 'cos').cos(JSProf.LMC(78414, this, '_toRadian')._toRadian(JSProf.LRE(78413, O)))
            ], 10)), JSProf.LPD(78429, P, 'end').end = JSProf.LRSP(78429, JSProf.LNE(78428, [
                JSProf.LRE(78418, N) - JSProf.LRE(78419, x) * JSProf.LMC(78422, Math, 'sin').sin(JSProf.LMC(78421, this, '_toRadian')._toRadian(JSProf.LRE(78420, M))),
                JSProf.LRE(78423, C) + JSProf.LRE(78424, x) * JSProf.LMC(78427, Math, 'cos').cos(JSProf.LMC(78426, this, '_toRadian')._toRadian(JSProf.LRE(78425, M)))
            ], 10)), k = JSProf.LWR(78430, k, 1), L = JSProf.LWR(78433, L, JSProf.LRE(78431, s) / JSProf.LRE(78432, i)), JSProf.LMC(78472, g, 'add').add(JSProf.LNE(78471, {
                fn: JSProf.LNF(78470, function () {
                    var t, n, r, i;
                    t = JSProf.LWR(78435, t, JSProf.LNE(78434, {
                        pageX: D.start[0],
                        pageY: D.start[1],
                        clientX: D.start[0],
                        clientY: D.start[1]
                    }, 11)), n = JSProf.LWR(78437, n, JSProf.LNE(78436, {
                        pageX: P.start[0],
                        pageY: P.start[1],
                        clientX: P.start[0],
                        clientY: P.start[1]
                    }, 11)), i = JSProf.LWR(78446, i, JSProf.LMC(78445, this, '_createTouchList')._createTouchList(JSProf.LNE(78444, [
                        JSProf.LMC(78440, e, 'merge').merge(JSProf.LNE(78438, { identifier: E++ }, 11), JSProf.LRE(78439, t)),
                        JSProf.LMC(78443, e, 'merge').merge(JSProf.LNE(78441, { identifier: E++ }, 11), JSProf.LRE(78442, n))
                    ], 10))), r = JSProf.LWR(78456, r, JSProf.LNE(78455, {
                        pageX: (JSProf.LGE(78447, D.start, 0)[0] + JSProf.LGE(78448, P.start, 0)[0]) / 2,
                        pageY: (JSProf.LGE(78449, D.start, 0)[0] + JSProf.LGE(78450, P.start, 1)[1]) / 2,
                        clientX: (JSProf.LGE(78451, D.start, 0)[0] + JSProf.LGE(78452, P.start, 0)[0]) / 2,
                        clientY: (JSProf.LGE(78453, D.start, 0)[0] + JSProf.LGE(78454, P.start, 1)[1]) / 2
                    }, 11)), JSProf.LMC(78462, this, '_simulateEvent')._simulateEvent(JSProf.LGD(78457, this, 'target').target, JSProf.LRE(78458, c), JSProf.LMC(78461, e, 'merge').merge(JSProf.LNE(78459, {
                        touches: i,
                        targetTouches: i,
                        changedTouches: i,
                        scale: k,
                        rotation: O
                    }, 11), JSProf.LRE(78460, r))), JSProf.LGD(78463, e.UA, 'ios').ios >= 2 && JSProf.LMC(78469, this, '_simulateEvent')._simulateEvent(JSProf.LGD(78464, this, 'target').target, JSProf.LRE(78465, d), JSProf.LMC(78468, e, 'merge').merge(JSProf.LNE(78466, {
                        scale: k,
                        rotation: O
                    }, 11), JSProf.LRE(78467, r)));
                }, 12),
                timeout: 0,
                context: this
            }, 11)), H = JSProf.LWR(78475, H, Math.floor(JSProf.LRE(78473, o) / JSProf.LRE(78474, b))), T = JSProf.LWR(78479, T, (JSProf.LRE(78476, x) - JSProf.LRE(78477, S)) / JSProf.LRE(78478, H)), A = JSProf.LWR(78483, A, (JSProf.LRE(78480, L) - JSProf.LRE(78481, k)) / JSProf.LRE(78482, H)), _ = JSProf.LWR(78487, _, (JSProf.LRE(78484, M) - JSProf.LRE(78485, O)) / JSProf.LRE(78486, H)), B = JSProf.LWR(78560, B, JSProf.LNF(78559, function (t) {
                var n = JSProf.LRE(78488, S) + JSProf.LRE(78489, T) * JSProf.LRE(78490, t), r = JSProf.LRE(78491, N) + JSProf.LRE(78492, n) * JSProf.LMC(78497, Math, 'sin').sin(JSProf.LMC(78496, this, '_toRadian')._toRadian(JSProf.LRE(78493, O) + JSProf.LRE(78494, _) * JSProf.LRE(78495, t))), i = JSProf.LRE(78498, C) - JSProf.LRE(78499, n) * JSProf.LMC(78504, Math, 'cos').cos(JSProf.LMC(78503, this, '_toRadian')._toRadian(JSProf.LRE(78500, O) + JSProf.LRE(78501, _) * JSProf.LRE(78502, t))), s = JSProf.LRE(78505, N) - JSProf.LRE(78506, n) * JSProf.LMC(78511, Math, 'sin').sin(JSProf.LMC(78510, this, '_toRadian')._toRadian(JSProf.LRE(78507, O) + JSProf.LRE(78508, _) * JSProf.LRE(78509, t))), o = JSProf.LRE(78512, C) + JSProf.LRE(78513, n) * JSProf.LMC(78518, Math, 'cos').cos(JSProf.LMC(78517, this, '_toRadian')._toRadian(JSProf.LRE(78514, O) + JSProf.LRE(78515, _) * JSProf.LRE(78516, t))), u = (JSProf.LRE(78519, r) + JSProf.LRE(78520, s)) / 2, a = (JSProf.LRE(78521, i) + JSProf.LRE(78522, o)) / 2, f, l, c, p;
                f = JSProf.LWR(78524, f, JSProf.LNE(78523, {
                    pageX: r,
                    pageY: i,
                    clientX: r,
                    clientY: i
                }, 11)), l = JSProf.LWR(78526, l, JSProf.LNE(78525, {
                    pageX: s,
                    pageY: o,
                    clientX: s,
                    clientY: o
                }, 11)), p = JSProf.LWR(78535, p, JSProf.LMC(78534, this, '_createTouchList')._createTouchList(JSProf.LNE(78533, [
                    JSProf.LMC(78529, e, 'merge').merge(JSProf.LNE(78527, { identifier: E++ }, 11), JSProf.LRE(78528, f)),
                    JSProf.LMC(78532, e, 'merge').merge(JSProf.LNE(78530, { identifier: E++ }, 11), JSProf.LRE(78531, l))
                ], 10))), c = JSProf.LWR(78537, c, JSProf.LNE(78536, {
                    pageX: u,
                    pageY: a,
                    clientX: u,
                    clientY: a
                }, 11)), JSProf.LMC(78547, this, '_simulateEvent')._simulateEvent(JSProf.LGD(78538, this, 'target').target, JSProf.LRE(78539, h), JSProf.LMC(78546, e, 'merge').merge(JSProf.LNE(78544, {
                    touches: p,
                    targetTouches: p,
                    changedTouches: p,
                    scale: k + JSProf.LRE(78540, A) * JSProf.LRE(78541, t),
                    rotation: O + JSProf.LRE(78542, _) * JSProf.LRE(78543, t)
                }, 11), JSProf.LRE(78545, c))), JSProf.LGD(78548, e.UA, 'ios').ios >= 2 && JSProf.LMC(78558, this, '_simulateEvent')._simulateEvent(JSProf.LGD(78549, this, 'target').target, JSProf.LRE(78550, v), JSProf.LMC(78557, e, 'merge').merge(JSProf.LNE(78555, {
                    scale: k + JSProf.LRE(78551, A) * JSProf.LRE(78552, t),
                    rotation: O + JSProf.LRE(78553, _) * JSProf.LRE(78554, t)
                }, 11), JSProf.LRE(78556, c)));
            }, 12));
            for (y = JSProf.LWR(78561, y, 0); JSProf.LRE(78562, y) < JSProf.LRE(78563, H); y++)
                JSProf.LMC(78567, g, 'add').add(JSProf.LNE(78566, {
                    fn: B,
                    args: JSProf.LNE(78565, [JSProf.LRE(78564, y)], 10),
                    context: this
                }, 11));
            JSProf.LMC(78607, g, 'add').add(JSProf.LNE(78606, {
                fn: JSProf.LNF(78605, function () {
                    var t = JSProf.LMC(78568, this, '_getEmptyTouchList')._getEmptyTouchList(), n, r, i, s;
                    n = JSProf.LWR(78570, n, JSProf.LNE(78569, {
                        pageX: D.end[0],
                        pageY: D.end[1],
                        clientX: D.end[0],
                        clientY: D.end[1]
                    }, 11)), r = JSProf.LWR(78572, r, JSProf.LNE(78571, {
                        pageX: P.end[0],
                        pageY: P.end[1],
                        clientX: P.end[0],
                        clientY: P.end[1]
                    }, 11)), s = JSProf.LWR(78581, s, JSProf.LMC(78580, this, '_createTouchList')._createTouchList(JSProf.LNE(78579, [
                        JSProf.LMC(78575, e, 'merge').merge(JSProf.LNE(78573, { identifier: E++ }, 11), JSProf.LRE(78574, n)),
                        JSProf.LMC(78578, e, 'merge').merge(JSProf.LNE(78576, { identifier: E++ }, 11), JSProf.LRE(78577, r))
                    ], 10))), i = JSProf.LWR(78591, i, JSProf.LNE(78590, {
                        pageX: (JSProf.LGE(78582, D.end, 0)[0] + JSProf.LGE(78583, P.end, 0)[0]) / 2,
                        pageY: (JSProf.LGE(78584, D.end, 0)[0] + JSProf.LGE(78585, P.end, 1)[1]) / 2,
                        clientX: (JSProf.LGE(78586, D.end, 0)[0] + JSProf.LGE(78587, P.end, 0)[0]) / 2,
                        clientY: (JSProf.LGE(78588, D.end, 0)[0] + JSProf.LGE(78589, P.end, 1)[1]) / 2
                    }, 11)), JSProf.LGD(78592, e.UA, 'ios').ios >= 2 && JSProf.LMC(78598, this, '_simulateEvent')._simulateEvent(JSProf.LGD(78593, this, 'target').target, JSProf.LRE(78594, m), JSProf.LMC(78597, e, 'merge').merge(JSProf.LNE(78595, {
                        scale: L,
                        rotation: M
                    }, 11), JSProf.LRE(78596, i))), JSProf.LMC(78604, this, '_simulateEvent')._simulateEvent(JSProf.LGD(78599, this, 'target').target, JSProf.LRE(78600, p), JSProf.LMC(78603, e, 'merge').merge(JSProf.LNE(78601, {
                        touches: t,
                        targetTouches: t,
                        changedTouches: s,
                        scale: L,
                        rotation: M
                    }, 11), JSProf.LRE(78602, i)));
                }, 12),
                context: this
            }, 11)), JSProf.LRE(78608, n) && JSProf.LMC(78610, e.Lang, 'isFunction').isFunction(JSProf.LRE(78609, n)) && JSProf.LMC(78612, g, 'add').add(JSProf.LNE(78611, {
                fn: n,
                context: this.node
            }, 11)), JSProf.LMC(78613, g, 'run').run();
        }, 12),
        tap: JSProf.LNF(78680, function (t, r, i, s, o) {
            var u = JSProf.LNE(78616, new (JSProf.LMC(78615, e, 'AsyncQueue')).AsyncQueue(), 40), a = JSProf.LMC(78617, this, '_getEmptyTouchList')._getEmptyTouchList(), f, h, d, v, m;
            r = JSProf.LWR(78620, r, JSProf.LMC(78619, this, '_calculateDefaultPoint')._calculateDefaultPoint(JSProf.LRE(78618, r)));
            if (!JSProf.LMC(78622, e.Lang, 'isNumber').isNumber(JSProf.LRE(78621, i)) || JSProf.LRE(78623, i) < 1)
                i = JSProf.LWR(78624, i, 1);
            JSProf.LMC(78626, e.Lang, 'isNumber').isNumber(JSProf.LRE(78625, s)) || (s = JSProf.LWR(78628, s, JSProf.LGD(78627, l, 'HOLD_TAP').HOLD_TAP)), JSProf.LMC(78630, e.Lang, 'isNumber').isNumber(JSProf.LRE(78629, o)) || (o = JSProf.LWR(78632, o, JSProf.LGD(78631, l, 'DELAY_TAP').DELAY_TAP)), h = JSProf.LWR(78634, h, JSProf.LNE(78633, {
                pageX: r[0],
                pageY: r[1],
                clientX: r[0],
                clientY: r[1]
            }, 11)), f = JSProf.LWR(78640, f, JSProf.LMC(78639, this, '_createTouchList')._createTouchList(JSProf.LNE(78638, [JSProf.LMC(78637, e, 'merge').merge(JSProf.LNE(78635, { identifier: 0 }, 11), JSProf.LRE(78636, h))], 10))), v = JSProf.LWR(78648, v, JSProf.LNF(78647, function () {
                JSProf.LMC(78646, this, '_simulateEvent')._simulateEvent(JSProf.LGD(78641, this, 'target').target, JSProf.LRE(78642, c), JSProf.LMC(78645, e, 'merge').merge(JSProf.LNE(78643, {
                    touches: f,
                    targetTouches: f,
                    changedTouches: f
                }, 11), JSProf.LRE(78644, h)));
            }, 12)), m = JSProf.LWR(78656, m, JSProf.LNF(78655, function () {
                JSProf.LMC(78654, this, '_simulateEvent')._simulateEvent(JSProf.LGD(78649, this, 'target').target, JSProf.LRE(78650, p), JSProf.LMC(78653, e, 'merge').merge(JSProf.LNE(78651, {
                    touches: a,
                    targetTouches: a,
                    changedTouches: f
                }, 11), JSProf.LRE(78652, h)));
            }, 12));
            for (d = JSProf.LWR(78657, d, 0); JSProf.LRE(78658, d) < JSProf.LRE(78659, i); d++)
                JSProf.LMC(78662, u, 'add').add(JSProf.LNE(78661, {
                    fn: v,
                    context: this,
                    timeout: JSProf.LRE(78660, d) === 0 ? 0 : o
                }, 11)), JSProf.LMC(78664, u, 'add').add(JSProf.LNE(78663, {
                    fn: m,
                    context: this,
                    timeout: s
                }, 11));
            JSProf.LRE(78665, i) > 1 && !JSProf.LRE(78666, n) && JSProf.LMC(78673, u, 'add').add(JSProf.LNE(78672, {
                fn: JSProf.LNF(78671, function () {
                    JSProf.LMC(78670, this, '_simulateEvent')._simulateEvent(JSProf.LGD(78667, this, 'target').target, JSProf.LRE(78668, E), JSProf.LRE(78669, h));
                }, 12),
                context: this
            }, 11)), JSProf.LRE(78674, t) && JSProf.LMC(78676, e.Lang, 'isFunction').isFunction(JSProf.LRE(78675, t)) && JSProf.LMC(78678, u, 'add').add(JSProf.LNE(78677, {
                fn: t,
                context: this.node
            }, 11)), JSProf.LMC(78679, u, 'run').run();
        }, 12),
        flick: JSProf.LNF(78734, function (n, r, i, s, o) {
            var u;
            r = JSProf.LWR(78683, r, JSProf.LMC(78682, this, '_calculateDefaultPoint')._calculateDefaultPoint(JSProf.LRE(78681, r))), JSProf.LMC(78685, e.Lang, 'isString').isString(JSProf.LRE(78684, i)) ? (i = JSProf.LWR(78686, i, i.toLowerCase()), JSProf.LRE(78687, i) !== JSProf.LRE(78688, S) && JSProf.LRE(78689, i) !== JSProf.LRE(78690, x) && JSProf.LMC(78692, e, 'error').error(JSProf.LRE(78691, t) + "(flick): Only x or y axis allowed")) : i = JSProf.LWR(78694, i, JSProf.LRE(78693, S)), JSProf.LMC(78696, e.Lang, 'isNumber').isNumber(JSProf.LRE(78695, s)) || (s = JSProf.LWR(78698, s, JSProf.LGD(78697, l, 'DISTANCE_FLICK').DISTANCE_FLICK)), JSProf.LMC(78700, e.Lang, 'isNumber').isNumber(JSProf.LRE(78699, o)) ? JSProf.LRE(78701, o) > JSProf.LGD(78702, l, 'MAX_DURATION_FLICK').MAX_DURATION_FLICK && (o = JSProf.LWR(78704, o, JSProf.LGD(78703, l, 'MAX_DURATION_FLICK').MAX_DURATION_FLICK)) : o = JSProf.LWR(78706, o, JSProf.LGD(78705, l, 'DURATION_FLICK').DURATION_FLICK), JSProf.LMC(78708, Math, 'abs').abs(JSProf.LRE(78707, s)) / JSProf.LRE(78709, o) < JSProf.LGD(78710, l, 'MIN_VELOCITY_FLICK').MIN_VELOCITY_FLICK && (o = JSProf.LWR(78714, o, JSProf.LMC(78712, Math, 'abs').abs(JSProf.LRE(78711, s)) / JSProf.LGD(78713, l, 'MIN_VELOCITY_FLICK').MIN_VELOCITY_FLICK)), u = JSProf.LWR(78729, u, JSProf.LNE(78728, {
                start: JSProf.LMC(78716, e, 'clone').clone(JSProf.LRE(78715, r)),
                end: JSProf.LNE(78727, [
                    JSProf.LRE(78717, i) === JSProf.LRE(78718, S) ? JSProf.LGE(78719, r, 0)[0] + JSProf.LRE(78720, s) : JSProf.LGE(78721, r, 0)[0],
                    JSProf.LRE(78722, i) === JSProf.LRE(78723, x) ? JSProf.LGE(78724, r, 1)[1] + JSProf.LRE(78725, s) : JSProf.LGE(78726, r, 1)[1]
                ], 10)
            }, 11)), JSProf.LMC(78733, this, '_move')._move(JSProf.LRE(78730, n), JSProf.LRE(78731, u), JSProf.LRE(78732, o));
        }, 12),
        move: JSProf.LNF(78777, function (t, n, r) {
            var i;
            JSProf.LMC(78736, e.Lang, 'isObject').isObject(JSProf.LRE(78735, n)) ? (JSProf.LMC(78738, e.Lang, 'isArray').isArray(JSProf.LGD(78737, n, 'point').point) ? JSProf.LPD(78741, n, 'point').point = JSProf.LRSP(78741, JSProf.LMC(78740, this, '_calculateDefaultPoint')._calculateDefaultPoint(JSProf.LGD(78739, n, 'point').point)) : JSProf.LPD(78744, n, 'point').point = JSProf.LRSP(78744, JSProf.LMC(78743, this, '_calculateDefaultPoint')._calculateDefaultPoint(JSProf.LNE(78742, [], 10))), JSProf.LMC(78746, e.Lang, 'isNumber').isNumber(JSProf.LGD(78745, n, 'xdist').xdist) || (JSProf.LPD(78748, n, 'xdist').xdist = JSProf.LRSP(78748, JSProf.LGD(78747, l, 'DISTANCE_MOVE').DISTANCE_MOVE)), JSProf.LMC(78750, e.Lang, 'isNumber').isNumber(JSProf.LGD(78749, n, 'ydist').ydist) || (JSProf.LPD(78751, n, 'ydist').ydist = JSProf.LRSP(78751, 0))) : n = JSProf.LWR(78755, n, JSProf.LNE(78754, {
                point: JSProf.LMC(78753, this, '_calculateDefaultPoint')._calculateDefaultPoint(JSProf.LNE(78752, [], 10)),
                xdist: l.DISTANCE_MOVE,
                ydist: 0
            }, 11)), JSProf.LMC(78757, e.Lang, 'isNumber').isNumber(JSProf.LRE(78756, r)) ? JSProf.LRE(78758, r) > JSProf.LGD(78759, l, 'MAX_DURATION_MOVE').MAX_DURATION_MOVE && (r = JSProf.LWR(78761, r, JSProf.LGD(78760, l, 'MAX_DURATION_MOVE').MAX_DURATION_MOVE)) : r = JSProf.LWR(78763, r, JSProf.LGD(78762, l, 'DURATION_MOVE').DURATION_MOVE), i = JSProf.LWR(78772, i, JSProf.LNE(78771, {
                start: JSProf.LMC(78765, e, 'clone').clone(JSProf.LGD(78764, n, 'point').point),
                end: JSProf.LNE(78770, [
                    JSProf.LGE(78766, n.point, 0)[0] + JSProf.LGD(78767, n, 'xdist').xdist,
                    JSProf.LGE(78768, n.point, 1)[1] + JSProf.LGD(78769, n, 'ydist').ydist
                ], 10)
            }, 11)), JSProf.LMC(78776, this, '_move')._move(JSProf.LRE(78773, t), JSProf.LRE(78774, i), JSProf.LRE(78775, r));
        }, 12),
        _move: JSProf.LNF(78906, function (t, n, r) {
            var i, s, o = JSProf.LRE(78778, u), d, v, m, g = 0, y;
            JSProf.LMC(78780, e.Lang, 'isNumber').isNumber(JSProf.LRE(78779, r)) ? JSProf.LRE(78781, r) > JSProf.LGD(78782, l, 'MAX_DURATION_MOVE').MAX_DURATION_MOVE && (r = JSProf.LWR(78784, r, JSProf.LGD(78783, l, 'MAX_DURATION_MOVE').MAX_DURATION_MOVE)) : r = JSProf.LWR(78786, r, JSProf.LGD(78785, l, 'DURATION_MOVE').DURATION_MOVE), JSProf.LMC(78788, e.Lang, 'isObject').isObject(JSProf.LRE(78787, n)) ? (JSProf.LMC(78790, e.Lang, 'isArray').isArray(JSProf.LGD(78789, n, 'start').start) || (JSProf.LPD(78794, n, 'start').start = JSProf.LRSP(78794, JSProf.LNE(78793, [
                JSProf.LRE(78791, a),
                JSProf.LRE(78792, f)
            ], 10))), JSProf.LMC(78796, e.Lang, 'isArray').isArray(JSProf.LGD(78795, n, 'end').end) || (JSProf.LPD(78801, n, 'end').end = JSProf.LRSP(78801, JSProf.LNE(78800, [
                JSProf.LRE(78797, a) + JSProf.LGD(78798, l, 'DISTANCE_MOVE').DISTANCE_MOVE,
                JSProf.LRE(78799, f)
            ], 10)))) : n = JSProf.LWR(78810, n, JSProf.LNE(78809, {
                start: JSProf.LNE(78804, [
                    JSProf.LRE(78802, a),
                    JSProf.LRE(78803, f)
                ], 10),
                end: JSProf.LNE(78808, [
                    JSProf.LRE(78805, a) + JSProf.LGD(78806, l, 'DISTANCE_MOVE').DISTANCE_MOVE,
                    JSProf.LRE(78807, f)
                ], 10)
            }, 11)), JSProf.LPD(78812, e.AsyncQueue.defaults, 'timeout').timeout = JSProf.LRSP(78812, JSProf.LRE(78811, o)), i = JSProf.LWR(78815, i, JSProf.LNE(78814, new (JSProf.LMC(78813, e, 'AsyncQueue')).AsyncQueue(), 40)), JSProf.LMC(78830, i, 'add').add(JSProf.LNE(78829, {
                fn: JSProf.LNF(78828, function () {
                    var t = JSProf.LNE(78816, {
                            pageX: n.start[0],
                            pageY: n.start[1],
                            clientX: n.start[0],
                            clientY: n.start[1]
                        }, 11), r = JSProf.LMC(78821, this, '_createTouchList')._createTouchList(JSProf.LNE(78820, [JSProf.LMC(78819, e, 'merge').merge(JSProf.LNE(78817, { identifier: g++ }, 11), JSProf.LRE(78818, t))], 10));
                    JSProf.LMC(78827, this, '_simulateEvent')._simulateEvent(JSProf.LGD(78822, this, 'target').target, JSProf.LRE(78823, c), JSProf.LMC(78826, e, 'merge').merge(JSProf.LNE(78824, {
                        touches: r,
                        targetTouches: r,
                        changedTouches: r
                    }, 11), JSProf.LRE(78825, t)));
                }, 12),
                timeout: 0,
                context: this
            }, 11)), d = JSProf.LWR(78833, d, Math.floor(JSProf.LRE(78831, r) / JSProf.LRE(78832, o))), v = JSProf.LWR(78837, v, (JSProf.LGE(78834, n.end, 0)[0] - JSProf.LGE(78835, n.start, 0)[0]) / JSProf.LRE(78836, d)), m = JSProf.LWR(78841, m, (JSProf.LGE(78838, n.end, 1)[1] - JSProf.LGE(78839, n.start, 1)[1]) / JSProf.LRE(78840, d)), y = JSProf.LWR(78861, y, JSProf.LNF(78860, function (t) {
                var r = JSProf.LGE(78842, n.start, 0)[0] + JSProf.LRE(78843, v) * JSProf.LRE(78844, t), i = JSProf.LGE(78845, n.start, 1)[1] + JSProf.LRE(78846, m) * JSProf.LRE(78847, t), s = JSProf.LNE(78848, {
                        pageX: r,
                        pageY: i,
                        clientX: r,
                        clientY: i
                    }, 11), o = JSProf.LMC(78853, this, '_createTouchList')._createTouchList(JSProf.LNE(78852, [JSProf.LMC(78851, e, 'merge').merge(JSProf.LNE(78849, { identifier: g++ }, 11), JSProf.LRE(78850, s))], 10));
                JSProf.LMC(78859, this, '_simulateEvent')._simulateEvent(JSProf.LGD(78854, this, 'target').target, JSProf.LRE(78855, h), JSProf.LMC(78858, e, 'merge').merge(JSProf.LNE(78856, {
                    touches: o,
                    targetTouches: o,
                    changedTouches: o
                }, 11), JSProf.LRE(78857, s)));
            }, 12));
            for (s = JSProf.LWR(78862, s, 0); JSProf.LRE(78863, s) < JSProf.LRE(78864, d); s++)
                JSProf.LMC(78868, i, 'add').add(JSProf.LNE(78867, {
                    fn: y,
                    args: JSProf.LNE(78866, [JSProf.LRE(78865, s)], 10),
                    context: this
                }, 11));
            JSProf.LMC(78883, i, 'add').add(JSProf.LNE(78882, {
                fn: JSProf.LNF(78881, function () {
                    var t = JSProf.LNE(78869, {
                            pageX: n.end[0],
                            pageY: n.end[1],
                            clientX: n.end[0],
                            clientY: n.end[1]
                        }, 11), r = JSProf.LMC(78874, this, '_createTouchList')._createTouchList(JSProf.LNE(78873, [JSProf.LMC(78872, e, 'merge').merge(JSProf.LNE(78870, { identifier: g }, 11), JSProf.LRE(78871, t))], 10));
                    JSProf.LMC(78880, this, '_simulateEvent')._simulateEvent(JSProf.LGD(78875, this, 'target').target, JSProf.LRE(78876, h), JSProf.LMC(78879, e, 'merge').merge(JSProf.LNE(78877, {
                        touches: r,
                        targetTouches: r,
                        changedTouches: r
                    }, 11), JSProf.LRE(78878, t)));
                }, 12),
                timeout: 0,
                context: this
            }, 11)), JSProf.LMC(78899, i, 'add').add(JSProf.LNE(78898, {
                fn: JSProf.LNF(78897, function () {
                    var t = JSProf.LNE(78884, {
                            pageX: n.end[0],
                            pageY: n.end[1],
                            clientX: n.end[0],
                            clientY: n.end[1]
                        }, 11), r = JSProf.LMC(78885, this, '_getEmptyTouchList')._getEmptyTouchList(), i = JSProf.LMC(78890, this, '_createTouchList')._createTouchList(JSProf.LNE(78889, [JSProf.LMC(78888, e, 'merge').merge(JSProf.LNE(78886, { identifier: g }, 11), JSProf.LRE(78887, t))], 10));
                    JSProf.LMC(78896, this, '_simulateEvent')._simulateEvent(JSProf.LGD(78891, this, 'target').target, JSProf.LRE(78892, p), JSProf.LMC(78895, e, 'merge').merge(JSProf.LNE(78893, {
                        touches: r,
                        targetTouches: r,
                        changedTouches: i
                    }, 11), JSProf.LRE(78894, t)));
                }, 12),
                context: this
            }, 11)), JSProf.LRE(78900, t) && JSProf.LMC(78902, e.Lang, 'isFunction').isFunction(JSProf.LRE(78901, t)) && JSProf.LMC(78904, i, 'add').add(JSProf.LNE(78903, {
                fn: t,
                context: this.node
            }, 11)), JSProf.LMC(78905, i, 'run').run();
        }, 12),
        _getEmptyTouchList: JSProf.LNF(78912, function () {
            return JSProf.LRE(78907, o) || (o = JSProf.LWR(78910, o, JSProf.LMC(78909, this, '_createTouchList')._createTouchList(JSProf.LNE(78908, [], 10)))), JSProf.LRE(78911, o);
        }, 12),
        _createTouchList: JSProf.LNF(78978, function (n) {
            var r = JSProf.LNE(78913, [], 10), i, o = this;
            return !!JSProf.LRE(78914, n) && JSProf.LMC(78916, e.Lang, 'isArray').isArray(JSProf.LRE(78915, n)) ? JSProf.LGD(78917, e.UA, 'android').android && JSProf.LGD(78918, e.UA, 'android').android >= 4 || JSProf.LGD(78919, e.UA, 'ios').ios && JSProf.LGD(78920, e.UA, 'ios').ios >= 2 ? (JSProf.LMC(78942, e, 'each').each(JSProf.LRE(78921, n), JSProf.LNF(78941, function (t) {
                JSProf.LGD(78922, t, 'identifier').identifier || (JSProf.LPD(78923, t, 'identifier').identifier = JSProf.LRSP(78923, 0)), JSProf.LGD(78924, t, 'pageX').pageX || (JSProf.LPD(78925, t, 'pageX').pageX = JSProf.LRSP(78925, 0)), JSProf.LGD(78926, t, 'pageY').pageY || (JSProf.LPD(78927, t, 'pageY').pageY = JSProf.LRSP(78927, 0)), JSProf.LGD(78928, t, 'screenX').screenX || (JSProf.LPD(78929, t, 'screenX').screenX = JSProf.LRSP(78929, 0)), JSProf.LGD(78930, t, 'screenY').screenY || (JSProf.LPD(78931, t, 'screenY').screenY = JSProf.LRSP(78931, 0)), JSProf.LMC(78940, r, 'push').push(JSProf.LMC(78939, s, 'createTouch').createTouch(JSProf.LGD(78932, e.config, 'win').win, JSProf.LGD(78933, o, 'target').target, JSProf.LGD(78934, t, 'identifier').identifier, JSProf.LGD(78935, t, 'pageX').pageX, JSProf.LGD(78936, t, 'pageY').pageY, JSProf.LGD(78937, t, 'screenX').screenX, JSProf.LGD(78938, t, 'screenY').screenY));
            }, 12)), i = JSProf.LWR(78946, i, JSProf.LMC(78945, s.createTouchList, 'apply').apply(JSProf.LRE(78943, s), JSProf.LRE(78944, r)))) : JSProf.LGD(78947, e.UA, 'ios').ios && JSProf.LGD(78948, e.UA, 'ios').ios < 2 ? JSProf.LMC(78950, e, 'error').error(JSProf.LRE(78949, t) + ": No touch event simulation framework present.") : (i = JSProf.LWR(78952, i, JSProf.LNE(78951, [], 10)), JSProf.LMC(78971, e, 'each').each(JSProf.LRE(78953, n), JSProf.LNF(78970, function (e) {
                JSProf.LGD(78954, e, 'identifier').identifier || (JSProf.LPD(78955, e, 'identifier').identifier = JSProf.LRSP(78955, 0)), JSProf.LGD(78956, e, 'clientX').clientX || (JSProf.LPD(78957, e, 'clientX').clientX = JSProf.LRSP(78957, 0)), JSProf.LGD(78958, e, 'clientY').clientY || (JSProf.LPD(78959, e, 'clientY').clientY = JSProf.LRSP(78959, 0)), JSProf.LGD(78960, e, 'pageX').pageX || (JSProf.LPD(78961, e, 'pageX').pageX = JSProf.LRSP(78961, 0)), JSProf.LGD(78962, e, 'pageY').pageY || (JSProf.LPD(78963, e, 'pageY').pageY = JSProf.LRSP(78963, 0)), JSProf.LGD(78964, e, 'screenX').screenX || (JSProf.LPD(78965, e, 'screenX').screenX = JSProf.LRSP(78965, 0)), JSProf.LGD(78966, e, 'screenY').screenY || (JSProf.LPD(78967, e, 'screenY').screenY = JSProf.LRSP(78967, 0)), JSProf.LMC(78969, i, 'push').push(JSProf.LNE(78968, {
                    target: o.target,
                    identifier: e.identifier,
                    clientX: e.clientX,
                    clientY: e.clientY,
                    pageX: e.pageX,
                    pageY: e.pageY,
                    screenX: e.screenX,
                    screenY: e.screenY
                }, 11));
            }, 12)), JSProf.LPD(78974, i, 'item').item = JSProf.LRSP(78974, JSProf.LNF(78973, function (e) {
                return JSProf.LGE(78972, i, 'e')[e];
            }, 12))) : JSProf.LMC(78976, e, 'error').error(JSProf.LRE(78975, t) + ": Invalid touchPoints passed"), JSProf.LRE(78977, i);
        }, 12),
        _simulateEvent: JSProf.LNF(79022, function (t, r, s) {
            var o;
            JSProf.LGE(78979, i, 'r')[r] ? JSProf.LRE(78980, n) ? JSProf.LMC(78984, e.Event, 'simulate').simulate(JSProf.LRE(78981, t), JSProf.LRE(78982, r), JSProf.LRE(78983, s)) : JSProf.LMC(78988, this, '_isSingleTouch')._isSingleTouch(JSProf.LGD(78985, s, 'touches').touches, JSProf.LGD(78986, s, 'targetTouches').targetTouches, JSProf.LGD(78987, s, 'changedTouches').changedTouches) ? (r = JSProf.LWR(78991, r, JSProf.LGE(78990, JSProf.LNE(78989, {
                touchstart: b,
                touchmove: y,
                touchend: g
            }, 11), 'r')[r]), JSProf.LPD(78992, s, 'button').button = JSProf.LRSP(78992, 0), s.relatedTarget = null, o = JSProf.LWR(78997, o, JSProf.LRE(78993, r) === JSProf.LRE(78994, g) ? JSProf.LGD(78995, s, 'changedTouches').changedTouches : JSProf.LGD(78996, s, 'touches').touches), s = JSProf.LWR(79005, s, JSProf.LMC(79004, e, 'mix').mix(JSProf.LRE(78998, s), JSProf.LNE(79003, {
                screenX: JSProf.LMC(78999, o, 'item').item(0).screenX,
                screenY: JSProf.LMC(79000, o, 'item').item(0).screenY,
                clientX: JSProf.LMC(79001, o, 'item').item(0).clientX,
                clientY: JSProf.LMC(79002, o, 'item').item(0).clientY
            }, 11), !0)), JSProf.LMC(79009, e.Event, 'simulate').simulate(JSProf.LRE(79006, t), JSProf.LRE(79007, r), JSProf.LRE(79008, s)), JSProf.LRE(79010, r) == JSProf.LRE(79011, g) && JSProf.LMC(79015, e.Event, 'simulate').simulate(JSProf.LRE(79012, t), JSProf.LRE(79013, w), JSProf.LRE(79014, s))) : JSProf.LMC(79017, e, 'error').error("_simulateEvent(): Event '" + JSProf.LRE(79016, r) + "' has multi touch objects that can't be simulated in your platform.") : JSProf.LMC(79021, e.Event, 'simulate').simulate(JSProf.LRE(79018, t), JSProf.LRE(79019, r), JSProf.LRE(79020, s));
        }, 12),
        _isSingleTouch: JSProf.LNF(79029, function (e, t, n) {
            return JSProf.LRE(79023, e) && JSProf.LGD(79024, e, 'length').length <= 1 && JSProf.LRE(79025, t) && JSProf.LGD(79026, t, 'length').length <= 1 && JSProf.LRE(79027, n) && JSProf.LGD(79028, n, 'length').length <= 1;
        }, 12)
    }, 11)), JSProf.LPD(79033, e, 'GestureSimulation').GestureSimulation = JSProf.LRSP(79033, JSProf.LRE(79032, T)), JSProf.LPD(79035, e.GestureSimulation, 'defaults').defaults = JSProf.LRSP(79035, JSProf.LRE(79034, l)), JSProf.LPD(79037, e.GestureSimulation, 'GESTURES').GESTURES = JSProf.LRSP(79037, JSProf.LRE(79036, r)), JSProf.LPD(79112, e.Event, 'simulateGesture').simulateGesture = JSProf.LRSP(79112, JSProf.LNF(79111, function (n, i, s, o) {
        n = JSProf.LWR(79040, n, JSProf.LMC(79039, e, 'one').one(JSProf.LRE(79038, n)));
        var u = JSProf.LNE(79043, new (JSProf.LMC(79042, e, 'GestureSimulation')).GestureSimulation(JSProf.LRE(79041, n)), 40);
        i = JSProf.LWR(79044, i, i.toLowerCase()), !JSProf.LRE(79045, o) && JSProf.LMC(79047, e.Lang, 'isFunction').isFunction(JSProf.LRE(79046, s)) && (o = JSProf.LWR(79049, o, JSProf.LRE(79048, s)), s = JSProf.LWR(79051, s, JSProf.LNE(79050, {}, 11))), s = JSProf.LWR(79054, s, JSProf.LRE(79052, s) || JSProf.LNE(79053, {}, 11));
        if (JSProf.LGE(79055, r, 'i')[i])
            switch (JSProf.LRE(79056, i)) {
            case "tap":
                JSProf.LMC(79062, u, 'tap').tap(JSProf.LRE(79057, o), JSProf.LGD(79058, s, 'point').point, JSProf.LGD(79059, s, 'times').times, JSProf.LGD(79060, s, 'hold').hold, JSProf.LGD(79061, s, 'delay').delay);
                break;
            case "doubletap":
                JSProf.LMC(79065, u, 'tap').tap(JSProf.LRE(79063, o), JSProf.LGD(79064, s, 'point').point, 2);
                break;
            case "press":
                JSProf.LMC(79067, e.Lang, 'isNumber').isNumber(JSProf.LGD(79066, s, 'hold').hold) ? JSProf.LGD(79068, s, 'hold').hold < JSProf.LGD(79069, l, 'MIN_HOLD_PRESS').MIN_HOLD_PRESS ? JSProf.LPD(79071, s, 'hold').hold = JSProf.LRSP(79071, JSProf.LGD(79070, l, 'MIN_HOLD_PRESS').MIN_HOLD_PRESS) : JSProf.LGD(79072, s, 'hold').hold > JSProf.LGD(79073, l, 'MAX_HOLD_PRESS').MAX_HOLD_PRESS && (JSProf.LPD(79075, s, 'hold').hold = JSProf.LRSP(79075, JSProf.LGD(79074, l, 'MAX_HOLD_PRESS').MAX_HOLD_PRESS)) : JSProf.LPD(79077, s, 'hold').hold = JSProf.LRSP(79077, JSProf.LGD(79076, l, 'HOLD_PRESS').HOLD_PRESS), JSProf.LMC(79081, u, 'tap').tap(JSProf.LRE(79078, o), JSProf.LGD(79079, s, 'point').point, 1, JSProf.LGD(79080, s, 'hold').hold);
                break;
            case "move":
                JSProf.LMC(79085, u, 'move').move(JSProf.LRE(79082, o), JSProf.LGD(79083, s, 'path').path, JSProf.LGD(79084, s, 'duration').duration);
                break;
            case "flick":
                JSProf.LMC(79091, u, 'flick').flick(JSProf.LRE(79086, o), JSProf.LGD(79087, s, 'point').point, JSProf.LGD(79088, s, 'axis').axis, JSProf.LGD(79089, s, 'distance').distance, JSProf.LGD(79090, s, 'duration').duration);
                break;
            case "pinch":
                JSProf.LMC(79099, u, 'pinch').pinch(JSProf.LRE(79092, o), JSProf.LGD(79093, s, 'center').center, JSProf.LGD(79094, s, 'r1').r1, JSProf.LGD(79095, s, 'r2').r2, JSProf.LGD(79096, s, 'duration').duration, JSProf.LGD(79097, s, 'start').start, JSProf.LGD(79098, s, 'rotation').rotation);
                break;
            case "rotate":
                JSProf.LMC(79107, u, 'rotate').rotate(JSProf.LRE(79100, o), JSProf.LGD(79101, s, 'center').center, JSProf.LGD(79102, s, 'r1').r1, JSProf.LGD(79103, s, 'r2').r2, JSProf.LGD(79104, s, 'duration').duration, JSProf.LGD(79105, s, 'start').start, JSProf.LGD(79106, s, 'rotation').rotation);
            }
        else
            JSProf.LMC(79110, e, 'error').error(JSProf.LRE(79108, t) + ": Not a supported gesture simulation: " + JSProf.LRE(79109, i));
    }, 12));
}, 12), "3.14.1", JSProf.LNE(79116, {
    requires: JSProf.LNE(79115, [
        "async-queue",
        "event-simulate",
        "node-screen"
    ], 10)
}, 11));
/*
YUI 3.14.1 (build 63049cb)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
JSProf.LMC(79133, YUI, 'add').add("node-event-simulate", JSProf.LNF(79130, function (e, t) {
    JSProf.LPD(79123, e.Node.prototype, 'simulate').simulate = JSProf.LRSP(79123, JSProf.LNF(79122, function (t, n) {
        JSProf.LMC(79121, e.Event, 'simulate').simulate(JSProf.LMC(79118, e.Node, 'getDOMNode').getDOMNode(this), JSProf.LRE(79119, t), JSProf.LRE(79120, n));
    }, 12)), JSProf.LPD(79129, e.Node.prototype, 'simulateGesture').simulateGesture = JSProf.LRSP(79129, JSProf.LNF(79128, function (t, n, r) {
        JSProf.LMC(79127, e.Event, 'simulateGesture').simulateGesture(this, JSProf.LRE(79124, t), JSProf.LRE(79125, n), JSProf.LRE(79126, r));
    }, 12));
}, 12), "3.14.1", JSProf.LNE(79132, {
    requires: JSProf.LNE(79131, [
        "node-base",
        "event-simulate",
        "gesture-simulate"
    ], 10)
}, 11));