JSProf.LFC(35838, define, false)(JSProf.LNE(35348, [
    "./_base/kernel",
    "require",
    "./has",
    "./_base/array",
    "./_base/config",
    "./_base/lang",
    "./has!host-browser?./_base/xhr",
    "./json",
    "module"
], 10), JSProf.LNF(35837, function (dojo, require, has, array, config, lang, xhr, json, module) {
    // module:
    //		dojo/i18n
    JSProf.LMC(35349, has, 'add').add("dojo-preload-i18n-Api", 1);
    JSProf.LMC(35350, has, 'add').add("dojo-v1x-i18n-Api", 1);
    var thisModule = JSProf.LPD(35352, dojo, 'i18n').i18n = JSProf.LRSP(35352, JSProf.LNE(35351, {}, 11)), nlsRe = /(^.*(^|\/)nls)(\/|$)([^\/]*)\/?([^\/]*)/, getAvailableLocales = JSProf.LNF(35369, function (root, locale, bundlePath, bundleName) {
            // summary:
            //		return a vector of module ids containing all available locales with respect to the target locale
            //		For example, assuming:
            //
            //		- the root bundle indicates specific bundles for "fr" and "fr-ca",
            //		-  bundlePath is "myPackage/nls"
            //		- bundleName is "myBundle"
            //
            //		Then a locale argument of "fr-ca" would return
            //
            //			["myPackage/nls/myBundle", "myPackage/nls/fr/myBundle", "myPackage/nls/fr-ca/myBundle"]
            //
            //		Notice that bundles are returned least-specific to most-specific, starting with the root.
            //
            //		If root===false indicates we're working with a pre-AMD i18n bundle that doesn't tell about the available locales;
            //		therefore, assume everything is available and get 404 errors that indicate a particular localization is not available
            for (var result = JSProf.LNE(35355, [JSProf.LRE(35353, bundlePath) + JSProf.LRE(35354, bundleName)], 10), localeParts = locale.split("-"), current = "", i = 0; JSProf.LRE(35356, i) < JSProf.LGD(35357, localeParts, 'length').length; i++) {
                current += (JSProf.LRE(35358, current) ? "-" : "") + JSProf.LGE(35359, localeParts, 'i')[i];
                if (!JSProf.LRE(35360, root) || JSProf.LGE(35361, root, 'current')[current]) {
                    JSProf.LMC(35365, result, 'push').push(JSProf.LRE(35362, bundlePath) + JSProf.LRE(35363, current) + "/" + JSProf.LRE(35364, bundleName));
                    JSProf.LPD(35367, result, 'specificity').specificity = JSProf.LRSP(35367, JSProf.LRE(35366, current));
                }
            }
            return JSProf.LRE(35368, result);
        }, 12), cache = JSProf.LNE(35370, {}, 11), getBundleName = JSProf.LNF(35385, function (moduleName, bundleName, locale) {
            locale = JSProf.LWR(35373, locale, JSProf.LRE(35371, locale) ? locale.toLowerCase() : JSProf.LGD(35372, dojo, 'locale').locale);
            moduleName = JSProf.LWR(35375, moduleName, JSProf.LMC(35374, moduleName, 'replace').replace(/\./g, "/"));
            bundleName = JSProf.LWR(35377, bundleName, JSProf.LMC(35376, bundleName, 'replace').replace(/\./g, "/"));
            return JSProf.LMC(35379, /root/i, 'test').test(JSProf.LRE(35378, locale)) ? JSProf.LRE(35380, moduleName) + "/nls/" + JSProf.LRE(35381, bundleName) : JSProf.LRE(35382, moduleName) + "/nls/" + JSProf.LRE(35383, locale) + "/" + JSProf.LRE(35384, bundleName);
        }, 12), getL10nName = JSProf.LPD(35393, dojo, 'getL10nName').getL10nName = JSProf.LRSP(35393, JSProf.LNF(35392, function (moduleName, bundleName, locale) {
            return moduleName = JSProf.LWR(35391, moduleName, JSProf.LGD(35386, module, 'id').id + "!" + JSProf.LFC(35390, getBundleName, false)(JSProf.LRE(35387, moduleName), JSProf.LRE(35388, bundleName), JSProf.LRE(35389, locale)));
        }, 12)), doLoad = JSProf.LNF(35424, function (require, bundlePathAndName, bundlePath, bundleName, locale, load) {
            // summary:
            //		get the root bundle which instructs which other bundles are required to construct the localized bundle
            JSProf.LFC(35423, require, false)(JSProf.LNE(35395, [JSProf.LRE(35394, bundlePathAndName)], 10), JSProf.LNF(35422, function (root) {
                var current = JSProf.LMC(35398, lang, 'clone').clone(JSProf.LGD(35396, root, 'root').root || JSProf.LGD(35397, root, 'ROOT').ROOT),
                    // 1.6 built bundle defined ROOT
                    availableLocales = JSProf.LFC(35404, getAvailableLocales, false)(!JSProf.LGD(35399, root, '_v1x')._v1x && JSProf.LRE(35400, root), JSProf.LRE(35401, locale), JSProf.LRE(35402, bundlePath), JSProf.LRE(35403, bundleName));
                JSProf.LFC(35421, require, false)(JSProf.LRE(35405, availableLocales), JSProf.LNF(35420, function () {
                    for (var i = 1; JSProf.LRE(35406, i) < JSProf.LGD(35407, availableLocales, 'length').length; i++) {
                        current = JSProf.LWR(35412, current, JSProf.LMC(35411, lang, 'mixin').mixin(JSProf.LMC(35409, lang, 'clone').clone(JSProf.LRE(35408, current)), JSProf.LGE(35410, arguments, 'i')[i]));
                    }
                    // target may not have been resolve (e.g., maybe only "fr" exists when "fr-ca" was requested)
                    var target = JSProf.LRE(35413, bundlePathAndName) + "/" + JSProf.LRE(35414, locale);
                    JSProf.LPE(35416, cache, 'target')[target] = JSProf.LRPE(35416, JSProf.LRE(35415, current));
                    JSProf.LPD(35418, current, '$locale').$locale = JSProf.LRSP(35418, JSProf.LGD(35417, availableLocales, 'specificity').specificity);
                    JSProf.LFC(35419, load, false)();
                }, 12));
            }, 12));
        }, 12), normalize = JSProf.LNF(35430, function (id, toAbsMid) {
            // summary:
            //		id may be relative.
            //		preload has form `*preload*<path>/nls/<module>*<flattened locales>` and
            //		therefore never looks like a relative
            return JSProf.LMC(35426, /^\./, 'test').test(JSProf.LRE(35425, id)) ? JSProf.LFC(35428, toAbsMid, false)(JSProf.LRE(35427, id)) : JSProf.LRE(35429, id);
        }, 12), getLocalesToLoad = JSProf.LNF(35442, function (targetLocale) {
            var list = JSProf.LGD(35431, config, 'extraLocale').extraLocale || JSProf.LNE(35432, [], 10);
            list = JSProf.LWR(35438, list, JSProf.LMC(35434, lang, 'isArray').isArray(JSProf.LRE(35433, list)) ? JSProf.LRE(35435, list) : JSProf.LNE(35437, [JSProf.LRE(35436, list)], 10));
            JSProf.LMC(35440, list, 'push').push(JSProf.LRE(35439, targetLocale));
            return JSProf.LRE(35441, list);
        }, 12), load = JSProf.LNF(35498, function (id, require, load) {
            // summary:
            //		id is in one of the following formats
            //
            //		1. <path>/nls/<bundle>
            //			=> load the bundle, localized to config.locale; load all bundles localized to
            //			config.extraLocale (if any); return the loaded bundle localized to config.locale.
            //
            //		2. <path>/nls/<locale>/<bundle>
            //			=> load then return the bundle localized to <locale>
            //
            //		3. *preload*<path>/nls/<module>*<JSON array of available locales>
            //			=> for config.locale and all config.extraLocale, load all bundles found
            //			in the best-matching bundle rollup. A value of 1 is returned, which
            //			is meaningless other than to say the plugin is executing the requested
            //			preloads
            //
            //		In cases 1 and 2, <path> is always normalized to an absolute module id upon entry; see
            //		normalize. In case 3, it <path> is assumed to be absolute; this is arranged by the builder.
            //
            //		To load a bundle means to insert the bundle into the plugin's cache and publish the bundle
            //		value to the loader. Given <path>, <bundle>, and a particular <locale>, the cache key
            //
            //			<path>/nls/<bundle>/<locale>
            //
            //		will hold the value. Similarly, then plugin will publish this value to the loader by
            //
            //			define("<path>/nls/<bundle>/<locale>", <bundle-value>);
            //
            //		Given this algorithm, other machinery can provide fast load paths be preplacing
            //		values in the plugin's cache, which is public. When a load is demanded the
            //		cache is inspected before starting any loading. Explicitly placing values in the plugin
            //		cache is an advanced/experimental feature that should not be needed; use at your own risk.
            //
            //		For the normal AMD algorithm, the root bundle is loaded first, which instructs the
            //		plugin what additional localized bundles are required for a particular locale. These
            //		additional locales are loaded and a mix of the root and each progressively-specific
            //		locale is returned. For example:
            //
            //		1. The client demands "dojo/i18n!some/path/nls/someBundle
            //
            //		2. The loader demands load(some/path/nls/someBundle)
            //
            //		3. This plugin require's "some/path/nls/someBundle", which is the root bundle.
            //
            //		4. Assuming config.locale is "ab-cd-ef" and the root bundle indicates that localizations
            //		are available for "ab" and "ab-cd-ef" (note the missing "ab-cd", then the plugin
            //		requires "some/path/nls/ab/someBundle" and "some/path/nls/ab-cd-ef/someBundle"
            //
            //		5. Upon receiving all required bundles, the plugin constructs the value of the bundle
            //		ab-cd-ef as...
            //
            //				mixin(mixin(mixin({}, require("some/path/nls/someBundle"),
            //		  			require("some/path/nls/ab/someBundle")),
            //					require("some/path/nls/ab-cd-ef/someBundle"));
            //
            //		This value is inserted into the cache and published to the loader at the
            //		key/module-id some/path/nls/someBundle/ab-cd-ef.
            //
            //		The special preload signature (case 3) instructs the plugin to stop servicing all normal requests
            //		(further preload requests will be serviced) until all ongoing preloading has completed.
            //
            //		The preload signature instructs the plugin that a special rollup module is available that contains
            //		one or more flattened, localized bundles. The JSON array of available locales indicates which locales
            //		are available. Here is an example:
            //
            //			*preload*some/path/nls/someModule*["root", "ab", "ab-cd-ef"]
            //
            //		This indicates the following rollup modules are available:
            //
            //			some/path/nls/someModule_ROOT
            //			some/path/nls/someModule_ab
            //			some/path/nls/someModule_ab-cd-ef
            //
            //		Each of these modules is a normal AMD module that contains one or more flattened bundles in a hash.
            //		For example, assume someModule contained the bundles some/bundle/path/someBundle and
            //		some/bundle/path/someOtherBundle, then some/path/nls/someModule_ab would be expressed as follows:
            //
            //			define({
            //				some/bundle/path/someBundle:<value of someBundle, flattened with respect to locale ab>,
            //				some/bundle/path/someOtherBundle:<value of someOtherBundle, flattened with respect to locale ab>,
            //			});
            //
            //		E.g., given this design, preloading for locale=="ab" can execute the following algorithm:
            //
            //			require(["some/path/nls/someModule_ab"], function(rollup){
            //				for(var p in rollup){
            //					var id = p + "/ab",
            //					cache[id] = rollup[p];
            //					define(id, rollup[p]);
            //				}
            //			});
            //
            //		Similarly, if "ab-cd" is requested, the algorithm can determine that "ab" is the best available and
            //		load accordingly.
            //
            //		The builder will write such rollups for every layer if a non-empty localeList  profile property is
            //		provided. Further, the builder will include the following cache entry in the cache associated with
            //		any layer.
            //
            //			"*now":function(r){r(['dojo/i18n!*preload*<path>/nls/<module>*<JSON array of available locales>']);}
            //
            //		The *now special cache module instructs the loader to apply the provided function to context-require
            //		with respect to the particular layer being defined. This causes the plugin to hold all normal service
            //		requests until all preloading is complete.
            //
            //		Notice that this algorithm is rarely better than the standard AMD load algorithm. Consider the normal case
            //		where the target locale has a single segment and a layer depends on a single bundle:
            //
            //		Without Preloads:
            //
            //		1. Layer loads root bundle.
            //		2. bundle is demanded; plugin loads single localized bundle.
            //
            //		With Preloads:
            //
            //		1. Layer causes preloading of target bundle.
            //		2. bundle is demanded; service is delayed until preloading complete; bundle is returned.
            //
            //		In each case a single transaction is required to load the target bundle. In cases where multiple bundles
            //		are required and/or the locale has multiple segments, preloads still requires a single transaction whereas
            //		the normal path requires an additional transaction for each additional bundle/locale-segment. However all
            //		of these additional transactions can be done concurrently. Owing to this analysis, the entire preloading
            //		algorithm can be discard during a build by setting the has feature dojo-preload-i18n-Api to false.
            if (JSProf.LFC(35443, has, false)("dojo-preload-i18n-Api")) {
                var split = id.split("*"), preloadDemand = JSProf.LGE(35444, split, 1)[1] == "preload";
                if (JSProf.LRE(35445, preloadDemand)) {
                    if (!JSProf.LGE(35446, cache, 'id')[id]) {
                        // use cache[id] to prevent multiple preloads of the same preload; this shouldn't happen, but
                        // who knows what over-aggressive human optimizers may attempt
                        JSProf.LPE(35447, cache, 'id')[id] = JSProf.LRPE(35447, 1);
                        JSProf.LFC(35452, preloadL10n, false)(JSProf.LGE(35448, split, 2)[2], JSProf.LMC(35450, json, 'parse').parse(JSProf.LGE(35449, split, 3)[3]), 1, JSProf.LRE(35451, require));
                    }
                    // don't stall the loader!
                    JSProf.LFC(35453, load, false)(1);
                }
                if (JSProf.LRE(35454, preloadDemand) || JSProf.LFC(35458, waitForPreloads, false)(JSProf.LRE(35455, id), JSProf.LRE(35456, require), JSProf.LRE(35457, load))) {
                    return;
                }
            }
            var match = nlsRe.exec(JSProf.LRE(35459, id)), bundlePath = JSProf.LGE(35460, match, 1)[1] + "/", bundleName = JSProf.LGE(35461, match, 5)[5] || JSProf.LGE(35462, match, 4)[4], bundlePathAndName = JSProf.LRE(35463, bundlePath) + JSProf.LRE(35464, bundleName), localeSpecified = JSProf.LGE(35465, match, 5)[5] && JSProf.LGE(35466, match, 4)[4], targetLocale = JSProf.LRE(35467, localeSpecified) || JSProf.LGD(35468, dojo, 'locale').locale || "", loadTarget = JSProf.LRE(35469, bundlePathAndName) + "/" + JSProf.LRE(35470, targetLocale), loadList = JSProf.LRE(35471, localeSpecified) ? JSProf.LNE(35473, [JSProf.LRE(35472, targetLocale)], 10) : JSProf.LFC(35475, getLocalesToLoad, false)(JSProf.LRE(35474, targetLocale)), remaining = JSProf.LGD(35476, loadList, 'length').length, finish = JSProf.LNF(35480, function () {
                    if (!--remaining) {
                        JSProf.LFC(35479, load, false)(JSProf.LMC(35478, lang, 'delegate').delegate(JSProf.LGE(35477, cache, 'loadTarget')[loadTarget]));
                    }
                }, 12);
            JSProf.LMC(35497, array, 'forEach').forEach(JSProf.LRE(35481, loadList), JSProf.LNF(35496, function (locale) {
                var target = JSProf.LRE(35482, bundlePathAndName) + "/" + JSProf.LRE(35483, locale);
                if (JSProf.LFC(35484, has, false)("dojo-preload-i18n-Api")) {
                    JSProf.LFC(35486, checkForLegacyModules, false)(JSProf.LRE(35485, target));
                }
                if (!JSProf.LGE(35487, cache, 'target')[target]) {
                    JSProf.LFC(35494, doLoad, false)(JSProf.LRE(35488, require), JSProf.LRE(35489, bundlePathAndName), JSProf.LRE(35490, bundlePath), JSProf.LRE(35491, bundleName), JSProf.LRE(35492, locale), JSProf.LRE(35493, finish));
                } else {
                    JSProf.LFC(35495, finish, false)();
                }
            }, 12));
        }, 12);
    if (JSProf.LFC(35499, has, false)("dojo-unit-tests")) {
        var unitTests = JSProf.LPD(35501, thisModule, 'unitTests').unitTests = JSProf.LRSP(35501, JSProf.LNE(35500, [], 10));
    }
    if (JSProf.LFC(35502, has, false)("dojo-preload-i18n-Api") || JSProf.LFC(35503, has, false)("dojo-v1x-i18n-Api")) {
        var normalizeLocale = JSProf.LPD(35509, thisModule, 'normalizeLocale').normalizeLocale = JSProf.LRSP(35509, JSProf.LNF(35508, function (locale) {
                var result = JSProf.LRE(35504, locale) ? locale.toLowerCase() : JSProf.LGD(35505, dojo, 'locale').locale;
                return JSProf.LRE(35506, result) == "root" ? "ROOT" : JSProf.LRE(35507, result);
            }, 12)), isXd = JSProf.LNF(35515, function (mid, contextRequire) {
                return JSProf.LFC(35510, has, false)("dojo-sync-loader") && JSProf.LFC(35511, has, false)("dojo-v1x-i18n-Api") ? JSProf.LMC(35514, contextRequire, 'isXdUrl').isXdUrl(JSProf.LMC(35513, require, 'toUrl').toUrl(JSProf.LRE(35512, mid) + ".js")) : true;
            }, 12), preloading = 0, preloadWaitQueue = JSProf.LNE(35516, [], 10), preloadL10n = JSProf.LPD(35657, thisModule, '_preloadLocalizations')._preloadLocalizations = JSProf.LRSP(35657, JSProf.LNF(35656, function (bundlePrefix, localesGenerated, guaranteedAmdFormat, contextRequire) {
                JSProf.LFD(35650, doRequire);
                JSProf.LFD(35651, forEachLocale);
                JSProf.LFD(35652, preloadingAddLock);
                JSProf.LFD(35653, preloadingRelLock);
                JSProf.LFD(35654, cacheId);
                JSProf.LFD(35655, preload);
                // summary:
                //		Load available flattened resource bundles associated with a particular module for dojo/locale and all dojo/config.extraLocale (if any)
                // description:
                //		Only called by built layer files. The entire locale hierarchy is loaded. For example,
                //		if locale=="ab-cd", then ROOT, "ab", and "ab-cd" are loaded. This is different than v1.6-
                //		in that the v1.6- would only load ab-cd...which was *always* flattened.
                //
                //		If guaranteedAmdFormat is true, then the module can be loaded with require thereby circumventing the detection algorithm
                //		and the extra possible extra transaction.
                // If this function is called from legacy code, then guaranteedAmdFormat and contextRequire will be undefined. Since the function
                // needs a require in order to resolve module ids, fall back to the context-require associated with this dojo/i18n module, which
                // itself may have been mapped.
                contextRequire = JSProf.LWR(35519, contextRequire, JSProf.LRE(35517, contextRequire) || JSProf.LRE(35518, require));
                function doRequire(mid, callback) {
                    if (JSProf.LFC(35522, isXd, false)(JSProf.LRE(35520, mid), JSProf.LRE(35521, contextRequire)) || JSProf.LRE(35523, guaranteedAmdFormat)) {
                        JSProf.LFC(35527, contextRequire, false)(JSProf.LNE(35525, [JSProf.LRE(35524, mid)], 10), JSProf.LRE(35526, callback));
                    } else {
                        JSProf.LFC(35532, syncRequire, false)(JSProf.LNE(35529, [JSProf.LRE(35528, mid)], 10), JSProf.LRE(35530, callback), JSProf.LRE(35531, contextRequire));
                    }
                }
                function forEachLocale(locale, func) {
                    // given locale= "ab-cd-ef", calls func on "ab-cd-ef", "ab-cd", "ab", "ROOT"; stops calling the first time func returns truthy
                    var parts = locale.split("-");
                    while (JSProf.LGD(35533, parts, 'length').length) {
                        if (JSProf.LFC(35535, func, false)(JSProf.LMC(35534, parts, 'join').join("-"))) {
                            return;
                        }
                        JSProf.LMC(35536, parts, 'pop').pop();
                    }
                    JSProf.LFC(35537, func, false)("ROOT");
                }
                function preloadingAddLock() {
                    preloading++;
                }
                function preloadingRelLock() {
                    --preloading;
                    while (!JSProf.LRE(35538, preloading) && JSProf.LGD(35539, preloadWaitQueue, 'length').length) {
                        JSProf.LMC(35541, load, 'apply').apply(null, JSProf.LMC(35540, preloadWaitQueue, 'shift').shift());
                    }
                }
                function cacheId(path, name, loc, require) {
                    // path is assumed to have a trailing "/"
                    return JSProf.LMC(35545, require, 'toAbsMid').toAbsMid(JSProf.LRE(35542, path) + JSProf.LRE(35543, name) + "/" + JSProf.LRE(35544, loc));
                }
                function preload(locale) {
                    locale = JSProf.LWR(35548, locale, JSProf.LFC(35547, normalizeLocale, false)(JSProf.LRE(35546, locale)));
                    JSProf.LFC(35645, forEachLocale, false)(JSProf.LRE(35549, locale), JSProf.LNF(35644, function (loc) {
                        if (JSProf.LMC(35552, array, 'indexOf').indexOf(JSProf.LRE(35550, localesGenerated), JSProf.LRE(35551, loc)) >= 0) {
                            var mid = JSProf.LMC(35553, bundlePrefix, 'replace').replace(/\./g, "/") + "_" + JSProf.LRE(35554, loc);
                            JSProf.LFC(35555, preloadingAddLock, false)();
                            JSProf.LFC(35643, doRequire, false)(JSProf.LRE(35556, mid), JSProf.LNF(35642, function (rollup) {
                                JSProf.LFD(35641, improveBundle);
                                for (var p in JSProf.LRE(35557, rollup)) {
                                    var bundle = JSProf.LGE(35558, rollup, 'p')[p], match = JSProf.LMC(35559, p, 'match').match(/(.+)\/([^\/]+)$/), bundleName, bundlePath;
                                    // If there is no match, the bundle is not a regular bundle from an AMD layer.
                                    if (!JSProf.LRE(35560, match)) {
                                        continue;
                                    }
                                    bundleName = JSProf.LWR(35562, bundleName, JSProf.LGE(35561, match, 2)[2]);
                                    bundlePath = JSProf.LWR(35564, bundlePath, JSProf.LGE(35563, match, 1)[1] + "/");
                                    // backcompat
                                    JSProf.LPD(35567, bundle, '_localized')._localized = JSProf.LRSP(35567, JSProf.LGD(35565, bundle, '_localized')._localized || JSProf.LNE(35566, {}, 11));
                                    var localized;
                                    if (JSProf.LRE(35568, loc) === "ROOT") {
                                        var root = localized = JSProf.LWR(35570, localized, JSProf.LGD(35569, bundle, '_localized')._localized);
                                        delete bundle._localized;
                                        JSProf.LPD(35572, root, 'root').root = JSProf.LRSP(35572, JSProf.LRE(35571, bundle));
                                        JSProf.LPE(35576, cache, JSProf.TMPS.t34fc3319184a76222fdc5c4f23a1fd486c7dd6cf = JSProf.LMC(35574, require, 'toAbsMid').toAbsMid(JSProf.LRE(35573, p)))[JSProf.TMPS.t34fc3319184a76222fdc5c4f23a1fd486c7dd6cf] = JSProf.LRPE(35576, JSProf.LRE(35575, root));
                                    } else {
                                        localized = JSProf.LWR(35578, localized, JSProf.LGD(35577, bundle, '_localized')._localized);
                                        JSProf.LPE(35585, cache, JSProf.TMPS.t34fc3319184a76222fdc5c4f23a1fd486c7dd6cf = JSProf.LFC(35583, cacheId, false)(JSProf.LRE(35579, bundlePath), JSProf.LRE(35580, bundleName), JSProf.LRE(35581, loc), JSProf.LRE(35582, require)))[JSProf.TMPS.t34fc3319184a76222fdc5c4f23a1fd486c7dd6cf] = JSProf.LRPE(35585, JSProf.LRE(35584, bundle));
                                    }
                                    if (JSProf.LRE(35586, loc) !== JSProf.LRE(35587, locale)) {
                                        // capture some locale variables
                                        function improveBundle(bundlePath, bundleName, bundle, localized) {
                                            // locale was not flattened and we've fallen back to a less-specific locale that was flattened
                                            // for example, we had a flattened 'fr', a 'fr-ca' is available for at least this bundle, and
                                            // locale==='fr-ca'; therefore, we must improve the bundle as retrieved from the rollup by
                                            // manually loading the fr-ca version of the bundle and mixing this into the already-retrieved 'fr'
                                            // version of the bundle.
                                            //
                                            // Remember, different bundles may have different sets of locales available.
                                            //
                                            // we are really falling back on the regular algorithm here, but--hopefully--starting with most
                                            // of the required bundles already on board as given by the rollup and we need to "manually" load
                                            // only one locale from a few bundles...or even better...we won't find anything better to load.
                                            // This algorithm ensures there is nothing better to load even when we can only load a less-specific rollup.
                                            //
                                            // note: this feature is only available in async mode
                                            // inspect the loaded bundle that came from the rollup to see if something better is available
                                            // for any bundle in a rollup, more-specific available locales are given at localized.
                                            var requiredBundles = JSProf.LNE(35588, [], 10), cacheIds = JSProf.LNE(35589, [], 10);
                                            JSProf.LFC(35604, forEachLocale, false)(JSProf.LRE(35590, locale), JSProf.LNF(35603, function (loc) {
                                                if (JSProf.LGE(35591, localized, 'loc')[loc]) {
                                                    JSProf.LMC(35596, requiredBundles, 'push').push(JSProf.LMC(35595, require, 'toAbsMid').toAbsMid(JSProf.LRE(35592, bundlePath) + JSProf.LRE(35593, loc) + "/" + JSProf.LRE(35594, bundleName)));
                                                    JSProf.LMC(35602, cacheIds, 'push').push(JSProf.LFC(35601, cacheId, false)(JSProf.LRE(35597, bundlePath), JSProf.LRE(35598, bundleName), JSProf.LRE(35599, loc), JSProf.LRE(35600, require)));
                                                }
                                            }, 12));
                                            if (JSProf.LGD(35605, requiredBundles, 'length').length) {
                                                JSProf.LFC(35606, preloadingAddLock, false)();
                                                JSProf.LFC(35627, contextRequire, false)(JSProf.LRE(35607, requiredBundles), JSProf.LNF(35626, function () {
                                                    for (var i = 0; JSProf.LRE(35608, i) < JSProf.LGD(35609, requiredBundles, 'length').length; i++) {
                                                        bundle = JSProf.LWR(35614, bundle, JSProf.LMC(35613, lang, 'mixin').mixin(JSProf.LMC(35611, lang, 'clone').clone(JSProf.LRE(35610, bundle)), JSProf.LGE(35612, arguments, 'i')[i]));
                                                        JSProf.LPE(35616, cache, JSProf.TMPS.t34fc3319184a76222fdc5c4f23a1fd486c7dd6cf = cacheIds[i])[JSProf.TMPS.t34fc3319184a76222fdc5c4f23a1fd486c7dd6cf] = JSProf.LRPE(35616, JSProf.LRE(35615, bundle));
                                                    }
                                                    // this is the best possible (maybe a perfect match, maybe not), accept it
                                                    JSProf.LPE(35624, cache, JSProf.TMPS.t34fc3319184a76222fdc5c4f23a1fd486c7dd6cf = JSProf.LFC(35621, cacheId, false)(JSProf.LRE(35617, bundlePath), JSProf.LRE(35618, bundleName), JSProf.LRE(35619, locale), JSProf.LRE(35620, require)))[JSProf.TMPS.t34fc3319184a76222fdc5c4f23a1fd486c7dd6cf] = JSProf.LRPE(35624, JSProf.LMC(35623, lang, 'clone').clone(JSProf.LRE(35622, bundle)));
                                                    JSProf.LFC(35625, preloadingRelLock, false)();
                                                }, 12));
                                            } else {
                                                // this is the best possible (definitely not a perfect match), accept it
                                                JSProf.LPE(35634, cache, JSProf.TMPS.t34fc3319184a76222fdc5c4f23a1fd486c7dd6cf = JSProf.LFC(35632, cacheId, false)(JSProf.LRE(35628, bundlePath), JSProf.LRE(35629, bundleName), JSProf.LRE(35630, locale), JSProf.LRE(35631, require)))[JSProf.TMPS.t34fc3319184a76222fdc5c4f23a1fd486c7dd6cf] = JSProf.LRPE(35634, JSProf.LRE(35633, bundle));
                                            }
                                        }
                                        JSProf.LFC(35639, improveBundle, false)(JSProf.LRE(35635, bundlePath), JSProf.LRE(35636, bundleName), JSProf.LRE(35637, bundle), JSProf.LRE(35638, localized));
                                    }
                                }
                                JSProf.LFC(35640, preloadingRelLock, false)();
                            }, 12));
                            return true;
                        }
                        return false;
                    }, 12));
                }
                JSProf.LFC(35646, preload, false)();
                JSProf.LMC(35649, array, 'forEach').forEach(JSProf.LGD(35647, dojo.config, 'extraLocale').extraLocale, JSProf.LRE(35648, preload));
            }, 12)), waitForPreloads = JSProf.LNF(35665, function (id, require, load) {
                if (JSProf.LRE(35658, preloading)) {
                    JSProf.LMC(35663, preloadWaitQueue, 'push').push(JSProf.LNE(35662, [
                        JSProf.LRE(35659, id),
                        JSProf.LRE(35660, require),
                        JSProf.LRE(35661, load)
                    ], 10));
                }
                return JSProf.LRE(35664, preloading);
            }, 12), checkForLegacyModules = JSProf.LNF(35666, function () {
            }, 12);
    }
    if (JSProf.LFC(35667, has, false)("dojo-v1x-i18n-Api")) {
        // this code path assumes the dojo loader and won't work with a standard AMD loader
        var amdValue = JSProf.LNE(35668, {}, 11), evalBundle = JSProf.LNE(35670, new (JSProf.LFC(35669, Function, true))("__bundle", "__checkForLegacyModules", "__mid", "__amdValue", "var define = function(mid, factory){define.called = 1; __amdValue.result = factory || mid;}," + "	   require = function(){define.called = 1;};" + "try{" + "define.called = 0;" + "eval(__bundle);" + "if(define.called==1)" + "return __amdValue;" + "if((__checkForLegacyModules = __checkForLegacyModules(__mid)))" + "return __checkForLegacyModules;" + "}catch(e){}" + "try{" + "return eval('('+__bundle+')');" + "}catch(e){" + "return e;" + "}"), 'Function'), syncRequire = JSProf.LNF(35725, function (deps, callback, require) {
                var results = JSProf.LNE(35671, [], 10);
                JSProf.LMC(35721, array, 'forEach').forEach(JSProf.LRE(35672, deps), JSProf.LNF(35720, function (mid) {
                    JSProf.LFD(35719, load);
                    var url = JSProf.LMC(35674, require, 'toUrl').toUrl(JSProf.LRE(35673, mid) + ".js");
                    function load(text) {
                        var result = JSProf.LFC(35679, evalBundle, false)(JSProf.LRE(35675, text), JSProf.LRE(35676, checkForLegacyModules), JSProf.LRE(35677, mid), JSProf.LRE(35678, amdValue));
                        if (JSProf.LRE(35680, result) === JSProf.LRE(35681, amdValue)) {
                            // the bundle was an AMD module; re-inject it through the normal AMD path
                            // we gotta do this since it could be an anonymous module and simply evaluating
                            // the text here won't provide the loader with the context to know what
                            // module is being defined()'d. With browser caching, this should be free; further
                            // this entire code path can be circumvented by using the AMD format to begin with
                            JSProf.LMC(35684, results, 'push').push(JSProf.LPE(35683, cache, 'url')[url] = JSProf.LRPE(35683, JSProf.LGD(35682, amdValue, 'result').result));
                        } else {
                            if (JSProf.LRE(35685, result) instanceof JSProf.LRU(35686, typeof Error === 'undefined' ? undefined : Error)) {
                                JSProf.LMC(35689, console, 'error').error("failed to evaluate i18n bundle; url=" + JSProf.LRE(35687, url), JSProf.LRE(35688, result));
                                result = JSProf.LWR(35691, result, JSProf.LNE(35690, {}, 11));
                            }
                            // nls/<locale>/<bundle-name> indicates not the root.
                            JSProf.LMC(35697, results, 'push').push(JSProf.LPE(35696, cache, 'url')[url] = JSProf.LRPE(35696, JSProf.LMC(35693, /nls\/[^\/]+\/[^\/]+$/, 'test').test(JSProf.LRE(35692, url)) ? JSProf.LRE(35694, result) : JSProf.LNE(35695, {
                                root: result,
                                _v1x: 1
                            }, 11)));
                        }
                    }
                    if (JSProf.LGE(35698, cache, 'url')[url]) {
                        JSProf.LMC(35700, results, 'push').push(JSProf.LGE(35699, cache, 'url')[url]);
                    } else {
                        var bundle = JSProf.LMC(35702, require, 'syncLoadNls').syncLoadNls(JSProf.LRE(35701, mid));
                        // don't need to check for legacy since syncLoadNls returns a module if the module
                        // (1) was already loaded, or (2) was in the cache. In case 1, if syncRequire is called
                        // from getLocalization --> load, then load will have called checkForLegacyModules() before
                        // calling syncRequire; if syncRequire is called from preloadLocalizations, then we
                        // don't care about checkForLegacyModules() because that will be done when a particular
                        // bundle is actually demanded. In case 2, checkForLegacyModules() is never relevant
                        // because cached modules are always v1.7+ built modules.
                        if (JSProf.LRE(35703, bundle)) {
                            JSProf.LMC(35705, results, 'push').push(JSProf.LRE(35704, bundle));
                        } else {
                            if (!JSProf.LRE(35706, xhr)) {
                                try {
                                    JSProf.LMC(35709, require, 'getText').getText(JSProf.LRE(35707, url), true, JSProf.LRE(35708, load));
                                } catch (e) {
                                    JSProf.LMC(35712, results, 'push').push(JSProf.LPE(35711, cache, 'url')[url] = JSProf.LRPE(35711, JSProf.LNE(35710, {}, 11)));
                                }
                            } else {
                                JSProf.LMC(35718, xhr, 'get').get(JSProf.LNE(35717, {
                                    url: url,
                                    sync: true,
                                    load: load,
                                    error: JSProf.LNF(35716, function () {
                                        JSProf.LMC(35715, results, 'push').push(JSProf.LPE(35714, cache, 'url')[url] = JSProf.LRPE(35714, JSProf.LNE(35713, {}, 11)));
                                    }, 12)
                                }, 11));
                            }
                        }
                    }
                }, 12));
                JSProf.LRE(35722, callback) && JSProf.LMC(35724, callback, 'apply').apply(null, JSProf.LRE(35723, results));
            }, 12);
        checkForLegacyModules = JSProf.LWR(35744, checkForLegacyModules, JSProf.LNF(35743, function (target) {
            // legacy code may have already loaded [e.g] the raw bundle x/y/z at x.y.z; when true, push into the cache
            for (var result, names = target.split("/"), object = JSProf.LGE(35726, dojo.global, JSProf.TMPS.tc4131ad8209617903c7afb081fd76e1268fd567a = names[0])[JSProf.TMPS.tc4131ad8209617903c7afb081fd76e1268fd567a], i = 1; JSProf.LRE(35727, object) && JSProf.LRE(35728, i) < JSProf.LGD(35729, names, 'length').length - 1; object = JSProf.LWR(35731, object, JSProf.LGE(35730, object, JSProf.TMPS.t88540f3d668a04bdf372bb791bc0379473761ebb = names[i++])[JSProf.TMPS.t88540f3d668a04bdf372bb791bc0379473761ebb])) {
            }
            if (JSProf.LRE(35732, object)) {
                result = JSProf.LWR(35734, result, JSProf.LGE(35733, object, JSProf.TMPS.t88540f3d668a04bdf372bb791bc0379473761ebb = names[i])[JSProf.TMPS.t88540f3d668a04bdf372bb791bc0379473761ebb]);
                if (!JSProf.LRE(35735, result)) {
                    // fallback for incorrect bundle build of 1.6
                    result = JSProf.LWR(35738, result, JSProf.LGE(35737, object, JSProf.TMPS.t88540f3d668a04bdf372bb791bc0379473761ebb = JSProf.LMC(35736, names[i], 'replace').replace(/-/g, "_"))[JSProf.TMPS.t88540f3d668a04bdf372bb791bc0379473761ebb]);
                }
                if (JSProf.LRE(35739, result)) {
                    JSProf.LPE(35741, cache, 'target')[target] = JSProf.LRPE(35741, JSProf.LRE(35740, result));
                }
            }
            return JSProf.LRE(35742, result);
        }, 12));
        JSProf.LPD(35765, thisModule, 'getLocalization').getLocalization = JSProf.LRSP(35765, JSProf.LNF(35764, function (moduleName, bundleName, locale) {
            var result, l10nName = JSProf.LFC(35748, getBundleName, false)(JSProf.LRE(35745, moduleName), JSProf.LRE(35746, bundleName), JSProf.LRE(35747, locale));
            JSProf.LFC(35762, load, false)(JSProf.LRE(35749, l10nName), !JSProf.LFC(35752, isXd, false)(JSProf.LRE(35750, l10nName), JSProf.LRE(35751, require)) ? JSProf.LNF(35757, function (deps, callback) {
                JSProf.LFC(35756, syncRequire, false)(JSProf.LRE(35753, deps), JSProf.LRE(35754, callback), JSProf.LRE(35755, require));
            }, 12) : JSProf.LRE(35758, require), JSProf.LNF(35761, function (result_) {
                result = JSProf.LWR(35760, result, JSProf.LRE(35759, result_));
            }, 12));
            return JSProf.LRE(35763, result);
        }, 12));
        if (JSProf.LFC(35766, has, false)("dojo-unit-tests")) {
            JSProf.LMC(35833, unitTests, 'push').push(JSProf.LNF(35832, function (doh) {
                JSProf.LMC(35831, doh, 'register').register("tests.i18n.unit", JSProf.LNF(35830, function (t) {
                    var check;
                    check = JSProf.LWR(35770, check, JSProf.LFC(35769, evalBundle, false)("{prop:1}", JSProf.LRE(35767, checkForLegacyModules), "nonsense", JSProf.LRE(35768, amdValue)));
                    JSProf.LMC(35773, t, 'is').is(JSProf.LNE(35771, { prop: 1 }, 11), JSProf.LRE(35772, check));
                    JSProf.LMC(35775, t, 'is').is(undefined, JSProf.LGE(35774, check, 1)[1]);
                    check = JSProf.LWR(35779, check, JSProf.LFC(35778, evalBundle, false)("({prop:1})", JSProf.LRE(35776, checkForLegacyModules), "nonsense", JSProf.LRE(35777, amdValue)));
                    JSProf.LMC(35782, t, 'is').is(JSProf.LNE(35780, { prop: 1 }, 11), JSProf.LRE(35781, check));
                    JSProf.LMC(35784, t, 'is').is(undefined, JSProf.LGE(35783, check, 1)[1]);
                    check = JSProf.LWR(35788, check, JSProf.LFC(35787, evalBundle, false)("{'prop-x':1}", JSProf.LRE(35785, checkForLegacyModules), "nonsense", JSProf.LRE(35786, amdValue)));
                    JSProf.LMC(35791, t, 'is').is(JSProf.LNE(35789, { 'prop-x': 1 }, 11), JSProf.LRE(35790, check));
                    JSProf.LMC(35793, t, 'is').is(undefined, JSProf.LGE(35792, check, 1)[1]);
                    check = JSProf.LWR(35797, check, JSProf.LFC(35796, evalBundle, false)("({'prop-x':1})", JSProf.LRE(35794, checkForLegacyModules), "nonsense", JSProf.LRE(35795, amdValue)));
                    JSProf.LMC(35800, t, 'is').is(JSProf.LNE(35798, { 'prop-x': 1 }, 11), JSProf.LRE(35799, check));
                    JSProf.LMC(35802, t, 'is').is(undefined, JSProf.LGE(35801, check, 1)[1]);
                    check = JSProf.LWR(35806, check, JSProf.LFC(35805, evalBundle, false)("define({'prop-x':1})", JSProf.LRE(35803, checkForLegacyModules), "nonsense", JSProf.LRE(35804, amdValue)));
                    JSProf.LMC(35809, t, 'is').is(JSProf.LRE(35807, amdValue), JSProf.LRE(35808, check));
                    JSProf.LMC(35812, t, 'is').is(JSProf.LNE(35810, { 'prop-x': 1 }, 11), JSProf.LGD(35811, amdValue, 'result').result);
                    check = JSProf.LWR(35816, check, JSProf.LFC(35815, evalBundle, false)("define('some/module', {'prop-x':1})", JSProf.LRE(35813, checkForLegacyModules), "nonsense", JSProf.LRE(35814, amdValue)));
                    JSProf.LMC(35819, t, 'is').is(JSProf.LRE(35817, amdValue), JSProf.LRE(35818, check));
                    JSProf.LMC(35822, t, 'is').is(JSProf.LNE(35820, { 'prop-x': 1 }, 11), JSProf.LGD(35821, amdValue, 'result').result);
                    check = JSProf.LWR(35826, check, JSProf.LFC(35825, evalBundle, false)("this is total nonsense and should throw an error", JSProf.LRE(35823, checkForLegacyModules), "nonsense", JSProf.LRE(35824, amdValue)));
                    JSProf.LMC(35829, t, 'is').is(JSProf.LRE(35827, check) instanceof JSProf.LRU(35828, typeof Error === 'undefined' ? undefined : Error), true);
                }, 12));
            }, 12));
        }
    }
    return JSProf.LMC(35836, lang, 'mixin').mixin(JSProf.LRE(35834, thisModule), JSProf.LNE(35835, {
        dynamic: true,
        normalize: normalize,
        load: load,
        cache: cache,
        getL10nName: getL10nName
    }, 11));
}, 12));