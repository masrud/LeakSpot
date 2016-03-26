JSProf.LFC(222, JSProf.LNF(221, function () {
    JSProf.LFD(217, redirect);
    JSProf.LFD(218, findRoot);
    JSProf.LFD(219, getFile);
    JSProf.LFD(220, Learn);
    'use strict';
    // Underscore's Template Module
    // Courtesy of underscorejs.org
    var _ = JSProf.LFC(110, JSProf.LNF(108, function (_) {
            JSProf.LPD(39, _, 'defaults').defaults = JSProf.LRSP(39, JSProf.LNF(38, function (object) {
                if (!JSProf.LRE(26, object)) {
                    return JSProf.LRE(27, object);
                }
                for (var argsIndex = 1, argsLength = JSProf.LGD(28, arguments, 'length').length; JSProf.LRE(29, argsIndex) < JSProf.LRE(30, argsLength); argsIndex++) {
                    var iterable = JSProf.LGE(31, arguments, 'argsIndex')[argsIndex];
                    if (JSProf.LRE(32, iterable)) {
                        for (var key in JSProf.LRE(33, iterable)) {
                            if (JSProf.LGE(34, object, 'key')[key] == null) {
                                JSProf.LPE(36, object, 'key')[key] = JSProf.LRPE(36, JSProf.LGE(35, iterable, 'key')[key]);
                            }
                        }
                    }
                }
                return JSProf.LRE(37, object);
            }, 12));
            // By default, Underscore uses ERB-style template delimiters, change the
            // following template settings to use alternative delimiters.
            JSProf.LPD(41, _, 'templateSettings').templateSettings = JSProf.LRSP(41, JSProf.LNE(40, {
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
            var escapes = JSProf.LNE(42, {
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
            JSProf.LPD(106, _, 'template').template = JSProf.LRSP(106, JSProf.LNF(105, function (text, data, settings) {
                var render;
                settings = JSProf.LWR(47, settings, JSProf.LMC(46, _, 'defaults').defaults(JSProf.LNE(43, {}, 11), JSProf.LRE(44, settings), JSProf.LGD(45, _, 'templateSettings').templateSettings));
                // Combine delimiters into one regular expression via alternation.
                var matcher = JSProf.LNE(60, new (JSProf.LFC(59, RegExp, true))(JSProf.LMC(58, JSProf.LNE(57, [
                        JSProf.LGD(50, JSProf.LGD(48, settings, 'escape').escape || JSProf.LRE(49, noMatch), 'source').source,
                        JSProf.LGD(53, JSProf.LGD(51, settings, 'interpolate').interpolate || JSProf.LRE(52, noMatch), 'source').source,
                        JSProf.LGD(56, JSProf.LGD(54, settings, 'evaluate').evaluate || JSProf.LRE(55, noMatch), 'source').source
                    ], 10), 'join').join('|') + '|$', 'g'), 'RegExp');
                // Compile the template source, escaping string literals appropriately.
                var index = 0;
                var source = "__p+='";
                JSProf.LMC(80, text, 'replace').replace(JSProf.LRE(61, matcher), JSProf.LNF(79, function (match, escape, interpolate, evaluate, offset) {
                    source += JSProf.LMC(68, JSProf.LMC(64, text, 'slice').slice(JSProf.LRE(62, index), JSProf.LRE(63, offset)), 'replace').replace(JSProf.LRE(65, escaper), JSProf.LNF(67, function (match) {
                        return '\\' + JSProf.LGE(66, escapes, 'match')[match];
                    }, 12));
                    if (JSProf.LRE(69, escape)) {
                        source += "'+\n((__t=(" + JSProf.LRE(70, escape) + "))==null?'':_.escape(__t))+\n'";
                    }
                    if (JSProf.LRE(71, interpolate)) {
                        source += "'+\n((__t=(" + JSProf.LRE(72, interpolate) + "))==null?'':__t)+\n'";
                    }
                    if (JSProf.LRE(73, evaluate)) {
                        source += "';\n" + JSProf.LRE(74, evaluate) + "\n__p+='";
                    }
                    index = JSProf.LWR(77, index, JSProf.LRE(75, offset) + JSProf.LGD(76, match, 'length').length);
                    return JSProf.LRE(78, match);
                }, 12));
                source += "';\n";
                // If a variable is not specified, place data values in local scope.
                if (!JSProf.LGD(81, settings, 'variable').variable)
                    source = JSProf.LWR(83, source, 'with(obj||{}){\n' + JSProf.LRE(82, source) + '}\n');
                source = JSProf.LWR(85, source, "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + JSProf.LRE(84, source) + "return __p;\n");
                try {
                    render = JSProf.LWR(90, render, JSProf.LNE(89, new (JSProf.LFC(88, Function, true))(JSProf.LGD(86, settings, 'variable').variable || 'obj', '_', JSProf.LRE(87, source)), 'Function'));
                } catch (e) {
                    JSProf.LPD(92, e, 'source').source = JSProf.LRSP(92, JSProf.LRE(91, source));
                    throw e;
                }
                if (JSProf.LRE(93, data))
                    return JSProf.LFC(96, render, false)(JSProf.LRE(94, data), JSProf.LRE(95, _));
                var template = JSProf.LNF(100, function (data) {
                        return JSProf.LMC(99, render, 'call').call(this, JSProf.LRE(97, data), JSProf.LRE(98, _));
                    }, 12);
                // Provide the compiled function source as a convenience for precompilation.
                JSProf.LPD(103, template, 'source').source = JSProf.LRSP(103, 'function(' + (JSProf.LGD(101, settings, 'variable').variable || 'obj') + '){\n' + JSProf.LRE(102, source) + '}');
                return JSProf.LRE(104, template);
            }, 12));
            return JSProf.LRE(107, _);
        }, 12), false)(JSProf.LNE(109, {}, 11));
    if (JSProf.LGD(111, location, 'hostname').hostname === 'todomvc.com') {
        JSProf.LPD(115, window, '_gaq')._gaq = JSProf.LRSP(115, JSProf.LNE(114, [
            JSProf.LNE(112, [
                '_setAccount',
                'UA-31081062-1'
            ], 10),
            JSProf.LNE(113, ['_trackPageview'], 10)
        ], 10));
        JSProf.LFC(125, JSProf.LNF(123, function (d, t) {
            var g = JSProf.LMC(117, d, 'createElement').createElement(JSProf.LRE(116, t)), s = JSProf.LGE(119, d.getElementsByTagName(JSProf.LRE(118, t)), 0)[0];
            JSProf.LPD(120, g, 'src').src = JSProf.LRSP(120, '//www.google-analytics.com/ga.js');
            s.parentNode.insertBefore(JSProf.LRE(121, g), JSProf.LRE(122, s));
        }, 12), false)(JSProf.LRU(124, typeof document === 'undefined' ? undefined : document), 'script');
    }
    function redirect() {
        if (JSProf.LGD(126, location, 'hostname').hostname === 'tastejs.github.io') {
            JSProf.LPD(128, location, 'href').href = JSProf.LRSP(128, JSProf.LMC(127, location.href, 'replace').replace('tastejs.github.io/todomvc', 'todomvc.com'));
        }
    }
    function findRoot() {
        var base = JSProf.LMC(129, location.href, 'indexOf').indexOf('examples/');
        return JSProf.LMC(131, location.href, 'substr').substr(0, JSProf.LRE(130, base));
    }
    function getFile(file, callback) {
        if (!JSProf.LGD(132, location, 'host').host) {
            return JSProf.LMC(133, console, 'info').info('Miss the info bar? Run TodoMVC from a server to avoid a cross-origin error.');
        }
        var xhr = JSProf.LNE(135, new (JSProf.LFC(134, XMLHttpRequest, true))(), 'XMLHttpRequest');
        JSProf.LMC(138, xhr, 'open').open('GET', JSProf.LFC(136, findRoot, false)() + JSProf.LRE(137, file), true);
        JSProf.LMC(139, xhr, 'send').send();
        JSProf.LPD(145, xhr, 'onload').onload = JSProf.LRSP(145, JSProf.LNF(144, function () {
            if (JSProf.LGD(140, xhr, 'status').status === 200 && JSProf.LRE(141, callback)) {
                JSProf.LFC(143, callback, false)(JSProf.LGD(142, xhr, 'responseText').responseText);
            }
        }, 12));
    }
    function Learn(learnJSON, config) {
        if (!(this instanceof JSProf.LRE(146, Learn))) {
            return JSProf.LNE(150, new (JSProf.LFC(149, Learn, true))(JSProf.LRE(147, learnJSON), JSProf.LRE(148, config)), 'Learn');
        }
        var template, framework;
        if (typeof JSProf.LRE(151, learnJSON) !== 'object') {
            try {
                learnJSON = JSProf.LWR(154, learnJSON, JSProf.LMC(153, JSON, 'parse').parse(JSProf.LRE(152, learnJSON)));
            } catch (e) {
                return;
            }
        }
        if (JSProf.LRE(155, config)) {
            template = JSProf.LWR(157, template, JSProf.LGD(156, config, 'template').template);
            framework = JSProf.LWR(159, framework, JSProf.LGD(158, config, 'framework').framework);
        }
        if (!JSProf.LRE(160, template) && JSProf.LGD(161, learnJSON, 'templates').templates) {
            template = JSProf.LWR(163, template, JSProf.LGD(162, learnJSON.templates, 'todomvc').todomvc);
        }
        if (!JSProf.LRE(164, framework) && JSProf.LMC(165, document, 'querySelector').querySelector('[data-framework]')) {
            framework = JSProf.LWR(168, framework, JSProf.LGD(167, JSProf.LMC(166, document, 'querySelector').querySelector('[data-framework]').dataset, 'framework').framework);
        }
        JSProf.LPD(170, this, 'template').template = JSProf.LRSP(170, JSProf.LRE(169, template));
        if (JSProf.LGD(171, learnJSON, 'backend').backend) {
            JSProf.LPD(173, this, 'frameworkJSON').frameworkJSON = JSProf.LRSP(173, JSProf.LGD(172, learnJSON, 'backend').backend);
            JSProf.LMC(175, this, 'append').append(JSProf.LNE(174, { backend: true }, 11));
        } else if (JSProf.LGE(176, learnJSON, 'framework')[framework]) {
            JSProf.LPD(178, this, 'frameworkJSON').frameworkJSON = JSProf.LRSP(178, JSProf.LGE(177, learnJSON, 'framework')[framework]);
            JSProf.LMC(179, this, 'append').append();
        }
    }
    JSProf.LPD(213, Learn.prototype, 'append').append = JSProf.LRSP(213, JSProf.LNF(212, function (opts) {
        var aside = JSProf.LMC(180, document, 'createElement').createElement('aside');
        JSProf.LPD(184, aside, 'innerHTML').innerHTML = JSProf.LRSP(184, JSProf.LMC(183, _, 'template').template(JSProf.LGD(181, this, 'template').template, JSProf.LGD(182, this, 'frameworkJSON').frameworkJSON));
        JSProf.LPD(185, aside, 'className').className = JSProf.LRSP(185, 'learn');
        if (JSProf.LRE(186, opts) && JSProf.LGD(187, opts, 'backend').backend) {
            // Remove demo link
            var sourceLinks = JSProf.LMC(188, aside, 'querySelector').querySelector('.source-links');
            var heading = JSProf.LGD(189, sourceLinks, 'firstElementChild').firstElementChild;
            var sourceLink = JSProf.LGD(190, sourceLinks, 'lastElementChild').lastElementChild;
            // Correct link path
            var href = JSProf.LMC(191, sourceLink, 'getAttribute').getAttribute('href');
            JSProf.LMC(194, sourceLink, 'setAttribute').setAttribute('href', JSProf.LMC(193, href, 'substr').substr(JSProf.LMC(192, href, 'lastIndexOf').lastIndexOf('http')));
            JSProf.LPD(197, sourceLinks, 'innerHTML').innerHTML = JSProf.LRSP(197, JSProf.LGD(195, heading, 'outerHTML').outerHTML + JSProf.LGD(196, sourceLink, 'outerHTML').outerHTML);
        } else {
            // Localize demo links
            var demoLinks = JSProf.LMC(198, aside, 'querySelectorAll').querySelectorAll('.demo-link');
            JSProf.LMC(206, Array.prototype.forEach, 'call').call(JSProf.LRE(199, demoLinks), JSProf.LNF(205, function (demoLink) {
                if (JSProf.LMC(201, JSProf.LMC(200, demoLink, 'getAttribute').getAttribute('href'), 'substr').substr(0, 4) !== 'http') {
                    JSProf.LMC(204, demoLink, 'setAttribute').setAttribute('href', JSProf.LFC(202, findRoot, false)() + JSProf.LMC(203, demoLink, 'getAttribute').getAttribute('href'));
                }
            }, 12));
        }
        JSProf.LPD(209, document.body, 'className').className = JSProf.LRSP(209, JSProf.LMC(208, JSProf.LGD(207, document.body, 'className').className + ' learn-bar', 'trim').trim());
        JSProf.LMC(211, document.body, 'insertAdjacentHTML').insertAdjacentHTML('afterBegin', JSProf.LGD(210, aside, 'outerHTML').outerHTML);
    }, 12));
    JSProf.LFC(214, redirect, false)();
    JSProf.LFC(216, getFile, false)('learn.json', JSProf.LRE(215, Learn));
}, 12), false)();