JSProf.LFC(39685, define, false)(JSProf.LNE(39535, [
    "./_base/kernel",
    "require",
    "./_base/config",
    "./aspect",
    "./_base/lang",
    "./topic",
    "./domReady",
    "./sniff"
], 10), JSProf.LNF(39684, function (dojo, require, config, aspect, lang, topic, domReady, has) {
    JSProf.LFD(39678, _getSegment);
    JSProf.LFD(39679, _getHash);
    JSProf.LFD(39680, _dispatchEvent);
    JSProf.LFD(39681, _pollLocation);
    JSProf.LFD(39682, _replace);
    JSProf.LFD(39683, IEUriMonitor);
    // module:
    //		dojo/hash
    JSProf.LPD(39546, dojo, 'hash').hash = JSProf.LRSP(39546, JSProf.LNF(39545, function (hash, replace) {
        // summary:
        //		Gets or sets the hash string in the browser URL.
        // description:
        //		Handles getting and setting of location.hash.
        //
        //		 - If no arguments are passed, acts as a getter.
        //		 - If a string is passed, acts as a setter.
        // hash:
        //		the hash is set - #string.
        // replace:
        //		If true, updates the hash value in the current history
        //		state instead of creating a new history state.
        // returns:
        //		when used as a getter, returns the current hash string.
        //		when used as a setter, returns the new hash string.
        // example:
        //	|	topic.subscribe("/dojo/hashchange", context, callback);
        //	|
        //	|	function callback (hashValue){
        //	|		// do something based on the hash value.
        //	|	}
        // getter
        if (!JSProf.LGD(39536, arguments, 'length').length) {
            return JSProf.LFC(39537, _getHash, false)();
        }
        // setter
        if (hash.charAt(0) == "#") {
            hash = JSProf.LWR(39538, hash, hash.substring(1));
        }
        if (JSProf.LRE(39539, replace)) {
            JSProf.LFC(39541, _replace, false)(JSProf.LRE(39540, hash));
        } else {
            JSProf.LPD(39543, location, 'href').href = JSProf.LRSP(39543, "#" + JSProf.LRE(39542, hash));
        }
        return JSProf.LRE(39544, hash);    // String
    }, 12));
    // Global vars
    var _recentHash, _ieUriMonitor, _connect, _pollFrequency = JSProf.LGD(39547, config, 'hashPollFrequency').hashPollFrequency || 100;
    //Internal functions
    function _getSegment(str, delimiter) {
        var i = JSProf.LMC(39549, str, 'indexOf').indexOf(JSProf.LRE(39548, delimiter));
        return JSProf.LRE(39550, i) >= 0 ? str.substring(JSProf.LRE(39551, i) + 1) : "";
    }
    function _getHash() {
        return JSProf.LFC(39553, _getSegment, false)(JSProf.LGD(39552, location, 'href').href, "#");
    }
    function _dispatchEvent() {
        JSProf.LMC(39555, topic, 'publish').publish("/dojo/hashchange", JSProf.LFC(39554, _getHash, false)());
    }
    function _pollLocation() {
        if (JSProf.LFC(39556, _getHash, false)() === JSProf.LRE(39557, _recentHash)) {
            return;
        }
        _recentHash = JSProf.LWR(39559, _recentHash, JSProf.LFC(39558, _getHash, false)());
        JSProf.LFC(39560, _dispatchEvent, false)();
    }
    function _replace(hash) {
        if (JSProf.LRE(39561, _ieUriMonitor)) {
            if (JSProf.LMC(39562, _ieUriMonitor, 'isTransitioning').isTransitioning()) {
                setTimeout(JSProf.LMC(39565, lang, 'hitch').hitch(null, JSProf.LRE(39563, _replace), JSProf.LRE(39564, hash)), JSProf.LRE(39566, _pollFrequency));
                return;
            }
            var href = JSProf.LGD(39567, _ieUriMonitor.iframe.location, 'href').href;
            var index = JSProf.LMC(39568, href, 'indexOf').indexOf('?');
            // main frame will detect and update itself
            JSProf.LMC(39571, _ieUriMonitor.iframe.location, 'replace').replace(href.substring(0, JSProf.LRE(39569, index)) + "?" + JSProf.LRE(39570, hash));
            return;
        }
        JSProf.LMC(39573, location, 'replace').replace("#" + JSProf.LRE(39572, hash));
        !JSProf.LRE(39574, _connect) && JSProf.LFC(39575, _pollLocation, false)();
    }
    function IEUriMonitor() {
        JSProf.LFD(39656, resetState);
        // summary:
        //		Determine if the browser's URI has changed or if the user has pressed the
        //		back or forward button. If so, call _dispatchEvent.
        //
        // description:
        //		IE doesn't add changes to the URI's hash into the history unless the hash
        //		value corresponds to an actual named anchor in the document. To get around
        //		this IE difference, we use a background IFrame to maintain a back-forward
        //		history, by updating the IFrame's query string to correspond to the
        //		value of the main browser location's hash value.
        //
        //		E.g. if the value of the browser window's location changes to
        //
        //		#action=someAction
        //
        //		... then we'd update the IFrame's source to:
        //
        //		?action=someAction
        //
        //		This design leads to a somewhat complex state machine, which is
        //		described below:
        //
        //		####s1
        //
        //		Stable state - neither the window's location has changed nor
        //		has the IFrame's location. Note that this is the 99.9% case, so
        //		we optimize for it.
        //
        //		Transitions: s1, s2, s3
        //
        //		####s2
        //
        //		Window's location changed - when a user clicks a hyperlink or
        //		code programmatically changes the window's URI.
        //
        //		Transitions: s4
        //
        //		####s3
        //
        //		Iframe's location changed as a result of user pressing back or
        //		forward - when the user presses back or forward, the location of
        //		the background's iframe changes to the previous or next value in
        //		its history.
        //
        //		Transitions: s1
        //
        //		####s4
        //
        //		IEUriMonitor has programmatically changed the location of the
        //		background iframe, but it's location hasn't yet changed. In this
        //		case we do nothing because we need to wait for the iframe's
        //		location to reflect its actual state.
        //
        //		Transitions: s4, s5
        //
        //		####s5
        //
        //		IEUriMonitor has programmatically changed the location of the
        //		background iframe, and the iframe's location has caught up with
        //		reality. In this case we need to transition to s1.
        //
        //		Transitions: s1
        //
        //		The hashchange event is always dispatched on the transition back to s1.
        // create and append iframe
        var ifr = JSProf.LMC(39576, document, 'createElement').createElement("iframe"), IFRAME_ID = "dojo-hash-iframe", ifrSrc = JSProf.LGD(39577, config, 'dojoBlankHtmlUrl').dojoBlankHtmlUrl || JSProf.LMC(39578, require, 'toUrl').toUrl("./resources/blank.html");
        if (JSProf.LGD(39579, config, 'useXDomain').useXDomain && !JSProf.LGD(39580, config, 'dojoBlankHtmlUrl').dojoBlankHtmlUrl) {
            JSProf.LMC(39581, console, 'warn').warn("dojo/hash: When using cross-domain Dojo builds," + " please save dojo/resources/blank.html to your domain and set djConfig.dojoBlankHtmlUrl" + " to the path on your domain to blank.html");
        }
        JSProf.LPD(39583, ifr, 'id').id = JSProf.LRSP(39583, JSProf.LRE(39582, IFRAME_ID));
        JSProf.LPD(39586, ifr, 'src').src = JSProf.LRSP(39586, JSProf.LRE(39584, ifrSrc) + "?" + JSProf.LFC(39585, _getHash, false)());
        JSProf.LPD(39587, ifr.style, 'display').display = JSProf.LRSP(39587, "none");
        JSProf.LMC(39589, document.body, 'appendChild').appendChild(JSProf.LRE(39588, ifr));
        JSProf.LPD(39591, this, 'iframe').iframe = JSProf.LRSP(39591, JSProf.LGE(39590, dojo.global, 'IFRAME_ID')[IFRAME_ID]);
        var recentIframeQuery, transitioning, expectedIFrameQuery, docTitle, ifrOffline, iframeLoc = JSProf.LGD(39592, this.iframe, 'location').location;
        function resetState() {
            _recentHash = JSProf.LWR(39594, _recentHash, JSProf.LFC(39593, _getHash, false)());
            recentIframeQuery = JSProf.LWR(39599, recentIframeQuery, JSProf.LRE(39595, ifrOffline) ? JSProf.LRE(39596, _recentHash) : JSProf.LFC(39598, _getSegment, false)(JSProf.LGD(39597, iframeLoc, 'href').href, "?"));
            transitioning = JSProf.LWR(39600, transitioning, false);
            expectedIFrameQuery = null;
        }
        JSProf.LPD(39603, this, 'isTransitioning').isTransitioning = JSProf.LRSP(39603, JSProf.LNF(39602, function () {
            return JSProf.LRE(39601, transitioning);
        }, 12));
        JSProf.LPD(39651, this, 'pollLocation').pollLocation = JSProf.LRSP(39651, JSProf.LNF(39650, function () {
            if (!JSProf.LRE(39604, ifrOffline)) {
                try {
                    //see if we can access the iframe's location without a permission denied error
                    var iframeSearch = JSProf.LFC(39606, _getSegment, false)(JSProf.LGD(39605, iframeLoc, 'href').href, "?");
                    //good, the iframe is same origin (no thrown exception)
                    if (JSProf.LGD(39607, document, 'title').title != JSProf.LRE(39608, docTitle)) {
                        //sync title of main window with title of iframe.
                        docTitle = JSProf.LWR(39611, docTitle, JSProf.LPD(39610, this.iframe.document, 'title').title = JSProf.LRSP(39610, JSProf.LGD(39609, document, 'title').title));
                    }
                } catch (e) {
                    //permission denied - server cannot be reached.
                    ifrOffline = JSProf.LWR(39612, ifrOffline, true);
                    JSProf.LMC(39613, console, 'error').error("dojo/hash: Error adding history entry. Server unreachable.");
                }
            }
            var hash = JSProf.LFC(39614, _getHash, false)();
            if (JSProf.LRE(39615, transitioning) && JSProf.LRE(39616, _recentHash) === JSProf.LRE(39617, hash)) {
                // we're in an iframe transition (s4 or s5)
                if (JSProf.LRE(39618, ifrOffline) || JSProf.LRE(39619, iframeSearch) === JSProf.LRE(39620, expectedIFrameQuery)) {
                    // s5 (iframe caught up to main window or iframe offline), transition back to s1
                    JSProf.LFC(39621, resetState, false)();
                    JSProf.LFC(39622, _dispatchEvent, false)();
                } else {
                    // s4 (waiting for iframe to catch up to main window)
                    setTimeout(JSProf.LMC(39624, lang, 'hitch').hitch(this, JSProf.LGD(39623, this, 'pollLocation').pollLocation), 0);
                    return;
                }
            } else if (JSProf.LRE(39625, _recentHash) === JSProf.LRE(39626, hash) && (JSProf.LRE(39627, ifrOffline) || JSProf.LRE(39628, recentIframeQuery) === JSProf.LRE(39629, iframeSearch))) {
            } else {
                // the user has initiated a URL change somehow.
                // sync iframe query <-> main window hash
                if (JSProf.LRE(39630, _recentHash) !== JSProf.LRE(39631, hash)) {
                    // s2 (main window location changed), set iframe url and transition to s4
                    _recentHash = JSProf.LWR(39633, _recentHash, JSProf.LRE(39632, hash));
                    transitioning = JSProf.LWR(39634, transitioning, true);
                    expectedIFrameQuery = JSProf.LWR(39636, expectedIFrameQuery, JSProf.LRE(39635, hash));
                    JSProf.LPD(39639, ifr, 'src').src = JSProf.LRSP(39639, JSProf.LRE(39637, ifrSrc) + "?" + JSProf.LRE(39638, expectedIFrameQuery));
                    ifrOffline = JSProf.LWR(39640, ifrOffline, false);
                    //we're updating the iframe src - set offline to false so we can check again on next poll.
                    setTimeout(JSProf.LMC(39642, lang, 'hitch').hitch(this, JSProf.LGD(39641, this, 'pollLocation').pollLocation), 0);
                    //yielded transition to s4 while iframe reloads.
                    return;
                } else if (!JSProf.LRE(39643, ifrOffline)) {
                    // s3 (iframe location changed via back/forward button), set main window url and transition to s1.
                    JSProf.LPD(39644, location, 'href').href = JSProf.LRSP(39644, "#" + iframeLoc.search.substring(1));
                    JSProf.LFC(39645, resetState, false)();
                    JSProf.LFC(39646, _dispatchEvent, false)();
                }
            }
            setTimeout(JSProf.LMC(39648, lang, 'hitch').hitch(this, JSProf.LGD(39647, this, 'pollLocation').pollLocation), JSProf.LRE(39649, _pollFrequency));
        }, 12));
        JSProf.LFC(39652, resetState, false)();
        // initialize state (transition to s1)
        setTimeout(JSProf.LMC(39654, lang, 'hitch').hitch(this, JSProf.LGD(39653, this, 'pollLocation').pollLocation), JSProf.LRE(39655, _pollFrequency));
    }
    JSProf.LFC(39676, domReady, false)(JSProf.LNF(39675, function () {
        if ("onhashchange" in JSProf.LGD(39657, dojo, 'global').global && (!JSProf.LFC(39658, has, false)("ie") || JSProf.LFC(39659, has, false)("ie") >= 8 && JSProf.LGD(39660, document, 'compatMode').compatMode != "BackCompat")) {
            //need this IE browser test because "onhashchange" exists in IE8 in IE7 mode
            _connect = JSProf.LWR(39664, _connect, JSProf.LMC(39663, aspect, 'after').after(JSProf.LGD(39661, dojo, 'global').global, "onhashchange", JSProf.LRE(39662, _dispatchEvent), true));
        } else {
            if (JSProf.LGD(39665, document, 'addEventListener').addEventListener) {
                // Non-IE
                _recentHash = JSProf.LWR(39667, _recentHash, JSProf.LFC(39666, _getHash, false)());
                JSProf.LFC(39670, setInterval, false)(JSProf.LRE(39668, _pollLocation), JSProf.LRE(39669, _pollFrequency));    //Poll the window location for changes
            } else if (JSProf.LGD(39671, document, 'attachEvent').attachEvent) {
                // IE7-
                //Use hidden iframe in versions of IE that don't have onhashchange event
                _ieUriMonitor = JSProf.LWR(39674, _ieUriMonitor, JSProf.LNE(39673, new (JSProf.LFC(39672, IEUriMonitor, true))(), 'IEUriMonitor'));
            }    // else non-supported browser, do nothing.
        }
    }, 12));
    return JSProf.LGD(39677, dojo, 'hash').hash;
}, 12));