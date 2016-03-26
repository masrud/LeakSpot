JSProf.LFC(31200, define, false)(JSProf.LNE(30768, [
    "./sniff",
    "./_base/window",
    "./dom",
    "./dom-style"
], 10), JSProf.LNF(31199, function (has, win, dom, style) {
    JSProf.LFD(31196, setBox);
    JSProf.LFD(31197, isButtonTag);
    JSProf.LFD(31198, usesBorderBox);
    // module:
    //		dojo/dom-geometry
    // the result object
    var geom = JSProf.LNE(30769, {}, 11);
    // Box functions will assume this model.
    // On IE/Opera, BORDER_BOX will be set if the primary document is in quirks mode.
    // Can be set to change behavior of box setters.
    // can be either:
    //	"border-box"
    //	"content-box" (default)
    JSProf.LPD(30770, geom, 'boxModel').boxModel = JSProf.LRSP(30770, "content-box");
    // We punt per-node box mode testing completely.
    // If anybody cares, we can provide an additional (optional) unit
    // that overrides existing code to include per-node box sensitivity.
    // Opera documentation claims that Opera 9 uses border-box in BackCompat mode.
    // but experiments (Opera 9.10.8679 on Windows Vista) indicate that it actually continues to use content-box.
    // IIRC, earlier versions of Opera did in fact use border-box.
    // Opera guys, this is really confusing. Opera being broken in quirks mode is not our fault.
    if (JSProf.LFC(30771, has, false)("ie")) {
        // client code may have to adjust if compatMode varies across iframes
        JSProf.LPD(30773, geom, 'boxModel').boxModel = JSProf.LRSP(30773, JSProf.LGD(30772, document, 'compatMode').compatMode == "BackCompat" ? "border-box" : "content-box");
    }
    JSProf.LPD(30795, geom, 'getPadExtents').getPadExtents = JSProf.LRSP(30795, JSProf.LNF(30794, function getPadExtents(node, computedStyle) {
        // summary:
        //		Returns object with special values specifically useful for node
        //		fitting.
        // description:
        //		Returns an object with `w`, `h`, `l`, `t` properties:
        //	|		l/t/r/b = left/top/right/bottom padding (respectively)
        //	|		w = the total of the left and right padding
        //	|		h = the total of the top and bottom padding
        //		If 'node' has position, l/t forms the origin for child nodes.
        //		The w/h are used for calculating boxes.
        //		Normally application code will not need to invoke this
        //		directly, and will use the ...box... functions instead.
        // node: DOMNode
        // computedStyle: Object?
        //		This parameter accepts computed styles object.
        //		If this parameter is omitted, the functions will call
        //		dojo/dom-style.getComputedStyle to get one. It is a better way, calling
        //		dojo/dom-style.getComputedStyle once, and then pass the reference to this
        //		computedStyle parameter. Wherever possible, reuse the returned
        //		object of dojo/dom-style.getComputedStyle().
        node = JSProf.LWR(30776, node, JSProf.LMC(30775, dom, 'byId').byId(JSProf.LRE(30774, node)));
        var s = JSProf.LRE(30777, computedStyle) || JSProf.LMC(30779, style, 'getComputedStyle').getComputedStyle(JSProf.LRE(30778, node)), px = JSProf.LGD(30780, style, 'toPixelValue').toPixelValue, l = JSProf.LFC(30783, px, false)(JSProf.LRE(30781, node), JSProf.LGD(30782, s, 'paddingLeft').paddingLeft), t = JSProf.LFC(30786, px, false)(JSProf.LRE(30784, node), JSProf.LGD(30785, s, 'paddingTop').paddingTop), r = JSProf.LFC(30789, px, false)(JSProf.LRE(30787, node), JSProf.LGD(30788, s, 'paddingRight').paddingRight), b = JSProf.LFC(30792, px, false)(JSProf.LRE(30790, node), JSProf.LGD(30791, s, 'paddingBottom').paddingBottom);
        return JSProf.LNE(30793, {
            l: l,
            t: t,
            r: r,
            b: b,
            w: l + r,
            h: t + b
        }, 11);
    }, 12));
    var none = "none";
    JSProf.LPD(30825, geom, 'getBorderExtents').getBorderExtents = JSProf.LRSP(30825, JSProf.LNF(30824, function getBorderExtents(node, computedStyle) {
        // summary:
        //		returns an object with properties useful for noting the border
        //		dimensions.
        // description:
        //		- l/t/r/b = the sum of left/top/right/bottom border (respectively)
        //		- w = the sum of the left and right border
        //		- h = the sum of the top and bottom border
        //
        //		The w/h are used for calculating boxes.
        //		Normally application code will not need to invoke this
        //		directly, and will use the ...box... functions instead.
        // node: DOMNode
        // computedStyle: Object?
        //		This parameter accepts computed styles object.
        //		If this parameter is omitted, the functions will call
        //		dojo/dom-style.getComputedStyle to get one. It is a better way, calling
        //		dojo/dom-style.getComputedStyle once, and then pass the reference to this
        //		computedStyle parameter. Wherever possible, reuse the returned
        //		object of dojo/dom-style.getComputedStyle().
        node = JSProf.LWR(30798, node, JSProf.LMC(30797, dom, 'byId').byId(JSProf.LRE(30796, node)));
        var px = JSProf.LGD(30799, style, 'toPixelValue').toPixelValue, s = JSProf.LRE(30800, computedStyle) || JSProf.LMC(30802, style, 'getComputedStyle').getComputedStyle(JSProf.LRE(30801, node)), l = JSProf.LGD(30803, s, 'borderLeftStyle').borderLeftStyle != JSProf.LRE(30804, none) ? JSProf.LFC(30807, px, false)(JSProf.LRE(30805, node), JSProf.LGD(30806, s, 'borderLeftWidth').borderLeftWidth) : 0, t = JSProf.LGD(30808, s, 'borderTopStyle').borderTopStyle != JSProf.LRE(30809, none) ? JSProf.LFC(30812, px, false)(JSProf.LRE(30810, node), JSProf.LGD(30811, s, 'borderTopWidth').borderTopWidth) : 0, r = JSProf.LGD(30813, s, 'borderRightStyle').borderRightStyle != JSProf.LRE(30814, none) ? JSProf.LFC(30817, px, false)(JSProf.LRE(30815, node), JSProf.LGD(30816, s, 'borderRightWidth').borderRightWidth) : 0, b = JSProf.LGD(30818, s, 'borderBottomStyle').borderBottomStyle != JSProf.LRE(30819, none) ? JSProf.LFC(30822, px, false)(JSProf.LRE(30820, node), JSProf.LGD(30821, s, 'borderBottomWidth').borderBottomWidth) : 0;
        return JSProf.LNE(30823, {
            l: l,
            t: t,
            r: r,
            b: b,
            w: l + r,
            h: t + b
        }, 11);
    }, 12));
    JSProf.LPD(30840, geom, 'getPadBorderExtents').getPadBorderExtents = JSProf.LRSP(30840, JSProf.LNF(30839, function getPadBorderExtents(node, computedStyle) {
        // summary:
        //		Returns object with properties useful for box fitting with
        //		regards to padding.
        // description:
        //		- l/t/r/b = the sum of left/top/right/bottom padding and left/top/right/bottom border (respectively)
        //		- w = the sum of the left and right padding and border
        //		- h = the sum of the top and bottom padding and border
        //
        //		The w/h are used for calculating boxes.
        //		Normally application code will not need to invoke this
        //		directly, and will use the ...box... functions instead.
        // node: DOMNode
        // computedStyle: Object?
        //		This parameter accepts computed styles object.
        //		If this parameter is omitted, the functions will call
        //		dojo/dom-style.getComputedStyle to get one. It is a better way, calling
        //		dojo/dom-style.getComputedStyle once, and then pass the reference to this
        //		computedStyle parameter. Wherever possible, reuse the returned
        //		object of dojo/dom-style.getComputedStyle().
        node = JSProf.LWR(30828, node, JSProf.LMC(30827, dom, 'byId').byId(JSProf.LRE(30826, node)));
        var s = JSProf.LRE(30829, computedStyle) || JSProf.LMC(30831, style, 'getComputedStyle').getComputedStyle(JSProf.LRE(30830, node)), p = JSProf.LMC(30834, geom, 'getPadExtents').getPadExtents(JSProf.LRE(30832, node), JSProf.LRE(30833, s)), b = JSProf.LMC(30837, geom, 'getBorderExtents').getBorderExtents(JSProf.LRE(30835, node), JSProf.LRE(30836, s));
        return JSProf.LNE(30838, {
            l: p.l + b.l,
            t: p.t + b.t,
            r: p.r + b.r,
            b: p.b + b.b,
            w: p.w + b.w,
            h: p.h + b.h
        }, 11);
    }, 12));
    JSProf.LPD(30862, geom, 'getMarginExtents').getMarginExtents = JSProf.LRSP(30862, JSProf.LNF(30861, function getMarginExtents(node, computedStyle) {
        // summary:
        //		returns object with properties useful for box fitting with
        //		regards to box margins (i.e., the outer-box).
        //
        //		- l/t = marginLeft, marginTop, respectively
        //		- w = total width, margin inclusive
        //		- h = total height, margin inclusive
        //
        //		The w/h are used for calculating boxes.
        //		Normally application code will not need to invoke this
        //		directly, and will use the ...box... functions instead.
        // node: DOMNode
        // computedStyle: Object?
        //		This parameter accepts computed styles object.
        //		If this parameter is omitted, the functions will call
        //		dojo/dom-style.getComputedStyle to get one. It is a better way, calling
        //		dojo/dom-style.getComputedStyle once, and then pass the reference to this
        //		computedStyle parameter. Wherever possible, reuse the returned
        //		object of dojo/dom-style.getComputedStyle().
        node = JSProf.LWR(30843, node, JSProf.LMC(30842, dom, 'byId').byId(JSProf.LRE(30841, node)));
        var s = JSProf.LRE(30844, computedStyle) || JSProf.LMC(30846, style, 'getComputedStyle').getComputedStyle(JSProf.LRE(30845, node)), px = JSProf.LGD(30847, style, 'toPixelValue').toPixelValue, l = JSProf.LFC(30850, px, false)(JSProf.LRE(30848, node), JSProf.LGD(30849, s, 'marginLeft').marginLeft), t = JSProf.LFC(30853, px, false)(JSProf.LRE(30851, node), JSProf.LGD(30852, s, 'marginTop').marginTop), r = JSProf.LFC(30856, px, false)(JSProf.LRE(30854, node), JSProf.LGD(30855, s, 'marginRight').marginRight), b = JSProf.LFC(30859, px, false)(JSProf.LRE(30857, node), JSProf.LGD(30858, s, 'marginBottom').marginBottom);
        return JSProf.LNE(30860, {
            l: l,
            t: t,
            r: r,
            b: b,
            w: l + r,
            h: t + b
        }, 11);
    }, 12));
    // Box getters work in any box context because offsetWidth/clientWidth
    // are invariant wrt box context
    //
    // They do *not* work for display: inline objects that have padding styles
    // because the user agent ignores padding (it's bogus styling in any case)
    //
    // Be careful with IMGs because they are inline or block depending on
    // browser and browser mode.
    // Although it would be easier to read, there are not separate versions of
    // _getMarginBox for each browser because:
    // 1. the branching is not expensive
    // 2. factoring the shared code wastes cycles (function call overhead)
    // 3. duplicating the shared code wastes bytes
    JSProf.LPD(30926, geom, 'getMarginBox').getMarginBox = JSProf.LRSP(30926, JSProf.LNF(30925, function getMarginBox(node, computedStyle) {
        // summary:
        //		returns an object that encodes the width, height, left and top
        //		positions of the node's margin box.
        // node: DOMNode
        // computedStyle: Object?
        //		This parameter accepts computed styles object.
        //		If this parameter is omitted, the functions will call
        //		dojo/dom-style.getComputedStyle to get one. It is a better way, calling
        //		dojo/dom-style.getComputedStyle once, and then pass the reference to this
        //		computedStyle parameter. Wherever possible, reuse the returned
        //		object of dojo/dom-style.getComputedStyle().
        node = JSProf.LWR(30865, node, JSProf.LMC(30864, dom, 'byId').byId(JSProf.LRE(30863, node)));
        var s = JSProf.LRE(30866, computedStyle) || JSProf.LMC(30868, style, 'getComputedStyle').getComputedStyle(JSProf.LRE(30867, node)), me = JSProf.LMC(30871, geom, 'getMarginExtents').getMarginExtents(JSProf.LRE(30869, node), JSProf.LRE(30870, s)), l = JSProf.LGD(30872, node, 'offsetLeft').offsetLeft - JSProf.LGD(30873, me, 'l').l, t = JSProf.LGD(30874, node, 'offsetTop').offsetTop - JSProf.LGD(30875, me, 't').t, p = JSProf.LGD(30876, node, 'parentNode').parentNode, px = JSProf.LGD(30877, style, 'toPixelValue').toPixelValue, pcs;
        if (JSProf.LFC(30878, has, false)("mozilla")) {
            // Mozilla:
            // If offsetParent has a computed overflow != visible, the offsetLeft is decreased
            // by the parent's border.
            // We don't want to compute the parent's style, so instead we examine node's
            // computed left/top which is more stable.
            var sl = JSProf.LFC(30880, parseFloat, false)(JSProf.LGD(30879, s, 'left').left), st = JSProf.LFC(30882, parseFloat, false)(JSProf.LGD(30881, s, 'top').top);
            if (!JSProf.LFC(30884, isNaN, false)(JSProf.LRE(30883, sl)) && !JSProf.LFC(30886, isNaN, false)(JSProf.LRE(30885, st))) {
                l = JSProf.LWR(30888, l, JSProf.LRE(30887, sl));
                t = JSProf.LWR(30890, t, JSProf.LRE(30889, st));
            } else {
                // If child's computed left/top are not parseable as a number (e.g. "auto"), we
                // have no choice but to examine the parent's computed style.
                if (JSProf.LRE(30891, p) && JSProf.LGD(30892, p, 'style').style) {
                    pcs = JSProf.LWR(30895, pcs, JSProf.LMC(30894, style, 'getComputedStyle').getComputedStyle(JSProf.LRE(30893, p)));
                    if (JSProf.LGD(30896, pcs, 'overflow').overflow != "visible") {
                        l += JSProf.LGD(30897, pcs, 'borderLeftStyle').borderLeftStyle != JSProf.LRE(30898, none) ? JSProf.LFC(30901, px, false)(JSProf.LRE(30899, node), JSProf.LGD(30900, pcs, 'borderLeftWidth').borderLeftWidth) : 0;
                        t += JSProf.LGD(30902, pcs, 'borderTopStyle').borderTopStyle != JSProf.LRE(30903, none) ? JSProf.LFC(30906, px, false)(JSProf.LRE(30904, node), JSProf.LGD(30905, pcs, 'borderTopWidth').borderTopWidth) : 0;
                    }
                }
            }
        } else if (JSProf.LFC(30907, has, false)("opera") || JSProf.LFC(30908, has, false)("ie") == 8 && !JSProf.LFC(30909, has, false)("quirks")) {
            // On Opera and IE 8, offsetLeft/Top includes the parent's border
            if (JSProf.LRE(30910, p)) {
                pcs = JSProf.LWR(30913, pcs, JSProf.LMC(30912, style, 'getComputedStyle').getComputedStyle(JSProf.LRE(30911, p)));
                l -= JSProf.LGD(30914, pcs, 'borderLeftStyle').borderLeftStyle != JSProf.LRE(30915, none) ? JSProf.LFC(30918, px, false)(JSProf.LRE(30916, node), JSProf.LGD(30917, pcs, 'borderLeftWidth').borderLeftWidth) : 0;
                t -= JSProf.LGD(30919, pcs, 'borderTopStyle').borderTopStyle != JSProf.LRE(30920, none) ? JSProf.LFC(30923, px, false)(JSProf.LRE(30921, node), JSProf.LGD(30922, pcs, 'borderTopWidth').borderTopWidth) : 0;
            }
        }
        return JSProf.LNE(30924, {
            l: l,
            t: t,
            w: node.offsetWidth + me.w,
            h: node.offsetHeight + me.h
        }, 11);
    }, 12));
    JSProf.LPD(30958, geom, 'getContentBox').getContentBox = JSProf.LRSP(30958, JSProf.LNF(30957, function getContentBox(node, computedStyle) {
        // summary:
        //		Returns an object that encodes the width, height, left and top
        //		positions of the node's content box, irrespective of the
        //		current box model.
        // node: DOMNode
        // computedStyle: Object?
        //		This parameter accepts computed styles object.
        //		If this parameter is omitted, the functions will call
        //		dojo/dom-style.getComputedStyle to get one. It is a better way, calling
        //		dojo/dom-style.getComputedStyle once, and then pass the reference to this
        //		computedStyle parameter. Wherever possible, reuse the returned
        //		object of dojo/dom-style.getComputedStyle().
        // clientWidth/Height are important since the automatically account for scrollbars
        // fallback to offsetWidth/Height for special cases (see #3378)
        node = JSProf.LWR(30929, node, JSProf.LMC(30928, dom, 'byId').byId(JSProf.LRE(30927, node)));
        var s = JSProf.LRE(30930, computedStyle) || JSProf.LMC(30932, style, 'getComputedStyle').getComputedStyle(JSProf.LRE(30931, node)), w = JSProf.LGD(30933, node, 'clientWidth').clientWidth, h, pe = JSProf.LMC(30936, geom, 'getPadExtents').getPadExtents(JSProf.LRE(30934, node), JSProf.LRE(30935, s)), be = JSProf.LMC(30939, geom, 'getBorderExtents').getBorderExtents(JSProf.LRE(30937, node), JSProf.LRE(30938, s));
        if (!JSProf.LRE(30940, w)) {
            w = JSProf.LWR(30942, w, JSProf.LGD(30941, node, 'offsetWidth').offsetWidth);
            h = JSProf.LWR(30944, h, JSProf.LGD(30943, node, 'offsetHeight').offsetHeight);
        } else {
            h = JSProf.LWR(30946, h, JSProf.LGD(30945, node, 'clientHeight').clientHeight);
            JSProf.LPD(30948, be, 'w').w = JSProf.LRSP(30948, JSProf.LPD(30947, be, 'h').h = JSProf.LRSP(30947, 0));
        }
        // On Opera, offsetLeft includes the parent's border
        if (JSProf.LFC(30949, has, false)("opera")) {
            pe.l += JSProf.LGD(30950, be, 'l').l;
            pe.t += JSProf.LGD(30951, be, 't').t;
        }
        return JSProf.LNE(30956, {
            l: pe.l,
            t: pe.t,
            w: JSProf.LRE(30952, w) - JSProf.LGD(30953, pe, 'w').w - be.w,
            h: JSProf.LRE(30954, h) - JSProf.LGD(30955, pe, 'h').h - be.h
        }, 11);
    }, 12));
    // Box setters depend on box context because interpretation of width/height styles
    // vary wrt box context.
    //
    // The value of boxModel is used to determine box context.
    // boxModel can be set directly to change behavior.
    //
    // Beware of display: inline objects that have padding styles
    // because the user agent ignores padding (it's a bogus setup anyway)
    //
    // Be careful with IMGs because they are inline or block depending on
    // browser and browser mode.
    //
    // Elements other than DIV may have special quirks, like built-in
    // margins or padding, or values not detectable via computedStyle.
    // In particular, margins on TABLE do not seems to appear
    // at all in computedStyle on Mozilla.
    function setBox(node, l, t, w, h, u) {
        // summary:
        //		sets width/height/left/top in the current (native) box-model
        //		dimensions. Uses the unit passed in u.
        // node:
        //		DOM Node reference. Id string not supported for performance
        //		reasons.
        // l:
        //		left offset from parent.
        // t:
        //		top offset from parent.
        // w:
        //		width in current box model.
        // h:
        //		width in current box model.
        // u:
        //		unit measure to use for other measures. Defaults to "px".
        u = JSProf.LWR(30960, u, JSProf.LRE(30959, u) || "px");
        var s = JSProf.LGD(30961, node, 'style').style;
        if (!JSProf.LFC(30963, isNaN, false)(JSProf.LRE(30962, l))) {
            JSProf.LPD(30966, s, 'left').left = JSProf.LRSP(30966, JSProf.LRE(30964, l) + JSProf.LRE(30965, u));
        }
        if (!JSProf.LFC(30968, isNaN, false)(JSProf.LRE(30967, t))) {
            JSProf.LPD(30971, s, 'top').top = JSProf.LRSP(30971, JSProf.LRE(30969, t) + JSProf.LRE(30970, u));
        }
        if (JSProf.LRE(30972, w) >= 0) {
            JSProf.LPD(30975, s, 'width').width = JSProf.LRSP(30975, JSProf.LRE(30973, w) + JSProf.LRE(30974, u));
        }
        if (JSProf.LRE(30976, h) >= 0) {
            JSProf.LPD(30979, s, 'height').height = JSProf.LRSP(30979, JSProf.LRE(30977, h) + JSProf.LRE(30978, u));
        }
    }
    function isButtonTag(node) {
        // summary:
        //		True if the node is BUTTON or INPUT.type="button".
        return node.tagName.toLowerCase() == "button" || node.tagName.toLowerCase() == "input" && (JSProf.LMC(30980, node, 'getAttribute').getAttribute("type") || "").toLowerCase() == "button";    // boolean
    }
    function usesBorderBox(node) {
        // summary:
        //		True if the node uses border-box layout.
        // We could test the computed style of node to see if a particular box
        // has been specified, but there are details and we choose not to bother.
        // TABLE and BUTTON (and INPUT type=button) are always border-box by default.
        // If you have assigned a different box to either one via CSS then
        // box functions will break.
        return JSProf.LGD(30981, geom, 'boxModel').boxModel == "border-box" || node.tagName.toLowerCase() == "table" || JSProf.LFC(30983, isButtonTag, false)(JSProf.LRE(30982, node));    // boolean
    }
    JSProf.LPD(31003, geom, 'setContentSize').setContentSize = JSProf.LRSP(31003, JSProf.LNF(31002, function setContentSize(node, box, computedStyle) {
        // summary:
        //		Sets the size of the node's contents, irrespective of margins,
        //		padding, or borders.
        // node: DOMNode
        // box: Object
        //		hash with optional "w", and "h" properties for "width", and "height"
        //		respectively. All specified properties should have numeric values in whole pixels.
        // computedStyle: Object?
        //		This parameter accepts computed styles object.
        //		If this parameter is omitted, the functions will call
        //		dojo/dom-style.getComputedStyle to get one. It is a better way, calling
        //		dojo/dom-style.getComputedStyle once, and then pass the reference to this
        //		computedStyle parameter. Wherever possible, reuse the returned
        //		object of dojo/dom-style.getComputedStyle().
        node = JSProf.LWR(30986, node, JSProf.LMC(30985, dom, 'byId').byId(JSProf.LRE(30984, node)));
        var w = JSProf.LGD(30987, box, 'w').w, h = JSProf.LGD(30988, box, 'h').h;
        if (JSProf.LFC(30990, usesBorderBox, false)(JSProf.LRE(30989, node))) {
            var pb = JSProf.LMC(30993, geom, 'getPadBorderExtents').getPadBorderExtents(JSProf.LRE(30991, node), JSProf.LRE(30992, computedStyle));
            if (JSProf.LRE(30994, w) >= 0) {
                w += JSProf.LGD(30995, pb, 'w').w;
            }
            if (JSProf.LRE(30996, h) >= 0) {
                h += JSProf.LGD(30997, pb, 'h').h;
            }
        }
        JSProf.LFC(31001, setBox, false)(JSProf.LRE(30998, node), NaN, NaN, JSProf.LRE(30999, w), JSProf.LRE(31000, h));
    }, 12));
    var nilExtents = JSProf.LNE(31004, {
            l: 0,
            t: 0,
            w: 0,
            h: 0
        }, 11);
    JSProf.LPD(31051, geom, 'setMarginBox').setMarginBox = JSProf.LRSP(31051, JSProf.LNF(31050, function setMarginBox(node, box, computedStyle) {
        // summary:
        //		sets the size of the node's margin box and placement
        //		(left/top), irrespective of box model. Think of it as a
        //		passthrough to setBox that handles box-model vagaries for
        //		you.
        // node: DOMNode
        // box: Object
        //		hash with optional "l", "t", "w", and "h" properties for "left", "right", "width", and "height"
        //		respectively. All specified properties should have numeric values in whole pixels.
        // computedStyle: Object?
        //		This parameter accepts computed styles object.
        //		If this parameter is omitted, the functions will call
        //		dojo/dom-style.getComputedStyle to get one. It is a better way, calling
        //		dojo/dom-style.getComputedStyle once, and then pass the reference to this
        //		computedStyle parameter. Wherever possible, reuse the returned
        //		object of dojo/dom-style.getComputedStyle().
        node = JSProf.LWR(31007, node, JSProf.LMC(31006, dom, 'byId').byId(JSProf.LRE(31005, node)));
        var s = JSProf.LRE(31008, computedStyle) || JSProf.LMC(31010, style, 'getComputedStyle').getComputedStyle(JSProf.LRE(31009, node)), w = JSProf.LGD(31011, box, 'w').w, h = JSProf.LGD(31012, box, 'h').h,
            // Some elements have special padding, margin, and box-model settings.
            // To use box functions you may need to set padding, margin explicitly.
            // Controlling box-model is harder, in a pinch you might set dojo/dom-geometry.boxModel.
            pb = JSProf.LFC(31014, usesBorderBox, false)(JSProf.LRE(31013, node)) ? JSProf.LRE(31015, nilExtents) : JSProf.LMC(31018, geom, 'getPadBorderExtents').getPadBorderExtents(JSProf.LRE(31016, node), JSProf.LRE(31017, s)), mb = JSProf.LMC(31021, geom, 'getMarginExtents').getMarginExtents(JSProf.LRE(31019, node), JSProf.LRE(31020, s));
        if (JSProf.LFC(31022, has, false)("webkit")) {
            // on Safari (3.1.2), button nodes with no explicit size have a default margin
            // setting an explicit size eliminates the margin.
            // We have to swizzle the width to get correct margin reading.
            if (JSProf.LFC(31024, isButtonTag, false)(JSProf.LRE(31023, node))) {
                var ns = JSProf.LGD(31025, node, 'style').style;
                if (JSProf.LRE(31026, w) >= 0 && !JSProf.LGD(31027, ns, 'width').width) {
                    JSProf.LPD(31028, ns, 'width').width = JSProf.LRSP(31028, "4px");
                }
                if (JSProf.LRE(31029, h) >= 0 && !JSProf.LGD(31030, ns, 'height').height) {
                    JSProf.LPD(31031, ns, 'height').height = JSProf.LRSP(31031, "4px");
                }
            }
        }
        if (JSProf.LRE(31032, w) >= 0) {
            w = JSProf.LWR(31037, w, JSProf.LMC(31036, Math, 'max').max(JSProf.LRE(31033, w) - JSProf.LGD(31034, pb, 'w').w - JSProf.LGD(31035, mb, 'w').w, 0));
        }
        if (JSProf.LRE(31038, h) >= 0) {
            h = JSProf.LWR(31043, h, JSProf.LMC(31042, Math, 'max').max(JSProf.LRE(31039, h) - JSProf.LGD(31040, pb, 'h').h - JSProf.LGD(31041, mb, 'h').h, 0));
        }
        JSProf.LFC(31049, setBox, false)(JSProf.LRE(31044, node), JSProf.LGD(31045, box, 'l').l, JSProf.LGD(31046, box, 't').t, JSProf.LRE(31047, w), JSProf.LRE(31048, h));
    }, 12));
    // =============================
    // Positioning
    // =============================
    JSProf.LPD(31060, geom, 'isBodyLtr').isBodyLtr = JSProf.LRSP(31060, JSProf.LNF(31059, function isBodyLtr(doc) {
        // summary:
        //		Returns true if the current language is left-to-right, and false otherwise.
        // doc: Document?
        //		Optional document to query.   If unspecified, use win.doc.
        // returns: Boolean
        doc = JSProf.LWR(31054, doc, JSProf.LRE(31052, doc) || JSProf.LGD(31053, win, 'doc').doc);
        return (JSProf.LGD(31057, JSProf.LMC(31056, win, 'body').body(JSProf.LRE(31055, doc)), 'dir').dir || JSProf.LGD(31058, doc.documentElement, 'dir').dir || "ltr").toLowerCase() == "ltr";    // Boolean
    }, 12));
    JSProf.LPD(31078, geom, 'docScroll').docScroll = JSProf.LRSP(31078, JSProf.LNF(31077, function docScroll(doc) {
        // summary:
        //		Returns an object with {node, x, y} with corresponding offsets.
        // doc: Document?
        //		Optional document to query.   If unspecified, use win.doc.
        // returns: Object
        doc = JSProf.LWR(31063, doc, JSProf.LRE(31061, doc) || JSProf.LGD(31062, win, 'doc').doc);
        var node = JSProf.LGD(31064, win.doc, 'parentWindow').parentWindow || JSProf.LGD(31065, win.doc, 'defaultView').defaultView;
        // use UI window, not dojo.global window.   TODO: use dojo/window::get() except for circular dependency problem
        return "pageXOffset" in JSProf.LRE(31066, node) ? JSProf.LNE(31067, {
            x: node.pageXOffset,
            y: node.pageYOffset
        }, 11) : (node = JSProf.LWR(31072, node, JSProf.LFC(31068, has, false)("quirks") ? JSProf.LMC(31070, win, 'body').body(JSProf.LRE(31069, doc)) : JSProf.LGD(31071, doc, 'documentElement').documentElement)) && JSProf.LNE(31076, {
            x: JSProf.LMC(31075, geom, 'fixIeBiDiScrollLeft').fixIeBiDiScrollLeft(JSProf.LGD(31073, node, 'scrollLeft').scrollLeft || 0, JSProf.LRE(31074, doc)),
            y: node.scrollTop || 0
        }, 11);
    }, 12));
    if (JSProf.LFC(31079, has, false)("ie")) {
        JSProf.LPD(31096, geom, 'getIeDocumentElementOffset').getIeDocumentElementOffset = JSProf.LRSP(31096, JSProf.LNF(31095, function getIeDocumentElementOffset(doc) {
            // summary:
            //		returns the offset in x and y from the document body to the
            //		visual edge of the page for IE
            // doc: Document?
            //		Optional document to query.   If unspecified, use win.doc.
            // description:
            //		The following values in IE contain an offset:
            //	|		event.clientX
            //	|		event.clientY
            //	|		node.getBoundingClientRect().left
            //	|		node.getBoundingClientRect().top
            //		But other position related values do not contain this offset,
            //		such as node.offsetLeft, node.offsetTop, node.style.left and
            //		node.style.top. The offset is always (2, 2) in LTR direction.
            //		When the body is in RTL direction, the offset counts the width
            //		of left scroll bar's width.  This function computes the actual
            //		offset.
            //NOTE: assumes we're being called in an IE browser
            doc = JSProf.LWR(31082, doc, JSProf.LRE(31080, doc) || JSProf.LGD(31081, win, 'doc').doc);
            var de = JSProf.LGD(31083, doc, 'documentElement').documentElement;
            // only deal with HTML element here, position() handles body/quirks
            if (JSProf.LFC(31084, has, false)("ie") < 8) {
                var r = JSProf.LMC(31085, de, 'getBoundingClientRect').getBoundingClientRect(),
                    // works well for IE6+
                    l = JSProf.LGD(31086, r, 'left').left, t = JSProf.LGD(31087, r, 'top').top;
                if (JSProf.LFC(31088, has, false)("ie") < 7) {
                    l += JSProf.LGD(31089, de, 'clientLeft').clientLeft;
                    // scrollbar size in strict/RTL, or,
                    t += JSProf.LGD(31090, de, 'clientTop').clientTop;    // HTML border size in strict
                }
                return JSProf.LNE(31093, {
                    x: JSProf.LRE(31091, l) < 0 ? 0 : l,
                    y: JSProf.LRE(31092, t) < 0 ? 0 : t
                }, 11);
            } else {
                return JSProf.LNE(31094, {
                    x: 0,
                    y: 0
                }, 11);
            }
        }, 12));
    }
    JSProf.LPD(31124, geom, 'fixIeBiDiScrollLeft').fixIeBiDiScrollLeft = JSProf.LRSP(31124, JSProf.LNF(31123, function fixIeBiDiScrollLeft(scrollLeft, doc) {
        // summary:
        //		In RTL direction, scrollLeft should be a negative value, but IE
        //		returns a positive one. All codes using documentElement.scrollLeft
        //		must call this function to fix this error, otherwise the position
        //		will offset to right when there is a horizontal scrollbar.
        // scrollLeft: Number
        // doc: Document?
        //		Optional document to query.   If unspecified, use win.doc.
        // returns: Number
        // In RTL direction, scrollLeft should be a negative value, but IE
        // returns a positive one. All codes using documentElement.scrollLeft
        // must call this function to fix this error, otherwise the position
        // will offset to right when there is a horizontal scrollbar.
        doc = JSProf.LWR(31099, doc, JSProf.LRE(31097, doc) || JSProf.LGD(31098, win, 'doc').doc);
        var ie = JSProf.LFC(31100, has, false)("ie");
        if (JSProf.LRE(31101, ie) && !JSProf.LMC(31103, geom, 'isBodyLtr').isBodyLtr(JSProf.LRE(31102, doc))) {
            var qk = JSProf.LFC(31104, has, false)("quirks"), de = JSProf.LRE(31105, qk) ? JSProf.LMC(31107, win, 'body').body(JSProf.LRE(31106, doc)) : JSProf.LGD(31108, doc, 'documentElement').documentElement, pwin = JSProf.LGD(31109, win, 'global').global;
            // TODO: use winUtils.get(doc) after resolving circular dependency b/w dom-geometry.js and dojo/window.js
            if (JSProf.LRE(31110, ie) == 6 && !JSProf.LRE(31111, qk) && JSProf.LGD(31112, pwin, 'frameElement').frameElement && JSProf.LGD(31113, de, 'scrollHeight').scrollHeight > JSProf.LGD(31114, de, 'clientHeight').clientHeight) {
                scrollLeft += JSProf.LGD(31115, de, 'clientLeft').clientLeft;    // workaround ie6+strict+rtl+iframe+vertical-scrollbar bug where clientWidth is too small by clientLeft pixels
            }
            return JSProf.LRE(31116, ie) < 8 || JSProf.LRE(31117, qk) ? JSProf.LRE(31118, scrollLeft) + JSProf.LGD(31119, de, 'clientWidth').clientWidth - JSProf.LGD(31120, de, 'scrollWidth').scrollWidth : -JSProf.LRE(31121, scrollLeft);    // Integer
        }
        return JSProf.LRE(31122, scrollLeft);    // Integer
    }, 12));
    JSProf.LPD(31151, geom, 'position').position = JSProf.LRSP(31151, JSProf.LNF(31150, function (node, includeScroll) {
        // summary:
        //		Gets the position and size of the passed element relative to
        //		the viewport (if includeScroll==false), or relative to the
        //		document root (if includeScroll==true).
        //
        // description:
        //		Returns an object of the form:
        //		`{ x: 100, y: 300, w: 20, h: 15 }`.
        //		If includeScroll==true, the x and y values will include any
        //		document offsets that may affect the position relative to the
        //		viewport.
        //		Uses the border-box model (inclusive of border and padding but
        //		not margin).  Does not act as a setter.
        // node: DOMNode|String
        // includeScroll: Boolean?
        // returns: Object
        node = JSProf.LWR(31127, node, JSProf.LMC(31126, dom, 'byId').byId(JSProf.LRE(31125, node)));
        var db = JSProf.LMC(31129, win, 'body').body(JSProf.LGD(31128, node, 'ownerDocument').ownerDocument), ret = JSProf.LMC(31130, node, 'getBoundingClientRect').getBoundingClientRect();
        ret = JSProf.LWR(31132, ret, JSProf.LNE(31131, {
            x: ret.left,
            y: ret.top,
            w: ret.right - ret.left,
            h: ret.bottom - ret.top
        }, 11));
        if (JSProf.LFC(31133, has, false)("ie") < 9) {
            // On IE<9 there's a 2px offset that we need to adjust for, see dojo.getIeDocumentElementOffset()
            var offset = JSProf.LMC(31135, geom, 'getIeDocumentElementOffset').getIeDocumentElementOffset(JSProf.LGD(31134, node, 'ownerDocument').ownerDocument);
            // fixes the position in IE, quirks mode
            ret.x -= JSProf.LGD(31136, offset, 'x').x + (JSProf.LFC(31137, has, false)("quirks") ? JSProf.LGD(31138, db, 'clientLeft').clientLeft + JSProf.LGD(31139, db, 'offsetLeft').offsetLeft : 0);
            ret.y -= JSProf.LGD(31140, offset, 'y').y + (JSProf.LFC(31141, has, false)("quirks") ? JSProf.LGD(31142, db, 'clientTop').clientTop + JSProf.LGD(31143, db, 'offsetTop').offsetTop : 0);
        }
        // account for document scrolling
        // if offsetParent is used, ret value already includes scroll position
        // so we may have to actually remove that value if !includeScroll
        if (JSProf.LRE(31144, includeScroll)) {
            var scroll = JSProf.LMC(31146, geom, 'docScroll').docScroll(JSProf.LGD(31145, node, 'ownerDocument').ownerDocument);
            ret.x += JSProf.LGD(31147, scroll, 'x').x;
            ret.y += JSProf.LGD(31148, scroll, 'y').y;
        }
        return JSProf.LRE(31149, ret);    // Object
    }, 12));
    // random "private" functions wildly used throughout the toolkit
    JSProf.LPD(31167, geom, 'getMarginSize').getMarginSize = JSProf.LRSP(31167, JSProf.LNF(31166, function getMarginSize(node, computedStyle) {
        // summary:
        //		returns an object that encodes the width and height of
        //		the node's margin box
        // node: DOMNode|String
        // computedStyle: Object?
        //		This parameter accepts computed styles object.
        //		If this parameter is omitted, the functions will call
        //		dojo/dom-style.getComputedStyle to get one. It is a better way, calling
        //		dojo/dom-style.getComputedStyle once, and then pass the reference to this
        //		computedStyle parameter. Wherever possible, reuse the returned
        //		object of dojo/dom-style.getComputedStyle().
        node = JSProf.LWR(31154, node, JSProf.LMC(31153, dom, 'byId').byId(JSProf.LRE(31152, node)));
        var me = JSProf.LMC(31159, geom, 'getMarginExtents').getMarginExtents(JSProf.LRE(31155, node), JSProf.LRE(31156, computedStyle) || JSProf.LMC(31158, style, 'getComputedStyle').getComputedStyle(JSProf.LRE(31157, node)));
        var size = JSProf.LMC(31160, node, 'getBoundingClientRect').getBoundingClientRect();
        return JSProf.LNE(31165, {
            w: JSProf.LGD(31161, size, 'right').right - JSProf.LGD(31162, size, 'left').left + me.w,
            h: JSProf.LGD(31163, size, 'bottom').bottom - JSProf.LGD(31164, size, 'top').top + me.h
        }, 11);
    }, 12));
    JSProf.LPD(31194, geom, 'normalizeEvent').normalizeEvent = JSProf.LRSP(31194, JSProf.LNF(31193, function (event) {
        // summary:
        //		Normalizes the geometry of a DOM event, normalizing the pageX, pageY,
        //		offsetX, offsetY, layerX, and layerX properties
        // event: Object
        if (!("layerX" in JSProf.LRE(31168, event))) {
            JSProf.LPD(31170, event, 'layerX').layerX = JSProf.LRSP(31170, JSProf.LGD(31169, event, 'offsetX').offsetX);
            JSProf.LPD(31172, event, 'layerY').layerY = JSProf.LRSP(31172, JSProf.LGD(31171, event, 'offsetY').offsetY);
        }
        if (!JSProf.LFC(31173, has, false)("dom-addeventlistener")) {
            // old IE version
            // FIXME: scroll position query is duped from dojo/_base/html to
            // avoid dependency on that entire module. Now that HTML is in
            // Base, we should convert back to something similar there.
            var se = JSProf.LGD(31174, event, 'target').target;
            var doc = JSProf.LRE(31175, se) && JSProf.LGD(31176, se, 'ownerDocument').ownerDocument || JSProf.LRU(31177, typeof document === 'undefined' ? undefined : document);
            // DO NOT replace the following to use dojo/_base/window.body(), in IE, document.documentElement should be used
            // here rather than document.body
            var docBody = JSProf.LFC(31178, has, false)("quirks") ? JSProf.LGD(31179, doc, 'body').body : JSProf.LGD(31180, doc, 'documentElement').documentElement;
            var offset = JSProf.LMC(31182, geom, 'getIeDocumentElementOffset').getIeDocumentElementOffset(JSProf.LRE(31181, doc));
            JSProf.LPD(31188, event, 'pageX').pageX = JSProf.LRSP(31188, JSProf.LGD(31183, event, 'clientX').clientX + JSProf.LMC(31186, geom, 'fixIeBiDiScrollLeft').fixIeBiDiScrollLeft(JSProf.LGD(31184, docBody, 'scrollLeft').scrollLeft || 0, JSProf.LRE(31185, doc)) - JSProf.LGD(31187, offset, 'x').x);
            JSProf.LPD(31192, event, 'pageY').pageY = JSProf.LRSP(31192, JSProf.LGD(31189, event, 'clientY').clientY + (JSProf.LGD(31190, docBody, 'scrollTop').scrollTop || 0) - JSProf.LGD(31191, offset, 'y').y);
        }
    }, 12));
    // TODO: evaluate separate getters/setters for position and sizes?
    return JSProf.LRE(31195, geom);
}, 12));