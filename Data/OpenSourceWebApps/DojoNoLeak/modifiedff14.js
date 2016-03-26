JSProf.LFC(9613, define, false)(JSProf.LNE(9493, ["./kernel"], 10), JSProf.LNF(9612, function (dojo) {
    // module:
    //		dojo/url
    var ore = JSProf.LNE(9495, new (JSProf.LFC(9494, RegExp, true))("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?$"), 'RegExp'), ire = JSProf.LNE(9497, new (JSProf.LFC(9496, RegExp, true))("^((([^\\[:]+):)?([^@]+)@)?(\\[([^\\]]+)\\]|([^\\[:]*))(:([0-9]+))?$"), 'RegExp'), _Url = JSProf.LNF(9606, function () {
            var n = null, _a = arguments, uri = JSProf.LNE(9499, [JSProf.LGE(9498, _a, 0)[0]], 10);
            // resolve uri components relative to each other
            for (var i = 1; JSProf.LRE(9500, i) < JSProf.LGD(9501, _a, 'length').length; i++) {
                if (!JSProf.LGE(9502, _a, 'i')[i]) {
                    continue;
                }
                // Safari doesn't support this.constructor so we have to be explicit
                // FIXME: Tracked (and fixed) in Webkit bug 3537.
                //		http://bugs.webkit.org/show_bug.cgi?id=3537
                var relobj = JSProf.LNE(9505, new (JSProf.LFC(9504, _Url, true))(JSProf.LGE(9503, _a, 'i')[i] + ""), '_Url'), uriobj = JSProf.LNE(9508, new (JSProf.LFC(9507, _Url, true))(JSProf.LGE(9506, uri, 0)[0] + ""), '_Url');
                if (JSProf.LGD(9509, relobj, 'path').path == "" && !JSProf.LGD(9510, relobj, 'scheme').scheme && !JSProf.LGD(9511, relobj, 'authority').authority && !JSProf.LGD(9512, relobj, 'query').query) {
                    if (JSProf.LGD(9513, relobj, 'fragment').fragment != JSProf.LRE(9514, n)) {
                        JSProf.LPD(9516, uriobj, 'fragment').fragment = JSProf.LRSP(9516, JSProf.LGD(9515, relobj, 'fragment').fragment);
                    }
                    relobj = JSProf.LWR(9518, relobj, JSProf.LRE(9517, uriobj));
                } else if (!JSProf.LGD(9519, relobj, 'scheme').scheme) {
                    JSProf.LPD(9521, relobj, 'scheme').scheme = JSProf.LRSP(9521, JSProf.LGD(9520, uriobj, 'scheme').scheme);
                    if (!JSProf.LGD(9522, relobj, 'authority').authority) {
                        JSProf.LPD(9524, relobj, 'authority').authority = JSProf.LRSP(9524, JSProf.LGD(9523, uriobj, 'authority').authority);
                        if (relobj.path.charAt(0) != "/") {
                            var path = uriobj.path.substring(0, JSProf.LMC(9525, uriobj.path, 'lastIndexOf').lastIndexOf("/") + 1) + JSProf.LGD(9526, relobj, 'path').path;
                            var segs = path.split("/");
                            for (var j = 0; JSProf.LRE(9527, j) < JSProf.LGD(9528, segs, 'length').length; j++) {
                                if (JSProf.LGE(9529, segs, 'j')[j] == ".") {
                                    // flatten "./" references
                                    if (JSProf.LRE(9530, j) == JSProf.LGD(9531, segs, 'length').length - 1) {
                                        JSProf.LPE(9532, segs, 'j')[j] = JSProf.LRPE(9532, "");
                                    } else {
                                        JSProf.LMC(9534, segs, 'splice').splice(JSProf.LRE(9533, j), 1);
                                        j--;
                                    }
                                } else if (JSProf.LRE(9535, j) > 0 && !(JSProf.LRE(9536, j) == 1 && JSProf.LGE(9537, segs, 0)[0] == "") && JSProf.LGE(9538, segs, 'j')[j] == ".." && JSProf.LGE(9540, segs, JSProf.TMPS.ta0c89bb65d9258247ca41ccf87661ea57161ab72 = JSProf.LRE(9539, j) - 1)[JSProf.TMPS.ta0c89bb65d9258247ca41ccf87661ea57161ab72] != "..") {
                                    // flatten "../" references
                                    if (JSProf.LRE(9541, j) == JSProf.LGD(9542, segs, 'length').length - 1) {
                                        JSProf.LMC(9544, segs, 'splice').splice(JSProf.LRE(9543, j), 1);
                                        JSProf.LPE(9546, segs, JSProf.TMPS.ta0c89bb65d9258247ca41ccf87661ea57161ab72 = JSProf.LRE(9545, j) - 1)[JSProf.TMPS.ta0c89bb65d9258247ca41ccf87661ea57161ab72] = JSProf.LRPE(9546, "");
                                    } else {
                                        JSProf.LMC(9548, segs, 'splice').splice(JSProf.LRE(9547, j) - 1, 2);
                                        j -= 2;
                                    }
                                }
                            }
                            JSProf.LPD(9550, relobj, 'path').path = JSProf.LRSP(9550, JSProf.LMC(9549, segs, 'join').join("/"));
                        }
                    }
                }
                uri = JSProf.LWR(9552, uri, JSProf.LNE(9551, [], 10));
                if (JSProf.LGD(9553, relobj, 'scheme').scheme) {
                    JSProf.LMC(9555, uri, 'push').push(JSProf.LGD(9554, relobj, 'scheme').scheme, ":");
                }
                if (JSProf.LGD(9556, relobj, 'authority').authority) {
                    JSProf.LMC(9558, uri, 'push').push("//", JSProf.LGD(9557, relobj, 'authority').authority);
                }
                JSProf.LMC(9560, uri, 'push').push(JSProf.LGD(9559, relobj, 'path').path);
                if (JSProf.LGD(9561, relobj, 'query').query) {
                    JSProf.LMC(9563, uri, 'push').push("?", JSProf.LGD(9562, relobj, 'query').query);
                }
                if (JSProf.LGD(9564, relobj, 'fragment').fragment) {
                    JSProf.LMC(9566, uri, 'push').push("#", JSProf.LGD(9565, relobj, 'fragment').fragment);
                }
            }
            JSProf.LPD(9568, this, 'uri').uri = JSProf.LRSP(9568, JSProf.LMC(9567, uri, 'join').join(""));
            // break the uri into its main components
            var r = JSProf.LMC(9570, this.uri, 'match').match(JSProf.LRE(9569, ore));
            JSProf.LPD(9574, this, 'scheme').scheme = JSProf.LRSP(9574, JSProf.LGE(9571, r, 2)[2] || (JSProf.LGE(9572, r, 1)[1] ? "" : JSProf.LRE(9573, n)));
            JSProf.LPD(9578, this, 'authority').authority = JSProf.LRSP(9578, JSProf.LGE(9575, r, 4)[4] || (JSProf.LGE(9576, r, 3)[3] ? "" : JSProf.LRE(9577, n)));
            JSProf.LPD(9580, this, 'path').path = JSProf.LRSP(9580, JSProf.LGE(9579, r, 5)[5]);
            // can never be undefined
            JSProf.LPD(9584, this, 'query').query = JSProf.LRSP(9584, JSProf.LGE(9581, r, 7)[7] || (JSProf.LGE(9582, r, 6)[6] ? "" : JSProf.LRE(9583, n)));
            JSProf.LPD(9588, this, 'fragment').fragment = JSProf.LRSP(9588, JSProf.LGE(9585, r, 9)[9] || (JSProf.LGE(9586, r, 8)[8] ? "" : JSProf.LRE(9587, n)));
            if (JSProf.LGD(9589, this, 'authority').authority != JSProf.LRE(9590, n)) {
                // server based naming authority
                r = JSProf.LWR(9593, r, JSProf.LMC(9592, this.authority, 'match').match(JSProf.LRE(9591, ire)));
                JSProf.LPD(9596, this, 'user').user = JSProf.LRSP(9596, JSProf.LGE(9594, r, 3)[3] || JSProf.LRE(9595, n));
                JSProf.LPD(9599, this, 'password').password = JSProf.LRSP(9599, JSProf.LGE(9597, r, 4)[4] || JSProf.LRE(9598, n));
                JSProf.LPD(9602, this, 'host').host = JSProf.LRSP(9602, JSProf.LGE(9600, r, 6)[6] || JSProf.LGE(9601, r, 7)[7]);
                // ipv6 || ipv4
                JSProf.LPD(9605, this, 'port').port = JSProf.LRSP(9605, JSProf.LGE(9603, r, 9)[9] || JSProf.LRE(9604, n));
            }
        }, 12);
    JSProf.LPD(9609, _Url.prototype, 'toString').toString = JSProf.LRSP(9609, JSProf.LNF(9608, function () {
        return JSProf.LGD(9607, this, 'uri').uri;
    }, 12));
    return JSProf.LPD(9611, dojo, '_Url')._Url = JSProf.LRSP(9611, JSProf.LRE(9610, _Url));
}, 12));