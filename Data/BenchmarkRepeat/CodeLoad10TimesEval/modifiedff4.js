/* =============================================================
 * bootstrap-collapse.js v2.0.4
 * http://twitter.github.com/bootstrap/javascript.html#collapse
 * =============================================================
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
 * ============================================================ */
!JSProf.LFC(419, JSProf.LNF(417, function ($) {
    "use strict";
    // jshint ;_;
    /* COLLAPSE PUBLIC CLASS DEFINITION
    * ================================ */
    var Collapse = JSProf.LNF(308, function (element, options) {
            JSProf.LPD(296, this, '$element').$element = JSProf.LRSP(296, JSProf.LFC(295, $, false)(JSProf.LRE(294, element)));
            JSProf.LPD(301, this, 'options').options = JSProf.LRSP(301, JSProf.LMC(300, $, 'extend').extend(JSProf.LNE(297, {}, 11), JSProf.LGD(298, $.fn.collapse, 'defaults').defaults, JSProf.LRE(299, options)));
            if (JSProf.LGD(302, this.options, 'parent').parent) {
                JSProf.LPD(305, this, '$parent').$parent = JSProf.LRSP(305, JSProf.LFC(304, $, false)(JSProf.LGD(303, this.options, 'parent').parent));
            }
            JSProf.LGD(306, this.options, 'toggle').toggle && JSProf.LMC(307, this, 'toggle').toggle();
        }, 12);
    JSProf.LPD(377, Collapse, 'prototype').prototype = JSProf.LRSP(377, JSProf.LNE(376, {
        constructor: Collapse,
        dimension: JSProf.LNF(311, function () {
            var hasWidth = JSProf.LMC(309, this.$element, 'hasClass').hasClass('width');
            return JSProf.LRE(310, hasWidth) ? 'width' : 'height';
        }, 12),
        show: JSProf.LNF(337, function () {
            var dimension, scroll, actives, hasData;
            if (JSProf.LGD(312, this, 'transitioning').transitioning)
                return;
            dimension = JSProf.LWR(314, dimension, JSProf.LMC(313, this, 'dimension').dimension());
            scroll = JSProf.LWR(319, scroll, JSProf.LMC(318, $, 'camelCase').camelCase(JSProf.LMC(317, JSProf.LNE(316, [
                'scroll',
                JSProf.LRE(315, dimension)
            ], 10), 'join').join('-')));
            actives = JSProf.LWR(322, actives, JSProf.LGD(320, this, '$parent').$parent && JSProf.LMC(321, this.$parent, 'find').find('> .accordion-group > .in'));
            if (JSProf.LRE(323, actives) && JSProf.LGD(324, actives, 'length').length) {
                hasData = JSProf.LWR(326, hasData, JSProf.LMC(325, actives, 'data').data('collapse'));
                if (JSProf.LRE(327, hasData) && JSProf.LGD(328, hasData, 'transitioning').transitioning)
                    return;
                JSProf.LMC(329, actives, 'collapse').collapse('hide');
                JSProf.LRE(330, hasData) || JSProf.LMC(331, actives, 'data').data('collapse', null);
            }
            JSProf.LMC(332, this.$element, dimension, 1)[dimension](0);
            JSProf.LMC(334, this, 'transition').transition('addClass', JSProf.LMC(333, $, 'Event').Event('show'), 'shown');
            JSProf.LMC(336, this.$element, dimension, 1)[dimension](JSProf.LGE(335, this.$element[0], 'scroll', this.$element[0][scroll])[scroll]);
        }, 12),
        hide: JSProf.LNF(346, function () {
            var dimension;
            if (JSProf.LGD(338, this, 'transitioning').transitioning)
                return;
            dimension = JSProf.LWR(340, dimension, JSProf.LMC(339, this, 'dimension').dimension());
            JSProf.LMC(342, this, 'reset').reset(JSProf.LMC(341, this.$element, dimension, 1)[dimension]());
            JSProf.LMC(344, this, 'transition').transition('removeClass', JSProf.LMC(343, $, 'Event').Event('hide'), 'hidden');
            JSProf.LMC(345, this.$element, dimension, 1)[dimension](0);
        }, 12),
        reset: JSProf.LNF(354, function (size) {
            var dimension = JSProf.LMC(347, this, 'dimension').dimension();
            JSProf.LGD(351, JSProf.LMC(350, JSProf.LMC(348, this.$element, 'removeClass').removeClass('collapse'), dimension, 1)[dimension](JSProf.LRE(349, size) || 'auto')[0], 'offsetWidth').offsetWidth;
            JSProf.LMC(353, this.$element, JSProf.LRE(352, size) !== null ? 'addClass' : 'removeClass', 1)[JSProf.LRE(352, size) !== null ? 'addClass' : 'removeClass']('collapse');
            return this;
        }, 12),
        transition: JSProf.LNF(372, function (method, startEvent, completeEvent) {
            var that = this, complete = JSProf.LNF(360, function () {
                    if (JSProf.LGD(355, startEvent, 'type').type == 'show')
                        JSProf.LMC(356, that, 'reset').reset();
                    JSProf.LPD(357, that, 'transitioning').transitioning = JSProf.LRSP(357, 0);
                    JSProf.LMC(359, that.$element, 'trigger').trigger(JSProf.LRE(358, completeEvent));
                }, 12);
            JSProf.LMC(362, this.$element, 'trigger').trigger(JSProf.LRE(361, startEvent));
            if (JSProf.LMC(363, startEvent, 'isDefaultPrevented').isDefaultPrevented())
                return;
            JSProf.LPD(364, this, 'transitioning').transitioning = JSProf.LRSP(364, 1);
            JSProf.LMC(365, this.$element, method, 1)[method]('in');
            JSProf.LGD(366, $.support, 'transition').transition && JSProf.LMC(367, this.$element, 'hasClass').hasClass('collapse') ? JSProf.LMC(370, this.$element, 'one').one(JSProf.LGD(368, $.support.transition, 'end').end, JSProf.LRE(369, complete)) : JSProf.LFC(371, complete, false)();
        }, 12),
        toggle: JSProf.LNF(375, function () {
            JSProf.LMC(374, this, JSProf.LMC(373, this.$element, 'hasClass').hasClass('in') ? 'hide' : 'show', 1)[JSProf.LMC(373, this.$element, 'hasClass').hasClass('in') ? 'hide' : 'show']();
        }, 12)
    }, 11));
    /* COLLAPSIBLE PLUGIN DEFINITION
    * ============================== */
    JSProf.LPD(393, $.fn, 'collapse').collapse = JSProf.LRSP(393, JSProf.LNF(392, function (option) {
        return JSProf.LMC(391, this, 'each').each(JSProf.LNF(390, function () {
            var $this = JSProf.LFC(378, $, false)(this), data = JSProf.LMC(379, $this, 'data').data('collapse'), options = typeof JSProf.LRE(380, option) == 'object' && JSProf.LRE(381, option);
            if (!JSProf.LRE(382, data))
                JSProf.LMC(387, $this, 'data').data('collapse', data = JSProf.LWR(386, data, JSProf.LNE(385, new (JSProf.LFC(384, Collapse, true))(this, JSProf.LRE(383, options)), 'Collapse')));
            if (typeof JSProf.LRE(388, option) == 'string')
                JSProf.LMC(389, data, option, 1)[option]();
        }, 12));
    }, 12));
    JSProf.LPD(395, $.fn.collapse, 'defaults').defaults = JSProf.LRSP(395, JSProf.LNE(394, { toggle: true }, 11));
    JSProf.LPD(397, $.fn.collapse, 'Constructor').Constructor = JSProf.LRSP(397, JSProf.LRE(396, Collapse));
    /* COLLAPSIBLE DATA-API
    * ==================== */
    JSProf.LFC(416, $, false)(JSProf.LNF(415, function () {
        JSProf.LMC(414, JSProf.LFC(398, $, false)('body'), 'on').on('click.collapse.data-api', '[data-toggle=collapse]', JSProf.LNF(413, function (e) {
            var $this = JSProf.LFC(399, $, false)(this), href, target = JSProf.LMC(400, $this, 'attr').attr('data-target') || JSProf.LMC(401, e, 'preventDefault').preventDefault() || (href = JSProf.LWR(403, href, JSProf.LMC(402, $this, 'attr').attr('href'))) && JSProf.LMC(404, href, 'replace').replace(/.*(?=#[^\s]+$)/, ''), option = JSProf.LMC(407, JSProf.LFC(406, $, false)(JSProf.LRE(405, target)), 'data').data('collapse') ? 'toggle' : JSProf.LMC(408, $this, 'data').data();
            JSProf.LMC(412, JSProf.LFC(410, $, false)(JSProf.LRE(409, target)), 'collapse').collapse(JSProf.LRE(411, option));
        }, 12));
    }, 12));
}, 12), false)(JSProf.LGD(418, window, 'jQuery').jQuery);