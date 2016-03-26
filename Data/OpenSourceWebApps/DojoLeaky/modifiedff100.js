JSProf.LFC(33334, define, false)(JSProf.LNE(33101, [
    "dojo/_base/declare",
    "dojo/hash",
    "dojo/topic"
], 10), JSProf.LNF(33333, function (declare, hash, topic) {
    JSProf.LFD(33332, fireRoute);
    // module:
    //		dojo/router/RouterBase
    // Creating a basic trim to avoid needing the full dojo/string module
    // similarly to dojo/_base/lang's trim
    var trim;
    if (JSProf.LGD(33102, String.prototype, 'trim').trim) {
        trim = JSProf.LWR(33105, trim, JSProf.LNF(33104, function (str) {
            return JSProf.LMC(33103, str, 'trim').trim();
        }, 12));
    } else {
        trim = JSProf.LWR(33109, trim, JSProf.LNF(33108, function (str) {
            return JSProf.LMC(33107, JSProf.LMC(33106, str, 'replace').replace(/^\s\s*/, ''), 'replace').replace(/\s\s*$/, '');
        }, 12));
    }
    // Firing of routes on the route object is always the same,
    // no clean way to expose this on the prototype since it's for the
    // internal router objects.
    function fireRoute(params, currentPath, newPath) {
        var queue, isStopped, isPrevented, eventObj, callbackArgs, i, l;
        queue = JSProf.LWR(33111, queue, JSProf.LGD(33110, this, 'callbackQueue').callbackQueue);
        isStopped = JSProf.LWR(33112, isStopped, false);
        isPrevented = JSProf.LWR(33113, isPrevented, false);
        eventObj = JSProf.LWR(33119, eventObj, JSProf.LNE(33118, {
            stopImmediatePropagation: JSProf.LNF(33115, function () {
                isStopped = JSProf.LWR(33114, isStopped, true);
            }, 12),
            preventDefault: JSProf.LNF(33117, function () {
                isPrevented = JSProf.LWR(33116, isPrevented, true);
            }, 12),
            oldPath: currentPath,
            newPath: newPath,
            params: params
        }, 11));
        callbackArgs = JSProf.LWR(33122, callbackArgs, JSProf.LNE(33121, [JSProf.LRE(33120, eventObj)], 10));
        if (JSProf.LRE(33123, params) instanceof JSProf.LRU(33124, typeof Array === 'undefined' ? undefined : Array)) {
            callbackArgs = JSProf.LWR(33126, callbackArgs, callbackArgs.concat(JSProf.LRE(33125, params)));
        } else {
            for (var key in JSProf.LRE(33127, params)) {
                JSProf.LMC(33129, callbackArgs, 'push').push(JSProf.LGE(33128, params, 'key')[key]);
            }
        }
        for (i = JSProf.LWR(33130, i, 0), l = JSProf.LWR(33132, l, JSProf.LGD(33131, queue, 'length').length); JSProf.LRE(33133, i) < JSProf.LRE(33134, l); ++i) {
            if (!JSProf.LRE(33135, isStopped)) {
                JSProf.LMC(33137, queue[i], 'apply').apply(null, JSProf.LRE(33136, callbackArgs));
            }
        }
        return !JSProf.LRE(33138, isPrevented);
    }
    // Our actual class-like object
    var RouterBase = JSProf.LFC(33330, declare, false)(null, JSProf.LNE(33329, {
            _routes: null,
            _routeIndex: null,
            _started: false,
            _currentPath: "",
            idMatch: /:(\w[\w\d]*)/g,
            idReplacement: "([^\\/]+)",
            globMatch: /\*(\w[\w\d]*)/,
            globReplacement: "(.+)",
            constructor: JSProf.LNF(33148, function (kwArgs) {
                // A couple of safety initializations
                JSProf.LPD(33140, this, '_routes')._routes = JSProf.LRSP(33140, JSProf.LNE(33139, [], 10));
                JSProf.LPD(33142, this, '_routeIndex')._routeIndex = JSProf.LRSP(33142, JSProf.LNE(33141, {}, 11));
                // Simple constructor-style "Decorate myself all over" for now
                for (var i in JSProf.LRE(33143, kwArgs)) {
                    if (JSProf.LMC(33145, kwArgs, 'hasOwnProperty').hasOwnProperty(JSProf.LRE(33144, i))) {
                        JSProf.LPE(33147, this, 'i')[i] = JSProf.LRPE(33147, JSProf.LGE(33146, kwArgs, 'i')[i]);
                    }
                }
            }, 12),
            register: JSProf.LNF(33152, function (route, callback) {
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
                return JSProf.LMC(33151, this, '_registerRoute')._registerRoute(JSProf.LRE(33149, route), JSProf.LRE(33150, callback));
            }, 12),
            registerBefore: JSProf.LNF(33156, function (route, callback) {
                // summary:
                //		Registers a route to a handling callback, except before
                //		any previously registered callbacks
                // description:
                //		Much like the `register` method, `registerBefore` allows
                //		us to register route callbacks to happen before any
                //		previously registered callbacks. See the documentation for
                //		`register` for more details and examples.
                return JSProf.LMC(33155, this, '_registerRoute')._registerRoute(JSProf.LRE(33153, route), JSProf.LRE(33154, callback), true);
            }, 12),
            go: JSProf.LNF(33169, function (path, replace) {
                // summary:
                //		A simple pass-through to make changing the hash easy,
                //		without having to require dojo/hash directly. It also
                //		synchronously fires off any routes that match.
                // example:
                //	|	router.go("/foo/bar");
                var applyChange;
                if (typeof JSProf.LRE(33157, path) !== "string") {
                    return false;
                }
                path = JSProf.LWR(33160, path, JSProf.LFC(33159, trim, false)(JSProf.LRE(33158, path)));
                applyChange = JSProf.LWR(33163, applyChange, JSProf.LMC(33162, this, '_handlePathChange')._handlePathChange(JSProf.LRE(33161, path)));
                if (JSProf.LRE(33164, applyChange)) {
                    JSProf.LFC(33167, hash, false)(JSProf.LRE(33165, path), JSProf.LRE(33166, replace));
                }
                return JSProf.LRE(33168, applyChange);
            }, 12),
            startup: JSProf.LNF(33183, function (defaultPath) {
                // summary:
                //		This method must be called to activate the router. Until
                //		startup is called, no hash changes will trigger route
                //		callbacks.
                if (JSProf.LGD(33170, this, '_started')._started) {
                    return;
                }
                var self = this, startingPath = JSProf.LFC(33171, hash, false)();
                JSProf.LPD(33172, this, '_started')._started = JSProf.LRSP(33172, true);
                JSProf.LPD(33177, this, '_hashchangeHandle')._hashchangeHandle = JSProf.LRSP(33177, JSProf.LMC(33176, topic, 'subscribe').subscribe("/dojo/hashchange", JSProf.LNF(33175, function () {
                    JSProf.LMC(33174, self._handlePathChange, 'apply').apply(JSProf.LRE(33173, self), arguments);
                }, 12)));
                if (!JSProf.LRE(33178, startingPath)) {
                    // If there is no initial starting point, push our defaultPath into our
                    // history as the starting point
                    JSProf.LMC(33180, this, 'go').go(JSProf.LRE(33179, defaultPath), true);
                } else {
                    // Handle the starting path
                    JSProf.LMC(33182, this, '_handlePathChange')._handlePathChange(JSProf.LRE(33181, startingPath));
                }
            }, 12),
            destroy: JSProf.LNF(33186, function () {
                if (JSProf.LGD(33184, this, '_hashchangeHandle')._hashchangeHandle) {
                    JSProf.LMC(33185, this._hashchangeHandle, 'remove').remove();
                }
                this._routes = null;
                this._routeIndex = null;
            }, 12),
            _handlePathChange: JSProf.LNF(33228, function (newPath) {
                var i, j, li, lj, routeObj, result, allowChange, parameterNames, params, routes = JSProf.LGD(33187, this, '_routes')._routes, currentPath = JSProf.LGD(33188, this, '_currentPath')._currentPath;
                if (!JSProf.LGD(33189, this, '_started')._started || JSProf.LRE(33190, newPath) === JSProf.LRE(33191, currentPath)) {
                    return JSProf.LRE(33192, allowChange);
                }
                allowChange = JSProf.LWR(33193, allowChange, true);
                for (i = JSProf.LWR(33194, i, 0), li = JSProf.LWR(33196, li, JSProf.LGD(33195, routes, 'length').length); JSProf.LRE(33197, i) < JSProf.LRE(33198, li); ++i) {
                    routeObj = JSProf.LWR(33200, routeObj, JSProf.LGE(33199, routes, 'i')[i]);
                    result = JSProf.LWR(33202, result, routeObj.route.exec(JSProf.LRE(33201, newPath)));
                    if (JSProf.LRE(33203, result)) {
                        if (JSProf.LGD(33204, routeObj, 'parameterNames').parameterNames) {
                            parameterNames = JSProf.LWR(33206, parameterNames, JSProf.LGD(33205, routeObj, 'parameterNames').parameterNames);
                            params = JSProf.LWR(33208, params, JSProf.LNE(33207, {}, 11));
                            for (j = JSProf.LWR(33209, j, 0), lj = JSProf.LWR(33211, lj, JSProf.LGD(33210, parameterNames, 'length').length); JSProf.LRE(33212, j) < JSProf.LRE(33213, lj); ++j) {
                                JSProf.LPE(33216, params, JSProf.TMPS.t5d132b3fc890c6566b11501c55a46b116cfff313 = parameterNames[j])[JSProf.TMPS.t5d132b3fc890c6566b11501c55a46b116cfff313] = JSProf.LRPE(33216, JSProf.LGE(33215, result, JSProf.TMPS.t4d62450f4f563df411091ddecc5fc6b78ffdb5c4 = JSProf.LRE(33214, j) + 1)[JSProf.TMPS.t4d62450f4f563df411091ddecc5fc6b78ffdb5c4]);
                            }
                        } else {
                            params = JSProf.LWR(33218, params, JSProf.LMC(33217, result, 'slice').slice(1));
                        }
                        allowChange = JSProf.LWR(33223, allowChange, JSProf.LMC(33222, routeObj, 'fire').fire(JSProf.LRE(33219, params), JSProf.LRE(33220, currentPath), JSProf.LRE(33221, newPath)));
                    }
                }
                if (JSProf.LRE(33224, allowChange)) {
                    JSProf.LPD(33226, this, '_currentPath')._currentPath = JSProf.LRSP(33226, JSProf.LRE(33225, newPath));
                }
                return JSProf.LRE(33227, allowChange);
            }, 12),
            _convertRouteToRegExp: JSProf.LNF(33242, function (route) {
                // Sub in based on IDs and globs
                route = JSProf.LWR(33232, route, JSProf.LMC(33231, route, 'replace').replace(JSProf.LGD(33229, this, 'idMatch').idMatch, JSProf.LGD(33230, this, 'idReplacement').idReplacement));
                route = JSProf.LWR(33236, route, JSProf.LMC(33235, route, 'replace').replace(JSProf.LGD(33233, this, 'globMatch').globMatch, JSProf.LGD(33234, this, 'globReplacement').globReplacement));
                // Make sure it's an exact match
                route = JSProf.LWR(33238, route, "^" + JSProf.LRE(33237, route) + "$");
                return JSProf.LNE(33241, new (JSProf.LFC(33240, RegExp, true))(JSProf.LRE(33239, route)), 'RegExp');
            }, 12),
            _getParameterNames: JSProf.LNF(33257, function (route) {
                var idMatch = JSProf.LGD(33243, this, 'idMatch').idMatch, globMatch = JSProf.LGD(33244, this, 'globMatch').globMatch, parameterNames = JSProf.LNE(33245, [], 10), match;
                JSProf.LPD(33246, idMatch, 'lastIndex').lastIndex = JSProf.LRSP(33246, 0);
                while ((match = JSProf.LWR(33248, match, idMatch.exec(JSProf.LRE(33247, route)))) !== null) {
                    JSProf.LMC(33250, parameterNames, 'push').push(JSProf.LGE(33249, match, 1)[1]);
                }
                if ((match = JSProf.LWR(33252, match, globMatch.exec(JSProf.LRE(33251, route)))) !== null) {
                    JSProf.LMC(33254, parameterNames, 'push').push(JSProf.LGE(33253, match, 1)[1]);
                }
                return JSProf.LGD(33255, parameterNames, 'length').length > 0 ? JSProf.LRE(33256, parameterNames) : null;
            }, 12),
            _indexRoutes: JSProf.LNF(33271, function () {
                var i, l, route, routeIndex, routes = JSProf.LGD(33258, this, '_routes')._routes;
                // Start a new route index
                routeIndex = JSProf.LWR(33261, routeIndex, JSProf.LPD(33260, this, '_routeIndex')._routeIndex = JSProf.LRSP(33260, JSProf.LNE(33259, {}, 11)));
                // Set it up again
                for (i = JSProf.LWR(33262, i, 0), l = JSProf.LWR(33264, l, JSProf.LGD(33263, routes, 'length').length); JSProf.LRE(33265, i) < JSProf.LRE(33266, l); ++i) {
                    route = JSProf.LWR(33268, route, JSProf.LGE(33267, routes, 'i')[i]);
                    JSProf.LPE(33270, routeIndex, JSProf.TMPS.t28ea5f7f0227053b61143b1992629814c337d42b = route.route)[JSProf.TMPS.t28ea5f7f0227053b61143b1992629814c337d42b] = JSProf.LRPE(33270, JSProf.LRE(33269, i));
                }
            }, 12),
            _registerRoute: JSProf.LNF(33328, function (route, callback, isBefore) {
                var index, exists, routeObj, callbackQueue, removed, self = this, routes = JSProf.LGD(33272, this, '_routes')._routes, routeIndex = JSProf.LGD(33273, this, '_routeIndex')._routeIndex;
                // Try to fetch the route if it already exists.
                // This works thanks to stringifying of regex
                index = JSProf.LWR(33275, index, JSProf.LGE(33274, this._routeIndex, 'route')[route]);
                exists = JSProf.LWR(33277, exists, typeof JSProf.LRE(33276, index) !== "undefined");
                if (JSProf.LRE(33278, exists)) {
                    routeObj = JSProf.LWR(33280, routeObj, JSProf.LGE(33279, routes, 'index')[index]);
                }
                // If we didn't get one, make a default start point
                if (!JSProf.LRE(33281, routeObj)) {
                    routeObj = JSProf.LWR(33284, routeObj, JSProf.LNE(33283, {
                        route: route,
                        callbackQueue: JSProf.LNE(33282, [], 10),
                        fire: fireRoute
                    }, 11));
                }
                callbackQueue = JSProf.LWR(33286, callbackQueue, JSProf.LGD(33285, routeObj, 'callbackQueue').callbackQueue);
                if (typeof JSProf.LRE(33287, route) == "string") {
                    JSProf.LPD(33290, routeObj, 'parameterNames').parameterNames = JSProf.LRSP(33290, JSProf.LMC(33289, this, '_getParameterNames')._getParameterNames(JSProf.LRE(33288, route)));
                    JSProf.LPD(33293, routeObj, 'route').route = JSProf.LRSP(33293, JSProf.LMC(33292, this, '_convertRouteToRegExp')._convertRouteToRegExp(JSProf.LRE(33291, route)));
                }
                if (JSProf.LRE(33294, isBefore)) {
                    callbackQueue.unshift(JSProf.LRE(33295, callback));
                } else {
                    JSProf.LMC(33297, callbackQueue, 'push').push(JSProf.LRE(33296, callback));
                }
                if (!JSProf.LRE(33298, exists)) {
                    index = JSProf.LWR(33300, index, JSProf.LGD(33299, routes, 'length').length);
                    JSProf.LPE(33302, routeIndex, 'route')[route] = JSProf.LRPE(33302, JSProf.LRE(33301, index));
                    JSProf.LMC(33304, routes, 'push').push(JSProf.LRE(33303, routeObj));
                }
                // Useful in a moment to keep from re-removing routes
                removed = JSProf.LWR(33305, removed, false);
                return JSProf.LNE(33327, {
                    remove: JSProf.LNF(33321, function () {
                        var i, l;
                        if (JSProf.LRE(33306, removed)) {
                            return;
                        }
                        for (i = JSProf.LWR(33307, i, 0), l = JSProf.LWR(33309, l, JSProf.LGD(33308, callbackQueue, 'length').length); JSProf.LRE(33310, i) < JSProf.LRE(33311, l); ++i) {
                            if (JSProf.LGE(33312, callbackQueue, 'i')[i] === JSProf.LRE(33313, callback)) {
                                JSProf.LMC(33315, callbackQueue, 'splice').splice(JSProf.LRE(33314, i), 1);
                            }
                        }
                        if (JSProf.LGD(33316, callbackQueue, 'length').length === 0) {
                            JSProf.LMC(33318, routes, 'splice').splice(JSProf.LRE(33317, index), 1);
                            JSProf.LMC(33319, self, '_indexRoutes')._indexRoutes();
                        }
                        removed = JSProf.LWR(33320, removed, true);
                    }, 12),
                    register: JSProf.LNF(33326, function (callback, isBefore) {
                        return JSProf.LMC(33325, self, 'register').register(JSProf.LRE(33322, route), JSProf.LRE(33323, callback), JSProf.LRE(33324, isBefore));
                    }, 12)
                }, 11);
            }, 12)
        }, 11));
    return JSProf.LRE(33331, RouterBase);
}, 12));