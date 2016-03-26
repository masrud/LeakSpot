JSProf.LFC(33336, define, false)(JSProf.LNE(33103, [
    "dojo/_base/declare",
    "dojo/hash",
    "dojo/topic"
], 10), JSProf.LNF(33335, function (declare, hash, topic) {
    JSProf.LFD(33334, fireRoute);
    // module:
    //		dojo/router/RouterBase
    // Creating a basic trim to avoid needing the full dojo/string module
    // similarly to dojo/_base/lang's trim
    var trim;
    if (JSProf.LGD(33104, String.prototype, 'trim').trim) {
        trim = JSProf.LWR(33107, trim, JSProf.LNF(33106, function (str) {
            return JSProf.LMC(33105, str, 'trim').trim();
        }, 12));
    } else {
        trim = JSProf.LWR(33111, trim, JSProf.LNF(33110, function (str) {
            return JSProf.LMC(33109, JSProf.LMC(33108, str, 'replace').replace(/^\s\s*/, ''), 'replace').replace(/\s\s*$/, '');
        }, 12));
    }
    // Firing of routes on the route object is always the same,
    // no clean way to expose this on the prototype since it's for the
    // internal router objects.
    function fireRoute(params, currentPath, newPath) {
        var queue, isStopped, isPrevented, eventObj, callbackArgs, i, l;
        queue = JSProf.LWR(33113, queue, JSProf.LGD(33112, this, 'callbackQueue').callbackQueue);
        isStopped = JSProf.LWR(33114, isStopped, false);
        isPrevented = JSProf.LWR(33115, isPrevented, false);
        eventObj = JSProf.LWR(33121, eventObj, JSProf.LNE(33120, {
            stopImmediatePropagation: JSProf.LNF(33117, function () {
                isStopped = JSProf.LWR(33116, isStopped, true);
            }, 12),
            preventDefault: JSProf.LNF(33119, function () {
                isPrevented = JSProf.LWR(33118, isPrevented, true);
            }, 12),
            oldPath: currentPath,
            newPath: newPath,
            params: params
        }, 11));
        callbackArgs = JSProf.LWR(33124, callbackArgs, JSProf.LNE(33123, [JSProf.LRE(33122, eventObj)], 10));
        if (JSProf.LRE(33125, params) instanceof JSProf.LRU(33126, typeof Array === 'undefined' ? undefined : Array)) {
            callbackArgs = JSProf.LWR(33128, callbackArgs, callbackArgs.concat(JSProf.LRE(33127, params)));
        } else {
            for (var key in JSProf.LRE(33129, params)) {
                JSProf.LMC(33131, callbackArgs, 'push').push(JSProf.LGE(33130, params, 'key')[key]);
            }
        }
        for (i = JSProf.LWR(33132, i, 0), l = JSProf.LWR(33134, l, JSProf.LGD(33133, queue, 'length').length); JSProf.LRE(33135, i) < JSProf.LRE(33136, l); ++i) {
            if (!JSProf.LRE(33137, isStopped)) {
                JSProf.LMC(33139, queue[i], 'apply').apply(null, JSProf.LRE(33138, callbackArgs));
            }
        }
        return !JSProf.LRE(33140, isPrevented);
    }
    // Our actual class-like object
    var RouterBase = JSProf.LFC(33332, declare, false)(null, JSProf.LNE(33331, {
            _routes: null,
            _routeIndex: null,
            _started: false,
            _currentPath: "",
            idMatch: /:(\w[\w\d]*)/g,
            idReplacement: "([^\\/]+)",
            globMatch: /\*(\w[\w\d]*)/,
            globReplacement: "(.+)",
            constructor: JSProf.LNF(33150, function (kwArgs) {
                // A couple of safety initializations
                JSProf.LPD(33142, this, '_routes')._routes = JSProf.LRSP(33142, JSProf.LNE(33141, [], 10));
                JSProf.LPD(33144, this, '_routeIndex')._routeIndex = JSProf.LRSP(33144, JSProf.LNE(33143, {}, 11));
                // Simple constructor-style "Decorate myself all over" for now
                for (var i in JSProf.LRE(33145, kwArgs)) {
                    if (JSProf.LMC(33147, kwArgs, 'hasOwnProperty').hasOwnProperty(JSProf.LRE(33146, i))) {
                        JSProf.LPE(33149, this, 'i')[i] = JSProf.LRPE(33149, JSProf.LGE(33148, kwArgs, 'i')[i]);
                    }
                }
            }, 12),
            register: JSProf.LNF(33154, function (route, callback) {
                // summary:
                //		Registers a route to a handling callback
                // description:
                //		Given either a string or a regular expression, the router
                //		will monitor the page's hash and respond to changes that
                //		match the string or regex as provided.
                //
                //		When provided a regex for the route:
                //
                //		- Matching is performed, and the resulting capture groups
                //		are passed through to the callback as an array.
                //
                //		When provided a string for the route:
                //
                //		- The string is parsed as a URL-like structure, like
                //		"/foo/bar"
                //		- If any portions of that URL are prefixed with a colon
                //		(:), they will be parsed out and provided to the callback
                //		as properties of an object.
                //		- If the last piece of the URL-like structure is prefixed
                //		with a star (*) instead of a colon, it will be replaced in
                //		the resulting regex with a greedy (.+) match and
                //		anything remaining on the hash will be provided as a
                //		property on the object passed into the callback. Think of
                //		it like a basic means of globbing the end of a route.
                // example:
                //	|	router.register("/foo/:bar/*baz", function(object){
                //	|		// If the hash was "/foo/abc/def/ghi",
                //	|		// object.bar === "abc"
                //	|		// object.baz === "def/ghi"
                //	|	});
                // returns: Object
                //		A plain JavaScript object to be used as a handle for
                //		either removing this specific callback's registration, as
                //		well as to add new callbacks with the same route initially
                //		used.
                // route: String|RegExp
                //		A string or regular expression which will be used when
                //		monitoring hash changes.
                // callback: Function
                //		When the hash matches a pattern as described in the route,
                //		this callback will be executed. It will receive an event
                //		object that will have several properties:
                //
                //		- params: Either an array or object of properties pulled
                //		from the new hash
                //		- oldPath: The hash in its state before the change
                //		- newPath: The new hash being shifted to
                //		- preventDefault: A method that will stop hash changes
                //		from being actually applied to the active hash. This only
                //		works if the hash change was initiated using `router.go`,
                //		as changes initiated more directly to the location.hash
                //		property will already be in place
                //		- stopImmediatePropagation: When called, will stop any
                //		further bound callbacks on this particular route from
                //		being executed. If two distinct routes are bound that are
                //		different, but both happen to match the current hash in
                //		some way, this will *not* keep other routes from receiving
                //		notice of the change.
                return JSProf.LMC(33153, this, '_registerRoute')._registerRoute(JSProf.LRE(33151, route), JSProf.LRE(33152, callback));
            }, 12),
            registerBefore: JSProf.LNF(33158, function (route, callback) {
                // summary:
                //		Registers a route to a handling callback, except before
                //		any previously registered callbacks
                // description:
                //		Much like the `register` method, `registerBefore` allows
                //		us to register route callbacks to happen before any
                //		previously registered callbacks. See the documentation for
                //		`register` for more details and examples.
                return JSProf.LMC(33157, this, '_registerRoute')._registerRoute(JSProf.LRE(33155, route), JSProf.LRE(33156, callback), true);
            }, 12),
            go: JSProf.LNF(33171, function (path, replace) {
                // summary:
                //		A simple pass-through to make changing the hash easy,
                //		without having to require dojo/hash directly. It also
                //		synchronously fires off any routes that match.
                // example:
                //	|	router.go("/foo/bar");
                var applyChange;
                if (typeof JSProf.LRE(33159, path) !== "string") {
                    return false;
                }
                path = JSProf.LWR(33162, path, JSProf.LFC(33161, trim, false)(JSProf.LRE(33160, path)));
                applyChange = JSProf.LWR(33165, applyChange, JSProf.LMC(33164, this, '_handlePathChange')._handlePathChange(JSProf.LRE(33163, path)));
                if (JSProf.LRE(33166, applyChange)) {
                    JSProf.LFC(33169, hash, false)(JSProf.LRE(33167, path), JSProf.LRE(33168, replace));
                }
                return JSProf.LRE(33170, applyChange);
            }, 12),
            startup: JSProf.LNF(33185, function (defaultPath) {
                // summary:
                //		This method must be called to activate the router. Until
                //		startup is called, no hash changes will trigger route
                //		callbacks.
                if (JSProf.LGD(33172, this, '_started')._started) {
                    return;
                }
                var self = this, startingPath = JSProf.LFC(33173, hash, false)();
                JSProf.LPD(33174, this, '_started')._started = JSProf.LRSP(33174, true);
                JSProf.LPD(33179, this, '_hashchangeHandle')._hashchangeHandle = JSProf.LRSP(33179, JSProf.LMC(33178, topic, 'subscribe').subscribe("/dojo/hashchange", JSProf.LNF(33177, function () {
                    JSProf.LMC(33176, self._handlePathChange, 'apply').apply(JSProf.LRE(33175, self), arguments);
                }, 12)));
                if (!JSProf.LRE(33180, startingPath)) {
                    // If there is no initial starting point, push our defaultPath into our
                    // history as the starting point
                    JSProf.LMC(33182, this, 'go').go(JSProf.LRE(33181, defaultPath), true);
                } else {
                    // Handle the starting path
                    JSProf.LMC(33184, this, '_handlePathChange')._handlePathChange(JSProf.LRE(33183, startingPath));
                }
            }, 12),
            destroy: JSProf.LNF(33188, function () {
                if (JSProf.LGD(33186, this, '_hashchangeHandle')._hashchangeHandle) {
                    JSProf.LMC(33187, this._hashchangeHandle, 'remove').remove();
                }
                this._routes = null;
                this._routeIndex = null;
            }, 12),
            _handlePathChange: JSProf.LNF(33230, function (newPath) {
                var i, j, li, lj, routeObj, result, allowChange, parameterNames, params, routes = JSProf.LGD(33189, this, '_routes')._routes, currentPath = JSProf.LGD(33190, this, '_currentPath')._currentPath;
                if (!JSProf.LGD(33191, this, '_started')._started || JSProf.LRE(33192, newPath) === JSProf.LRE(33193, currentPath)) {
                    return JSProf.LRE(33194, allowChange);
                }
                allowChange = JSProf.LWR(33195, allowChange, true);
                for (i = JSProf.LWR(33196, i, 0), li = JSProf.LWR(33198, li, JSProf.LGD(33197, routes, 'length').length); JSProf.LRE(33199, i) < JSProf.LRE(33200, li); ++i) {
                    routeObj = JSProf.LWR(33202, routeObj, JSProf.LGE(33201, routes, 'i')[i]);
                    result = JSProf.LWR(33204, result, routeObj.route.exec(JSProf.LRE(33203, newPath)));
                    if (JSProf.LRE(33205, result)) {
                        if (JSProf.LGD(33206, routeObj, 'parameterNames').parameterNames) {
                            parameterNames = JSProf.LWR(33208, parameterNames, JSProf.LGD(33207, routeObj, 'parameterNames').parameterNames);
                            params = JSProf.LWR(33210, params, JSProf.LNE(33209, {}, 11));
                            for (j = JSProf.LWR(33211, j, 0), lj = JSProf.LWR(33213, lj, JSProf.LGD(33212, parameterNames, 'length').length); JSProf.LRE(33214, j) < JSProf.LRE(33215, lj); ++j) {
                                JSProf.LPE(33218, params, JSProf.TMPS.t5d132b3fc890c6566b11501c55a46b116cfff313 = parameterNames[j])[JSProf.TMPS.t5d132b3fc890c6566b11501c55a46b116cfff313] = JSProf.LRPE(33218, JSProf.LGE(33217, result, JSProf.TMPS.t4d62450f4f563df411091ddecc5fc6b78ffdb5c4 = JSProf.LRE(33216, j) + 1)[JSProf.TMPS.t4d62450f4f563df411091ddecc5fc6b78ffdb5c4]);
                            }
                        } else {
                            params = JSProf.LWR(33220, params, JSProf.LMC(33219, result, 'slice').slice(1));
                        }
                        allowChange = JSProf.LWR(33225, allowChange, JSProf.LMC(33224, routeObj, 'fire').fire(JSProf.LRE(33221, params), JSProf.LRE(33222, currentPath), JSProf.LRE(33223, newPath)));
                    }
                }
                if (JSProf.LRE(33226, allowChange)) {
                    JSProf.LPD(33228, this, '_currentPath')._currentPath = JSProf.LRSP(33228, JSProf.LRE(33227, newPath));
                }
                return JSProf.LRE(33229, allowChange);
            }, 12),
            _convertRouteToRegExp: JSProf.LNF(33244, function (route) {
                // Sub in based on IDs and globs
                route = JSProf.LWR(33234, route, JSProf.LMC(33233, route, 'replace').replace(JSProf.LGD(33231, this, 'idMatch').idMatch, JSProf.LGD(33232, this, 'idReplacement').idReplacement));
                route = JSProf.LWR(33238, route, JSProf.LMC(33237, route, 'replace').replace(JSProf.LGD(33235, this, 'globMatch').globMatch, JSProf.LGD(33236, this, 'globReplacement').globReplacement));
                // Make sure it's an exact match
                route = JSProf.LWR(33240, route, "^" + JSProf.LRE(33239, route) + "$");
                return JSProf.LNE(33243, new (JSProf.LFC(33242, RegExp, true))(JSProf.LRE(33241, route)), 'RegExp');
            }, 12),
            _getParameterNames: JSProf.LNF(33259, function (route) {
                var idMatch = JSProf.LGD(33245, this, 'idMatch').idMatch, globMatch = JSProf.LGD(33246, this, 'globMatch').globMatch, parameterNames = JSProf.LNE(33247, [], 10), match;
                JSProf.LPD(33248, idMatch, 'lastIndex').lastIndex = JSProf.LRSP(33248, 0);
                while ((match = JSProf.LWR(33250, match, idMatch.exec(JSProf.LRE(33249, route)))) !== null) {
                    JSProf.LMC(33252, parameterNames, 'push').push(JSProf.LGE(33251, match, 1)[1]);
                }
                if ((match = JSProf.LWR(33254, match, globMatch.exec(JSProf.LRE(33253, route)))) !== null) {
                    JSProf.LMC(33256, parameterNames, 'push').push(JSProf.LGE(33255, match, 1)[1]);
                }
                return JSProf.LGD(33257, parameterNames, 'length').length > 0 ? JSProf.LRE(33258, parameterNames) : null;
            }, 12),
            _indexRoutes: JSProf.LNF(33273, function () {
                var i, l, route, routeIndex, routes = JSProf.LGD(33260, this, '_routes')._routes;
                // Start a new route index
                routeIndex = JSProf.LWR(33263, routeIndex, JSProf.LPD(33262, this, '_routeIndex')._routeIndex = JSProf.LRSP(33262, JSProf.LNE(33261, {}, 11)));
                // Set it up again
                for (i = JSProf.LWR(33264, i, 0), l = JSProf.LWR(33266, l, JSProf.LGD(33265, routes, 'length').length); JSProf.LRE(33267, i) < JSProf.LRE(33268, l); ++i) {
                    route = JSProf.LWR(33270, route, JSProf.LGE(33269, routes, 'i')[i]);
                    JSProf.LPE(33272, routeIndex, JSProf.TMPS.t28ea5f7f0227053b61143b1992629814c337d42b = route.route)[JSProf.TMPS.t28ea5f7f0227053b61143b1992629814c337d42b] = JSProf.LRPE(33272, JSProf.LRE(33271, i));
                }
            }, 12),
            _registerRoute: JSProf.LNF(33330, function (route, callback, isBefore) {
                var index, exists, routeObj, callbackQueue, removed, self = this, routes = JSProf.LGD(33274, this, '_routes')._routes, routeIndex = JSProf.LGD(33275, this, '_routeIndex')._routeIndex;
                // Try to fetch the route if it already exists.
                // This works thanks to stringifying of regex
                index = JSProf.LWR(33277, index, JSProf.LGE(33276, this._routeIndex, 'route')[route]);
                exists = JSProf.LWR(33279, exists, typeof JSProf.LRE(33278, index) !== "undefined");
                if (JSProf.LRE(33280, exists)) {
                    routeObj = JSProf.LWR(33282, routeObj, JSProf.LGE(33281, routes, 'index')[index]);
                }
                // If we didn't get one, make a default start point
                if (!JSProf.LRE(33283, routeObj)) {
                    routeObj = JSProf.LWR(33286, routeObj, JSProf.LNE(33285, {
                        route: route,
                        callbackQueue: JSProf.LNE(33284, [], 10),
                        fire: fireRoute
                    }, 11));
                }
                callbackQueue = JSProf.LWR(33288, callbackQueue, JSProf.LGD(33287, routeObj, 'callbackQueue').callbackQueue);
                if (typeof JSProf.LRE(33289, route) == "string") {
                    JSProf.LPD(33292, routeObj, 'parameterNames').parameterNames = JSProf.LRSP(33292, JSProf.LMC(33291, this, '_getParameterNames')._getParameterNames(JSProf.LRE(33290, route)));
                    JSProf.LPD(33295, routeObj, 'route').route = JSProf.LRSP(33295, JSProf.LMC(33294, this, '_convertRouteToRegExp')._convertRouteToRegExp(JSProf.LRE(33293, route)));
                }
                if (JSProf.LRE(33296, isBefore)) {
                    callbackQueue.unshift(JSProf.LRE(33297, callback));
                } else {
                    JSProf.LMC(33299, callbackQueue, 'push').push(JSProf.LRE(33298, callback));
                }
                if (!JSProf.LRE(33300, exists)) {
                    index = JSProf.LWR(33302, index, JSProf.LGD(33301, routes, 'length').length);
                    JSProf.LPE(33304, routeIndex, 'route')[route] = JSProf.LRPE(33304, JSProf.LRE(33303, index));
                    JSProf.LMC(33306, routes, 'push').push(JSProf.LRE(33305, routeObj));
                }
                // Useful in a moment to keep from re-removing routes
                removed = JSProf.LWR(33307, removed, false);
                return JSProf.LNE(33329, {
                    remove: JSProf.LNF(33323, function () {
                        var i, l;
                        if (JSProf.LRE(33308, removed)) {
                            return;
                        }
                        for (i = JSProf.LWR(33309, i, 0), l = JSProf.LWR(33311, l, JSProf.LGD(33310, callbackQueue, 'length').length); JSProf.LRE(33312, i) < JSProf.LRE(33313, l); ++i) {
                            if (JSProf.LGE(33314, callbackQueue, 'i')[i] === JSProf.LRE(33315, callback)) {
                                JSProf.LMC(33317, callbackQueue, 'splice').splice(JSProf.LRE(33316, i), 1);
                            }
                        }
                        if (JSProf.LGD(33318, callbackQueue, 'length').length === 0) {
                            JSProf.LMC(33320, routes, 'splice').splice(JSProf.LRE(33319, index), 1);
                            JSProf.LMC(33321, self, '_indexRoutes')._indexRoutes();
                        }
                        removed = JSProf.LWR(33322, removed, true);
                    }, 12),
                    register: JSProf.LNF(33328, function (callback, isBefore) {
                        return JSProf.LMC(33327, self, 'register').register(JSProf.LRE(33324, route), JSProf.LRE(33325, callback), JSProf.LRE(33326, isBefore));
                    }, 12)
                }, 11);
            }, 12)
        }, 11));
    return JSProf.LRE(33333, RouterBase);
}, 12));