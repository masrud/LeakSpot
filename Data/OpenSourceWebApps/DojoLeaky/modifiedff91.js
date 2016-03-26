JSProf.LFC(31163, define, false)(JSProf.LNE(30731, [
    "./sniff",
    "./_base/window",
    "./dom",
    "./dom-style"
], 10), JSProf.LNF(31162, function (has, win, dom, style) {
    JSProf.LFD(31159, setBox);
    JSProf.LFD(31160, isButtonTag);
    JSProf.LFD(31161, usesBorderBox);
    // module:
    //		dojo/dom-geometry
    // the result object
    var geom = JSProf.LNE(30732, {}, 11);
    // Box functions will assume this model.
    // On IE/Opera, BORDER_BOX will be set if the primary document is in quirks mode.
    // Can be set to change behavior of box setters.
    // can be either:
    //	"border-box"
    //	"content-box" (default)
    JSProf.LPD(30733, geom, 'boxModel').boxModel = JSProf.LRSP(30733, "content-box");
    // We punt per-node box mode testing completely.
    // If anybody cares, we can provide an additional (optional) unit
    // that overrides existing code to include per-node box sensitivity.
    // Opera documentation claims that Opera 9 uses border-box in BackCompat mode.
    // but experiments (Opera 9.10.8679 on Windows Vista) indicate that it actually continues to use content-box.
    // IIRC, earlier versions of Opera did in fact use border-box.
    // Opera guys, this is really confusing. Opera being broken in quirks mode is not our fault.
    if (JSProf.LFC(30734, has, false)("ie")) {
        // client code may have to adjust if compatMode varies across iframes
        JSProf.LPD(30736, geom, 'boxModel').boxModel = JSProf.LRSP(30736, JSProf.LGD(30735, document, 'compatMode').compatMode == "BackCompat" ? "border-box" : "content-box");
    }
    JSProf.LPD(30758, geom, 'getPadExtents').getPadExtents = JSProf.LRSP(30758, JSProf.LNF(30757, function getPadExtents(node, computedStyle) {
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
        node = JSProf.LWR(30739, node, JSProf.LMC(30738, dom, 'byId').byId(JSProf.LRE(30737, node)));
        var s = JSProf.LRE(30740, computedStyle) || JSProf.LMC(30742, style, 'getComputedStyle').getComputedStyle(JSProf.LRE(30741, node)), px = JSProf.LGD(30743, style, 'toPixelValue').toPixelValue, l = JSProf.LFC(30746, px, false)(JSProf.LRE(30744, node), JSProf.LGD(30745, s, 'paddingLeft').paddingLeft), t = JSProf.LFC(30749, px, false)(JSProf.LRE(30747, node), JSProf.LGD(30748, s, 'paddingTop').paddingTop), r = JSProf.LFC(30752, px, false)(JSProf.LRE(30750, node), JSProf.LGD(30751, s, 'paddingRight').paddingRight), b = JSProf.LFC(30755, px, false)(JSProf.LRE(30753, node), JSProf.LGD(30754, s, 'paddingBottom').paddingBottom);
        return JSProf.LNE(30756, {
            l: l,
            t: t,
            r: r,
            b: b,
            w: l + r,
            h: t + b
        }, 11);
    }, 12));
    var none = "none";
    JSProf.LPD(30788, geom, 'getBorderExtents').getBorderExtents = JSProf.LRSP(30788, JSProf.LNF(30787, function getBorderExtents(node, computedStyle) {
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
        node = JSProf.LWR(30761, node, JSProf.LMC(30760, dom, 'byId').byId(JSProf.LRE(30759, node)));
        var px = JSProf.LGD(30762, style, 'toPixelValue').toPixelValue, s = JSProf.LRE(30763, computedStyle) || JSProf.LMC(30765, style, 'getComputedStyle').getComputedStyle(JSProf.LRE(30764, node)), l = JSProf.LGD(30766, s, 'borderLeftStyle').borderLeftStyle != JSProf.LRE(30767, none) ? JSProf.LFC(30770, px, false)(JSProf.LRE(30768, node), JSProf.LGD(30769, s, 'borderLeftWidth').borderLeftWidth) : 0, t = JSProf.LGD(30771, s, 'borderTopStyle').borderTopStyle != JSProf.LRE(30772, none) ? JSProf.LFC(30775, px, false)(JSProf.LRE(30773, node), JSProf.LGD(30774, s, 'borderTopWidth').borderTopWidth) : 0, r = JSProf.LGD(30776, s, 'borderRightStyle').borderRightStyle != JSProf.LRE(30777, none) ? JSProf.LFC(30780, px, false)(JSProf.LRE(30778, node), JSProf.LGD(30779, s, 'borderRightWidth').borderRightWidth) : 0, b = JSProf.LGD(30781, s, 'borderBottomStyle').borderBottomStyle != JSProf.LRE(30782, none) ? JSProf.LFC(30785, px, false)(JSProf.LRE(30783, node), JSProf.LGD(30784, s, 'borderBottomWidth').borderBottomWidth) : 0;
        return JSProf.LNE(30786, {
            l: l,
            t: t,
            r: r,
            b: b,
            w: l + r,
            h: t + b
        }, 11);
    }, 12));
    JSProf.LPD(30803, geom, 'getPadBorderExtents').getPadBorderExtents = JSProf.LRSP(30803, JSProf.LNF(30802, function getPadBorderExtents(node, computedStyle) {
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
        node = JSProf.LWR(30791, node, JSProf.LMC(30790, dom, 'byId').byId(JSProf.LRE(30789, node)));
        var s = JSProf.LRE(30792, computedStyle) || JSProf.LMC(30794, style, 'getComputedStyle').getComputedStyle(JSProf.LRE(30793, node)), p = JSProf.LMC(30797, geom, 'getPadExtents').getPadExtents(JSProf.LRE(30795, node), JSProf.LRE(30796, s)), b = JSProf.LMC(30800, geom, 'getBorderExtents').getBorderExtents(JSProf.LRE(30798, node), JSProf.LRE(30799, s));
        return JSProf.LNE(30801, {
            l: p.l + b.l,
            t: p.t + b.t,
            r: p.r + b.r,
            b: p.b + b.b,
            w: p.w + b.w,
            h: p.h + b.h
        }, 11);
    }, 12));
    JSProf.LPD(30825, geom, 'getMarginExtents').getMarginExtents = JSProf.LRSP(30825, JSProf.LNF(30824, function getMarginExtents(node, computedStyle) {
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
        node = JSProf.LWR(30806, node, JSProf.LMC(30805, dom, 'byId').byId(JSProf.LRE(30804, node)));
        var s = JSProf.LRE(30807, computedStyle) || JSProf.LMC(30809, style, 'getComputedStyle').getComputedStyle(JSProf.LRE(30808, node)), px = JSProf.LGD(30810, style, 'toPixelValue').toPixelValue, l = JSProf.LFC(30813, px, false)(JSProf.LRE(30811, node), JSProf.LGD(30812, s, 'marginLeft').marginLeft), t = JSProf.LFC(30816, px, false)(JSProf.LRE(30814, node), JSProf.LGD(30815, s, 'marginTop').marginTop), r = JSProf.LFC(30819, px, false)(JSProf.LRE(30817, node), JSProf.LGD(30818, s, 'marginRight').marginRight), b = JSProf.LFC(30822, px, false)(JSProf.LRE(30820, node), JSProf.LGD(30821, s, 'marginBottom').marginBottom);
        return JSProf.LNE(30823, {
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
    JSProf.LPD(30889, geom, 'getMarginBox').getMarginBox = JSProf.LRSP(30889, JSProf.LNF(30888, function getMarginBox(node, computedStyle) {
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
        node = JSProf.LWR(30828, node, JSProf.LMC(30827, dom, 'byId').byId(JSProf.LRE(30826, node)));
        var s = JSProf.LRE(30829, computedStyle) || JSProf.LMC(30831, style, 'getComputedStyle').getComputedStyle(JSProf.LRE(30830, node)), me = JSProf.LMC(30834, geom, 'getMarginExtents').getMarginExtents(JSProf.LRE(30832, node), JSProf.LRE(30833, s)), l = JSProf.LGD(30835, node, 'offsetLeft').offsetLeft - JSProf.LGD(30836, me, 'l').l, t = JSProf.LGD(30837, node, 'offsetTop').offsetTop - JSProf.LGD(30838, me, 't').t, p = JSProf.LGD(30839, node, 'parentNode').parentNode, px = JSProf.LGD(30840, style, 'toPixelValue').toPixelValue, pcs;
        if (JSProf.LFC(30841, has, false)("mozilla")) {
            // Mozilla:
            // If offsetParent has a computed overflow != visible, the offsetLeft is decreased
            // by the parent's border.
            // We don't want to compute the parent's style, so instead we examine node's
            // computed left/top which is more stable.
            var sl = JSProf.LFC(30843, parseFloat, false)(JSProf.LGD(30842, s, 'left').left), st = JSProf.LFC(30845, parseFloat, false)(JSProf.LGD(30844, s, 'top').top);
            if (!JSProf.LFC(30847, isNaN, false)(JSProf.LRE(30846, sl)) && !JSProf.LFC(30849, isNaN, false)(JSProf.LRE(30848, st))) {
                l = JSProf.LWR(30851, l, JSProf.LRE(30850, sl));
                t = JSProf.LWR(30853, t, JSProf.LRE(30852, st));
            } else {
                // If child's computed left/top are not parseable as a number (e.g. "auto"), we
                // have no choice but to examine the parent's computed style.
                if (JSProf.LRE(30854, p) && JSProf.LGD(30855, p, 'style').style) {
                    pcs = JSProf.LWR(30858, pcs, JSProf.LMC(30857, style, 'getComputedStyle').getComputedStyle(JSProf.LRE(30856, p)));
                    if (JSProf.LGD(30859, pcs, 'overflow').overflow != "visible") {
                        l += JSProf.LGD(30860, pcs, 'borderLeftStyle').borderLeftStyle != JSProf.LRE(30861, none) ? JSProf.LFC(30864, px, false)(JSProf.LRE(30862, node), JSProf.LGD(30863, pcs, 'borderLeftWidth').borderLeftWidth) : 0;
                        t += JSProf.LGD(30865, pcs, 'borderTopStyle').borderTopStyle != JSProf.LRE(30866, none) ? JSProf.LFC(30869, px, false)(JSProf.LRE(30867, node), JSProf.LGD(30868, pcs, 'borderTopWidth').borderTopWidth) : 0;
                    }
                }
            }
        } else if (JSProf.LFC(30870, has, false)("opera") || JSProf.LFC(30871, has, false)("ie") == 8 && !JSProf.LFC(30872, has, false)("quirks")) {
            // On Opera and IE 8, offsetLeft/Top includes the parent's border
            if (JSProf.LRE(30873, p)) {
                pcs = JSProf.LWR(30876, pcs, JSProf.LMC(30875, style, 'getComputedStyle').getComputedStyle(JSProf.LRE(30874, p)));
                l -= JSProf.LGD(30877, pcs, 'borderLeftStyle').borderLeftStyle != JSProf.LRE(30878, none) ? JSProf.LFC(30881, px, false)(JSProf.LRE(30879, node), JSProf.LGD(30880, pcs, 'borderLeftWidth').borderLeftWidth) : 0;
                t -= JSProf.LGD(30882, pcs, 'borderTopStyle').borderTopStyle != JSProf.LRE(30883, none) ? JSProf.LFC(30886, px, false)(JSProf.LRE(30884, node), JSProf.LGD(30885, pcs, 'borderTopWidth').borderTopWidth) : 0;
            }
        }
        return JSProf.LNE(30887, {
            l: l,
            t: t,
            w: node.offsetWidth + me.w,
            h: node.offsetHeight + me.h
        }, 11);
    }, 12));
    JSProf.LPD(30921, geom, 'getContentBox').getContentBox = JSProf.LRSP(30921, JSProf.LNF(30920, function getContentBox(node, computedStyle) {
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
        node = JSProf.LWR(30892, node, JSProf.LMC(30891, dom, 'byId').byId(JSProf.LRE(30890, node)));
        var s = JSProf.LRE(30893, computedStyle) || JSProf.LMC(30895, style, 'getComputedStyle').getComputedStyle(JSProf.LRE(30894, node)), w = JSProf.LGD(30896, node, 'clientWidth').clientWidth, h, pe = JSProf.LMC(30899, geom, 'getPadExtents').getPadExtents(JSProf.LRE(30897, node), JSProf.LRE(30898, s)), be = JSProf.LMC(30902, geom, 'getBorderExtents').getBorderExtents(JSProf.LRE(30900, node), JSProf.LRE(30901, s));
        if (!JSProf.LRE(30903, w)) {
            w = JSProf.LWR(30905, w, JSProf.LGD(30904, node, 'offsetWidth').offsetWidth);
            h = JSProf.LWR(30907, h, JSProf.LGD(30906, node, 'offsetHeight').offsetHeight);
        } else {
            h = JSProf.LWR(30909, h, JSProf.LGD(30908, node, 'clientHeight').clientHeight);
            JSProf.LPD(30911, be, 'w').w = JSProf.LRSP(30911, JSProf.LPD(30910, be, 'h').h = JSProf.LRSP(30910, 0));
        }
        // On Opera, offsetLeft includes the parent's border
        if (JSProf.LFC(30912, has, false)("opera")) {
            pe.l += JSProf.LGD(30913, be, 'l').l;
            pe.t += JSProf.LGD(30914, be, 't').t;
        }
        return JSProf.LNE(30919, {
            l: pe.l,
            t: pe.t,
            w: JSProf.LRE(30915, w) - JSProf.LGD(30916, pe, 'w').w - be.w,
            h: JSProf.LRE(30917, h) - JSProf.LGD(30918, pe, 'h').h - be.h
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
        u = JSProf.LWR(30923, u, JSProf.LRE(30922, u) || "px");
        var s = JSProf.LGD(30924, node, 'style').style;
        if (!JSProf.LFC(30926, isNaN, false)(JSProf.LRE(30925, l))) {
            JSProf.LPD(30929, s, 'left').left = JSProf.LRSP(30929, JSProf.LRE(30927, l) + JSProf.LRE(30928, u));
        }
        if (!JSProf.LFC(30931, isNaN, false)(JSProf.LRE(30930, t))) {
            JSProf.LPD(30934, s, 'top').top = JSProf.LRSP(30934, JSProf.LRE(30932, t) + JSProf.LRE(30933, u));
        }
        if (JSProf.LRE(30935, w) >= 0) {
            JSProf.LPD(30938, s, 'width').width = JSProf.LRSP(30938, JSProf.LRE(30936, w) + JSProf.LRE(30937, u));
        }
        if (JSProf.LRE(30939, h) >= 0) {
            JSProf.LPD(30942, s, 'height').height = JSProf.LRSP(30942, JSProf.LRE(30940, h) + JSProf.LRE(30941, u));
        }
    }
    function isButtonTag(node) {
        // summary:
        //		True if the node is BUTTON or INPUT.type="button".
        return node.tagName.toLowerCase() == "button" || node.tagName.toLowerCase() == "input" && (JSProf.LMC(30943, node, 'getAttribute').getAttribute("type") || "").toLowerCase() == "button";    // boolean
    }
    function usesBorderBox(node) {
        // summary:
        //		True if the node uses border-box layout.
        // We could test the computed style of node to see if a particular box
        // has been specified, but there are details and we choose not to bother.
        // TABLE and BUTTON (and INPUT type=button) are always border-box by default.
        // If you have assigned a different box to either one via CSS then
        // box functions will break.
        return JSProf.LGD(30944, geom, 'boxModel').boxModel == "border-box" || node.tagName.toLowerCase() == "table" || JSProf.LFC(30946, isButtonTag, false)(JSProf.LRE(30945, node));    // boolean
    }
    JSProf.LPD(30966, geom, 'setContentSize').setContentSize = JSProf.LRSP(30966, JSProf.LNF(30965, function setContentSize(node, box, computedStyle) {
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
        node = JSProf.LWR(30949, node, JSProf.LMC(30948, dom, 'byId').byId(JSProf.LRE(30947, node)));
        var w = JSProf.LGD(30950, box, 'w').w, h = JSProf.LGD(30951, box, 'h').h;
        if (JSProf.LFC(30953, usesBorderBox, false)(JSProf.LRE(30952, node))) {
            var pb = JSProf.LMC(30956, geom, 'getPadBorderExtents').getPadBorderExtents(JSProf.LRE(30954, node), JSProf.LRE(30955, computedStyle));
            if (JSProf.LRE(30957, w) >= 0) {
                w += JSProf.LGD(30958, pb, 'w').w;
            }
            if (JSProf.LRE(30959, h) >= 0) {
                h += JSProf.LGD(30960, pb, 'h').h;
            }
        }
        JSProf.LFC(30964, setBox, false)(JSProf.LRE(30961, node), NaN, NaN, JSProf.LRE(30962, w), JSProf.LRE(30963, h));
    }, 12));
    var nilExtents = JSProf.LNE(30967, {
            l: 0,
            t: 0,
            w: 0,
            h: 0
        }, 11);
    JSProf.LPD(31014, geom, 'setMarginBox').setMarginBox = JSProf.LRSP(31014, JSProf.LNF(31013, function setMarginBox(node, box, computedStyle) {
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
        node = JSProf.LWR(30970, node, JSProf.LMC(30969, dom, 'byId').byId(JSProf.LRE(30968, node)));
        var s = JSProf.LRE(30971, computedStyle) || JSProf.LMC(30973, style, 'getComputedStyle').getComputedStyle(JSProf.LRE(30972, node)), w = JSProf.LGD(30974, box, 'w').w, h = JSProf.LGD(30975, box, 'h').h,
            // Some elements have special padding, margin, and box-model settings.
            // To use box functions you may need to set padding, margin explicitly.
            // Controlling box-model is harder, in a pinch you might set dojo/dom-geometry.boxModel.
            pb = JSProf.LFC(30977, usesBorderBox, false)(JSProf.LRE(30976, node)) ? JSProf.LRE(30978, nilExtents) : JSProf.LMC(30981, geom, 'getPadBorderExtents').getPadBorderExtents(JSProf.LRE(30979, node), JSProf.LRE(30980, s)), mb = JSProf.LMC(30984, geom, 'getMarginExtents').getMarginExtents(JSProf.LRE(30982, node), JSProf.LRE(30983, s));
        if (JSProf.LFC(30985, has, false)("webkit")) {
            // on Safari (3.1.2), button nodes with no explicit size have a default margin
            // setting an explicit size eliminates the margin.
            // We have to swizzle the width to get correct margin reading.
            if (JSProf.LFC(30987, isButtonTag, false)(JSProf.LRE(30986, node))) {
                var ns = JSProf.LGD(30988, node, 'style').style;
                if (JSProf.LRE(30989, w) >= 0 && !JSProf.LGD(30990, ns, 'width').width) {
                    JSProf.LPD(30991, ns, 'width').width = JSProf.LRSP(30991, "4px");
                }
                if (JSProf.LRE(30992, h) >= 0 && !JSProf.LGD(30993, ns, 'height').height) {
                    JSProf.LPD(30994, ns, 'height').height = JSProf.LRSP(30994, "4px");
                }
            }
        }
        if (JSProf.LRE(30995, w) >= 0) {
            w = JSProf.LWR(31000, w, JSProf.LMC(30999, Math, 'max').max(JSProf.LRE(30996, w) - JSProf.LGD(30997, pb, 'w').w - JSProf.LGD(30998, mb, 'w').w, 0));
        }
        if (JSProf.LRE(31001, h) >= 0) {
            h = JSProf.LWR(31006, h, JSProf.LMC(31005, Math, 'max').max(JSProf.LRE(31002, h) - JSProf.LGD(31003, pb, 'h').h - JSProf.LGD(31004, mb, 'h').h, 0));
        }
        JSProf.LFC(31012, setBox, false)(JSProf.LRE(31007, node), JSProf.LGD(31008, box, 'l').l, JSProf.LGD(31009, box, 't').t, JSProf.LRE(31010, w), JSProf.LRE(31011, h));
    }, 12));
    // =============================
    // Positioning
    // =============================
    JSProf.LPD(31023, geom, 'isBodyLtr').isBodyLtr = JSProf.LRSP(31023, JSProf.LNF(31022, function isBodyLtr(doc) {
        // summary:
        //		Returns true if the current language is left-to-right, and false otherwise.
        // doc: Document?
        //		Optional document to query.   If unspecified, use win.doc.
        // returns: Boolean
        doc = JSProf.LWR(31017, doc, JSProf.LRE(31015, doc) || JSProf.LGD(31016, win, 'doc').doc);
        return (JSProf.LGD(31020, JSProf.LMC(31019, win, 'body').body(JSProf.LRE(31018, doc)), 'dir').dir || JSProf.LGD(31021, doc.documentElement, 'dir').dir || "ltr").toLowerCase() == "ltr";    // Boolean
    }, 12));
    JSProf.LPD(31041, geom, 'docScroll').docScroll = JSProf.LRSP(31041, JSProf.LNF(31040, function docScroll(doc) {
        // summary:
        //		Returns an object with {node, x, y} with corresponding offsets.
        // doc: Document?
        //		Optional document to query.   If unspecified, use win.doc.
        // returns: Object
        doc = JSProf.LWR(31026, doc, JSProf.LRE(31024, doc) || JSProf.LGD(31025, win, 'doc').doc);
        var node = JSProf.LGD(31027, win.doc, 'parentWindow').parentWindow || JSProf.LGD(31028, win.doc, 'defaultView').defaultView;
        // use UI window, not dojo.global window.   TODO: use dojo/window::get() except for circular dependency problem
        return "pageXOffset" in JSProf.LRE(31029, node) ? JSProf.LNE(31030, {
            x: node.pageXOffset,
            y: node.pageYOffset
        }, 11) : (node = JSProf.LWR(31035, node, JSProf.LFC(31031, has, false)("quirks") ? JSProf.LMC(31033, win, 'body').body(JSProf.LRE(31032, doc)) : JSProf.LGD(31034, doc, 'documentElement').documentElement)) && JSProf.LNE(31039, {
            x: JSProf.LMC(31038, geom, 'fixIeBiDiScrollLeft').fixIeBiDiScrollLeft(JSProf.LGD(31036, node, 'scrollLeft').scrollLeft || 0, JSProf.LRE(31037, doc)),
            y: node.scrollTop || 0
        }, 11);
    }, 12));
    if (JSProf.LFC(31042, has, false)("ie")) {
        JSProf.LPD(31059, geom, 'getIeDocumentElementOffset').getIeDocumentElementOffset = JSProf.LRSP(31059, JSProf.LNF(31058, function getIeDocumentElementOffset(doc) {
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
            doc = JSProf.LWR(31045, doc, JSProf.LRE(31043, doc) || JSProf.LGD(31044, win, 'doc').doc);
            var de = JSProf.LGD(31046, doc, 'documentElement').documentElement;
            // only deal with HTML element here, position() handles body/quirks
            if (JSProf.LFC(31047, has, false)("ie") < 8) {
                var r = JSProf.LMC(31048, de, 'getBoundingClientRect').getBoundingClientRect(),
                    // works well for IE6+
                    l = JSProf.LGD(31049, r, 'left').left, t = JSProf.LGD(31050, r, 'top').top;
                if (JSProf.LFC(31051, has, false)("ie") < 7) {
                    l += JSProf.LGD(31052, de, 'clientLeft').clientLeft;
                    // scrollbar size in strict/RTL, or,
                    t += JSProf.LGD(31053, de, 'clientTop').clientTop;    // HTML border size in strict
                }
                return JSProf.LNE(31056, {
                    x: JSProf.LRE(31054, l) < 0 ? 0 : l,
                    y: JSProf.LRE(31055, t) < 0 ? 0 : t
                }, 11);
            } else {
                return JSProf.LNE(31057, {
                    x: 0,
                    y: 0
                }, 11);
            }
        }, 12));
    }
    JSProf.LPD(31087, geom, 'fixIeBiDiScrollLeft').fixIeBiDiScrollLeft = JSProf.LRSP(31087, JSProf.LNF(31086, function fixIeBiDiScrollLeft(scrollLeft, doc) {
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
        doc = JSProf.LWR(31062, doc, JSProf.LRE(31060, doc) || JSProf.LGD(31061, win, 'doc').doc);
        var ie = JSProf.LFC(31063, has, false)("ie");
        if (JSProf.LRE(31064, ie) && !JSProf.LMC(31066, geom, 'isBodyLtr').isBodyLtr(JSProf.LRE(31065, doc))) {
            var qk = JSProf.LFC(31067, has, false)("quirks"), de = JSProf.LRE(31068, qk) ? JSProf.LMC(31070, win, 'body').body(JSProf.LRE(31069, doc)) : JSProf.LGD(31071, doc, 'documentElement').documentElement, pwin = JSProf.LGD(31072, win, 'global').global;
            // TODO: use winUtils.get(doc) after resolving circular dependency b/w dom-geometry.js and dojo/window.js
            if (JSProf.LRE(31073, ie) == 6 && !JSProf.LRE(31074, qk) && JSProf.LGD(31075, pwin, 'frameElement').frameElement && JSProf.LGD(31076, de, 'scrollHeight').scrollHeight > JSProf.LGD(31077, de, 'clientHeight').clientHeight) {
                scrollLeft += JSProf.LGD(31078, de, 'clientLeft').clientLeft;    // workaround ie6+strict+rtl+iframe+vertical-scrollbar bug where clientWidth is too small by clientLeft pixels
            }
            return JSProf.LRE(31079, ie) < 8 || JSProf.LRE(31080, qk) ? JSProf.LRE(31081, scrollLeft) + JSProf.LGD(31082, de, 'clientWidth').clientWidth - JSProf.LGD(31083, de, 'scrollWidth').scrollWidth : -JSProf.LRE(31084, scrollLeft);    // Integer
        }
        return JSProf.LRE(31085, scrollLeft);    // Integer
    }, 12));
    JSProf.LPD(31114, geom, 'position').position = JSProf.LRSP(31114, JSProf.LNF(31113, function (node, includeScroll) {
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
        node = JSProf.LWR(31090, node, JSProf.LMC(31089, dom, 'byId').byId(JSProf.LRE(31088, node)));
        var db = JSProf.LMC(31092, win, 'body').body(JSProf.LGD(31091, node, 'ownerDocument').ownerDocument), ret = JSProf.LMC(31093, node, 'getBoundingClientRect').getBoundingClientRect();
        ret = JSProf.LWR(31095, ret, JSProf.LNE(31094, {
            x: ret.left,
            y: ret.top,
            w: ret.right - ret.left,
            h: ret.bottom - ret.top
        }, 11));
        if (JSProf.LFC(31096, has, false)("ie") < 9) {
            // On IE<9 there's a 2px offset that we need to adjust for, see dojo.getIeDocumentElementOffset()
            var offset = JSProf.LMC(31098, geom, 'getIeDocumentElementOffset').getIeDocumentElementOffset(JSProf.LGD(31097, node, 'ownerDocument').ownerDocument);
            // fixes the position in IE, quirks mode
            ret.x -= JSProf.LGD(31099, offset, 'x').x + (JSProf.LFC(31100, has, false)("quirks") ? JSProf.LGD(31101, db, 'clientLeft').clientLeft + JSProf.LGD(31102, db, 'offsetLeft').offsetLeft : 0);
            ret.y -= JSProf.LGD(31103, offset, 'y').y + (JSProf.LFC(31104, has, false)("quirks") ? JSProf.LGD(31105, db, 'clientTop').clientTop + JSProf.LGD(31106, db, 'offsetTop').offsetTop : 0);
        }
        // account for document scrolling
        // if offsetParent is used, ret value already includes scroll position
        // so we may have to actually remove that value if !includeScroll
        if (JSProf.LRE(31107, includeScroll)) {
            var scroll = JSProf.LMC(31109, geom, 'docScroll').docScroll(JSProf.LGD(31108, node, 'ownerDocument').ownerDocument);
            ret.x += JSProf.LGD(31110, scroll, 'x').x;
            ret.y += JSProf.LGD(31111, scroll, 'y').y;
        }
        return JSProf.LRE(31112, ret);    // Object
    }, 12));
    // random "private" functions wildly used throughout the toolkit
    JSProf.LPD(31130, geom, 'getMarginSize').getMarginSize = JSProf.LRSP(31130, JSProf.LNF(31129, function getMarginSize(node, computedStyle) {
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
        node = JSProf.LWR(31117, node, JSProf.LMC(31116, dom, 'byId').byId(JSProf.LRE(31115, node)));
        var me = JSProf.LMC(31122, geom, 'getMarginExtents').getMarginExtents(JSProf.LRE(31118, node), JSProf.LRE(31119, computedStyle) || JSProf.LMC(31121, style, 'getComputedStyle').getComputedStyle(JSProf.LRE(31120, node)));
        var size = JSProf.LMC(31123, node, 'getBoundingClientRect').getBoundingClientRect();
        return JSProf.LNE(31128, {
            w: JSProf.LGD(31124, size, 'right').right - JSProf.LGD(31125, size, 'left').left + me.w,
            h: JSProf.LGD(31126, size, 'bottom').bottom - JSProf.LGD(31127, size, 'top').top + me.h
        }, 11);
    }, 12));
    JSProf.LPD(31157, geom, 'normalizeEvent').normalizeEvent = JSProf.LRSP(31157, JSProf.LNF(31156, function (event) {
        // summary:
        //		Normalizes the geometry of a DOM event, normalizing the pageX, pageY,
        //		offsetX, offsetY, layerX, and layerX properties
        // event: Object
        if (!("layerX" in JSProf.LRE(31131, event))) {
            JSProf.LPD(31133, event, 'layerX').layerX = JSProf.LRSP(31133, JSProf.LGD(31132, event, 'offsetX').offsetX);
            JSProf.LPD(31135, event, 'layerY').layerY = JSProf.LRSP(31135, JSProf.LGD(31134, event, 'offsetY').offsetY);
        }
        if (!JSProf.LFC(31136, has, false)("dom-addeventlistener")) {
            // old IE version
            // FIXME: scroll position query is duped from dojo/_base/html to
            // avoid dependency on that entire module. Now that HTML is in
            // Base, we should convert back to something similar there.
            var se = JSProf.LGD(31137, event, 'target').target;
            var doc = JSProf.LRE(31138, se) && JSProf.LGD(31139, se, 'ownerDocument').ownerDocument || JSProf.LRU(31140, typeof document === 'undefined' ? undefined : document);
            // DO NOT replace the following to use dojo/_base/window.body(), in IE, document.documentElement should be used
            // here rather than document.body
            var docBody = JSProf.LFC(31141, has, false)("quirks") ? JSProf.LGD(31142, doc, 'body').body : JSProf.LGD(31143, doc, 'documentElement').documentElement;
            var offset = JSProf.LMC(31145, geom, 'getIeDocumentElementOffset').getIeDocumentElementOffset(JSProf.LRE(31144, doc));
            JSProf.LPD(31151, event, 'pageX').pageX = JSProf.LRSP(31151, JSProf.LGD(31146, event, 'clientX').clientX + JSProf.LMC(31149, geom, 'fixIeBiDiScrollLeft').fixIeBiDiScrollLeft(JSProf.LGD(31147, docBody, 'scrollLeft').scrollLeft || 0, JSProf.LRE(31148, doc)) - JSProf.LGD(31150, offset, 'x').x);
            JSProf.LPD(31155, event, 'pageY').pageY = JSProf.LRSP(31155, JSProf.LGD(31152, event, 'clientY').clientY + (JSProf.LGD(31153, docBody, 'scrollTop').scrollTop || 0) - JSProf.LGD(31154, offset, 'y').y);
        }
    }, 12));
    // TODO: evaluate separate getters/setters for position and sizes?
    return JSProf.LRE(31158, geom);
}, 12));