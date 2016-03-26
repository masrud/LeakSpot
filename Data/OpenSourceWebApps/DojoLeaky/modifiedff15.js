JSProf.LFC(9903, define, false)(JSProf.LNE(9783, ["./kernel"], 10), JSProf.LNF(9902, function (dojo) {
    // module:
    //		dojo/url
    var ore = JSProf.LNE(9785, new (JSProf.LFC(9784, RegExp, true))("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?$"), 'RegExp'), ire = JSProf.LNE(9787, new (JSProf.LFC(9786, RegExp, true))("^((([^\\[:]+):)?([^@]+)@)?(\\[([^\\]]+)\\]|([^\\[:]*))(:([0-9]+))?$"), 'RegExp'), _Url = JSProf.LNF(9896, function () {
            var n = null, _a = arguments, uri = JSProf.LNE(9789, [JSProf.LGE(9788, _a, 0)[0]], 10);
            // resolve uri components relative to each other
            for (var i = 1; JSProf.LRE(9790, i) < JSProf.LGD(9791, _a, 'length').length; i++) {
                if (!JSProf.LGE(9792, _a, 'i')[i]) {
                    continue;
                }
                // Safari doesn't support this.constructor so we have to be explicit
                // FIXME: Tracked (and fixed) in Webkit bug 3537.
                //		http://bugs.webkit.org/show_bug.cgi?id=3537
                var relobj = JSProf.LNE(9795, new (JSProf.LFC(9794, _Url, true))(JSProf.LGE(9793, _a, 'i')[i] + ""), '_Url'), uriobj = JSProf.LNE(9798, new (JSProf.LFC(9797, _Url, true))(JSProf.LGE(9796, uri, 0)[0] + ""), '_Url');
                if (JSProf.LGD(9799, relobj, 'path').path == "" && !JSProf.LGD(9800, relobj, 'scheme').scheme && !JSProf.LGD(9801, relobj, 'authority').authority && !JSProf.LGD(9802, relobj, 'query').query) {
                    if (JSProf.LGD(9803, relobj, 'fragment').fragment != JSProf.LRE(9804, n)) {
                        JSProf.LPD(9806, uriobj, 'fragment').fragment = JSProf.LRSP(9806, JSProf.LGD(9805, relobj, 'fragment').fragment);
                    }
                    relobj = JSProf.LWR(9808, relobj, JSProf.LRE(9807, uriobj));
                } else if (!JSProf.LGD(9809, relobj, 'scheme').scheme) {
                    JSProf.LPD(9811, relobj, 'scheme').scheme = JSProf.LRSP(9811, JSProf.LGD(9810, uriobj, 'scheme').scheme);
                    if (!JSProf.LGD(9812, relobj, 'authority').authority) {
                        JSProf.LPD(9814, relobj, 'authority').authority = JSProf.LRSP(9814, JSProf.LGD(9813, uriobj, 'authority').authority);
                        if (relobj.path.charAt(0) != "/") {
                            var path = uriobj.path.substring(0, JSProf.LMC(9815, uriobj.path, 'lastIndexOf').lastIndexOf("/") + 1) + JSProf.LGD(9816, relobj, 'path').path;
                            var segs = path.split("/");
                            for (var j = 0; JSProf.LRE(9817, j) < JSProf.LGD(9818, segs, 'length').length; j++) {
                                if (JSProf.LGE(9819, segs, 'j')[j] == ".") {
                                    // flatten "./" references
                                    if (JSProf.LRE(9820, j) == JSProf.LGD(9821, segs, 'length').length - 1) {
                                        JSProf.LPE(9822, segs, 'j')[j] = JSProf.LRPE(9822, "");
                                    } else {
                                        JSProf.LMC(9824, segs, 'splice').splice(JSProf.LRE(9823, j), 1);
                                        j--;
                                    }
                                } else if (JSProf.LRE(9825, j) > 0 && !(JSProf.LRE(9826, j) == 1 && JSProf.LGE(9827, segs, 0)[0] == "") && JSProf.LGE(9828, segs, 'j')[j] == ".." && JSProf.LGE(9830, segs, JSProf.TMPS.ta0c89bb65d9258247ca41ccf87661ea57161ab72 = JSProf.LRE(9829, j) - 1)[JSProf.TMPS.ta0c89bb65d9258247ca41ccf87661ea57161ab72] != "..") {
                                    // flatten "../" references
                                    if (JSProf.LRE(9831, j) == JSProf.LGD(9832, segs, 'length').length - 1) {
                                        JSProf.LMC(9834, segs, 'splice').splice(JSProf.LRE(9833, j), 1);
                                        JSProf.LPE(9836, segs, JSProf.TMPS.ta0c89bb65d9258247ca41ccf87661ea57161ab72 = JSProf.LRE(9835, j) - 1)[JSProf.TMPS.ta0c89bb65d9258247ca41ccf87661ea57161ab72] = JSProf.LRPE(9836, "");
                                    } else {
                                        JSProf.LMC(9838, segs, 'splice').splice(JSProf.LRE(9837, j) - 1, 2);
                                        j -= 2;
                                    }
                                }
                            }
                            JSProf.LPD(9840, relobj, 'path').path = JSProf.LRSP(9840, JSProf.LMC(9839, segs, 'join').join("/"));
                        }
                    }
                }
                uri = JSProf.LWR(9842, uri, JSProf.LNE(9841, [], 10));
                if (JSProf.LGD(9843, relobj, 'scheme').scheme) {
                    JSProf.LMC(9845, uri, 'push').push(JSProf.LGD(9844, relobj, 'scheme').scheme, ":");
                }
                if (JSProf.LGD(9846, relobj, 'authority').authority) {
                    JSProf.LMC(9848, uri, 'push').push("//", JSProf.LGD(9847, relobj, 'authority').authority);
                }
                JSProf.LMC(9850, uri, 'push').push(JSProf.LGD(9849, relobj, 'path').path);
                if (JSProf.LGD(9851, relobj, 'query').query) {
                    JSProf.LMC(9853, uri, 'push').push("?", JSProf.LGD(9852, relobj, 'query').query);
                }
                if (JSProf.LGD(9854, relobj, 'fragment').fragment) {
                    JSProf.LMC(9856, uri, 'push').push("#", JSProf.LGD(9855, relobj, 'fragment').fragment);
                }
            }
            JSProf.LPD(9858, this, 'uri').uri = JSProf.LRSP(9858, JSProf.LMC(9857, uri, 'join').join(""));
            // break the uri into its main components
            var r = JSProf.LMC(9860, this.uri, 'match').match(JSProf.LRE(9859, ore));
            JSProf.LPD(9864, this, 'scheme').scheme = JSProf.LRSP(9864, JSProf.LGE(9861, r, 2)[2] || (JSProf.LGE(9862, r, 1)[1] ? "" : JSProf.LRE(9863, n)));
            JSProf.LPD(9868, this, 'authority').authority = JSProf.LRSP(9868, JSProf.LGE(9865, r, 4)[4] || (JSProf.LGE(9866, r, 3)[3] ? "" : JSProf.LRE(9867, n)));
            JSProf.LPD(9870, this, 'path').path = JSProf.LRSP(9870, JSProf.LGE(9869, r, 5)[5]);
            // can never be undefined
            JSProf.LPD(9874, this, 'query').query = JSProf.LRSP(9874, JSProf.LGE(9871, r, 7)[7] || (JSProf.LGE(9872, r, 6)[6] ? "" : JSProf.LRE(9873, n)));
            JSProf.LPD(9878, this, 'fragment').fragment = JSProf.LRSP(9878, JSProf.LGE(9875, r, 9)[9] || (JSProf.LGE(9876, r, 8)[8] ? "" : JSProf.LRE(9877, n)));
            if (JSProf.LGD(9879, this, 'authority').authority != JSProf.LRE(9880, n)) {
                // server based naming authority
                r = JSProf.LWR(9883, r, JSProf.LMC(9882, this.authority, 'match').match(JSProf.LRE(9881, ire)));
                JSProf.LPD(9886, this, 'user').user = JSProf.LRSP(9886, JSProf.LGE(9884, r, 3)[3] || JSProf.LRE(9885, n));
                JSProf.LPD(9889, this, 'password').password = JSProf.LRSP(9889, JSProf.LGE(9887, r, 4)[4] || JSProf.LRE(9888, n));
                JSProf.LPD(9892, this, 'host').host = JSProf.LRSP(9892, JSProf.LGE(9890, r, 6)[6] || JSProf.LGE(9891, r, 7)[7]);
                // ipv6 || ipv4
                JSProf.LPD(9895, this, 'port').port = JSProf.LRSP(9895, JSProf.LGE(9893, r, 9)[9] || JSProf.LRE(9894, n));
            }
        }, 12);
    JSProf.LPD(9899, _Url.prototype, 'toString').toString = JSProf.LRSP(9899, JSProf.LNF(9898, function () {
        return JSProf.LGD(9897, this, 'uri').uri;
    }, 12));
    return JSProf.LPD(9901, dojo, '_Url')._Url = JSProf.LRSP(9901, JSProf.LRE(9900, _Url));
}, 12));