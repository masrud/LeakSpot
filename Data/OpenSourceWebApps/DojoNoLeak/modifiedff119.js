JSProf.LFC(41267, define, false)(JSProf.LNE(40975, [
    "./_base/lang",
    "./sniff",
    "./_base/window",
    "./dom",
    "./dom-geometry",
    "./dom-style",
    "./dom-construct"
], 10), JSProf.LNF(41266, function (lang, has, baseWindow, dom, geom, style, domConstruct) {
    // feature detection
    /* not needed but included here for future reference
    	has.add("rtl-innerVerticalScrollBar-on-left", function(win, doc){
    		var	body = baseWindow.body(doc),
    			scrollable = domConstruct.create('div', {
    				style: {overflow:'scroll', overflowX:'hidden', direction:'rtl', visibility:'hidden', position:'absolute', left:'0', width:'64px', height:'64px'}
    			}, body, "last"),
    			center = domConstruct.create('center', {
    				style: {overflow:'hidden', direction:'ltr'}
    			}, scrollable, "last"),
    			inner = domConstruct.create('div', {
    				style: {overflow:'visible', display:'inline' }
    			}, center, "last");
    		inner.innerHTML="&nbsp;";
    		var midPoint = Math.max(inner.offsetLeft, geom.position(inner).x);
    		var ret = midPoint >= 32;
    		center.removeChild(inner);
    		scrollable.removeChild(center);
    		body.removeChild(scrollable);
    		return ret;
    	});
    	*/
    JSProf.LMC(40995, has, 'add').add("rtl-adjust-position-for-verticalScrollBar", JSProf.LNF(40994, function (win, doc) {
        var body = JSProf.LMC(40977, baseWindow, 'body').body(JSProf.LRE(40976, doc)), scrollable = JSProf.LMC(40981, domConstruct, 'create').create('div', JSProf.LNE(40979, {
                style: JSProf.LNE(40978, {
                    overflow: 'scroll',
                    overflowX: 'visible',
                    direction: 'rtl',
                    visibility: 'hidden',
                    position: 'absolute',
                    left: '0',
                    top: '0',
                    width: '64px',
                    height: '64px'
                }, 11)
            }, 11), JSProf.LRE(40980, body), "last"), div = JSProf.LMC(40985, domConstruct, 'create').create('div', JSProf.LNE(40983, {
                style: JSProf.LNE(40982, {
                    overflow: 'hidden',
                    direction: 'ltr'
                }, 11)
            }, 11), JSProf.LRE(40984, scrollable), "last"), ret = JSProf.LGD(40988, JSProf.LMC(40987, geom, 'position').position(JSProf.LRE(40986, div)), 'x').x != 0;
        JSProf.LMC(40990, scrollable, 'removeChild').removeChild(JSProf.LRE(40989, div));
        JSProf.LMC(40992, body, 'removeChild').removeChild(JSProf.LRE(40991, scrollable));
        return JSProf.LRE(40993, ret);
    }, 12));
    JSProf.LMC(41018, has, 'add').add("position-fixed-support", JSProf.LNF(41017, function (win, doc) {
        // IE6, IE7+quirks, and some older mobile browsers don't support position:fixed
        var body = JSProf.LMC(40997, baseWindow, 'body').body(JSProf.LRE(40996, doc)), outer = JSProf.LMC(41001, domConstruct, 'create').create('span', JSProf.LNE(40999, {
                style: JSProf.LNE(40998, {
                    visibility: 'hidden',
                    position: 'fixed',
                    left: '1px',
                    top: '1px'
                }, 11)
            }, 11), JSProf.LRE(41000, body), "last"), inner = JSProf.LMC(41005, domConstruct, 'create').create('span', JSProf.LNE(41003, {
                style: JSProf.LNE(41002, {
                    position: 'fixed',
                    left: '0',
                    top: '0'
                }, 11)
            }, 11), JSProf.LRE(41004, outer), "last"), ret = JSProf.LGD(41008, JSProf.LMC(41007, geom, 'position').position(JSProf.LRE(41006, inner)), 'x').x != JSProf.LGD(41011, JSProf.LMC(41010, geom, 'position').position(JSProf.LRE(41009, outer)), 'x').x;
        JSProf.LMC(41013, outer, 'removeChild').removeChild(JSProf.LRE(41012, inner));
        JSProf.LMC(41015, body, 'removeChild').removeChild(JSProf.LRE(41014, outer));
        return JSProf.LRE(41016, ret);
    }, 12));
    // module:
    //		dojo/window
    var window = JSProf.LNE(41261, {
            getBox: JSProf.LNF(41042, function (doc) {
                // summary:
                //		Returns the dimensions and scroll position of the viewable area of a browser window
                doc = JSProf.LWR(41021, doc, JSProf.LRE(41019, doc) || JSProf.LGD(41020, baseWindow, 'doc').doc);
                var scrollRoot = JSProf.LGD(41022, doc, 'compatMode').compatMode == 'BackCompat' ? JSProf.LMC(41024, baseWindow, 'body').body(JSProf.LRE(41023, doc)) : JSProf.LGD(41025, doc, 'documentElement').documentElement,
                    // get scroll position
                    scroll = JSProf.LMC(41027, geom, 'docScroll').docScroll(JSProf.LRE(41026, doc)),
                    // scrollRoot.scrollTop/Left should work
                    w, h;
                if (JSProf.LFC(41028, has, false)("touch")) {
                    // if(scrollbars not supported)
                    var uiWindow = JSProf.LMC(41030, window, 'get').get(JSProf.LRE(41029, doc));
                    // use UI window, not dojo.global window
                    // on mobile, scrollRoot.clientHeight <= uiWindow.innerHeight <= scrollRoot.offsetHeight, return uiWindow.innerHeight
                    w = JSProf.LWR(41033, w, JSProf.LGD(41031, uiWindow, 'innerWidth').innerWidth || JSProf.LGD(41032, scrollRoot, 'clientWidth').clientWidth);
                    // || scrollRoot.clientXXX probably never evaluated
                    h = JSProf.LWR(41036, h, JSProf.LGD(41034, uiWindow, 'innerHeight').innerHeight || JSProf.LGD(41035, scrollRoot, 'clientHeight').clientHeight);
                } else {
                    // on desktops, scrollRoot.clientHeight <= scrollRoot.offsetHeight <= uiWindow.innerHeight, return scrollRoot.clientHeight
                    // uiWindow.innerWidth/Height includes the scrollbar and cannot be used
                    w = JSProf.LWR(41038, w, JSProf.LGD(41037, scrollRoot, 'clientWidth').clientWidth);
                    h = JSProf.LWR(41040, h, JSProf.LGD(41039, scrollRoot, 'clientHeight').clientHeight);
                }
                return JSProf.LNE(41041, {
                    l: scroll.x,
                    t: scroll.y,
                    w: w,
                    h: h
                }, 11);
            }, 12),
            get: JSProf.LNF(41051, function (doc) {
                // summary:
                //		Get window object associated with document doc.
                // doc:
                //		The document to get the associated window for.
                // In some IE versions (at least 6.0), document.parentWindow does not return a
                // reference to the real window object (maybe a copy), so we must fix it as well
                // We use IE specific execScript to attach the real window reference to
                // document._parentWindow for later use
                if (JSProf.LFC(41043, has, false)("ie") && JSProf.LRE(41044, window) !== JSProf.LGD(41045, document, 'parentWindow').parentWindow) {
                    /*
                    In IE 6, only the variable "window" can be used to connect events (others
                    may be only copies).
                    */
                    JSProf.LMC(41046, doc.parentWindow, 'execScript').execScript("document._parentWindow = window;", "Javascript");
                    //to prevent memory leak, unset it after use
                    //another possibility is to add an onUnload handler which seems overkill to me (liucougar)
                    var win = JSProf.LGD(41047, doc, '_parentWindow')._parentWindow;
                    doc._parentWindow = null;
                    return JSProf.LRE(41048, win);    //	Window
                }
                return JSProf.LGD(41049, doc, 'parentWindow').parentWindow || JSProf.LGD(41050, doc, 'defaultView').defaultView;    //	Window
            }, 12),
            scrollIntoView: JSProf.LNF(41260, function (node, pos) {
                // summary:
                //		Scroll the passed node into view using minimal movement, if it is not already.
                // Don't rely on node.scrollIntoView working just because the function is there since
                // it forces the node to the page's bottom or top (and left or right in IE) without consideration for the minimal movement.
                // WebKit's node.scrollIntoViewIfNeeded doesn't work either for inner scrollbars in right-to-left mode
                // and when there's a fixed position scrollable element
                try {
                    // catch unexpected/unrecreatable errors (#7808) since we can recover using a semi-acceptable native method
                    node = JSProf.LWR(41054, node, JSProf.LMC(41053, dom, 'byId').byId(JSProf.LRE(41052, node)));
                    var doc = JSProf.LGD(41055, node, 'ownerDocument').ownerDocument || JSProf.LGD(41056, baseWindow, 'doc').doc,
                        // TODO: why baseWindow.doc?  Isn't node.ownerDocument always defined?
                        body = JSProf.LMC(41058, baseWindow, 'body').body(JSProf.LRE(41057, doc)), html = JSProf.LGD(41059, doc, 'documentElement').documentElement || JSProf.LGD(41060, body, 'parentNode').parentNode, isIE = JSProf.LFC(41061, has, false)("ie"), isWK = JSProf.LFC(41062, has, false)("webkit");
                    // if an untested browser, then use the native method
                    if (JSProf.LRE(41063, node) == JSProf.LRE(41064, body) || JSProf.LRE(41065, node) == JSProf.LRE(41066, html)) {
                        return;
                    }
                    if (!(JSProf.LFC(41067, has, false)("mozilla") || JSProf.LRE(41068, isIE) || JSProf.LRE(41069, isWK) || JSProf.LFC(41070, has, false)("opera") || JSProf.LFC(41071, has, false)("trident")) && "scrollIntoView" in JSProf.LRE(41072, node)) {
                        JSProf.LMC(41073, node, 'scrollIntoView').scrollIntoView(false);
                        // short-circuit to native if possible
                        return;
                    }
                    var backCompat = JSProf.LGD(41074, doc, 'compatMode').compatMode == 'BackCompat', rootWidth = JSProf.LMC(41079, Math, 'min').min(JSProf.LGD(41075, body, 'clientWidth').clientWidth || JSProf.LGD(41076, html, 'clientWidth').clientWidth, JSProf.LGD(41077, html, 'clientWidth').clientWidth || JSProf.LGD(41078, body, 'clientWidth').clientWidth), rootHeight = JSProf.LMC(41084, Math, 'min').min(JSProf.LGD(41080, body, 'clientHeight').clientHeight || JSProf.LGD(41081, html, 'clientHeight').clientHeight, JSProf.LGD(41082, html, 'clientHeight').clientHeight || JSProf.LGD(41083, body, 'clientHeight').clientHeight), scrollRoot = JSProf.LRE(41085, isWK) || JSProf.LRE(41086, backCompat) ? JSProf.LRE(41087, body) : JSProf.LRE(41088, html), nodePos = JSProf.LRE(41089, pos) || JSProf.LMC(41091, geom, 'position').position(JSProf.LRE(41090, node)), el = JSProf.LGD(41092, node, 'parentNode').parentNode, isFixed = JSProf.LNF(41099, function (el) {
                            return JSProf.LRE(41093, isIE) <= 6 || JSProf.LRE(41094, isIE) == 7 && JSProf.LRE(41095, backCompat) ? false : JSProf.LFC(41096, has, false)("position-fixed-support") && JSProf.LMC(41098, style, 'get').get(JSProf.LRE(41097, el), 'position').toLowerCase() == "fixed";
                        }, 12), self = this, scrollElementBy = JSProf.LNF(41111, function (el, x, y) {
                            if (JSProf.LGD(41100, el, 'tagName').tagName == "BODY" || JSProf.LGD(41101, el, 'tagName').tagName == "HTML") {
                                JSProf.LMC(41106, JSProf.LMC(41103, self, 'get').get(JSProf.LGD(41102, el, 'ownerDocument').ownerDocument), 'scrollBy').scrollBy(JSProf.LRE(41104, x), JSProf.LRE(41105, y));
                            } else {
                                JSProf.LRE(41107, x) && (el.scrollLeft += JSProf.LRE(41108, x));
                                JSProf.LRE(41109, y) && (el.scrollTop += JSProf.LRE(41110, y));
                            }
                        }, 12);
                    if (JSProf.LFC(41113, isFixed, false)(JSProf.LRE(41112, node))) {
                        return;
                    }
                    // nothing to do
                    while (JSProf.LRE(41114, el)) {
                        if (JSProf.LRE(41115, el) == JSProf.LRE(41116, body)) {
                            el = JSProf.LWR(41118, el, JSProf.LRE(41117, scrollRoot));
                        }
                        var elPos = JSProf.LMC(41120, geom, 'position').position(JSProf.LRE(41119, el)), fixedPos = JSProf.LFC(41122, isFixed, false)(JSProf.LRE(41121, el)), rtl = JSProf.LMC(41124, style, 'getComputedStyle').getComputedStyle(JSProf.LRE(41123, el)).direction.toLowerCase() == "rtl";
                        if (JSProf.LRE(41125, el) == JSProf.LRE(41126, scrollRoot)) {
                            JSProf.LPD(41128, elPos, 'w').w = JSProf.LRSP(41128, JSProf.LRE(41127, rootWidth));
                            JSProf.LPD(41130, elPos, 'h').h = JSProf.LRSP(41130, JSProf.LRE(41129, rootHeight));
                            if (JSProf.LRE(41131, scrollRoot) == JSProf.LRE(41132, html) && (JSProf.LRE(41133, isIE) || JSProf.LFC(41134, has, false)("trident")) && JSProf.LRE(41135, rtl)) {
                                elPos.x += JSProf.LGD(41136, scrollRoot, 'offsetWidth').offsetWidth - JSProf.LGD(41137, elPos, 'w').w;
                            }
                            // IE workaround where scrollbar causes negative x
                            if (JSProf.LGD(41138, elPos, 'x').x < 0 || !JSProf.LRE(41139, isIE) || JSProf.LRE(41140, isIE) >= 9 || JSProf.LFC(41141, has, false)("trident")) {
                                JSProf.LPD(41142, elPos, 'x').x = JSProf.LRSP(41142, 0);
                            }
                            // older IE can have values > 0
                            if (JSProf.LGD(41143, elPos, 'y').y < 0 || !JSProf.LRE(41144, isIE) || JSProf.LRE(41145, isIE) >= 9 || JSProf.LFC(41146, has, false)("trident")) {
                                JSProf.LPD(41147, elPos, 'y').y = JSProf.LRSP(41147, 0);
                            }
                        } else {
                            var pb = JSProf.LMC(41149, geom, 'getPadBorderExtents').getPadBorderExtents(JSProf.LRE(41148, el));
                            elPos.w -= JSProf.LGD(41150, pb, 'w').w;
                            elPos.h -= JSProf.LGD(41151, pb, 'h').h;
                            elPos.x += JSProf.LGD(41152, pb, 'l').l;
                            elPos.y += JSProf.LGD(41153, pb, 't').t;
                            var clientSize = JSProf.LGD(41154, el, 'clientWidth').clientWidth, scrollBarSize = JSProf.LGD(41155, elPos, 'w').w - JSProf.LRE(41156, clientSize);
                            if (JSProf.LRE(41157, clientSize) > 0 && JSProf.LRE(41158, scrollBarSize) > 0) {
                                if (JSProf.LRE(41159, rtl) && JSProf.LFC(41160, has, false)("rtl-adjust-position-for-verticalScrollBar")) {
                                    elPos.x += JSProf.LRE(41161, scrollBarSize);
                                }
                                JSProf.LPD(41163, elPos, 'w').w = JSProf.LRSP(41163, JSProf.LRE(41162, clientSize));
                            }
                            clientSize = JSProf.LWR(41165, clientSize, JSProf.LGD(41164, el, 'clientHeight').clientHeight);
                            scrollBarSize = JSProf.LWR(41168, scrollBarSize, JSProf.LGD(41166, elPos, 'h').h - JSProf.LRE(41167, clientSize));
                            if (JSProf.LRE(41169, clientSize) > 0 && JSProf.LRE(41170, scrollBarSize) > 0) {
                                JSProf.LPD(41172, elPos, 'h').h = JSProf.LRSP(41172, JSProf.LRE(41171, clientSize));
                            }
                        }
                        if (JSProf.LRE(41173, fixedPos)) {
                            // bounded by viewport, not parents
                            if (JSProf.LGD(41174, elPos, 'y').y < 0) {
                                elPos.h += JSProf.LGD(41175, elPos, 'y').y;
                                JSProf.LPD(41176, elPos, 'y').y = JSProf.LRSP(41176, 0);
                            }
                            if (JSProf.LGD(41177, elPos, 'x').x < 0) {
                                elPos.w += JSProf.LGD(41178, elPos, 'x').x;
                                JSProf.LPD(41179, elPos, 'x').x = JSProf.LRSP(41179, 0);
                            }
                            if (JSProf.LGD(41180, elPos, 'y').y + JSProf.LGD(41181, elPos, 'h').h > JSProf.LRE(41182, rootHeight)) {
                                JSProf.LPD(41185, elPos, 'h').h = JSProf.LRSP(41185, JSProf.LRE(41183, rootHeight) - JSProf.LGD(41184, elPos, 'y').y);
                            }
                            if (JSProf.LGD(41186, elPos, 'x').x + JSProf.LGD(41187, elPos, 'w').w > JSProf.LRE(41188, rootWidth)) {
                                JSProf.LPD(41191, elPos, 'w').w = JSProf.LRSP(41191, JSProf.LRE(41189, rootWidth) - JSProf.LGD(41190, elPos, 'x').x);
                            }
                        }
                        // calculate overflow in all 4 directions
                        var l = JSProf.LGD(41192, nodePos, 'x').x - JSProf.LGD(41193, elPos, 'x').x,
                            // beyond left: < 0
                            //						t = nodePos.y - Math.max(elPos.y, 0), // beyond top: < 0
                            t = JSProf.LGD(41194, nodePos, 'y').y - JSProf.LGD(41195, elPos, 'y').y,
                            // beyond top: < 0
                            r = JSProf.LRE(41196, l) + JSProf.LGD(41197, nodePos, 'w').w - JSProf.LGD(41198, elPos, 'w').w,
                            // beyond right: > 0
                            bot = JSProf.LRE(41199, t) + JSProf.LGD(41200, nodePos, 'h').h - JSProf.LGD(41201, elPos, 'h').h;
                        // beyond bottom: > 0
                        var s, old;
                        if (JSProf.LRE(41202, r) * JSProf.LRE(41203, l) > 0 && (!!JSProf.LGD(41204, el, 'scrollLeft').scrollLeft || JSProf.LRE(41205, el) == JSProf.LRE(41206, scrollRoot) || JSProf.LGD(41207, el, 'scrollWidth').scrollWidth > JSProf.LGD(41208, el, 'offsetHeight').offsetHeight)) {
                            s = JSProf.LWR(41213, s, JSProf.LMC(41212, Math, JSProf.TMPS.te518323342d7ac6b055e88ee12f09e4b2bd64d0e = JSProf.LRE(41209, l) < 0 ? "max" : "min", 1)[JSProf.TMPS.te518323342d7ac6b055e88ee12f09e4b2bd64d0e](JSProf.LRE(41210, l), JSProf.LRE(41211, r)));
                            if (JSProf.LRE(41214, rtl) && (JSProf.LRE(41215, isIE) == 8 && !JSProf.LRE(41216, backCompat) || JSProf.LRE(41217, isIE) >= 9 || JSProf.LFC(41218, has, false)("trident"))) {
                                s = JSProf.LWR(41220, s, -JSProf.LRE(41219, s));
                            }
                            old = JSProf.LWR(41222, old, JSProf.LGD(41221, el, 'scrollLeft').scrollLeft);
                            JSProf.LFC(41225, scrollElementBy, false)(JSProf.LRE(41223, el), JSProf.LRE(41224, s), 0);
                            s = JSProf.LWR(41228, s, JSProf.LGD(41226, el, 'scrollLeft').scrollLeft - JSProf.LRE(41227, old));
                            nodePos.x -= JSProf.LRE(41229, s);
                        }
                        if (JSProf.LRE(41230, bot) * JSProf.LRE(41231, t) > 0 && (!!JSProf.LGD(41232, el, 'scrollTop').scrollTop || JSProf.LRE(41233, el) == JSProf.LRE(41234, scrollRoot) || JSProf.LGD(41235, el, 'scrollHeight').scrollHeight > JSProf.LGD(41236, el, 'offsetHeight').offsetHeight)) {
                            s = JSProf.LWR(41242, s, JSProf.LMC(41241, Math, 'ceil').ceil(JSProf.LMC(41240, Math, JSProf.TMPS.te518323342d7ac6b055e88ee12f09e4b2bd64d0e = JSProf.LRE(41237, t) < 0 ? "max" : "min", 1)[JSProf.TMPS.te518323342d7ac6b055e88ee12f09e4b2bd64d0e](JSProf.LRE(41238, t), JSProf.LRE(41239, bot))));
                            old = JSProf.LWR(41244, old, JSProf.LGD(41243, el, 'scrollTop').scrollTop);
                            JSProf.LFC(41247, scrollElementBy, false)(JSProf.LRE(41245, el), 0, JSProf.LRE(41246, s));
                            s = JSProf.LWR(41250, s, JSProf.LGD(41248, el, 'scrollTop').scrollTop - JSProf.LRE(41249, old));
                            nodePos.y -= JSProf.LRE(41251, s);
                        }
                        el = JSProf.LWR(41256, el, JSProf.LRE(41252, el) != JSProf.LRE(41253, scrollRoot) && !JSProf.LRE(41254, fixedPos) && JSProf.LGD(41255, el, 'parentNode').parentNode);
                    }
                } catch (error) {
                    JSProf.LMC(41258, console, 'error').error('scrollIntoView: ' + JSProf.LRE(41257, error));
                    JSProf.LMC(41259, node, 'scrollIntoView').scrollIntoView(false);
                }
            }, 12)
        }, 11);
    JSProf.LFC(41262, has, false)("extend-dojo") && JSProf.LMC(41264, lang, 'setObject').setObject("dojo.window", JSProf.LRE(41263, window));
    return JSProf.LRE(41265, window);
}, 12));