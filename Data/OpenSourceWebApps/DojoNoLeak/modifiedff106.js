JSProf.LFC(35680, define, false)(JSProf.LNE(35190, [
    "./_base/kernel",
    "require",
    "./has",
    "./_base/array",
    "./_base/config",
    "./_base/lang",
    "./has!host-browser?./_base/xhr",
    "./json",
    "module"
], 10), JSProf.LNF(35679, function (dojo, require, has, array, config, lang, xhr, json, module) {
    // module:
    //		dojo/i18n
    JSProf.LMC(35191, has, 'add').add("dojo-preload-i18n-Api", 1);
    JSProf.LMC(35192, has, 'add').add("dojo-v1x-i18n-Api", 1);
    var thisModule = JSProf.LPD(35194, dojo, 'i18n').i18n = JSProf.LRSP(35194, JSProf.LNE(35193, {}, 11)), nlsRe = /(^.*(^|\/)nls)(\/|$)([^\/]*)\/?([^\/]*)/, getAvailableLocales = JSProf.LNF(35211, function (root, locale, bundlePath, bundleName) {
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
            for (var result = JSProf.LNE(35197, [JSProf.LRE(35195, bundlePath) + JSProf.LRE(35196, bundleName)], 10), localeParts = locale.split("-"), current = "", i = 0; JSProf.LRE(35198, i) < JSProf.LGD(35199, localeParts, 'length').length; i++) {
                current += (JSProf.LRE(35200, current) ? "-" : "") + JSProf.LGE(35201, localeParts, 'i')[i];
                if (!JSProf.LRE(35202, root) || JSProf.LGE(35203, root, 'current')[current]) {
                    JSProf.LMC(35207, result, 'push').push(JSProf.LRE(35204, bundlePath) + JSProf.LRE(35205, current) + "/" + JSProf.LRE(35206, bundleName));
                    JSProf.LPD(35209, result, 'specificity').specificity = JSProf.LRSP(35209, JSProf.LRE(35208, current));
                }
            }
            return JSProf.LRE(35210, result);
        }, 12), cache = JSProf.LNE(35212, {}, 11), getBundleName = JSProf.LNF(35227, function (moduleName, bundleName, locale) {
            locale = JSProf.LWR(35215, locale, JSProf.LRE(35213, locale) ? locale.toLowerCase() : JSProf.LGD(35214, dojo, 'locale').locale);
            moduleName = JSProf.LWR(35217, moduleName, JSProf.LMC(35216, moduleName, 'replace').replace(/\./g, "/"));
            bundleName = JSProf.LWR(35219, bundleName, JSProf.LMC(35218, bundleName, 'replace').replace(/\./g, "/"));
            return JSProf.LMC(35221, /root/i, 'test').test(JSProf.LRE(35220, locale)) ? JSProf.LRE(35222, moduleName) + "/nls/" + JSProf.LRE(35223, bundleName) : JSProf.LRE(35224, moduleName) + "/nls/" + JSProf.LRE(35225, locale) + "/" + JSProf.LRE(35226, bundleName);
        }, 12), getL10nName = JSProf.LPD(35235, dojo, 'getL10nName').getL10nName = JSProf.LRSP(35235, JSProf.LNF(35234, function (moduleName, bundleName, locale) {
            return moduleName = JSProf.LWR(35233, moduleName, JSProf.LGD(35228, module, 'id').id + "!" + JSProf.LFC(35232, getBundleName, false)(JSProf.LRE(35229, moduleName), JSProf.LRE(35230, bundleName), JSProf.LRE(35231, locale)));
        }, 12)), doLoad = JSProf.LNF(35266, function (require, bundlePathAndName, bundlePath, bundleName, locale, load) {
            // summary:
            //		get the root bundle which instructs which other bundles are required to construct the localized bundle
            JSProf.LFC(35265, require, false)(JSProf.LNE(35237, [JSProf.LRE(35236, bundlePathAndName)], 10), JSProf.LNF(35264, function (root) {
                var current = JSProf.LMC(35240, lang, 'clone').clone(JSProf.LGD(35238, root, 'root').root || JSProf.LGD(35239, root, 'ROOT').ROOT),
                    // 1.6 built bundle defined ROOT
                    availableLocales = JSProf.LFC(35246, getAvailableLocales, false)(!JSProf.LGD(35241, root, '_v1x')._v1x && JSProf.LRE(35242, root), JSProf.LRE(35243, locale), JSProf.LRE(35244, bundlePath), JSProf.LRE(35245, bundleName));
                JSProf.LFC(35263, require, false)(JSProf.LRE(35247, availableLocales), JSProf.LNF(35262, function () {
                    for (var i = 1; JSProf.LRE(35248, i) < JSProf.LGD(35249, availableLocales, 'length').length; i++) {
                        current = JSProf.LWR(35254, current, JSProf.LMC(35253, lang, 'mixin').mixin(JSProf.LMC(35251, lang, 'clone').clone(JSProf.LRE(35250, current)), JSProf.LGE(35252, arguments, 'i')[i]));
                    }
                    // target may not have been resolve (e.g., maybe only "fr" exists when "fr-ca" was requested)
                    var target = JSProf.LRE(35255, bundlePathAndName) + "/" + JSProf.LRE(35256, locale);
                    JSProf.LPE(35258, cache, 'target')[target] = JSProf.LRPE(35258, JSProf.LRE(35257, current));
                    JSProf.LPD(35260, current, '$locale').$locale = JSProf.LRSP(35260, JSProf.LGD(35259, availableLocales, 'specificity').specificity);
                    JSProf.LFC(35261, load, false)();
                }, 12));
            }, 12));
        }, 12), normalize = JSProf.LNF(35272, function (id, toAbsMid) {
            // summary:
            //		id may be relative.
            //		preload has form `*preload*<path>/nls/<module>*<flattened locales>` and
            //		therefore never looks like a relative
            return JSProf.LMC(35268, /^\./, 'test').test(JSProf.LRE(35267, id)) ? JSProf.LFC(35270, toAbsMid, false)(JSProf.LRE(35269, id)) : JSProf.LRE(35271, id);
        }, 12), getLocalesToLoad = JSProf.LNF(35284, function (targetLocale) {
            var list = JSProf.LGD(35273, config, 'extraLocale').extraLocale || JSProf.LNE(35274, [], 10);
            list = JSProf.LWR(35280, list, JSProf.LMC(35276, lang, 'isArray').isArray(JSProf.LRE(35275, list)) ? JSProf.LRE(35277, list) : JSProf.LNE(35279, [JSProf.LRE(35278, list)], 10));
            JSProf.LMC(35282, list, 'push').push(JSProf.LRE(35281, targetLocale));
            return JSProf.LRE(35283, list);
        }, 12), load = JSProf.LNF(35340, function (id, require, load) {
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
            if (JSProf.LFC(35285, has, false)("dojo-preload-i18n-Api")) {
                var split = id.split("*"), preloadDemand = JSProf.LGE(35286, split, 1)[1] == "preload";
                if (JSProf.LRE(35287, preloadDemand)) {
                    if (!JSProf.LGE(35288, cache, 'id')[id]) {
                        // use cache[id] to prevent multiple preloads of the same preload; this shouldn't happen, but
                        // who knows what over-aggressive human optimizers may attempt
                        JSProf.LPE(35289, cache, 'id')[id] = JSProf.LRPE(35289, 1);
                        JSProf.LFC(35294, preloadL10n, false)(JSProf.LGE(35290, split, 2)[2], JSProf.LMC(35292, json, 'parse').parse(JSProf.LGE(35291, split, 3)[3]), 1, JSProf.LRE(35293, require));
                    }
                    // don't stall the loader!
                    JSProf.LFC(35295, load, false)(1);
                }
                if (JSProf.LRE(35296, preloadDemand) || JSProf.LFC(35300, waitForPreloads, false)(JSProf.LRE(35297, id), JSProf.LRE(35298, require), JSProf.LRE(35299, load))) {
                    return;
                }
            }
            var match = nlsRe.exec(JSProf.LRE(35301, id)), bundlePath = JSProf.LGE(35302, match, 1)[1] + "/", bundleName = JSProf.LGE(35303, match, 5)[5] || JSProf.LGE(35304, match, 4)[4], bundlePathAndName = JSProf.LRE(35305, bundlePath) + JSProf.LRE(35306, bundleName), localeSpecified = JSProf.LGE(35307, match, 5)[5] && JSProf.LGE(35308, match, 4)[4], targetLocale = JSProf.LRE(35309, localeSpecified) || JSProf.LGD(35310, dojo, 'locale').locale || "", loadTarget = JSProf.LRE(35311, bundlePathAndName) + "/" + JSProf.LRE(35312, targetLocale), loadList = JSProf.LRE(35313, localeSpecified) ? JSProf.LNE(35315, [JSProf.LRE(35314, targetLocale)], 10) : JSProf.LFC(35317, getLocalesToLoad, false)(JSProf.LRE(35316, targetLocale)), remaining = JSProf.LGD(35318, loadList, 'length').length, finish = JSProf.LNF(35322, function () {
                    if (!--remaining) {
                        JSProf.LFC(35321, load, false)(JSProf.LMC(35320, lang, 'delegate').delegate(JSProf.LGE(35319, cache, 'loadTarget')[loadTarget]));
                    }
                }, 12);
            JSProf.LMC(35339, array, 'forEach').forEach(JSProf.LRE(35323, loadList), JSProf.LNF(35338, function (locale) {
                var target = JSProf.LRE(35324, bundlePathAndName) + "/" + JSProf.LRE(35325, locale);
                if (JSProf.LFC(35326, has, false)("dojo-preload-i18n-Api")) {
                    JSProf.LFC(35328, checkForLegacyModules, false)(JSProf.LRE(35327, target));
                }
                if (!JSProf.LGE(35329, cache, 'target')[target]) {
                    JSProf.LFC(35336, doLoad, false)(JSProf.LRE(35330, require), JSProf.LRE(35331, bundlePathAndName), JSProf.LRE(35332, bundlePath), JSProf.LRE(35333, bundleName), JSProf.LRE(35334, locale), JSProf.LRE(35335, finish));
                } else {
                    JSProf.LFC(35337, finish, false)();
                }
            }, 12));
        }, 12);
    if (JSProf.LFC(35341, has, false)("dojo-unit-tests")) {
        var unitTests = JSProf.LPD(35343, thisModule, 'unitTests').unitTests = JSProf.LRSP(35343, JSProf.LNE(35342, [], 10));
    }
    if (JSProf.LFC(35344, has, false)("dojo-preload-i18n-Api") || JSProf.LFC(35345, has, false)("dojo-v1x-i18n-Api")) {
        var normalizeLocale = JSProf.LPD(35351, thisModule, 'normalizeLocale').normalizeLocale = JSProf.LRSP(35351, JSProf.LNF(35350, function (locale) {
                var result = JSProf.LRE(35346, locale) ? locale.toLowerCase() : JSProf.LGD(35347, dojo, 'locale').locale;
                return JSProf.LRE(35348, result) == "root" ? "ROOT" : JSProf.LRE(35349, result);
            }, 12)), isXd = JSProf.LNF(35357, function (mid, contextRequire) {
                return JSProf.LFC(35352, has, false)("dojo-sync-loader") && JSProf.LFC(35353, has, false)("dojo-v1x-i18n-Api") ? JSProf.LMC(35356, contextRequire, 'isXdUrl').isXdUrl(JSProf.LMC(35355, require, 'toUrl').toUrl(JSProf.LRE(35354, mid) + ".js")) : true;
            }, 12), preloading = 0, preloadWaitQueue = JSProf.LNE(35358, [], 10), preloadL10n = JSProf.LPD(35499, thisModule, '_preloadLocalizations')._preloadLocalizations = JSProf.LRSP(35499, JSProf.LNF(35498, function (bundlePrefix, localesGenerated, guaranteedAmdFormat, contextRequire) {
                JSProf.LFD(35492, doRequire);
                JSProf.LFD(35493, forEachLocale);
                JSProf.LFD(35494, preloadingAddLock);
                JSProf.LFD(35495, preloadingRelLock);
                JSProf.LFD(35496, cacheId);
                JSProf.LFD(35497, preload);
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
                contextRequire = JSProf.LWR(35361, contextRequire, JSProf.LRE(35359, contextRequire) || JSProf.LRE(35360, require));
                function doRequire(mid, callback) {
                    if (JSProf.LFC(35364, isXd, false)(JSProf.LRE(35362, mid), JSProf.LRE(35363, contextRequire)) || JSProf.LRE(35365, guaranteedAmdFormat)) {
                        JSProf.LFC(35369, contextRequire, false)(JSProf.LNE(35367, [JSProf.LRE(35366, mid)], 10), JSProf.LRE(35368, callback));
                    } else {
                        JSProf.LFC(35374, syncRequire, false)(JSProf.LNE(35371, [JSProf.LRE(35370, mid)], 10), JSProf.LRE(35372, callback), JSProf.LRE(35373, contextRequire));
                    }
                }
                function forEachLocale(locale, func) {
                    // given locale= "ab-cd-ef", calls func on "ab-cd-ef", "ab-cd", "ab", "ROOT"; stops calling the first time func returns truthy
                    var parts = locale.split("-");
                    while (JSProf.LGD(35375, parts, 'length').length) {
                        if (JSProf.LFC(35377, func, false)(JSProf.LMC(35376, parts, 'join').join("-"))) {
                            return;
                        }
                        JSProf.LMC(35378, parts, 'pop').pop();
                    }
                    JSProf.LFC(35379, func, false)("ROOT");
                }
                function preloadingAddLock() {
                    preloading++;
                }
                function preloadingRelLock() {
                    --preloading;
                    while (!JSProf.LRE(35380, preloading) && JSProf.LGD(35381, preloadWaitQueue, 'length').length) {
                        JSProf.LMC(35383, load, 'apply').apply(null, JSProf.LMC(35382, preloadWaitQueue, 'shift').shift());
                    }
                }
                function cacheId(path, name, loc, require) {
                    // path is assumed to have a trailing "/"
                    return JSProf.LMC(35387, require, 'toAbsMid').toAbsMid(JSProf.LRE(35384, path) + JSProf.LRE(35385, name) + "/" + JSProf.LRE(35386, loc));
                }
                function preload(locale) {
                    locale = JSProf.LWR(35390, locale, JSProf.LFC(35389, normalizeLocale, false)(JSProf.LRE(35388, locale)));
                    JSProf.LFC(35487, forEachLocale, false)(JSProf.LRE(35391, locale), JSProf.LNF(35486, function (loc) {
                        if (JSProf.LMC(35394, array, 'indexOf').indexOf(JSProf.LRE(35392, localesGenerated), JSProf.LRE(35393, loc)) >= 0) {
                            var mid = JSProf.LMC(35395, bundlePrefix, 'replace').replace(/\./g, "/") + "_" + JSProf.LRE(35396, loc);
                            JSProf.LFC(35397, preloadingAddLock, false)();
                            JSProf.LFC(35485, doRequire, false)(JSProf.LRE(35398, mid), JSProf.LNF(35484, function (rollup) {
                                JSProf.LFD(35483, improveBundle);
                                for (var p in JSProf.LRE(35399, rollup)) {
                                    var bundle = JSProf.LGE(35400, rollup, 'p')[p], match = JSProf.LMC(35401, p, 'match').match(/(.+)\/([^\/]+)$/), bundleName, bundlePath;
                                    // If there is no match, the bundle is not a regular bundle from an AMD layer.
                                    if (!JSProf.LRE(35402, match)) {
                                        continue;
                                    }
                                    bundleName = JSProf.LWR(35404, bundleName, JSProf.LGE(35403, match, 2)[2]);
                                    bundlePath = JSProf.LWR(35406, bundlePath, JSProf.LGE(35405, match, 1)[1] + "/");
                                    // backcompat
                                    JSProf.LPD(35409, bundle, '_localized')._localized = JSProf.LRSP(35409, JSProf.LGD(35407, bundle, '_localized')._localized || JSProf.LNE(35408, {}, 11));
                                    var localized;
                                    if (JSProf.LRE(35410, loc) === "ROOT") {
                                        var root = localized = JSProf.LWR(35412, localized, JSProf.LGD(35411, bundle, '_localized')._localized);
                                        delete bundle._localized;
                                        JSProf.LPD(35414, root, 'root').root = JSProf.LRSP(35414, JSProf.LRE(35413, bundle));
                                        JSProf.LPE(35418, cache, JSProf.TMPS.t34fc3319184a76222fdc5c4f23a1fd486c7dd6cf = JSProf.LMC(35416, require, 'toAbsMid').toAbsMid(JSProf.LRE(35415, p)))[JSProf.TMPS.t34fc3319184a76222fdc5c4f23a1fd486c7dd6cf] = JSProf.LRPE(35418, JSProf.LRE(35417, root));
                                    } else {
                                        localized = JSProf.LWR(35420, localized, JSProf.LGD(35419, bundle, '_localized')._localized);
                                        JSProf.LPE(35427, cache, JSProf.TMPS.t34fc3319184a76222fdc5c4f23a1fd486c7dd6cf = JSProf.LFC(35425, cacheId, false)(JSProf.LRE(35421, bundlePath), JSProf.LRE(35422, bundleName), JSProf.LRE(35423, loc), JSProf.LRE(35424, require)))[JSProf.TMPS.t34fc3319184a76222fdc5c4f23a1fd486c7dd6cf] = JSProf.LRPE(35427, JSProf.LRE(35426, bundle));
                                    }
                                    if (JSProf.LRE(35428, loc) !== JSProf.LRE(35429, locale)) {
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
                                            var requiredBundles = JSProf.LNE(35430, [], 10), cacheIds = JSProf.LNE(35431, [], 10);
                                            JSProf.LFC(35446, forEachLocale, false)(JSProf.LRE(35432, locale), JSProf.LNF(35445, function (loc) {
                                                if (JSProf.LGE(35433, localized, 'loc')[loc]) {
                                                    JSProf.LMC(35438, requiredBundles, 'push').push(JSProf.LMC(35437, require, 'toAbsMid').toAbsMid(JSProf.LRE(35434, bundlePath) + JSProf.LRE(35435, loc) + "/" + JSProf.LRE(35436, bundleName)));
                                                    JSProf.LMC(35444, cacheIds, 'push').push(JSProf.LFC(35443, cacheId, false)(JSProf.LRE(35439, bundlePath), JSProf.LRE(35440, bundleName), JSProf.LRE(35441, loc), JSProf.LRE(35442, require)));
                                                }
                                            }, 12));
                                            if (JSProf.LGD(35447, requiredBundles, 'length').length) {
                                                JSProf.LFC(35448, preloadingAddLock, false)();
                                                JSProf.LFC(35469, contextRequire, false)(JSProf.LRE(35449, requiredBundles), JSProf.LNF(35468, function () {
                                                    for (var i = 0; JSProf.LRE(35450, i) < JSProf.LGD(35451, requiredBundles, 'length').length; i++) {
                                                        bundle = JSProf.LWR(35456, bundle, JSProf.LMC(35455, lang, 'mixin').mixin(JSProf.LMC(35453, lang, 'clone').clone(JSProf.LRE(35452, bundle)), JSProf.LGE(35454, arguments, 'i')[i]));
                                                        JSProf.LPE(35458, cache, JSProf.TMPS.t34fc3319184a76222fdc5c4f23a1fd486c7dd6cf = cacheIds[i])[JSProf.TMPS.t34fc3319184a76222fdc5c4f23a1fd486c7dd6cf] = JSProf.LRPE(35458, JSProf.LRE(35457, bundle));
                                                    }
                                                    // this is the best possible (maybe a perfect match, maybe not), accept it
                                                    JSProf.LPE(35466, cache, JSProf.TMPS.t34fc3319184a76222fdc5c4f23a1fd486c7dd6cf = JSProf.LFC(35463, cacheId, false)(JSProf.LRE(35459, bundlePath), JSProf.LRE(35460, bundleName), JSProf.LRE(35461, locale), JSProf.LRE(35462, require)))[JSProf.TMPS.t34fc3319184a76222fdc5c4f23a1fd486c7dd6cf] = JSProf.LRPE(35466, JSProf.LMC(35465, lang, 'clone').clone(JSProf.LRE(35464, bundle)));
                                                    JSProf.LFC(35467, preloadingRelLock, false)();
                                                }, 12));
                                            } else {
                                                // this is the best possible (definitely not a perfect match), accept it
                                                JSProf.LPE(35476, cache, JSProf.TMPS.t34fc3319184a76222fdc5c4f23a1fd486c7dd6cf = JSProf.LFC(35474, cacheId, false)(JSProf.LRE(35470, bundlePath), JSProf.LRE(35471, bundleName), JSProf.LRE(35472, locale), JSProf.LRE(35473, require)))[JSProf.TMPS.t34fc3319184a76222fdc5c4f23a1fd486c7dd6cf] = JSProf.LRPE(35476, JSProf.LRE(35475, bundle));
                                            }
                                        }
                                        JSProf.LFC(35481, improveBundle, false)(JSProf.LRE(35477, bundlePath), JSProf.LRE(35478, bundleName), JSProf.LRE(35479, bundle), JSProf.LRE(35480, localized));
                                    }
                                }
                                JSProf.LFC(35482, preloadingRelLock, false)();
                            }, 12));
                            return true;
                        }
                        return false;
                    }, 12));
                }
                JSProf.LFC(35488, preload, false)();
                JSProf.LMC(35491, array, 'forEach').forEach(JSProf.LGD(35489, dojo.config, 'extraLocale').extraLocale, JSProf.LRE(35490, preload));
            }, 12)), waitForPreloads = JSProf.LNF(35507, function (id, require, load) {
                if (JSProf.LRE(35500, preloading)) {
                    JSProf.LMC(35505, preloadWaitQueue, 'push').push(JSProf.LNE(35504, [
                        JSProf.LRE(35501, id),
                        JSProf.LRE(35502, require),
                        JSProf.LRE(35503, load)
                    ], 10));
                }
                return JSProf.LRE(35506, preloading);
            }, 12), checkForLegacyModules = JSProf.LNF(35508, function () {
            }, 12);
    }
    if (JSProf.LFC(35509, has, false)("dojo-v1x-i18n-Api")) {
        // this code path assumes the dojo loader and won't work with a standard AMD loader
        var amdValue = JSProf.LNE(35510, {}, 11), evalBundle = JSProf.LNE(35512, new (JSProf.LFC(35511, Function, true))("__bundle", "__checkForLegacyModules", "__mid", "__amdValue", "var define = function(mid, factory){define.called = 1; __amdValue.result = factory || mid;}," + "	   require = function(){define.called = 1;};" + "try{" + "define.called = 0;" + "eval(__bundle);" + "if(define.called==1)" + "return __amdValue;" + "if((__checkForLegacyModules = __checkForLegacyModules(__mid)))" + "return __checkForLegacyModules;" + "}catch(e){}" + "try{" + "return eval('('+__bundle+')');" + "}catch(e){" + "return e;" + "}"), 'Function'), syncRequire = JSProf.LNF(35567, function (deps, callback, require) {
                var results = JSProf.LNE(35513, [], 10);
                JSProf.LMC(35563, array, 'forEach').forEach(JSProf.LRE(35514, deps), JSProf.LNF(35562, function (mid) {
                    JSProf.LFD(35561, load);
                    var url = JSProf.LMC(35516, require, 'toUrl').toUrl(JSProf.LRE(35515, mid) + ".js");
                    function load(text) {
                        var result = JSProf.LFC(35521, evalBundle, false)(JSProf.LRE(35517, text), JSProf.LRE(35518, checkForLegacyModules), JSProf.LRE(35519, mid), JSProf.LRE(35520, amdValue));
                        if (JSProf.LRE(35522, result) === JSProf.LRE(35523, amdValue)) {
                            // the bundle was an AMD module; re-inject it through the normal AMD path
                            // we gotta do this since it could be an anonymous module and simply evaluating
                            // the text here won't provide the loader with the context to know what
                            // module is being defined()'d. With browser caching, this should be free; further
                            // this entire code path can be circumvented by using the AMD format to begin with
                            JSProf.LMC(35526, results, 'push').push(JSProf.LPE(35525, cache, 'url')[url] = JSProf.LRPE(35525, JSProf.LGD(35524, amdValue, 'result').result));
                        } else {
                            if (JSProf.LRE(35527, result) instanceof JSProf.LRU(35528, typeof Error === 'undefined' ? undefined : Error)) {
                                JSProf.LMC(35531, console, 'error').error("failed to evaluate i18n bundle; url=" + JSProf.LRE(35529, url), JSProf.LRE(35530, result));
                                result = JSProf.LWR(35533, result, JSProf.LNE(35532, {}, 11));
                            }
                            // nls/<locale>/<bundle-name> indicates not the root.
                            JSProf.LMC(35539, results, 'push').push(JSProf.LPE(35538, cache, 'url')[url] = JSProf.LRPE(35538, JSProf.LMC(35535, /nls\/[^\/]+\/[^\/]+$/, 'test').test(JSProf.LRE(35534, url)) ? JSProf.LRE(35536, result) : JSProf.LNE(35537, {
                                root: result,
                                _v1x: 1
                            }, 11)));
                        }
                    }
                    if (JSProf.LGE(35540, cache, 'url')[url]) {
                        JSProf.LMC(35542, results, 'push').push(JSProf.LGE(35541, cache, 'url')[url]);
                    } else {
                        var bundle = JSProf.LMC(35544, require, 'syncLoadNls').syncLoadNls(JSProf.LRE(35543, mid));
                        // don't need to check for legacy since syncLoadNls returns a module if the module
                        // (1) was already loaded, or (2) was in the cache. In case 1, if syncRequire is called
                        // from getLocalization --> load, then load will have called checkForLegacyModules() before
                        // calling syncRequire; if syncRequire is called from preloadLocalizations, then we
                        // don't care about checkForLegacyModules() because that will be done when a particular
                        // bundle is actually demanded. In case 2, checkForLegacyModules() is never relevant
                        // because cached modules are always v1.7+ built modules.
                        if (JSProf.LRE(35545, bundle)) {
                            JSProf.LMC(35547, results, 'push').push(JSProf.LRE(35546, bundle));
                        } else {
                            if (!JSProf.LRE(35548, xhr)) {
                                try {
                                    JSProf.LMC(35551, require, 'getText').getText(JSProf.LRE(35549, url), true, JSProf.LRE(35550, load));
                                } catch (e) {
                                    JSProf.LMC(35554, results, 'push').push(JSProf.LPE(35553, cache, 'url')[url] = JSProf.LRPE(35553, JSProf.LNE(35552, {}, 11)));
                                }
                            } else {
                                JSProf.LMC(35560, xhr, 'get').get(JSProf.LNE(35559, {
                                    url: url,
                                    sync: true,
                                    load: load,
                                    error: JSProf.LNF(35558, function () {
                                        JSProf.LMC(35557, results, 'push').push(JSProf.LPE(35556, cache, 'url')[url] = JSProf.LRPE(35556, JSProf.LNE(35555, {}, 11)));
                                    }, 12)
                                }, 11));
                            }
                        }
                    }
                }, 12));
                JSProf.LRE(35564, callback) && JSProf.LMC(35566, callback, 'apply').apply(null, JSProf.LRE(35565, results));
            }, 12);
        checkForLegacyModules = JSProf.LWR(35586, checkForLegacyModules, JSProf.LNF(35585, function (target) {
            // legacy code may have already loaded [e.g] the raw bundle x/y/z at x.y.z; when true, push into the cache
            for (var result, names = target.split("/"), object = JSProf.LGE(35568, dojo.global, JSProf.TMPS.tc4131ad8209617903c7afb081fd76e1268fd567a = names[0])[JSProf.TMPS.tc4131ad8209617903c7afb081fd76e1268fd567a], i = 1; JSProf.LRE(35569, object) && JSProf.LRE(35570, i) < JSProf.LGD(35571, names, 'length').length - 1; object = JSProf.LWR(35573, object, JSProf.LGE(35572, object, JSProf.TMPS.t88540f3d668a04bdf372bb791bc0379473761ebb = names[i++])[JSProf.TMPS.t88540f3d668a04bdf372bb791bc0379473761ebb])) {
            }
            if (JSProf.LRE(35574, object)) {
                result = JSProf.LWR(35576, result, JSProf.LGE(35575, object, JSProf.TMPS.t88540f3d668a04bdf372bb791bc0379473761ebb = names[i])[JSProf.TMPS.t88540f3d668a04bdf372bb791bc0379473761ebb]);
                if (!JSProf.LRE(35577, result)) {
                    // fallback for incorrect bundle build of 1.6
                    result = JSProf.LWR(35580, result, JSProf.LGE(35579, object, JSProf.TMPS.t88540f3d668a04bdf372bb791bc0379473761ebb = JSProf.LMC(35578, names[i], 'replace').replace(/-/g, "_"))[JSProf.TMPS.t88540f3d668a04bdf372bb791bc0379473761ebb]);
                }
                if (JSProf.LRE(35581, result)) {
                    JSProf.LPE(35583, cache, 'target')[target] = JSProf.LRPE(35583, JSProf.LRE(35582, result));
                }
            }
            return JSProf.LRE(35584, result);
        }, 12));
        JSProf.LPD(35607, thisModule, 'getLocalization').getLocalization = JSProf.LRSP(35607, JSProf.LNF(35606, function (moduleName, bundleName, locale) {
            var result, l10nName = JSProf.LFC(35590, getBundleName, false)(JSProf.LRE(35587, moduleName), JSProf.LRE(35588, bundleName), JSProf.LRE(35589, locale));
            JSProf.LFC(35604, load, false)(JSProf.LRE(35591, l10nName), !JSProf.LFC(35594, isXd, false)(JSProf.LRE(35592, l10nName), JSProf.LRE(35593, require)) ? JSProf.LNF(35599, function (deps, callback) {
                JSProf.LFC(35598, syncRequire, false)(JSProf.LRE(35595, deps), JSProf.LRE(35596, callback), JSProf.LRE(35597, require));
            }, 12) : JSProf.LRE(35600, require), JSProf.LNF(35603, function (result_) {
                result = JSProf.LWR(35602, result, JSProf.LRE(35601, result_));
            }, 12));
            return JSProf.LRE(35605, result);
        }, 12));
        if (JSProf.LFC(35608, has, false)("dojo-unit-tests")) {
            JSProf.LMC(35675, unitTests, 'push').push(JSProf.LNF(35674, function (doh) {
                JSProf.LMC(35673, doh, 'register').register("tests.i18n.unit", JSProf.LNF(35672, function (t) {
                    var check;
                    check = JSProf.LWR(35612, check, JSProf.LFC(35611, evalBundle, false)("{prop:1}", JSProf.LRE(35609, checkForLegacyModules), "nonsense", JSProf.LRE(35610, amdValue)));
                    JSProf.LMC(35615, t, 'is').is(JSProf.LNE(35613, { prop: 1 }, 11), JSProf.LRE(35614, check));
                    JSProf.LMC(35617, t, 'is').is(undefined, JSProf.LGE(35616, check, 1)[1]);
                    check = JSProf.LWR(35621, check, JSProf.LFC(35620, evalBundle, false)("({prop:1})", JSProf.LRE(35618, checkForLegacyModules), "nonsense", JSProf.LRE(35619, amdValue)));
                    JSProf.LMC(35624, t, 'is').is(JSProf.LNE(35622, { prop: 1 }, 11), JSProf.LRE(35623, check));
                    JSProf.LMC(35626, t, 'is').is(undefined, JSProf.LGE(35625, check, 1)[1]);
                    check = JSProf.LWR(35630, check, JSProf.LFC(35629, evalBundle, false)("{'prop-x':1}", JSProf.LRE(35627, checkForLegacyModules), "nonsense", JSProf.LRE(35628, amdValue)));
                    JSProf.LMC(35633, t, 'is').is(JSProf.LNE(35631, { 'prop-x': 1 }, 11), JSProf.LRE(35632, check));
                    JSProf.LMC(35635, t, 'is').is(undefined, JSProf.LGE(35634, check, 1)[1]);
                    check = JSProf.LWR(35639, check, JSProf.LFC(35638, evalBundle, false)("({'prop-x':1})", JSProf.LRE(35636, checkForLegacyModules), "nonsense", JSProf.LRE(35637, amdValue)));
                    JSProf.LMC(35642, t, 'is').is(JSProf.LNE(35640, { 'prop-x': 1 }, 11), JSProf.LRE(35641, check));
                    JSProf.LMC(35644, t, 'is').is(undefined, JSProf.LGE(35643, check, 1)[1]);
                    check = JSProf.LWR(35648, check, JSProf.LFC(35647, evalBundle, false)("define({'prop-x':1})", JSProf.LRE(35645, checkForLegacyModules), "nonsense", JSProf.LRE(35646, amdValue)));
                    JSProf.LMC(35651, t, 'is').is(JSProf.LRE(35649, amdValue), JSProf.LRE(35650, check));
                    JSProf.LMC(35654, t, 'is').is(JSProf.LNE(35652, { 'prop-x': 1 }, 11), JSProf.LGD(35653, amdValue, 'result').result);
                    check = JSProf.LWR(35658, check, JSProf.LFC(35657, evalBundle, false)("define('some/module', {'prop-x':1})", JSProf.LRE(35655, checkForLegacyModules), "nonsense", JSProf.LRE(35656, amdValue)));
                    JSProf.LMC(35661, t, 'is').is(JSProf.LRE(35659, amdValue), JSProf.LRE(35660, check));
                    JSProf.LMC(35664, t, 'is').is(JSProf.LNE(35662, { 'prop-x': 1 }, 11), JSProf.LGD(35663, amdValue, 'result').result);
                    check = JSProf.LWR(35668, check, JSProf.LFC(35667, evalBundle, false)("this is total nonsense and should throw an error", JSProf.LRE(35665, checkForLegacyModules), "nonsense", JSProf.LRE(35666, amdValue)));
                    JSProf.LMC(35671, t, 'is').is(JSProf.LRE(35669, check) instanceof JSProf.LRU(35670, typeof Error === 'undefined' ? undefined : Error), true);
                }, 12));
            }, 12));
        }
    }
    return JSProf.LMC(35678, lang, 'mixin').mixin(JSProf.LRE(35676, thisModule), JSProf.LNE(35677, {
        dynamic: true,
        normalize: normalize,
        load: load,
        cache: cache,
        getL10nName: getL10nName
    }, 11));
}, 12));