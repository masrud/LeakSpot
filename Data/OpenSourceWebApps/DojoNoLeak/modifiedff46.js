JSProf.LFC(18850, define, false)(JSProf.LNE(18822, [
    "dojo/_base/declare",
    "dojo/router",
    "dijit/Destroyable",
    "dojox/mvc/_Controller"
], 10), JSProf.LNF(18849, function (declare, router, Destroyable, _Controller) {
    return JSProf.LFC(18848, declare, false)(JSProf.LNE(18825, [
        JSProf.LRE(18823, _Controller),
        JSProf.LRE(18824, Destroyable)
    ], 10), JSProf.LNE(18847, {
        postscript: JSProf.LNF(18830, function (params, srcNodeRef) {
            // summary:
            //		Kicks off instantiation of this controller, in a similar manner as dijit/_WidgetBase.postscript().
            // params: Object?
            //		The optional parameters for this controller.
            // srcNodeRef: DOMNode?
            //		The DOM node declaring this controller. Set if this controller is created via Dojo parser.
            JSProf.LMC(18826, this, 'inherited').inherited(arguments);
            JSProf.LRE(18827, srcNodeRef) && JSProf.LMC(18829, srcNodeRef, 'setAttribute').setAttribute("widgetId", JSProf.LGD(18828, this, 'id').id);    // If this is created via Dojo parser, set widgetId attribute so that destroyDescendants() of parent widget works
        }, 12),
        startup: JSProf.LNF(18839, function () {
            // summary:
            //		A function called after the DOM fragment declaring this controller is added to the document, in a similar manner as dijit/_WidgetBase.startup().
            var _self = this;
            JSProf.LMC(18835, this, 'own').own(JSProf.LMC(18834, router, 'register').register(/.*/, JSProf.LNF(18833, function (e) {
                // Register a route handling callback for any route, make sure it's cleaned up upon this controller being destroyed
                JSProf.LMC(18832, _self, '_set')._set("hash", JSProf.LGD(18831, e, 'newPath').newPath);    // Update hash property
            }, 12)));
            JSProf.LMC(18836, router, 'startup').startup();
            // Activate dojo/router
            JSProf.LMC(18838, this, 'set').set("hash", JSProf.LGD(18837, router, '_currentPath')._currentPath);    // Set the inital value of hash property
        }, 12),
        _setHashAttr: JSProf.LNF(18846, function (value) {
            // summary:
            //		Handler for calls to set("hash", val).
            // description:
            //		If the new value is different from location.hash, updates location.hash.
            if (JSProf.LGD(18840, this, 'hash').hash != JSProf.LRE(18841, value)) {
                JSProf.LMC(18843, router, 'go').go(JSProf.LRE(18842, value));    // If the new value is different from location.hash, updates location.hash
            }
            JSProf.LMC(18845, this, '_set')._set("hash", JSProf.LRE(18844, value));    // Assign the new value to the property
        }, 12)
    }, 11));
}, 12));