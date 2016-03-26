JSProf.LFC(39687, define, false)(JSProf.LNE(39537, [
    "./_base/kernel",
    "require",
    "./_base/config",
    "./aspect",
    "./_base/lang",
    "./topic",
    "./domReady",
    "./sniff"
], 10), JSProf.LNF(39686, function (dojo, require, config, aspect, lang, topic, domReady, has) {
    JSProf.LFD(39680, _getSegment);
    JSProf.LFD(39681, _getHash);
    JSProf.LFD(39682, _dispatchEvent);
    JSProf.LFD(39683, _pollLocation);
    JSProf.LFD(39684, _replace);
    JSProf.LFD(39685, IEUriMonitor);
    // module:
    //		dojo/hash
    JSProf.LPD(39548, dojo, 'hash').hash = JSProf.LRSP(39548, JSProf.LNF(39547, function (hash, replace) {
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
        if (!JSProf.LGD(39538, arguments, 'length').length) {
            return JSProf.LFC(39539, _getHash, false)();
        }
        // setter
        if (hash.charAt(0) == "#") {
            hash = JSProf.LWR(39540, hash, hash.substring(1));
        }
        if (JSProf.LRE(39541, replace)) {
            JSProf.LFC(39543, _replace, false)(JSProf.LRE(39542, hash));
        } else {
            JSProf.LPD(39545, location, 'href').href = JSProf.LRSP(39545, "#" + JSProf.LRE(39544, hash));
        }
        return JSProf.LRE(39546, hash);    // String
    }, 12));
    // Global vars
    var _recentHash, _ieUriMonitor, _connect, _pollFrequency = JSProf.LGD(39549, config, 'hashPollFrequency').hashPollFrequency || 100;
    //Internal functions
    function _getSegment(str, delimiter) {
        var i = JSProf.LMC(39551, str, 'indexOf').indexOf(JSProf.LRE(39550, delimiter));
        return JSProf.LRE(39552, i) >= 0 ? str.substring(JSProf.LRE(39553, i) + 1) : "";
    }
    function _getHash() {
        return JSProf.LFC(39555, _getSegment, false)(JSProf.LGD(39554, location, 'href').href, "#");
    }
    function _dispatchEvent() {
        JSProf.LMC(39557, topic, 'publish').publish("/dojo/hashchange", JSProf.LFC(39556, _getHash, false)());
    }
    function _pollLocation() {
        if (JSProf.LFC(39558, _getHash, false)() === JSProf.LRE(39559, _recentHash)) {
            return;
        }
        _recentHash = JSProf.LWR(39561, _recentHash, JSProf.LFC(39560, _getHash, false)());
        JSProf.LFC(39562, _dispatchEvent, false)();
    }
    function _replace(hash) {
        if (JSProf.LRE(39563, _ieUriMonitor)) {
            if (JSProf.LMC(39564, _ieUriMonitor, 'isTransitioning').isTransitioning()) {
                setTimeout(JSProf.LMC(39567, lang, 'hitch').hitch(null, JSProf.LRE(39565, _replace), JSProf.LRE(39566, hash)), JSProf.LRE(39568, _pollFrequency));
                return;
            }
            var href = JSProf.LGD(39569, _ieUriMonitor.iframe.location, 'href').href;
            var index = JSProf.LMC(39570, href, 'indexOf').indexOf('?');
            // main frame will detect and update itself
            JSProf.LMC(39573, _ieUriMonitor.iframe.location, 'replace').replace(href.substring(0, JSProf.LRE(39571, index)) + "?" + JSProf.LRE(39572, hash));
            return;
        }
        JSProf.LMC(39575, location, 'replace').replace("#" + JSProf.LRE(39574, hash));
        !JSProf.LRE(39576, _connect) && JSProf.LFC(39577, _pollLocation, false)();
    }
    function IEUriMonitor() {
        JSProf.LFD(39658, resetState);
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
        var ifr = JSProf.LMC(39578, document, 'createElement').createElement("iframe"), IFRAME_ID = "dojo-hash-iframe", ifrSrc = JSProf.LGD(39579, config, 'dojoBlankHtmlUrl').dojoBlankHtmlUrl || JSProf.LMC(39580, require, 'toUrl').toUrl("./resources/blank.html");
        if (JSProf.LGD(39581, config, 'useXDomain').useXDomain && !JSProf.LGD(39582, config, 'dojoBlankHtmlUrl').dojoBlankHtmlUrl) {
            JSProf.LMC(39583, console, 'warn').warn("dojo/hash: When using cross-domain Dojo builds," + " please save dojo/resources/blank.html to your domain and set djConfig.dojoBlankHtmlUrl" + " to the path on your domain to blank.html");
        }
        JSProf.LPD(39585, ifr, 'id').id = JSProf.LRSP(39585, JSProf.LRE(39584, IFRAME_ID));
        JSProf.LPD(39588, ifr, 'src').src = JSProf.LRSP(39588, JSProf.LRE(39586, ifrSrc) + "?" + JSProf.LFC(39587, _getHash, false)());
        JSProf.LPD(39589, ifr.style, 'display').display = JSProf.LRSP(39589, "none");
        JSProf.LMC(39591, document.body, 'appendChild').appendChild(JSProf.LRE(39590, ifr));
        JSProf.LPD(39593, this, 'iframe').iframe = JSProf.LRSP(39593, JSProf.LGE(39592, dojo.global, 'IFRAME_ID')[IFRAME_ID]);
        var recentIframeQuery, transitioning, expectedIFrameQuery, docTitle, ifrOffline, iframeLoc = JSProf.LGD(39594, this.iframe, 'location').location;
        function resetState() {
            _recentHash = JSProf.LWR(39596, _recentHash, JSProf.LFC(39595, _getHash, false)());
            recentIframeQuery = JSProf.LWR(39601, recentIframeQuery, JSProf.LRE(39597, ifrOffline) ? JSProf.LRE(39598, _recentHash) : JSProf.LFC(39600, _getSegment, false)(JSProf.LGD(39599, iframeLoc, 'href').href, "?"));
            transitioning = JSProf.LWR(39602, transitioning, false);
            expectedIFrameQuery = null;
        }
        JSProf.LPD(39605, this, 'isTransitioning').isTransitioning = JSProf.LRSP(39605, JSProf.LNF(39604, function () {
            return JSProf.LRE(39603, transitioning);
        }, 12));
        JSProf.LPD(39653, this, 'pollLocation').pollLocation = JSProf.LRSP(39653, JSProf.LNF(39652, function () {
            if (!JSProf.LRE(39606, ifrOffline)) {
                try {
                    //see if we can access the iframe's location without a permission denied error
                    var iframeSearch = JSProf.LFC(39608, _getSegment, false)(JSProf.LGD(39607, iframeLoc, 'href').href, "?");
                    //good, the iframe is same origin (no thrown exception)
                    if (JSProf.LGD(39609, document, 'title').title != JSProf.LRE(39610, docTitle)) {
                        //sync title of main window with title of iframe.
                        docTitle = JSProf.LWR(39613, docTitle, JSProf.LPD(39612, this.iframe.document, 'title').title = JSProf.LRSP(39612, JSProf.LGD(39611, document, 'title').title));
                    }
                } catch (e) {
                    //permission denied - server cannot be reached.
                    ifrOffline = JSProf.LWR(39614, ifrOffline, true);
                    JSProf.LMC(39615, console, 'error').error("dojo/hash: Error adding history entry. Server unreachable.");
                }
            }
            var hash = JSProf.LFC(39616, _getHash, false)();
            if (JSProf.LRE(39617, transitioning) && JSProf.LRE(39618, _recentHash) === JSProf.LRE(39619, hash)) {
                // we're in an iframe transition (s4 or s5)
                if (JSProf.LRE(39620, ifrOffline) || JSProf.LRE(39621, iframeSearch) === JSProf.LRE(39622, expectedIFrameQuery)) {
                    // s5 (iframe caught up to main window or iframe offline), transition back to s1
                    JSProf.LFC(39623, resetState, false)();
                    JSProf.LFC(39624, _dispatchEvent, false)();
                } else {
                    // s4 (waiting for iframe to catch up to main window)
                    setTimeout(JSProf.LMC(39626, lang, 'hitch').hitch(this, JSProf.LGD(39625, this, 'pollLocation').pollLocation), 0);
                    return;
                }
            } else if (JSProf.LRE(39627, _recentHash) === JSProf.LRE(39628, hash) && (JSProf.LRE(39629, ifrOffline) || JSProf.LRE(39630, recentIframeQuery) === JSProf.LRE(39631, iframeSearch))) {
            } else {
                // the user has initiated a URL change somehow.
                // sync iframe query <-> main window hash
                if (JSProf.LRE(39632, _recentHash) !== JSProf.LRE(39633, hash)) {
                    // s2 (main window location changed), set iframe url and transition to s4
                    _recentHash = JSProf.LWR(39635, _recentHash, JSProf.LRE(39634, hash));
                    transitioning = JSProf.LWR(39636, transitioning, true);
                    expectedIFrameQuery = JSProf.LWR(39638, expectedIFrameQuery, JSProf.LRE(39637, hash));
                    JSProf.LPD(39641, ifr, 'src').src = JSProf.LRSP(39641, JSProf.LRE(39639, ifrSrc) + "?" + JSProf.LRE(39640, expectedIFrameQuery));
                    ifrOffline = JSProf.LWR(39642, ifrOffline, false);
                    //we're updating the iframe src - set offline to false so we can check again on next poll.
                    setTimeout(JSProf.LMC(39644, lang, 'hitch').hitch(this, JSProf.LGD(39643, this, 'pollLocation').pollLocation), 0);
                    //yielded transition to s4 while iframe reloads.
                    return;
                } else if (!JSProf.LRE(39645, ifrOffline)) {
                    // s3 (iframe location changed via back/forward button), set main window url and transition to s1.
                    JSProf.LPD(39646, location, 'href').href = JSProf.LRSP(39646, "#" + iframeLoc.search.substring(1));
                    JSProf.LFC(39647, resetState, false)();
                    JSProf.LFC(39648, _dispatchEvent, false)();
                }
            }
            setTimeout(JSProf.LMC(39650, lang, 'hitch').hitch(this, JSProf.LGD(39649, this, 'pollLocation').pollLocation), JSProf.LRE(39651, _pollFrequency));
        }, 12));
        JSProf.LFC(39654, resetState, false)();
        // initialize state (transition to s1)
        setTimeout(JSProf.LMC(39656, lang, 'hitch').hitch(this, JSProf.LGD(39655, this, 'pollLocation').pollLocation), JSProf.LRE(39657, _pollFrequency));
    }
    JSProf.LFC(39678, domReady, false)(JSProf.LNF(39677, function () {
        if ("onhashchange" in JSProf.LGD(39659, dojo, 'global').global && (!JSProf.LFC(39660, has, false)("ie") || JSProf.LFC(39661, has, false)("ie") >= 8 && JSProf.LGD(39662, document, 'compatMode').compatMode != "BackCompat")) {
            //need this IE browser test because "onhashchange" exists in IE8 in IE7 mode
            _connect = JSProf.LWR(39666, _connect, JSProf.LMC(39665, aspect, 'after').after(JSProf.LGD(39663, dojo, 'global').global, "onhashchange", JSProf.LRE(39664, _dispatchEvent), true));
        } else {
            if (JSProf.LGD(39667, document, 'addEventListener').addEventListener) {
                // Non-IE
                _recentHash = JSProf.LWR(39669, _recentHash, JSProf.LFC(39668, _getHash, false)());
                JSProf.LFC(39672, setInterval, false)(JSProf.LRE(39670, _pollLocation), JSProf.LRE(39671, _pollFrequency));    //Poll the window location for changes
            } else if (JSProf.LGD(39673, document, 'attachEvent').attachEvent) {
                // IE7-
                //Use hidden iframe in versions of IE that don't have onhashchange event
                _ieUriMonitor = JSProf.LWR(39676, _ieUriMonitor, JSProf.LNE(39675, new (JSProf.LFC(39674, IEUriMonitor, true))(), 'IEUriMonitor'));
            }    // else non-supported browser, do nothing.
        }
    }, 12));
    return JSProf.LGD(39679, dojo, 'hash').hash;
}, 12));