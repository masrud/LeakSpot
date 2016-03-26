JSProf.LFC(29542, define, false)(JSProf.LNE(29518, [
    'exports',
    'require',
    '../has'
], 10), JSProf.LNF(29541, function (exports, require, has) {
    var defId = JSProf.LFC(29519, has, false)('config-requestProvider'), platformId;
    if (JSProf.LFC(29520, has, false)('host-browser') || JSProf.LFC(29521, has, false)('host-webworker')) {
        platformId = JSProf.LWR(29522, platformId, './xhr');
    } else if (JSProf.LFC(29523, has, false)('host-node')) {
        platformId = JSProf.LWR(29524, platformId, './node');    /* TODO:
                                                                 }else if(has('host-rhino')){
                                                                 	platformId = './rhino';
                                                                   */
    }
    if (!JSProf.LRE(29525, defId)) {
        defId = JSProf.LWR(29527, defId, JSProf.LRE(29526, platformId));
    }
    JSProf.LPD(29530, exports, 'getPlatformDefaultId').getPlatformDefaultId = JSProf.LRSP(29530, JSProf.LNF(29529, function () {
        return JSProf.LRE(29528, platformId);
    }, 12));
    JSProf.LPD(29540, exports, 'load').load = JSProf.LRSP(29540, JSProf.LNF(29539, function (id, parentRequire, loaded, config) {
        JSProf.LFC(29538, require, false)(JSProf.LNE(29534, [JSProf.LRE(29531, id) == 'platform' ? JSProf.LRE(29532, platformId) : JSProf.LRE(29533, defId)], 10), JSProf.LNF(29537, function (provider) {
            JSProf.LFC(29536, loaded, false)(JSProf.LRE(29535, provider));
        }, 12));
    }, 12));
}, 12));