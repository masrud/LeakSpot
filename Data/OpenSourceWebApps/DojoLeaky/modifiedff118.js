JSProf.LFC(40291, define, false)(JSProf.LNE(39931, [
    "./kernel",
    "./sniff",
    "require",
    "../io-query",
    "../dom",
    "../dom-form",
    "./Deferred",
    "./config",
    "./json",
    "./lang",
    "./array",
    "../on",
    "../aspect",
    "../request/watch",
    "../request/xhr",
    "../request/util"
], 10), JSProf.LNF(40290, function (dojo, has, require, ioq, dom, domForm, Deferred, config, json, lang, array, on, aspect, watch, _xhr, util) {
    // module:
    //		dojo/_base/xhr
    /*=====
    	dojo._xhrObj = function(){
    		// summary:
    		//		does the work of portably generating a new XMLHTTPRequest object.
    	};
    	=====*/
    JSProf.LPD(39933, dojo, '_xhrObj')._xhrObj = JSProf.LRSP(39933, JSProf.LGD(39932, _xhr, '_create')._create);
    var cfg = JSProf.LGD(39934, dojo, 'config').config;
    // mix in io-query and dom-form
    JSProf.LPD(39936, dojo, 'objectToQuery').objectToQuery = JSProf.LRSP(39936, JSProf.LGD(39935, ioq, 'objectToQuery').objectToQuery);
    JSProf.LPD(39938, dojo, 'queryToObject').queryToObject = JSProf.LRSP(39938, JSProf.LGD(39937, ioq, 'queryToObject').queryToObject);
    JSProf.LPD(39940, dojo, 'fieldToObject').fieldToObject = JSProf.LRSP(39940, JSProf.LGD(39939, domForm, 'fieldToObject').fieldToObject);
    JSProf.LPD(39942, dojo, 'formToObject').formToObject = JSProf.LRSP(39942, JSProf.LGD(39941, domForm, 'toObject').toObject);
    JSProf.LPD(39944, dojo, 'formToQuery').formToQuery = JSProf.LRSP(39944, JSProf.LGD(39943, domForm, 'toQuery').toQuery);
    JSProf.LPD(39946, dojo, 'formToJson').formToJson = JSProf.LRSP(39946, JSProf.LGD(39945, domForm, 'toJson').toJson);
    // need to block async callbacks from snatching this thread as the result
    // of an async callback might call another sync XHR, this hangs khtml forever
    // must checked by watchInFlight()
    JSProf.LPD(39947, dojo, '_blockAsync')._blockAsync = JSProf.LRSP(39947, false);
    // MOW: remove dojo._contentHandlers alias in 2.0
    var handlers = JSProf.LPD(40012, dojo, '_contentHandlers')._contentHandlers = JSProf.LRSP(40012, JSProf.LPD(40011, dojo, 'contentHandlers').contentHandlers = JSProf.LRSP(40011, JSProf.LNE(40010, {
            "text": JSProf.LNF(39949, function (xhr) {
                // summary:
                //		A contentHandler which simply returns the plaintext response data
                return JSProf.LGD(39948, xhr, 'responseText').responseText;
            }, 12),
            "json": JSProf.LNF(39952, function (xhr) {
                // summary:
                //		A contentHandler which returns a JavaScript object created from the response data
                return JSProf.LMC(39951, json, 'fromJson').fromJson(JSProf.LGD(39950, xhr, 'responseText').responseText || null);
            }, 12),
            "json-comment-filtered": JSProf.LNF(39965, function (xhr) {
                // summary:
                //		A contentHandler which expects comment-filtered JSON.
                // description:
                //		A contentHandler which expects comment-filtered JSON.
                //		the json-comment-filtered option was implemented to prevent
                //		"JavaScript Hijacking", but it is less secure than standard JSON. Use
                //		standard JSON instead. JSON prefixing can be used to subvert hijacking.
                //
                //		Will throw a notice suggesting to use application/json mimetype, as
                //		json-commenting can introduce security issues. To decrease the chances of hijacking,
                //		use the standard `json` contentHandler, and prefix your "JSON" with: {}&&
                //
                //		use djConfig.useCommentedJson = true to turn off the notice
                if (!JSProf.LGD(39953, config, 'useCommentedJson').useCommentedJson) {
                    JSProf.LMC(39954, console, 'warn').warn("Consider using the standard mimetype:application/json." + " json-commenting can introduce security issues. To" + " decrease the chances of hijacking, use the standard the 'json' handler and" + " prefix your json with: {}&&\n" + "Use djConfig.useCommentedJson=true to turn off this message.");
                }
                var value = JSProf.LGD(39955, xhr, 'responseText').responseText;
                var cStartIdx = JSProf.LMC(39956, value, 'indexOf').indexOf("\/*");
                var cEndIdx = JSProf.LMC(39957, value, 'lastIndexOf').lastIndexOf("*\/");
                if (JSProf.LRE(39958, cStartIdx) == -1 || JSProf.LRE(39959, cEndIdx) == -1) {
                    throw JSProf.LNE(39961, new (JSProf.LFC(39960, Error, true))("JSON was not comment filtered"), 'Error');
                }
                return JSProf.LMC(39964, json, 'fromJson').fromJson(value.substring(JSProf.LRE(39962, cStartIdx) + 2, JSProf.LRE(39963, cEndIdx)));
            }, 12),
            "javascript": JSProf.LNF(39968, function (xhr) {
                // summary:
                //		A contentHandler which evaluates the response data, expecting it to be valid JavaScript
                // FIXME: try Moz and IE specific eval variants?
                return JSProf.LMC(39967, dojo, 'eval').eval(JSProf.LGD(39966, xhr, 'responseText').responseText);
            }, 12),
            "xml": JSProf.LNF(40001, function (xhr) {
                // summary:
                //		A contentHandler returning an XML Document parsed from the response data
                var result = JSProf.LGD(39969, xhr, 'responseXML').responseXML;
                if (JSProf.LRE(39970, result) && JSProf.LFC(39971, has, false)("dom-qsa2.1") && !JSProf.LGD(39972, result, 'querySelectorAll').querySelectorAll && JSProf.LFC(39973, has, false)("dom-parser")) {
                    // http://bugs.dojotoolkit.org/ticket/15631
                    // IE9 supports a CSS3 querySelectorAll implementation, but the DOM implementation 
                    // returned by IE9 xhr.responseXML does not. Manually create the XML DOM to gain 
                    // the fuller-featured implementation and avoid bugs caused by the inconsistency
                    result = JSProf.LWR(39978, result, JSProf.LMC(39977, JSProf.LNE(39975, new (JSProf.LFC(39974, DOMParser, true))(), 'DOMParser'), 'parseFromString').parseFromString(JSProf.LGD(39976, xhr, 'responseText').responseText, "application/xml"));
                }
                if (JSProf.LFC(39979, has, false)("ie")) {
                    if (!JSProf.LRE(39980, result) || !JSProf.LGD(39981, result, 'documentElement').documentElement) {
                        //WARNING: this branch used by the xml handling in dojo.io.iframe,
                        //so be sure to test dojo.io.iframe if making changes below.
                        var ms = JSProf.LNF(39983, function (n) {
                                return "MSXML" + JSProf.LRE(39982, n) + ".DOMDocument";
                            }, 12);
                        var dp = JSProf.LNE(39988, [
                                "Microsoft.XMLDOM",
                                JSProf.LFC(39984, ms, false)(6),
                                JSProf.LFC(39985, ms, false)(4),
                                JSProf.LFC(39986, ms, false)(3),
                                JSProf.LFC(39987, ms, false)(2)
                            ], 10);
                        JSProf.LMC(39999, array, 'some').some(JSProf.LRE(39989, dp), JSProf.LNF(39998, function (p) {
                            try {
                                var dom = JSProf.LNE(39992, new (JSProf.LFC(39991, ActiveXObject, true))(JSProf.LRE(39990, p)), 'ActiveXObject');
                                JSProf.LPD(39993, dom, 'async').async = JSProf.LRSP(39993, false);
                                JSProf.LMC(39995, dom, 'loadXML').loadXML(JSProf.LGD(39994, xhr, 'responseText').responseText);
                                result = JSProf.LWR(39997, result, JSProf.LRE(39996, dom));
                            } catch (e) {
                                return false;
                            }
                            return true;
                        }, 12));
                    }
                }
                return JSProf.LRE(40000, result);    // DOMDocument
            }, 12),
            "json-comment-optional": JSProf.LNF(40009, function (xhr) {
                // summary:
                //		A contentHandler which checks the presence of comment-filtered JSON and
                //		alternates between the `json` and `json-comment-filtered` contentHandlers.
                if (JSProf.LGD(40002, xhr, 'responseText').responseText && JSProf.LMC(40004, /^[^{\[]*\/\*/, 'test').test(JSProf.LGD(40003, xhr, 'responseText').responseText)) {
                    return JSProf.LMC(40006, handlers, JSProf.TMPS.t3ca5f0139ef2f4af7db6209d866c46cf190824d2 = "json-comment-filtered", 1)[JSProf.TMPS.t3ca5f0139ef2f4af7db6209d866c46cf190824d2](JSProf.LRE(40005, xhr));
                } else {
                    return JSProf.LMC(40008, handlers, JSProf.TMPS.t3ca5f0139ef2f4af7db6209d866c46cf190824d2 = "json", 1)[JSProf.TMPS.t3ca5f0139ef2f4af7db6209d866c46cf190824d2](JSProf.LRE(40007, xhr));
                }
            }, 12)
        }, 11)));
    /*=====
    
    	// kwargs function parameter definitions.   Assigning to dojo namespace rather than making them local variables
    	// because they are used by dojo/io modules too
    
    	dojo.__IoArgs = declare(null, {
    		// url: String
    		//		URL to server endpoint.
    		// content: Object?
    		//		Contains properties with string values. These
    		//		properties will be serialized as name1=value2 and
    		//		passed in the request.
    		// timeout: Integer?
    		//		Milliseconds to wait for the response. If this time
    		//		passes, the then error callbacks are called.
    		// form: DOMNode?
    		//		DOM node for a form. Used to extract the form values
    		//		and send to the server.
    		// preventCache: Boolean?
    		//		Default is false. If true, then a
    		//		"dojo.preventCache" parameter is sent in the request
    		//		with a value that changes with each request
    		//		(timestamp). Useful only with GET-type requests.
    		// handleAs: String?
    		//		Acceptable values depend on the type of IO
    		//		transport (see specific IO calls for more information).
    		// rawBody: String?
    		//		Sets the raw body for an HTTP request. If this is used, then the content
    		//		property is ignored. This is mostly useful for HTTP methods that have
    		//		a body to their requests, like PUT or POST. This property can be used instead
    		//		of postData and putData for dojo/_base/xhr.rawXhrPost and dojo/_base/xhr.rawXhrPut respectively.
    		// ioPublish: Boolean?
    		//		Set this explicitly to false to prevent publishing of topics related to
    		//		IO operations. Otherwise, if djConfig.ioPublish is set to true, topics
    		//		will be published via dojo/topic.publish() for different phases of an IO operation.
    		//		See dojo/main.__IoPublish for a list of topics that are published.
    
    		load: function(response, ioArgs){
    			// summary:
    			//		This function will be
    			//		called on a successful HTTP response code.
    	 		// ioArgs: dojo/main.__IoCallbackArgs
    			//		Provides additional information about the request.
    			// response: Object
    			//		The response in the format as defined with handleAs.
    		},
    
    		error: function(response, ioArgs){
    			// summary:
    			//		This function will
    			//		be called when the request fails due to a network or server error, the url
    			//		is invalid, etc. It will also be called if the load or handle callback throws an
    			//		exception, unless djConfig.debugAtAllCosts is true.	 This allows deployed applications
    			//		to continue to run even when a logic error happens in the callback, while making
    			//		it easier to troubleshoot while in debug mode.
    			// ioArgs: dojo/main.__IoCallbackArgs
    			//		Provides additional information about the request.
    			// response: Object
    			//		The response in the format as defined with handleAs.
    		},
    
    		handle: function(loadOrError, response, ioArgs){
    			// summary:
    	 		//		This function will
    	 		//		be called at the end of every request, whether or not an error occurs.
    			// loadOrError: String
    			//		Provides a string that tells you whether this function
    			//		was called because of success (load) or failure (error).
    			// response: Object
    			//		The response in the format as defined with handleAs.
    			// ioArgs: dojo/main.__IoCallbackArgs
    			//		Provides additional information about the request.
    		}
    	});
    
    	dojo.__IoCallbackArgs = declare(null, {
    		// args: Object
    		//		the original object argument to the IO call.
    		// xhr: XMLHttpRequest
    		//		For XMLHttpRequest calls only, the
    		//		XMLHttpRequest object that was used for the
    		//		request.
    		// url: String
    		//		The final URL used for the call. Many times it
    		//		will be different than the original args.url
    		//		value.
    		// query: String
    		//		For non-GET requests, the
    		//		name1=value1&name2=value2 parameters sent up in
    		//		the request.
    		// handleAs: String
    		//		The final indicator on how the response will be
    		//		handled.
    		// id: String
    		//		For dojo/io/script calls only, the internal
    		//		script ID used for the request.
    		// canDelete: Boolean
    		//		For dojo/io/script calls only, indicates
    		//		whether the script tag that represents the
    		//		request can be deleted after callbacks have
    		//		been called. Used internally to know when
    		//		cleanup can happen on JSONP-type requests.
    		// json: Object
    		//		For dojo/io/script calls only: holds the JSON
    		//		response for JSONP-type requests. Used
    		//		internally to hold on to the JSON responses.
    		//		You should not need to access it directly --
    		//		the same object should be passed to the success
    		//		callbacks directly.
    	});
    
    	dojo.__IoPublish = declare(null, {
    		// summary:
    		//		This is a list of IO topics that can be published
    		//		if djConfig.ioPublish is set to true. IO topics can be
    		//		published for any Input/Output, network operation. So,
    		//		dojo.xhr, dojo.io.script and dojo.io.iframe can all
    		//		trigger these topics to be published.
    		// start: String
    		//		"/dojo/io/start" is sent when there are no outstanding IO
    		//		requests, and a new IO request is started. No arguments
    		//		are passed with this topic.
    		// send: String
    		//		"/dojo/io/send" is sent whenever a new IO request is started.
    		//		It passes the dojo.Deferred for the request with the topic.
    		// load: String
    		//		"/dojo/io/load" is sent whenever an IO request has loaded
    		//		successfully. It passes the response and the dojo.Deferred
    		//		for the request with the topic.
    		// error: String
    		//		"/dojo/io/error" is sent whenever an IO request has errored.
    		//		It passes the error and the dojo.Deferred
    		//		for the request with the topic.
    		// done: String
    		//		"/dojo/io/done" is sent whenever an IO request has completed,
    		//		either by loading or by erroring. It passes the error and
    		//		the dojo.Deferred for the request with the topic.
    		// stop: String
    		//		"/dojo/io/stop" is sent when all outstanding IO requests have
    		//		finished. No arguments are passed with this topic.
    	});
    	=====*/
    JSProf.LPD(40125, dojo, '_ioSetArgs')._ioSetArgs = JSProf.LRSP(40125, JSProf.LNF(40124, function (args, canceller, okHandler, errHandler) {
        // summary:
        //		sets up the Deferred and ioArgs property on the Deferred so it
        //		can be used in an io call.
        // args:
        //		The args object passed into the public io call. Recognized properties on
        //		the args object are:
        // canceller:
        //		The canceller function used for the Deferred object. The function
        //		will receive one argument, the Deferred object that is related to the
        //		canceller.
        // okHandler:
        //		The first OK callback to be registered with Deferred. It has the opportunity
        //		to transform the OK response. It will receive one argument -- the Deferred
        //		object returned from this function.
        // errHandler:
        //		The first error callback to be registered with Deferred. It has the opportunity
        //		to do cleanup on an error. It will receive two arguments: error (the
        //		Error object) and dfd, the Deferred object returned from this function.
        var ioArgs = JSProf.LNE(40013, {
                args: args,
                url: args.url
            }, 11);
        //Get values from form if requested.
        var formObject = null;
        if (JSProf.LGD(40014, args, 'form').form) {
            var form = JSProf.LMC(40016, dom, 'byId').byId(JSProf.LGD(40015, args, 'form').form);
            //IE requires going through getAttributeNode instead of just getAttribute in some form cases,
            //so use it for all. See #2844
            var actnNode = JSProf.LMC(40017, form, 'getAttributeNode').getAttributeNode("action");
            JSProf.LPD(40021, ioArgs, 'url').url = JSProf.LRSP(40021, JSProf.LGD(40018, ioArgs, 'url').url || (JSProf.LRE(40019, actnNode) ? JSProf.LGD(40020, actnNode, 'value').value : null));
            formObject = JSProf.LWR(40024, formObject, JSProf.LMC(40023, domForm, 'toObject').toObject(JSProf.LRE(40022, form)));
        }
        // set up the query params
        var miArgs = JSProf.LNE(40026, [JSProf.LNE(40025, {}, 11)], 10);
        if (JSProf.LRE(40027, formObject)) {
            // potentially over-ride url-provided params w/ form values
            JSProf.LMC(40029, miArgs, 'push').push(JSProf.LRE(40028, formObject));
        }
        if (JSProf.LGD(40030, args, 'content').content) {
            // stuff in content over-rides what's set by form
            JSProf.LMC(40032, miArgs, 'push').push(JSProf.LGD(40031, args, 'content').content);
        }
        if (JSProf.LGD(40033, args, 'preventCache').preventCache) {
            JSProf.LMC(40038, miArgs, 'push').push(JSProf.LNE(40037, { "dojo.preventCache": JSProf.LMC(40036, JSProf.LNE(40035, new (JSProf.LFC(40034, Date, true))(), 'Date'), 'valueOf').valueOf() }, 11));
        }
        JSProf.LPD(40042, ioArgs, 'query').query = JSProf.LRSP(40042, JSProf.LMC(40041, ioq, 'objectToQuery').objectToQuery(JSProf.LMC(40040, lang.mixin, 'apply').apply(null, JSProf.LRE(40039, miArgs))));
        // .. and the real work of getting the deferred in order, etc.
        JSProf.LPD(40044, ioArgs, 'handleAs').handleAs = JSProf.LRSP(40044, JSProf.LGD(40043, args, 'handleAs').handleAs || "text");
        var d = JSProf.LNE(40060, new (JSProf.LFC(40059, Deferred, true))(JSProf.LNF(40058, function (dfd) {
                JSProf.LPD(40045, dfd, 'canceled').canceled = JSProf.LRSP(40045, true);
                JSProf.LRE(40046, canceller) && JSProf.LFC(40048, canceller, false)(JSProf.LRE(40047, dfd));
                var err = JSProf.LGD(40049, dfd.ioArgs, 'error').error;
                if (!JSProf.LRE(40050, err)) {
                    err = JSProf.LWR(40053, err, JSProf.LNE(40052, new (JSProf.LFC(40051, Error, true))("request cancelled"), 'Error'));
                    JSProf.LPD(40054, err, 'dojoType').dojoType = JSProf.LRSP(40054, "cancel");
                    JSProf.LPD(40056, dfd.ioArgs, 'error').error = JSProf.LRSP(40056, JSProf.LRE(40055, err));
                }
                return JSProf.LRE(40057, err);
            }, 12)), 'Deferred');
        JSProf.LMC(40062, d, 'addCallback').addCallback(JSProf.LRE(40061, okHandler));
        //Support specifying load, error and handle callback functions from the args.
        //For those callbacks, the "this" object will be the args object.
        //The callbacks will get the deferred result value as the
        //first argument and the ioArgs object as the second argument.
        var ld = JSProf.LGD(40063, args, 'load').load;
        if (JSProf.LRE(40064, ld) && JSProf.LMC(40066, lang, 'isFunction').isFunction(JSProf.LRE(40065, ld))) {
            JSProf.LMC(40072, d, 'addCallback').addCallback(JSProf.LNF(40071, function (value) {
                return JSProf.LMC(40070, ld, 'call').call(JSProf.LRE(40067, args), JSProf.LRE(40068, value), JSProf.LRE(40069, ioArgs));
            }, 12));
        }
        var err = JSProf.LGD(40073, args, 'error').error;
        if (JSProf.LRE(40074, err) && JSProf.LMC(40076, lang, 'isFunction').isFunction(JSProf.LRE(40075, err))) {
            JSProf.LMC(40082, d, 'addErrback').addErrback(JSProf.LNF(40081, function (value) {
                return JSProf.LMC(40080, err, 'call').call(JSProf.LRE(40077, args), JSProf.LRE(40078, value), JSProf.LRE(40079, ioArgs));
            }, 12));
        }
        var handle = JSProf.LGD(40083, args, 'handle').handle;
        if (JSProf.LRE(40084, handle) && JSProf.LMC(40086, lang, 'isFunction').isFunction(JSProf.LRE(40085, handle))) {
            JSProf.LMC(40092, d, 'addBoth').addBoth(JSProf.LNF(40091, function (value) {
                return JSProf.LMC(40090, handle, 'call').call(JSProf.LRE(40087, args), JSProf.LRE(40088, value), JSProf.LRE(40089, ioArgs));
            }, 12));
        }
        // Attach error handler last (not including topic publishing)
        // to catch any errors that may have been generated from load
        // or handle functions.
        JSProf.LMC(40097, d, 'addErrback').addErrback(JSProf.LNF(40096, function (error) {
            return JSProf.LFC(40095, errHandler, false)(JSProf.LRE(40093, error), JSProf.LRE(40094, d));
        }, 12));
        //Plug in topic publishing, if dojo.publish is loaded.
        if (JSProf.LGD(40098, cfg, 'ioPublish').ioPublish && JSProf.LGD(40099, dojo, 'publish').publish && JSProf.LGD(40100, ioArgs.args, 'ioPublish').ioPublish !== false) {
            JSProf.LMC(40113, d, 'addCallbacks').addCallbacks(JSProf.LNF(40106, function (res) {
                JSProf.LMC(40104, dojo, 'publish').publish("/dojo/io/load", JSProf.LNE(40103, [
                    JSProf.LRE(40101, d),
                    JSProf.LRE(40102, res)
                ], 10));
                return JSProf.LRE(40105, res);
            }, 12), JSProf.LNF(40112, function (res) {
                JSProf.LMC(40110, dojo, 'publish').publish("/dojo/io/error", JSProf.LNE(40109, [
                    JSProf.LRE(40107, d),
                    JSProf.LRE(40108, res)
                ], 10));
                return JSProf.LRE(40111, res);
            }, 12));
            JSProf.LMC(40120, d, 'addBoth').addBoth(JSProf.LNF(40119, function (res) {
                JSProf.LMC(40117, dojo, 'publish').publish("/dojo/io/done", JSProf.LNE(40116, [
                    JSProf.LRE(40114, d),
                    JSProf.LRE(40115, res)
                ], 10));
                return JSProf.LRE(40118, res);
            }, 12));
        }
        JSProf.LPD(40122, d, 'ioArgs').ioArgs = JSProf.LRSP(40122, JSProf.LRE(40121, ioArgs));
        // FIXME: need to wire up the xhr object's abort method to something
        // analogous in the Deferred
        return JSProf.LRE(40123, d);
    }, 12));
    var _deferredOk = JSProf.LNF(40130, function (dfd) {
            // summary:
            //		okHandler function for dojo._ioSetArgs call.
            var ret = JSProf.LMC(40127, handlers, JSProf.TMPS.t3ca5f0139ef2f4af7db6209d866c46cf190824d2 = dfd.ioArgs.handleAs, 1)[JSProf.TMPS.t3ca5f0139ef2f4af7db6209d866c46cf190824d2](JSProf.LGD(40126, dfd.ioArgs, 'xhr').xhr);
            return JSProf.LRE(40128, ret) === undefined ? null : JSProf.LRE(40129, ret);
        }, 12);
    var _deferError = JSProf.LNF(40135, function (error, dfd) {
            // summary:
            //		errHandler function for dojo._ioSetArgs call.
            if (!JSProf.LGD(40131, dfd.ioArgs.args, 'failOk').failOk) {
                JSProf.LMC(40133, console, 'error').error(JSProf.LRE(40132, error));
            }
            return JSProf.LRE(40134, error);
        }, 12);
    //Use a separate count for knowing if we are starting/stopping io calls.
    var _checkPubCount = JSProf.LNF(40144, function (dfd) {
            if (JSProf.LRE(40136, _pubCount) <= 0) {
                _pubCount = JSProf.LWR(40137, _pubCount, 0);
                if (JSProf.LGD(40138, cfg, 'ioPublish').ioPublish && JSProf.LGD(40139, dojo, 'publish').publish && (!JSProf.LRE(40140, dfd) || JSProf.LRE(40141, dfd) && JSProf.LGD(40142, dfd.ioArgs.args, 'ioPublish').ioPublish !== false)) {
                    JSProf.LMC(40143, dojo, 'publish').publish("/dojo/io/stop");
                }
            }
        }, 12);
    var _pubCount = 0;
    JSProf.LMC(40147, aspect, 'after').after(JSProf.LRE(40145, watch), "_onAction", JSProf.LNF(40146, function () {
        _pubCount -= 1;
    }, 12));
    JSProf.LMC(40150, aspect, 'after').after(JSProf.LRE(40148, watch), "_onInFlight", JSProf.LRE(40149, _checkPubCount));
    JSProf.LPD(40152, dojo, '_ioCancelAll')._ioCancelAll = JSProf.LRSP(40152, JSProf.LGD(40151, watch, 'cancelAll').cancelAll);
    /*=====
    	dojo._ioCancelAll = function(){
    		// summary:
    		//		Cancels all pending IO requests, regardless of IO type
    		//		(xhr, script, iframe).
    	};
    	=====*/
    JSProf.LPD(40162, dojo, '_ioNotifyStart')._ioNotifyStart = JSProf.LRSP(40162, JSProf.LNF(40161, function (dfd) {
        // summary:
        //		If dojo.publish is available, publish topics
        //		about the start of a request queue and/or the
        //		the beginning of request.
        //
        //		Used by IO transports. An IO transport should
        //		call this method before making the network connection.
        if (JSProf.LGD(40153, cfg, 'ioPublish').ioPublish && JSProf.LGD(40154, dojo, 'publish').publish && JSProf.LGD(40155, dfd.ioArgs.args, 'ioPublish').ioPublish !== false) {
            if (!JSProf.LRE(40156, _pubCount)) {
                JSProf.LMC(40157, dojo, 'publish').publish("/dojo/io/start");
            }
            _pubCount += 1;
            JSProf.LMC(40160, dojo, 'publish').publish("/dojo/io/send", JSProf.LNE(40159, [JSProf.LRE(40158, dfd)], 10));
        }
    }, 12));
    JSProf.LPD(40182, dojo, '_ioWatch')._ioWatch = JSProf.LRSP(40182, JSProf.LNF(40181, function (dfd, validCheck, ioCheck, resHandle) {
        // summary:
        //		Watches the io request represented by dfd to see if it completes.
        // dfd: Deferred
        //		The Deferred object to watch.
        // validCheck: Function
        //		Function used to check if the IO request is still valid. Gets the dfd
        //		object as its only argument.
        // ioCheck: Function
        //		Function used to check if basic IO call worked. Gets the dfd
        //		object as its only argument.
        // resHandle: Function
        //		Function used to process response. Gets the dfd
        //		object as its only argument.
        var args = JSProf.LPD(40164, dfd.ioArgs, 'options').options = JSProf.LRSP(40164, JSProf.LGD(40163, dfd.ioArgs, 'args').args);
        JSProf.LMC(40176, lang, 'mixin').mixin(JSProf.LRE(40165, dfd), JSProf.LNE(40175, {
            response: dfd.ioArgs,
            isValid: JSProf.LNF(40168, function (response) {
                return JSProf.LFC(40167, validCheck, false)(JSProf.LRE(40166, dfd));
            }, 12),
            isReady: JSProf.LNF(40171, function (response) {
                return JSProf.LFC(40170, ioCheck, false)(JSProf.LRE(40169, dfd));
            }, 12),
            handleResponse: JSProf.LNF(40174, function (response) {
                return JSProf.LFC(40173, resHandle, false)(JSProf.LRE(40172, dfd));
            }, 12)
        }, 11));
        JSProf.LFC(40178, watch, false)(JSProf.LRE(40177, dfd));
        JSProf.LFC(40180, _checkPubCount, false)(JSProf.LRE(40179, dfd));
    }, 12));
    var _defaultContentType = "application/x-www-form-urlencoded";
    JSProf.LPD(40187, dojo, '_ioAddQueryToUrl')._ioAddQueryToUrl = JSProf.LRSP(40187, JSProf.LNF(40186, function (ioArgs) {
        // summary:
        //		Adds query params discovered by the io deferred construction to the URL.
        //		Only use this for operations which are fundamentally GET-type operations.
        if (JSProf.LGD(40183, ioArgs.query, 'length').length) {
            ioArgs.url += (JSProf.LMC(40184, ioArgs.url, 'indexOf').indexOf("?") == -1 ? "?" : "&") + JSProf.LGD(40185, ioArgs, 'query').query;
            ioArgs.query = null;
        }
    }, 12));
    /*=====
    	dojo.__XhrArgs = declare(dojo.__IoArgs, {
    		// summary:
    		//		In addition to the properties listed for the dojo._IoArgs type,
    		//		the following properties are allowed for dojo.xhr* methods.
    		// handleAs: String?
    		//		Acceptable values are: text (default), json, json-comment-optional,
    		//		json-comment-filtered, javascript, xml. See `dojo/_base/xhr.contentHandlers`
    	 	// sync: Boolean?
    		//		false is default. Indicates whether the request should
    		//		be a synchronous (blocking) request.
    		// headers: Object?
    		//		Additional HTTP headers to send in the request.
    		// failOk: Boolean?
    		//		false is default. Indicates whether a request should be
    		//		allowed to fail (and therefore no console error message in
    		//		the event of a failure)
    		// contentType: String|Boolean
    		//		"application/x-www-form-urlencoded" is default. Set to false to
    		//		prevent a Content-Type header from being sent, or to a string
    		//		to send a different Content-Type.
    	 });
    	=====*/
    JSProf.LPD(40255, dojo, 'xhr').xhr = JSProf.LRSP(40255, JSProf.LNF(40254, function (method, args, hasBody) {
        // summary:
        //		Deprecated.   Use dojo/request instead.
        // description:
        //		Sends an HTTP request with the given method.
        //		See also dojo.xhrGet(), xhrPost(), xhrPut() and dojo.xhrDelete() for shortcuts
        //		for those HTTP methods. There are also methods for "raw" PUT and POST methods
        //		via dojo.rawXhrPut() and dojo.rawXhrPost() respectively.
        // method:
        //		HTTP method to be used, such as GET, POST, PUT, DELETE. Should be uppercase.
        // hasBody:
        //		If the request has an HTTP body, then pass true for hasBody.
        var rDfd;
        //Make the Deferred object for this xhr request.
        var dfd = JSProf.LMC(40194, dojo, '_ioSetArgs')._ioSetArgs(JSProf.LRE(40188, args), JSProf.LNF(40191, function (dfd) {
                JSProf.LRE(40189, rDfd) && JSProf.LMC(40190, rDfd, 'cancel').cancel();
            }, 12), JSProf.LRE(40192, _deferredOk), JSProf.LRE(40193, _deferError));
        var ioArgs = JSProf.LGD(40195, dfd, 'ioArgs').ioArgs;
        //Allow for specifying the HTTP body completely.
        if ("postData" in JSProf.LRE(40196, args)) {
            JSProf.LPD(40198, ioArgs, 'query').query = JSProf.LRSP(40198, JSProf.LGD(40197, args, 'postData').postData);
        } else if ("putData" in JSProf.LRE(40199, args)) {
            JSProf.LPD(40201, ioArgs, 'query').query = JSProf.LRSP(40201, JSProf.LGD(40200, args, 'putData').putData);
        } else if ("rawBody" in JSProf.LRE(40202, args)) {
            JSProf.LPD(40204, ioArgs, 'query').query = JSProf.LRSP(40204, JSProf.LGD(40203, args, 'rawBody').rawBody);
        } else if (JSProf.LGD(40205, arguments, 'length').length > 2 && !JSProf.LRE(40206, hasBody) || JSProf.LMC(40207, "POST|PUT", 'indexOf').indexOf(method.toUpperCase()) === -1) {
            //Check for hasBody being passed. If no hasBody,
            //then only append query string if not a POST or PUT request.
            JSProf.LMC(40209, dojo, '_ioAddQueryToUrl')._ioAddQueryToUrl(JSProf.LRE(40208, ioArgs));
        }
        var options = JSProf.LNE(40210, {
                method: method,
                handleAs: "text",
                timeout: args.timeout,
                withCredentials: args.withCredentials,
                ioArgs: ioArgs
            }, 11);
        if (typeof JSProf.LGD(40211, args, 'headers').headers !== 'undefined') {
            JSProf.LPD(40213, options, 'headers').headers = JSProf.LRSP(40213, JSProf.LGD(40212, args, 'headers').headers);
        }
        if (typeof JSProf.LGD(40214, args, 'contentType').contentType !== 'undefined') {
            if (!JSProf.LGD(40215, options, 'headers').headers) {
                JSProf.LPD(40217, options, 'headers').headers = JSProf.LRSP(40217, JSProf.LNE(40216, {}, 11));
            }
            JSProf.LPE(40219, options.headers, 'Content-Type')['Content-Type'] = JSProf.LRPE(40219, JSProf.LGD(40218, args, 'contentType').contentType);
        }
        if (typeof JSProf.LGD(40220, ioArgs, 'query').query !== 'undefined') {
            JSProf.LPD(40222, options, 'data').data = JSProf.LRSP(40222, JSProf.LGD(40221, ioArgs, 'query').query);
        }
        if (typeof JSProf.LGD(40223, args, 'sync').sync !== 'undefined') {
            JSProf.LPD(40225, options, 'sync').sync = JSProf.LRSP(40225, JSProf.LGD(40224, args, 'sync').sync);
        }
        JSProf.LMC(40227, dojo, '_ioNotifyStart')._ioNotifyStart(JSProf.LRE(40226, dfd));
        try {
            rDfd = JSProf.LWR(40231, rDfd, JSProf.LFC(40230, _xhr, false)(JSProf.LGD(40228, ioArgs, 'url').url, JSProf.LRE(40229, options), true));
        } catch (e) {
            // If XHR creation fails, dojo/request/xhr throws
            // When this happens, cancel the deferred
            JSProf.LMC(40232, dfd, 'cancel').cancel();
            return JSProf.LRE(40233, dfd);
        }
        // sync ioArgs
        JSProf.LPD(40235, dfd.ioArgs, 'xhr').xhr = JSProf.LRSP(40235, JSProf.LGD(40234, rDfd.response, 'xhr').xhr);
        JSProf.LMC(40252, JSProf.LMC(40239, rDfd, 'then').then(JSProf.LNF(40238, function () {
            JSProf.LMC(40237, dfd, 'resolve').resolve(JSProf.LRE(40236, dfd));
        }, 12)), 'otherwise').otherwise(JSProf.LNF(40251, function (error) {
            JSProf.LPD(40241, ioArgs, 'error').error = JSProf.LRSP(40241, JSProf.LRE(40240, error));
            if (JSProf.LGD(40242, error, 'response').response) {
                JSProf.LPD(40244, error, 'status').status = JSProf.LRSP(40244, JSProf.LGD(40243, error.response, 'status').status);
                JSProf.LPD(40246, error, 'responseText').responseText = JSProf.LRSP(40246, JSProf.LGD(40245, error.response, 'text').text);
                JSProf.LPD(40248, error, 'xhr').xhr = JSProf.LRSP(40248, JSProf.LGD(40247, error.response, 'xhr').xhr);
            }
            JSProf.LMC(40250, dfd, 'reject').reject(JSProf.LRE(40249, error));
        }, 12));
        return JSProf.LRE(40253, dfd);    // dojo/_base/Deferred
    }, 12));
    JSProf.LPD(40259, dojo, 'xhrGet').xhrGet = JSProf.LRSP(40259, JSProf.LNF(40258, function (args) {
        // summary:
        //		Sends an HTTP GET request to the server.
        return JSProf.LMC(40257, dojo, 'xhr').xhr("GET", JSProf.LRE(40256, args));    // dojo/_base/Deferred
    }, 12));
    JSProf.LPD(40264, dojo, 'rawXhrPost').rawXhrPost = JSProf.LRSP(40264, JSProf.LPD(40263, dojo, 'xhrPost').xhrPost = JSProf.LRSP(40263, JSProf.LNF(40262, function (args) {
        // summary:
        //		Sends an HTTP POST request to the server. In addition to the properties
        //		listed for the dojo.__XhrArgs type, the following property is allowed:
        // postData:
        //		String. Send raw data in the body of the POST request.
        return JSProf.LMC(40261, dojo, 'xhr').xhr("POST", JSProf.LRE(40260, args), true);    // dojo/_base/Deferred
    }, 12)));
    JSProf.LPD(40269, dojo, 'rawXhrPut').rawXhrPut = JSProf.LRSP(40269, JSProf.LPD(40268, dojo, 'xhrPut').xhrPut = JSProf.LRSP(40268, JSProf.LNF(40267, function (args) {
        // summary:
        //		Sends an HTTP PUT request to the server. In addition to the properties
        //		listed for the dojo.__XhrArgs type, the following property is allowed:
        // putData:
        //		String. Send raw data in the body of the PUT request.
        return JSProf.LMC(40266, dojo, 'xhr').xhr("PUT", JSProf.LRE(40265, args), true);    // dojo/_base/Deferred
    }, 12)));
    JSProf.LPD(40273, dojo, 'xhrDelete').xhrDelete = JSProf.LRSP(40273, JSProf.LNF(40272, function (args) {
        // summary:
        //		Sends an HTTP DELETE request to the server.
        return JSProf.LMC(40271, dojo, 'xhr').xhr("DELETE", JSProf.LRE(40270, args));    // dojo/_base/Deferred
    }, 12));
    /*
    	dojo.wrapForm = function(formNode){
    		// summary:
    		//		A replacement for FormBind, but not implemented yet.
    
    		// FIXME: need to think harder about what extensions to this we might
    		// want. What should we allow folks to do w/ this? What events to
    		// set/send?
    		throw new Error("dojo.wrapForm not yet implemented");
    	}
    	*/
    JSProf.LPD(40277, dojo, '_isDocumentOk')._isDocumentOk = JSProf.LRSP(40277, JSProf.LNF(40276, function (x) {
        return JSProf.LMC(40275, util, 'checkStatus').checkStatus(JSProf.LGD(40274, x, 'status').status);
    }, 12));
    JSProf.LPD(40285, dojo, '_getText')._getText = JSProf.LRSP(40285, JSProf.LNF(40284, function (url) {
        var result;
        JSProf.LMC(40282, dojo, 'xhrGet').xhrGet(JSProf.LNE(40281, {
            url: url,
            sync: true,
            load: JSProf.LNF(40280, function (text) {
                result = JSProf.LWR(40279, result, JSProf.LRE(40278, text));
            }, 12)
        }, 11));
        return JSProf.LRE(40283, result);
    }, 12));
    // Add aliases for static functions to dojo.xhr since dojo.xhr is what's returned from this module
    JSProf.LMC(40288, lang, 'mixin').mixin(JSProf.LGD(40286, dojo, 'xhr').xhr, JSProf.LNE(40287, {
        _xhrObj: dojo._xhrObj,
        fieldToObject: domForm.fieldToObject,
        formToObject: domForm.toObject,
        objectToQuery: ioq.objectToQuery,
        formToQuery: domForm.toQuery,
        formToJson: domForm.toJson,
        queryToObject: ioq.queryToObject,
        contentHandlers: handlers,
        _ioSetArgs: dojo._ioSetArgs,
        _ioCancelAll: dojo._ioCancelAll,
        _ioNotifyStart: dojo._ioNotifyStart,
        _ioWatch: dojo._ioWatch,
        _ioAddQueryToUrl: dojo._ioAddQueryToUrl,
        _isDocumentOk: dojo._isDocumentOk,
        _getText: dojo._getText,
        get: dojo.xhrGet,
        post: dojo.xhrPost,
        put: dojo.xhrPut,
        del: dojo.xhrDelete
    }, 11));
    return JSProf.LGD(40289, dojo, 'xhr').xhr;
}, 12));