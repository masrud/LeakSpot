/* ===================================================
 * bootstrap-transition.js v2.0.4
 * http://twitter.github.com/bootstrap/javascript.html#transitions
 * ===================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */
!JSProf.LFC(269, JSProf.LNF(267, function ($) {
    JSProf.LFC(266, $, false)(JSProf.LNF(265, function () {
        "use strict";
        // jshint ;_;
        /* CSS TRANSITION SUPPORT (http://www.modernizr.com/)
         * ======================================================= */
        JSProf.LPD(264, $.support, 'transition').transition = JSProf.LRSP(264, JSProf.LFC(263, JSProf.LNF(262, function () {
            var transitionEnd = JSProf.LFC(259, JSProf.LNF(258, function () {
                    var el = JSProf.LMC(253, document, 'createElement').createElement('bootstrap'), transEndEventNames = JSProf.LNE(254, {
                            'WebkitTransition': 'webkitTransitionEnd',
                            'MozTransition': 'transitionend',
                            'OTransition': 'oTransitionEnd',
                            'msTransition': 'MSTransitionEnd',
                            'transition': 'transitionend'
                        }, 11), name;
                    for (name in JSProf.LRE(255, transEndEventNames)) {
                        if (JSProf.LGE(256, el.style, 'name', el.style[name])[name] !== undefined) {
                            return JSProf.LGE(257, transEndEventNames, 'name', transEndEventNames[name])[name];
                        }
                    }
                }, 12), false)();
            return JSProf.LRE(260, transitionEnd) && JSProf.LNE(261, { end: transitionEnd }, 11);
        }, 12), false)());
    }, 12));
}, 12), false)(JSProf.LGD(268, window, 'jQuery').jQuery);