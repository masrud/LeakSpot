JSProf.LFC(2402, JSProf.LNF(2384, function (userConfig, defaultConfig) {
    // summary:
    //		This is the "source loader" and is the entry point for Dojo during development. You may also load Dojo with
    //		any AMD-compliant loader via the package main module dojo/main.
    // description:
    //		This is the "source loader" for Dojo. It provides an AMD-compliant loader that can be configured
    //		to operate in either synchronous or asynchronous modes. After the loader is defined, dojo is loaded
    //		IAW the package main module dojo/main. In the event you wish to use a foreign loader, you may load dojo as a package
    //		via the package main module dojo/main and this loader is not required; see dojo/package.json for details.
    //
    //		In order to keep compatibility with the v1.x line, this loader includes additional machinery that enables
    //		the dojo.provide, dojo.require et al API. This machinery is loaded by default, but may be dynamically removed
    //		via the has.js API and statically removed via the build system.
    //
    //		This loader includes sniffing machinery to determine the environment; the following environments are supported:
    //
    //		- browser
    //		- node.js
    //		- rhino
    //
    //		This is the so-called "source loader". As such, it includes many optional features that may be discarded by
    //		building a customized version with the build system.
    // Design and Implementation Notes
    //
    // This is a dojo-specific adaption of bdLoad, donated to the dojo foundation by Altoviso LLC.
    //
    // This function defines an AMD-compliant (http://wiki.commonjs.org/wiki/Modules/AsynchronousDefinition)
    // loader that can be configured to operate in either synchronous or asynchronous modes.
    //
    // Since this machinery implements a loader, it does not have the luxury of using a load system and/or
    // leveraging a utility library. This results in an unpleasantly long file; here is a road map of the contents:
    //
    //	 1. Small library for use implementing the loader.
    //	 2. Define the has.js API; this is used throughout the loader to bracket features.
    //	 3. Define the node.js and rhino sniffs and sniff.
    //	 4. Define the loader's data.
    //	 5. Define the configuration machinery.
    //	 6. Define the script element sniffing machinery and sniff for configuration data.
    //	 7. Configure the loader IAW the provided user, default, and sniffing data.
    //	 8. Define the global require function.
    //	 9. Define the module resolution machinery.
    //	10. Define the module and plugin module definition machinery
    //	11. Define the script injection machinery.
    //	12. Define the window load detection.
    //	13. Define the logging API.
    //	14. Define the tracing API.
    //	16. Define the AMD define function.
    //	17. Define the dojo v1.x provide/require machinery--so called "legacy" modes.
    //	18. Publish global variables.
    //
    // Language and Acronyms and Idioms
    //
    // moduleId: a CJS module identifier, (used for public APIs)
    // mid: moduleId (used internally)
    // packageId: a package identifier (used for public APIs)
    // pid: packageId (used internally); the implied system or default package has pid===""
    // pack: package is used internally to reference a package object (since javascript has reserved words including "package")
    // prid: plugin resource identifier
    // The integer constant 1 is used in place of true and 0 in place of false.
    // define a minimal library to help build the loader
    var noop = JSProf.LNF(541, function () {
        }, 12), isEmpty = JSProf.LNF(543, function (it) {
            for (var p in JSProf.LRE(542, it)) {
                return 0;
            }
            return 1;
        }, 12), toString = JSProf.LGD(545, JSProf.LNE(544, {}, 11), 'toString').toString, isFunction = JSProf.LNF(548, function (it) {
            return JSProf.LMC(547, toString, 'call').call(JSProf.LRE(546, it)) == "[object Function]";
        }, 12), isString = JSProf.LNF(551, function (it) {
            return JSProf.LMC(550, toString, 'call').call(JSProf.LRE(549, it)) == "[object String]";
        }, 12), isArray = JSProf.LNF(554, function (it) {
            return JSProf.LMC(553, toString, 'call').call(JSProf.LRE(552, it)) == "[object Array]";
        }, 12), forEach = JSProf.LNF(560, function (vector, callback) {
            if (JSProf.LRE(555, vector)) {
                for (var i = 0; JSProf.LRE(556, i) < JSProf.LGD(557, vector, 'length').length;) {
                    JSProf.LFC(559, callback, false)(JSProf.LGE(558, vector, JSProf.TMPS.ta0c22c32c6f4a9b9c6b5d267367f12de5dd68c25 = i++)[JSProf.TMPS.ta0c22c32c6f4a9b9c6b5d267367f12de5dd68c25]);
                }
            }
        }, 12), mix = JSProf.LNF(565, function (dest, src) {
            for (var p in JSProf.LRE(561, src)) {
                JSProf.LPE(563, dest, 'p')[p] = JSProf.LRPE(563, JSProf.LGE(562, src, 'p')[p]);
            }
            return JSProf.LRE(564, dest);
        }, 12), makeError = JSProf.LNF(571, function (error, info) {
            return JSProf.LFC(570, mix, false)(JSProf.LNE(568, new (JSProf.LFC(567, Error, true))(JSProf.LRE(566, error)), 'Error'), JSProf.LNE(569, {
                src: "dojoLoader",
                info: info
            }, 11));
        }, 12), uidSeed = 1, uid = JSProf.LNF(572, function () {
            // Returns a unique identifier (within the lifetime of the document) of the form /_d+/.
            return "_" + uidSeed++;
        }, 12),
        // FIXME: how to doc window.require() api
        // this will be the global require function; define it immediately so we can start hanging things off of it
        req = JSProf.LNF(578, function (config, dependencies, callback) {
            return JSProf.LFC(577, contextRequire, false)(JSProf.LRE(573, config), JSProf.LRE(574, dependencies), JSProf.LRE(575, callback), 0, JSProf.LRE(576, req));
        }, 12),
        // the loader uses the has.js API to control feature inclusion/exclusion; define then use throughout
        global = this, doc = JSProf.LGD(579, global, 'document').document, element = JSProf.LRE(580, doc) && JSProf.LMC(581, doc, 'createElement').createElement("DiV"), has = JSProf.LPD(591, req, 'has').has = JSProf.LRSP(591, JSProf.LNF(590, function (name) {
            return JSProf.LFC(583, isFunction, false)(JSProf.LGE(582, hasCache, 'name')[name]) ? JSProf.LPE(588, hasCache, 'name')[name] = JSProf.LRPE(588, JSProf.LMC(587, hasCache, JSProf.TMPS.t7b7f7d0964e37da81a2008811296a0bd2cc2751d = name, 1)[JSProf.TMPS.t7b7f7d0964e37da81a2008811296a0bd2cc2751d](JSProf.LRE(584, global), JSProf.LRE(585, doc), JSProf.LRE(586, element))) : JSProf.LGE(589, hasCache, 'name')[name];
        }, 12)), hasCache = JSProf.LPD(593, has, 'cache').cache = JSProf.LRSP(593, JSProf.LGD(592, defaultConfig, 'hasCache').hasCache);
    JSProf.LPD(602, has, 'add').add = JSProf.LRSP(602, JSProf.LNF(601, function (name, test, now, force) {
        (JSProf.LGE(594, hasCache, 'name')[name] === undefined || JSProf.LRE(595, force)) && (JSProf.LPE(597, hasCache, 'name')[name] = JSProf.LRPE(597, JSProf.LRE(596, test)));
        return JSProf.LRE(598, now) && JSProf.LFC(600, has, false)(JSProf.LRE(599, name));
    }, 12));
    JSProf.LMC(610, has, 'add').add("host-node", JSProf.LGD(603, userConfig, 'has').has && "host-node" in JSProf.LGD(604, userConfig, 'has').has ? JSProf.LGE(605, userConfig.has, 'host-node')["host-node"] : typeof JSProf.LRU(606, typeof process === 'undefined' ? undefined : process) == "object" && JSProf.LGD(607, process, 'versions').versions && JSProf.LGD(608, process.versions, 'node').node && JSProf.LGD(609, process.versions, 'v8').v8);
    if (JSProf.LFC(611, has, false)("host-node")) {
        // fixup the default config for node.js environment
        JSProf.LMC(614, JSProf.LFC(612, require, false)("./_base/configNode.js"), 'config').config(JSProf.LRE(613, defaultConfig));
        // remember node's require (with respect to baseUrl==dojo's root)
        JSProf.LPD(616, defaultConfig.loaderPatch, 'nodeRequire').nodeRequire = JSProf.LRSP(616, JSProf.LRU(615, typeof require === 'undefined' ? undefined : require));
    }
    JSProf.LMC(623, has, 'add').add("host-rhino", JSProf.LGD(617, userConfig, 'has').has && "host-rhino" in JSProf.LGD(618, userConfig, 'has').has ? JSProf.LGE(619, userConfig.has, 'host-rhino')["host-rhino"] : typeof JSProf.LRU(620, typeof load === 'undefined' ? undefined : load) == "function" && (typeof JSProf.LRU(621, typeof Packages === 'undefined' ? undefined : Packages) == "function" || typeof JSProf.LRU(622, typeof Packages === 'undefined' ? undefined : Packages) == "object"));
    if (JSProf.LFC(624, has, false)("host-rhino")) {
        // owing to rhino's lame feature that hides the source of the script, give the user a way to specify the baseUrl...
        for (var baseUrl = JSProf.LGD(625, userConfig, 'baseUrl').baseUrl || ".", arg, rhinoArgs = JSProf.LGD(626, this, 'arguments').arguments, i = 0; JSProf.LRE(627, i) < JSProf.LGD(628, rhinoArgs, 'length').length;) {
            arg = JSProf.LWR(630, arg, (JSProf.LGE(629, rhinoArgs, JSProf.TMPS.t7aa88f456c028bb1a9ae55fe845dae3fdae8e0ee = i++)[JSProf.TMPS.t7aa88f456c028bb1a9ae55fe845dae3fdae8e0ee] + "").split("="));
            if (JSProf.LGE(631, arg, 0)[0] == "baseUrl") {
                baseUrl = JSProf.LWR(633, baseUrl, JSProf.LGE(632, arg, 1)[1]);
                break;
            }
        }
        JSProf.LFC(635, load, false)(JSProf.LRE(634, baseUrl) + "/_base/configRhino.js");
        JSProf.LFC(639, rhinoDojoConfig, false)(JSProf.LRE(636, defaultConfig), JSProf.LRE(637, baseUrl), JSProf.LRE(638, rhinoArgs));
    }
    JSProf.LMC(643, has, 'add').add("host-webworker", typeof JSProf.LRU(640, typeof WorkerGlobalScope === 'undefined' ? undefined : WorkerGlobalScope) !== 'undefined' && JSProf.LRU(641, typeof self === 'undefined' ? undefined : self) instanceof JSProf.LRU(642, typeof WorkerGlobalScope === 'undefined' ? undefined : WorkerGlobalScope));
    if (JSProf.LFC(644, has, false)("host-webworker")) {
        JSProf.LFC(647, mix, false)(JSProf.LGD(645, defaultConfig, 'hasCache').hasCache, JSProf.LNE(646, {
            "host-browser": 0,
            "dom": 0,
            "dojo-dom-ready-api": 0,
            "dojo-sniff": 0,
            "dojo-inject-api": 1,
            "host-webworker": 1
        }, 11));
        JSProf.LPD(657, defaultConfig, 'loaderPatch').loaderPatch = JSProf.LRSP(657, JSProf.LNE(656, {
            injectUrl: JSProf.LNF(655, function (url, callback) {
                // TODO:
                //		This is not async, nor can it be in Webworkers.  It could be made better by passing
                //		the entire require array into importScripts at.  This way the scripts are loaded in
                //		async mode; even if the callbacks are ran in sync.  It is not a major issue as webworkers
                //		tend to be long running where initial startup is not a major factor.
                try {
                    JSProf.LFC(649, importScripts, false)(JSProf.LRE(648, url));
                    JSProf.LFC(650, callback, false)();
                } catch (e) {
                    JSProf.LMC(652, console, 'info').info("failed to load resource (" + JSProf.LRE(651, url) + ")");
                    JSProf.LMC(654, console, 'error').error(JSProf.LRE(653, e));
                }
            }, 12)
        }, 11));
    }
    // userConfig has tests override defaultConfig has tests; do this after the environment detection because
    // the environment detection usually sets some has feature values in the hasCache.
    for (var p in JSProf.LGD(658, userConfig, 'has').has) {
        JSProf.LMC(661, has, 'add').add(JSProf.LRE(659, p), JSProf.LGE(660, userConfig.has, 'p')[p], 0, 1);
    }
    //
    // define the loader data
    //
    // the loader will use these like symbols if the loader has the traceApi; otherwise
    // define magic numbers so that modules can be provided as part of defaultConfig
    var requested = 1, arrived = 2, nonmodule = 3, executing = 4, executed = 5;
    if (JSProf.LFC(662, has, false)("dojo-trace-api")) {
        // these make debugging nice; but using strings for symbols is a gross rookie error; don't do it for production code
        requested = JSProf.LWR(663, requested, "requested");
        arrived = JSProf.LWR(664, arrived, "arrived");
        nonmodule = JSProf.LWR(665, nonmodule, "not-a-module");
        executing = JSProf.LWR(666, executing, "executing");
        executed = JSProf.LWR(667, executed, "executed");
    }
    var legacyMode = 0, sync = "sync", xd = "xd", syncExecStack = JSProf.LNE(668, [], 10), dojoRequirePlugin = 0, checkDojoRequirePlugin = JSProf.LRE(669, noop), transformToAmd = JSProf.LRE(670, noop), getXhr;
    if (JSProf.LFC(671, has, false)("dojo-sync-loader")) {
        JSProf.LPD(673, req, 'isXdUrl').isXdUrl = JSProf.LRSP(673, JSProf.LRE(672, noop));
        JSProf.LPD(685, req, 'initSyncLoader').initSyncLoader = JSProf.LRSP(685, JSProf.LNF(684, function (dojoRequirePlugin_, checkDojoRequirePlugin_, transformToAmd_) {
            // the first dojo/_base/loader loaded gets to define these variables; they are designed to work
            // in the presence of zero to many mapped dojo/_base/loaders
            if (!JSProf.LRE(674, dojoRequirePlugin)) {
                dojoRequirePlugin = JSProf.LWR(676, dojoRequirePlugin, JSProf.LRE(675, dojoRequirePlugin_));
                checkDojoRequirePlugin = JSProf.LWR(678, checkDojoRequirePlugin, JSProf.LRE(677, checkDojoRequirePlugin_));
                transformToAmd = JSProf.LWR(680, transformToAmd, JSProf.LRE(679, transformToAmd_));
            }
            return JSProf.LNE(683, {
                sync: sync,
                requested: requested,
                arrived: arrived,
                nonmodule: nonmodule,
                executing: executing,
                executed: executed,
                syncExecStack: syncExecStack,
                modules: modules,
                execQ: execQ,
                getModule: getModule,
                injectModule: injectModule,
                setArrived: setArrived,
                signal: signal,
                finishExec: finishExec,
                execModule: execModule,
                dojoRequirePlugin: dojoRequirePlugin,
                getLegacyMode: JSProf.LNF(682, function () {
                    return JSProf.LRE(681, legacyMode);
                }, 12),
                guardCheckComplete: guardCheckComplete
            }, 11);
        }, 12));
        if (JSProf.LFC(686, has, false)("dom") || JSProf.LFC(687, has, false)("host-webworker")) {
            // in legacy sync mode, the loader needs a minimal XHR library
            var locationProtocol = JSProf.LGD(688, location, 'protocol').protocol, locationHost = JSProf.LGD(689, location, 'host').host;
            JSProf.LPD(702, req, 'isXdUrl').isXdUrl = JSProf.LRSP(702, JSProf.LNF(701, function (url) {
                if (JSProf.LMC(691, /^\./, 'test').test(JSProf.LRE(690, url))) {
                    // begins with a dot is always relative to page URL; therefore not xdomain
                    return false;
                }
                if (JSProf.LMC(693, /^\/\//, 'test').test(JSProf.LRE(692, url))) {
                    // for v1.6- backcompat, url starting with // indicates xdomain
                    return true;
                }
                // get protocol and host
                // \/+ takes care of the typical file protocol that looks like file:///drive/path/to/file
                // locationHost is falsy if file protocol => if locationProtocol matches and is "file:", || will return false
                var match = JSProf.LMC(694, url, 'match').match(/^([^\/\:]+\:)\/+([^\/]+)/);
                return JSProf.LRE(695, match) && (JSProf.LGE(696, match, 1)[1] != JSProf.LRE(697, locationProtocol) || JSProf.LRE(698, locationHost) && JSProf.LGE(699, match, 2)[2] != JSProf.LRE(700, locationHost));
            }, 12));
            // note: to get the file:// protocol to work in FF, you must set security.fileuri.strict_origin_policy to false in about:config
            JSProf.LMC(703, has, 'add').add("dojo-xhr-factory", 1);
            JSProf.LMC(707, has, 'add').add("dojo-force-activex-xhr", JSProf.LFC(704, has, false)("host-browser") && !JSProf.LGD(705, doc, 'addEventListener').addEventListener && JSProf.LGD(706, window.location, 'protocol').protocol == "file:");
            JSProf.LMC(709, has, 'add').add("native-xhr", typeof JSProf.LRU(708, typeof XMLHttpRequest === 'undefined' ? undefined : XMLHttpRequest) != "undefined");
            if (JSProf.LFC(710, has, false)("native-xhr") && !JSProf.LFC(711, has, false)("dojo-force-activex-xhr")) {
                getXhr = JSProf.LWR(715, getXhr, JSProf.LNF(714, function () {
                    return JSProf.LNE(713, new (JSProf.LFC(712, XMLHttpRequest, true))(), 'XMLHttpRequest');
                }, 12));
            } else {
                // if in the browser an old IE; find an xhr
                for (var XMLHTTP_PROGIDS = JSProf.LNE(716, [
                            'Msxml2.XMLHTTP',
                            'Microsoft.XMLHTTP',
                            'Msxml2.XMLHTTP.4.0'
                        ], 10), progid, i = 0; JSProf.LRE(717, i) < 3;) {
                    try {
                        progid = JSProf.LWR(719, progid, JSProf.LGE(718, XMLHTTP_PROGIDS, JSProf.TMPS.tc05c66774a180874bcbab9fc73f49ff447391de7 = i++)[JSProf.TMPS.tc05c66774a180874bcbab9fc73f49ff447391de7]);
                        if (JSProf.LNE(722, new (JSProf.LFC(721, ActiveXObject, true))(JSProf.LRE(720, progid)), 'ActiveXObject')) {
                            // this progid works; therefore, use it from now on
                            break;
                        }
                    } catch (e) {
                    }
                }
                getXhr = JSProf.LWR(727, getXhr, JSProf.LNF(726, function () {
                    return JSProf.LNE(725, new (JSProf.LFC(724, ActiveXObject, true))(JSProf.LRE(723, progid)), 'ActiveXObject');
                }, 12));
            }
            JSProf.LPD(729, req, 'getXhr').getXhr = JSProf.LRSP(729, JSProf.LRE(728, getXhr));
            JSProf.LMC(730, has, 'add').add("dojo-gettext-api", 1);
            JSProf.LPD(747, req, 'getText').getText = JSProf.LRSP(747, JSProf.LNF(746, function (url, async, onLoad) {
                var xhr = JSProf.LFC(731, getXhr, false)();
                JSProf.LMC(734, xhr, 'open').open('GET', JSProf.LFC(733, fixupUrl, false)(JSProf.LRE(732, url)), false);
                JSProf.LMC(735, xhr, 'send').send(null);
                if (JSProf.LGD(736, xhr, 'status').status == 200 || !JSProf.LGD(737, location, 'host').host && !JSProf.LGD(738, xhr, 'status').status) {
                    if (JSProf.LRE(739, onLoad)) {
                        JSProf.LFC(742, onLoad, false)(JSProf.LGD(740, xhr, 'responseText').responseText, JSProf.LRE(741, async));
                    }
                } else {
                    throw JSProf.LFC(744, makeError, false)("xhrFailed", JSProf.LGD(743, xhr, 'status').status);
                }
                return JSProf.LGD(745, xhr, 'responseText').responseText;
            }, 12));
        }
    } else {
        JSProf.LPD(748, req, 'async').async = JSProf.LRSP(748, 1);
    }
    //
    // loader eval
    //
    var eval_ = JSProf.LNE(750, new (JSProf.LFC(749, Function, true))('return eval(arguments[0]);'), 'Function');
    JSProf.LPD(755, req, 'eval').eval = JSProf.LRSP(755, JSProf.LNF(754, function (text, hint) {
        return JSProf.LFC(753, eval_, false)(JSProf.LRE(751, text) + "\r\n//# sourceURL=" + JSProf.LRE(752, hint));
    }, 12));
    //
    // loader micro events API
    //
    var listenerQueues = JSProf.LNE(756, {}, 11), error = "error", signal = JSProf.LPD(769, req, 'signal').signal = JSProf.LRSP(769, JSProf.LNF(768, function (type, args) {
            var queue = JSProf.LGE(757, listenerQueues, 'type')[type];
            // notice we run a copy of the queue; this allows listeners to add/remove
            // other listeners without affecting this particular signal
            JSProf.LFC(767, forEach, false)(JSProf.LRE(758, queue) && JSProf.LMC(759, queue, 'slice').slice(0), JSProf.LNF(766, function (listener) {
                JSProf.LMC(765, listener, 'apply').apply(null, JSProf.LFC(761, isArray, false)(JSProf.LRE(760, args)) ? JSProf.LRE(762, args) : JSProf.LNE(764, [JSProf.LRE(763, args)], 10));
            }, 12));
        }, 12)), on = JSProf.LPD(784, req, 'on').on = JSProf.LRSP(784, JSProf.LNF(783, function (type, listener) {
            // notice a queue is not created until a client actually connects
            var queue = JSProf.LGE(770, listenerQueues, 'type')[type] || (JSProf.LPE(772, listenerQueues, 'type')[type] = JSProf.LRPE(772, JSProf.LNE(771, [], 10)));
            JSProf.LMC(774, queue, 'push').push(JSProf.LRE(773, listener));
            return JSProf.LNE(782, {
                remove: JSProf.LNF(781, function () {
                    for (var i = 0; JSProf.LRE(775, i) < JSProf.LGD(776, queue, 'length').length; i++) {
                        if (JSProf.LGE(777, queue, 'i')[i] === JSProf.LRE(778, listener)) {
                            JSProf.LMC(780, queue, 'splice').splice(JSProf.LRE(779, i), 1);
                            return;
                        }
                    }
                }, 12)
            }, 11);
        }, 12));
    // configuration machinery; with an optimized/built defaultConfig, all configuration machinery can be discarded
    // lexical variables hold key loader data structures to help with minification; these may be completely,
    // one-time initialized by defaultConfig for optimized/built versions
    var aliases = JSProf.LNE(785, [], 10), paths = JSProf.LNE(786, {}, 11), pathsMapProg = JSProf.LNE(787, [], 10), packs = JSProf.LNE(788, {}, 11), map = JSProf.LPD(790, req, 'map').map = JSProf.LRSP(790, JSProf.LNE(789, {}, 11)), mapProgs = JSProf.LNE(791, [], 10), modules = JSProf.LNE(792, {}, 11), cacheBust = "", cache = JSProf.LNE(793, {}, 11), urlKeyPrefix = "url:", pendingCacheInsert = JSProf.LNE(794, {}, 11), dojoSniffConfig = JSProf.LNE(795, {}, 11), insertPointSibling = 0;
    if (JSProf.LFC(796, has, false)("dojo-config-api")) {
        var consumePendingCacheInsert = JSProf.LNF(828, function (referenceModule) {
                var p, item, match, now, m;
                for (p in JSProf.LRE(797, pendingCacheInsert)) {
                    item = JSProf.LWR(799, item, JSProf.LGE(798, pendingCacheInsert, 'p')[p]);
                    match = JSProf.LWR(801, match, JSProf.LMC(800, p, 'match').match(/^url\:(.+)/));
                    if (JSProf.LRE(802, match)) {
                        JSProf.LPE(808, cache, JSProf.TMPS.t34fc3319184a76222fdc5c4f23a1fd486c7dd6cf = JSProf.LRE(803, urlKeyPrefix) + JSProf.LFC(806, toUrl, false)(JSProf.LGE(804, match, 1)[1], JSProf.LRE(805, referenceModule)))[JSProf.TMPS.t34fc3319184a76222fdc5c4f23a1fd486c7dd6cf] = JSProf.LRPE(808, JSProf.LRE(807, item));
                    } else if (JSProf.LRE(809, p) == "*now") {
                        now = JSProf.LWR(811, now, JSProf.LRE(810, item));
                    } else if (JSProf.LRE(812, p) != "*noref") {
                        m = JSProf.LWR(816, m, JSProf.LFC(815, getModuleInfo, false)(JSProf.LRE(813, p), JSProf.LRE(814, referenceModule), true));
                        JSProf.LPE(821, cache, JSProf.TMPS.t34fc3319184a76222fdc5c4f23a1fd486c7dd6cf = m.mid)[JSProf.TMPS.t34fc3319184a76222fdc5c4f23a1fd486c7dd6cf] = JSProf.LRPE(821, JSProf.LPE(820, cache, JSProf.TMPS.t34fc3319184a76222fdc5c4f23a1fd486c7dd6cf = JSProf.LRE(817, urlKeyPrefix) + JSProf.LGD(818, m, 'url').url)[JSProf.TMPS.t34fc3319184a76222fdc5c4f23a1fd486c7dd6cf] = JSProf.LRPE(820, JSProf.LRE(819, item)));
                    }
                }
                if (JSProf.LRE(822, now)) {
                    JSProf.LFC(825, now, false)(JSProf.LFC(824, createRequire, false)(JSProf.LRE(823, referenceModule)));
                }
                pendingCacheInsert = JSProf.LWR(827, pendingCacheInsert, JSProf.LNE(826, {}, 11));
            }, 12), escapeString = JSProf.LNF(832, function (s) {
                return JSProf.LMC(831, s, 'replace').replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, JSProf.LNF(830, function (c) {
                    return "\\" + JSProf.LRE(829, c);
                }, 12));
            }, 12), computeMapProg = JSProf.LNF(850, function (map, dest) {
                // This routine takes a map as represented by a JavaScript object and initializes dest, a vector of
                // quads of (map-key, map-value, refex-for-map-key, length-of-map-key), sorted decreasing by length-
                // of-map-key. The regex looks for the map-key followed by either "/" or end-of-string at the beginning
                // of a the search source. Notice the map-value is irrelevant to the algorithm
                JSProf.LMC(834, dest, 'splice').splice(0, JSProf.LGD(833, dest, 'length').length);
                for (var p in JSProf.LRE(835, map)) {
                    JSProf.LMC(844, dest, 'push').push(JSProf.LNE(843, [
                        JSProf.LRE(836, p),
                        JSProf.LGE(837, map, 'p')[p],
                        JSProf.LNE(841, new (JSProf.LFC(840, RegExp, true))("^" + JSProf.LFC(839, escapeString, false)(JSProf.LRE(838, p)) + "(\/|$)"), 'RegExp'),
                        JSProf.LGD(842, p, 'length').length
                    ], 10));
                }
                JSProf.LMC(848, dest, 'sort').sort(JSProf.LNF(847, function (lhs, rhs) {
                    return JSProf.LGE(845, rhs, 3)[3] - JSProf.LGE(846, lhs, 3)[3];
                }, 12));
                return JSProf.LRE(849, dest);
            }, 12), computeAliases = JSProf.LNF(864, function (config, dest) {
                JSProf.LFC(863, forEach, false)(JSProf.LRE(851, config), JSProf.LNF(862, function (pair) {
                    // take a fixed-up copy...
                    JSProf.LMC(861, dest, 'push').push(JSProf.LNE(860, [
                        JSProf.LFC(853, isString, false)(JSProf.LGE(852, pair, 0)[0]) ? JSProf.LNE(857, new (JSProf.LFC(856, RegExp, true))("^" + JSProf.LFC(855, escapeString, false)(JSProf.LGE(854, pair, 0)[0]) + "$"), 'RegExp') : JSProf.LGE(858, pair, 0)[0],
                        JSProf.LGE(859, pair, 1)[1]
                    ], 10));
                }, 12));
            }, 12), fixupPackageInfo = JSProf.LNF(886, function (packageInfo) {
                // calculate the precise (name, location, main, mappings) for a package
                var name = JSProf.LGD(865, packageInfo, 'name').name;
                if (!JSProf.LRE(866, name)) {
                    // packageInfo must be a string that gives the name
                    name = JSProf.LWR(868, name, JSProf.LRE(867, packageInfo));
                    packageInfo = JSProf.LWR(870, packageInfo, JSProf.LNE(869, { name: name }, 11));
                }
                packageInfo = JSProf.LWR(874, packageInfo, JSProf.LFC(873, mix, false)(JSProf.LNE(871, { main: "main" }, 11), JSProf.LRE(872, packageInfo)));
                JSProf.LPD(878, packageInfo, 'location').location = JSProf.LRSP(878, JSProf.LGD(875, packageInfo, 'location').location ? JSProf.LGD(876, packageInfo, 'location').location : JSProf.LRE(877, name));
                // packageMap is deprecated in favor of AMD map
                if (JSProf.LGD(879, packageInfo, 'packageMap').packageMap) {
                    JSProf.LPE(881, map, 'name')[name] = JSProf.LRPE(881, JSProf.LGD(880, packageInfo, 'packageMap').packageMap);
                }
                if (!JSProf.LMC(882, packageInfo.main, 'indexOf').indexOf("./")) {
                    JSProf.LPD(883, packageInfo, 'main').main = JSProf.LRSP(883, packageInfo.main.substring(2));
                }
                // now that we've got a fully-resolved package object, push it into the configuration
                JSProf.LPE(885, packs, 'name')[name] = JSProf.LRPE(885, JSProf.LRE(884, packageInfo));
            }, 12), delayedModuleConfig = JSProf.LNE(887, [], 10), config = JSProf.LNF(999, function (config, booting, referenceModule) {
                for (var p in JSProf.LRE(888, config)) {
                    if (JSProf.LRE(889, p) == "waitSeconds") {
                        JSProf.LPD(891, req, 'waitms').waitms = JSProf.LRSP(891, (JSProf.LGE(890, config, 'p')[p] || 0) * 1000);
                    }
                    if (JSProf.LRE(892, p) == "cacheBust") {
                        cacheBust = JSProf.LWR(900, cacheBust, JSProf.LGE(893, config, 'p')[p] ? JSProf.LFC(895, isString, false)(JSProf.LGE(894, config, 'p')[p]) ? JSProf.LGE(896, config, 'p')[p] : JSProf.LMC(899, JSProf.LNE(898, new (JSProf.LFC(897, Date, true))(), 'Date'), 'getTime').getTime() + "" : "");
                    }
                    if (JSProf.LRE(901, p) == "baseUrl" || JSProf.LRE(902, p) == "combo") {
                        JSProf.LPE(904, req, 'p')[p] = JSProf.LRPE(904, JSProf.LGE(903, config, 'p')[p]);
                    }
                    if (JSProf.LFC(905, has, false)("dojo-sync-loader") && JSProf.LRE(906, p) == "async") {
                        // falsy or "sync" => legacy sync loader
                        // "xd" => sync but loading xdomain tree and therefore loading asynchronously (not configurable, set automatically by the loader)
                        // "legacyAsync" => permanently in "xd" by choice
                        // "debugAtAllCosts" => trying to load everything via script injection (not implemented)
                        // otherwise, must be truthy => AMD
                        // legacyMode: sync | legacyAsync | xd | false
                        var mode = JSProf.LGE(907, config, 'p')[p];
                        JSProf.LPD(916, req, 'legacyMode').legacyMode = JSProf.LRSP(916, legacyMode = JSProf.LWR(915, legacyMode, JSProf.LFC(909, isString, false)(JSProf.LRE(908, mode)) && JSProf.LMC(911, /sync|legacyAsync/, 'test').test(JSProf.LRE(910, mode)) ? JSProf.LRE(912, mode) : !JSProf.LRE(913, mode) ? JSProf.LRE(914, sync) : false));
                        JSProf.LPD(918, req, 'async').async = JSProf.LRSP(918, !JSProf.LRE(917, legacyMode));
                    }
                    if (JSProf.LGE(919, config, 'p')[p] !== JSProf.LRE(920, hasCache)) {
                        // accumulate raw config info for client apps which can use this to pass their own config
                        JSProf.LPE(922, req.rawConfig, 'p')[p] = JSProf.LRPE(922, JSProf.LGE(921, config, 'p')[p]);
                        JSProf.LRE(923, p) != "has" && JSProf.LMC(927, has, 'add').add("config-" + JSProf.LRE(924, p), JSProf.LGE(925, config, 'p')[p], 0, JSProf.LRE(926, booting));
                    }
                }
                // make sure baseUrl exists
                if (!JSProf.LGD(928, req, 'baseUrl').baseUrl) {
                    JSProf.LPD(929, req, 'baseUrl').baseUrl = JSProf.LRSP(929, "./");
                }
                // make sure baseUrl ends with a slash
                if (!JSProf.LMC(931, /\/$/, 'test').test(JSProf.LGD(930, req, 'baseUrl').baseUrl)) {
                    req.baseUrl += "/";
                }
                // now do the special work for has, packages, packagePaths, paths, aliases, and cache
                for (p in JSProf.LGD(932, config, 'has').has) {
                    JSProf.LMC(936, has, 'add').add(JSProf.LRE(933, p), JSProf.LGE(934, config.has, 'p')[p], 0, JSProf.LRE(935, booting));
                }
                // for each package found in any packages config item, augment the packs map owned by the loader
                JSProf.LFC(939, forEach, false)(JSProf.LGD(937, config, 'packages').packages, JSProf.LRE(938, fixupPackageInfo));
                // for each packagePath found in any packagePaths config item, augment the packageConfig
                // packagePaths is deprecated; remove in 2.0
                for (var baseUrl in JSProf.LGD(940, config, 'packagePaths').packagePaths) {
                    JSProf.LFC(953, forEach, false)(JSProf.LGE(941, config.packagePaths, 'baseUrl')[baseUrl], JSProf.LNF(952, function (packageInfo) {
                        var location = JSProf.LRE(942, baseUrl) + "/" + JSProf.LRE(943, packageInfo);
                        if (JSProf.LFC(945, isString, false)(JSProf.LRE(944, packageInfo))) {
                            packageInfo = JSProf.LWR(947, packageInfo, JSProf.LNE(946, { name: packageInfo }, 11));
                        }
                        JSProf.LPD(949, packageInfo, 'location').location = JSProf.LRSP(949, JSProf.LRE(948, location));
                        JSProf.LFC(951, fixupPackageInfo, false)(JSProf.LRE(950, packageInfo));
                    }, 12));
                }
                // notice that computeMapProg treats the dest as a reference; therefore, if/when that variable
                // is published (see dojo-publish-privates), the published variable will always hold a valid value.
                // this must come after all package processing since package processing may mutate map
                JSProf.LFC(958, computeMapProg, false)(JSProf.LFC(956, mix, false)(JSProf.LRE(954, map), JSProf.LGD(955, config, 'map').map), JSProf.LRE(957, mapProgs));
                JSProf.LFC(968, forEach, false)(JSProf.LRE(959, mapProgs), JSProf.LNF(967, function (item) {
                    JSProf.LPE(963, item, 1)[1] = JSProf.LRPE(963, JSProf.LFC(962, computeMapProg, false)(JSProf.LGE(960, item, 1)[1], JSProf.LNE(961, [], 10)));
                    if (JSProf.LGE(964, item, 0)[0] == "*") {
                        JSProf.LPD(966, mapProgs, 'star').star = JSProf.LRSP(966, JSProf.LRE(965, item));
                    }
                }, 12));
                // push in any paths and recompute the internal pathmap
                JSProf.LFC(973, computeMapProg, false)(JSProf.LFC(971, mix, false)(JSProf.LRE(969, paths), JSProf.LGD(970, config, 'paths').paths), JSProf.LRE(972, pathsMapProg));
                // aliases
                JSProf.LFC(976, computeAliases, false)(JSProf.LGD(974, config, 'aliases').aliases, JSProf.LRE(975, aliases));
                if (JSProf.LRE(977, booting)) {
                    JSProf.LMC(979, delayedModuleConfig, 'push').push(JSProf.LNE(978, { config: config.config }, 11));
                } else {
                    for (p in JSProf.LGD(980, config, 'config').config) {
                        var module = JSProf.LFC(983, getModule, false)(JSProf.LRE(981, p), JSProf.LRE(982, referenceModule));
                        JSProf.LPD(988, module, 'config').config = JSProf.LRSP(988, JSProf.LFC(987, mix, false)(JSProf.LGD(984, module, 'config').config || JSProf.LNE(985, {}, 11), JSProf.LGE(986, config.config, 'p')[p]));
                    }
                }
                // push in any new cache values
                if (JSProf.LGD(989, config, 'cache').cache) {
                    JSProf.LFC(990, consumePendingCacheInsert, false)();
                    pendingCacheInsert = JSProf.LWR(992, pendingCacheInsert, JSProf.LGD(991, config, 'cache').cache);
                    if (JSProf.LGE(993, config.cache, '*noref')["*noref"]) {
                        JSProf.LFC(994, consumePendingCacheInsert, false)();
                    }
                }
                JSProf.LFC(998, signal, false)("config", JSProf.LNE(997, [
                    JSProf.LRE(995, config),
                    JSProf.LGD(996, req, 'rawConfig').rawConfig
                ], 10));
            }, 12);
        //
        // execute the various sniffs; userConfig can override and value
        //
        if (JSProf.LFC(1000, has, false)("dojo-cdn") || JSProf.LFC(1001, has, false)("dojo-sniff")) {
            // the sniff regex looks for a src attribute ending in dojo.js, optionally preceded with a path.
            // match[3] returns the path to dojo.js (if any) without the trailing slash. This is used for the
            // dojo location on CDN deployments and baseUrl when either/both of these are not provided
            // explicitly in the config data; this is the 1.6- behavior.
            var scripts = doc.getElementsByTagName("script"), i = 0, script, dojoDir, src, match;
            while (JSProf.LRE(1002, i) < JSProf.LGD(1003, scripts, 'length').length) {
                script = JSProf.LWR(1005, script, JSProf.LGE(1004, scripts, JSProf.TMPS.ta16be437fa33aff7c59053aff161bb038933451e = i++)[JSProf.TMPS.ta16be437fa33aff7c59053aff161bb038933451e]);
                if ((src = JSProf.LWR(1007, src, JSProf.LMC(1006, script, 'getAttribute').getAttribute("src"))) && (match = JSProf.LWR(1009, match, JSProf.LMC(1008, src, 'match').match(/(((.*)\/)|^)dojo\.js(\W|$)/i)))) {
                    // sniff dojoDir and baseUrl
                    dojoDir = JSProf.LWR(1011, dojoDir, JSProf.LGE(1010, match, 3)[3] || "");
                    JSProf.LPD(1014, defaultConfig, 'baseUrl').baseUrl = JSProf.LRSP(1014, JSProf.LGD(1012, defaultConfig, 'baseUrl').baseUrl || JSProf.LRE(1013, dojoDir));
                    // remember an insertPointSibling
                    insertPointSibling = JSProf.LWR(1016, insertPointSibling, JSProf.LRE(1015, script));
                }
                // sniff configuration on attribute in script element
                if (src = JSProf.LWR(1019, src, JSProf.LMC(1017, script, 'getAttribute').getAttribute("data-dojo-config") || JSProf.LMC(1018, script, 'getAttribute').getAttribute("djConfig"))) {
                    dojoSniffConfig = JSProf.LWR(1022, dojoSniffConfig, JSProf.LMC(1021, req, 'eval').eval("({ " + JSProf.LRE(1020, src) + " })", "data-dojo-config"));
                    // remember an insertPointSibling
                    insertPointSibling = JSProf.LWR(1024, insertPointSibling, JSProf.LRE(1023, script));
                }
                // sniff requirejs attribute
                if (JSProf.LFC(1025, has, false)("dojo-requirejs-api")) {
                    if (src = JSProf.LWR(1027, src, JSProf.LMC(1026, script, 'getAttribute').getAttribute("data-main"))) {
                        JSProf.LPD(1031, dojoSniffConfig, 'deps').deps = JSProf.LRSP(1031, JSProf.LGD(1028, dojoSniffConfig, 'deps').deps || JSProf.LNE(1030, [JSProf.LRE(1029, src)], 10));
                    }
                }
            }
        }
        if (JSProf.LFC(1032, has, false)("dojo-test-sniff")) {
            // pass down doh.testConfig from parent as if it were a data-dojo-config
            try {
                if (JSProf.LGD(1033, window, 'parent').parent != JSProf.LRU(1034, typeof window === 'undefined' ? undefined : window) && JSProf.LGD(1035, window.parent, 'require').require) {
                    var doh = JSProf.LMC(1036, window.parent, 'require').require("doh");
                    JSProf.LRE(1037, doh) && JSProf.LFC(1040, mix, false)(JSProf.LRE(1038, dojoSniffConfig), JSProf.LGD(1039, doh, 'testConfig').testConfig);
                }
            } catch (e) {
            }
        }
        // configure the loader; let the user override defaults
        JSProf.LPD(1042, req, 'rawConfig').rawConfig = JSProf.LRSP(1042, JSProf.LNE(1041, {}, 11));
        JSProf.LFC(1044, config, false)(JSProf.LRE(1043, defaultConfig), 1);
        // do this before setting userConfig/sniffConfig to allow userConfig/sniff overrides
        if (JSProf.LFC(1045, has, false)("dojo-cdn")) {
            JSProf.LPD(1047, packs.dojo, 'location').location = JSProf.LRSP(1047, JSProf.LRE(1046, dojoDir));
            if (JSProf.LRE(1048, dojoDir)) {
                dojoDir += "/";
            }
            JSProf.LPD(1050, packs.dijit, 'location').location = JSProf.LRSP(1050, JSProf.LRE(1049, dojoDir) + "../dijit/");
            JSProf.LPD(1052, packs.dojox, 'location').location = JSProf.LRSP(1052, JSProf.LRE(1051, dojoDir) + "../dojox/");
        }
        JSProf.LFC(1054, config, false)(JSProf.LRE(1053, userConfig), 1);
        JSProf.LFC(1056, config, false)(JSProf.LRE(1055, dojoSniffConfig), 1);
    } else {
        // no config API, assume defaultConfig has everything the loader needs...for the entire lifetime of the application
        paths = JSProf.LWR(1058, paths, JSProf.LGD(1057, defaultConfig, 'paths').paths);
        pathsMapProg = JSProf.LWR(1060, pathsMapProg, JSProf.LGD(1059, defaultConfig, 'pathsMapProg').pathsMapProg);
        packs = JSProf.LWR(1062, packs, JSProf.LGD(1061, defaultConfig, 'packs').packs);
        aliases = JSProf.LWR(1064, aliases, JSProf.LGD(1063, defaultConfig, 'aliases').aliases);
        mapProgs = JSProf.LWR(1066, mapProgs, JSProf.LGD(1065, defaultConfig, 'mapProgs').mapProgs);
        modules = JSProf.LWR(1068, modules, JSProf.LGD(1067, defaultConfig, 'modules').modules);
        cache = JSProf.LWR(1070, cache, JSProf.LGD(1069, defaultConfig, 'cache').cache);
        cacheBust = JSProf.LWR(1072, cacheBust, JSProf.LGD(1071, defaultConfig, 'cacheBust').cacheBust);
        // remember the default config for other processes (e.g., dojo/config)
        JSProf.LPD(1074, req, 'rawConfig').rawConfig = JSProf.LRSP(1074, JSProf.LRE(1073, defaultConfig));
    }
    if (JSProf.LFC(1075, has, false)("dojo-combo-api")) {
        JSProf.LPD(1078, req, 'combo').combo = JSProf.LRSP(1078, JSProf.LGD(1076, req, 'combo').combo || JSProf.LNE(1077, { add: noop }, 11));
        var comboPending = 0, combosPending = JSProf.LNE(1079, [], 10), comboPendingTimer = null;
    }
    // build the loader machinery iaw configuration, including has feature tests
    var injectDependencies = JSProf.LNF(1107, function (module) {
            // checkComplete!=0 holds the idle signal; we're not idle if we're injecting dependencies
            JSProf.LFC(1106, guardCheckComplete, false)(JSProf.LNF(1105, function () {
                JSProf.LFC(1082, forEach, false)(JSProf.LGD(1080, module, 'deps').deps, JSProf.LRE(1081, injectModule));
                if (JSProf.LFC(1083, has, false)("dojo-combo-api") && JSProf.LRE(1084, comboPending) && !JSProf.LRE(1085, comboPendingTimer)) {
                    comboPendingTimer = JSProf.LWR(1104, comboPendingTimer, setTimeout(JSProf.LNF(1103, function () {
                        comboPending = JSProf.LWR(1086, comboPending, 0);
                        comboPendingTimer = null;
                        JSProf.LMC(1102, req.combo, 'done').done(JSProf.LNF(1100, function (mids, url) {
                            var onLoadCallback = JSProf.LNF(1090, function () {
                                    // defQ is a vector of module definitions 1-to-1, onto mids
                                    JSProf.LFC(1088, runDefQ, false)(0, JSProf.LRE(1087, mids));
                                    JSProf.LFC(1089, checkComplete, false)();
                                }, 12);
                            JSProf.LMC(1092, combosPending, 'push').push(JSProf.LRE(1091, mids));
                            injectingModule = JSProf.LWR(1094, injectingModule, JSProf.LRE(1093, mids));
                            JSProf.LMC(1098, req, 'injectUrl').injectUrl(JSProf.LRE(1095, url), JSProf.LRE(1096, onLoadCallback), JSProf.LRE(1097, mids));
                            injectingModule = JSProf.LWR(1099, injectingModule, 0);
                        }, 12), JSProf.LRE(1101, req));
                    }, 12), 0));
                }
            }, 12));
        }, 12), contextRequire = JSProf.LNF(1166, function (a1, a2, a3, referenceModule, contextRequire) {
            var module, syntheticMid;
            if (JSProf.LFC(1109, isString, false)(JSProf.LRE(1108, a1))) {
                // signature is (moduleId)
                module = JSProf.LWR(1113, module, JSProf.LFC(1112, getModule, false)(JSProf.LRE(1110, a1), JSProf.LRE(1111, referenceModule), true));
                if (JSProf.LRE(1114, module) && JSProf.LGD(1115, module, 'executed').executed) {
                    return JSProf.LGD(1116, module, 'result').result;
                }
                throw JSProf.LFC(1118, makeError, false)("undefinedModule", JSProf.LRE(1117, a1));
            }
            if (!JSProf.LFC(1120, isArray, false)(JSProf.LRE(1119, a1))) {
                // a1 is a configuration
                JSProf.LFC(1123, config, false)(JSProf.LRE(1121, a1), 0, JSProf.LRE(1122, referenceModule));
                // juggle args; (a2, a3) may be (dependencies, callback)
                a1 = JSProf.LWR(1125, a1, JSProf.LRE(1124, a2));
                a2 = JSProf.LWR(1127, a2, JSProf.LRE(1126, a3));
            }
            if (JSProf.LFC(1129, isArray, false)(JSProf.LRE(1128, a1))) {
                // signature is (requestList [,callback])
                if (!JSProf.LGD(1130, a1, 'length').length) {
                    JSProf.LRE(1131, a2) && JSProf.LFC(1132, a2, false)();
                } else {
                    syntheticMid = JSProf.LWR(1134, syntheticMid, "require*" + JSProf.LFC(1133, uid, false)());
                    // resolve the request list with respect to the reference module
                    for (var mid, deps = JSProf.LNE(1135, [], 10), i = 0; JSProf.LRE(1136, i) < JSProf.LGD(1137, a1, 'length').length;) {
                        mid = JSProf.LWR(1139, mid, JSProf.LGE(1138, a1, JSProf.TMPS.t89e87f6f3ad44d991301c4aaea40544cea24459f = i++)[JSProf.TMPS.t89e87f6f3ad44d991301c4aaea40544cea24459f]);
                        JSProf.LMC(1143, deps, 'push').push(JSProf.LFC(1142, getModule, false)(JSProf.LRE(1140, mid), JSProf.LRE(1141, referenceModule)));
                    }
                    // construct a synthetic module to control execution of the requestList, and, optionally, callback
                    module = JSProf.LWR(1148, module, JSProf.LFC(1147, mix, false)(JSProf.LFC(1145, makeModuleInfo, false)("", JSProf.LRE(1144, syntheticMid), 0, ""), JSProf.LNE(1146, {
                        injected: arrived,
                        deps: deps,
                        def: a2 || noop,
                        require: referenceModule ? referenceModule.require : req,
                        gc: 1
                    }, 11)));
                    JSProf.LPE(1150, modules, JSProf.TMPS.t1aa511a293f1786052bfecc9e636814d4fe32117 = module.mid)[JSProf.TMPS.t1aa511a293f1786052bfecc9e636814d4fe32117] = JSProf.LRPE(1150, JSProf.LRE(1149, module));
                    // checkComplete!=0 holds the idle signal; we're not idle if we're injecting dependencies
                    JSProf.LFC(1152, injectDependencies, false)(JSProf.LRE(1151, module));
                    // try to immediately execute
                    // if already traversing a factory tree, then strict causes circular dependency to abort the execution; maybe
                    // it's possible to execute this require later after the current traversal completes and avoid the circular dependency.
                    // ...but *always* insist on immediate in synch mode
                    var strict = JSProf.LRE(1153, checkCompleteGuard) && JSProf.LRE(1154, legacyMode) != JSProf.LRE(1155, sync);
                    JSProf.LFC(1160, guardCheckComplete, false)(JSProf.LNF(1159, function () {
                        JSProf.LFC(1158, execModule, false)(JSProf.LRE(1156, module), JSProf.LRE(1157, strict));
                    }, 12));
                    if (!JSProf.LGD(1161, module, 'executed').executed) {
                        // some deps weren't on board or circular dependency detected and strict; therefore, push into the execQ
                        JSProf.LMC(1163, execQ, 'push').push(JSProf.LRE(1162, module));
                    }
                    JSProf.LFC(1164, checkComplete, false)();
                }
            }
            return JSProf.LRE(1165, contextRequire);
        }, 12), createRequire = JSProf.LNF(1224, function (module) {
            if (!JSProf.LRE(1167, module)) {
                return JSProf.LRE(1168, req);
            }
            var result = JSProf.LGD(1169, module, 'require').require;
            if (!JSProf.LRE(1170, result)) {
                result = JSProf.LWR(1178, result, JSProf.LNF(1177, function (a1, a2, a3) {
                    return JSProf.LFC(1176, contextRequire, false)(JSProf.LRE(1171, a1), JSProf.LRE(1172, a2), JSProf.LRE(1173, a3), JSProf.LRE(1174, module), JSProf.LRE(1175, result));
                }, 12));
                JSProf.LPD(1182, module, 'require').require = JSProf.LRSP(1182, JSProf.LFC(1181, mix, false)(JSProf.LRE(1179, result), JSProf.LRE(1180, req)));
                JSProf.LPD(1184, result, 'module').module = JSProf.LRSP(1184, JSProf.LRE(1183, module));
                JSProf.LPD(1189, result, 'toUrl').toUrl = JSProf.LRSP(1189, JSProf.LNF(1188, function (name) {
                    return JSProf.LFC(1187, toUrl, false)(JSProf.LRE(1185, name), JSProf.LRE(1186, module));
                }, 12));
                JSProf.LPD(1194, result, 'toAbsMid').toAbsMid = JSProf.LRSP(1194, JSProf.LNF(1193, function (mid) {
                    return JSProf.LFC(1192, toAbsMid, false)(JSProf.LRE(1190, mid), JSProf.LRE(1191, module));
                }, 12));
                if (JSProf.LFC(1195, has, false)("dojo-undef-api")) {
                    JSProf.LPD(1200, result, 'undef').undef = JSProf.LRSP(1200, JSProf.LNF(1199, function (mid) {
                        JSProf.LMC(1198, req, 'undef').undef(JSProf.LRE(1196, mid), JSProf.LRE(1197, module));
                    }, 12));
                }
                if (JSProf.LFC(1201, has, false)("dojo-sync-loader")) {
                    JSProf.LPD(1222, result, 'syncLoadNls').syncLoadNls = JSProf.LRSP(1222, JSProf.LNF(1221, function (mid) {
                        var nlsModuleInfo = JSProf.LFC(1204, getModuleInfo, false)(JSProf.LRE(1202, mid), JSProf.LRE(1203, module)), nlsModule = JSProf.LGE(1205, modules, JSProf.TMPS.t1aa511a293f1786052bfecc9e636814d4fe32117 = nlsModuleInfo.mid)[JSProf.TMPS.t1aa511a293f1786052bfecc9e636814d4fe32117];
                        if (!JSProf.LRE(1206, nlsModule) || !JSProf.LGD(1207, nlsModule, 'executed').executed) {
                            cached = JSProf.LWR(1212, cached, JSProf.LGE(1208, cache, JSProf.TMPS.t34fc3319184a76222fdc5c4f23a1fd486c7dd6cf = nlsModuleInfo.mid)[JSProf.TMPS.t34fc3319184a76222fdc5c4f23a1fd486c7dd6cf] || JSProf.LGE(1211, cache, JSProf.TMPS.t34fc3319184a76222fdc5c4f23a1fd486c7dd6cf = JSProf.LRE(1209, urlKeyPrefix) + JSProf.LGD(1210, nlsModuleInfo, 'url').url)[JSProf.TMPS.t34fc3319184a76222fdc5c4f23a1fd486c7dd6cf]);
                            if (JSProf.LRE(1213, cached)) {
                                JSProf.LFC(1215, evalModuleText, false)(JSProf.LRE(1214, cached));
                                nlsModule = JSProf.LWR(1217, nlsModule, JSProf.LGE(1216, modules, JSProf.TMPS.t1aa511a293f1786052bfecc9e636814d4fe32117 = nlsModuleInfo.mid)[JSProf.TMPS.t1aa511a293f1786052bfecc9e636814d4fe32117]);
                            }
                        }
                        return JSProf.LRE(1218, nlsModule) && JSProf.LGD(1219, nlsModule, 'executed').executed && JSProf.LGD(1220, nlsModule, 'result').result;
                    }, 12));
                }
            }
            return JSProf.LRE(1223, result);
        }, 12), execQ = JSProf.LNE(1225, [], 10), defQ = JSProf.LNE(1226, [], 10), waiting = JSProf.LNE(1227, {}, 11), setRequested = JSProf.LNF(1235, function (module) {
            JSProf.LPD(1229, module, 'injected').injected = JSProf.LRSP(1229, JSProf.LRE(1228, requested));
            JSProf.LPE(1230, waiting, JSProf.TMPS.t6048d959420ebd8184a46599bfa914ae3d1d735c = module.mid)[JSProf.TMPS.t6048d959420ebd8184a46599bfa914ae3d1d735c] = JSProf.LRPE(1230, 1);
            if (JSProf.LGD(1231, module, 'url').url) {
                JSProf.LPE(1233, waiting, JSProf.TMPS.t6048d959420ebd8184a46599bfa914ae3d1d735c = module.url)[JSProf.TMPS.t6048d959420ebd8184a46599bfa914ae3d1d735c] = JSProf.LRPE(1233, JSProf.LGD(1232, module, 'pack').pack || 1);
            }
            JSProf.LFC(1234, startTimer, false)();
        }, 12), setArrived = JSProf.LNF(1247, function (module) {
            JSProf.LPD(1237, module, 'injected').injected = JSProf.LRSP(1237, JSProf.LRE(1236, arrived));
            delete waiting[module.mid];
            if (JSProf.LGD(1238, module, 'url').url) {
                delete waiting[module.url];
            }
            if (JSProf.LFC(1240, isEmpty, false)(JSProf.LRE(1239, waiting))) {
                JSProf.LFC(1241, clearTimer, false)();
                JSProf.LFC(1242, has, false)("dojo-sync-loader") && JSProf.LRE(1243, legacyMode) == JSProf.LRE(1244, xd) && (legacyMode = JSProf.LWR(1246, legacyMode, JSProf.LRE(1245, sync)));
            }
        }, 12), execComplete = JSProf.LPD(1254, req, 'idle').idle = JSProf.LRSP(1254, JSProf.LNF(1253, function () {
            return !JSProf.LGD(1248, defQ, 'length').length && JSProf.LFC(1250, isEmpty, false)(JSProf.LRE(1249, waiting)) && !JSProf.LGD(1251, execQ, 'length').length && !JSProf.LRE(1252, checkCompleteGuard);
        }, 12)), runMapProg = JSProf.LNF(1261, function (targetMid, map) {
            // search for targetMid in map; return the map item if found; falsy otherwise
            if (JSProf.LRE(1255, map)) {
                for (var i = 0; JSProf.LRE(1256, i) < JSProf.LGD(1257, map, 'length').length; i++) {
                    if (JSProf.LMC(1259, map[i][2], 'test').test(JSProf.LRE(1258, targetMid))) {
                        return JSProf.LGE(1260, map, 'i')[i];
                    }
                }
            }
            return 0;
        }, 12), compactPath = JSProf.LNF(1280, function (path) {
            var result = JSProf.LNE(1262, [], 10), segment, lastSegment;
            path = JSProf.LWR(1264, path, JSProf.LMC(1263, path, 'replace').replace(/\\/g, '/').split('/'));
            while (JSProf.LGD(1265, path, 'length').length) {
                segment = JSProf.LWR(1267, segment, JSProf.LMC(1266, path, 'shift').shift());
                if (JSProf.LRE(1268, segment) == ".." && JSProf.LGD(1269, result, 'length').length && JSProf.LRE(1270, lastSegment) != "..") {
                    JSProf.LMC(1271, result, 'pop').pop();
                    lastSegment = JSProf.LWR(1274, lastSegment, JSProf.LGE(1273, result, JSProf.TMPS.t4d62450f4f563df411091ddecc5fc6b78ffdb5c4 = JSProf.LGD(1272, result, 'length').length - 1)[JSProf.TMPS.t4d62450f4f563df411091ddecc5fc6b78ffdb5c4]);
                } else if (JSProf.LRE(1275, segment) != ".") {
                    JSProf.LMC(1278, result, 'push').push(lastSegment = JSProf.LWR(1277, lastSegment, JSProf.LRE(1276, segment)));
                }    // else ignore "."
            }
            return JSProf.LMC(1279, result, 'join').join("/");
        }, 12), makeModuleInfo = JSProf.LNF(1289, function (pid, mid, pack, url) {
            if (JSProf.LFC(1281, has, false)("dojo-sync-loader")) {
                var xd = JSProf.LMC(1283, req, 'isXdUrl').isXdUrl(JSProf.LRE(1282, url));
                return JSProf.LNE(1287, {
                    pid: pid,
                    mid: mid,
                    pack: pack,
                    url: url,
                    executed: 0,
                    def: 0,
                    isXd: xd,
                    isAmd: !!(JSProf.LRE(1284, xd) || JSProf.LGE(1285, packs, 'pid')[pid] && JSProf.LGD(1286, packs[pid], 'isAmd').isAmd)
                }, 11);
            } else {
                return JSProf.LNE(1288, {
                    pid: pid,
                    mid: mid,
                    pack: pack,
                    url: url,
                    executed: 0,
                    def: 0
                }, 11);
            }
        }, 12), getModuleInfo_ = JSProf.LNF(1405, function (mid, referenceModule, packs, modules, baseUrl, mapProgs, pathsMapProg, aliases, alwaysCreate) {
            // arguments are passed instead of using lexical variables so that this function my be used independent of the loader (e.g., the builder)
            // alwaysCreate is useful in this case so that getModuleInfo never returns references to real modules owned by the loader
            var pid, pack, midInPackage, mapItem, url, result, isRelative, requestedMid;
            requestedMid = JSProf.LWR(1291, requestedMid, JSProf.LRE(1290, mid));
            isRelative = JSProf.LWR(1294, isRelative, JSProf.LMC(1293, /^\./, 'test').test(JSProf.LRE(1292, mid)));
            if (JSProf.LMC(1296, /(^\/)|(\:)|(\.js$)/, 'test').test(JSProf.LRE(1295, mid)) || JSProf.LRE(1297, isRelative) && !JSProf.LRE(1298, referenceModule)) {
                // absolute path or protocol of .js filetype, or relative path but no reference module and therefore relative to page
                // whatever it is, it's not a module but just a URL of some sort
                // note: pid===0 indicates the routine is returning an unmodified mid
                return JSProf.LFC(1301, makeModuleInfo, false)(0, JSProf.LRE(1299, mid), 0, JSProf.LRE(1300, mid));
            } else {
                // relative module ids are relative to the referenceModule; get rid of any dots
                mid = JSProf.LWR(1307, mid, JSProf.LFC(1306, compactPath, false)(JSProf.LRE(1302, isRelative) ? JSProf.LGD(1303, referenceModule, 'mid').mid + "/../" + JSProf.LRE(1304, mid) : JSProf.LRE(1305, mid)));
                if (JSProf.LMC(1309, /^\./, 'test').test(JSProf.LRE(1308, mid))) {
                    throw JSProf.LFC(1311, makeError, false)("irrationalPath", JSProf.LRE(1310, mid));
                }
                // at this point, mid is an absolute mid
                // map the mid
                if (JSProf.LRE(1312, referenceModule)) {
                    mapItem = JSProf.LWR(1316, mapItem, JSProf.LFC(1315, runMapProg, false)(JSProf.LGD(1313, referenceModule, 'mid').mid, JSProf.LRE(1314, mapProgs)));
                }
                mapItem = JSProf.LWR(1319, mapItem, JSProf.LRE(1317, mapItem) || JSProf.LGD(1318, mapProgs, 'star').star);
                mapItem = JSProf.LWR(1324, mapItem, JSProf.LRE(1320, mapItem) && JSProf.LFC(1323, runMapProg, false)(JSProf.LRE(1321, mid), JSProf.LGE(1322, mapItem, 1)[1]));
                if (JSProf.LRE(1325, mapItem)) {
                    mid = JSProf.LWR(1328, mid, JSProf.LGE(1326, mapItem, 1)[1] + mid.substring(JSProf.LGE(1327, mapItem, 3)[3]));
                }
                match = JSProf.LWR(1330, match, JSProf.LMC(1329, mid, 'match').match(/^([^\/]+)(\/(.+))?$/));
                pid = JSProf.LWR(1333, pid, JSProf.LRE(1331, match) ? JSProf.LGE(1332, match, 1)[1] : "");
                if (pack = JSProf.LWR(1335, pack, JSProf.LGE(1334, packs, 'pid')[pid])) {
                    mid = JSProf.LWR(1340, mid, JSProf.LRE(1336, pid) + "/" + (midInPackage = JSProf.LWR(1339, midInPackage, JSProf.LGE(1337, match, 3)[3] || JSProf.LGD(1338, pack, 'main').main)));
                } else {
                    pid = JSProf.LWR(1341, pid, "");
                }
                // search aliases
                var candidateLength = 0, candidate = 0;
                JSProf.LFC(1356, forEach, false)(JSProf.LRE(1342, aliases), JSProf.LNF(1355, function (pair) {
                    var match = JSProf.LMC(1344, mid, 'match').match(JSProf.LGE(1343, pair, 0)[0]);
                    if (JSProf.LRE(1345, match) && JSProf.LGD(1346, match, 'length').length > JSProf.LRE(1347, candidateLength)) {
                        candidate = JSProf.LWR(1354, candidate, JSProf.LFC(1349, isFunction, false)(JSProf.LGE(1348, pair, 1)[1]) ? JSProf.LMC(1352, mid, 'replace').replace(JSProf.LGE(1350, pair, 0)[0], JSProf.LGE(1351, pair, 1)[1]) : JSProf.LGE(1353, pair, 1)[1]);
                    }
                }, 12));
                if (JSProf.LRE(1357, candidate)) {
                    return JSProf.LFC(1366, getModuleInfo_, false)(JSProf.LRE(1358, candidate), 0, JSProf.LRE(1359, packs), JSProf.LRE(1360, modules), JSProf.LRE(1361, baseUrl), JSProf.LRE(1362, mapProgs), JSProf.LRE(1363, pathsMapProg), JSProf.LRE(1364, aliases), JSProf.LRE(1365, alwaysCreate));
                }
                result = JSProf.LWR(1368, result, JSProf.LGE(1367, modules, 'mid')[mid]);
                if (JSProf.LRE(1369, result)) {
                    return JSProf.LRE(1370, alwaysCreate) ? JSProf.LFC(1375, makeModuleInfo, false)(JSProf.LGD(1371, result, 'pid').pid, JSProf.LGD(1372, result, 'mid').mid, JSProf.LGD(1373, result, 'pack').pack, JSProf.LGD(1374, result, 'url').url) : JSProf.LGE(1376, modules, 'mid')[mid];
                }
            }
            // get here iff the sought-after module does not yet exist; therefore, we need to compute the URL given the
            // fully resolved (i.e., all relative indicators and package mapping resolved) module id
            // note: pid!==0 indicates the routine is returning a url that has .js appended unmodified mid
            mapItem = JSProf.LWR(1380, mapItem, JSProf.LFC(1379, runMapProg, false)(JSProf.LRE(1377, mid), JSProf.LRE(1378, pathsMapProg)));
            if (JSProf.LRE(1381, mapItem)) {
                url = JSProf.LWR(1384, url, JSProf.LGE(1382, mapItem, 1)[1] + mid.substring(JSProf.LGE(1383, mapItem, 3)[3]));
            } else if (JSProf.LRE(1385, pid)) {
                url = JSProf.LWR(1388, url, JSProf.LGD(1386, pack, 'location').location + "/" + JSProf.LRE(1387, midInPackage));
            } else if (JSProf.LFC(1389, has, false)("config-tlmSiblingOfDojo")) {
                url = JSProf.LWR(1391, url, "../" + JSProf.LRE(1390, mid));
            } else {
                url = JSProf.LWR(1393, url, JSProf.LRE(1392, mid));
            }
            // if result is not absolute, add baseUrl
            if (!JSProf.LMC(1395, /(^\/)|(\:)/, 'test').test(JSProf.LRE(1394, url))) {
                url = JSProf.LWR(1398, url, JSProf.LRE(1396, baseUrl) + JSProf.LRE(1397, url));
            }
            url += ".js";
            return JSProf.LFC(1404, makeModuleInfo, false)(JSProf.LRE(1399, pid), JSProf.LRE(1400, mid), JSProf.LRE(1401, pack), JSProf.LFC(1403, compactPath, false)(JSProf.LRE(1402, url)));
        }, 12), getModuleInfo = JSProf.LNF(1421, function (mid, referenceModule, fromPendingCache) {
            return JSProf.LFC(1420, getModuleInfo_, false)(JSProf.LRE(1406, mid), JSProf.LRE(1407, referenceModule), JSProf.LRE(1408, packs), JSProf.LRE(1409, modules), JSProf.LGD(1410, req, 'baseUrl').baseUrl, JSProf.LRE(1411, fromPendingCache) ? JSProf.LNE(1412, [], 10) : JSProf.LRE(1413, mapProgs), JSProf.LRE(1414, fromPendingCache) ? JSProf.LNE(1415, [], 10) : JSProf.LRE(1416, pathsMapProg), JSProf.LRE(1417, fromPendingCache) ? JSProf.LNE(1418, [], 10) : JSProf.LRE(1419, aliases));
        }, 12), resolvePluginResourceId = JSProf.LNF(1432, function (plugin, prid, referenceModule) {
            return JSProf.LGD(1422, plugin, 'normalize').normalize ? JSProf.LMC(1428, plugin, 'normalize').normalize(JSProf.LRE(1423, prid), JSProf.LNF(1427, function (mid) {
                return JSProf.LFC(1426, toAbsMid, false)(JSProf.LRE(1424, mid), JSProf.LRE(1425, referenceModule));
            }, 12)) : JSProf.LFC(1431, toAbsMid, false)(JSProf.LRE(1429, prid), JSProf.LRE(1430, referenceModule));
        }, 12), dynamicPluginUidGenerator = 0, getModule = JSProf.LNF(1489, function (mid, referenceModule, immediate) {
            // compute and optionally construct (if necessary) the module implied by the mid with respect to referenceModule
            var match, plugin, prid, result;
            match = JSProf.LWR(1434, match, JSProf.LMC(1433, mid, 'match').match(/^(.+?)\!(.*)$/));
            if (JSProf.LRE(1435, match)) {
                // name was <plugin-module>!<plugin-resource-id>
                plugin = JSProf.LWR(1440, plugin, JSProf.LFC(1439, getModule, false)(JSProf.LGE(1436, match, 1)[1], JSProf.LRE(1437, referenceModule), JSProf.LRE(1438, immediate)));
                if (JSProf.LFC(1441, has, false)("dojo-sync-loader") && JSProf.LRE(1442, legacyMode) == JSProf.LRE(1443, sync) && !JSProf.LGD(1444, plugin, 'executed').executed) {
                    JSProf.LFC(1446, injectModule, false)(JSProf.LRE(1445, plugin));
                    if (JSProf.LGD(1447, plugin, 'injected').injected === JSProf.LRE(1448, arrived) && !JSProf.LGD(1449, plugin, 'executed').executed) {
                        JSProf.LFC(1453, guardCheckComplete, false)(JSProf.LNF(1452, function () {
                            JSProf.LFC(1451, execModule, false)(JSProf.LRE(1450, plugin));
                        }, 12));
                    }
                    if (JSProf.LGD(1454, plugin, 'executed').executed) {
                        JSProf.LFC(1456, promoteModuleToPlugin, false)(JSProf.LRE(1455, plugin));
                    } else {
                        // we are in xdomain mode for some reason
                        execQ.unshift(JSProf.LRE(1457, plugin));
                    }
                }
                if (JSProf.LGD(1458, plugin, 'executed').executed === JSProf.LRE(1459, executed) && !JSProf.LGD(1460, plugin, 'load').load) {
                    // executed the module not knowing it was a plugin
                    JSProf.LFC(1462, promoteModuleToPlugin, false)(JSProf.LRE(1461, plugin));
                }
                // if the plugin has not been loaded, then can't resolve the prid and  must assume this plugin is dynamic until we find out otherwise
                if (JSProf.LGD(1463, plugin, 'load').load) {
                    prid = JSProf.LWR(1468, prid, JSProf.LFC(1467, resolvePluginResourceId, false)(JSProf.LRE(1464, plugin), JSProf.LGE(1465, match, 2)[2], JSProf.LRE(1466, referenceModule)));
                    mid = JSProf.LWR(1472, mid, JSProf.LGD(1469, plugin, 'mid').mid + "!" + (JSProf.LGD(1470, plugin, 'dynamic').dynamic ? ++dynamicPluginUidGenerator + "!" : "") + JSProf.LRE(1471, prid));
                } else {
                    prid = JSProf.LWR(1474, prid, JSProf.LGE(1473, match, 2)[2]);
                    mid = JSProf.LWR(1476, mid, JSProf.LGD(1475, plugin, 'mid').mid + "!" + ++dynamicPluginUidGenerator + "!waitingForPlugin");
                }
                result = JSProf.LWR(1480, result, JSProf.LNE(1479, {
                    plugin: plugin,
                    mid: mid,
                    req: JSProf.LFC(1478, createRequire, false)(JSProf.LRE(1477, referenceModule)),
                    prid: prid
                }, 11));
            } else {
                result = JSProf.LWR(1484, result, JSProf.LFC(1483, getModuleInfo, false)(JSProf.LRE(1481, mid), JSProf.LRE(1482, referenceModule)));
            }
            return JSProf.LGE(1485, modules, JSProf.TMPS.t1aa511a293f1786052bfecc9e636814d4fe32117 = result.mid)[JSProf.TMPS.t1aa511a293f1786052bfecc9e636814d4fe32117] || !JSProf.LRE(1486, immediate) && (JSProf.LPE(1488, modules, JSProf.TMPS.t1aa511a293f1786052bfecc9e636814d4fe32117 = result.mid)[JSProf.TMPS.t1aa511a293f1786052bfecc9e636814d4fe32117] = JSProf.LRPE(1488, JSProf.LRE(1487, result)));
        }, 12), toAbsMid = JSProf.LPD(1495, req, 'toAbsMid').toAbsMid = JSProf.LRSP(1495, JSProf.LNF(1494, function (mid, referenceModule) {
            return JSProf.LGD(1493, JSProf.LFC(1492, getModuleInfo, false)(JSProf.LRE(1490, mid), JSProf.LRE(1491, referenceModule)), 'mid').mid;
        }, 12)), toUrl = JSProf.LPD(1505, req, 'toUrl').toUrl = JSProf.LRSP(1505, JSProf.LNF(1504, function (name, referenceModule) {
            var moduleInfo = JSProf.LFC(1498, getModuleInfo, false)(JSProf.LRE(1496, name) + "/x", JSProf.LRE(1497, referenceModule)), url = JSProf.LGD(1499, moduleInfo, 'url').url;
            return JSProf.LFC(1503, fixupUrl, false)(JSProf.LGD(1500, moduleInfo, 'pid').pid === 0 ? JSProf.LRE(1501, name) : url.substring(0, JSProf.LGD(1502, url, 'length').length - 5));
        }, 12)), nonModuleProps = JSProf.LNE(1506, {
            injected: arrived,
            executed: executed,
            def: nonmodule,
            result: nonmodule
        }, 11), makeCjs = JSProf.LNF(1511, function (mid) {
            return JSProf.LPE(1510, modules, 'mid')[mid] = JSProf.LRPE(1510, JSProf.LFC(1509, mix, false)(JSProf.LNE(1507, { mid: mid }, 11), JSProf.LRE(1508, nonModuleProps)));
        }, 12), cjsRequireModule = JSProf.LFC(1512, makeCjs, false)("require"), cjsExportsModule = JSProf.LFC(1513, makeCjs, false)("exports"), cjsModuleModule = JSProf.LFC(1514, makeCjs, false)("module"), runFactory = JSProf.LNF(1549, function (module, args) {
            JSProf.LMC(1517, req, 'trace').trace("loader-run-factory", JSProf.LNE(1516, [JSProf.LGD(1515, module, 'mid').mid], 10));
            var factory = JSProf.LGD(1518, module, 'def').def, result;
            JSProf.LFC(1519, has, false)("dojo-sync-loader") && syncExecStack.unshift(JSProf.LRE(1520, module));
            if (JSProf.LFC(1521, has, false)("config-dojo-loader-catches")) {
                try {
                    result = JSProf.LWR(1527, result, JSProf.LFC(1523, isFunction, false)(JSProf.LRE(1522, factory)) ? JSProf.LMC(1525, factory, 'apply').apply(null, JSProf.LRE(1524, args)) : JSProf.LRE(1526, factory));
                } catch (e) {
                    JSProf.LFC(1534, signal, false)(JSProf.LRE(1528, error), JSProf.LPD(1533, module, 'result').result = JSProf.LRSP(1533, JSProf.LFC(1532, makeError, false)("factoryThrew", JSProf.LNE(1531, [
                        JSProf.LRE(1529, module),
                        JSProf.LRE(1530, e)
                    ], 10))));
                }
            } else {
                result = JSProf.LWR(1540, result, JSProf.LFC(1536, isFunction, false)(JSProf.LRE(1535, factory)) ? JSProf.LMC(1538, factory, 'apply').apply(null, JSProf.LRE(1537, args)) : JSProf.LRE(1539, factory));
            }
            JSProf.LPD(1545, module, 'result').result = JSProf.LRSP(1545, JSProf.LRE(1541, result) === undefined && JSProf.LGD(1542, module, 'cjs').cjs ? JSProf.LGD(1543, module.cjs, 'exports').exports : JSProf.LRE(1544, result));
            JSProf.LFC(1546, has, false)("dojo-sync-loader") && JSProf.LMC(1548, syncExecStack, 'shift').shift(JSProf.LRE(1547, module));
        }, 12), abortExec = JSProf.LNE(1550, {}, 11), defOrder = 0, promoteModuleToPlugin = JSProf.LNF(1559, function (pluginModule) {
            var plugin = JSProf.LGD(1551, pluginModule, 'result').result;
            JSProf.LPD(1553, pluginModule, 'dynamic').dynamic = JSProf.LRSP(1553, JSProf.LGD(1552, plugin, 'dynamic').dynamic);
            JSProf.LPD(1555, pluginModule, 'normalize').normalize = JSProf.LRSP(1555, JSProf.LGD(1554, plugin, 'normalize').normalize);
            JSProf.LPD(1557, pluginModule, 'load').load = JSProf.LRSP(1557, JSProf.LGD(1556, plugin, 'load').load);
            return JSProf.LRE(1558, pluginModule);
        }, 12), resolvePluginLoadQ = JSProf.LNF(1603, function (plugin) {
            // plugins is a newly executed module that has a loadQ waiting to run
            // step 1: traverse the loadQ and fixup the mid and prid; remember the map from original mid to new mid
            // recall the original mid was created before the plugin was on board and therefore it was impossible to
            // compute the final mid; accordingly, prid may or may not change, but the mid will definitely change
            var map = JSProf.LNE(1560, {}, 11);
            JSProf.LFC(1585, forEach, false)(JSProf.LGD(1561, plugin, 'loadQ').loadQ, JSProf.LNF(1584, function (pseudoPluginResource) {
                // manufacture and insert the real module in modules
                var prid = JSProf.LFC(1565, resolvePluginResourceId, false)(JSProf.LRE(1562, plugin), JSProf.LGD(1563, pseudoPluginResource, 'prid').prid, JSProf.LGD(1564, pseudoPluginResource.req, 'module').module), mid = JSProf.LGD(1566, plugin, 'dynamic').dynamic ? JSProf.LMC(1568, pseudoPluginResource.mid, 'replace').replace(/waitingForPlugin$/, JSProf.LRE(1567, prid)) : JSProf.LGD(1569, plugin, 'mid').mid + "!" + JSProf.LRE(1570, prid), pluginResource = JSProf.LFC(1575, mix, false)(JSProf.LFC(1573, mix, false)(JSProf.LNE(1571, {}, 11), JSProf.LRE(1572, pseudoPluginResource)), JSProf.LNE(1574, {
                        mid: mid,
                        prid: prid,
                        injected: 0
                    }, 11));
                if (!JSProf.LGE(1576, modules, 'mid')[mid]) {
                    // create a new (the real) plugin resource and inject it normally now that the plugin is on board
                    JSProf.LFC(1579, injectPlugin, false)(JSProf.LPE(1578, modules, 'mid')[mid] = JSProf.LRPE(1578, JSProf.LRE(1577, pluginResource)));
                }
                // else this was a duplicate request for the same (plugin, rid) for a nondynamic plugin
                // pluginResource is really just a placeholder with the wrong mid (because we couldn't calculate it until the plugin was on board)
                // mark is as arrived and delete it from modules; the real module was requested above
                JSProf.LPE(1581, map, JSProf.TMPS.t2544a7c095cbdde4765cca3192459eff84b86138 = pseudoPluginResource.mid)[JSProf.TMPS.t2544a7c095cbdde4765cca3192459eff84b86138] = JSProf.LRPE(1581, JSProf.LGE(1580, modules, 'mid')[mid]);
                JSProf.LFC(1583, setArrived, false)(JSProf.LRE(1582, pseudoPluginResource));
                delete modules[pseudoPluginResource.mid];
            }, 12));
            JSProf.LPD(1586, plugin, 'loadQ').loadQ = JSProf.LRSP(1586, 0);
            // step2: replace all references to any placeholder modules with real modules
            var substituteModules = JSProf.LNF(1596, function (module) {
                    for (var replacement, deps = JSProf.LGD(1587, module, 'deps').deps || JSProf.LNE(1588, [], 10), i = 0; JSProf.LRE(1589, i) < JSProf.LGD(1590, deps, 'length').length; i++) {
                        replacement = JSProf.LWR(1592, replacement, JSProf.LGE(1591, map, JSProf.TMPS.t2544a7c095cbdde4765cca3192459eff84b86138 = deps[i].mid)[JSProf.TMPS.t2544a7c095cbdde4765cca3192459eff84b86138]);
                        if (JSProf.LRE(1593, replacement)) {
                            JSProf.LPE(1595, deps, 'i')[i] = JSProf.LRPE(1595, JSProf.LRE(1594, replacement));
                        }
                    }
                }, 12);
            for (var p in JSProf.LRE(1597, modules)) {
                JSProf.LFC(1599, substituteModules, false)(JSProf.LGE(1598, modules, 'p')[p]);
            }
            JSProf.LFC(1602, forEach, false)(JSProf.LRE(1600, execQ), JSProf.LRE(1601, substituteModules));
        }, 12), finishExec = JSProf.LNF(1629, function (module) {
            JSProf.LMC(1606, req, 'trace').trace("loader-finish-exec", JSProf.LNE(1605, [JSProf.LGD(1604, module, 'mid').mid], 10));
            JSProf.LPD(1608, module, 'executed').executed = JSProf.LRSP(1608, JSProf.LRE(1607, executed));
            JSProf.LPD(1609, module, 'defOrder').defOrder = JSProf.LRSP(1609, defOrder++);
            JSProf.LFC(1610, has, false)("dojo-sync-loader") && JSProf.LFC(1614, forEach, false)(JSProf.LGD(1611, module, 'provides').provides, JSProf.LNF(1613, function (cb) {
                JSProf.LFC(1612, cb, false)();
            }, 12));
            if (JSProf.LGD(1615, module, 'loadQ').loadQ) {
                // the module was a plugin
                JSProf.LFC(1617, promoteModuleToPlugin, false)(JSProf.LRE(1616, module));
                JSProf.LFC(1619, resolvePluginLoadQ, false)(JSProf.LRE(1618, module));
            }
            // remove all occurrences of this module from the execQ
            for (i = JSProf.LWR(1620, i, 0); JSProf.LRE(1621, i) < JSProf.LGD(1622, execQ, 'length').length;) {
                if (JSProf.LGE(1623, execQ, 'i')[i] === JSProf.LRE(1624, module)) {
                    JSProf.LMC(1626, execQ, 'splice').splice(JSProf.LRE(1625, i), 1);
                } else {
                    i++;
                }
            }
            // delete references to synthetic modules
            if (JSProf.LMC(1628, /^require\*/, 'test').test(JSProf.LGD(1627, module, 'mid').mid)) {
                delete modules[module.mid];
            }
        }, 12), circleTrace = JSProf.LNE(1630, [], 10), execModule = JSProf.LNF(1693, function (module, strict) {
            // run the dependency vector, then run the factory for module
            if (JSProf.LGD(1631, module, 'executed').executed === JSProf.LRE(1632, executing)) {
                JSProf.LMC(1636, req, 'trace').trace("loader-circular-dependency", JSProf.LNE(1635, [JSProf.LMC(1634, circleTrace.concat(JSProf.LGD(1633, module, 'mid').mid), 'join').join("->")], 10));
                return !JSProf.LGD(1637, module, 'def').def || JSProf.LRE(1638, strict) ? JSProf.LRE(1639, abortExec) : JSProf.LGD(1640, module, 'cjs').cjs && JSProf.LGD(1641, module.cjs, 'exports').exports;
            }
            // at this point the module is either not executed or fully executed
            if (!JSProf.LGD(1642, module, 'executed').executed) {
                if (!JSProf.LGD(1643, module, 'def').def) {
                    return JSProf.LRE(1644, abortExec);
                }
                var mid = JSProf.LGD(1645, module, 'mid').mid, deps = JSProf.LGD(1646, module, 'deps').deps || JSProf.LNE(1647, [], 10), arg, argResult, args = JSProf.LNE(1648, [], 10), i = 0;
                if (JSProf.LFC(1649, has, false)("dojo-trace-api")) {
                    JSProf.LMC(1651, circleTrace, 'push').push(JSProf.LRE(1650, mid));
                    JSProf.LMC(1655, req, 'trace').trace("loader-exec-module", JSProf.LNE(1654, [
                        "exec",
                        JSProf.LGD(1652, circleTrace, 'length').length,
                        JSProf.LRE(1653, mid)
                    ], 10));
                }
                // for circular dependencies, assume the first module encountered was executed OK
                // modules that circularly depend on a module that has not run its factory will get
                // the pre-made cjs.exports===module.result. They can take a reference to this object and/or
                // add properties to it. When the module finally runs its factory, the factory can
                // read/write/replace this object. Notice that so long as the object isn't replaced, any
                // reference taken earlier while walking the deps list is still valid.
                JSProf.LPD(1657, module, 'executed').executed = JSProf.LRSP(1657, JSProf.LRE(1656, executing));
                while (arg = JSProf.LWR(1659, arg, JSProf.LGE(1658, deps, JSProf.TMPS.t2b5262bade2185ed5eee389a7d74040a9e975854 = i++)[JSProf.TMPS.t2b5262bade2185ed5eee389a7d74040a9e975854])) {
                    argResult = JSProf.LWR(1673, argResult, JSProf.LRE(1660, arg) === JSProf.LRE(1661, cjsRequireModule) ? JSProf.LFC(1663, createRequire, false)(JSProf.LRE(1662, module)) : JSProf.LRE(1664, arg) === JSProf.LRE(1665, cjsExportsModule) ? JSProf.LGD(1666, module.cjs, 'exports').exports : JSProf.LRE(1667, arg) === JSProf.LRE(1668, cjsModuleModule) ? JSProf.LGD(1669, module, 'cjs').cjs : JSProf.LFC(1672, execModule, false)(JSProf.LRE(1670, arg), JSProf.LRE(1671, strict)));
                    if (JSProf.LRE(1674, argResult) === JSProf.LRE(1675, abortExec)) {
                        JSProf.LPD(1676, module, 'executed').executed = JSProf.LRSP(1676, 0);
                        JSProf.LMC(1679, req, 'trace').trace("loader-exec-module", JSProf.LNE(1678, [
                            "abort",
                            JSProf.LRE(1677, mid)
                        ], 10));
                        JSProf.LFC(1680, has, false)("dojo-trace-api") && JSProf.LMC(1681, circleTrace, 'pop').pop();
                        return JSProf.LRE(1682, abortExec);
                    }
                    JSProf.LMC(1684, args, 'push').push(JSProf.LRE(1683, argResult));
                }
                JSProf.LFC(1687, runFactory, false)(JSProf.LRE(1685, module), JSProf.LRE(1686, args));
                JSProf.LFC(1689, finishExec, false)(JSProf.LRE(1688, module));
                JSProf.LFC(1690, has, false)("dojo-trace-api") && JSProf.LMC(1691, circleTrace, 'pop').pop();
            }
            // at this point the module is guaranteed fully executed
            return JSProf.LGD(1692, module, 'result').result;
        }, 12), checkCompleteGuard = 0, guardCheckComplete = JSProf.LNF(1698, function (proc) {
            try {
                checkCompleteGuard++;
                JSProf.LFC(1694, proc, false)();
            } finally {
                checkCompleteGuard--;
            }
            if (JSProf.LFC(1695, execComplete, false)()) {
                JSProf.LFC(1697, signal, false)("idle", JSProf.LNE(1696, [], 10));
            }
        }, 12), checkComplete = JSProf.LNF(1715, function () {
            // keep going through the execQ as long as at least one factory is executed
            // plugins, recursion, cached modules all make for many execution path possibilities
            if (JSProf.LRE(1699, checkCompleteGuard)) {
                return;
            }
            JSProf.LFC(1714, guardCheckComplete, false)(JSProf.LNF(1713, function () {
                JSProf.LFC(1700, checkDojoRequirePlugin, false)();
                for (var currentDefOrder, module, i = 0; JSProf.LRE(1701, i) < JSProf.LGD(1702, execQ, 'length').length;) {
                    currentDefOrder = JSProf.LWR(1704, currentDefOrder, JSProf.LRE(1703, defOrder));
                    module = JSProf.LWR(1706, module, JSProf.LGE(1705, execQ, 'i')[i]);
                    JSProf.LFC(1708, execModule, false)(JSProf.LRE(1707, module));
                    if (JSProf.LRE(1709, currentDefOrder) != JSProf.LRE(1710, defOrder)) {
                        // defOrder was bumped one or more times indicating something was executed (note, this indicates
                        // the execQ was modified, maybe a lot (for example a later module causes an earlier module to execute)
                        JSProf.LFC(1711, checkDojoRequirePlugin, false)();
                        i = JSProf.LWR(1712, i, 0);
                    } else {
                        // nothing happened; check the next module in the exec queue
                        i++;
                    }
                }
            }, 12));
        }, 12);
    if (JSProf.LFC(1716, has, false)("dojo-undef-api")) {
        JSProf.LPD(1726, req, 'undef').undef = JSProf.LRSP(1726, JSProf.LNF(1725, function (moduleId, referenceModule) {
            // In order to reload a module, it must be undefined (this routine) and then re-requested.
            // This is useful for testing frameworks (at least).
            var module = JSProf.LFC(1719, getModule, false)(JSProf.LRE(1717, moduleId), JSProf.LRE(1718, referenceModule));
            JSProf.LFC(1721, setArrived, false)(JSProf.LRE(1720, module));
            JSProf.LFC(1724, mix, false)(JSProf.LRE(1722, module), JSProf.LNE(1723, {
                def: 0,
                executed: 0,
                injected: 0,
                node: 0
            }, 11));
        }, 12));
    }
    if (JSProf.LFC(1727, has, false)("dojo-inject-api")) {
        if (JSProf.LFC(1728, has, false)("dojo-loader-eval-hint-url") === undefined) {
            JSProf.LMC(1729, has, 'add').add("dojo-loader-eval-hint-url", 1);
        }
        var fixupUrl = typeof JSProf.LGD(1730, userConfig, 'fixupUrl').fixupUrl == "function" ? JSProf.LGD(1731, userConfig, 'fixupUrl').fixupUrl : JSProf.LNF(1737, function (url) {
                url += "";
                // make sure url is a Javascript string (some paths may be a Java string)
                return JSProf.LRE(1732, url) + (JSProf.LRE(1733, cacheBust) ? (JSProf.LMC(1735, /\?/, 'test').test(JSProf.LRE(1734, url)) ? "&" : "?") + JSProf.LRE(1736, cacheBust) : "");
            }, 12), injectPlugin = JSProf.LNF(1766, function (module) {
                // injects the plugin module given by module; may have to inject the plugin itself
                var plugin = JSProf.LGD(1738, module, 'plugin').plugin;
                if (JSProf.LGD(1739, plugin, 'executed').executed === JSProf.LRE(1740, executed) && !JSProf.LGD(1741, plugin, 'load').load) {
                    // executed the module not knowing it was a plugin
                    JSProf.LFC(1743, promoteModuleToPlugin, false)(JSProf.LRE(1742, plugin));
                }
                var onLoad = JSProf.LNF(1751, function (def) {
                        JSProf.LPD(1745, module, 'result').result = JSProf.LRSP(1745, JSProf.LRE(1744, def));
                        JSProf.LFC(1747, setArrived, false)(JSProf.LRE(1746, module));
                        JSProf.LFC(1749, finishExec, false)(JSProf.LRE(1748, module));
                        JSProf.LFC(1750, checkComplete, false)();
                    }, 12);
                if (JSProf.LGD(1752, plugin, 'load').load) {
                    JSProf.LMC(1756, plugin, 'load').load(JSProf.LGD(1753, module, 'prid').prid, JSProf.LGD(1754, module, 'req').req, JSProf.LRE(1755, onLoad));
                } else if (JSProf.LGD(1757, plugin, 'loadQ').loadQ) {
                    JSProf.LMC(1759, plugin.loadQ, 'push').push(JSProf.LRE(1758, module));
                } else {
                    // the unshift instead of push is important: we don't want plugins to execute as
                    // dependencies of some other module because this may cause circles when the plugin
                    // loadQ is run; also, generally, we want plugins to run early since they may load
                    // several other modules and therefore can potentially unblock many modules
                    JSProf.LPD(1762, plugin, 'loadQ').loadQ = JSProf.LRSP(1762, JSProf.LNE(1761, [JSProf.LRE(1760, module)], 10));
                    execQ.unshift(JSProf.LRE(1763, plugin));
                    JSProf.LFC(1765, injectModule, false)(JSProf.LRE(1764, plugin));
                }
            }, 12),
            // for IE, injecting a module may result in a recursive execution if the module is in the cache
            cached = 0, injectingModule = 0, injectingCachedModule = 0, evalModuleText = JSProf.LNF(1793, function (text, module) {
                // see def() for the injectingCachedModule bracket; it simply causes a short, safe circuit
                if (JSProf.LFC(1767, has, false)("config-stripStrict")) {
                    text = JSProf.LWR(1769, text, JSProf.LMC(1768, text, 'replace').replace(/"use strict"/g, ''));
                }
                injectingCachedModule = JSProf.LWR(1770, injectingCachedModule, 1);
                if (JSProf.LFC(1771, has, false)("config-dojo-loader-catches")) {
                    try {
                        if (JSProf.LRE(1772, text) === JSProf.LRE(1773, cached)) {
                            JSProf.LMC(1774, cached, 'call').call(null);
                        } else {
                            JSProf.LMC(1779, req, 'eval').eval(JSProf.LRE(1775, text), JSProf.LFC(1776, has, false)("dojo-loader-eval-hint-url") ? JSProf.LGD(1777, module, 'url').url : JSProf.LGD(1778, module, 'mid').mid);
                        }
                    } catch (e) {
                        JSProf.LFC(1783, signal, false)(JSProf.LRE(1780, error), JSProf.LFC(1782, makeError, false)("evalModuleThrew", JSProf.LRE(1781, module)));
                    }
                } else {
                    if (JSProf.LRE(1784, text) === JSProf.LRE(1785, cached)) {
                        JSProf.LMC(1786, cached, 'call').call(null);
                    } else {
                        JSProf.LMC(1791, req, 'eval').eval(JSProf.LRE(1787, text), JSProf.LFC(1788, has, false)("dojo-loader-eval-hint-url") ? JSProf.LGD(1789, module, 'url').url : JSProf.LGD(1790, module, 'mid').mid);
                    }
                }
                injectingCachedModule = JSProf.LWR(1792, injectingCachedModule, 0);
            }, 12), injectModule = JSProf.LNF(1956, function (module) {
                // Inject the module. In the browser environment, this means appending a script element into
                // the document; in other environments, it means loading a file.
                //
                // If in synchronous mode, then get the module synchronously if it's not xdomainLoading.
                var mid = JSProf.LGD(1794, module, 'mid').mid, url = JSProf.LGD(1795, module, 'url').url;
                if (JSProf.LGD(1796, module, 'executed').executed || JSProf.LGD(1797, module, 'injected').injected || JSProf.LGE(1798, waiting, 'mid')[mid] || JSProf.LGD(1799, module, 'url').url && (JSProf.LGD(1800, module, 'pack').pack && JSProf.LGE(1801, waiting, JSProf.TMPS.t6048d959420ebd8184a46599bfa914ae3d1d735c = module.url)[JSProf.TMPS.t6048d959420ebd8184a46599bfa914ae3d1d735c] === JSProf.LGD(1802, module, 'pack').pack || JSProf.LGE(1803, waiting, JSProf.TMPS.t6048d959420ebd8184a46599bfa914ae3d1d735c = module.url)[JSProf.TMPS.t6048d959420ebd8184a46599bfa914ae3d1d735c] == 1)) {
                    return;
                }
                JSProf.LFC(1805, setRequested, false)(JSProf.LRE(1804, module));
                if (JSProf.LFC(1806, has, false)("dojo-combo-api")) {
                    var viaCombo = 0;
                    if (JSProf.LGD(1807, module, 'plugin').plugin && JSProf.LGD(1808, module.plugin, 'isCombo').isCombo) {
                        // a combo plugin; therefore, must be handled by combo service
                        // the prid should have already been converted to a URL (if required by the plugin) during
                        // the normalize process; in any event, there is no way for the loader to know how to
                        // to the conversion; therefore the third argument is zero
                        JSProf.LMC(1812, req.combo, 'add').add(JSProf.LGD(1809, module.plugin, 'mid').mid, JSProf.LGD(1810, module, 'prid').prid, 0, JSProf.LRE(1811, req));
                        viaCombo = JSProf.LWR(1813, viaCombo, 1);
                    } else if (!JSProf.LGD(1814, module, 'plugin').plugin) {
                        viaCombo = JSProf.LWR(1819, viaCombo, JSProf.LMC(1818, req.combo, 'add').add(0, JSProf.LGD(1815, module, 'mid').mid, JSProf.LGD(1816, module, 'url').url, JSProf.LRE(1817, req)));
                    }
                    if (JSProf.LRE(1820, viaCombo)) {
                        comboPending = JSProf.LWR(1821, comboPending, 1);
                        return;
                    }
                }
                if (JSProf.LGD(1822, module, 'plugin').plugin) {
                    JSProf.LFC(1824, injectPlugin, false)(JSProf.LRE(1823, module));
                    return;
                }
                // else a normal module (not a plugin)
                var onLoadCallback = JSProf.LNF(1847, function () {
                        JSProf.LFC(1826, runDefQ, false)(JSProf.LRE(1825, module));
                        if (JSProf.LGD(1827, module, 'injected').injected !== JSProf.LRE(1828, arrived)) {
                            // the script that contained the module arrived and has been executed yet
                            // nothing was added to the defQ (so it wasn't an AMD module) and the module
                            // wasn't marked as arrived by dojo.provide (so it wasn't a v1.6- module);
                            // therefore, it must not have been a module; adjust state accordingly
                            if (JSProf.LFC(1829, has, false)("dojo-enforceDefine")) {
                                JSProf.LFC(1833, signal, false)(JSProf.LRE(1830, error), JSProf.LFC(1832, makeError, false)("noDefine", JSProf.LRE(1831, module)));
                                return;
                            }
                            JSProf.LFC(1835, setArrived, false)(JSProf.LRE(1834, module));
                            JSProf.LFC(1838, mix, false)(JSProf.LRE(1836, module), JSProf.LRE(1837, nonModuleProps));
                            JSProf.LMC(1841, req, 'trace').trace("loader-define-nonmodule", JSProf.LNE(1840, [JSProf.LGD(1839, module, 'url').url], 10));
                        }
                        if (JSProf.LFC(1842, has, false)("dojo-sync-loader") && JSProf.LRE(1843, legacyMode)) {
                            // must call checkComplete even in for sync loader because we may be in xdomainLoading mode;
                            // but, if xd loading, then don't call checkComplete until out of the current sync traversal
                            // in order to preserve order of execution of the dojo.required modules
                            !JSProf.LGD(1844, syncExecStack, 'length').length && JSProf.LFC(1845, checkComplete, false)();
                        } else {
                            JSProf.LFC(1846, checkComplete, false)();
                        }
                    }, 12);
                cached = JSProf.LWR(1852, cached, JSProf.LGE(1848, cache, 'mid')[mid] || JSProf.LGE(1851, cache, JSProf.TMPS.t34fc3319184a76222fdc5c4f23a1fd486c7dd6cf = JSProf.LRE(1849, urlKeyPrefix) + JSProf.LGD(1850, module, 'url').url)[JSProf.TMPS.t34fc3319184a76222fdc5c4f23a1fd486c7dd6cf]);
                if (JSProf.LRE(1853, cached)) {
                    JSProf.LMC(1857, req, 'trace').trace("loader-inject", JSProf.LNE(1856, [
                        "cache",
                        JSProf.LGD(1854, module, 'mid').mid,
                        JSProf.LRE(1855, url)
                    ], 10));
                    JSProf.LFC(1860, evalModuleText, false)(JSProf.LRE(1858, cached), JSProf.LRE(1859, module));
                    JSProf.LFC(1861, onLoadCallback, false)();
                    return;
                }
                if (JSProf.LFC(1862, has, false)("dojo-sync-loader") && JSProf.LRE(1863, legacyMode)) {
                    if (JSProf.LGD(1864, module, 'isXd').isXd) {
                        // switch to async mode temporarily; if current legacyMode!=sync, then is must be one of {legacyAsync, xd, false}
                        JSProf.LRE(1865, legacyMode) == JSProf.LRE(1866, sync) && (legacyMode = JSProf.LWR(1868, legacyMode, JSProf.LRE(1867, xd)));    // fall through and load via script injection
                    } else if (JSProf.LGD(1869, module, 'isAmd').isAmd && JSProf.LRE(1870, legacyMode) != JSProf.LRE(1871, sync)) {
                    } else {
                        // mode may be sync, xd/legacyAsync, or async; module may be AMD or legacy; but module is always located on the same domain
                        var xhrCallback = JSProf.LNF(1920, function (text) {
                                if (JSProf.LRE(1872, legacyMode) == JSProf.LRE(1873, sync)) {
                                    // the top of syncExecStack gives the current synchronously executing module; the loader needs
                                    // to know this if it has to switch to async loading in the middle of evaluating a legacy module
                                    // this happens when a modules dojo.require's a module that must be loaded async because it's xdomain
                                    // (using unshift/shift because there is no back() methods for Javascript arrays)
                                    syncExecStack.unshift(JSProf.LRE(1874, module));
                                    JSProf.LFC(1877, evalModuleText, false)(JSProf.LRE(1875, text), JSProf.LRE(1876, module));
                                    JSProf.LMC(1878, syncExecStack, 'shift').shift();
                                    // maybe the module was an AMD module
                                    JSProf.LFC(1880, runDefQ, false)(JSProf.LRE(1879, module));
                                    // legacy modules never get to defineModule() => cjs and injected never set; also evaluation implies executing
                                    if (!JSProf.LGD(1881, module, 'cjs').cjs) {
                                        JSProf.LFC(1883, setArrived, false)(JSProf.LRE(1882, module));
                                        JSProf.LFC(1885, finishExec, false)(JSProf.LRE(1884, module));
                                    }
                                    if (JSProf.LGD(1886, module, 'finish').finish) {
                                        // while synchronously evaluating this module, dojo.require was applied referencing a module
                                        // that had to be loaded async; therefore, the loader stopped answering all dojo.require
                                        // requests so they could be answered completely in the correct sequence; module.finish gives
                                        // the list of dojo.requires that must be re-applied once all target modules are available;
                                        // make a synthetic module to execute the dojo.require's in the correct order
                                        // compute a guaranteed-unique mid for the synthetic finish module; remember the finish vector; remove it from the reference module
                                        // TODO: can we just leave the module.finish...what's it hurting?
                                        var finishMid = JSProf.LRE(1887, mid) + "*finish", finish = JSProf.LGD(1888, module, 'finish').finish;
                                        delete module.finish;
                                        JSProf.LFC(1899, def, false)(JSProf.LRE(1889, finishMid), JSProf.LNE(1892, [
                                            "dojo",
                                            JSProf.LMC(1891, "dojo/require!" + JSProf.LMC(1890, finish, 'join').join(","), 'replace').replace(/\./g, "/")
                                        ], 10), JSProf.LNF(1898, function (dojo) {
                                            JSProf.LFC(1897, forEach, false)(JSProf.LRE(1893, finish), JSProf.LNF(1896, function (mid) {
                                                JSProf.LMC(1895, dojo, 'require').require(JSProf.LRE(1894, mid));
                                            }, 12));
                                        }, 12));
                                        // unshift, not push, which causes the current traversal to be reattempted from the top
                                        execQ.unshift(JSProf.LFC(1901, getModule, false)(JSProf.LRE(1900, finishMid)));
                                    }
                                    JSProf.LFC(1902, onLoadCallback, false)();
                                } else {
                                    text = JSProf.LWR(1906, text, JSProf.LFC(1905, transformToAmd, false)(JSProf.LRE(1903, module), JSProf.LRE(1904, text)));
                                    if (JSProf.LRE(1907, text)) {
                                        JSProf.LFC(1910, evalModuleText, false)(JSProf.LRE(1908, text), JSProf.LRE(1909, module));
                                        JSProf.LFC(1911, onLoadCallback, false)();
                                    } else {
                                        // if transformToAmd returned falsy, then the module was already AMD and it can be script-injected
                                        // do so to improve debugability(even though it means another download...which probably won't happen with a good browser cache)
                                        injectingModule = JSProf.LWR(1913, injectingModule, JSProf.LRE(1912, module));
                                        JSProf.LMC(1918, req, 'injectUrl').injectUrl(JSProf.LFC(1915, fixupUrl, false)(JSProf.LRE(1914, url)), JSProf.LRE(1916, onLoadCallback), JSProf.LRE(1917, module));
                                        injectingModule = JSProf.LWR(1919, injectingModule, 0);
                                    }
                                }
                            }, 12);
                        JSProf.LMC(1926, req, 'trace').trace("loader-inject", JSProf.LNE(1925, [
                            "xhr",
                            JSProf.LGD(1921, module, 'mid').mid,
                            JSProf.LRE(1922, url),
                            JSProf.LRE(1923, legacyMode) != JSProf.LRE(1924, sync)
                        ], 10));
                        if (JSProf.LFC(1927, has, false)("config-dojo-loader-catches")) {
                            try {
                                JSProf.LMC(1932, req, 'getText').getText(JSProf.LRE(1928, url), JSProf.LRE(1929, legacyMode) != JSProf.LRE(1930, sync), JSProf.LRE(1931, xhrCallback));
                            } catch (e) {
                                JSProf.LFC(1938, signal, false)(JSProf.LRE(1933, error), JSProf.LFC(1937, makeError, false)("xhrInjectFailed", JSProf.LNE(1936, [
                                    JSProf.LRE(1934, module),
                                    JSProf.LRE(1935, e)
                                ], 10)));
                            }
                        } else {
                            JSProf.LMC(1943, req, 'getText').getText(JSProf.LRE(1939, url), JSProf.LRE(1940, legacyMode) != JSProf.LRE(1941, sync), JSProf.LRE(1942, xhrCallback));
                        }
                        return;
                    }
                }
                // else async mode or fell through in xdomain loading mode; either way, load by script injection
                JSProf.LMC(1947, req, 'trace').trace("loader-inject", JSProf.LNE(1946, [
                    "script",
                    JSProf.LGD(1944, module, 'mid').mid,
                    JSProf.LRE(1945, url)
                ], 10));
                injectingModule = JSProf.LWR(1949, injectingModule, JSProf.LRE(1948, module));
                JSProf.LMC(1954, req, 'injectUrl').injectUrl(JSProf.LFC(1951, fixupUrl, false)(JSProf.LRE(1950, url)), JSProf.LRE(1952, onLoadCallback), JSProf.LRE(1953, module));
                injectingModule = JSProf.LWR(1955, injectingModule, 0);
            }, 12), defineModule = JSProf.LNF(2016, function (module, deps, def) {
                JSProf.LMC(1960, req, 'trace').trace("loader-define-module", JSProf.LNE(1959, [
                    JSProf.LGD(1957, module, 'mid').mid,
                    JSProf.LRE(1958, deps)
                ], 10));
                if (JSProf.LFC(1961, has, false)("dojo-combo-api") && JSProf.LGD(1962, module, 'plugin').plugin && JSProf.LGD(1963, module.plugin, 'isCombo').isCombo) {
                    // the module is a plugin resource loaded by the combo service
                    // note: check for module.plugin should be enough since normal plugin resources should
                    // not follow this path; module.plugin.isCombo is future-proofing belt and suspenders
                    JSProf.LPD(1968, module, 'result').result = JSProf.LRSP(1968, JSProf.LFC(1965, isFunction, false)(JSProf.LRE(1964, def)) ? JSProf.LFC(1966, def, false)() : JSProf.LRE(1967, def));
                    JSProf.LFC(1970, setArrived, false)(JSProf.LRE(1969, module));
                    JSProf.LFC(1972, finishExec, false)(JSProf.LRE(1971, module));
                    return JSProf.LRE(1973, module);
                }
                var mid = JSProf.LGD(1974, module, 'mid').mid;
                if (JSProf.LGD(1975, module, 'injected').injected === JSProf.LRE(1976, arrived)) {
                    JSProf.LFC(1980, signal, false)(JSProf.LRE(1977, error), JSProf.LFC(1979, makeError, false)("multipleDefine", JSProf.LRE(1978, module)));
                    return JSProf.LRE(1981, module);
                }
                JSProf.LFC(1992, mix, false)(JSProf.LRE(1982, module), JSProf.LNE(1991, {
                    deps: deps,
                    def: def,
                    cjs: JSProf.LNE(1990, {
                        id: module.mid,
                        uri: module.url,
                        exports: JSProf.LPD(1984, module, 'result').result = JSProf.LRSP(1984, JSProf.LNE(1983, {}, 11)),
                        setExports: JSProf.LNF(1987, function (exports) {
                            JSProf.LPD(1986, module.cjs, 'exports').exports = JSProf.LRSP(1986, JSProf.LRE(1985, exports));
                        }, 12),
                        config: JSProf.LNF(1989, function () {
                            return JSProf.LGD(1988, module, 'config').config;
                        }, 12)
                    }, 11)
                }, 11));
                // resolve deps with respect to this module
                for (var i = 0; JSProf.LGE(1993, deps, 'i')[i]; i++) {
                    JSProf.LPE(1997, deps, 'i')[i] = JSProf.LRPE(1997, JSProf.LFC(1996, getModule, false)(JSProf.LGE(1994, deps, 'i')[i], JSProf.LRE(1995, module)));
                }
                if (JSProf.LFC(1998, has, false)("dojo-sync-loader") && JSProf.LRE(1999, legacyMode) && !JSProf.LGE(2000, waiting, 'mid')[mid]) {
                    // the module showed up without being asked for; it was probably in a <script> element
                    JSProf.LFC(2002, injectDependencies, false)(JSProf.LRE(2001, module));
                    JSProf.LMC(2004, execQ, 'push').push(JSProf.LRE(2003, module));
                    JSProf.LFC(2005, checkComplete, false)();
                }
                JSProf.LFC(2007, setArrived, false)(JSProf.LRE(2006, module));
                if (!JSProf.LFC(2009, isFunction, false)(JSProf.LRE(2008, def)) && !JSProf.LGD(2010, deps, 'length').length) {
                    JSProf.LPD(2012, module, 'result').result = JSProf.LRSP(2012, JSProf.LRE(2011, def));
                    JSProf.LFC(2014, finishExec, false)(JSProf.LRE(2013, module));
                }
                return JSProf.LRE(2015, module);
            }, 12), runDefQ = JSProf.LNF(2042, function (referenceModule, mids) {
                // defQ is an array of [id, dependencies, factory]
                // mids (if any) is a vector of mids given by a combo service
                var definedModules = JSProf.LNE(2017, [], 10), module, args;
                while (JSProf.LGD(2018, defQ, 'length').length) {
                    args = JSProf.LWR(2020, args, JSProf.LMC(2019, defQ, 'shift').shift());
                    JSProf.LRE(2021, mids) && (JSProf.LPE(2023, args, 0)[0] = JSProf.LRPE(2023, JSProf.LMC(2022, mids, 'shift').shift()));
                    // explicit define indicates possible multiple modules in a single file; delay injecting dependencies until defQ fully
                    // processed since modules earlier in the queue depend on already-arrived modules that are later in the queue
                    // TODO: what if no args[0] and no referenceModule
                    module = JSProf.LWR(2028, module, JSProf.LGE(2024, args, 0)[0] && JSProf.LFC(2026, getModule, false)(JSProf.LGE(2025, args, 0)[0]) || JSProf.LRE(2027, referenceModule));
                    JSProf.LMC(2033, definedModules, 'push').push(JSProf.LNE(2032, [
                        JSProf.LRE(2029, module),
                        JSProf.LGE(2030, args, 1)[1],
                        JSProf.LGE(2031, args, 2)[2]
                    ], 10));
                }
                JSProf.LFC(2035, consumePendingCacheInsert, false)(JSProf.LRE(2034, referenceModule));
                JSProf.LFC(2041, forEach, false)(JSProf.LRE(2036, definedModules), JSProf.LNF(2040, function (args) {
                    JSProf.LFC(2039, injectDependencies, false)(JSProf.LMC(2038, defineModule, 'apply').apply(null, JSProf.LRE(2037, args)));
                }, 12));
            }, 12);
    }
    var timerId = 0, clearTimer = JSProf.LRE(2043, noop), startTimer = JSProf.LRE(2044, noop);
    if (JSProf.LFC(2045, has, false)("dojo-timeout-api")) {
        // Timer machinery that monitors how long the loader is waiting and signals an error when the timer runs out.
        clearTimer = JSProf.LWR(2051, clearTimer, JSProf.LNF(2050, function () {
            JSProf.LRE(2046, timerId) && JSProf.LFC(2048, clearTimeout, false)(JSProf.LRE(2047, timerId));
            timerId = JSProf.LWR(2049, timerId, 0);
        }, 12));
        startTimer = JSProf.LWR(2064, startTimer, JSProf.LNF(2063, function () {
            JSProf.LFC(2052, clearTimer, false)();
            if (JSProf.LGD(2053, req, 'waitms').waitms) {
                timerId = JSProf.LWR(2062, timerId, JSProf.LMC(2061, global, 'setTimeout').setTimeout(JSProf.LNF(2059, function () {
                    JSProf.LFC(2054, clearTimer, false)();
                    JSProf.LFC(2058, signal, false)(JSProf.LRE(2055, error), JSProf.LFC(2057, makeError, false)("timeout", JSProf.LRE(2056, waiting)));
                }, 12), JSProf.LGD(2060, req, 'waitms').waitms));
            }
        }, 12));
    }
    if (JSProf.LFC(2065, has, false)("dom")) {
        // Test for IE's different way of signaling when scripts finish loading.  Note that according to
        // http://bugs.dojotoolkit.org/ticket/15096#comment:14, IE9 also needs to follow the
        // IE specific code path even though it has an addEventListener() method.
        // Unknown if special path needed on IE10+, which also has a document.attachEvent() method.
        // Should evaluate to false for Opera and Windows 8 apps, even though they document.attachEvent()
        //  is defined in both those environments.
        JSProf.LMC(2069, has, 'add').add("ie-event-behavior", JSProf.LGD(2066, doc, 'attachEvent').attachEvent && typeof JSProf.LRU(2067, typeof Windows === 'undefined' ? undefined : Windows) === "undefined" && (typeof JSProf.LRU(2068, typeof opera === 'undefined' ? undefined : opera) === "undefined" || opera.toString() != "[object Opera]"));
    }
    if (JSProf.LFC(2070, has, false)("dom") && (JSProf.LFC(2071, has, false)("dojo-inject-api") || JSProf.LFC(2072, has, false)("dojo-dom-ready-api"))) {
        var domOn = JSProf.LNF(2088, function (node, eventName, ieEventName, handler) {
                // Add an event listener to a DOM node using the API appropriate for the current browser;
                // return a function that will disconnect the listener.
                if (!JSProf.LFC(2073, has, false)("ie-event-behavior")) {
                    JSProf.LMC(2076, node, 'addEventListener').addEventListener(JSProf.LRE(2074, eventName), JSProf.LRE(2075, handler), false);
                    return JSProf.LNF(2080, function () {
                        JSProf.LMC(2079, node, 'removeEventListener').removeEventListener(JSProf.LRE(2077, eventName), JSProf.LRE(2078, handler), false);
                    }, 12);
                } else {
                    JSProf.LMC(2083, node, 'attachEvent').attachEvent(JSProf.LRE(2081, ieEventName), JSProf.LRE(2082, handler));
                    return JSProf.LNF(2087, function () {
                        JSProf.LMC(2086, node, 'detachEvent').detachEvent(JSProf.LRE(2084, ieEventName), JSProf.LRE(2085, handler));
                    }, 12);
                }
            }, 12), windowOnLoadListener = JSProf.LFC(2095, domOn, false)(JSProf.LRU(2089, typeof window === 'undefined' ? undefined : window), "load", "onload", JSProf.LNF(2094, function () {
                JSProf.LPD(2090, req, 'pageLoaded').pageLoaded = JSProf.LRSP(2090, 1);
                JSProf.LGD(2091, doc, 'readyState').readyState != "complete" && (JSProf.LPD(2092, doc, 'readyState').readyState = JSProf.LRSP(2092, "complete"));
                JSProf.LFC(2093, windowOnLoadListener, false)();
            }, 12));
        if (JSProf.LFC(2096, has, false)("dojo-inject-api")) {
            // if the loader is on the page, there must be at least one script element
            // getting its parent and then doing insertBefore solves the "Operation Aborted"
            // error in IE from appending to a node that isn't properly closed; see
            // dojo/tests/_base/loader/requirejs/simple-badbase.html for an example
            // don't use scripts with type dojo/... since these may be removed; see #15809
            // prefer to use the insertPoint computed during the config sniff in case a script is removed; see #16958
            var scripts = doc.getElementsByTagName("script"), i = 0, script;
            while (!JSProf.LRE(2097, insertPointSibling)) {
                if (!JSProf.LMC(2101, /^dojo/, 'test').test((script = JSProf.LWR(2099, script, JSProf.LGE(2098, scripts, JSProf.TMPS.ta16be437fa33aff7c59053aff161bb038933451e = i++)[JSProf.TMPS.ta16be437fa33aff7c59053aff161bb038933451e])) && JSProf.LGD(2100, script, 'type').type)) {
                    insertPointSibling = JSProf.LWR(2103, insertPointSibling, JSProf.LRE(2102, script));
                }
            }
            JSProf.LPD(2141, req, 'injectUrl').injectUrl = JSProf.LRSP(2141, JSProf.LNF(2140, function (url, callback, owner) {
                // insert a script element to the insert-point element with src=url;
                // apply callback upon detecting the script has loaded.
                var node = JSProf.LPD(2105, owner, 'node').node = JSProf.LRSP(2105, JSProf.LMC(2104, doc, 'createElement').createElement("script")), onLoad = JSProf.LNF(2118, function (e) {
                        e = JSProf.LWR(2108, e, JSProf.LRE(2106, e) || JSProf.LGD(2107, window, 'event').event);
                        var node = JSProf.LGD(2109, e, 'target').target || JSProf.LGD(2110, e, 'srcElement').srcElement;
                        if (JSProf.LGD(2111, e, 'type').type === "load" || JSProf.LMC(2113, /complete|loaded/, 'test').test(JSProf.LGD(2112, node, 'readyState').readyState)) {
                            JSProf.LFC(2114, loadDisconnector, false)();
                            JSProf.LFC(2115, errorDisconnector, false)();
                            JSProf.LRE(2116, callback) && JSProf.LFC(2117, callback, false)();
                        }
                    }, 12), loadDisconnector = JSProf.LFC(2121, domOn, false)(JSProf.LRE(2119, node), "load", "onreadystatechange", JSProf.LRE(2120, onLoad)), errorDisconnector = JSProf.LFC(2132, domOn, false)(JSProf.LRE(2122, node), "error", "onerror", JSProf.LNF(2131, function (e) {
                        JSProf.LFC(2123, loadDisconnector, false)();
                        JSProf.LFC(2124, errorDisconnector, false)();
                        JSProf.LFC(2130, signal, false)(JSProf.LRE(2125, error), JSProf.LFC(2129, makeError, false)("scriptError", JSProf.LNE(2128, [
                            JSProf.LRE(2126, url),
                            JSProf.LRE(2127, e)
                        ], 10)));
                    }, 12));
                JSProf.LPD(2133, node, 'type').type = JSProf.LRSP(2133, "text/javascript");
                JSProf.LPD(2134, node, 'charset').charset = JSProf.LRSP(2134, "utf-8");
                JSProf.LPD(2136, node, 'src').src = JSProf.LRSP(2136, JSProf.LRE(2135, url));
                insertPointSibling.parentNode.insertBefore(JSProf.LRE(2137, node), JSProf.LRE(2138, insertPointSibling));
                return JSProf.LRE(2139, node);
            }, 12));
        }
    }
    if (JSProf.LFC(2142, has, false)("dojo-log-api")) {
        JSProf.LPD(2147, req, 'log').log = JSProf.LRSP(2147, JSProf.LNF(2146, function () {
            try {
                for (var i = 0; JSProf.LRE(2143, i) < JSProf.LGD(2144, arguments, 'length').length; i++) {
                    console.log(JSProf.LGE(2145, arguments, 'i')[i]);
                }
            } catch (e) {
            }
        }, 12));
    } else {
        JSProf.LPD(2149, req, 'log').log = JSProf.LRSP(2149, JSProf.LRE(2148, noop));
    }
    if (JSProf.LFC(2150, has, false)("dojo-trace-api")) {
        var trace = JSProf.LPD(2178, req, 'trace').trace = JSProf.LRSP(2178, JSProf.LNF(2177, function (group, args) {
                ///
                // Tracing interface by group.
                //
                // Sends the contents of args to the console iff (req.trace.on && req.trace[group])
                if (JSProf.LGD(2151, trace, 'on').on && JSProf.LGE(2152, trace.group, 'group')[group]) {
                    JSProf.LFC(2156, signal, false)("trace", JSProf.LNE(2155, [
                        JSProf.LRE(2153, group),
                        JSProf.LRE(2154, args)
                    ], 10));
                    for (var arg, dump = JSProf.LNE(2157, [], 10), text = "trace:" + JSProf.LRE(2158, group) + (JSProf.LGD(2159, args, 'length').length ? ":" + JSProf.LGE(2160, args, 0)[0] : ""), i = 1; JSProf.LRE(2161, i) < JSProf.LGD(2162, args, 'length').length;) {
                        arg = JSProf.LWR(2164, arg, JSProf.LGE(2163, args, JSProf.TMPS.t3cf16c5a76c195242ebf990b9ea1afd87c6c660f = i++)[JSProf.TMPS.t3cf16c5a76c195242ebf990b9ea1afd87c6c660f]);
                        if (JSProf.LFC(2166, isString, false)(JSProf.LRE(2165, arg))) {
                            text += ", " + JSProf.LRE(2167, arg);
                        } else {
                            JSProf.LMC(2169, dump, 'push').push(JSProf.LRE(2168, arg));
                        }
                    }
                    JSProf.LMC(2171, req, 'log').log(JSProf.LRE(2170, text));
                    JSProf.LGD(2172, dump, 'length').length && JSProf.LMC(2173, dump, 'push').push(".");
                    JSProf.LMC(2176, req.log, 'apply').apply(JSProf.LRE(2174, req), JSProf.LRE(2175, dump));
                }
            }, 12));
        JSProf.LFC(2190, mix, false)(JSProf.LRE(2179, trace), JSProf.LNE(2189, {
            on: 1,
            group: JSProf.LNE(2180, {}, 11),
            set: JSProf.LNF(2188, function (group, value) {
                if (JSProf.LFC(2182, isString, false)(JSProf.LRE(2181, group))) {
                    JSProf.LPE(2184, trace.group, 'group')[group] = JSProf.LRPE(2184, JSProf.LRE(2183, value));
                } else {
                    JSProf.LFC(2187, mix, false)(JSProf.LGD(2185, trace, 'group').group, JSProf.LRE(2186, group));
                }
            }, 12)
        }, 11));
        JSProf.LMC(2198, trace, 'set').set(JSProf.LFC(2197, mix, false)(JSProf.LFC(2195, mix, false)(JSProf.LFC(2193, mix, false)(JSProf.LNE(2191, {}, 11), JSProf.LGD(2192, defaultConfig, 'trace').trace), JSProf.LGD(2194, userConfig, 'trace').trace), JSProf.LGD(2196, dojoSniffConfig, 'trace').trace));
        JSProf.LFC(2203, on, false)("config", JSProf.LNF(2202, function (config) {
            JSProf.LGD(2199, config, 'trace').trace && JSProf.LMC(2201, trace, 'set').set(JSProf.LGD(2200, config, 'trace').trace);
        }, 12));
    } else {
        JSProf.LPD(2205, req, 'trace').trace = JSProf.LRSP(2205, JSProf.LRE(2204, noop));
    }
    var def = JSProf.LNF(2307, function (mid, dependencies, factory) {
            ///
            // Advises the loader of a module factory. //Implements http://wiki.commonjs.org/wiki/Modules/AsynchronousDefinition.
            ///
            //note
            // CommonJS factory scan courtesy of http://requirejs.org
            var arity = JSProf.LGD(2206, arguments, 'length').length, defaultDeps = JSProf.LNE(2207, [
                    "require",
                    "exports",
                    "module"
                ], 10),
                // the predominate signature...
                args = JSProf.LNE(2210, [
                    0,
                    JSProf.LRE(2208, mid),
                    JSProf.LRE(2209, dependencies)
                ], 10);
            if (JSProf.LRE(2211, arity) == 1) {
                args = JSProf.LWR(2218, args, JSProf.LNE(2217, [
                    0,
                    JSProf.LFC(2213, isFunction, false)(JSProf.LRE(2212, mid)) ? JSProf.LRE(2214, defaultDeps) : JSProf.LNE(2215, [], 10),
                    JSProf.LRE(2216, mid)
                ], 10));
            } else if (JSProf.LRE(2219, arity) == 2 && JSProf.LFC(2221, isString, false)(JSProf.LRE(2220, mid))) {
                args = JSProf.LWR(2229, args, JSProf.LNE(2228, [
                    JSProf.LRE(2222, mid),
                    JSProf.LFC(2224, isFunction, false)(JSProf.LRE(2223, dependencies)) ? JSProf.LRE(2225, defaultDeps) : JSProf.LNE(2226, [], 10),
                    JSProf.LRE(2227, dependencies)
                ], 10));
            } else if (JSProf.LRE(2230, arity) == 3) {
                args = JSProf.LWR(2235, args, JSProf.LNE(2234, [
                    JSProf.LRE(2231, mid),
                    JSProf.LRE(2232, dependencies),
                    JSProf.LRE(2233, factory)
                ], 10));
            }
            if (JSProf.LFC(2236, has, false)("dojo-amd-factory-scan") && JSProf.LGE(2237, args, 1)[1] === JSProf.LRE(2238, defaultDeps)) {
                JSProf.LMC(2243, JSProf.LMC(2239, args[2].toString(), 'replace').replace(/(\/\*([\s\S]*?)\*\/|\/\/(.*)$)/gm, ""), 'replace').replace(/require\(["']([\w\!\-_\.\/]+)["']\)/g, JSProf.LNF(2242, function (match, dep) {
                    JSProf.LMC(2241, args[1], 'push').push(JSProf.LRE(2240, dep));
                }, 12));
            }
            JSProf.LMC(2245, req, 'trace').trace("loader-define", JSProf.LMC(2244, args, 'slice').slice(0, 2));
            var targetModule = JSProf.LGE(2246, args, 0)[0] && JSProf.LFC(2248, getModule, false)(JSProf.LGE(2247, args, 0)[0]), module;
            if (JSProf.LRE(2249, targetModule) && !JSProf.LGE(2250, waiting, JSProf.TMPS.t6048d959420ebd8184a46599bfa914ae3d1d735c = targetModule.mid)[JSProf.TMPS.t6048d959420ebd8184a46599bfa914ae3d1d735c]) {
                // given a mid that hasn't been requested; therefore, defined through means other than injecting
                // consequent to a require() or define() application; examples include defining modules on-the-fly
                // due to some code path or including a module in a script element. In any case,
                // there is no callback waiting to finish processing and nothing to trigger the defQ and the
                // dependencies are never requested; therefore, do it here.
                JSProf.LFC(2255, injectDependencies, false)(JSProf.LFC(2254, defineModule, false)(JSProf.LRE(2251, targetModule), JSProf.LGE(2252, args, 1)[1], JSProf.LGE(2253, args, 2)[2]));
            } else if (!JSProf.LFC(2256, has, false)("ie-event-behavior") || !JSProf.LFC(2257, has, false)("host-browser") || JSProf.LRE(2258, injectingCachedModule)) {
                // not IE path: anonymous module and therefore must have been injected; therefore, onLoad will fire immediately
                // after script finishes being evaluated and the defQ can be run from that callback to detect the module id
                JSProf.LMC(2260, defQ, 'push').push(JSProf.LRE(2259, args));
            } else {
                // IE path: possibly anonymous module and therefore injected; therefore, cannot depend on 1-to-1,
                // in-order exec of onLoad with script eval (since it's IE) and must manually detect here
                targetModule = JSProf.LWR(2263, targetModule, JSProf.LRE(2261, targetModule) || JSProf.LRE(2262, injectingModule));
                if (!JSProf.LRE(2264, targetModule)) {
                    for (mid in JSProf.LRE(2265, waiting)) {
                        module = JSProf.LWR(2267, module, JSProf.LGE(2266, modules, 'mid')[mid]);
                        if (JSProf.LRE(2268, module) && JSProf.LGD(2269, module, 'node').node && JSProf.LGD(2270, module.node, 'readyState').readyState === 'interactive') {
                            targetModule = JSProf.LWR(2272, targetModule, JSProf.LRE(2271, module));
                            break;
                        }
                    }
                    if (JSProf.LFC(2273, has, false)("dojo-combo-api") && !JSProf.LRE(2274, targetModule)) {
                        for (var i = 0; JSProf.LRE(2275, i) < JSProf.LGD(2276, combosPending, 'length').length; i++) {
                            targetModule = JSProf.LWR(2278, targetModule, JSProf.LGE(2277, combosPending, 'i')[i]);
                            if (JSProf.LGD(2279, targetModule, 'node').node && JSProf.LGD(2280, targetModule.node, 'readyState').readyState === 'interactive') {
                                break;
                            }
                            targetModule = JSProf.LWR(2281, targetModule, 0);
                        }
                    }
                }
                if (JSProf.LFC(2282, has, false)("dojo-combo-api") && JSProf.LFC(2284, isArray, false)(JSProf.LRE(2283, targetModule))) {
                    JSProf.LFC(2290, injectDependencies, false)(JSProf.LFC(2289, defineModule, false)(JSProf.LFC(2286, getModule, false)(JSProf.LMC(2285, targetModule, 'shift').shift()), JSProf.LGE(2287, args, 1)[1], JSProf.LGE(2288, args, 2)[2]));
                    if (!JSProf.LGD(2291, targetModule, 'length').length) {
                        JSProf.LMC(2293, combosPending, 'splice').splice(JSProf.LRE(2292, i), 1);
                    }
                } else if (JSProf.LRE(2294, targetModule)) {
                    JSProf.LFC(2296, consumePendingCacheInsert, false)(JSProf.LRE(2295, targetModule));
                    JSProf.LFC(2301, injectDependencies, false)(JSProf.LFC(2300, defineModule, false)(JSProf.LRE(2297, targetModule), JSProf.LGE(2298, args, 1)[1], JSProf.LGE(2299, args, 2)[2]));
                } else {
                    JSProf.LFC(2305, signal, false)(JSProf.LRE(2302, error), JSProf.LFC(2304, makeError, false)("ieDefineFailed", JSProf.LGE(2303, args, 0)[0]));
                }
                JSProf.LFC(2306, checkComplete, false)();
            }
        }, 12);
    JSProf.LPD(2309, def, 'amd').amd = JSProf.LRSP(2309, JSProf.LNE(2308, { vendor: "dojotoolkit.org" }, 11));
    if (JSProf.LFC(2310, has, false)("dojo-requirejs-api")) {
        JSProf.LPD(2312, req, 'def').def = JSProf.LRSP(2312, JSProf.LRE(2311, def));
    }
    // allow config to override default implementation of named functions; this is useful for
    // non-browser environments, e.g., overriding injectUrl, getText, log, etc. in node.js, Rhino, etc.
    // also useful for testing and monkey patching loader
    JSProf.LFC(2317, mix, false)(JSProf.LFC(2315, mix, false)(JSProf.LRE(2313, req), JSProf.LGD(2314, defaultConfig, 'loaderPatch').loaderPatch), JSProf.LGD(2316, userConfig, 'loaderPatch').loaderPatch);
    // now that req is fully initialized and won't change, we can hook it up to the error signal
    JSProf.LFC(2327, on, false)(JSProf.LRE(2318, error), JSProf.LNF(2326, function (arg) {
        try {
            JSProf.LMC(2320, console, 'error').error(JSProf.LRE(2319, arg));
            if (JSProf.LRE(2321, arg) instanceof JSProf.LRU(2322, typeof Error === 'undefined' ? undefined : Error)) {
                for (var p in JSProf.LRE(2323, arg)) {
                    console.log(JSProf.LRE(2324, p) + ":", JSProf.LGE(2325, arg, 'p')[p]);
                }
                console.log(".");
            }
        } catch (e) {
        }
    }, 12));
    // always publish these
    JSProf.LFC(2330, mix, false)(JSProf.LRE(2328, req), JSProf.LNE(2329, {
        uid: uid,
        cache: cache,
        packs: packs
    }, 11));
    if (JSProf.LFC(2331, has, false)("dojo-publish-privates")) {
        JSProf.LFC(2334, mix, false)(JSProf.LRE(2332, req), JSProf.LNE(2333, {
            paths: paths,
            aliases: aliases,
            modules: modules,
            legacyMode: legacyMode,
            execQ: execQ,
            defQ: defQ,
            waiting: waiting,
            packs: packs,
            mapProgs: mapProgs,
            pathsMapProg: pathsMapProg,
            listenerQueues: listenerQueues,
            computeMapProg: computeMapProg,
            computeAliases: computeAliases,
            runMapProg: runMapProg,
            compactPath: compactPath,
            getModuleInfo: getModuleInfo_
        }, 11));
    }
    // the loader can be defined exactly once; look for global define which is the symbol AMD loaders are
    // *required* to define (as opposed to require, which is optional)
    if (JSProf.LGD(2335, global, 'define').define) {
        if (JSProf.LFC(2336, has, false)("dojo-log-api")) {
            JSProf.LFC(2339, signal, false)(JSProf.LRE(2337, error), JSProf.LFC(2338, makeError, false)("defineAlreadyDefined", 0));
        }
        return;
    } else {
        JSProf.LPD(2341, global, 'define').define = JSProf.LRSP(2341, JSProf.LRE(2340, def));
        JSProf.LPD(2343, global, 'require').require = JSProf.LRSP(2343, JSProf.LRE(2342, req));
        if (JSProf.LFC(2344, has, false)("host-node")) {
            require = JSProf.LWU(2346, JSProf.I(typeof require === 'undefined' ? undefined : require), JSProf.LRE(2345, req));
        }
    }
    if (JSProf.LFC(2347, has, false)("dojo-combo-api") && JSProf.LGD(2348, req, 'combo').combo && JSProf.LGD(2349, req.combo, 'plugins').plugins) {
        var plugins = JSProf.LGD(2350, req.combo, 'plugins').plugins, pluginName;
        for (pluginName in JSProf.LRE(2351, plugins)) {
            JSProf.LFC(2357, mix, false)(JSProf.LFC(2355, mix, false)(JSProf.LFC(2353, getModule, false)(JSProf.LRE(2352, pluginName)), JSProf.LGE(2354, plugins, 'pluginName')[pluginName]), JSProf.LNE(2356, {
                isCombo: 1,
                executed: "executed",
                load: 1
            }, 11));
        }
    }
    if (JSProf.LFC(2358, has, false)("dojo-config-api")) {
        JSProf.LFC(2363, forEach, false)(JSProf.LRE(2359, delayedModuleConfig), JSProf.LNF(2362, function (c) {
            JSProf.LFC(2361, config, false)(JSProf.LRE(2360, c));
        }, 12));
        var bootDeps = JSProf.LGD(2364, dojoSniffConfig, 'deps').deps || JSProf.LGD(2365, userConfig, 'deps').deps || JSProf.LGD(2366, defaultConfig, 'deps').deps, bootCallback = JSProf.LGD(2367, dojoSniffConfig, 'callback').callback || JSProf.LGD(2368, userConfig, 'callback').callback || JSProf.LGD(2369, defaultConfig, 'callback').callback;
        JSProf.LPD(2376, req, 'boot').boot = JSProf.LRSP(2376, JSProf.LRE(2370, bootDeps) || JSProf.LRE(2371, bootCallback) ? JSProf.LNE(2375, [
            JSProf.LRE(2372, bootDeps) || JSProf.LNE(2373, [], 10),
            JSProf.LRE(2374, bootCallback)
        ], 10) : 0);
    }
    if (!JSProf.LFC(2377, has, false)("dojo-built")) {
        !JSProf.LGD(2378, req, 'async').async && JSProf.LFC(2380, req, false)(JSProf.LNE(2379, ["dojo"], 10));
        JSProf.LGD(2381, req, 'boot').boot && JSProf.LMC(2383, req, 'apply').apply(null, JSProf.LGD(2382, req, 'boot').boot);
    }
}, 12), false)(JSProf.LFC(2390, JSProf.LNF(2389, function () {
    // make sure we're looking at global dojoConfig etc.
    return JSProf.LGD(2385, this, 'dojoConfig').dojoConfig || JSProf.LGD(2386, this, 'djConfig').djConfig || JSProf.LGD(2387, this, 'require').require || JSProf.LNE(2388, {}, 11);
}, 12), false)(), JSProf.LNE(2401, {
    hasCache: JSProf.LNE(2391, {
        "host-browser": 1,
        "dom": 1,
        "dojo-amd-factory-scan": 1,
        "dojo-loader": 1,
        "dojo-has-api": 1,
        "dojo-inject-api": 1,
        "dojo-timeout-api": 1,
        "dojo-trace-api": 1,
        "dojo-log-api": 1,
        "dojo-dom-ready-api": 1,
        "dojo-publish-privates": 1,
        "dojo-config-api": 1,
        "dojo-sniff": 1,
        "dojo-sync-loader": 1,
        "dojo-test-sniff": 1,
        "config-deferredInstrumentation": 1,
        "config-tlmSiblingOfDojo": 1
    }, 11),
    packages: JSProf.LNE(2399, [
        JSProf.LNE(2392, {
            name: 'dojo',
            location: '.'
        }, 11),
        JSProf.LNE(2393, {
            name: 'tests',
            location: './tests'
        }, 11),
        JSProf.LNE(2394, {
            name: 'dijit',
            location: '../dijit'
        }, 11),
        JSProf.LNE(2395, {
            name: 'build',
            location: '../util/build'
        }, 11),
        JSProf.LNE(2396, {
            name: 'doh',
            location: '../util/doh'
        }, 11),
        JSProf.LNE(2397, {
            name: 'dojox',
            location: '../dojox'
        }, 11),
        JSProf.LNE(2398, {
            name: 'demos',
            location: '../demos'
        }, 11)
    ], 10),
    trace: JSProf.LNE(2400, {
        "loader-inject": 0,
        "loader-define": 0,
        "loader-exec-module": 0,
        "loader-run-factory": 0,
        "loader-finish-exec": 0,
        "loader-define-module": 0,
        "loader-circular-dependency": 0,
        "loader-define-nonmodule": 0
    }, 11),
    async: 0,
    waitSeconds: 15
}, 11));    //>>excludeEnd("replaceLoaderConfig")
