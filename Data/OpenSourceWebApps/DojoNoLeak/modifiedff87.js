JSProf.LFC(29544, define, false)(JSProf.LNE(29520, [
    'exports',
    'require',
    '../has'
], 10), JSProf.LNF(29543, function (exports, require, has) {
    var defId = JSProf.LFC(29521, has, false)('config-requestProvider'), platformId;
    if (JSProf.LFC(29522, has, false)('host-browser') || JSProf.LFC(29523, has, false)('host-webworker')) {
        platformId = JSProf.LWR(29524, platformId, './xhr');
    } else if (JSProf.LFC(29525, has, false)('host-node')) {
        platformId = JSProf.LWR(29526, platformId, './node');    /* TODO:
                                                                 }else if(has('host-rhino')){
                                                                 	platformId = './rhino';
                                                                   */
    }
    if (!JSProf.LRE(29527, defId)) {
        defId = JSProf.LWR(29529, defId, JSProf.LRE(29528, platformId));
    }
    JSProf.LPD(29532, exports, 'getPlatformDefaultId').getPlatformDefaultId = JSProf.LRSP(29532, JSProf.LNF(29531, function () {
        return JSProf.LRE(29530, platformId);
    }, 12));
    JSProf.LPD(29542, exports, 'load').load = JSProf.LRSP(29542, JSProf.LNF(29541, function (id, parentRequire, loaded, config) {
        JSProf.LFC(29540, require, false)(JSProf.LNE(29536, [JSProf.LRE(29533, id) == 'platform' ? JSProf.LRE(29534, platformId) : JSProf.LRE(29535, defId)], 10), JSProf.LNF(29539, function (provider) {
            JSProf.LFC(29538, loaded, false)(JSProf.LRE(29537, provider));
        }, 12));
    }, 12));
}, 12));