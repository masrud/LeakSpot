JSProf.LFC(38163, define, false)(JSProf.LNE(37913, [
    '../errors/RequestError',
    './watch',
    './handlers',
    './util',
    '../has'
], 10), JSProf.LNF(38162, function (RequestError, watch, handlers, util, has) {
    JSProf.LFD(38159, handleResponse);
    JSProf.LFD(38160, getHeader);
    JSProf.LFD(38161, xhr);
    JSProf.LMC(37916, has, 'add').add('native-xhr', JSProf.LNF(37915, function () {
        // if true, the environment has a native XHR implementation
        return typeof JSProf.LRU(37914, typeof XMLHttpRequest === 'undefined' ? undefined : XMLHttpRequest) !== 'undefined';
    }, 12));
    JSProf.LMC(37921, has, 'add').add('dojo-force-activex-xhr', JSProf.LNF(37920, function () {
        return JSProf.LFC(37917, has, false)('activex') && !JSProf.LGD(37918, document, 'addEventListener').addEventListener && JSProf.LGD(37919, window.location, 'protocol').protocol === 'file:';
    }, 12));
    JSProf.LMC(37929, has, 'add').add('native-xhr2', JSProf.LNF(37928, function () {
        if (!JSProf.LFC(37922, has, false)('native-xhr')) {
            return;
        }
        var x = JSProf.LNE(37924, new (JSProf.LFC(37923, XMLHttpRequest, true))(), 'XMLHttpRequest');
        return typeof JSProf.LGE(37925, x, 'addEventListener')['addEventListener'] !== 'undefined' && (typeof JSProf.LRU(37926, typeof opera === 'undefined' ? undefined : opera) === 'undefined' || typeof JSProf.LGE(37927, x, 'upload')['upload'] !== 'undefined');
    }, 12));
    JSProf.LMC(37932, has, 'add').add('native-formdata', JSProf.LNF(37931, function () {
        // if true, the environment has a native FormData implementation
        return typeof JSProf.LRU(37930, typeof FormData === 'undefined' ? undefined : FormData) !== 'undefined';
    }, 12));
    JSProf.LMC(37938, has, 'add').add('native-response-type', JSProf.LNF(37937, function () {
        return JSProf.LFC(37933, has, false)('native-xhr') && typeof JSProf.LGD(37936, JSProf.LNE(37935, new (JSProf.LFC(37934, XMLHttpRequest, true))(), 'XMLHttpRequest'), 'responseType').responseType !== 'undefined';
    }, 12));
    JSProf.LMC(37948, has, 'add').add('native-xhr2-blob', JSProf.LNF(37947, function () {
        if (!JSProf.LFC(37939, has, false)('native-response-type')) {
            return;
        }
        var x = JSProf.LNE(37941, new (JSProf.LFC(37940, XMLHttpRequest, true))(), 'XMLHttpRequest');
        JSProf.LMC(37942, x, 'open').open('GET', '/', true);
        JSProf.LPD(37943, x, 'responseType').responseType = JSProf.LRSP(37943, 'blob');
        // will not be set if unsupported
        var responseType = JSProf.LGD(37944, x, 'responseType').responseType;
        JSProf.LMC(37945, x, 'abort').abort();
        return JSProf.LRE(37946, responseType) === 'blob';
    }, 12));
    // Google Chrome doesn't support "json" response type
    // up to version 30, so it's intentionally not included here
    var nativeResponseTypes = JSProf.LNE(37950, {
            'blob': JSProf.LFC(37949, has, false)('native-xhr2-blob') ? 'blob' : 'arraybuffer',
            'document': 'document',
            'arraybuffer': 'arraybuffer'
        }, 11);
    function handleResponse(response, error) {
        var _xhr = JSProf.LGD(37951, response, 'xhr').xhr;
        JSProf.LPD(37953, response, 'status').status = JSProf.LRSP(37953, JSProf.LGD(37952, response.xhr, 'status').status);
        try {
            // Firefox throws an error when trying to access
            // xhr.responseText if response isn't text
            JSProf.LPD(37955, response, 'text').text = JSProf.LRSP(37955, JSProf.LGD(37954, _xhr, 'responseText').responseText);
        } catch (e) {
        }
        if (JSProf.LGD(37956, response.options, 'handleAs').handleAs === 'xml') {
            JSProf.LPD(37958, response, 'data').data = JSProf.LRSP(37958, JSProf.LGD(37957, _xhr, 'responseXML').responseXML);
        }
        if (!JSProf.LRE(37959, error)) {
            try {
                JSProf.LFC(37961, handlers, false)(JSProf.LRE(37960, response));
            } catch (e) {
                error = JSProf.LWR(37963, error, JSProf.LRE(37962, e));
            }
        }
        if (JSProf.LRE(37964, error)) {
            JSProf.LMC(37966, this, 'reject').reject(JSProf.LRE(37965, error));
        } else if (JSProf.LMC(37968, util, 'checkStatus').checkStatus(JSProf.LGD(37967, _xhr, 'status').status)) {
            JSProf.LMC(37970, this, 'resolve').resolve(JSProf.LRE(37969, response));
        } else {
            error = JSProf.LWR(37976, error, JSProf.LNE(37975, new (JSProf.LFC(37974, RequestError, true))('Unable to load ' + JSProf.LGD(37971, response, 'url').url + ' status: ' + JSProf.LGD(37972, _xhr, 'status').status, JSProf.LRE(37973, response)), 'RequestError'));
            JSProf.LMC(37978, this, 'reject').reject(JSProf.LRE(37977, error));
        }
    }
    var isValid, isReady, addListeners, cancel;
    if (JSProf.LFC(37979, has, false)('native-xhr2')) {
        // Any platform with XHR2 will only use the watch mechanism for timeout.
        isValid = JSProf.LWR(37982, isValid, JSProf.LNF(37981, function (response) {
            // summary:
            //		Check to see if the request should be taken out of the watch queue
            return !JSProf.LMC(37980, this, 'isFulfilled').isFulfilled();
        }, 12));
        cancel = JSProf.LWR(37985, cancel, JSProf.LNF(37984, function (dfd, response) {
            // summary:
            //		Canceler for deferred
            JSProf.LMC(37983, response.xhr, 'abort').abort();
        }, 12));
        addListeners = JSProf.LWR(38026, addListeners, JSProf.LNF(38025, function (_xhr, dfd, response) {
            JSProf.LFD(38022, onLoad);
            JSProf.LFD(38023, onError);
            JSProf.LFD(38024, onProgress);
            // summary:
            //		Adds event listeners to the XMLHttpRequest object
            function onLoad(evt) {
                JSProf.LMC(37987, dfd, 'handleResponse').handleResponse(JSProf.LRE(37986, response));
            }
            function onError(evt) {
                var _xhr = JSProf.LGD(37988, evt, 'target').target;
                var error = JSProf.LNE(37993, new (JSProf.LFC(37992, RequestError, true))('Unable to load ' + JSProf.LGD(37989, response, 'url').url + ' status: ' + JSProf.LGD(37990, _xhr, 'status').status, JSProf.LRE(37991, response)), 'RequestError');
                JSProf.LMC(37996, dfd, 'handleResponse').handleResponse(JSProf.LRE(37994, response), JSProf.LRE(37995, error));
            }
            function onProgress(evt) {
                if (JSProf.LGD(37997, evt, 'lengthComputable').lengthComputable) {
                    JSProf.LPD(37999, response, 'loaded').loaded = JSProf.LRSP(37999, JSProf.LGD(37998, evt, 'loaded').loaded);
                    JSProf.LPD(38001, response, 'total').total = JSProf.LRSP(38001, JSProf.LGD(38000, evt, 'total').total);
                    JSProf.LMC(38003, dfd, 'progress').progress(JSProf.LRE(38002, response));
                } else if (JSProf.LGD(38004, response.xhr, 'readyState').readyState === 3) {
                    JSProf.LPD(38006, response, 'loaded').loaded = JSProf.LRSP(38006, JSProf.LGD(38005, evt, 'position').position);
                    JSProf.LMC(38008, dfd, 'progress').progress(JSProf.LRE(38007, response));
                }
            }
            JSProf.LMC(38010, _xhr, 'addEventListener').addEventListener('load', JSProf.LRE(38009, onLoad), false);
            JSProf.LMC(38012, _xhr, 'addEventListener').addEventListener('error', JSProf.LRE(38011, onError), false);
            JSProf.LMC(38014, _xhr, 'addEventListener').addEventListener('progress', JSProf.LRE(38013, onProgress), false);
            return JSProf.LNF(38021, function () {
                JSProf.LMC(38016, _xhr, 'removeEventListener').removeEventListener('load', JSProf.LRE(38015, onLoad), false);
                JSProf.LMC(38018, _xhr, 'removeEventListener').removeEventListener('error', JSProf.LRE(38017, onError), false);
                JSProf.LMC(38020, _xhr, 'removeEventListener').removeEventListener('progress', JSProf.LRE(38019, onProgress), false);
                _xhr = null;
            }, 12);
        }, 12));
    } else {
        isValid = JSProf.LWR(38029, isValid, JSProf.LNF(38028, function (response) {
            return JSProf.LGD(38027, response.xhr, 'readyState').readyState;    //boolean
        }, 12));
        isReady = JSProf.LWR(38032, isReady, JSProf.LNF(38031, function (response) {
            return 4 === JSProf.LGD(38030, response.xhr, 'readyState').readyState;    //boolean
        }, 12));
        cancel = JSProf.LWR(38040, cancel, JSProf.LNF(38039, function (dfd, response) {
            // summary:
            //		canceller function for util.deferred call.
            var xhr = JSProf.LGD(38033, response, 'xhr').xhr;
            var _at = typeof JSProf.LGD(38034, xhr, 'abort').abort;
            if (JSProf.LRE(38035, _at) === 'function' || JSProf.LRE(38036, _at) === 'object' || JSProf.LRE(38037, _at) === 'unknown') {
                JSProf.LMC(38038, xhr, 'abort').abort();
            }
        }, 12));
    }
    function getHeader(headerName) {
        return JSProf.LMC(38042, this.xhr, 'getResponseHeader').getResponseHeader(JSProf.LRE(38041, headerName));
    }
    var undefined, defaultOptions = JSProf.LNE(38043, {
            data: null,
            query: null,
            sync: false,
            method: 'GET'
        }, 11);
    function xhr(url, options, returnDeferred) {
        var isFormData = JSProf.LFC(38044, has, false)('native-formdata') && JSProf.LRE(38045, options) && JSProf.LGD(38046, options, 'data').data && JSProf.LGD(38047, options, 'data').data instanceof JSProf.LRU(38048, typeof FormData === 'undefined' ? undefined : FormData);
        var response = JSProf.LMC(38054, util, 'parseArgs').parseArgs(JSProf.LRE(38049, url), JSProf.LMC(38052, util, 'deepCreate').deepCreate(JSProf.LRE(38050, defaultOptions), JSProf.LRE(38051, options)), JSProf.LRE(38053, isFormData));
        url = JSProf.LWR(38056, url, JSProf.LGD(38055, response, 'url').url);
        options = JSProf.LWR(38058, options, JSProf.LGD(38057, response, 'options').options);
        var remover, last = JSProf.LNF(38061, function () {
                JSProf.LRE(38059, remover) && JSProf.LFC(38060, remover, false)();
            }, 12);
        //Make the Deferred object for this xhr request.
        var dfd = JSProf.LMC(38068, util, 'deferred').deferred(JSProf.LRE(38062, response), JSProf.LRE(38063, cancel), JSProf.LRE(38064, isValid), JSProf.LRE(38065, isReady), JSProf.LRE(38066, handleResponse), JSProf.LRE(38067, last));
        var _xhr = JSProf.LPD(38070, response, 'xhr').xhr = JSProf.LRSP(38070, JSProf.LMC(38069, xhr, '_create')._create());
        if (!JSProf.LRE(38071, _xhr)) {
            // If XHR factory somehow returns nothings,
            // cancel the deferred.
            JSProf.LMC(38074, dfd, 'cancel').cancel(JSProf.LNE(38073, new (JSProf.LFC(38072, RequestError, true))('XHR was not created'), 'RequestError'));
            return JSProf.LRE(38075, returnDeferred) ? JSProf.LRE(38076, dfd) : JSProf.LGD(38077, dfd, 'promise').promise;
        }
        JSProf.LPD(38079, response, 'getHeader').getHeader = JSProf.LRSP(38079, JSProf.LRE(38078, getHeader));
        if (JSProf.LRE(38080, addListeners)) {
            remover = JSProf.LWR(38085, remover, JSProf.LFC(38084, addListeners, false)(JSProf.LRE(38081, _xhr), JSProf.LRE(38082, dfd), JSProf.LRE(38083, response)));
        }
        var data = JSProf.LGD(38086, options, 'data').data, async = !JSProf.LGD(38087, options, 'sync').sync, method = JSProf.LGD(38088, options, 'method').method;
        try {
            // IE6 won't let you call apply() on the native function.
            JSProf.LMC(38094, _xhr, 'open').open(JSProf.LRE(38089, method), JSProf.LRE(38090, url), JSProf.LRE(38091, async), JSProf.LGD(38092, options, 'user').user || undefined, JSProf.LGD(38093, options, 'password').password || undefined);
            if (JSProf.LGD(38095, options, 'withCredentials').withCredentials) {
                JSProf.LPD(38097, _xhr, 'withCredentials').withCredentials = JSProf.LRSP(38097, JSProf.LGD(38096, options, 'withCredentials').withCredentials);
            }
            if (JSProf.LFC(38098, has, false)('native-response-type') && JSProf.LGD(38099, options, 'handleAs').handleAs in JSProf.LRE(38100, nativeResponseTypes)) {
                JSProf.LPD(38102, _xhr, 'responseType').responseType = JSProf.LRSP(38102, JSProf.LGE(38101, nativeResponseTypes, JSProf.TMPS.t46c73cb702be9b2971ce36e68c8eb608ffdeb4df = options.handleAs)[JSProf.TMPS.t46c73cb702be9b2971ce36e68c8eb608ffdeb4df]);
            }
            var headers = JSProf.LGD(38103, options, 'headers').headers, contentType = JSProf.LRE(38104, isFormData) ? false : 'application/x-www-form-urlencoded';
            if (JSProf.LRE(38105, headers)) {
                for (var hdr in JSProf.LRE(38106, headers)) {
                    if (hdr.toLowerCase() === 'content-type') {
                        contentType = JSProf.LWR(38108, contentType, JSProf.LGE(38107, headers, 'hdr')[hdr]);
                    } else if (JSProf.LGE(38109, headers, 'hdr')[hdr]) {
                        //Only add header if it has a value. This allows for instance, skipping
                        //insertion of X-Requested-With by specifying empty value.
                        JSProf.LMC(38112, _xhr, 'setRequestHeader').setRequestHeader(JSProf.LRE(38110, hdr), JSProf.LGE(38111, headers, 'hdr')[hdr]);
                    }
                }
            }
            if (JSProf.LRE(38113, contentType) && JSProf.LRE(38114, contentType) !== false) {
                JSProf.LMC(38116, _xhr, 'setRequestHeader').setRequestHeader('Content-Type', JSProf.LRE(38115, contentType));
            }
            if (!JSProf.LRE(38117, headers) || !('X-Requested-With' in JSProf.LRE(38118, headers))) {
                JSProf.LMC(38119, _xhr, 'setRequestHeader').setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            }
            if (JSProf.LGD(38120, util, 'notify').notify) {
                JSProf.LMC(38123, util.notify, 'emit').emit('send', JSProf.LRE(38121, response), JSProf.LGD(38122, dfd.promise, 'cancel').cancel);
            }
            JSProf.LMC(38125, _xhr, 'send').send(JSProf.LRE(38124, data));
        } catch (e) {
            JSProf.LMC(38127, dfd, 'reject').reject(JSProf.LRE(38126, e));
        }
        JSProf.LFC(38129, watch, false)(JSProf.LRE(38128, dfd));
        _xhr = null;
        return JSProf.LRE(38130, returnDeferred) ? JSProf.LRE(38131, dfd) : JSProf.LGD(38132, dfd, 'promise').promise;
    }
    /*=====
    	xhr = function(url, options){
    		// summary:
    		//		Sends a request using XMLHttpRequest with the given URL and options.
    		// url: String
    		//		URL to request
    		// options: dojo/request/xhr.__Options?
    		//		Options for the request.
    		// returns: dojo/request.__Promise
    	};
    	xhr.__BaseOptions = declare(request.__BaseOptions, {
    		// sync: Boolean?
    		//		Whether to make a synchronous request or not. Default
    		//		is `false` (asynchronous).
    		// data: String|Object|FormData?
    		//		Data to transfer. This is ignored for GET and DELETE
    		//		requests.
    		// headers: Object?
    		//		Headers to use for the request.
    		// user: String?
    		//		Username to use during the request.
    		// password: String?
    		//		Password to use during the request.
    		// withCredentials: Boolean?
    		//		For cross-site requests, whether to send credentials
    		//		or not.
    	});
    	xhr.__MethodOptions = declare(null, {
    		// method: String?
    		//		The HTTP method to use to make the request. Must be
    		//		uppercase. Default is `"GET"`.
    	});
    	xhr.__Options = declare([xhr.__BaseOptions, xhr.__MethodOptions]);
    
    	xhr.get = function(url, options){
    		// summary:
    		//		Send an HTTP GET request using XMLHttpRequest with the given URL and options.
    		// url: String
    		//		URL to request
    		// options: dojo/request/xhr.__BaseOptions?
    		//		Options for the request.
    		// returns: dojo/request.__Promise
    	};
    	xhr.post = function(url, options){
    		// summary:
    		//		Send an HTTP POST request using XMLHttpRequest with the given URL and options.
    		// url: String
    		//		URL to request
    		// options: dojo/request/xhr.__BaseOptions?
    		//		Options for the request.
    		// returns: dojo/request.__Promise
    	};
    	xhr.put = function(url, options){
    		// summary:
    		//		Send an HTTP PUT request using XMLHttpRequest with the given URL and options.
    		// url: String
    		//		URL to request
    		// options: dojo/request/xhr.__BaseOptions?
    		//		Options for the request.
    		// returns: dojo/request.__Promise
    	};
    	xhr.del = function(url, options){
    		// summary:
    		//		Send an HTTP DELETE request using XMLHttpRequest with the given URL and options.
    		// url: String
    		//		URL to request
    		// options: dojo/request/xhr.__BaseOptions?
    		//		Options for the request.
    		// returns: dojo/request.__Promise
    	};
    	=====*/
    JSProf.LPD(38136, xhr, '_create')._create = JSProf.LRSP(38136, JSProf.LNF(38135, function () {
        // summary:
        //		does the work of portably generating a new XMLHTTPRequest object.
        throw JSProf.LNE(38134, new (JSProf.LFC(38133, Error, true))('XMLHTTP not available'), 'Error');
    }, 12));
    if (JSProf.LFC(38137, has, false)('native-xhr') && !JSProf.LFC(38138, has, false)('dojo-force-activex-xhr')) {
        JSProf.LPD(38142, xhr, '_create')._create = JSProf.LRSP(38142, JSProf.LNF(38141, function () {
            return JSProf.LNE(38140, new (JSProf.LFC(38139, XMLHttpRequest, true))(), 'XMLHttpRequest');
        }, 12));
    } else if (JSProf.LFC(38143, has, false)('activex')) {
        try {
            JSProf.LNE(38145, new (JSProf.LFC(38144, ActiveXObject, true))('Msxml2.XMLHTTP'), 'ActiveXObject');
            JSProf.LPD(38149, xhr, '_create')._create = JSProf.LRSP(38149, JSProf.LNF(38148, function () {
                return JSProf.LNE(38147, new (JSProf.LFC(38146, ActiveXObject, true))('Msxml2.XMLHTTP'), 'ActiveXObject');
            }, 12));
        } catch (e) {
            try {
                JSProf.LNE(38151, new (JSProf.LFC(38150, ActiveXObject, true))('Microsoft.XMLHTTP'), 'ActiveXObject');
                JSProf.LPD(38155, xhr, '_create')._create = JSProf.LRSP(38155, JSProf.LNF(38154, function () {
                    return JSProf.LNE(38153, new (JSProf.LFC(38152, ActiveXObject, true))('Microsoft.XMLHTTP'), 'ActiveXObject');
                }, 12));
            } catch (e) {
            }
        }
    }
    JSProf.LMC(38157, util, 'addCommonMethods').addCommonMethods(JSProf.LRE(38156, xhr));
    return JSProf.LRE(38158, xhr);
}, 12));