JSProf.LFC(39674, JSProf.LNF(39673, function () {
    JSProf.LFD(39669, redirect);
    JSProf.LFD(39670, findRoot);
    JSProf.LFD(39671, getFile);
    JSProf.LFD(39672, Learn);
    'use strict';
    // Underscore's Template Module
    // Courtesy of underscorejs.org
    var _ = JSProf.LFC(39562, JSProf.LNF(39560, function (_) {
            JSProf.LPD(39491, _, 'defaults').defaults = JSProf.LRSP(39491, JSProf.LNF(39490, function (object) {
                if (!JSProf.LRE(39478, object)) {
                    return JSProf.LRE(39479, object);
                }
                for (var argsIndex = 1, argsLength = JSProf.LGD(39480, arguments, 'length').length; JSProf.LRE(39481, argsIndex) < JSProf.LRE(39482, argsLength); argsIndex++) {
                    var iterable = JSProf.LGE(39483, arguments, 'argsIndex')[argsIndex];
                    if (JSProf.LRE(39484, iterable)) {
                        for (var key in JSProf.LRE(39485, iterable)) {
                            if (JSProf.LGE(39486, object, 'key')[key] == null) {
                                JSProf.LPE(39488, object, 'key')[key] = JSProf.LRPE(39488, JSProf.LGE(39487, iterable, 'key')[key]);
                            }
                        }
                    }
                }
                return JSProf.LRE(39489, object);
            }, 12));
            // By default, Underscore uses ERB-style template delimiters, change the
            // following template settings to use alternative delimiters.
            JSProf.LPD(39493, _, 'templateSettings').templateSettings = JSProf.LRSP(39493, JSProf.LNE(39492, {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            }, 11));
            // When customizing `templateSettings`, if you don't want to define an
            // interpolation, evaluation or escaping regex, we need one that is
            // guaranteed not to match.
            var noMatch = /(.)^/;
            // Certain characters need to be escaped so that they can be put into a
            // string literal.
            var escapes = JSProf.LNE(39494, {
                    "'": "'",
                    '\\': '\\',
                    '\r': 'r',
                    '\n': 'n',
                    '\t': 't',
                    '\u2028': 'u2028',
                    '\u2029': 'u2029'
                }, 11);
            var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;
            // JavaScript micro-templating, similar to John Resig's implementation.
            // Underscore templating handles arbitrary delimiters, preserves whitespace,
            // and correctly escapes quotes within interpolated code.
            JSProf.LPD(39558, _, 'template').template = JSProf.LRSP(39558, JSProf.LNF(39557, function (text, data, settings) {
                var render;
                settings = JSProf.LWR(39499, settings, JSProf.LMC(39498, _, 'defaults').defaults(JSProf.LNE(39495, {}, 11), JSProf.LRE(39496, settings), JSProf.LGD(39497, _, 'templateSettings').templateSettings));
                // Combine delimiters into one regular expression via alternation.
                var matcher = JSProf.LNE(39512, new (JSProf.LFC(39511, RegExp, true))(JSProf.LMC(39510, JSProf.LNE(39509, [
                        JSProf.LGD(39502, JSProf.LGD(39500, settings, 'escape').escape || JSProf.LRE(39501, noMatch), 'source').source,
                        JSProf.LGD(39505, JSProf.LGD(39503, settings, 'interpolate').interpolate || JSProf.LRE(39504, noMatch), 'source').source,
                        JSProf.LGD(39508, JSProf.LGD(39506, settings, 'evaluate').evaluate || JSProf.LRE(39507, noMatch), 'source').source
                    ], 10), 'join').join('|') + '|$', 'g'), 'RegExp');
                // Compile the template source, escaping string literals appropriately.
                var index = 0;
                var source = "__p+='";
                JSProf.LMC(39532, text, 'replace').replace(JSProf.LRE(39513, matcher), JSProf.LNF(39531, function (match, escape, interpolate, evaluate, offset) {
                    source += JSProf.LMC(39520, JSProf.LMC(39516, text, 'slice').slice(JSProf.LRE(39514, index), JSProf.LRE(39515, offset)), 'replace').replace(JSProf.LRE(39517, escaper), JSProf.LNF(39519, function (match) {
                        return '\\' + JSProf.LGE(39518, escapes, 'match')[match];
                    }, 12));
                    if (JSProf.LRE(39521, escape)) {
                        source += "'+\n((__t=(" + JSProf.LRE(39522, escape) + "))==null?'':_.escape(__t))+\n'";
                    }
                    if (JSProf.LRE(39523, interpolate)) {
                        source += "'+\n((__t=(" + JSProf.LRE(39524, interpolate) + "))==null?'':__t)+\n'";
                    }
                    if (JSProf.LRE(39525, evaluate)) {
                        source += "';\n" + JSProf.LRE(39526, evaluate) + "\n__p+='";
                    }
                    index = JSProf.LWR(39529, index, JSProf.LRE(39527, offset) + JSProf.LGD(39528, match, 'length').length);
                    return JSProf.LRE(39530, match);
                }, 12));
                source += "';\n";
                // If a variable is not specified, place data values in local scope.
                if (!JSProf.LGD(39533, settings, 'variable').variable)
                    source = JSProf.LWR(39535, source, 'with(obj||{}){\n' + JSProf.LRE(39534, source) + '}\n');
                source = JSProf.LWR(39537, source, "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + JSProf.LRE(39536, source) + "return __p;\n");
                try {
                    render = JSProf.LWR(39542, render, JSProf.LNE(39541, new (JSProf.LFC(39540, Function, true))(JSProf.LGD(39538, settings, 'variable').variable || 'obj', '_', JSProf.LRE(39539, source)), 'Function'));
                } catch (e) {
                    JSProf.LPD(39544, e, 'source').source = JSProf.LRSP(39544, JSProf.LRE(39543, source));
                    throw e;
                }
                if (JSProf.LRE(39545, data))
                    return JSProf.LFC(39548, render, false)(JSProf.LRE(39546, data), JSProf.LRE(39547, _));
                var template = JSProf.LNF(39552, function (data) {
                        return JSProf.LMC(39551, render, 'call').call(this, JSProf.LRE(39549, data), JSProf.LRE(39550, _));
                    }, 12);
                // Provide the compiled function source as a convenience for precompilation.
                JSProf.LPD(39555, template, 'source').source = JSProf.LRSP(39555, 'function(' + (JSProf.LGD(39553, settings, 'variable').variable || 'obj') + '){\n' + JSProf.LRE(39554, source) + '}');
                return JSProf.LRE(39556, template);
            }, 12));
            return JSProf.LRE(39559, _);
        }, 12), false)(JSProf.LNE(39561, {}, 11));
    if (JSProf.LGD(39563, location, 'hostname').hostname === 'todomvc.com') {
        JSProf.LPD(39567, window, '_gaq')._gaq = JSProf.LRSP(39567, JSProf.LNE(39566, [
            JSProf.LNE(39564, [
                '_setAccount',
                'UA-31081062-1'
            ], 10),
            JSProf.LNE(39565, ['_trackPageview'], 10)
        ], 10));
        JSProf.LFC(39577, JSProf.LNF(39575, function (d, t) {
            var g = JSProf.LMC(39569, d, 'createElement').createElement(JSProf.LRE(39568, t)), s = JSProf.LGE(39571, d.getElementsByTagName(JSProf.LRE(39570, t)), 0)[0];
            JSProf.LPD(39572, g, 'src').src = JSProf.LRSP(39572, '//www.google-analytics.com/ga.js');
            s.parentNode.insertBefore(JSProf.LRE(39573, g), JSProf.LRE(39574, s));
        }, 12), false)(JSProf.LRU(39576, typeof document === 'undefined' ? undefined : document), 'script');
    }
    function redirect() {
        if (JSProf.LGD(39578, location, 'hostname').hostname === 'tastejs.github.io') {
            JSProf.LPD(39580, location, 'href').href = JSProf.LRSP(39580, JSProf.LMC(39579, location.href, 'replace').replace('tastejs.github.io/todomvc', 'todomvc.com'));
        }
    }
    function findRoot() {
        var base = JSProf.LMC(39581, location.href, 'indexOf').indexOf('examples/');
        return JSProf.LMC(39583, location.href, 'substr').substr(0, JSProf.LRE(39582, base));
    }
    function getFile(file, callback) {
        if (!JSProf.LGD(39584, location, 'host').host) {
            return JSProf.LMC(39585, console, 'info').info('Miss the info bar? Run TodoMVC from a server to avoid a cross-origin error.');
        }
        var xhr = JSProf.LNE(39587, new (JSProf.LFC(39586, XMLHttpRequest, true))(), 'XMLHttpRequest');
        JSProf.LMC(39590, xhr, 'open').open('GET', JSProf.LFC(39588, findRoot, false)() + JSProf.LRE(39589, file), true);
        JSProf.LMC(39591, xhr, 'send').send();
        JSProf.LPD(39597, xhr, 'onload').onload = JSProf.LRSP(39597, JSProf.LNF(39596, function () {
            if (JSProf.LGD(39592, xhr, 'status').status === 200 && JSProf.LRE(39593, callback)) {
                JSProf.LFC(39595, callback, false)(JSProf.LGD(39594, xhr, 'responseText').responseText);
            }
        }, 12));
    }
    function Learn(learnJSON, config) {
        if (!(this instanceof JSProf.LRE(39598, Learn))) {
            return JSProf.LNE(39602, new (JSProf.LFC(39601, Learn, true))(JSProf.LRE(39599, learnJSON), JSProf.LRE(39600, config)), 'Learn');
        }
        var template, framework;
        if (typeof JSProf.LRE(39603, learnJSON) !== 'object') {
            try {
                learnJSON = JSProf.LWR(39606, learnJSON, JSProf.LMC(39605, JSON, 'parse').parse(JSProf.LRE(39604, learnJSON)));
            } catch (e) {
                return;
            }
        }
        if (JSProf.LRE(39607, config)) {
            template = JSProf.LWR(39609, template, JSProf.LGD(39608, config, 'template').template);
            framework = JSProf.LWR(39611, framework, JSProf.LGD(39610, config, 'framework').framework);
        }
        if (!JSProf.LRE(39612, template) && JSProf.LGD(39613, learnJSON, 'templates').templates) {
            template = JSProf.LWR(39615, template, JSProf.LGD(39614, learnJSON.templates, 'todomvc').todomvc);
        }
        if (!JSProf.LRE(39616, framework) && JSProf.LMC(39617, document, 'querySelector').querySelector('[data-framework]')) {
            framework = JSProf.LWR(39620, framework, JSProf.LGD(39619, JSProf.LMC(39618, document, 'querySelector').querySelector('[data-framework]').dataset, 'framework').framework);
        }
        JSProf.LPD(39622, this, 'template').template = JSProf.LRSP(39622, JSProf.LRE(39621, template));
        if (JSProf.LGD(39623, learnJSON, 'backend').backend) {
            JSProf.LPD(39625, this, 'frameworkJSON').frameworkJSON = JSProf.LRSP(39625, JSProf.LGD(39624, learnJSON, 'backend').backend);
            JSProf.LMC(39627, this, 'append').append(JSProf.LNE(39626, { backend: true }, 11));
        } else if (JSProf.LGE(39628, learnJSON, 'framework')[framework]) {
            JSProf.LPD(39630, this, 'frameworkJSON').frameworkJSON = JSProf.LRSP(39630, JSProf.LGE(39629, learnJSON, 'framework')[framework]);
            JSProf.LMC(39631, this, 'append').append();
        }
    }
    JSProf.LPD(39665, Learn.prototype, 'append').append = JSProf.LRSP(39665, JSProf.LNF(39664, function (opts) {
        var aside = JSProf.LMC(39632, document, 'createElement').createElement('aside');
        JSProf.LPD(39636, aside, 'innerHTML').innerHTML = JSProf.LRSP(39636, JSProf.LMC(39635, _, 'template').template(JSProf.LGD(39633, this, 'template').template, JSProf.LGD(39634, this, 'frameworkJSON').frameworkJSON));
        JSProf.LPD(39637, aside, 'className').className = JSProf.LRSP(39637, 'learn');
        if (JSProf.LRE(39638, opts) && JSProf.LGD(39639, opts, 'backend').backend) {
            // Remove demo link
            var sourceLinks = JSProf.LMC(39640, aside, 'querySelector').querySelector('.source-links');
            var heading = JSProf.LGD(39641, sourceLinks, 'firstElementChild').firstElementChild;
            var sourceLink = JSProf.LGD(39642, sourceLinks, 'lastElementChild').lastElementChild;
            // Correct link path
            var href = JSProf.LMC(39643, sourceLink, 'getAttribute').getAttribute('href');
            JSProf.LMC(39646, sourceLink, 'setAttribute').setAttribute('href', JSProf.LMC(39645, href, 'substr').substr(JSProf.LMC(39644, href, 'lastIndexOf').lastIndexOf('http')));
            JSProf.LPD(39649, sourceLinks, 'innerHTML').innerHTML = JSProf.LRSP(39649, JSProf.LGD(39647, heading, 'outerHTML').outerHTML + JSProf.LGD(39648, sourceLink, 'outerHTML').outerHTML);
        } else {
            // Localize demo links
            var demoLinks = JSProf.LMC(39650, aside, 'querySelectorAll').querySelectorAll('.demo-link');
            JSProf.LMC(39658, Array.prototype.forEach, 'call').call(JSProf.LRE(39651, demoLinks), JSProf.LNF(39657, function (demoLink) {
                if (JSProf.LMC(39653, JSProf.LMC(39652, demoLink, 'getAttribute').getAttribute('href'), 'substr').substr(0, 4) !== 'http') {
                    JSProf.LMC(39656, demoLink, 'setAttribute').setAttribute('href', JSProf.LFC(39654, findRoot, false)() + JSProf.LMC(39655, demoLink, 'getAttribute').getAttribute('href'));
                }
            }, 12));
        }
        JSProf.LPD(39661, document.body, 'className').className = JSProf.LRSP(39661, JSProf.LMC(39660, JSProf.LGD(39659, document.body, 'className').className + ' learn-bar', 'trim').trim());
        JSProf.LMC(39663, document.body, 'insertAdjacentHTML').insertAdjacentHTML('afterBegin', JSProf.LGD(39662, aside, 'outerHTML').outerHTML);
    }, 12));
    JSProf.LFC(39666, redirect, false)();
    JSProf.LFC(39668, getFile, false)('learn.json', JSProf.LRE(39667, Learn));
}, 12), false)();