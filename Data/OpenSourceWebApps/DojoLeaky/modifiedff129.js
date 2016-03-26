JSProf.LFC(43114, define, false)(JSProf.LNE(42942, [
    'exports',
    '../errors/RequestError',
    '../errors/CancelError',
    '../Deferred',
    '../io-query',
    '../_base/array',
    '../_base/lang',
    '../promise/Promise'
], 10), JSProf.LNF(43113, function (exports, RequestError, CancelError, Deferred, ioQuery, array, lang, Promise) {
    JSProf.LFD(43111, okHandler);
    JSProf.LFD(43112, dataHandler);
    JSProf.LPD(42959, exports, 'deepCopy').deepCopy = JSProf.LRSP(42959, JSProf.LNF(42958, function deepCopy(target, source) {
        for (var name in JSProf.LRE(42943, source)) {
            var tval = JSProf.LGE(42944, target, 'name')[name], sval = JSProf.LGE(42945, source, 'name')[name];
            if (JSProf.LRE(42946, tval) !== JSProf.LRE(42947, sval)) {
                if (JSProf.LRE(42948, tval) && typeof JSProf.LRE(42949, tval) === 'object' && JSProf.LRE(42950, sval) && typeof JSProf.LRE(42951, sval) === 'object') {
                    JSProf.LMC(42954, exports, 'deepCopy').deepCopy(JSProf.LRE(42952, tval), JSProf.LRE(42953, sval));
                } else {
                    JSProf.LPE(42956, target, 'name')[name] = JSProf.LRPE(42956, JSProf.LRE(42955, sval));
                }
            }
        }
        return JSProf.LRE(42957, target);
    }, 12));
    JSProf.LPD(42978, exports, 'deepCreate').deepCreate = JSProf.LRSP(42978, JSProf.LNF(42977, function deepCreate(source, properties) {
        properties = JSProf.LWR(42962, properties, JSProf.LRE(42960, properties) || JSProf.LNE(42961, {}, 11));
        var target = JSProf.LMC(42964, lang, 'delegate').delegate(JSProf.LRE(42963, source)), name, value;
        for (name in JSProf.LRE(42965, source)) {
            value = JSProf.LWR(42967, value, JSProf.LGE(42966, source, 'name')[name]);
            if (JSProf.LRE(42968, value) && typeof JSProf.LRE(42969, value) === 'object') {
                JSProf.LPE(42973, target, 'name')[name] = JSProf.LRPE(42973, JSProf.LMC(42972, exports, 'deepCreate').deepCreate(JSProf.LRE(42970, value), JSProf.LGE(42971, properties, 'name')[name]));
            }
        }
        return JSProf.LMC(42976, exports, 'deepCopy').deepCopy(JSProf.LRE(42974, target), JSProf.LRE(42975, properties));
    }, 12));
    var freeze = JSProf.LGD(42979, Object, 'freeze').freeze || JSProf.LNF(42981, function (obj) {
            return JSProf.LRE(42980, obj);
        }, 12);
    function okHandler(response) {
        return JSProf.LFC(42983, freeze, false)(JSProf.LRE(42982, response));
    }
    function dataHandler(response) {
        return JSProf.LGD(42984, response, 'data').data || JSProf.LGD(42985, response, 'text').text;
    }
    JSProf.LPD(43053, exports, 'deferred').deferred = JSProf.LRSP(43053, JSProf.LNF(43052, function deferred(response, cancel, isValid, isReady, handleResponse, last) {
        JSProf.LFD(43051, errHandler);
        var def = JSProf.LNE(43001, new (JSProf.LFC(43000, Deferred, true))(JSProf.LNF(42999, function (reason) {
                JSProf.LRE(42986, cancel) && JSProf.LFC(42989, cancel, false)(JSProf.LRE(42987, def), JSProf.LRE(42988, response));
                if (!JSProf.LRE(42990, reason) || !(JSProf.LRE(42991, reason) instanceof JSProf.LRE(42992, RequestError)) && !(JSProf.LRE(42993, reason) instanceof JSProf.LRE(42994, CancelError))) {
                    return JSProf.LNE(42997, new (JSProf.LFC(42996, CancelError, true))('Request canceled', JSProf.LRE(42995, response)), 'CancelError');
                }
                return JSProf.LRE(42998, reason);
            }, 12)), 'Deferred');
        JSProf.LPD(43003, def, 'response').response = JSProf.LRSP(43003, JSProf.LRE(43002, response));
        JSProf.LPD(43005, def, 'isValid').isValid = JSProf.LRSP(43005, JSProf.LRE(43004, isValid));
        JSProf.LPD(43007, def, 'isReady').isReady = JSProf.LRSP(43007, JSProf.LRE(43006, isReady));
        JSProf.LPD(43009, def, 'handleResponse').handleResponse = JSProf.LRSP(43009, JSProf.LRE(43008, handleResponse));
        function errHandler(error) {
            JSProf.LPD(43011, error, 'response').response = JSProf.LRSP(43011, JSProf.LRE(43010, response));
            throw error;
        }
        var responsePromise = JSProf.LMC(43015, JSProf.LMC(43013, def, 'then').then(JSProf.LRE(43012, okHandler)), 'otherwise').otherwise(JSProf.LRE(43014, errHandler));
        if (JSProf.LGD(43016, exports, 'notify').notify) {
            JSProf.LMC(43021, responsePromise, 'then').then(JSProf.LMC(43018, lang, 'hitch').hitch(JSProf.LGD(43017, exports, 'notify').notify, 'emit', 'load'), JSProf.LMC(43020, lang, 'hitch').hitch(JSProf.LGD(43019, exports, 'notify').notify, 'emit', 'error'));
        }
        var dataPromise = JSProf.LMC(43023, responsePromise, 'then').then(JSProf.LRE(43022, dataHandler));
        // http://bugs.dojotoolkit.org/ticket/16794
        // The following works around a leak in IE9 through the
        // prototype using lang.delegate on dataPromise and
        // assigning the result a property with a reference to
        // responsePromise.
        var promise = JSProf.LNE(43025, new (JSProf.LFC(43024, Promise, true))(), 'Promise');
        for (var prop in JSProf.LRE(43026, dataPromise)) {
            if (JSProf.LMC(43028, dataPromise, 'hasOwnProperty').hasOwnProperty(JSProf.LRE(43027, prop))) {
                JSProf.LPE(43030, promise, 'prop')[prop] = JSProf.LRPE(43030, JSProf.LGE(43029, dataPromise, 'prop')[prop]);
            }
        }
        JSProf.LPD(43032, promise, 'response').response = JSProf.LRSP(43032, JSProf.LRE(43031, responsePromise));
        JSProf.LFC(43034, freeze, false)(JSProf.LRE(43033, promise));
        // End leak fix
        if (JSProf.LRE(43035, last)) {
            JSProf.LMC(43045, def, 'then').then(JSProf.LNF(43039, function (response) {
                JSProf.LMC(43038, last, 'call').call(JSProf.LRE(43036, def), JSProf.LRE(43037, response));
            }, 12), JSProf.LNF(43044, function (error) {
                JSProf.LMC(43043, last, 'call').call(JSProf.LRE(43040, def), JSProf.LRE(43041, response), JSProf.LRE(43042, error));
            }, 12));
        }
        JSProf.LPD(43047, def, 'promise').promise = JSProf.LRSP(43047, JSProf.LRE(43046, promise));
        JSProf.LPD(43049, def, 'then').then = JSProf.LRSP(43049, JSProf.LGD(43048, promise, 'then').then);
        return JSProf.LRE(43050, def);
    }, 12));
    JSProf.LPD(43072, exports, 'addCommonMethods').addCommonMethods = JSProf.LRSP(43072, JSProf.LNF(43071, function addCommonMethods(provider, methods) {
        JSProf.LMC(43070, array, 'forEach').forEach(JSProf.LRE(43054, methods) || JSProf.LNE(43055, [
            'GET',
            'POST',
            'PUT',
            'DELETE'
        ], 10), JSProf.LNF(43069, function (method) {
            JSProf.LPE(43068, provider, JSProf.TMPS.ta712dfd5a119f6cc35bf5632caf07a47b76357f8 = (JSProf.LRE(43056, method) === 'DELETE' ? 'DEL' : JSProf.LRE(43057, method)).toLowerCase())[JSProf.TMPS.ta712dfd5a119f6cc35bf5632caf07a47b76357f8] = JSProf.LRPE(43068, JSProf.LNF(43067, function (url, options) {
                options = JSProf.LWR(43061, options, JSProf.LMC(43060, lang, 'delegate').delegate(JSProf.LRE(43058, options) || JSProf.LNE(43059, {}, 11)));
                JSProf.LPD(43063, options, 'method').method = JSProf.LRSP(43063, JSProf.LRE(43062, method));
                return JSProf.LFC(43066, provider, false)(JSProf.LRE(43064, url), JSProf.LRE(43065, options));
            }, 12));
        }, 12));
    }, 12));
    JSProf.LPD(43101, exports, 'parseArgs').parseArgs = JSProf.LRSP(43101, JSProf.LNF(43100, function parseArgs(url, options, skipData) {
        var data = JSProf.LGD(43073, options, 'data').data, query = JSProf.LGD(43074, options, 'query').query;
        if (JSProf.LRE(43075, data) && !JSProf.LRE(43076, skipData)) {
            if (typeof JSProf.LRE(43077, data) === 'object') {
                JSProf.LPD(43080, options, 'data').data = JSProf.LRSP(43080, JSProf.LMC(43079, ioQuery, 'objectToQuery').objectToQuery(JSProf.LRE(43078, data)));
            }
        }
        if (JSProf.LRE(43081, query)) {
            if (typeof JSProf.LRE(43082, query) === 'object') {
                query = JSProf.LWR(43085, query, JSProf.LMC(43084, ioQuery, 'objectToQuery').objectToQuery(JSProf.LRE(43083, query)));
            }
            if (JSProf.LGD(43086, options, 'preventCache').preventCache) {
                query += (JSProf.LRE(43087, query) ? '&' : '') + 'request.preventCache=' + +JSProf.LNE(43089, new (JSProf.LFC(43088, Date, true))(), 'Date');
            }
        } else if (JSProf.LGD(43090, options, 'preventCache').preventCache) {
            query = JSProf.LWR(43093, query, 'request.preventCache=' + +JSProf.LNE(43092, new (JSProf.LFC(43091, Date, true))(), 'Date'));
        }
        if (JSProf.LRE(43094, url) && JSProf.LRE(43095, query)) {
            url += (~JSProf.LMC(43096, url, 'indexOf').indexOf('?') ? '&' : '?') + JSProf.LRE(43097, query);
        }
        return JSProf.LNE(43099, {
            url: url,
            options: options,
            getHeader: JSProf.LNF(43098, function (headerName) {
                return null;
            }, 12)
        }, 11);
    }, 12));
    JSProf.LPD(43110, exports, 'checkStatus').checkStatus = JSProf.LRSP(43110, JSProf.LNF(43109, function (stat) {
        stat = JSProf.LWR(43103, stat, JSProf.LRE(43102, stat) || 0);
        return JSProf.LRE(43104, stat) >= 200 && JSProf.LRE(43105, stat) < 300 || JSProf.LRE(43106, stat) === 304 || JSProf.LRE(43107, stat) === 1223 || !JSProf.LRE(43108, stat);    // or, we're Titanium/browser chrome/chrome extension requesting a local file
    }, 12));
}, 12));