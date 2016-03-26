JSProf.LFC(38165, define, false)(JSProf.LNE(37915, [
    '../errors/RequestError',
    './watch',
    './handlers',
    './util',
    '../has'
], 10), JSProf.LNF(38164, function (RequestError, watch, handlers, util, has) {
    JSProf.LFD(38161, handleResponse);
    JSProf.LFD(38162, getHeader);
    JSProf.LFD(38163, xhr);
    JSProf.LMC(37918, has, 'add').add('native-xhr', JSProf.LNF(37917, function () {
        // if true, the environment has a native XHR implementation
        return typeof JSProf.LRU(37916, typeof XMLHttpRequest === 'undefined' ? undefined : XMLHttpRequest) !== 'undefined';
    }, 12));
    JSProf.LMC(37923, has, 'add').add('dojo-force-activex-xhr', JSProf.LNF(37922, function () {
        return JSProf.LFC(37919, has, false)('activex') && !JSProf.LGD(37920, document, 'addEventListener').addEventListener && JSProf.LGD(37921, window.location, 'protocol').protocol === 'file:';
    }, 12));
    JSProf.LMC(37931, has, 'add').add('native-xhr2', JSProf.LNF(37930, function () {
        if (!JSProf.LFC(37924, has, false)('native-xhr')) {
            return;
        }
        var x = JSProf.LNE(37926, new (JSProf.LFC(37925, XMLHttpRequest, true))(), 'XMLHttpRequest');
        return typeof JSProf.LGE(37927, x, 'addEventListener')['addEventListener'] !== 'undefined' && (typeof JSProf.LRU(37928, typeof opera === 'undefined' ? undefined : opera) === 'undefined' || typeof JSProf.LGE(37929, x, 'upload')['upload'] !== 'undefined');
    }, 12));
    JSProf.LMC(37934, has, 'add').add('native-formdata', JSProf.LNF(37933, function () {
        // if true, the environment has a native FormData implementation
        return typeof JSProf.LRU(37932, typeof FormData === 'undefined' ? undefined : FormData) !== 'undefined';
    }, 12));
    JSProf.LMC(37940, has, 'add').add('native-response-type', JSProf.LNF(37939, function () {
        return JSProf.LFC(37935, has, false)('native-xhr') && typeof JSProf.LGD(37938, JSProf.LNE(37937, new (JSProf.LFC(37936, XMLHttpRequest, true))(), 'XMLHttpRequest'), 'responseType').responseType !== 'undefined';
    }, 12));
    JSProf.LMC(37950, has, 'add').add('native-xhr2-blob', JSProf.LNF(37949, function () {
        if (!JSProf.LFC(37941, has, false)('native-response-type')) {
            return;
        }
        var x = JSProf.LNE(37943, new (JSProf.LFC(37942, XMLHttpRequest, true))(), 'XMLHttpRequest');
        JSProf.LMC(37944, x, 'open').open('GET', '/', true);
        JSProf.LPD(37945, x, 'responseType').responseType = JSProf.LRSP(37945, 'blob');
        // will not be set if unsupported
        var responseType = JSProf.LGD(37946, x, 'responseType').responseType;
        JSProf.LMC(37947, x, 'abort').abort();
        return JSProf.LRE(37948, responseType) === 'blob';
    }, 12));
    // Google Chrome doesn't support "json" response type
    // up to version 30, so it's intentionally not included here
    var nativeResponseTypes = JSProf.LNE(37952, {
            'blob': JSProf.LFC(37951, has, false)('native-xhr2-blob') ? 'blob' : 'arraybuffer',
            'document': 'document',
            'arraybuffer': 'arraybuffer'
        }, 11);
    function handleResponse(response, error) {
        var _xhr = JSProf.LGD(37953, response, 'xhr').xhr;
        JSProf.LPD(37955, response, 'status').status = JSProf.LRSP(37955, JSProf.LGD(37954, response.xhr, 'status').status);
        try {
            // Firefox throws an error when trying to access
            // xhr.responseText if response isn't text
            JSProf.LPD(37957, response, 'text').text = JSProf.LRSP(37957, JSProf.LGD(37956, _xhr, 'responseText').responseText);
        } catch (e) {
        }
        if (JSProf.LGD(37958, response.options, 'handleAs').handleAs === 'xml') {
            JSProf.LPD(37960, response, 'data').data = JSProf.LRSP(37960, JSProf.LGD(37959, _xhr, 'responseXML').responseXML);
        }
        if (!JSProf.LRE(37961, error)) {
            try {
                JSProf.LFC(37963, handlers, false)(JSProf.LRE(37962, response));
            } catch (e) {
                error = JSProf.LWR(37965, error, JSProf.LRE(37964, e));
            }
        }
        if (JSProf.LRE(37966, error)) {
            JSProf.LMC(37968, this, 'reject').reject(JSProf.LRE(37967, error));
        } else if (JSProf.LMC(37970, util, 'checkStatus').checkStatus(JSProf.LGD(37969, _xhr, 'status').status)) {
            JSProf.LMC(37972, this, 'resolve').resolve(JSProf.LRE(37971, response));
        } else {
            error = JSProf.LWR(37978, error, JSProf.LNE(37977, new (JSProf.LFC(37976, RequestError, true))('Unable to load ' + JSProf.LGD(37973, response, 'url').url + ' status: ' + JSProf.LGD(37974, _xhr, 'status').status, JSProf.LRE(37975, response)), 'RequestError'));
            JSProf.LMC(37980, this, 'reject').reject(JSProf.LRE(37979, error));
        }
    }
    var isValid, isReady, addListeners, cancel;
    if (JSProf.LFC(37981, has, false)('native-xhr2')) {
        // Any platform with XHR2 will only use the watch mechanism for timeout.
        isValid = JSProf.LWR(37984, isValid, JSProf.LNF(37983, function (response) {
            // summary:
            //		Check to see if the request should be taken out of the watch queue
            return !JSProf.LMC(37982, this, 'isFulfilled').isFulfilled();
        }, 12));
        cancel = JSProf.LWR(37987, cancel, JSProf.LNF(37986, function (dfd, response) {
            // summary:
            //		Canceler for deferred
            JSProf.LMC(37985, response.xhr, 'abort').abort();
        }, 12));
        addListeners = JSProf.LWR(38028, addListeners, JSProf.LNF(38027, function (_xhr, dfd, response) {
            JSProf.LFD(38024, onLoad);
            JSProf.LFD(38025, onError);
            JSProf.LFD(38026, onProgress);
            // summary:
            //		Adds event listeners to the XMLHttpRequest object
            function onLoad(evt) {
                JSProf.LMC(37989, dfd, 'handleResponse').handleResponse(JSProf.LRE(37988, response));
            }
            function onError(evt) {
                var _xhr = JSProf.LGD(37990, evt, 'target').target;
                var error = JSProf.LNE(37995, new (JSProf.LFC(37994, RequestError, true))('Unable to load ' + JSProf.LGD(37991, response, 'url').url + ' status: ' + JSProf.LGD(37992, _xhr, 'status').status, JSProf.LRE(37993, response)), 'RequestError');
                JSProf.LMC(37998, dfd, 'handleResponse').handleResponse(JSProf.LRE(37996, response), JSProf.LRE(37997, error));
            }
            function onProgress(evt) {
                if (JSProf.LGD(37999, evt, 'lengthComputable').lengthComputable) {
                    JSProf.LPD(38001, response, 'loaded').loaded = JSProf.LRSP(38001, JSProf.LGD(38000, evt, 'loaded').loaded);
                    JSProf.LPD(38003, response, 'total').total = JSProf.LRSP(38003, JSProf.LGD(38002, evt, 'total').total);
                    JSProf.LMC(38005, dfd, 'progress').progress(JSProf.LRE(38004, response));
                } else if (JSProf.LGD(38006, response.xhr, 'readyState').readyState === 3) {
                    JSProf.LPD(38008, response, 'loaded').loaded = JSProf.LRSP(38008, JSProf.LGD(38007, evt, 'position').position);
                    JSProf.LMC(38010, dfd, 'progress').progress(JSProf.LRE(38009, response));
                }
            }
            JSProf.LMC(38012, _xhr, 'addEventListener').addEventListener('load', JSProf.LRE(38011, onLoad), false);
            JSProf.LMC(38014, _xhr, 'addEventListener').addEventListener('error', JSProf.LRE(38013, onError), false);
            JSProf.LMC(38016, _xhr, 'addEventListener').addEventListener('progress', JSProf.LRE(38015, onProgress), false);
            return JSProf.LNF(38023, function () {
                JSProf.LMC(38018, _xhr, 'removeEventListener').removeEventListener('load', JSProf.LRE(38017, onLoad), false);
                JSProf.LMC(38020, _xhr, 'removeEventListener').removeEventListener('error', JSProf.LRE(38019, onError), false);
                JSProf.LMC(38022, _xhr, 'removeEventListener').removeEventListener('progress', JSProf.LRE(38021, onProgress), false);
                _xhr = null;
            }, 12);
        }, 12));
    } else {
        isValid = JSProf.LWR(38031, isValid, JSProf.LNF(38030, function (response) {
            return JSProf.LGD(38029, response.xhr, 'readyState').readyState;    //boolean
        }, 12));
        isReady = JSProf.LWR(38034, isReady, JSProf.LNF(38033, function (response) {
            return 4 === JSProf.LGD(38032, response.xhr, 'readyState').readyState;    //boolean
        }, 12));
        cancel = JSProf.LWR(38042, cancel, JSProf.LNF(38041, function (dfd, response) {
            // summary:
            //		canceller function for util.deferred call.
            var xhr = JSProf.LGD(38035, response, 'xhr').xhr;
            var _at = typeof JSProf.LGD(38036, xhr, 'abort').abort;
            if (JSProf.LRE(38037, _at) === 'function' || JSProf.LRE(38038, _at) === 'object' || JSProf.LRE(38039, _at) === 'unknown') {
                JSProf.LMC(38040, xhr, 'abort').abort();
            }
        }, 12));
    }
    function getHeader(headerName) {
        return JSProf.LMC(38044, this.xhr, 'getResponseHeader').getResponseHeader(JSProf.LRE(38043, headerName));
    }
    var undefined, defaultOptions = JSProf.LNE(38045, {
            data: null,
            query: null,
            sync: false,
            method: 'GET'
        }, 11);
    function xhr(url, options, returnDeferred) {
        var isFormData = JSProf.LFC(38046, has, false)('native-formdata') && JSProf.LRE(38047, options) && JSProf.LGD(38048, options, 'data').data && JSProf.LGD(38049, options, 'data').data instanceof JSProf.LRU(38050, typeof FormData === 'undefined' ? undefined : FormData);
        var response = JSProf.LMC(38056, util, 'parseArgs').parseArgs(JSProf.LRE(38051, url), JSProf.LMC(38054, util, 'deepCreate').deepCreate(JSProf.LRE(38052, defaultOptions), JSProf.LRE(38053, options)), JSProf.LRE(38055, isFormData));
        url = JSProf.LWR(38058, url, JSProf.LGD(38057, response, 'url').url);
        options = JSProf.LWR(38060, options, JSProf.LGD(38059, response, 'options').options);
        var remover, last = JSProf.LNF(38063, function () {
                JSProf.LRE(38061, remover) && JSProf.LFC(38062, remover, false)();
            }, 12);
        //Make the Deferred object for this xhr request.
        var dfd = JSProf.LMC(38070, util, 'deferred').deferred(JSProf.LRE(38064, response), JSProf.LRE(38065, cancel), JSProf.LRE(38066, isValid), JSProf.LRE(38067, isReady), JSProf.LRE(38068, handleResponse), JSProf.LRE(38069, last));
        var _xhr = JSProf.LPD(38072, response, 'xhr').xhr = JSProf.LRSP(38072, JSProf.LMC(38071, xhr, '_create')._create());
        if (!JSProf.LRE(38073, _xhr)) {
            // If XHR factory somehow returns nothings,
            // cancel the deferred.
            JSProf.LMC(38076, dfd, 'cancel').cancel(JSProf.LNE(38075, new (JSProf.LFC(38074, RequestError, true))('XHR was not created'), 'RequestError'));
            return JSProf.LRE(38077, returnDeferred) ? JSProf.LRE(38078, dfd) : JSProf.LGD(38079, dfd, 'promise').promise;
        }
        JSProf.LPD(38081, response, 'getHeader').getHeader = JSProf.LRSP(38081, JSProf.LRE(38080, getHeader));
        if (JSProf.LRE(38082, addListeners)) {
            remover = JSProf.LWR(38087, remover, JSProf.LFC(38086, addListeners, false)(JSProf.LRE(38083, _xhr), JSProf.LRE(38084, dfd), JSProf.LRE(38085, response)));
        }
        var data = JSProf.LGD(38088, options, 'data').data, async = !JSProf.LGD(38089, options, 'sync').sync, method = JSProf.LGD(38090, options, 'method').method;
        try {
            // IE6 won't let you call apply() on the native function.
            JSProf.LMC(38096, _xhr, 'open').open(JSProf.LRE(38091, method), JSProf.LRE(38092, url), JSProf.LRE(38093, async), JSProf.LGD(38094, options, 'user').user || undefined, JSProf.LGD(38095, options, 'password').password || undefined);
            if (JSProf.LGD(38097, options, 'withCredentials').withCredentials) {
                JSProf.LPD(38099, _xhr, 'withCredentials').withCredentials = JSProf.LRSP(38099, JSProf.LGD(38098, options, 'withCredentials').withCredentials);
            }
            if (JSProf.LFC(38100, has, false)('native-response-type') && JSProf.LGD(38101, options, 'handleAs').handleAs in JSProf.LRE(38102, nativeResponseTypes)) {
                JSProf.LPD(38104, _xhr, 'responseType').responseType = JSProf.LRSP(38104, JSProf.LGE(38103, nativeResponseTypes, JSProf.TMPS.t46c73cb702be9b2971ce36e68c8eb608ffdeb4df = options.handleAs)[JSProf.TMPS.t46c73cb702be9b2971ce36e68c8eb608ffdeb4df]);
            }
            var headers = JSProf.LGD(38105, options, 'headers').headers, contentType = JSProf.LRE(38106, isFormData) ? false : 'application/x-www-form-urlencoded';
            if (JSProf.LRE(38107, headers)) {
                for (var hdr in JSProf.LRE(38108, headers)) {
                    if (hdr.toLowerCase() === 'content-type') {
                        contentType = JSProf.LWR(38110, contentType, JSProf.LGE(38109, headers, 'hdr')[hdr]);
                    } else if (JSProf.LGE(38111, headers, 'hdr')[hdr]) {
                        //Only add header if it has a value. This allows for instance, skipping
                        //insertion of X-Requested-With by specifying empty value.
                        JSProf.LMC(38114, _xhr, 'setRequestHeader').setRequestHeader(JSProf.LRE(38112, hdr), JSProf.LGE(38113, headers, 'hdr')[hdr]);
                    }
                }
            }
            if (JSProf.LRE(38115, contentType) && JSProf.LRE(38116, contentType) !== false) {
                JSProf.LMC(38118, _xhr, 'setRequestHeader').setRequestHeader('Content-Type', JSProf.LRE(38117, contentType));
            }
            if (!JSProf.LRE(38119, headers) || !('X-Requested-With' in JSProf.LRE(38120, headers))) {
                JSProf.LMC(38121, _xhr, 'setRequestHeader').setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            }
            if (JSProf.LGD(38122, util, 'notify').notify) {
                JSProf.LMC(38125, util.notify, 'emit').emit('send', JSProf.LRE(38123, response), JSProf.LGD(38124, dfd.promise, 'cancel').cancel);
            }
            JSProf.LMC(38127, _xhr, 'send').send(JSProf.LRE(38126, data));
        } catch (e) {
            JSProf.LMC(38129, dfd, 'reject').reject(JSProf.LRE(38128, e));
        }
        JSProf.LFC(38131, watch, false)(JSProf.LRE(38130, dfd));
        _xhr = null;
        return JSProf.LRE(38132, returnDeferred) ? JSProf.LRE(38133, dfd) : JSProf.LGD(38134, dfd, 'promise').promise;
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
    JSProf.LPD(38138, xhr, '_create')._create = JSProf.LRSP(38138, JSProf.LNF(38137, function () {
        // summary:
        //		does the work of portably generating a new XMLHTTPRequest object.
        throw JSProf.LNE(38136, new (JSProf.LFC(38135, Error, true))('XMLHTTP not available'), 'Error');
    }, 12));
    if (JSProf.LFC(38139, has, false)('native-xhr') && !JSProf.LFC(38140, has, false)('dojo-force-activex-xhr')) {
        JSProf.LPD(38144, xhr, '_create')._create = JSProf.LRSP(38144, JSProf.LNF(38143, function () {
            return JSProf.LNE(38142, new (JSProf.LFC(38141, XMLHttpRequest, true))(), 'XMLHttpRequest');
        }, 12));
    } else if (JSProf.LFC(38145, has, false)('activex')) {
        try {
            JSProf.LNE(38147, new (JSProf.LFC(38146, ActiveXObject, true))('Msxml2.XMLHTTP'), 'ActiveXObject');
            JSProf.LPD(38151, xhr, '_create')._create = JSProf.LRSP(38151, JSProf.LNF(38150, function () {
                return JSProf.LNE(38149, new (JSProf.LFC(38148, ActiveXObject, true))('Msxml2.XMLHTTP'), 'ActiveXObject');
            }, 12));
        } catch (e) {
            try {
                JSProf.LNE(38153, new (JSProf.LFC(38152, ActiveXObject, true))('Microsoft.XMLHTTP'), 'ActiveXObject');
                JSProf.LPD(38157, xhr, '_create')._create = JSProf.LRSP(38157, JSProf.LNF(38156, function () {
                    return JSProf.LNE(38155, new (JSProf.LFC(38154, ActiveXObject, true))('Microsoft.XMLHTTP'), 'ActiveXObject');
                }, 12));
            } catch (e) {
            }
        }
    }
    JSProf.LMC(38159, util, 'addCommonMethods').addCommonMethods(JSProf.LRE(38158, xhr));
    return JSProf.LRE(38160, xhr);
}, 12));