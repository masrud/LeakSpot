JSProf.LFC(42951, define, false)(JSProf.LNE(42779, [
    'exports',
    '../errors/RequestError',
    '../errors/CancelError',
    '../Deferred',
    '../io-query',
    '../_base/array',
    '../_base/lang',
    '../promise/Promise'
], 10), JSProf.LNF(42950, function (exports, RequestError, CancelError, Deferred, ioQuery, array, lang, Promise) {
    JSProf.LFD(42948, okHandler);
    JSProf.LFD(42949, dataHandler);
    JSProf.LPD(42796, exports, 'deepCopy').deepCopy = JSProf.LRSP(42796, JSProf.LNF(42795, function deepCopy(target, source) {
        for (var name in JSProf.LRE(42780, source)) {
            var tval = JSProf.LGE(42781, target, 'name')[name], sval = JSProf.LGE(42782, source, 'name')[name];
            if (JSProf.LRE(42783, tval) !== JSProf.LRE(42784, sval)) {
                if (JSProf.LRE(42785, tval) && typeof JSProf.LRE(42786, tval) === 'object' && JSProf.LRE(42787, sval) && typeof JSProf.LRE(42788, sval) === 'object') {
                    JSProf.LMC(42791, exports, 'deepCopy').deepCopy(JSProf.LRE(42789, tval), JSProf.LRE(42790, sval));
                } else {
                    JSProf.LPE(42793, target, 'name')[name] = JSProf.LRPE(42793, JSProf.LRE(42792, sval));
                }
            }
        }
        return JSProf.LRE(42794, target);
    }, 12));
    JSProf.LPD(42815, exports, 'deepCreate').deepCreate = JSProf.LRSP(42815, JSProf.LNF(42814, function deepCreate(source, properties) {
        properties = JSProf.LWR(42799, properties, JSProf.LRE(42797, properties) || JSProf.LNE(42798, {}, 11));
        var target = JSProf.LMC(42801, lang, 'delegate').delegate(JSProf.LRE(42800, source)), name, value;
        for (name in JSProf.LRE(42802, source)) {
            value = JSProf.LWR(42804, value, JSProf.LGE(42803, source, 'name')[name]);
            if (JSProf.LRE(42805, value) && typeof JSProf.LRE(42806, value) === 'object') {
                JSProf.LPE(42810, target, 'name')[name] = JSProf.LRPE(42810, JSProf.LMC(42809, exports, 'deepCreate').deepCreate(JSProf.LRE(42807, value), JSProf.LGE(42808, properties, 'name')[name]));
            }
        }
        return JSProf.LMC(42813, exports, 'deepCopy').deepCopy(JSProf.LRE(42811, target), JSProf.LRE(42812, properties));
    }, 12));
    var freeze = JSProf.LGD(42816, Object, 'freeze').freeze || JSProf.LNF(42818, function (obj) {
            return JSProf.LRE(42817, obj);
        }, 12);
    function okHandler(response) {
        return JSProf.LFC(42820, freeze, false)(JSProf.LRE(42819, response));
    }
    function dataHandler(response) {
        return JSProf.LGD(42821, response, 'data').data || JSProf.LGD(42822, response, 'text').text;
    }
    JSProf.LPD(42890, exports, 'deferred').deferred = JSProf.LRSP(42890, JSProf.LNF(42889, function deferred(response, cancel, isValid, isReady, handleResponse, last) {
        JSProf.LFD(42888, errHandler);
        var def = JSProf.LNE(42838, new (JSProf.LFC(42837, Deferred, true))(JSProf.LNF(42836, function (reason) {
                JSProf.LRE(42823, cancel) && JSProf.LFC(42826, cancel, false)(JSProf.LRE(42824, def), JSProf.LRE(42825, response));
                if (!JSProf.LRE(42827, reason) || !(JSProf.LRE(42828, reason) instanceof JSProf.LRE(42829, RequestError)) && !(JSProf.LRE(42830, reason) instanceof JSProf.LRE(42831, CancelError))) {
                    return JSProf.LNE(42834, new (JSProf.LFC(42833, CancelError, true))('Request canceled', JSProf.LRE(42832, response)), 'CancelError');
                }
                return JSProf.LRE(42835, reason);
            }, 12)), 'Deferred');
        JSProf.LPD(42840, def, 'response').response = JSProf.LRSP(42840, JSProf.LRE(42839, response));
        JSProf.LPD(42842, def, 'isValid').isValid = JSProf.LRSP(42842, JSProf.LRE(42841, isValid));
        JSProf.LPD(42844, def, 'isReady').isReady = JSProf.LRSP(42844, JSProf.LRE(42843, isReady));
        JSProf.LPD(42846, def, 'handleResponse').handleResponse = JSProf.LRSP(42846, JSProf.LRE(42845, handleResponse));
        function errHandler(error) {
            JSProf.LPD(42848, error, 'response').response = JSProf.LRSP(42848, JSProf.LRE(42847, response));
            throw error;
        }
        var responsePromise = JSProf.LMC(42852, JSProf.LMC(42850, def, 'then').then(JSProf.LRE(42849, okHandler)), 'otherwise').otherwise(JSProf.LRE(42851, errHandler));
        if (JSProf.LGD(42853, exports, 'notify').notify) {
            JSProf.LMC(42858, responsePromise, 'then').then(JSProf.LMC(42855, lang, 'hitch').hitch(JSProf.LGD(42854, exports, 'notify').notify, 'emit', 'load'), JSProf.LMC(42857, lang, 'hitch').hitch(JSProf.LGD(42856, exports, 'notify').notify, 'emit', 'error'));
        }
        var dataPromise = JSProf.LMC(42860, responsePromise, 'then').then(JSProf.LRE(42859, dataHandler));
        // http://bugs.dojotoolkit.org/ticket/16794
        // The following works around a leak in IE9 through the
        // prototype using lang.delegate on dataPromise and
        // assigning the result a property with a reference to
        // responsePromise.
        var promise = JSProf.LNE(42862, new (JSProf.LFC(42861, Promise, true))(), 'Promise');
        for (var prop in JSProf.LRE(42863, dataPromise)) {
            if (JSProf.LMC(42865, dataPromise, 'hasOwnProperty').hasOwnProperty(JSProf.LRE(42864, prop))) {
                JSProf.LPE(42867, promise, 'prop')[prop] = JSProf.LRPE(42867, JSProf.LGE(42866, dataPromise, 'prop')[prop]);
            }
        }
        JSProf.LPD(42869, promise, 'response').response = JSProf.LRSP(42869, JSProf.LRE(42868, responsePromise));
        JSProf.LFC(42871, freeze, false)(JSProf.LRE(42870, promise));
        // End leak fix
        if (JSProf.LRE(42872, last)) {
            JSProf.LMC(42882, def, 'then').then(JSProf.LNF(42876, function (response) {
                JSProf.LMC(42875, last, 'call').call(JSProf.LRE(42873, def), JSProf.LRE(42874, response));
            }, 12), JSProf.LNF(42881, function (error) {
                JSProf.LMC(42880, last, 'call').call(JSProf.LRE(42877, def), JSProf.LRE(42878, response), JSProf.LRE(42879, error));
            }, 12));
        }
        JSProf.LPD(42884, def, 'promise').promise = JSProf.LRSP(42884, JSProf.LRE(42883, promise));
        JSProf.LPD(42886, def, 'then').then = JSProf.LRSP(42886, JSProf.LGD(42885, promise, 'then').then);
        return JSProf.LRE(42887, def);
    }, 12));
    JSProf.LPD(42909, exports, 'addCommonMethods').addCommonMethods = JSProf.LRSP(42909, JSProf.LNF(42908, function addCommonMethods(provider, methods) {
        JSProf.LMC(42907, array, 'forEach').forEach(JSProf.LRE(42891, methods) || JSProf.LNE(42892, [
            'GET',
            'POST',
            'PUT',
            'DELETE'
        ], 10), JSProf.LNF(42906, function (method) {
            JSProf.LPE(42905, provider, JSProf.TMPS.ta712dfd5a119f6cc35bf5632caf07a47b76357f8 = (JSProf.LRE(42893, method) === 'DELETE' ? 'DEL' : JSProf.LRE(42894, method)).toLowerCase())[JSProf.TMPS.ta712dfd5a119f6cc35bf5632caf07a47b76357f8] = JSProf.LRPE(42905, JSProf.LNF(42904, function (url, options) {
                options = JSProf.LWR(42898, options, JSProf.LMC(42897, lang, 'delegate').delegate(JSProf.LRE(42895, options) || JSProf.LNE(42896, {}, 11)));
                JSProf.LPD(42900, options, 'method').method = JSProf.LRSP(42900, JSProf.LRE(42899, method));
                return JSProf.LFC(42903, provider, false)(JSProf.LRE(42901, url), JSProf.LRE(42902, options));
            }, 12));
        }, 12));
    }, 12));
    JSProf.LPD(42938, exports, 'parseArgs').parseArgs = JSProf.LRSP(42938, JSProf.LNF(42937, function parseArgs(url, options, skipData) {
        var data = JSProf.LGD(42910, options, 'data').data, query = JSProf.LGD(42911, options, 'query').query;
        if (JSProf.LRE(42912, data) && !JSProf.LRE(42913, skipData)) {
            if (typeof JSProf.LRE(42914, data) === 'object') {
                JSProf.LPD(42917, options, 'data').data = JSProf.LRSP(42917, JSProf.LMC(42916, ioQuery, 'objectToQuery').objectToQuery(JSProf.LRE(42915, data)));
            }
        }
        if (JSProf.LRE(42918, query)) {
            if (typeof JSProf.LRE(42919, query) === 'object') {
                query = JSProf.LWR(42922, query, JSProf.LMC(42921, ioQuery, 'objectToQuery').objectToQuery(JSProf.LRE(42920, query)));
            }
            if (JSProf.LGD(42923, options, 'preventCache').preventCache) {
                query += (JSProf.LRE(42924, query) ? '&' : '') + 'request.preventCache=' + +JSProf.LNE(42926, new (JSProf.LFC(42925, Date, true))(), 'Date');
            }
        } else if (JSProf.LGD(42927, options, 'preventCache').preventCache) {
            query = JSProf.LWR(42930, query, 'request.preventCache=' + +JSProf.LNE(42929, new (JSProf.LFC(42928, Date, true))(), 'Date'));
        }
        if (JSProf.LRE(42931, url) && JSProf.LRE(42932, query)) {
            url += (~JSProf.LMC(42933, url, 'indexOf').indexOf('?') ? '&' : '?') + JSProf.LRE(42934, query);
        }
        return JSProf.LNE(42936, {
            url: url,
            options: options,
            getHeader: JSProf.LNF(42935, function (headerName) {
                return null;
            }, 12)
        }, 11);
    }, 12));
    JSProf.LPD(42947, exports, 'checkStatus').checkStatus = JSProf.LRSP(42947, JSProf.LNF(42946, function (stat) {
        stat = JSProf.LWR(42940, stat, JSProf.LRE(42939, stat) || 0);
        return JSProf.LRE(42941, stat) >= 200 && JSProf.LRE(42942, stat) < 300 || JSProf.LRE(42943, stat) === 304 || JSProf.LRE(42944, stat) === 1223 || !JSProf.LRE(42945, stat);    // or, we're Titanium/browser chrome/chrome extension requesting a local file
    }, 12));
}, 12));