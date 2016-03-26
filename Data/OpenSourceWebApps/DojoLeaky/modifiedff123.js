JSProf.LFC(41482, define, false)(JSProf.LNE(41190, [
    "./_base/lang",
    "./sniff",
    "./_base/window",
    "./dom",
    "./dom-geometry",
    "./dom-style",
    "./dom-construct"
], 10), JSProf.LNF(41481, function (lang, has, baseWindow, dom, geom, style, domConstruct) {
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
    JSProf.LMC(41210, has, 'add').add("rtl-adjust-position-for-verticalScrollBar", JSProf.LNF(41209, function (win, doc) {
        var body = JSProf.LMC(41192, baseWindow, 'body').body(JSProf.LRE(41191, doc)), scrollable = JSProf.LMC(41196, domConstruct, 'create').create('div', JSProf.LNE(41194, {
                style: JSProf.LNE(41193, {
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
            }, 11), JSProf.LRE(41195, body), "last"), div = JSProf.LMC(41200, domConstruct, 'create').create('div', JSProf.LNE(41198, {
                style: JSProf.LNE(41197, {
                    overflow: 'hidden',
                    direction: 'ltr'
                }, 11)
            }, 11), JSProf.LRE(41199, scrollable), "last"), ret = JSProf.LGD(41203, JSProf.LMC(41202, geom, 'position').position(JSProf.LRE(41201, div)), 'x').x != 0;
        JSProf.LMC(41205, scrollable, 'removeChild').removeChild(JSProf.LRE(41204, div));
        JSProf.LMC(41207, body, 'removeChild').removeChild(JSProf.LRE(41206, scrollable));
        return JSProf.LRE(41208, ret);
    }, 12));
    JSProf.LMC(41233, has, 'add').add("position-fixed-support", JSProf.LNF(41232, function (win, doc) {
        // IE6, IE7+quirks, and some older mobile browsers don't support position:fixed
        var body = JSProf.LMC(41212, baseWindow, 'body').body(JSProf.LRE(41211, doc)), outer = JSProf.LMC(41216, domConstruct, 'create').create('span', JSProf.LNE(41214, {
                style: JSProf.LNE(41213, {
                    visibility: 'hidden',
                    position: 'fixed',
                    left: '1px',
                    top: '1px'
                }, 11)
            }, 11), JSProf.LRE(41215, body), "last"), inner = JSProf.LMC(41220, domConstruct, 'create').create('span', JSProf.LNE(41218, {
                style: JSProf.LNE(41217, {
                    position: 'fixed',
                    left: '0',
                    top: '0'
                }, 11)
            }, 11), JSProf.LRE(41219, outer), "last"), ret = JSProf.LGD(41223, JSProf.LMC(41222, geom, 'position').position(JSProf.LRE(41221, inner)), 'x').x != JSProf.LGD(41226, JSProf.LMC(41225, geom, 'position').position(JSProf.LRE(41224, outer)), 'x').x;
        JSProf.LMC(41228, outer, 'removeChild').removeChild(JSProf.LRE(41227, inner));
        JSProf.LMC(41230, body, 'removeChild').removeChild(JSProf.LRE(41229, outer));
        return JSProf.LRE(41231, ret);
    }, 12));
    // module:
    //		dojo/window
    var window = JSProf.LNE(41476, {
            getBox: JSProf.LNF(41257, function (doc) {
                // summary:
                //		Returns the dimensions and scroll position of the viewable area of a browser window
                doc = JSProf.LWR(41236, doc, JSProf.LRE(41234, doc) || JSProf.LGD(41235, baseWindow, 'doc').doc);
                var scrollRoot = JSProf.LGD(41237, doc, 'compatMode').compatMode == 'BackCompat' ? JSProf.LMC(41239, baseWindow, 'body').body(JSProf.LRE(41238, doc)) : JSProf.LGD(41240, doc, 'documentElement').documentElement,
                    // get scroll position
                    scroll = JSProf.LMC(41242, geom, 'docScroll').docScroll(JSProf.LRE(41241, doc)),
                    // scrollRoot.scrollTop/Left should work
                    w, h;
                if (JSProf.LFC(41243, has, false)("touch")) {
                    // if(scrollbars not supported)
                    var uiWindow = JSProf.LMC(41245, window, 'get').get(JSProf.LRE(41244, doc));
                    // use UI window, not dojo.global window
                    // on mobile, scrollRoot.clientHeight <= uiWindow.innerHeight <= scrollRoot.offsetHeight, return uiWindow.innerHeight
                    w = JSProf.LWR(41248, w, JSProf.LGD(41246, uiWindow, 'innerWidth').innerWidth || JSProf.LGD(41247, scrollRoot, 'clientWidth').clientWidth);
                    // || scrollRoot.clientXXX probably never evaluated
                    h = JSProf.LWR(41251, h, JSProf.LGD(41249, uiWindow, 'innerHeight').innerHeight || JSProf.LGD(41250, scrollRoot, 'clientHeight').clientHeight);
                } else {
                    // on desktops, scrollRoot.clientHeight <= scrollRoot.offsetHeight <= uiWindow.innerHeight, return scrollRoot.clientHeight
                    // uiWindow.innerWidth/Height includes the scrollbar and cannot be used
                    w = JSProf.LWR(41253, w, JSProf.LGD(41252, scrollRoot, 'clientWidth').clientWidth);
                    h = JSProf.LWR(41255, h, JSProf.LGD(41254, scrollRoot, 'clientHeight').clientHeight);
                }
                return JSProf.LNE(41256, {
                    l: scroll.x,
                    t: scroll.y,
                    w: w,
                    h: h
                }, 11);
            }, 12),
            get: JSProf.LNF(41266, function (doc) {
                // summary:
                //		Get window object associated with document doc.
                // doc:
                //		The document to get the associated window for.
                // In some IE versions (at least 6.0), document.parentWindow does not return a
                // reference to the real window object (maybe a copy), so we must fix it as well
                // We use IE specific execScript to attach the real window reference to
                // document._parentWindow for later use
                if (JSProf.LFC(41258, has, false)("ie") && JSProf.LRE(41259, window) !== JSProf.LGD(41260, document, 'parentWindow').parentWindow) {
                    /*
                    In IE 6, only the variable "window" can be used to connect events (others
                    may be only copies).
                    */
                    JSProf.LMC(41261, doc.parentWindow, 'execScript').execScript("document._parentWindow = window;", "Javascript");
                    //to prevent memory leak, unset it after use
                    //another possibility is to add an onUnload handler which seems overkill to me (liucougar)
                    var win = JSProf.LGD(41262, doc, '_parentWindow')._parentWindow;
                    doc._parentWindow = null;
                    return JSProf.LRE(41263, win);    //	Window
                }
                return JSProf.LGD(41264, doc, 'parentWindow').parentWindow || JSProf.LGD(41265, doc, 'defaultView').defaultView;    //	Window
            }, 12),
            scrollIntoView: JSProf.LNF(41475, function (node, pos) {
                // summary:
                //		Scroll the passed node into view using minimal movement, if it is not already.
                // Don't rely on node.scrollIntoView working just because the function is there since
                // it forces the node to the page's bottom or top (and left or right in IE) without consideration for the minimal movement.
                // WebKit's node.scrollIntoViewIfNeeded doesn't work either for inner scrollbars in right-to-left mode
                // and when there's a fixed position scrollable element
                try {
                    // catch unexpected/unrecreatable errors (#7808) since we can recover using a semi-acceptable native method
                    node = JSProf.LWR(41269, node, JSProf.LMC(41268, dom, 'byId').byId(JSProf.LRE(41267, node)));
                    var doc = JSProf.LGD(41270, node, 'ownerDocument').ownerDocument || JSProf.LGD(41271, baseWindow, 'doc').doc,
                        // TODO: why baseWindow.doc?  Isn't node.ownerDocument always defined?
                        body = JSProf.LMC(41273, baseWindow, 'body').body(JSProf.LRE(41272, doc)), html = JSProf.LGD(41274, doc, 'documentElement').documentElement || JSProf.LGD(41275, body, 'parentNode').parentNode, isIE = JSProf.LFC(41276, has, false)("ie"), isWK = JSProf.LFC(41277, has, false)("webkit");
                    // if an untested browser, then use the native method
                    if (JSProf.LRE(41278, node) == JSProf.LRE(41279, body) || JSProf.LRE(41280, node) == JSProf.LRE(41281, html)) {
                        return;
                    }
                    if (!(JSProf.LFC(41282, has, false)("mozilla") || JSProf.LRE(41283, isIE) || JSProf.LRE(41284, isWK) || JSProf.LFC(41285, has, false)("opera") || JSProf.LFC(41286, has, false)("trident")) && "scrollIntoView" in JSProf.LRE(41287, node)) {
                        JSProf.LMC(41288, node, 'scrollIntoView').scrollIntoView(false);
                        // short-circuit to native if possible
                        return;
                    }
                    var backCompat = JSProf.LGD(41289, doc, 'compatMode').compatMode == 'BackCompat', rootWidth = JSProf.LMC(41294, Math, 'min').min(JSProf.LGD(41290, body, 'clientWidth').clientWidth || JSProf.LGD(41291, html, 'clientWidth').clientWidth, JSProf.LGD(41292, html, 'clientWidth').clientWidth || JSProf.LGD(41293, body, 'clientWidth').clientWidth), rootHeight = JSProf.LMC(41299, Math, 'min').min(JSProf.LGD(41295, body, 'clientHeight').clientHeight || JSProf.LGD(41296, html, 'clientHeight').clientHeight, JSProf.LGD(41297, html, 'clientHeight').clientHeight || JSProf.LGD(41298, body, 'clientHeight').clientHeight), scrollRoot = JSProf.LRE(41300, isWK) || JSProf.LRE(41301, backCompat) ? JSProf.LRE(41302, body) : JSProf.LRE(41303, html), nodePos = JSProf.LRE(41304, pos) || JSProf.LMC(41306, geom, 'position').position(JSProf.LRE(41305, node)), el = JSProf.LGD(41307, node, 'parentNode').parentNode, isFixed = JSProf.LNF(41314, function (el) {
                            return JSProf.LRE(41308, isIE) <= 6 || JSProf.LRE(41309, isIE) == 7 && JSProf.LRE(41310, backCompat) ? false : JSProf.LFC(41311, has, false)("position-fixed-support") && JSProf.LMC(41313, style, 'get').get(JSProf.LRE(41312, el), 'position').toLowerCase() == "fixed";
                        }, 12), self = this, scrollElementBy = JSProf.LNF(41326, function (el, x, y) {
                            if (JSProf.LGD(41315, el, 'tagName').tagName == "BODY" || JSProf.LGD(41316, el, 'tagName').tagName == "HTML") {
                                JSProf.LMC(41321, JSProf.LMC(41318, self, 'get').get(JSProf.LGD(41317, el, 'ownerDocument').ownerDocument), 'scrollBy').scrollBy(JSProf.LRE(41319, x), JSProf.LRE(41320, y));
                            } else {
                                JSProf.LRE(41322, x) && (el.scrollLeft += JSProf.LRE(41323, x));
                                JSProf.LRE(41324, y) && (el.scrollTop += JSProf.LRE(41325, y));
                            }
                        }, 12);
                    if (JSProf.LFC(41328, isFixed, false)(JSProf.LRE(41327, node))) {
                        return;
                    }
                    // nothing to do
                    while (JSProf.LRE(41329, el)) {
                        if (JSProf.LRE(41330, el) == JSProf.LRE(41331, body)) {
                            el = JSProf.LWR(41333, el, JSProf.LRE(41332, scrollRoot));
                        }
                        var elPos = JSProf.LMC(41335, geom, 'position').position(JSProf.LRE(41334, el)), fixedPos = JSProf.LFC(41337, isFixed, false)(JSProf.LRE(41336, el)), rtl = JSProf.LMC(41339, style, 'getComputedStyle').getComputedStyle(JSProf.LRE(41338, el)).direction.toLowerCase() == "rtl";
                        if (JSProf.LRE(41340, el) == JSProf.LRE(41341, scrollRoot)) {
                            JSProf.LPD(41343, elPos, 'w').w = JSProf.LRSP(41343, JSProf.LRE(41342, rootWidth));
                            JSProf.LPD(41345, elPos, 'h').h = JSProf.LRSP(41345, JSProf.LRE(41344, rootHeight));
                            if (JSProf.LRE(41346, scrollRoot) == JSProf.LRE(41347, html) && (JSProf.LRE(41348, isIE) || JSProf.LFC(41349, has, false)("trident")) && JSProf.LRE(41350, rtl)) {
                                elPos.x += JSProf.LGD(41351, scrollRoot, 'offsetWidth').offsetWidth - JSProf.LGD(41352, elPos, 'w').w;
                            }
                            // IE workaround where scrollbar causes negative x
                            if (JSProf.LGD(41353, elPos, 'x').x < 0 || !JSProf.LRE(41354, isIE) || JSProf.LRE(41355, isIE) >= 9 || JSProf.LFC(41356, has, false)("trident")) {
                                JSProf.LPD(41357, elPos, 'x').x = JSProf.LRSP(41357, 0);
                            }
                            // older IE can have values > 0
                            if (JSProf.LGD(41358, elPos, 'y').y < 0 || !JSProf.LRE(41359, isIE) || JSProf.LRE(41360, isIE) >= 9 || JSProf.LFC(41361, has, false)("trident")) {
                                JSProf.LPD(41362, elPos, 'y').y = JSProf.LRSP(41362, 0);
                            }
                        } else {
                            var pb = JSProf.LMC(41364, geom, 'getPadBorderExtents').getPadBorderExtents(JSProf.LRE(41363, el));
                            elPos.w -= JSProf.LGD(41365, pb, 'w').w;
                            elPos.h -= JSProf.LGD(41366, pb, 'h').h;
                            elPos.x += JSProf.LGD(41367, pb, 'l').l;
                            elPos.y += JSProf.LGD(41368, pb, 't').t;
                            var clientSize = JSProf.LGD(41369, el, 'clientWidth').clientWidth, scrollBarSize = JSProf.LGD(41370, elPos, 'w').w - JSProf.LRE(41371, clientSize);
                            if (JSProf.LRE(41372, clientSize) > 0 && JSProf.LRE(41373, scrollBarSize) > 0) {
                                if (JSProf.LRE(41374, rtl) && JSProf.LFC(41375, has, false)("rtl-adjust-position-for-verticalScrollBar")) {
                                    elPos.x += JSProf.LRE(41376, scrollBarSize);
                                }
                                JSProf.LPD(41378, elPos, 'w').w = JSProf.LRSP(41378, JSProf.LRE(41377, clientSize));
                            }
                            clientSize = JSProf.LWR(41380, clientSize, JSProf.LGD(41379, el, 'clientHeight').clientHeight);
                            scrollBarSize = JSProf.LWR(41383, scrollBarSize, JSProf.LGD(41381, elPos, 'h').h - JSProf.LRE(41382, clientSize));
                            if (JSProf.LRE(41384, clientSize) > 0 && JSProf.LRE(41385, scrollBarSize) > 0) {
                                JSProf.LPD(41387, elPos, 'h').h = JSProf.LRSP(41387, JSProf.LRE(41386, clientSize));
                            }
                        }
                        if (JSProf.LRE(41388, fixedPos)) {
                            // bounded by viewport, not parents
                            if (JSProf.LGD(41389, elPos, 'y').y < 0) {
                                elPos.h += JSProf.LGD(41390, elPos, 'y').y;
                                JSProf.LPD(41391, elPos, 'y').y = JSProf.LRSP(41391, 0);
                            }
                            if (JSProf.LGD(41392, elPos, 'x').x < 0) {
                                elPos.w += JSProf.LGD(41393, elPos, 'x').x;
                                JSProf.LPD(41394, elPos, 'x').x = JSProf.LRSP(41394, 0);
                            }
                            if (JSProf.LGD(41395, elPos, 'y').y + JSProf.LGD(41396, elPos, 'h').h > JSProf.LRE(41397, rootHeight)) {
                                JSProf.LPD(41400, elPos, 'h').h = JSProf.LRSP(41400, JSProf.LRE(41398, rootHeight) - JSProf.LGD(41399, elPos, 'y').y);
                            }
                            if (JSProf.LGD(41401, elPos, 'x').x + JSProf.LGD(41402, elPos, 'w').w > JSProf.LRE(41403, rootWidth)) {
                                JSProf.LPD(41406, elPos, 'w').w = JSProf.LRSP(41406, JSProf.LRE(41404, rootWidth) - JSProf.LGD(41405, elPos, 'x').x);
                            }
                        }
                        // calculate overflow in all 4 directions
                        var l = JSProf.LGD(41407, nodePos, 'x').x - JSProf.LGD(41408, elPos, 'x').x,
                            // beyond left: < 0
                            //						t = nodePos.y - Math.max(elPos.y, 0), // beyond top: < 0
                            t = JSProf.LGD(41409, nodePos, 'y').y - JSProf.LGD(41410, elPos, 'y').y,
                            // beyond top: < 0
                            r = JSProf.LRE(41411, l) + JSProf.LGD(41412, nodePos, 'w').w - JSProf.LGD(41413, elPos, 'w').w,
                            // beyond right: > 0
                            bot = JSProf.LRE(41414, t) + JSProf.LGD(41415, nodePos, 'h').h - JSProf.LGD(41416, elPos, 'h').h;
                        // beyond bottom: > 0
                        var s, old;
                        if (JSProf.LRE(41417, r) * JSProf.LRE(41418, l) > 0 && (!!JSProf.LGD(41419, el, 'scrollLeft').scrollLeft || JSProf.LRE(41420, el) == JSProf.LRE(41421, scrollRoot) || JSProf.LGD(41422, el, 'scrollWidth').scrollWidth > JSProf.LGD(41423, el, 'offsetHeight').offsetHeight)) {
                            s = JSProf.LWR(41428, s, JSProf.LMC(41427, Math, JSProf.TMPS.te518323342d7ac6b055e88ee12f09e4b2bd64d0e = JSProf.LRE(41424, l) < 0 ? "max" : "min", 1)[JSProf.TMPS.te518323342d7ac6b055e88ee12f09e4b2bd64d0e](JSProf.LRE(41425, l), JSProf.LRE(41426, r)));
                            if (JSProf.LRE(41429, rtl) && (JSProf.LRE(41430, isIE) == 8 && !JSProf.LRE(41431, backCompat) || JSProf.LRE(41432, isIE) >= 9 || JSProf.LFC(41433, has, false)("trident"))) {
                                s = JSProf.LWR(41435, s, -JSProf.LRE(41434, s));
                            }
                            old = JSProf.LWR(41437, old, JSProf.LGD(41436, el, 'scrollLeft').scrollLeft);
                            JSProf.LFC(41440, scrollElementBy, false)(JSProf.LRE(41438, el), JSProf.LRE(41439, s), 0);
                            s = JSProf.LWR(41443, s, JSProf.LGD(41441, el, 'scrollLeft').scrollLeft - JSProf.LRE(41442, old));
                            nodePos.x -= JSProf.LRE(41444, s);
                        }
                        if (JSProf.LRE(41445, bot) * JSProf.LRE(41446, t) > 0 && (!!JSProf.LGD(41447, el, 'scrollTop').scrollTop || JSProf.LRE(41448, el) == JSProf.LRE(41449, scrollRoot) || JSProf.LGD(41450, el, 'scrollHeight').scrollHeight > JSProf.LGD(41451, el, 'offsetHeight').offsetHeight)) {
                            s = JSProf.LWR(41457, s, JSProf.LMC(41456, Math, 'ceil').ceil(JSProf.LMC(41455, Math, JSProf.TMPS.te518323342d7ac6b055e88ee12f09e4b2bd64d0e = JSProf.LRE(41452, t) < 0 ? "max" : "min", 1)[JSProf.TMPS.te518323342d7ac6b055e88ee12f09e4b2bd64d0e](JSProf.LRE(41453, t), JSProf.LRE(41454, bot))));
                            old = JSProf.LWR(41459, old, JSProf.LGD(41458, el, 'scrollTop').scrollTop);
                            JSProf.LFC(41462, scrollElementBy, false)(JSProf.LRE(41460, el), 0, JSProf.LRE(41461, s));
                            s = JSProf.LWR(41465, s, JSProf.LGD(41463, el, 'scrollTop').scrollTop - JSProf.LRE(41464, old));
                            nodePos.y -= JSProf.LRE(41466, s);
                        }
                        el = JSProf.LWR(41471, el, JSProf.LRE(41467, el) != JSProf.LRE(41468, scrollRoot) && !JSProf.LRE(41469, fixedPos) && JSProf.LGD(41470, el, 'parentNode').parentNode);
                    }
                } catch (error) {
                    JSProf.LMC(41473, console, 'error').error('scrollIntoView: ' + JSProf.LRE(41472, error));
                    JSProf.LMC(41474, node, 'scrollIntoView').scrollIntoView(false);
                }
            }, 12)
        }, 11);
    JSProf.LFC(41477, has, false)("extend-dojo") && JSProf.LMC(41479, lang, 'setObject').setObject("dojo.window", JSProf.LRE(41478, window));
    return JSProf.LRE(41480, window);
}, 12));