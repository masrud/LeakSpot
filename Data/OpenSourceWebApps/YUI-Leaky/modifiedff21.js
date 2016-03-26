/*
YUI 3.14.1 (build 63049cb)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
JSProf.LMC(93556, YUI, 'add').add("querystring-stringify-simple", JSProf.LNF(93553, function (e, t) {
    var n = JSProf.LMC(93523, e, 'namespace').namespace("QueryString"), r = JSProf.LRU(93524, typeof encodeURIComponent === 'undefined' ? undefined : encodeURIComponent);
    JSProf.LPD(93552, n, 'stringify').stringify = JSProf.LRSP(93552, JSProf.LNF(93551, function (t, n) {
        var i = JSProf.LNE(93525, [], 10), s = JSProf.LRE(93526, n) && JSProf.LGD(93527, n, 'arrayKey').arrayKey ? !0 : !1, o, u, a;
        for (o in JSProf.LRE(93528, t))
            if (JSProf.LMC(93530, t, 'hasOwnProperty').hasOwnProperty(JSProf.LRE(93529, o)))
                if (JSProf.LMC(93532, e.Lang, 'isArray').isArray(JSProf.LGE(93531, t, 'o')[o]))
                    for (u = JSProf.LWR(93533, u, 0), a = JSProf.LWR(93535, a, JSProf.LGD(93534, t[o], 'length').length); JSProf.LRE(93536, u) < JSProf.LRE(93537, a); u++)
                        JSProf.LMC(93544, i, 'push').push(JSProf.LFC(93541, r, false)(JSProf.LRE(93538, s) ? JSProf.LRE(93539, o) + "[]" : JSProf.LRE(93540, o)) + "=" + JSProf.LFC(93543, r, false)(JSProf.LGE(93542, t[o], 'u')[u]));
                else
                    JSProf.LMC(93549, i, 'push').push(JSProf.LFC(93546, r, false)(JSProf.LRE(93545, o)) + "=" + JSProf.LFC(93548, r, false)(JSProf.LGE(93547, t, 'o')[o]));
        return JSProf.LMC(93550, i, 'join').join("&");
    }, 12));
}, 12), "3.14.1", JSProf.LNE(93555, { requires: JSProf.LNE(93554, ["yui-base"], 10) }, 11));
/*
YUI 3.14.1 (build 63049cb)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
JSProf.LMC(94038, YUI, 'add').add("io-base", JSProf.LNF(94035, function (e, t) {
    JSProf.LFD(94034, o);
    function o(t) {
        var n = this;
        JSProf.LPD(93557, n, '_uid')._uid = JSProf.LRSP(93557, "io:" + s++), JSProf.LMC(93559, n, '_init')._init(JSProf.LRE(93558, t)), JSProf.LPE(93561, e.io._map, JSProf.TMPS.tc4131ad8209617903c7afb081fd76e1268fd567a = n._uid)[JSProf.TMPS.tc4131ad8209617903c7afb081fd76e1268fd567a] = JSProf.LRPE(93561, JSProf.LRE(93560, n));
    }
    var n = JSProf.LNE(93562, [
            "start",
            "complete",
            "end",
            "success",
            "failure",
            "progress"
        ], 10), r = JSProf.LNE(93563, [
            "status",
            "statusText",
            "responseText",
            "responseXML"
        ], 10), i = JSProf.LGD(93564, e.config, 'win').win, s = 0;
    JSProf.LPD(93957, o, 'prototype').prototype = JSProf.LRSP(93957, JSProf.LNE(93956, {
        _id: 0,
        _headers: JSProf.LNE(93565, { "X-Requested-With": "XMLHttpRequest" }, 11),
        _timeout: JSProf.LNE(93566, {}, 11),
        _init: JSProf.LNF(93586, function (t) {
            var r = this, i, s;
            JSProf.LPD(93569, r, 'cfg').cfg = JSProf.LRSP(93569, JSProf.LRE(93567, t) || JSProf.LNE(93568, {}, 11)), JSProf.LMC(93572, e, 'augment').augment(JSProf.LRE(93570, r), JSProf.LGD(93571, e, 'EventTarget').EventTarget);
            for (i = JSProf.LWR(93573, i, 0), s = JSProf.LWR(93575, s, JSProf.LGD(93574, n, 'length').length); JSProf.LRE(93576, i) < JSProf.LRE(93577, s); ++i)
                JSProf.LMC(93582, r, 'publish').publish("io:" + JSProf.LGE(93578, n, 'i')[i], JSProf.LMC(93581, e, 'merge').merge(JSProf.LNE(93579, { broadcast: 1 }, 11), JSProf.LRE(93580, t))), JSProf.LMC(93585, r, 'publish').publish("io-trn:" + JSProf.LGE(93583, n, 'i')[i], JSProf.LRE(93584, t));
        }, 12),
        _create: JSProf.LNF(93643, function (t, n) {
            var r = this, s = JSProf.LNE(93589, {
                    id: JSProf.LMC(93588, e.Lang, 'isNumber').isNumber(JSProf.LRE(93587, n)) ? n : r._id++,
                    uid: r._uid
                }, 11), o = JSProf.LGD(93590, t, 'xdr').xdr ? JSProf.LGD(93591, t.xdr, 'use').use : null, u = JSProf.LGD(93592, t, 'form').form && JSProf.LGD(93593, t.form, 'upload').upload ? "iframe" : null, a;
            return JSProf.LRE(93594, o) === "native" && (o = JSProf.LWR(93597, o, JSProf.LGD(93595, e.UA, 'ie').ie && !JSProf.LRE(93596, l) ? "xdr" : null), JSProf.LMC(93598, r, 'setHeader').setHeader("X-Requested-With")), a = JSProf.LWR(93601, a, JSProf.LRE(93599, o) || JSProf.LRE(93600, u)), s = JSProf.LWR(93610, s, JSProf.LRE(93602, a) ? JSProf.LMC(93606, e, 'merge').merge(JSProf.LMC(93604, e.IO, 'customTransport').customTransport(JSProf.LRE(93603, a)), JSProf.LRE(93605, s)) : JSProf.LMC(93609, e, 'merge').merge(JSProf.LMC(93607, e.IO, 'defaultTransport').defaultTransport(), JSProf.LRE(93608, s))), JSProf.LGD(93611, s, 'notify').notify && (JSProf.LPD(93617, t, 'notify').notify = JSProf.LRSP(93617, JSProf.LNF(93616, function (e, t, n) {
                JSProf.LMC(93615, r, 'notify').notify(JSProf.LRE(93612, e), JSProf.LRE(93613, t), JSProf.LRE(93614, n));
            }, 12))), JSProf.LRE(93618, a) || JSProf.LRE(93619, i) && JSProf.LGD(93620, i, 'FormData').FormData && JSProf.LGD(93621, t, 'data').data instanceof JSProf.LGD(93622, i, 'FormData').FormData && (JSProf.LPD(93628, s.c.upload, 'onprogress').onprogress = JSProf.LRSP(93628, JSProf.LNF(93627, function (e) {
                JSProf.LMC(93626, r, 'progress').progress(JSProf.LRE(93623, s), JSProf.LRE(93624, e), JSProf.LRE(93625, t));
            }, 12)), JSProf.LPD(93634, s.c, 'onload').onload = JSProf.LRSP(93634, JSProf.LNF(93633, function (e) {
                JSProf.LMC(93632, r, 'load').load(JSProf.LRE(93629, s), JSProf.LRE(93630, e), JSProf.LRE(93631, t));
            }, 12)), JSProf.LPD(93640, s.c, 'onerror').onerror = JSProf.LRSP(93640, JSProf.LNF(93639, function (e) {
                JSProf.LMC(93638, r, 'error').error(JSProf.LRE(93635, s), JSProf.LRE(93636, e), JSProf.LRE(93637, t));
            }, 12)), JSProf.LPD(93641, s, 'upload').upload = JSProf.LRSP(93641, !0)), JSProf.LRE(93642, s);
        }, 12),
        _destroy: JSProf.LNF(93654, function (t) {
            JSProf.LRE(93644, i) && !JSProf.LGD(93645, t, 'notify').notify && !JSProf.LGD(93646, t, 'xdr').xdr && (JSProf.LRE(93647, u) && !JSProf.LGD(93648, t, 'upload').upload ? t.c.onreadystatechange = null : JSProf.LGD(93649, t, 'upload').upload ? (t.c.upload.onprogress = null, t.c.onload = null, t.c.onerror = null) : JSProf.LGD(93650, e.UA, 'ie').ie && !JSProf.LGD(93651, t, 'e').e && JSProf.LMC(93652, t.c, 'abort').abort()), t = JSProf.LWR(93653, t, t.c = null);
        }, 12),
        _evt: JSProf.LNF(93700, function (t, r, i) {
            var s = this, o, u = JSProf.LGD(93655, i, 'arguments').arguments, a = JSProf.LGD(93656, s.cfg, 'emitFacade').emitFacade, f = "io:" + JSProf.LRE(93657, t), l = "io-trn:" + JSProf.LRE(93658, t);
            JSProf.LMC(93660, this, 'detach').detach(JSProf.LRE(93659, l)), JSProf.LGD(93661, r, 'e').e && (JSProf.LPD(93663, r, 'c').c = JSProf.LRSP(93663, JSProf.LNE(93662, {
                status: 0,
                statusText: r.e
            }, 11))), o = JSProf.LWR(93668, o, JSProf.LNE(93667, [JSProf.LRE(93664, a) ? JSProf.LNE(93665, {
                    id: r.id,
                    data: r.c,
                    cfg: i,
                    arguments: u
                }, 11) : JSProf.LGD(93666, r, 'id').id], 10)), JSProf.LRE(93669, a) || (JSProf.LRE(93670, t) === JSProf.LGE(93671, n, 0)[0] || JSProf.LRE(93672, t) === JSProf.LGE(93673, n, 2)[2] ? JSProf.LRE(93674, u) && JSProf.LMC(93676, o, 'push').push(JSProf.LRE(93675, u)) : (JSProf.LGD(93677, r, 'evt').evt ? JSProf.LMC(93679, o, 'push').push(JSProf.LGD(93678, r, 'evt').evt) : JSProf.LMC(93681, o, 'push').push(JSProf.LGD(93680, r, 'c').c), JSProf.LRE(93682, u) && JSProf.LMC(93684, o, 'push').push(JSProf.LRE(93683, u)))), o.unshift(JSProf.LRE(93685, f)), JSProf.LMC(93688, s.fire, 'apply').apply(JSProf.LRE(93686, s), JSProf.LRE(93687, o)), JSProf.LGD(93689, i, 'on').on && (JSProf.LPE(93691, o, 0)[0] = JSProf.LRPE(93691, JSProf.LRE(93690, l)), JSProf.LMC(93696, s, 'once').once(JSProf.LRE(93692, l), JSProf.LGE(93693, i.on, 't')[t], JSProf.LGD(93694, i, 'context').context || JSProf.LRE(93695, e)), JSProf.LMC(93699, s.fire, 'apply').apply(JSProf.LRE(93697, s), JSProf.LRE(93698, o)));
        }, 12),
        start: JSProf.LNF(93705, function (e, t) {
            JSProf.LMC(93704, this, '_evt')._evt(JSProf.LGE(93701, n, 0)[0], JSProf.LRE(93702, e), JSProf.LRE(93703, t));
        }, 12),
        complete: JSProf.LNF(93710, function (e, t) {
            JSProf.LMC(93709, this, '_evt')._evt(JSProf.LGE(93706, n, 1)[1], JSProf.LRE(93707, e), JSProf.LRE(93708, t));
        }, 12),
        end: JSProf.LNF(93717, function (e, t) {
            JSProf.LMC(93714, this, '_evt')._evt(JSProf.LGE(93711, n, 2)[2], JSProf.LRE(93712, e), JSProf.LRE(93713, t)), JSProf.LMC(93716, this, '_destroy')._destroy(JSProf.LRE(93715, e));
        }, 12),
        success: JSProf.LNF(93725, function (e, t) {
            JSProf.LMC(93721, this, '_evt')._evt(JSProf.LGE(93718, n, 3)[3], JSProf.LRE(93719, e), JSProf.LRE(93720, t)), JSProf.LMC(93724, this, 'end').end(JSProf.LRE(93722, e), JSProf.LRE(93723, t));
        }, 12),
        failure: JSProf.LNF(93733, function (e, t) {
            JSProf.LMC(93729, this, '_evt')._evt(JSProf.LGE(93726, n, 4)[4], JSProf.LRE(93727, e), JSProf.LRE(93728, t)), JSProf.LMC(93732, this, 'end').end(JSProf.LRE(93730, e), JSProf.LRE(93731, t));
        }, 12),
        progress: JSProf.LNF(93740, function (e, t, r) {
            JSProf.LPD(93735, e, 'evt').evt = JSProf.LRSP(93735, JSProf.LRE(93734, t)), JSProf.LMC(93739, this, '_evt')._evt(JSProf.LGE(93736, n, 5)[5], JSProf.LRE(93737, e), JSProf.LRE(93738, r));
        }, 12),
        load: JSProf.LNF(93747, function (e, t, r) {
            JSProf.LPD(93742, e, 'evt').evt = JSProf.LRSP(93742, JSProf.LGD(93741, t, 'target').target), JSProf.LMC(93746, this, '_evt')._evt(JSProf.LGE(93743, n, 1)[1], JSProf.LRE(93744, e), JSProf.LRE(93745, r));
        }, 12),
        error: JSProf.LNF(93754, function (e, t, r) {
            JSProf.LPD(93749, e, 'evt').evt = JSProf.LRSP(93749, JSProf.LRE(93748, t)), JSProf.LMC(93753, this, '_evt')._evt(JSProf.LGE(93750, n, 4)[4], JSProf.LRE(93751, e), JSProf.LRE(93752, r));
        }, 12),
        _retry: JSProf.LNF(93762, function (e, t, n) {
            return JSProf.LMC(93756, this, '_destroy')._destroy(JSProf.LRE(93755, e)), JSProf.LPD(93757, n.xdr, 'use').use = JSProf.LRSP(93757, "flash"), JSProf.LMC(93761, this, 'send').send(JSProf.LRE(93758, t), JSProf.LRE(93759, n), JSProf.LGD(93760, e, 'id').id);
        }, 12),
        _concat: JSProf.LNF(93766, function (e, t) {
            return e += (JSProf.LMC(93763, e, 'indexOf').indexOf("?") === -1 ? "?" : "&") + JSProf.LRE(93764, t), JSProf.LRE(93765, e);
        }, 12),
        setHeader: JSProf.LNF(93770, function (e, t) {
            JSProf.LRE(93767, t) ? JSProf.LPE(93769, this._headers, 'e')[e] = JSProf.LRPE(93769, JSProf.LRE(93768, t)) : delete this._headers[e];
        }, 12),
        _setHeaders: JSProf.LNF(93782, function (t, n) {
            n = JSProf.LWR(93774, n, JSProf.LMC(93773, e, 'merge').merge(JSProf.LGD(93771, this, '_headers')._headers, JSProf.LRE(93772, n))), JSProf.LMC(93781, e.Object, 'each').each(JSProf.LRE(93775, n), JSProf.LNF(93780, function (e, r) {
                JSProf.LRE(93776, e) !== "disable" && JSProf.LMC(93779, t, 'setRequestHeader').setRequestHeader(JSProf.LRE(93777, r), JSProf.LGE(93778, n, 'r')[r]);
            }, 12));
        }, 12),
        _startTimeout: JSProf.LNF(93788, function (e, t) {
            var n = this;
            JSProf.LPE(93787, n._timeout, JSProf.TMPS.tc4131ad8209617903c7afb081fd76e1268fd567a = e.id)[JSProf.TMPS.tc4131ad8209617903c7afb081fd76e1268fd567a] = JSProf.LRPE(93787, setTimeout(JSProf.LNF(93785, function () {
                JSProf.LMC(93784, n, '_abort')._abort(JSProf.LRE(93783, e), "timeout");
            }, 12), JSProf.LRE(93786, t)));
        }, 12),
        _clearTimeout: JSProf.LNF(93791, function (e) {
            JSProf.LFC(93790, clearTimeout, false)(JSProf.LGE(93789, this._timeout, 'e')[e]), delete this._timeout[e];
        }, 12),
        _result: JSProf.LNF(93805, function (e, t) {
            var n;
            try {
                n = JSProf.LWR(93793, n, JSProf.LGD(93792, e.c, 'status').status);
            } catch (r) {
                n = JSProf.LWR(93794, n, 0);
            }
            JSProf.LRE(93795, n) >= 200 && JSProf.LRE(93796, n) < 300 || JSProf.LRE(93797, n) === 304 || JSProf.LRE(93798, n) === 1223 ? JSProf.LMC(93801, this, 'success').success(JSProf.LRE(93799, e), JSProf.LRE(93800, t)) : JSProf.LMC(93804, this, 'failure').failure(JSProf.LRE(93802, e), JSProf.LRE(93803, t));
        }, 12),
        _rS: JSProf.LNF(93817, function (e, t) {
            var n = this;
            JSProf.LGD(93806, e.c, 'readyState').readyState === 4 && (JSProf.LGD(93807, t, 'timeout').timeout && JSProf.LMC(93809, n, '_clearTimeout')._clearTimeout(JSProf.LGD(93808, e, 'id').id), setTimeout(JSProf.LNF(93816, function () {
                JSProf.LMC(93812, n, 'complete').complete(JSProf.LRE(93810, e), JSProf.LRE(93811, t)), JSProf.LMC(93815, n, '_result')._result(JSProf.LRE(93813, e), JSProf.LRE(93814, t));
            }, 12), 0));
        }, 12),
        _abort: JSProf.LNF(93823, function (e, t) {
            JSProf.LRE(93818, e) && JSProf.LGD(93819, e, 'c').c && (JSProf.LPD(93821, e, 'e').e = JSProf.LRSP(93821, JSProf.LRE(93820, t)), JSProf.LMC(93822, e.c, 'abort').abort());
        }, 12),
        send: JSProf.LNF(93955, function (t, n, i) {
            var s, o, u, a, f, c, h = this, p = JSProf.LRE(93824, t), d = JSProf.LNE(93825, {}, 11);
            n = JSProf.LWR(93830, n, JSProf.LRE(93826, n) ? JSProf.LMC(93828, e, 'Object').Object(JSProf.LRE(93827, n)) : JSProf.LNE(93829, {}, 11)), s = JSProf.LWR(93834, s, JSProf.LMC(93833, h, '_create')._create(JSProf.LRE(93831, n), JSProf.LRE(93832, i))), o = JSProf.LWR(93836, o, JSProf.LGD(93835, n, 'method').method ? n.method.toUpperCase() : "GET"), f = JSProf.LWR(93838, f, JSProf.LGD(93837, n, 'sync').sync), c = JSProf.LWR(93840, c, JSProf.LGD(93839, n, 'data').data), JSProf.LMC(93842, e.Lang, 'isObject').isObject(JSProf.LRE(93841, c)) && !JSProf.LGD(93843, c, 'nodeType').nodeType && !JSProf.LGD(93844, s, 'upload').upload && JSProf.LGD(93845, e, 'QueryString').QueryString && JSProf.LGD(93846, e.QueryString, 'stringify').stringify && (JSProf.LPD(93850, n, 'data').data = JSProf.LRSP(93850, c = JSProf.LWR(93849, c, JSProf.LMC(93848, e.QueryString, 'stringify').stringify(JSProf.LRE(93847, c)))));
            if (JSProf.LGD(93851, n, 'form').form) {
                if (JSProf.LGD(93852, n.form, 'upload').upload)
                    return JSProf.LMC(93856, h, 'upload').upload(JSProf.LRE(93853, s), JSProf.LRE(93854, t), JSProf.LRE(93855, n));
                c = JSProf.LWR(93860, c, JSProf.LMC(93859, h, '_serialize')._serialize(JSProf.LGD(93857, n, 'form').form, JSProf.LRE(93858, c)));
            }
            JSProf.LRE(93861, c) || (c = JSProf.LWR(93862, c, ""));
            if (JSProf.LRE(93863, c))
                switch (JSProf.LRE(93864, o)) {
                case "GET":
                case "HEAD":
                case "DELETE":
                    p = JSProf.LWR(93868, p, JSProf.LMC(93867, h, '_concat')._concat(JSProf.LRE(93865, p), JSProf.LRE(93866, c))), c = JSProf.LWR(93869, c, "");
                    break;
                case "POST":
                case "PUT":
                    JSProf.LPD(93873, n, 'headers').headers = JSProf.LRSP(93873, JSProf.LMC(93872, e, 'merge').merge(JSProf.LNE(93870, { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" }, 11), JSProf.LGD(93871, n, 'headers').headers));
                }
            if (JSProf.LGD(93874, s, 'xdr').xdr)
                return JSProf.LMC(93878, h, 'xdr').xdr(JSProf.LRE(93875, p), JSProf.LRE(93876, s), JSProf.LRE(93877, n));
            if (JSProf.LGD(93879, s, 'notify').notify)
                return JSProf.LMC(93883, s.c, 'send').send(JSProf.LRE(93880, s), JSProf.LRE(93881, t), JSProf.LRE(93882, n));
            !JSProf.LRE(93884, f) && !JSProf.LGD(93885, s, 'upload').upload && (JSProf.LPD(93890, s.c, 'onreadystatechange').onreadystatechange = JSProf.LRSP(93890, JSProf.LNF(93889, function () {
                JSProf.LMC(93888, h, '_rS')._rS(JSProf.LRE(93886, s), JSProf.LRE(93887, n));
            }, 12)));
            try {
                JSProf.LMC(93896, s.c, 'open').open(JSProf.LRE(93891, o), JSProf.LRE(93892, p), !JSProf.LRE(93893, f), JSProf.LGD(93894, n, 'username').username || null, JSProf.LGD(93895, n, 'password').password || null), JSProf.LMC(93900, h, '_setHeaders')._setHeaders(JSProf.LGD(93897, s, 'c').c, JSProf.LGD(93898, n, 'headers').headers || JSProf.LNE(93899, {}, 11)), JSProf.LMC(93903, h, 'start').start(JSProf.LRE(93901, s), JSProf.LRE(93902, n)), JSProf.LGD(93904, n, 'xdr').xdr && JSProf.LGD(93905, n.xdr, 'credentials').credentials && JSProf.LRE(93906, l) && (JSProf.LPD(93907, s.c, 'withCredentials').withCredentials = JSProf.LRSP(93907, !0)), JSProf.LMC(93909, s.c, 'send').send(JSProf.LRE(93908, c));
                if (JSProf.LRE(93910, f)) {
                    for (u = JSProf.LWR(93911, u, 0), a = JSProf.LWR(93913, a, JSProf.LGD(93912, r, 'length').length); JSProf.LRE(93914, u) < JSProf.LRE(93915, a); ++u)
                        JSProf.LPE(93917, d, JSProf.TMPS.tdd7659979ff8f15eac36cee47e1447ef89d80eb3 = r[u])[JSProf.TMPS.tdd7659979ff8f15eac36cee47e1447ef89d80eb3] = JSProf.LRPE(93917, JSProf.LGE(93916, s.c, JSProf.TMPS.tc4131ad8209617903c7afb081fd76e1268fd567a = r[u])[JSProf.TMPS.tc4131ad8209617903c7afb081fd76e1268fd567a]);
                    return JSProf.LPD(93920, d, 'getAllResponseHeaders').getAllResponseHeaders = JSProf.LRSP(93920, JSProf.LNF(93919, function () {
                        return JSProf.LMC(93918, s.c, 'getAllResponseHeaders').getAllResponseHeaders();
                    }, 12)), JSProf.LPD(93924, d, 'getResponseHeader').getResponseHeader = JSProf.LRSP(93924, JSProf.LNF(93923, function (e) {
                        return JSProf.LMC(93922, s.c, 'getResponseHeader').getResponseHeader(JSProf.LRE(93921, e));
                    }, 12)), JSProf.LMC(93927, h, 'complete').complete(JSProf.LRE(93925, s), JSProf.LRE(93926, n)), JSProf.LMC(93930, h, '_result')._result(JSProf.LRE(93928, s), JSProf.LRE(93929, n)), JSProf.LRE(93931, d);
                }
            } catch (v) {
                if (JSProf.LGD(93932, s, 'xdr').xdr)
                    return JSProf.LMC(93936, h, '_retry')._retry(JSProf.LRE(93933, s), JSProf.LRE(93934, t), JSProf.LRE(93935, n));
                JSProf.LMC(93939, h, 'complete').complete(JSProf.LRE(93937, s), JSProf.LRE(93938, n)), JSProf.LMC(93942, h, '_result')._result(JSProf.LRE(93940, s), JSProf.LRE(93941, n));
            }
            return JSProf.LGD(93943, n, 'timeout').timeout && JSProf.LMC(93946, h, '_startTimeout')._startTimeout(JSProf.LRE(93944, s), JSProf.LGD(93945, n, 'timeout').timeout), JSProf.LNE(93954, {
                id: s.id,
                abort: JSProf.LNF(93950, function () {
                    return JSProf.LGD(93947, s, 'c').c ? JSProf.LMC(93949, h, '_abort')._abort(JSProf.LRE(93948, s), "abort") : !1;
                }, 12),
                isInProgress: JSProf.LNF(93953, function () {
                    return JSProf.LGD(93951, s, 'c').c ? JSProf.LGD(93952, s.c, 'readyState').readyState % 4 : !1;
                }, 12),
                io: h
            }, 11);
        }, 12)
    }, 11)), JSProf.LPD(93967, e, 'io').io = JSProf.LRSP(93967, JSProf.LNF(93966, function (t, n) {
        var r = JSProf.LGE(93958, e.io._map, 'io:0')["io:0"] || JSProf.LNE(93960, new (JSProf.LFC(93959, o, true))(), 'o');
        return JSProf.LMC(93965, r.send, 'apply').apply(JSProf.LRE(93961, r), JSProf.LNE(93964, [
            JSProf.LRE(93962, t),
            JSProf.LRE(93963, n)
        ], 10));
    }, 12)), JSProf.LPD(93975, e.io, 'header').header = JSProf.LRSP(93975, JSProf.LNF(93974, function (t, n) {
        var r = JSProf.LGE(93968, e.io._map, 'io:0')["io:0"] || JSProf.LNE(93970, new (JSProf.LFC(93969, o, true))(), 'o');
        JSProf.LMC(93973, r, 'setHeader').setHeader(JSProf.LRE(93971, t), JSProf.LRE(93972, n));
    }, 12)), JSProf.LPD(93977, e, 'IO').IO = JSProf.LRSP(93977, JSProf.LRE(93976, o)), JSProf.LPD(93979, e.io, '_map')._map = JSProf.LRSP(93979, JSProf.LNE(93978, {}, 11));
    var u = JSProf.LRE(93980, i) && JSProf.LGD(93981, i, 'XMLHttpRequest').XMLHttpRequest, a = JSProf.LRE(93982, i) && JSProf.LGD(93983, i, 'XDomainRequest').XDomainRequest, f = JSProf.LRE(93984, i) && JSProf.LGD(93985, i, 'ActiveXObject').ActiveXObject, l = JSProf.LRE(93986, u) && "withCredentials" in JSProf.LNE(93988, new (JSProf.LFC(93987, XMLHttpRequest, true))(), 'XMLHttpRequest');
    JSProf.LMC(94020, e, 'mix').mix(JSProf.LGD(93989, e, 'IO').IO, JSProf.LNE(94019, {
        _default: "xhr",
        defaultTransport: JSProf.LNF(93997, function (t) {
            if (!JSProf.LRE(93990, t)) {
                var n = JSProf.LNE(93993, {
                        c: JSProf.LMC(93991, e.IO.transports, JSProf.TMPS.tc4131ad8209617903c7afb081fd76e1268fd567a = e.IO._default, 1)[JSProf.TMPS.tc4131ad8209617903c7afb081fd76e1268fd567a](),
                        notify: JSProf.LGD(93992, e.IO, '_default')._default === "xhr" ? !1 : !0
                    }, 11);
                return JSProf.LRE(93994, n);
            }
            JSProf.LPD(93996, e.IO, '_default')._default = JSProf.LRSP(93996, JSProf.LRE(93995, t));
        }, 12),
        transports: JSProf.LNE(94011, {
            xhr: JSProf.LNF(94004, function () {
                return JSProf.LRE(93998, u) ? JSProf.LNE(94000, new (JSProf.LFC(93999, XMLHttpRequest, true))(), 'XMLHttpRequest') : JSProf.LRE(94001, f) ? JSProf.LNE(94003, new (JSProf.LFC(94002, ActiveXObject, true))("Microsoft.XMLHTTP"), 'ActiveXObject') : null;
            }, 12),
            xdr: JSProf.LNF(94008, function () {
                return JSProf.LRE(94005, a) ? JSProf.LNE(94007, new (JSProf.LFC(94006, XDomainRequest, true))(), 'XDomainRequest') : null;
            }, 12),
            iframe: JSProf.LNF(94010, function () {
                return JSProf.LNE(94009, {}, 11);
            }, 12),
            flash: null,
            nodejs: null
        }, 11),
        customTransport: JSProf.LNF(94018, function (t) {
            var n = JSProf.LNE(94013, { c: JSProf.LMC(94012, e.IO.transports, JSProf.TMPS.tc4131ad8209617903c7afb081fd76e1268fd567a = t, 1)[JSProf.TMPS.tc4131ad8209617903c7afb081fd76e1268fd567a]() }, 11);
            return JSProf.LPE(94016, n, JSProf.TMPS.t184aa7344a45d39122020ebe8412fa62b88c5f09 = JSProf.LRE(94014, t) === "xdr" || JSProf.LRE(94015, t) === "flash" ? "xdr" : "notify")[JSProf.TMPS.t184aa7344a45d39122020ebe8412fa62b88c5f09] = JSProf.LRPE(94016, !0), JSProf.LRE(94017, n);
        }, 12)
    }, 11)), JSProf.LMC(94033, e, 'mix').mix(JSProf.LGD(94021, e.IO, 'prototype').prototype, JSProf.LNE(94032, {
        notify: JSProf.LNF(94031, function (e, t, n) {
            var r = this;
            switch (JSProf.LRE(94022, e)) {
            case "timeout":
            case "abort":
            case "transport error":
                JSProf.LPD(94024, t, 'c').c = JSProf.LRSP(94024, JSProf.LNE(94023, {
                    status: 0,
                    statusText: e
                }, 11)), e = JSProf.LWR(94025, e, "failure");
            default:
                JSProf.LMC(94030, r[e], 'apply').apply(JSProf.LRE(94026, r), JSProf.LNE(94029, [
                    JSProf.LRE(94027, t),
                    JSProf.LRE(94028, n)
                ], 10));
            }
        }, 12)
    }, 11));
}, 12), "3.14.1", JSProf.LNE(94037, {
    requires: JSProf.LNE(94036, [
        "event-custom-base",
        "querystring-stringify-simple"
    ], 10)
}, 11));
/*
YUI 3.14.1 (build 63049cb)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
JSProf.LMC(94067, YUI, 'add').add("json-stringify", JSProf.LNF(94064, function (e, t) {
    var n = ":", r = JSProf.LGD(94039, e.config.global, 'JSON').JSON;
    JSProf.LMC(94063, e, 'mix').mix(JSProf.LMC(94040, e, 'namespace').namespace("JSON"), JSProf.LNE(94062, {
        dateToString: JSProf.LNF(94058, function (e) {
            JSProf.LFD(94057, t);
            function t(e) {
                return JSProf.LRE(94041, e) < 10 ? "0" + JSProf.LRE(94042, e) : JSProf.LRE(94043, e);
            }
            return JSProf.LMC(94044, e, 'getUTCFullYear').getUTCFullYear() + "-" + JSProf.LFC(94046, t, false)(JSProf.LMC(94045, e, 'getUTCMonth').getUTCMonth() + 1) + "-" + JSProf.LFC(94048, t, false)(JSProf.LMC(94047, e, 'getUTCDate').getUTCDate()) + "T" + JSProf.LFC(94050, t, false)(JSProf.LMC(94049, e, 'getUTCHours').getUTCHours()) + JSProf.LRE(94051, n) + JSProf.LFC(94053, t, false)(JSProf.LMC(94052, e, 'getUTCMinutes').getUTCMinutes()) + JSProf.LRE(94054, n) + JSProf.LFC(94056, t, false)(JSProf.LMC(94055, e, 'getUTCSeconds').getUTCSeconds()) + "Z";
        }, 12),
        stringify: JSProf.LNF(94061, function () {
            return JSProf.LMC(94060, r.stringify, 'apply').apply(JSProf.LRE(94059, r), arguments);
        }, 12),
        charCacheThreshold: 100
    }, 11));
}, 12), "3.14.1", JSProf.LNE(94066, { requires: JSProf.LNE(94065, ["yui-base"], 10) }, 11));
/*
YUI 3.14.1 (build 63049cb)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
JSProf.LMC(94706, YUI, 'add').add("event-simulate", JSProf.LNF(94703, function (e, t) {
    JSProf.LFC(94702, JSProf.LNF(94701, function () {
        JSProf.LFD(94696, d);
        JSProf.LFD(94697, v);
        JSProf.LFD(94698, m);
        JSProf.LFD(94699, g);
        JSProf.LFD(94700, y);
        function d(t, u, a, f, l, c, h, p, d, v, m) {
            JSProf.LRE(94068, t) || JSProf.LMC(94069, e, 'error').error("simulateKeyEvent(): Invalid target.");
            if (JSProf.LFC(94071, r, false)(JSProf.LRE(94070, u))) {
                u = JSProf.LWR(94072, u, u.toLowerCase());
                switch (JSProf.LRE(94073, u)) {
                case "textevent":
                    u = JSProf.LWR(94074, u, "keypress");
                    break;
                case "keyup":
                case "keydown":
                case "keypress":
                    break;
                default:
                    JSProf.LMC(94076, e, 'error').error("simulateKeyEvent(): Event type '" + JSProf.LRE(94075, u) + "' not supported.");
                }
            } else
                JSProf.LMC(94077, e, 'error').error("simulateKeyEvent(): Event type must be a string.");
            JSProf.LFC(94079, i, false)(JSProf.LRE(94078, a)) || (a = JSProf.LWR(94080, a, !0)), JSProf.LFC(94082, i, false)(JSProf.LRE(94081, f)) || (f = JSProf.LWR(94083, f, !0)), JSProf.LFC(94085, s, false)(JSProf.LRE(94084, l)) || (l = JSProf.LWR(94087, l, JSProf.LGD(94086, e.config, 'win').win)), JSProf.LFC(94089, i, false)(JSProf.LRE(94088, c)) || (c = JSProf.LWR(94090, c, !1)), JSProf.LFC(94092, i, false)(JSProf.LRE(94091, h)) || (h = JSProf.LWR(94093, h, !1)), JSProf.LFC(94095, i, false)(JSProf.LRE(94094, p)) || (p = JSProf.LWR(94096, p, !1)), JSProf.LFC(94098, i, false)(JSProf.LRE(94097, d)) || (d = JSProf.LWR(94099, d, !1)), JSProf.LFC(94101, o, false)(JSProf.LRE(94100, v)) || (v = JSProf.LWR(94102, v, 0)), JSProf.LFC(94104, o, false)(JSProf.LRE(94103, m)) || (m = JSProf.LWR(94105, m, 0));
            var g = null;
            if (JSProf.LFC(94107, n, false)(JSProf.LGD(94106, e.config.doc, 'createEvent').createEvent)) {
                try {
                    g = JSProf.LWR(94109, g, JSProf.LMC(94108, e.config.doc, 'createEvent').createEvent("KeyEvents")), JSProf.LMC(94120, g, 'initKeyEvent').initKeyEvent(JSProf.LRE(94110, u), JSProf.LRE(94111, a), JSProf.LRE(94112, f), JSProf.LRE(94113, l), JSProf.LRE(94114, c), JSProf.LRE(94115, h), JSProf.LRE(94116, p), JSProf.LRE(94117, d), JSProf.LRE(94118, v), JSProf.LRE(94119, m));
                } catch (y) {
                    try {
                        g = JSProf.LWR(94122, g, JSProf.LMC(94121, e.config.doc, 'createEvent').createEvent("Events"));
                    } catch (b) {
                        g = JSProf.LWR(94124, g, JSProf.LMC(94123, e.config.doc, 'createEvent').createEvent("UIEvents"));
                    } finally {
                        JSProf.LMC(94128, g, 'initEvent').initEvent(JSProf.LRE(94125, u), JSProf.LRE(94126, a), JSProf.LRE(94127, f)), JSProf.LPD(94130, g, 'view').view = JSProf.LRSP(94130, JSProf.LRE(94129, l)), JSProf.LPD(94132, g, 'altKey').altKey = JSProf.LRSP(94132, JSProf.LRE(94131, h)), JSProf.LPD(94134, g, 'ctrlKey').ctrlKey = JSProf.LRSP(94134, JSProf.LRE(94133, c)), JSProf.LPD(94136, g, 'shiftKey').shiftKey = JSProf.LRSP(94136, JSProf.LRE(94135, p)), JSProf.LPD(94138, g, 'metaKey').metaKey = JSProf.LRSP(94138, JSProf.LRE(94137, d)), JSProf.LPD(94140, g, 'keyCode').keyCode = JSProf.LRSP(94140, JSProf.LRE(94139, v)), JSProf.LPD(94142, g, 'charCode').charCode = JSProf.LRSP(94142, JSProf.LRE(94141, m));
                    }
                }
                t.dispatchEvent(JSProf.LRE(94143, g));
            } else
                JSProf.LFC(94145, s, false)(JSProf.LGD(94144, e.config.doc, 'createEventObject').createEventObject) ? (g = JSProf.LWR(94147, g, JSProf.LMC(94146, e.config.doc, 'createEventObject').createEventObject()), JSProf.LPD(94149, g, 'bubbles').bubbles = JSProf.LRSP(94149, JSProf.LRE(94148, a)), JSProf.LPD(94151, g, 'cancelable').cancelable = JSProf.LRSP(94151, JSProf.LRE(94150, f)), JSProf.LPD(94153, g, 'view').view = JSProf.LRSP(94153, JSProf.LRE(94152, l)), JSProf.LPD(94155, g, 'ctrlKey').ctrlKey = JSProf.LRSP(94155, JSProf.LRE(94154, c)), JSProf.LPD(94157, g, 'altKey').altKey = JSProf.LRSP(94157, JSProf.LRE(94156, h)), JSProf.LPD(94159, g, 'shiftKey').shiftKey = JSProf.LRSP(94159, JSProf.LRE(94158, p)), JSProf.LPD(94161, g, 'metaKey').metaKey = JSProf.LRSP(94161, JSProf.LRE(94160, d)), JSProf.LPD(94165, g, 'keyCode').keyCode = JSProf.LRSP(94165, JSProf.LRE(94162, m) > 0 ? JSProf.LRE(94163, m) : JSProf.LRE(94164, v)), JSProf.LMC(94168, t, 'fireEvent').fireEvent("on" + JSProf.LRE(94166, u), JSProf.LRE(94167, g))) : JSProf.LMC(94169, e, 'error').error("simulateKeyEvent(): No event simulation framework present.");
        }
        function v(t, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x) {
            JSProf.LRE(94170, t) || JSProf.LMC(94171, e, 'error').error("simulateMouseEvent(): Invalid target."), JSProf.LFC(94173, r, false)(JSProf.LRE(94172, f)) ? !JSProf.LGE(94174, u, JSProf.TMPS.t95e748336a75c3b561b7a748a3f8d58f07a6f2d9 = f.toLowerCase())[JSProf.TMPS.t95e748336a75c3b561b7a748a3f8d58f07a6f2d9] && !JSProf.LGE(94175, a, 'f')[f] && JSProf.LMC(94177, e, 'error').error("simulateMouseEvent(): Event type '" + JSProf.LRE(94176, f) + "' not supported.") : JSProf.LMC(94178, e, 'error').error("simulateMouseEvent(): Event type must be a string."), JSProf.LFC(94180, i, false)(JSProf.LRE(94179, l)) || (l = JSProf.LWR(94181, l, !0)), JSProf.LFC(94183, i, false)(JSProf.LRE(94182, c)) || (c = JSProf.LWR(94185, c, JSProf.LRE(94184, f) !== "mousemove")), JSProf.LFC(94187, s, false)(JSProf.LRE(94186, h)) || (h = JSProf.LWR(94189, h, JSProf.LGD(94188, e.config, 'win').win)), JSProf.LFC(94191, o, false)(JSProf.LRE(94190, p)) || (p = JSProf.LWR(94192, p, 1)), JSProf.LFC(94194, o, false)(JSProf.LRE(94193, d)) || (d = JSProf.LWR(94195, d, 0)), JSProf.LFC(94197, o, false)(JSProf.LRE(94196, v)) || (v = JSProf.LWR(94198, v, 0)), JSProf.LFC(94200, o, false)(JSProf.LRE(94199, m)) || (m = JSProf.LWR(94201, m, 0)), JSProf.LFC(94203, o, false)(JSProf.LRE(94202, g)) || (g = JSProf.LWR(94204, g, 0)), JSProf.LFC(94206, i, false)(JSProf.LRE(94205, y)) || (y = JSProf.LWR(94207, y, !1)), JSProf.LFC(94209, i, false)(JSProf.LRE(94208, b)) || (b = JSProf.LWR(94210, b, !1)), JSProf.LFC(94212, i, false)(JSProf.LRE(94211, w)) || (w = JSProf.LWR(94213, w, !1)), JSProf.LFC(94215, i, false)(JSProf.LRE(94214, E)) || (E = JSProf.LWR(94216, E, !1)), JSProf.LFC(94218, o, false)(JSProf.LRE(94217, S)) || (S = JSProf.LWR(94219, S, 0)), x = JSProf.LWR(94221, x, JSProf.LRE(94220, x) || null);
            var T = null;
            if (JSProf.LFC(94223, n, false)(JSProf.LGD(94222, e.config.doc, 'createEvent').createEvent))
                T = JSProf.LWR(94225, T, JSProf.LMC(94224, e.config.doc, 'createEvent').createEvent("MouseEvents")), JSProf.LGD(94226, T, 'initMouseEvent').initMouseEvent ? JSProf.LMC(94242, T, 'initMouseEvent').initMouseEvent(JSProf.LRE(94227, f), JSProf.LRE(94228, l), JSProf.LRE(94229, c), JSProf.LRE(94230, h), JSProf.LRE(94231, p), JSProf.LRE(94232, d), JSProf.LRE(94233, v), JSProf.LRE(94234, m), JSProf.LRE(94235, g), JSProf.LRE(94236, y), JSProf.LRE(94237, b), JSProf.LRE(94238, w), JSProf.LRE(94239, E), JSProf.LRE(94240, S), JSProf.LRE(94241, x)) : (T = JSProf.LWR(94244, T, JSProf.LMC(94243, e.config.doc, 'createEvent').createEvent("UIEvents")), JSProf.LMC(94248, T, 'initEvent').initEvent(JSProf.LRE(94245, f), JSProf.LRE(94246, l), JSProf.LRE(94247, c)), JSProf.LPD(94250, T, 'view').view = JSProf.LRSP(94250, JSProf.LRE(94249, h)), JSProf.LPD(94252, T, 'detail').detail = JSProf.LRSP(94252, JSProf.LRE(94251, p)), JSProf.LPD(94254, T, 'screenX').screenX = JSProf.LRSP(94254, JSProf.LRE(94253, d)), JSProf.LPD(94256, T, 'screenY').screenY = JSProf.LRSP(94256, JSProf.LRE(94255, v)), JSProf.LPD(94258, T, 'clientX').clientX = JSProf.LRSP(94258, JSProf.LRE(94257, m)), JSProf.LPD(94260, T, 'clientY').clientY = JSProf.LRSP(94260, JSProf.LRE(94259, g)), JSProf.LPD(94262, T, 'ctrlKey').ctrlKey = JSProf.LRSP(94262, JSProf.LRE(94261, y)), JSProf.LPD(94264, T, 'altKey').altKey = JSProf.LRSP(94264, JSProf.LRE(94263, b)), JSProf.LPD(94266, T, 'metaKey').metaKey = JSProf.LRSP(94266, JSProf.LRE(94265, E)), JSProf.LPD(94268, T, 'shiftKey').shiftKey = JSProf.LRSP(94268, JSProf.LRE(94267, w)), JSProf.LPD(94270, T, 'button').button = JSProf.LRSP(94270, JSProf.LRE(94269, S)), JSProf.LPD(94272, T, 'relatedTarget').relatedTarget = JSProf.LRSP(94272, JSProf.LRE(94271, x))), JSProf.LRE(94273, x) && !JSProf.LGD(94274, T, 'relatedTarget').relatedTarget && (JSProf.LRE(94275, f) === "mouseout" ? JSProf.LPD(94277, T, 'toElement').toElement = JSProf.LRSP(94277, JSProf.LRE(94276, x)) : JSProf.LRE(94278, f) === "mouseover" && (JSProf.LPD(94280, T, 'fromElement').fromElement = JSProf.LRSP(94280, JSProf.LRE(94279, x)))), t.dispatchEvent(JSProf.LRE(94281, T));
            else if (JSProf.LFC(94283, s, false)(JSProf.LGD(94282, e.config.doc, 'createEventObject').createEventObject)) {
                T = JSProf.LWR(94285, T, JSProf.LMC(94284, e.config.doc, 'createEventObject').createEventObject()), JSProf.LPD(94287, T, 'bubbles').bubbles = JSProf.LRSP(94287, JSProf.LRE(94286, l)), JSProf.LPD(94289, T, 'cancelable').cancelable = JSProf.LRSP(94289, JSProf.LRE(94288, c)), JSProf.LPD(94291, T, 'view').view = JSProf.LRSP(94291, JSProf.LRE(94290, h)), JSProf.LPD(94293, T, 'detail').detail = JSProf.LRSP(94293, JSProf.LRE(94292, p)), JSProf.LPD(94295, T, 'screenX').screenX = JSProf.LRSP(94295, JSProf.LRE(94294, d)), JSProf.LPD(94297, T, 'screenY').screenY = JSProf.LRSP(94297, JSProf.LRE(94296, v)), JSProf.LPD(94299, T, 'clientX').clientX = JSProf.LRSP(94299, JSProf.LRE(94298, m)), JSProf.LPD(94301, T, 'clientY').clientY = JSProf.LRSP(94301, JSProf.LRE(94300, g)), JSProf.LPD(94303, T, 'ctrlKey').ctrlKey = JSProf.LRSP(94303, JSProf.LRE(94302, y)), JSProf.LPD(94305, T, 'altKey').altKey = JSProf.LRSP(94305, JSProf.LRE(94304, b)), JSProf.LPD(94307, T, 'metaKey').metaKey = JSProf.LRSP(94307, JSProf.LRE(94306, E)), JSProf.LPD(94309, T, 'shiftKey').shiftKey = JSProf.LRSP(94309, JSProf.LRE(94308, w));
                switch (JSProf.LRE(94310, S)) {
                case 0:
                    JSProf.LPD(94311, T, 'button').button = JSProf.LRSP(94311, 1);
                    break;
                case 1:
                    JSProf.LPD(94312, T, 'button').button = JSProf.LRSP(94312, 4);
                    break;
                case 2:
                    break;
                default:
                    JSProf.LPD(94313, T, 'button').button = JSProf.LRSP(94313, 0);
                }
                JSProf.LPD(94315, T, 'relatedTarget').relatedTarget = JSProf.LRSP(94315, JSProf.LRE(94314, x)), JSProf.LMC(94318, t, 'fireEvent').fireEvent("on" + JSProf.LRE(94316, f), JSProf.LRE(94317, T));
            } else
                JSProf.LMC(94319, e, 'error').error("simulateMouseEvent(): No event simulation framework present.");
        }
        function m(t, u, a, f, h, p) {
            JSProf.LRE(94320, t) || JSProf.LMC(94321, e, 'error').error("simulateUIEvent(): Invalid target."), JSProf.LFC(94323, r, false)(JSProf.LRE(94322, u)) ? (u = JSProf.LWR(94324, u, u.toLowerCase()), JSProf.LGE(94325, l, 'u')[u] || JSProf.LMC(94327, e, 'error').error("simulateUIEvent(): Event type '" + JSProf.LRE(94326, u) + "' not supported.")) : JSProf.LMC(94328, e, 'error').error("simulateUIEvent(): Event type must be a string.");
            var d = null;
            JSProf.LFC(94330, i, false)(JSProf.LRE(94329, a)) || (a = JSProf.LWR(94333, a, JSProf.LRE(94331, u) in JSProf.LRE(94332, c))), JSProf.LFC(94335, i, false)(JSProf.LRE(94334, f)) || (f = JSProf.LWR(94337, f, JSProf.LRE(94336, u) === "submit")), JSProf.LFC(94339, s, false)(JSProf.LRE(94338, h)) || (h = JSProf.LWR(94341, h, JSProf.LGD(94340, e.config, 'win').win)), JSProf.LFC(94343, o, false)(JSProf.LRE(94342, p)) || (p = JSProf.LWR(94344, p, 1)), JSProf.LFC(94346, n, false)(JSProf.LGD(94345, e.config.doc, 'createEvent').createEvent) ? (d = JSProf.LWR(94348, d, JSProf.LMC(94347, e.config.doc, 'createEvent').createEvent("UIEvents")), JSProf.LMC(94354, d, 'initUIEvent').initUIEvent(JSProf.LRE(94349, u), JSProf.LRE(94350, a), JSProf.LRE(94351, f), JSProf.LRE(94352, h), JSProf.LRE(94353, p)), t.dispatchEvent(JSProf.LRE(94355, d))) : JSProf.LFC(94357, s, false)(JSProf.LGD(94356, e.config.doc, 'createEventObject').createEventObject) ? (d = JSProf.LWR(94359, d, JSProf.LMC(94358, e.config.doc, 'createEventObject').createEventObject()), JSProf.LPD(94361, d, 'bubbles').bubbles = JSProf.LRSP(94361, JSProf.LRE(94360, a)), JSProf.LPD(94363, d, 'cancelable').cancelable = JSProf.LRSP(94363, JSProf.LRE(94362, f)), JSProf.LPD(94365, d, 'view').view = JSProf.LRSP(94365, JSProf.LRE(94364, h)), JSProf.LPD(94367, d, 'detail').detail = JSProf.LRSP(94367, JSProf.LRE(94366, p)), JSProf.LMC(94370, t, 'fireEvent').fireEvent("on" + JSProf.LRE(94368, u), JSProf.LRE(94369, d))) : JSProf.LMC(94371, e, 'error').error("simulateUIEvent(): No event simulation framework present.");
        }
        function g(t, n, r, i, s, o, u, a, f, l, c, h, d, v, m, g) {
            var y;
            (!JSProf.LGD(94372, e.UA, 'ios').ios || JSProf.LGD(94373, e.UA, 'ios').ios < 2) && JSProf.LMC(94374, e, 'error').error("simulateGestureEvent(): Native gesture DOM eventframe is not available in this platform."), JSProf.LRE(94375, t) || JSProf.LMC(94376, e, 'error').error("simulateGestureEvent(): Invalid target."), JSProf.LMC(94378, e.Lang, 'isString').isString(JSProf.LRE(94377, n)) ? (n = JSProf.LWR(94379, n, n.toLowerCase()), JSProf.LGE(94380, p, 'n')[n] || JSProf.LMC(94382, e, 'error').error("simulateTouchEvent(): Event type '" + JSProf.LRE(94381, n) + "' not supported.")) : JSProf.LMC(94383, e, 'error').error("simulateGestureEvent(): Event type must be a string."), JSProf.LMC(94385, e.Lang, 'isBoolean').isBoolean(JSProf.LRE(94384, r)) || (r = JSProf.LWR(94386, r, !0)), JSProf.LMC(94388, e.Lang, 'isBoolean').isBoolean(JSProf.LRE(94387, i)) || (i = JSProf.LWR(94389, i, !0)), JSProf.LMC(94391, e.Lang, 'isObject').isObject(JSProf.LRE(94390, s)) || (s = JSProf.LWR(94393, s, JSProf.LGD(94392, e.config, 'win').win)), JSProf.LMC(94395, e.Lang, 'isNumber').isNumber(JSProf.LRE(94394, o)) || (o = JSProf.LWR(94396, o, 2)), JSProf.LMC(94398, e.Lang, 'isNumber').isNumber(JSProf.LRE(94397, u)) || (u = JSProf.LWR(94399, u, 0)), JSProf.LMC(94401, e.Lang, 'isNumber').isNumber(JSProf.LRE(94400, a)) || (a = JSProf.LWR(94402, a, 0)), JSProf.LMC(94404, e.Lang, 'isNumber').isNumber(JSProf.LRE(94403, f)) || (f = JSProf.LWR(94405, f, 0)), JSProf.LMC(94407, e.Lang, 'isNumber').isNumber(JSProf.LRE(94406, l)) || (l = JSProf.LWR(94408, l, 0)), JSProf.LMC(94410, e.Lang, 'isBoolean').isBoolean(JSProf.LRE(94409, c)) || (c = JSProf.LWR(94411, c, !1)), JSProf.LMC(94413, e.Lang, 'isBoolean').isBoolean(JSProf.LRE(94412, h)) || (h = JSProf.LWR(94414, h, !1)), JSProf.LMC(94416, e.Lang, 'isBoolean').isBoolean(JSProf.LRE(94415, d)) || (d = JSProf.LWR(94417, d, !1)), JSProf.LMC(94419, e.Lang, 'isBoolean').isBoolean(JSProf.LRE(94418, v)) || (v = JSProf.LWR(94420, v, !1)), JSProf.LMC(94422, e.Lang, 'isNumber').isNumber(JSProf.LRE(94421, m)) || (m = JSProf.LWR(94423, m, 1)), JSProf.LMC(94425, e.Lang, 'isNumber').isNumber(JSProf.LRE(94424, g)) || (g = JSProf.LWR(94426, g, 0)), y = JSProf.LWR(94428, y, JSProf.LMC(94427, e.config.doc, 'createEvent').createEvent("GestureEvent")), JSProf.LMC(94445, y, 'initGestureEvent').initGestureEvent(JSProf.LRE(94429, n), JSProf.LRE(94430, r), JSProf.LRE(94431, i), JSProf.LRE(94432, s), JSProf.LRE(94433, o), JSProf.LRE(94434, u), JSProf.LRE(94435, a), JSProf.LRE(94436, f), JSProf.LRE(94437, l), JSProf.LRE(94438, c), JSProf.LRE(94439, h), JSProf.LRE(94440, d), JSProf.LRE(94441, v), JSProf.LRE(94442, t), JSProf.LRE(94443, m), JSProf.LRE(94444, g)), t.dispatchEvent(JSProf.LRE(94446, y));
        }
        function y(t, n, r, i, s, o, u, a, f, l, c, p, d, v, m, g, y, b, w) {
            var E;
            JSProf.LRE(94447, t) || JSProf.LMC(94448, e, 'error').error("simulateTouchEvent(): Invalid target."), JSProf.LMC(94450, e.Lang, 'isString').isString(JSProf.LRE(94449, n)) ? (n = JSProf.LWR(94451, n, n.toLowerCase()), JSProf.LGE(94452, h, 'n')[n] || JSProf.LMC(94454, e, 'error').error("simulateTouchEvent(): Event type '" + JSProf.LRE(94453, n) + "' not supported.")) : JSProf.LMC(94455, e, 'error').error("simulateTouchEvent(): Event type must be a string."), JSProf.LRE(94456, n) === "touchstart" || JSProf.LRE(94457, n) === "touchmove" ? JSProf.LGD(94458, m, 'length').length === 0 && JSProf.LMC(94459, e, 'error').error("simulateTouchEvent(): No touch object in touches") : JSProf.LRE(94460, n) === "touchend" && JSProf.LGD(94461, y, 'length').length === 0 && JSProf.LMC(94462, e, 'error').error("simulateTouchEvent(): No touch object in changedTouches"), JSProf.LMC(94464, e.Lang, 'isBoolean').isBoolean(JSProf.LRE(94463, r)) || (r = JSProf.LWR(94465, r, !0)), JSProf.LMC(94467, e.Lang, 'isBoolean').isBoolean(JSProf.LRE(94466, i)) || (i = JSProf.LWR(94469, i, JSProf.LRE(94468, n) !== "touchcancel")), JSProf.LMC(94471, e.Lang, 'isObject').isObject(JSProf.LRE(94470, s)) || (s = JSProf.LWR(94473, s, JSProf.LGD(94472, e.config, 'win').win)), JSProf.LMC(94475, e.Lang, 'isNumber').isNumber(JSProf.LRE(94474, o)) || (o = JSProf.LWR(94476, o, 1)), JSProf.LMC(94478, e.Lang, 'isNumber').isNumber(JSProf.LRE(94477, u)) || (u = JSProf.LWR(94479, u, 0)), JSProf.LMC(94481, e.Lang, 'isNumber').isNumber(JSProf.LRE(94480, a)) || (a = JSProf.LWR(94482, a, 0)), JSProf.LMC(94484, e.Lang, 'isNumber').isNumber(JSProf.LRE(94483, f)) || (f = JSProf.LWR(94485, f, 0)), JSProf.LMC(94487, e.Lang, 'isNumber').isNumber(JSProf.LRE(94486, l)) || (l = JSProf.LWR(94488, l, 0)), JSProf.LMC(94490, e.Lang, 'isBoolean').isBoolean(JSProf.LRE(94489, c)) || (c = JSProf.LWR(94491, c, !1)), JSProf.LMC(94493, e.Lang, 'isBoolean').isBoolean(JSProf.LRE(94492, p)) || (p = JSProf.LWR(94494, p, !1)), JSProf.LMC(94496, e.Lang, 'isBoolean').isBoolean(JSProf.LRE(94495, d)) || (d = JSProf.LWR(94497, d, !1)), JSProf.LMC(94499, e.Lang, 'isBoolean').isBoolean(JSProf.LRE(94498, v)) || (v = JSProf.LWR(94500, v, !1)), JSProf.LMC(94502, e.Lang, 'isNumber').isNumber(JSProf.LRE(94501, b)) || (b = JSProf.LWR(94503, b, 1)), JSProf.LMC(94505, e.Lang, 'isNumber').isNumber(JSProf.LRE(94504, w)) || (w = JSProf.LWR(94506, w, 0)), JSProf.LMC(94508, e.Lang, 'isFunction').isFunction(JSProf.LGD(94507, e.config.doc, 'createEvent').createEvent) ? (JSProf.LGD(94509, e.UA, 'android').android ? JSProf.LGD(94510, e.UA, 'android').android < 4 ? (E = JSProf.LWR(94512, E, JSProf.LMC(94511, e.config.doc, 'createEvent').createEvent("MouseEvents")), JSProf.LMC(94527, E, 'initMouseEvent').initMouseEvent(JSProf.LRE(94513, n), JSProf.LRE(94514, r), JSProf.LRE(94515, i), JSProf.LRE(94516, s), JSProf.LRE(94517, o), JSProf.LRE(94518, u), JSProf.LRE(94519, a), JSProf.LRE(94520, f), JSProf.LRE(94521, l), JSProf.LRE(94522, c), JSProf.LRE(94523, p), JSProf.LRE(94524, d), JSProf.LRE(94525, v), 0, JSProf.LRE(94526, t)), JSProf.LPD(94529, E, 'touches').touches = JSProf.LRSP(94529, JSProf.LRE(94528, m)), JSProf.LPD(94531, E, 'targetTouches').targetTouches = JSProf.LRSP(94531, JSProf.LRE(94530, g)), JSProf.LPD(94533, E, 'changedTouches').changedTouches = JSProf.LRSP(94533, JSProf.LRE(94532, y))) : (E = JSProf.LWR(94535, E, JSProf.LMC(94534, e.config.doc, 'createEvent').createEvent("TouchEvent")), JSProf.LMC(94549, E, 'initTouchEvent').initTouchEvent(JSProf.LRE(94536, m), JSProf.LRE(94537, g), JSProf.LRE(94538, y), JSProf.LRE(94539, n), JSProf.LRE(94540, s), JSProf.LRE(94541, u), JSProf.LRE(94542, a), JSProf.LRE(94543, f), JSProf.LRE(94544, l), JSProf.LRE(94545, c), JSProf.LRE(94546, p), JSProf.LRE(94547, d), JSProf.LRE(94548, v))) : JSProf.LGD(94550, e.UA, 'ios').ios ? JSProf.LGD(94551, e.UA, 'ios').ios >= 2 ? (E = JSProf.LWR(94553, E, JSProf.LMC(94552, e.config.doc, 'createEvent').createEvent("TouchEvent")), JSProf.LMC(94572, E, 'initTouchEvent').initTouchEvent(JSProf.LRE(94554, n), JSProf.LRE(94555, r), JSProf.LRE(94556, i), JSProf.LRE(94557, s), JSProf.LRE(94558, o), JSProf.LRE(94559, u), JSProf.LRE(94560, a), JSProf.LRE(94561, f), JSProf.LRE(94562, l), JSProf.LRE(94563, c), JSProf.LRE(94564, p), JSProf.LRE(94565, d), JSProf.LRE(94566, v), JSProf.LRE(94567, m), JSProf.LRE(94568, g), JSProf.LRE(94569, y), JSProf.LRE(94570, b), JSProf.LRE(94571, w))) : JSProf.LMC(94574, e, 'error').error("simulateTouchEvent(): No touch event simulation framework present for iOS, " + JSProf.LGD(94573, e.UA, 'ios').ios + ".") : JSProf.LMC(94576, e, 'error').error("simulateTouchEvent(): Not supported agent yet, " + JSProf.LGD(94575, e.UA, 'userAgent').userAgent), t.dispatchEvent(JSProf.LRE(94577, E))) : JSProf.LMC(94578, e, 'error').error("simulateTouchEvent(): No event simulation framework present.");
        }
        var t = JSProf.LGD(94579, e, 'Lang').Lang, n = JSProf.LGD(94580, t, 'isFunction').isFunction, r = JSProf.LGD(94581, t, 'isString').isString, i = JSProf.LGD(94582, t, 'isBoolean').isBoolean, s = JSProf.LGD(94583, t, 'isObject').isObject, o = JSProf.LGD(94584, t, 'isNumber').isNumber, u = JSProf.LNE(94585, {
                click: 1,
                dblclick: 1,
                mouseover: 1,
                mouseout: 1,
                mousedown: 1,
                mouseup: 1,
                mousemove: 1,
                contextmenu: 1
            }, 11), a = JSProf.LNE(94586, {
                MSPointerOver: 1,
                MSPointerOut: 1,
                MSPointerDown: 1,
                MSPointerUp: 1,
                MSPointerMove: 1
            }, 11), f = JSProf.LNE(94587, {
                keydown: 1,
                keyup: 1,
                keypress: 1
            }, 11), l = JSProf.LNE(94588, {
                submit: 1,
                blur: 1,
                change: 1,
                focus: 1,
                resize: 1,
                scroll: 1,
                select: 1
            }, 11), c = JSProf.LNE(94589, {
                scroll: 1,
                resize: 1,
                reset: 1,
                submit: 1,
                change: 1,
                select: 1,
                error: 1,
                abort: 1
            }, 11), h = JSProf.LNE(94590, {
                touchstart: 1,
                touchmove: 1,
                touchend: 1,
                touchcancel: 1
            }, 11), p = JSProf.LNE(94591, {
                gesturestart: 1,
                gesturechange: 1,
                gestureend: 1
            }, 11);
        JSProf.LMC(94594, e, 'mix').mix(JSProf.LRE(94592, c), JSProf.LRE(94593, u)), JSProf.LMC(94597, e, 'mix').mix(JSProf.LRE(94595, c), JSProf.LRE(94596, f)), JSProf.LMC(94600, e, 'mix').mix(JSProf.LRE(94598, c), JSProf.LRE(94599, h)), JSProf.LPD(94695, e.Event, 'simulate').simulate = JSProf.LRSP(94695, JSProf.LNF(94694, function (t, n, r) {
            r = JSProf.LWR(94603, r, JSProf.LRE(94601, r) || JSProf.LNE(94602, {}, 11)), JSProf.LGE(94604, u, 'n')[n] || JSProf.LGE(94605, a, 'n')[n] ? JSProf.LFC(94622, v, false)(JSProf.LRE(94606, t), JSProf.LRE(94607, n), JSProf.LGD(94608, r, 'bubbles').bubbles, JSProf.LGD(94609, r, 'cancelable').cancelable, JSProf.LGD(94610, r, 'view').view, JSProf.LGD(94611, r, 'detail').detail, JSProf.LGD(94612, r, 'screenX').screenX, JSProf.LGD(94613, r, 'screenY').screenY, JSProf.LGD(94614, r, 'clientX').clientX, JSProf.LGD(94615, r, 'clientY').clientY, JSProf.LGD(94616, r, 'ctrlKey').ctrlKey, JSProf.LGD(94617, r, 'altKey').altKey, JSProf.LGD(94618, r, 'shiftKey').shiftKey, JSProf.LGD(94619, r, 'metaKey').metaKey, JSProf.LGD(94620, r, 'button').button, JSProf.LGD(94621, r, 'relatedTarget').relatedTarget) : JSProf.LGE(94623, f, 'n')[n] ? JSProf.LFC(94635, d, false)(JSProf.LRE(94624, t), JSProf.LRE(94625, n), JSProf.LGD(94626, r, 'bubbles').bubbles, JSProf.LGD(94627, r, 'cancelable').cancelable, JSProf.LGD(94628, r, 'view').view, JSProf.LGD(94629, r, 'ctrlKey').ctrlKey, JSProf.LGD(94630, r, 'altKey').altKey, JSProf.LGD(94631, r, 'shiftKey').shiftKey, JSProf.LGD(94632, r, 'metaKey').metaKey, JSProf.LGD(94633, r, 'keyCode').keyCode, JSProf.LGD(94634, r, 'charCode').charCode) : JSProf.LGE(94636, l, 'n')[n] ? JSProf.LFC(94643, m, false)(JSProf.LRE(94637, t), JSProf.LRE(94638, n), JSProf.LGD(94639, r, 'bubbles').bubbles, JSProf.LGD(94640, r, 'cancelable').cancelable, JSProf.LGD(94641, r, 'view').view, JSProf.LGD(94642, r, 'detail').detail) : JSProf.LGE(94644, h, 'n')[n] ? JSProf.LGD(94645, e.config, 'win').win && "ontouchstart" in JSProf.LGD(94646, e.config, 'win').win && !JSProf.LGD(94647, e.UA, 'phantomjs').phantomjs && !(JSProf.LGD(94648, e.UA, 'chrome').chrome && JSProf.LGD(94649, e.UA, 'chrome').chrome < 6) ? JSProf.LFC(94669, y, false)(JSProf.LRE(94650, t), JSProf.LRE(94651, n), JSProf.LGD(94652, r, 'bubbles').bubbles, JSProf.LGD(94653, r, 'cancelable').cancelable, JSProf.LGD(94654, r, 'view').view, JSProf.LGD(94655, r, 'detail').detail, JSProf.LGD(94656, r, 'screenX').screenX, JSProf.LGD(94657, r, 'screenY').screenY, JSProf.LGD(94658, r, 'clientX').clientX, JSProf.LGD(94659, r, 'clientY').clientY, JSProf.LGD(94660, r, 'ctrlKey').ctrlKey, JSProf.LGD(94661, r, 'altKey').altKey, JSProf.LGD(94662, r, 'shiftKey').shiftKey, JSProf.LGD(94663, r, 'metaKey').metaKey, JSProf.LGD(94664, r, 'touches').touches, JSProf.LGD(94665, r, 'targetTouches').targetTouches, JSProf.LGD(94666, r, 'changedTouches').changedTouches, JSProf.LGD(94667, r, 'scale').scale, JSProf.LGD(94668, r, 'rotation').rotation) : JSProf.LMC(94671, e, 'error').error("simulate(): Event '" + JSProf.LRE(94670, n) + "' can't be simulated. Use gesture-simulate module instead.") : JSProf.LGD(94672, e.UA, 'ios').ios && JSProf.LGD(94673, e.UA, 'ios').ios >= 2 && JSProf.LGE(94674, p, 'n')[n] ? JSProf.LFC(94691, g, false)(JSProf.LRE(94675, t), JSProf.LRE(94676, n), JSProf.LGD(94677, r, 'bubbles').bubbles, JSProf.LGD(94678, r, 'cancelable').cancelable, JSProf.LGD(94679, r, 'view').view, JSProf.LGD(94680, r, 'detail').detail, JSProf.LGD(94681, r, 'screenX').screenX, JSProf.LGD(94682, r, 'screenY').screenY, JSProf.LGD(94683, r, 'clientX').clientX, JSProf.LGD(94684, r, 'clientY').clientY, JSProf.LGD(94685, r, 'ctrlKey').ctrlKey, JSProf.LGD(94686, r, 'altKey').altKey, JSProf.LGD(94687, r, 'shiftKey').shiftKey, JSProf.LGD(94688, r, 'metaKey').metaKey, JSProf.LGD(94689, r, 'scale').scale, JSProf.LGD(94690, r, 'rotation').rotation) : JSProf.LMC(94693, e, 'error').error("simulate(): Event '" + JSProf.LRE(94692, n) + "' can't be simulated.");
        }, 12));
    }, 12), false)();
}, 12), "3.14.1", JSProf.LNE(94705, { requires: JSProf.LNE(94704, ["event-base"], 10) }, 11));
/*
YUI 3.14.1 (build 63049cb)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
JSProf.LMC(94929, YUI, 'add').add("async-queue", JSProf.LNF(94926, function (e, t) {
    JSProf.LPD(94710, e, 'AsyncQueue').AsyncQueue = JSProf.LRSP(94710, JSProf.LNF(94709, function () {
        JSProf.LMC(94707, this, '_init')._init(), JSProf.LMC(94708, this.add, 'apply').apply(this, arguments);
    }, 12));
    var n = JSProf.LGD(94711, e, 'AsyncQueue').AsyncQueue, r = "execute", i = "shift", s = "promote", o = "remove", u = JSProf.LGD(94712, e.Lang, 'isObject').isObject, a = JSProf.LGD(94713, e.Lang, 'isFunction').isFunction;
    JSProf.LPD(94720, n, 'defaults').defaults = JSProf.LRSP(94720, JSProf.LMC(94719, e, 'mix').mix(JSProf.LNE(94716, {
        autoContinue: !0,
        iterations: 1,
        timeout: 10,
        until: JSProf.LNF(94715, function () {
            return this.iterations |= 0, JSProf.LGD(94714, this, 'iterations').iterations <= 0;
        }, 12)
    }, 11), JSProf.LGD(94717, e.config, 'queueDefaults').queueDefaults || JSProf.LNE(94718, {}, 11))), JSProf.LMC(94925, e, 'extend').extend(JSProf.LRE(94721, n), JSProf.LGD(94722, e, 'EventTarget').EventTarget, JSProf.LNE(94924, {
        _running: !1,
        _init: JSProf.LNF(94730, function () {
            JSProf.LMC(94724, e.EventTarget, 'call').call(this, JSProf.LNE(94723, {
                prefix: "queue",
                emitFacade: !0
            }, 11)), JSProf.LPD(94726, this, '_q')._q = JSProf.LRSP(94726, JSProf.LNE(94725, [], 10)), JSProf.LPD(94728, this, 'defaults').defaults = JSProf.LRSP(94728, JSProf.LNE(94727, {}, 11)), JSProf.LMC(94729, this, '_initEvents')._initEvents();
        }, 12),
        _initEvents: JSProf.LNF(94738, function () {
            JSProf.LMC(94737, this, 'publish').publish(JSProf.LNE(94736, {
                execute: JSProf.LNE(94731, {
                    defaultFn: this._defExecFn,
                    emitFacade: !0
                }, 11),
                shift: JSProf.LNE(94732, {
                    defaultFn: this._defShiftFn,
                    emitFacade: !0
                }, 11),
                add: JSProf.LNE(94733, {
                    defaultFn: this._defAddFn,
                    emitFacade: !0
                }, 11),
                promote: JSProf.LNE(94734, {
                    defaultFn: this._defPromoteFn,
                    emitFacade: !0
                }, 11),
                remove: JSProf.LNE(94735, {
                    defaultFn: this._defRemoveFn,
                    emitFacade: !0
                }, 11)
            }, 11));
        }, 12),
        next: JSProf.LNF(94750, function () {
            var e;
            while (JSProf.LGD(94739, this._q, 'length').length) {
                e = JSProf.LWR(94743, e, JSProf.LPE(94742, this._q, 0)[0] = JSProf.LRPE(94742, JSProf.LMC(94741, this, '_prepare')._prepare(JSProf.LGE(94740, this._q, 0)[0])));
                if (!JSProf.LRE(94744, e) || !JSProf.LMC(94745, e, 'until').until())
                    break;
                JSProf.LMC(94748, this, 'fire').fire(JSProf.LRE(94746, i), JSProf.LNE(94747, { callback: e }, 11)), e = null;
            }
            return JSProf.LRE(94749, e) || null;
        }, 12),
        _defShiftFn: JSProf.LNF(94754, function (e) {
            JSProf.LMC(94752, this, 'indexOf').indexOf(JSProf.LGD(94751, e, 'callback').callback) === 0 && JSProf.LMC(94753, this._q, 'shift').shift();
        }, 12),
        _prepare: JSProf.LNF(94780, function (t) {
            if (JSProf.LFC(94756, a, false)(JSProf.LRE(94755, t)) && JSProf.LGD(94757, t, '_prepared')._prepared)
                return JSProf.LRE(94758, t);
            var r = JSProf.LMC(94767, e, 'merge').merge(JSProf.LGD(94759, n, 'defaults').defaults, JSProf.LNE(94761, {
                    context: this,
                    args: JSProf.LNE(94760, [], 10),
                    _prepared: !0
                }, 11), JSProf.LGD(94762, this, 'defaults').defaults, JSProf.LFC(94764, a, false)(JSProf.LRE(94763, t)) ? JSProf.LNE(94765, { fn: t }, 11) : JSProf.LRE(94766, t)), i = e.bind(JSProf.LNF(94776, function () {
                    JSProf.LGD(94768, i, '_running')._running || i.iterations--, JSProf.LFC(94770, a, false)(JSProf.LGD(94769, i, 'fn').fn) && JSProf.LMC(94775, i.fn, 'apply').apply(JSProf.LGD(94771, i, 'context').context || JSProf.LRE(94772, e), JSProf.LMC(94774, e, 'Array').Array(JSProf.LGD(94773, i, 'args').args));
                }, 12), this);
            return JSProf.LMC(94779, e, 'mix').mix(JSProf.LRE(94777, i), JSProf.LRE(94778, r));
        }, 12),
        run: JSProf.LNF(94798, function () {
            var e, t = !0;
            if (JSProf.LGD(94781, this, '_executing')._executing)
                return JSProf.LPD(94782, this, '_running')._running = JSProf.LRSP(94782, !0), this;
            for (e = JSProf.LWR(94784, e, JSProf.LMC(94783, this, 'next').next()); JSProf.LRE(94785, e) && !JSProf.LMC(94786, this, 'isRunning').isRunning(); e = JSProf.LWR(94788, e, JSProf.LMC(94787, this, 'next').next())) {
                t = JSProf.LWR(94794, t, JSProf.LGD(94789, e, 'timeout').timeout < 0 ? JSProf.LMC(94791, this, '_execute')._execute(JSProf.LRE(94790, e)) : JSProf.LMC(94793, this, '_schedule')._schedule(JSProf.LRE(94792, e)));
                if (!JSProf.LRE(94795, t))
                    break;
            }
            return JSProf.LRE(94796, e) || JSProf.LMC(94797, this, 'fire').fire("complete"), this;
        }, 12),
        _execute: JSProf.LNF(94812, function (e) {
            JSProf.LPD(94800, this, '_running')._running = JSProf.LRSP(94800, JSProf.LPD(94799, e, '_running')._running = JSProf.LRSP(94799, !0)), JSProf.LPD(94802, this, '_executing')._executing = JSProf.LRSP(94802, JSProf.LRE(94801, e)), e.iterations--, JSProf.LMC(94805, this, 'fire').fire(JSProf.LRE(94803, r), JSProf.LNE(94804, { callback: e }, 11));
            var t = JSProf.LGD(94806, this, '_running')._running && JSProf.LGD(94807, e, 'autoContinue').autoContinue;
            return JSProf.LPD(94809, this, '_running')._running = JSProf.LRSP(94809, JSProf.LPD(94808, e, '_running')._running = JSProf.LRSP(94808, !1)), JSProf.LPD(94810, this, '_executing')._executing = JSProf.LRSP(94810, !1), JSProf.LRE(94811, t);
        }, 12),
        _schedule: JSProf.LNF(94820, function (t) {
            return JSProf.LPD(94819, this, '_running')._running = JSProf.LRSP(94819, JSProf.LMC(94818, e, 'later').later(JSProf.LGD(94813, t, 'timeout').timeout, this, JSProf.LNF(94817, function () {
                JSProf.LMC(94815, this, '_execute')._execute(JSProf.LRE(94814, t)) && JSProf.LMC(94816, this, 'run').run();
            }, 12))), !1;
        }, 12),
        isRunning: JSProf.LNF(94822, function () {
            return !!JSProf.LGD(94821, this, '_running')._running;
        }, 12),
        _defExecFn: JSProf.LNF(94824, function (e) {
            JSProf.LMC(94823, e, 'callback').callback();
        }, 12),
        add: JSProf.LNF(94828, function () {
            return JSProf.LMC(94827, this, 'fire').fire("add", JSProf.LNE(94826, { callbacks: JSProf.LMC(94825, e, 'Array').Array(arguments, 0, !0) }, 11)), this;
        }, 12),
        _defAddFn: JSProf.LNF(94842, function (t) {
            var n = JSProf.LGD(94829, this, '_q')._q, r = JSProf.LNE(94830, [], 10);
            JSProf.LMC(94839, e.Array, 'each').each(JSProf.LGD(94831, t, 'callbacks').callbacks, JSProf.LNF(94838, function (e) {
                JSProf.LFC(94833, u, false)(JSProf.LRE(94832, e)) && (JSProf.LMC(94835, n, 'push').push(JSProf.LRE(94834, e)), JSProf.LMC(94837, r, 'push').push(JSProf.LRE(94836, e)));
            }, 12)), JSProf.LPD(94841, t, 'added').added = JSProf.LRSP(94841, JSProf.LRE(94840, r));
        }, 12),
        pause: JSProf.LNF(94848, function () {
            return JSProf.LGD(94843, this, '_running')._running && JSProf.LFC(94845, u, false)(JSProf.LGD(94844, this, '_running')._running) && JSProf.LMC(94846, this._running, 'cancel').cancel(), JSProf.LPD(94847, this, '_running')._running = JSProf.LRSP(94847, !1), this;
        }, 12),
        stop: JSProf.LNF(94856, function () {
            return JSProf.LPD(94850, this, '_q')._q = JSProf.LRSP(94850, JSProf.LNE(94849, [], 10)), JSProf.LGD(94851, this, '_running')._running && JSProf.LFC(94853, u, false)(JSProf.LGD(94852, this, '_running')._running) && (JSProf.LMC(94854, this._running, 'cancel').cancel(), JSProf.LPD(94855, this, '_running')._running = JSProf.LRSP(94855, !1)), this;
        }, 12),
        indexOf: JSProf.LNF(94867, function (e) {
            var t = 0, n = JSProf.LGD(94857, this._q, 'length').length, r;
            for (; JSProf.LRE(94858, t) < JSProf.LRE(94859, n); ++t) {
                r = JSProf.LWR(94861, r, JSProf.LGE(94860, this._q, 't')[t]);
                if (JSProf.LRE(94862, r) === JSProf.LRE(94863, e) || JSProf.LGD(94864, r, 'id').id === JSProf.LRE(94865, e))
                    return JSProf.LRE(94866, t);
            }
            return -1;
        }, 12),
        getCallback: JSProf.LNF(94872, function (e) {
            var t = JSProf.LMC(94869, this, 'indexOf').indexOf(JSProf.LRE(94868, e));
            return JSProf.LRE(94870, t) > -1 ? JSProf.LGE(94871, this._q, 't')[t] : null;
        }, 12),
        promote: JSProf.LNF(94886, function (e) {
            var t = JSProf.LNE(94873, { callback: e }, 11), n;
            return JSProf.LMC(94874, this, 'isRunning').isRunning() ? n = JSProf.LWR(94882, n, JSProf.LMC(94881, this, 'after').after(JSProf.LRE(94875, i), JSProf.LNF(94880, function () {
                JSProf.LMC(94878, this, 'fire').fire(JSProf.LRE(94876, s), JSProf.LRE(94877, t)), JSProf.LMC(94879, n, 'detach').detach();
            }, 12), this)) : JSProf.LMC(94885, this, 'fire').fire(JSProf.LRE(94883, s), JSProf.LRE(94884, t)), this;
        }, 12),
        _defPromoteFn: JSProf.LNF(94897, function (e) {
            var t = JSProf.LMC(94888, this, 'indexOf').indexOf(JSProf.LGD(94887, e, 'callback').callback), n = JSProf.LRE(94889, t) > -1 ? JSProf.LGE(94892, JSProf.LMC(94891, this._q, 'splice').splice(JSProf.LRE(94890, t), 1), 0)[0] : null;
            JSProf.LPD(94894, e, 'promoted').promoted = JSProf.LRSP(94894, JSProf.LRE(94893, n)), JSProf.LRE(94895, n) && this._q.unshift(JSProf.LRE(94896, n));
        }, 12),
        remove: JSProf.LNF(94911, function (e) {
            var t = JSProf.LNE(94898, { callback: e }, 11), n;
            return JSProf.LMC(94899, this, 'isRunning').isRunning() ? n = JSProf.LWR(94907, n, JSProf.LMC(94906, this, 'after').after(JSProf.LRE(94900, i), JSProf.LNF(94905, function () {
                JSProf.LMC(94903, this, 'fire').fire(JSProf.LRE(94901, o), JSProf.LRE(94902, t)), JSProf.LMC(94904, n, 'detach').detach();
            }, 12), this)) : JSProf.LMC(94910, this, 'fire').fire(JSProf.LRE(94908, o), JSProf.LRE(94909, t)), this;
        }, 12),
        _defRemoveFn: JSProf.LNF(94919, function (e) {
            var t = JSProf.LMC(94913, this, 'indexOf').indexOf(JSProf.LGD(94912, e, 'callback').callback);
            JSProf.LPD(94918, e, 'removed').removed = JSProf.LRSP(94918, JSProf.LRE(94914, t) > -1 ? JSProf.LGE(94917, JSProf.LMC(94916, this._q, 'splice').splice(JSProf.LRE(94915, t), 1), 0)[0] : null);
        }, 12),
        size: JSProf.LNF(94923, function () {
            return JSProf.LMC(94920, this, 'isRunning').isRunning() || JSProf.LMC(94921, this, 'next').next(), JSProf.LGD(94922, this._q, 'length').length;
        }, 12)
    }, 11));
}, 12), "3.14.1", JSProf.LNE(94928, { requires: JSProf.LNE(94927, ["event-custom"], 10) }, 11));
/*
YUI 3.14.1 (build 63049cb)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
JSProf.LMC(95816, YUI, 'add').add("gesture-simulate", JSProf.LNF(95813, function (e, t) {
    JSProf.LFD(95812, T);
    function T(n) {
        JSProf.LRE(94930, n) || JSProf.LMC(94932, e, 'error').error(JSProf.LRE(94931, t) + ": invalid target node"), JSProf.LPD(94934, this, 'node').node = JSProf.LRSP(94934, JSProf.LRE(94933, n)), JSProf.LPD(94937, this, 'target').target = JSProf.LRSP(94937, JSProf.LMC(94936, e.Node, 'getDOMNode').getDOMNode(JSProf.LRE(94935, n)));
        var r = JSProf.LMC(94938, this.node, 'getXY').getXY(), i = JSProf.LMC(94939, this, '_getDims')._getDims();
        a = JSProf.LWR(94942, a, JSProf.LGE(94940, r, 0)[0] + JSProf.LGE(94941, i, 0)[0] / 2), f = JSProf.LWR(94945, f, JSProf.LGE(94943, r, 1)[1] + JSProf.LGE(94944, i, 1)[1] / 2);
    }
    var t = "gesture-simulate", n = JSProf.LGD(94946, e.config, 'win').win && "ontouchstart" in JSProf.LGD(94947, e.config, 'win').win && !JSProf.LGD(94948, e.UA, 'phantomjs').phantomjs && !(JSProf.LGD(94949, e.UA, 'chrome').chrome && JSProf.LGD(94950, e.UA, 'chrome').chrome < 6), r = JSProf.LNE(94951, {
            tap: 1,
            doubletap: 1,
            press: 1,
            move: 1,
            flick: 1,
            pinch: 1,
            rotate: 1
        }, 11), i = JSProf.LNE(94952, {
            touchstart: 1,
            touchmove: 1,
            touchend: 1,
            touchcancel: 1
        }, 11), s = JSProf.LGD(94953, e.config, 'doc').doc, o, u = 20, a, f, l = JSProf.LNE(94954, {
            HOLD_TAP: 10,
            DELAY_TAP: 10,
            HOLD_PRESS: 3e3,
            MIN_HOLD_PRESS: 1e3,
            MAX_HOLD_PRESS: 6e4,
            DISTANCE_MOVE: 200,
            DURATION_MOVE: 1e3,
            MAX_DURATION_MOVE: 5e3,
            MIN_VELOCITY_FLICK: 1.3,
            DISTANCE_FLICK: 200,
            DURATION_FLICK: 1e3,
            MAX_DURATION_FLICK: 5e3,
            DURATION_PINCH: 1e3
        }, 11), c = "touchstart", h = "touchmove", p = "touchend", d = "gesturestart", v = "gesturechange", m = "gestureend", g = "mouseup", y = "mousemove", b = "mousedown", w = "click", E = "dblclick", S = "x", x = "y";
    JSProf.LPD(95730, T, 'prototype').prototype = JSProf.LRSP(95730, JSProf.LNE(95729, {
        _toRadian: JSProf.LNF(94957, function (e) {
            return JSProf.LRE(94955, e) * (JSProf.LGD(94956, Math, 'PI').PI / 180);
        }, 12),
        _getDims: JSProf.LNF(94984, function () {
            var e, t, n;
            return JSProf.LGD(94958, this.target, 'getBoundingClientRect').getBoundingClientRect ? (e = JSProf.LWR(94960, e, JSProf.LMC(94959, this.target, 'getBoundingClientRect').getBoundingClientRect()), "height" in JSProf.LRE(94961, e) ? n = JSProf.LWR(94963, n, JSProf.LGD(94962, e, 'height').height) : n = JSProf.LWR(94967, n, JSProf.LMC(94966, Math, 'abs').abs(JSProf.LGD(94964, e, 'bottom').bottom - JSProf.LGD(94965, e, 'top').top)), "width" in JSProf.LRE(94968, e) ? t = JSProf.LWR(94970, t, JSProf.LGD(94969, e, 'width').width) : t = JSProf.LWR(94974, t, JSProf.LMC(94973, Math, 'abs').abs(JSProf.LGD(94971, e, 'right').right - JSProf.LGD(94972, e, 'left').left))) : (e = JSProf.LWR(94976, e, JSProf.LMC(94975, this.node, 'get').get("region")), t = JSProf.LWR(94978, t, JSProf.LGD(94977, e, 'width').width), n = JSProf.LWR(94980, n, JSProf.LGD(94979, e, 'height').height)), JSProf.LNE(94983, [
                JSProf.LRE(94981, t),
                JSProf.LRE(94982, n)
            ], 10);
        }, 12),
        _calculateDefaultPoint: JSProf.LNF(95004, function (t) {
            var n;
            return !JSProf.LMC(94986, e.Lang, 'isArray').isArray(JSProf.LRE(94985, t)) || JSProf.LGD(94987, t, 'length').length === 0 ? t = JSProf.LWR(94991, t, JSProf.LNE(94990, [
                JSProf.LRE(94988, a),
                JSProf.LRE(94989, f)
            ], 10)) : (JSProf.LGD(94992, t, 'length').length == 1 && (n = JSProf.LWR(94994, n, JSProf.LGE(94993, this._getDims, 1)[1]), JSProf.LPE(94996, t, 1)[1] = JSProf.LRPE(94996, JSProf.LRE(94995, n) / 2)), JSProf.LPE(94999, t, 0)[0] = JSProf.LRPE(94999, JSProf.LMC(94997, this.node, 'getX').getX() + JSProf.LGE(94998, t, 0)[0]), JSProf.LPE(95002, t, 1)[1] = JSProf.LRPE(95002, JSProf.LMC(95000, this.node, 'getY').getY() + JSProf.LGE(95001, t, 1)[1])), JSProf.LRE(95003, t);
        }, 12),
        rotate: JSProf.LNF(95034, function (n, r, i, s, o, u, a) {
            var f, l = JSProf.LRE(95005, i), c = JSProf.LRE(95006, s);
            if (!JSProf.LMC(95008, e.Lang, 'isNumber').isNumber(JSProf.LRE(95007, l)) || !JSProf.LMC(95010, e.Lang, 'isNumber').isNumber(JSProf.LRE(95009, c)) || JSProf.LRE(95011, l) < 0 || JSProf.LRE(95012, c) < 0)
                f = JSProf.LWR(95017, f, JSProf.LGD(95013, this.target, 'offsetWidth').offsetWidth < JSProf.LGD(95014, this.target, 'offsetHeight').offsetHeight ? JSProf.LGD(95015, this.target, 'offsetWidth').offsetWidth / 4 : JSProf.LGD(95016, this.target, 'offsetHeight').offsetHeight / 4), l = JSProf.LWR(95019, l, JSProf.LRE(95018, f)), c = JSProf.LWR(95021, c, JSProf.LRE(95020, f));
            JSProf.LMC(95023, e.Lang, 'isNumber').isNumber(JSProf.LRE(95022, a)) || JSProf.LMC(95025, e, 'error').error(JSProf.LRE(95024, t) + "Invalid rotation detected."), JSProf.LMC(95033, this, 'pinch').pinch(JSProf.LRE(95026, n), JSProf.LRE(95027, r), JSProf.LRE(95028, l), JSProf.LRE(95029, c), JSProf.LRE(95030, o), JSProf.LRE(95031, u), JSProf.LRE(95032, a));
        }, 12),
        pinch: JSProf.LNF(95313, function (n, r, i, s, o, a, f) {
            var g, y, b = JSProf.LRE(95035, u), w, E = 0, S = JSProf.LRE(95036, i), x = JSProf.LRE(95037, s), T, N, C, k, L, A, O, M, _, D = JSProf.LNE(95040, {
                    start: JSProf.LNE(95038, [], 10),
                    end: JSProf.LNE(95039, [], 10)
                }, 11), P = JSProf.LNE(95043, {
                    start: JSProf.LNE(95041, [], 10),
                    end: JSProf.LNE(95042, [], 10)
                }, 11), H, B;
            r = JSProf.LWR(95046, r, JSProf.LMC(95045, this, '_calculateDefaultPoint')._calculateDefaultPoint(JSProf.LRE(95044, r))), (!JSProf.LMC(95048, e.Lang, 'isNumber').isNumber(JSProf.LRE(95047, S)) || !JSProf.LMC(95050, e.Lang, 'isNumber').isNumber(JSProf.LRE(95049, x)) || JSProf.LRE(95051, S) < 0 || JSProf.LRE(95052, x) < 0) && JSProf.LMC(95054, e, 'error').error(JSProf.LRE(95053, t) + "Invalid startRadius and endRadius detected.");
            if (!JSProf.LMC(95056, e.Lang, 'isNumber').isNumber(JSProf.LRE(95055, o)) || JSProf.LRE(95057, o) <= 0)
                o = JSProf.LWR(95059, o, JSProf.LGD(95058, l, 'DURATION_PINCH').DURATION_PINCH);
            if (!JSProf.LMC(95061, e.Lang, 'isNumber').isNumber(JSProf.LRE(95060, a)))
                a = JSProf.LWR(95062, a, 0);
            else {
                a %= 360;
                while (JSProf.LRE(95063, a) < 0)
                    a += 360;
            }
            JSProf.LMC(95065, e.Lang, 'isNumber').isNumber(JSProf.LRE(95064, f)) || (f = JSProf.LWR(95066, f, 0)), JSProf.LPD(95068, e.AsyncQueue.defaults, 'timeout').timeout = JSProf.LRSP(95068, JSProf.LRE(95067, b)), g = JSProf.LWR(95071, g, JSProf.LNE(95070, new (JSProf.LMC(95069, e, 'AsyncQueue')).AsyncQueue(), 40)), N = JSProf.LWR(95073, N, JSProf.LGE(95072, r, 0)[0]), C = JSProf.LWR(95075, C, JSProf.LGE(95074, r, 1)[1]), O = JSProf.LWR(95077, O, JSProf.LRE(95076, a)), M = JSProf.LWR(95080, M, JSProf.LRE(95078, a) + JSProf.LRE(95079, f)), JSProf.LPD(95092, D, 'start').start = JSProf.LRSP(95092, JSProf.LNE(95091, [
                JSProf.LRE(95081, N) + JSProf.LRE(95082, S) * JSProf.LMC(95085, Math, 'sin').sin(JSProf.LMC(95084, this, '_toRadian')._toRadian(JSProf.LRE(95083, O))),
                JSProf.LRE(95086, C) - JSProf.LRE(95087, S) * JSProf.LMC(95090, Math, 'cos').cos(JSProf.LMC(95089, this, '_toRadian')._toRadian(JSProf.LRE(95088, O)))
            ], 10)), JSProf.LPD(95104, D, 'end').end = JSProf.LRSP(95104, JSProf.LNE(95103, [
                JSProf.LRE(95093, N) + JSProf.LRE(95094, x) * JSProf.LMC(95097, Math, 'sin').sin(JSProf.LMC(95096, this, '_toRadian')._toRadian(JSProf.LRE(95095, M))),
                JSProf.LRE(95098, C) - JSProf.LRE(95099, x) * JSProf.LMC(95102, Math, 'cos').cos(JSProf.LMC(95101, this, '_toRadian')._toRadian(JSProf.LRE(95100, M)))
            ], 10)), JSProf.LPD(95116, P, 'start').start = JSProf.LRSP(95116, JSProf.LNE(95115, [
                JSProf.LRE(95105, N) - JSProf.LRE(95106, S) * JSProf.LMC(95109, Math, 'sin').sin(JSProf.LMC(95108, this, '_toRadian')._toRadian(JSProf.LRE(95107, O))),
                JSProf.LRE(95110, C) + JSProf.LRE(95111, S) * JSProf.LMC(95114, Math, 'cos').cos(JSProf.LMC(95113, this, '_toRadian')._toRadian(JSProf.LRE(95112, O)))
            ], 10)), JSProf.LPD(95128, P, 'end').end = JSProf.LRSP(95128, JSProf.LNE(95127, [
                JSProf.LRE(95117, N) - JSProf.LRE(95118, x) * JSProf.LMC(95121, Math, 'sin').sin(JSProf.LMC(95120, this, '_toRadian')._toRadian(JSProf.LRE(95119, M))),
                JSProf.LRE(95122, C) + JSProf.LRE(95123, x) * JSProf.LMC(95126, Math, 'cos').cos(JSProf.LMC(95125, this, '_toRadian')._toRadian(JSProf.LRE(95124, M)))
            ], 10)), k = JSProf.LWR(95129, k, 1), L = JSProf.LWR(95132, L, JSProf.LRE(95130, s) / JSProf.LRE(95131, i)), JSProf.LMC(95171, g, 'add').add(JSProf.LNE(95170, {
                fn: JSProf.LNF(95169, function () {
                    var t, n, r, i;
                    t = JSProf.LWR(95134, t, JSProf.LNE(95133, {
                        pageX: D.start[0],
                        pageY: D.start[1],
                        clientX: D.start[0],
                        clientY: D.start[1]
                    }, 11)), n = JSProf.LWR(95136, n, JSProf.LNE(95135, {
                        pageX: P.start[0],
                        pageY: P.start[1],
                        clientX: P.start[0],
                        clientY: P.start[1]
                    }, 11)), i = JSProf.LWR(95145, i, JSProf.LMC(95144, this, '_createTouchList')._createTouchList(JSProf.LNE(95143, [
                        JSProf.LMC(95139, e, 'merge').merge(JSProf.LNE(95137, { identifier: E++ }, 11), JSProf.LRE(95138, t)),
                        JSProf.LMC(95142, e, 'merge').merge(JSProf.LNE(95140, { identifier: E++ }, 11), JSProf.LRE(95141, n))
                    ], 10))), r = JSProf.LWR(95155, r, JSProf.LNE(95154, {
                        pageX: (JSProf.LGE(95146, D.start, 0)[0] + JSProf.LGE(95147, P.start, 0)[0]) / 2,
                        pageY: (JSProf.LGE(95148, D.start, 0)[0] + JSProf.LGE(95149, P.start, 1)[1]) / 2,
                        clientX: (JSProf.LGE(95150, D.start, 0)[0] + JSProf.LGE(95151, P.start, 0)[0]) / 2,
                        clientY: (JSProf.LGE(95152, D.start, 0)[0] + JSProf.LGE(95153, P.start, 1)[1]) / 2
                    }, 11)), JSProf.LMC(95161, this, '_simulateEvent')._simulateEvent(JSProf.LGD(95156, this, 'target').target, JSProf.LRE(95157, c), JSProf.LMC(95160, e, 'merge').merge(JSProf.LNE(95158, {
                        touches: i,
                        targetTouches: i,
                        changedTouches: i,
                        scale: k,
                        rotation: O
                    }, 11), JSProf.LRE(95159, r))), JSProf.LGD(95162, e.UA, 'ios').ios >= 2 && JSProf.LMC(95168, this, '_simulateEvent')._simulateEvent(JSProf.LGD(95163, this, 'target').target, JSProf.LRE(95164, d), JSProf.LMC(95167, e, 'merge').merge(JSProf.LNE(95165, {
                        scale: k,
                        rotation: O
                    }, 11), JSProf.LRE(95166, r)));
                }, 12),
                timeout: 0,
                context: this
            }, 11)), H = JSProf.LWR(95174, H, Math.floor(JSProf.LRE(95172, o) / JSProf.LRE(95173, b))), T = JSProf.LWR(95178, T, (JSProf.LRE(95175, x) - JSProf.LRE(95176, S)) / JSProf.LRE(95177, H)), A = JSProf.LWR(95182, A, (JSProf.LRE(95179, L) - JSProf.LRE(95180, k)) / JSProf.LRE(95181, H)), _ = JSProf.LWR(95186, _, (JSProf.LRE(95183, M) - JSProf.LRE(95184, O)) / JSProf.LRE(95185, H)), B = JSProf.LWR(95259, B, JSProf.LNF(95258, function (t) {
                var n = JSProf.LRE(95187, S) + JSProf.LRE(95188, T) * JSProf.LRE(95189, t), r = JSProf.LRE(95190, N) + JSProf.LRE(95191, n) * JSProf.LMC(95196, Math, 'sin').sin(JSProf.LMC(95195, this, '_toRadian')._toRadian(JSProf.LRE(95192, O) + JSProf.LRE(95193, _) * JSProf.LRE(95194, t))), i = JSProf.LRE(95197, C) - JSProf.LRE(95198, n) * JSProf.LMC(95203, Math, 'cos').cos(JSProf.LMC(95202, this, '_toRadian')._toRadian(JSProf.LRE(95199, O) + JSProf.LRE(95200, _) * JSProf.LRE(95201, t))), s = JSProf.LRE(95204, N) - JSProf.LRE(95205, n) * JSProf.LMC(95210, Math, 'sin').sin(JSProf.LMC(95209, this, '_toRadian')._toRadian(JSProf.LRE(95206, O) + JSProf.LRE(95207, _) * JSProf.LRE(95208, t))), o = JSProf.LRE(95211, C) + JSProf.LRE(95212, n) * JSProf.LMC(95217, Math, 'cos').cos(JSProf.LMC(95216, this, '_toRadian')._toRadian(JSProf.LRE(95213, O) + JSProf.LRE(95214, _) * JSProf.LRE(95215, t))), u = (JSProf.LRE(95218, r) + JSProf.LRE(95219, s)) / 2, a = (JSProf.LRE(95220, i) + JSProf.LRE(95221, o)) / 2, f, l, c, p;
                f = JSProf.LWR(95223, f, JSProf.LNE(95222, {
                    pageX: r,
                    pageY: i,
                    clientX: r,
                    clientY: i
                }, 11)), l = JSProf.LWR(95225, l, JSProf.LNE(95224, {
                    pageX: s,
                    pageY: o,
                    clientX: s,
                    clientY: o
                }, 11)), p = JSProf.LWR(95234, p, JSProf.LMC(95233, this, '_createTouchList')._createTouchList(JSProf.LNE(95232, [
                    JSProf.LMC(95228, e, 'merge').merge(JSProf.LNE(95226, { identifier: E++ }, 11), JSProf.LRE(95227, f)),
                    JSProf.LMC(95231, e, 'merge').merge(JSProf.LNE(95229, { identifier: E++ }, 11), JSProf.LRE(95230, l))
                ], 10))), c = JSProf.LWR(95236, c, JSProf.LNE(95235, {
                    pageX: u,
                    pageY: a,
                    clientX: u,
                    clientY: a
                }, 11)), JSProf.LMC(95246, this, '_simulateEvent')._simulateEvent(JSProf.LGD(95237, this, 'target').target, JSProf.LRE(95238, h), JSProf.LMC(95245, e, 'merge').merge(JSProf.LNE(95243, {
                    touches: p,
                    targetTouches: p,
                    changedTouches: p,
                    scale: k + JSProf.LRE(95239, A) * JSProf.LRE(95240, t),
                    rotation: O + JSProf.LRE(95241, _) * JSProf.LRE(95242, t)
                }, 11), JSProf.LRE(95244, c))), JSProf.LGD(95247, e.UA, 'ios').ios >= 2 && JSProf.LMC(95257, this, '_simulateEvent')._simulateEvent(JSProf.LGD(95248, this, 'target').target, JSProf.LRE(95249, v), JSProf.LMC(95256, e, 'merge').merge(JSProf.LNE(95254, {
                    scale: k + JSProf.LRE(95250, A) * JSProf.LRE(95251, t),
                    rotation: O + JSProf.LRE(95252, _) * JSProf.LRE(95253, t)
                }, 11), JSProf.LRE(95255, c)));
            }, 12));
            for (y = JSProf.LWR(95260, y, 0); JSProf.LRE(95261, y) < JSProf.LRE(95262, H); y++)
                JSProf.LMC(95266, g, 'add').add(JSProf.LNE(95265, {
                    fn: B,
                    args: JSProf.LNE(95264, [JSProf.LRE(95263, y)], 10),
                    context: this
                }, 11));
            JSProf.LMC(95306, g, 'add').add(JSProf.LNE(95305, {
                fn: JSProf.LNF(95304, function () {
                    var t = JSProf.LMC(95267, this, '_getEmptyTouchList')._getEmptyTouchList(), n, r, i, s;
                    n = JSProf.LWR(95269, n, JSProf.LNE(95268, {
                        pageX: D.end[0],
                        pageY: D.end[1],
                        clientX: D.end[0],
                        clientY: D.end[1]
                    }, 11)), r = JSProf.LWR(95271, r, JSProf.LNE(95270, {
                        pageX: P.end[0],
                        pageY: P.end[1],
                        clientX: P.end[0],
                        clientY: P.end[1]
                    }, 11)), s = JSProf.LWR(95280, s, JSProf.LMC(95279, this, '_createTouchList')._createTouchList(JSProf.LNE(95278, [
                        JSProf.LMC(95274, e, 'merge').merge(JSProf.LNE(95272, { identifier: E++ }, 11), JSProf.LRE(95273, n)),
                        JSProf.LMC(95277, e, 'merge').merge(JSProf.LNE(95275, { identifier: E++ }, 11), JSProf.LRE(95276, r))
                    ], 10))), i = JSProf.LWR(95290, i, JSProf.LNE(95289, {
                        pageX: (JSProf.LGE(95281, D.end, 0)[0] + JSProf.LGE(95282, P.end, 0)[0]) / 2,
                        pageY: (JSProf.LGE(95283, D.end, 0)[0] + JSProf.LGE(95284, P.end, 1)[1]) / 2,
                        clientX: (JSProf.LGE(95285, D.end, 0)[0] + JSProf.LGE(95286, P.end, 0)[0]) / 2,
                        clientY: (JSProf.LGE(95287, D.end, 0)[0] + JSProf.LGE(95288, P.end, 1)[1]) / 2
                    }, 11)), JSProf.LGD(95291, e.UA, 'ios').ios >= 2 && JSProf.LMC(95297, this, '_simulateEvent')._simulateEvent(JSProf.LGD(95292, this, 'target').target, JSProf.LRE(95293, m), JSProf.LMC(95296, e, 'merge').merge(JSProf.LNE(95294, {
                        scale: L,
                        rotation: M
                    }, 11), JSProf.LRE(95295, i))), JSProf.LMC(95303, this, '_simulateEvent')._simulateEvent(JSProf.LGD(95298, this, 'target').target, JSProf.LRE(95299, p), JSProf.LMC(95302, e, 'merge').merge(JSProf.LNE(95300, {
                        touches: t,
                        targetTouches: t,
                        changedTouches: s,
                        scale: L,
                        rotation: M
                    }, 11), JSProf.LRE(95301, i)));
                }, 12),
                context: this
            }, 11)), JSProf.LRE(95307, n) && JSProf.LMC(95309, e.Lang, 'isFunction').isFunction(JSProf.LRE(95308, n)) && JSProf.LMC(95311, g, 'add').add(JSProf.LNE(95310, {
                fn: n,
                context: this.node
            }, 11)), JSProf.LMC(95312, g, 'run').run();
        }, 12),
        tap: JSProf.LNF(95379, function (t, r, i, s, o) {
            var u = JSProf.LNE(95315, new (JSProf.LMC(95314, e, 'AsyncQueue')).AsyncQueue(), 40), a = JSProf.LMC(95316, this, '_getEmptyTouchList')._getEmptyTouchList(), f, h, d, v, m;
            r = JSProf.LWR(95319, r, JSProf.LMC(95318, this, '_calculateDefaultPoint')._calculateDefaultPoint(JSProf.LRE(95317, r)));
            if (!JSProf.LMC(95321, e.Lang, 'isNumber').isNumber(JSProf.LRE(95320, i)) || JSProf.LRE(95322, i) < 1)
                i = JSProf.LWR(95323, i, 1);
            JSProf.LMC(95325, e.Lang, 'isNumber').isNumber(JSProf.LRE(95324, s)) || (s = JSProf.LWR(95327, s, JSProf.LGD(95326, l, 'HOLD_TAP').HOLD_TAP)), JSProf.LMC(95329, e.Lang, 'isNumber').isNumber(JSProf.LRE(95328, o)) || (o = JSProf.LWR(95331, o, JSProf.LGD(95330, l, 'DELAY_TAP').DELAY_TAP)), h = JSProf.LWR(95333, h, JSProf.LNE(95332, {
                pageX: r[0],
                pageY: r[1],
                clientX: r[0],
                clientY: r[1]
            }, 11)), f = JSProf.LWR(95339, f, JSProf.LMC(95338, this, '_createTouchList')._createTouchList(JSProf.LNE(95337, [JSProf.LMC(95336, e, 'merge').merge(JSProf.LNE(95334, { identifier: 0 }, 11), JSProf.LRE(95335, h))], 10))), v = JSProf.LWR(95347, v, JSProf.LNF(95346, function () {
                JSProf.LMC(95345, this, '_simulateEvent')._simulateEvent(JSProf.LGD(95340, this, 'target').target, JSProf.LRE(95341, c), JSProf.LMC(95344, e, 'merge').merge(JSProf.LNE(95342, {
                    touches: f,
                    targetTouches: f,
                    changedTouches: f
                }, 11), JSProf.LRE(95343, h)));
            }, 12)), m = JSProf.LWR(95355, m, JSProf.LNF(95354, function () {
                JSProf.LMC(95353, this, '_simulateEvent')._simulateEvent(JSProf.LGD(95348, this, 'target').target, JSProf.LRE(95349, p), JSProf.LMC(95352, e, 'merge').merge(JSProf.LNE(95350, {
                    touches: a,
                    targetTouches: a,
                    changedTouches: f
                }, 11), JSProf.LRE(95351, h)));
            }, 12));
            for (d = JSProf.LWR(95356, d, 0); JSProf.LRE(95357, d) < JSProf.LRE(95358, i); d++)
                JSProf.LMC(95361, u, 'add').add(JSProf.LNE(95360, {
                    fn: v,
                    context: this,
                    timeout: JSProf.LRE(95359, d) === 0 ? 0 : o
                }, 11)), JSProf.LMC(95363, u, 'add').add(JSProf.LNE(95362, {
                    fn: m,
                    context: this,
                    timeout: s
                }, 11));
            JSProf.LRE(95364, i) > 1 && !JSProf.LRE(95365, n) && JSProf.LMC(95372, u, 'add').add(JSProf.LNE(95371, {
                fn: JSProf.LNF(95370, function () {
                    JSProf.LMC(95369, this, '_simulateEvent')._simulateEvent(JSProf.LGD(95366, this, 'target').target, JSProf.LRE(95367, E), JSProf.LRE(95368, h));
                }, 12),
                context: this
            }, 11)), JSProf.LRE(95373, t) && JSProf.LMC(95375, e.Lang, 'isFunction').isFunction(JSProf.LRE(95374, t)) && JSProf.LMC(95377, u, 'add').add(JSProf.LNE(95376, {
                fn: t,
                context: this.node
            }, 11)), JSProf.LMC(95378, u, 'run').run();
        }, 12),
        flick: JSProf.LNF(95433, function (n, r, i, s, o) {
            var u;
            r = JSProf.LWR(95382, r, JSProf.LMC(95381, this, '_calculateDefaultPoint')._calculateDefaultPoint(JSProf.LRE(95380, r))), JSProf.LMC(95384, e.Lang, 'isString').isString(JSProf.LRE(95383, i)) ? (i = JSProf.LWR(95385, i, i.toLowerCase()), JSProf.LRE(95386, i) !== JSProf.LRE(95387, S) && JSProf.LRE(95388, i) !== JSProf.LRE(95389, x) && JSProf.LMC(95391, e, 'error').error(JSProf.LRE(95390, t) + "(flick): Only x or y axis allowed")) : i = JSProf.LWR(95393, i, JSProf.LRE(95392, S)), JSProf.LMC(95395, e.Lang, 'isNumber').isNumber(JSProf.LRE(95394, s)) || (s = JSProf.LWR(95397, s, JSProf.LGD(95396, l, 'DISTANCE_FLICK').DISTANCE_FLICK)), JSProf.LMC(95399, e.Lang, 'isNumber').isNumber(JSProf.LRE(95398, o)) ? JSProf.LRE(95400, o) > JSProf.LGD(95401, l, 'MAX_DURATION_FLICK').MAX_DURATION_FLICK && (o = JSProf.LWR(95403, o, JSProf.LGD(95402, l, 'MAX_DURATION_FLICK').MAX_DURATION_FLICK)) : o = JSProf.LWR(95405, o, JSProf.LGD(95404, l, 'DURATION_FLICK').DURATION_FLICK), JSProf.LMC(95407, Math, 'abs').abs(JSProf.LRE(95406, s)) / JSProf.LRE(95408, o) < JSProf.LGD(95409, l, 'MIN_VELOCITY_FLICK').MIN_VELOCITY_FLICK && (o = JSProf.LWR(95413, o, JSProf.LMC(95411, Math, 'abs').abs(JSProf.LRE(95410, s)) / JSProf.LGD(95412, l, 'MIN_VELOCITY_FLICK').MIN_VELOCITY_FLICK)), u = JSProf.LWR(95428, u, JSProf.LNE(95427, {
                start: JSProf.LMC(95415, e, 'clone').clone(JSProf.LRE(95414, r)),
                end: JSProf.LNE(95426, [
                    JSProf.LRE(95416, i) === JSProf.LRE(95417, S) ? JSProf.LGE(95418, r, 0)[0] + JSProf.LRE(95419, s) : JSProf.LGE(95420, r, 0)[0],
                    JSProf.LRE(95421, i) === JSProf.LRE(95422, x) ? JSProf.LGE(95423, r, 1)[1] + JSProf.LRE(95424, s) : JSProf.LGE(95425, r, 1)[1]
                ], 10)
            }, 11)), JSProf.LMC(95432, this, '_move')._move(JSProf.LRE(95429, n), JSProf.LRE(95430, u), JSProf.LRE(95431, o));
        }, 12),
        move: JSProf.LNF(95476, function (t, n, r) {
            var i;
            JSProf.LMC(95435, e.Lang, 'isObject').isObject(JSProf.LRE(95434, n)) ? (JSProf.LMC(95437, e.Lang, 'isArray').isArray(JSProf.LGD(95436, n, 'point').point) ? JSProf.LPD(95440, n, 'point').point = JSProf.LRSP(95440, JSProf.LMC(95439, this, '_calculateDefaultPoint')._calculateDefaultPoint(JSProf.LGD(95438, n, 'point').point)) : JSProf.LPD(95443, n, 'point').point = JSProf.LRSP(95443, JSProf.LMC(95442, this, '_calculateDefaultPoint')._calculateDefaultPoint(JSProf.LNE(95441, [], 10))), JSProf.LMC(95445, e.Lang, 'isNumber').isNumber(JSProf.LGD(95444, n, 'xdist').xdist) || (JSProf.LPD(95447, n, 'xdist').xdist = JSProf.LRSP(95447, JSProf.LGD(95446, l, 'DISTANCE_MOVE').DISTANCE_MOVE)), JSProf.LMC(95449, e.Lang, 'isNumber').isNumber(JSProf.LGD(95448, n, 'ydist').ydist) || (JSProf.LPD(95450, n, 'ydist').ydist = JSProf.LRSP(95450, 0))) : n = JSProf.LWR(95454, n, JSProf.LNE(95453, {
                point: JSProf.LMC(95452, this, '_calculateDefaultPoint')._calculateDefaultPoint(JSProf.LNE(95451, [], 10)),
                xdist: l.DISTANCE_MOVE,
                ydist: 0
            }, 11)), JSProf.LMC(95456, e.Lang, 'isNumber').isNumber(JSProf.LRE(95455, r)) ? JSProf.LRE(95457, r) > JSProf.LGD(95458, l, 'MAX_DURATION_MOVE').MAX_DURATION_MOVE && (r = JSProf.LWR(95460, r, JSProf.LGD(95459, l, 'MAX_DURATION_MOVE').MAX_DURATION_MOVE)) : r = JSProf.LWR(95462, r, JSProf.LGD(95461, l, 'DURATION_MOVE').DURATION_MOVE), i = JSProf.LWR(95471, i, JSProf.LNE(95470, {
                start: JSProf.LMC(95464, e, 'clone').clone(JSProf.LGD(95463, n, 'point').point),
                end: JSProf.LNE(95469, [
                    JSProf.LGE(95465, n.point, 0)[0] + JSProf.LGD(95466, n, 'xdist').xdist,
                    JSProf.LGE(95467, n.point, 1)[1] + JSProf.LGD(95468, n, 'ydist').ydist
                ], 10)
            }, 11)), JSProf.LMC(95475, this, '_move')._move(JSProf.LRE(95472, t), JSProf.LRE(95473, i), JSProf.LRE(95474, r));
        }, 12),
        _move: JSProf.LNF(95605, function (t, n, r) {
            var i, s, o = JSProf.LRE(95477, u), d, v, m, g = 0, y;
            JSProf.LMC(95479, e.Lang, 'isNumber').isNumber(JSProf.LRE(95478, r)) ? JSProf.LRE(95480, r) > JSProf.LGD(95481, l, 'MAX_DURATION_MOVE').MAX_DURATION_MOVE && (r = JSProf.LWR(95483, r, JSProf.LGD(95482, l, 'MAX_DURATION_MOVE').MAX_DURATION_MOVE)) : r = JSProf.LWR(95485, r, JSProf.LGD(95484, l, 'DURATION_MOVE').DURATION_MOVE), JSProf.LMC(95487, e.Lang, 'isObject').isObject(JSProf.LRE(95486, n)) ? (JSProf.LMC(95489, e.Lang, 'isArray').isArray(JSProf.LGD(95488, n, 'start').start) || (JSProf.LPD(95493, n, 'start').start = JSProf.LRSP(95493, JSProf.LNE(95492, [
                JSProf.LRE(95490, a),
                JSProf.LRE(95491, f)
            ], 10))), JSProf.LMC(95495, e.Lang, 'isArray').isArray(JSProf.LGD(95494, n, 'end').end) || (JSProf.LPD(95500, n, 'end').end = JSProf.LRSP(95500, JSProf.LNE(95499, [
                JSProf.LRE(95496, a) + JSProf.LGD(95497, l, 'DISTANCE_MOVE').DISTANCE_MOVE,
                JSProf.LRE(95498, f)
            ], 10)))) : n = JSProf.LWR(95509, n, JSProf.LNE(95508, {
                start: JSProf.LNE(95503, [
                    JSProf.LRE(95501, a),
                    JSProf.LRE(95502, f)
                ], 10),
                end: JSProf.LNE(95507, [
                    JSProf.LRE(95504, a) + JSProf.LGD(95505, l, 'DISTANCE_MOVE').DISTANCE_MOVE,
                    JSProf.LRE(95506, f)
                ], 10)
            }, 11)), JSProf.LPD(95511, e.AsyncQueue.defaults, 'timeout').timeout = JSProf.LRSP(95511, JSProf.LRE(95510, o)), i = JSProf.LWR(95514, i, JSProf.LNE(95513, new (JSProf.LMC(95512, e, 'AsyncQueue')).AsyncQueue(), 40)), JSProf.LMC(95529, i, 'add').add(JSProf.LNE(95528, {
                fn: JSProf.LNF(95527, function () {
                    var t = JSProf.LNE(95515, {
                            pageX: n.start[0],
                            pageY: n.start[1],
                            clientX: n.start[0],
                            clientY: n.start[1]
                        }, 11), r = JSProf.LMC(95520, this, '_createTouchList')._createTouchList(JSProf.LNE(95519, [JSProf.LMC(95518, e, 'merge').merge(JSProf.LNE(95516, { identifier: g++ }, 11), JSProf.LRE(95517, t))], 10));
                    JSProf.LMC(95526, this, '_simulateEvent')._simulateEvent(JSProf.LGD(95521, this, 'target').target, JSProf.LRE(95522, c), JSProf.LMC(95525, e, 'merge').merge(JSProf.LNE(95523, {
                        touches: r,
                        targetTouches: r,
                        changedTouches: r
                    }, 11), JSProf.LRE(95524, t)));
                }, 12),
                timeout: 0,
                context: this
            }, 11)), d = JSProf.LWR(95532, d, Math.floor(JSProf.LRE(95530, r) / JSProf.LRE(95531, o))), v = JSProf.LWR(95536, v, (JSProf.LGE(95533, n.end, 0)[0] - JSProf.LGE(95534, n.start, 0)[0]) / JSProf.LRE(95535, d)), m = JSProf.LWR(95540, m, (JSProf.LGE(95537, n.end, 1)[1] - JSProf.LGE(95538, n.start, 1)[1]) / JSProf.LRE(95539, d)), y = JSProf.LWR(95560, y, JSProf.LNF(95559, function (t) {
                var r = JSProf.LGE(95541, n.start, 0)[0] + JSProf.LRE(95542, v) * JSProf.LRE(95543, t), i = JSProf.LGE(95544, n.start, 1)[1] + JSProf.LRE(95545, m) * JSProf.LRE(95546, t), s = JSProf.LNE(95547, {
                        pageX: r,
                        pageY: i,
                        clientX: r,
                        clientY: i
                    }, 11), o = JSProf.LMC(95552, this, '_createTouchList')._createTouchList(JSProf.LNE(95551, [JSProf.LMC(95550, e, 'merge').merge(JSProf.LNE(95548, { identifier: g++ }, 11), JSProf.LRE(95549, s))], 10));
                JSProf.LMC(95558, this, '_simulateEvent')._simulateEvent(JSProf.LGD(95553, this, 'target').target, JSProf.LRE(95554, h), JSProf.LMC(95557, e, 'merge').merge(JSProf.LNE(95555, {
                    touches: o,
                    targetTouches: o,
                    changedTouches: o
                }, 11), JSProf.LRE(95556, s)));
            }, 12));
            for (s = JSProf.LWR(95561, s, 0); JSProf.LRE(95562, s) < JSProf.LRE(95563, d); s++)
                JSProf.LMC(95567, i, 'add').add(JSProf.LNE(95566, {
                    fn: y,
                    args: JSProf.LNE(95565, [JSProf.LRE(95564, s)], 10),
                    context: this
                }, 11));
            JSProf.LMC(95582, i, 'add').add(JSProf.LNE(95581, {
                fn: JSProf.LNF(95580, function () {
                    var t = JSProf.LNE(95568, {
                            pageX: n.end[0],
                            pageY: n.end[1],
                            clientX: n.end[0],
                            clientY: n.end[1]
                        }, 11), r = JSProf.LMC(95573, this, '_createTouchList')._createTouchList(JSProf.LNE(95572, [JSProf.LMC(95571, e, 'merge').merge(JSProf.LNE(95569, { identifier: g }, 11), JSProf.LRE(95570, t))], 10));
                    JSProf.LMC(95579, this, '_simulateEvent')._simulateEvent(JSProf.LGD(95574, this, 'target').target, JSProf.LRE(95575, h), JSProf.LMC(95578, e, 'merge').merge(JSProf.LNE(95576, {
                        touches: r,
                        targetTouches: r,
                        changedTouches: r
                    }, 11), JSProf.LRE(95577, t)));
                }, 12),
                timeout: 0,
                context: this
            }, 11)), JSProf.LMC(95598, i, 'add').add(JSProf.LNE(95597, {
                fn: JSProf.LNF(95596, function () {
                    var t = JSProf.LNE(95583, {
                            pageX: n.end[0],
                            pageY: n.end[1],
                            clientX: n.end[0],
                            clientY: n.end[1]
                        }, 11), r = JSProf.LMC(95584, this, '_getEmptyTouchList')._getEmptyTouchList(), i = JSProf.LMC(95589, this, '_createTouchList')._createTouchList(JSProf.LNE(95588, [JSProf.LMC(95587, e, 'merge').merge(JSProf.LNE(95585, { identifier: g }, 11), JSProf.LRE(95586, t))], 10));
                    JSProf.LMC(95595, this, '_simulateEvent')._simulateEvent(JSProf.LGD(95590, this, 'target').target, JSProf.LRE(95591, p), JSProf.LMC(95594, e, 'merge').merge(JSProf.LNE(95592, {
                        touches: r,
                        targetTouches: r,
                        changedTouches: i
                    }, 11), JSProf.LRE(95593, t)));
                }, 12),
                context: this
            }, 11)), JSProf.LRE(95599, t) && JSProf.LMC(95601, e.Lang, 'isFunction').isFunction(JSProf.LRE(95600, t)) && JSProf.LMC(95603, i, 'add').add(JSProf.LNE(95602, {
                fn: t,
                context: this.node
            }, 11)), JSProf.LMC(95604, i, 'run').run();
        }, 12),
        _getEmptyTouchList: JSProf.LNF(95611, function () {
            return JSProf.LRE(95606, o) || (o = JSProf.LWR(95609, o, JSProf.LMC(95608, this, '_createTouchList')._createTouchList(JSProf.LNE(95607, [], 10)))), JSProf.LRE(95610, o);
        }, 12),
        _createTouchList: JSProf.LNF(95677, function (n) {
            var r = JSProf.LNE(95612, [], 10), i, o = this;
            return !!JSProf.LRE(95613, n) && JSProf.LMC(95615, e.Lang, 'isArray').isArray(JSProf.LRE(95614, n)) ? JSProf.LGD(95616, e.UA, 'android').android && JSProf.LGD(95617, e.UA, 'android').android >= 4 || JSProf.LGD(95618, e.UA, 'ios').ios && JSProf.LGD(95619, e.UA, 'ios').ios >= 2 ? (JSProf.LMC(95641, e, 'each').each(JSProf.LRE(95620, n), JSProf.LNF(95640, function (t) {
                JSProf.LGD(95621, t, 'identifier').identifier || (JSProf.LPD(95622, t, 'identifier').identifier = JSProf.LRSP(95622, 0)), JSProf.LGD(95623, t, 'pageX').pageX || (JSProf.LPD(95624, t, 'pageX').pageX = JSProf.LRSP(95624, 0)), JSProf.LGD(95625, t, 'pageY').pageY || (JSProf.LPD(95626, t, 'pageY').pageY = JSProf.LRSP(95626, 0)), JSProf.LGD(95627, t, 'screenX').screenX || (JSProf.LPD(95628, t, 'screenX').screenX = JSProf.LRSP(95628, 0)), JSProf.LGD(95629, t, 'screenY').screenY || (JSProf.LPD(95630, t, 'screenY').screenY = JSProf.LRSP(95630, 0)), JSProf.LMC(95639, r, 'push').push(JSProf.LMC(95638, s, 'createTouch').createTouch(JSProf.LGD(95631, e.config, 'win').win, JSProf.LGD(95632, o, 'target').target, JSProf.LGD(95633, t, 'identifier').identifier, JSProf.LGD(95634, t, 'pageX').pageX, JSProf.LGD(95635, t, 'pageY').pageY, JSProf.LGD(95636, t, 'screenX').screenX, JSProf.LGD(95637, t, 'screenY').screenY));
            }, 12)), i = JSProf.LWR(95645, i, JSProf.LMC(95644, s.createTouchList, 'apply').apply(JSProf.LRE(95642, s), JSProf.LRE(95643, r)))) : JSProf.LGD(95646, e.UA, 'ios').ios && JSProf.LGD(95647, e.UA, 'ios').ios < 2 ? JSProf.LMC(95649, e, 'error').error(JSProf.LRE(95648, t) + ": No touch event simulation framework present.") : (i = JSProf.LWR(95651, i, JSProf.LNE(95650, [], 10)), JSProf.LMC(95670, e, 'each').each(JSProf.LRE(95652, n), JSProf.LNF(95669, function (e) {
                JSProf.LGD(95653, e, 'identifier').identifier || (JSProf.LPD(95654, e, 'identifier').identifier = JSProf.LRSP(95654, 0)), JSProf.LGD(95655, e, 'clientX').clientX || (JSProf.LPD(95656, e, 'clientX').clientX = JSProf.LRSP(95656, 0)), JSProf.LGD(95657, e, 'clientY').clientY || (JSProf.LPD(95658, e, 'clientY').clientY = JSProf.LRSP(95658, 0)), JSProf.LGD(95659, e, 'pageX').pageX || (JSProf.LPD(95660, e, 'pageX').pageX = JSProf.LRSP(95660, 0)), JSProf.LGD(95661, e, 'pageY').pageY || (JSProf.LPD(95662, e, 'pageY').pageY = JSProf.LRSP(95662, 0)), JSProf.LGD(95663, e, 'screenX').screenX || (JSProf.LPD(95664, e, 'screenX').screenX = JSProf.LRSP(95664, 0)), JSProf.LGD(95665, e, 'screenY').screenY || (JSProf.LPD(95666, e, 'screenY').screenY = JSProf.LRSP(95666, 0)), JSProf.LMC(95668, i, 'push').push(JSProf.LNE(95667, {
                    target: o.target,
                    identifier: e.identifier,
                    clientX: e.clientX,
                    clientY: e.clientY,
                    pageX: e.pageX,
                    pageY: e.pageY,
                    screenX: e.screenX,
                    screenY: e.screenY
                }, 11));
            }, 12)), JSProf.LPD(95673, i, 'item').item = JSProf.LRSP(95673, JSProf.LNF(95672, function (e) {
                return JSProf.LGE(95671, i, 'e')[e];
            }, 12))) : JSProf.LMC(95675, e, 'error').error(JSProf.LRE(95674, t) + ": Invalid touchPoints passed"), JSProf.LRE(95676, i);
        }, 12),
        _simulateEvent: JSProf.LNF(95721, function (t, r, s) {
            var o;
            JSProf.LGE(95678, i, 'r')[r] ? JSProf.LRE(95679, n) ? JSProf.LMC(95683, e.Event, 'simulate').simulate(JSProf.LRE(95680, t), JSProf.LRE(95681, r), JSProf.LRE(95682, s)) : JSProf.LMC(95687, this, '_isSingleTouch')._isSingleTouch(JSProf.LGD(95684, s, 'touches').touches, JSProf.LGD(95685, s, 'targetTouches').targetTouches, JSProf.LGD(95686, s, 'changedTouches').changedTouches) ? (r = JSProf.LWR(95690, r, JSProf.LGE(95689, JSProf.LNE(95688, {
                touchstart: b,
                touchmove: y,
                touchend: g
            }, 11), 'r')[r]), JSProf.LPD(95691, s, 'button').button = JSProf.LRSP(95691, 0), s.relatedTarget = null, o = JSProf.LWR(95696, o, JSProf.LRE(95692, r) === JSProf.LRE(95693, g) ? JSProf.LGD(95694, s, 'changedTouches').changedTouches : JSProf.LGD(95695, s, 'touches').touches), s = JSProf.LWR(95704, s, JSProf.LMC(95703, e, 'mix').mix(JSProf.LRE(95697, s), JSProf.LNE(95702, {
                screenX: JSProf.LMC(95698, o, 'item').item(0).screenX,
                screenY: JSProf.LMC(95699, o, 'item').item(0).screenY,
                clientX: JSProf.LMC(95700, o, 'item').item(0).clientX,
                clientY: JSProf.LMC(95701, o, 'item').item(0).clientY
            }, 11), !0)), JSProf.LMC(95708, e.Event, 'simulate').simulate(JSProf.LRE(95705, t), JSProf.LRE(95706, r), JSProf.LRE(95707, s)), JSProf.LRE(95709, r) == JSProf.LRE(95710, g) && JSProf.LMC(95714, e.Event, 'simulate').simulate(JSProf.LRE(95711, t), JSProf.LRE(95712, w), JSProf.LRE(95713, s))) : JSProf.LMC(95716, e, 'error').error("_simulateEvent(): Event '" + JSProf.LRE(95715, r) + "' has multi touch objects that can't be simulated in your platform.") : JSProf.LMC(95720, e.Event, 'simulate').simulate(JSProf.LRE(95717, t), JSProf.LRE(95718, r), JSProf.LRE(95719, s));
        }, 12),
        _isSingleTouch: JSProf.LNF(95728, function (e, t, n) {
            return JSProf.LRE(95722, e) && JSProf.LGD(95723, e, 'length').length <= 1 && JSProf.LRE(95724, t) && JSProf.LGD(95725, t, 'length').length <= 1 && JSProf.LRE(95726, n) && JSProf.LGD(95727, n, 'length').length <= 1;
        }, 12)
    }, 11)), JSProf.LPD(95732, e, 'GestureSimulation').GestureSimulation = JSProf.LRSP(95732, JSProf.LRE(95731, T)), JSProf.LPD(95734, e.GestureSimulation, 'defaults').defaults = JSProf.LRSP(95734, JSProf.LRE(95733, l)), JSProf.LPD(95736, e.GestureSimulation, 'GESTURES').GESTURES = JSProf.LRSP(95736, JSProf.LRE(95735, r)), JSProf.LPD(95811, e.Event, 'simulateGesture').simulateGesture = JSProf.LRSP(95811, JSProf.LNF(95810, function (n, i, s, o) {
        n = JSProf.LWR(95739, n, JSProf.LMC(95738, e, 'one').one(JSProf.LRE(95737, n)));
        var u = JSProf.LNE(95742, new (JSProf.LMC(95741, e, 'GestureSimulation')).GestureSimulation(JSProf.LRE(95740, n)), 40);
        i = JSProf.LWR(95743, i, i.toLowerCase()), !JSProf.LRE(95744, o) && JSProf.LMC(95746, e.Lang, 'isFunction').isFunction(JSProf.LRE(95745, s)) && (o = JSProf.LWR(95748, o, JSProf.LRE(95747, s)), s = JSProf.LWR(95750, s, JSProf.LNE(95749, {}, 11))), s = JSProf.LWR(95753, s, JSProf.LRE(95751, s) || JSProf.LNE(95752, {}, 11));
        if (JSProf.LGE(95754, r, 'i')[i])
            switch (JSProf.LRE(95755, i)) {
            case "tap":
                JSProf.LMC(95761, u, 'tap').tap(JSProf.LRE(95756, o), JSProf.LGD(95757, s, 'point').point, JSProf.LGD(95758, s, 'times').times, JSProf.LGD(95759, s, 'hold').hold, JSProf.LGD(95760, s, 'delay').delay);
                break;
            case "doubletap":
                JSProf.LMC(95764, u, 'tap').tap(JSProf.LRE(95762, o), JSProf.LGD(95763, s, 'point').point, 2);
                break;
            case "press":
                JSProf.LMC(95766, e.Lang, 'isNumber').isNumber(JSProf.LGD(95765, s, 'hold').hold) ? JSProf.LGD(95767, s, 'hold').hold < JSProf.LGD(95768, l, 'MIN_HOLD_PRESS').MIN_HOLD_PRESS ? JSProf.LPD(95770, s, 'hold').hold = JSProf.LRSP(95770, JSProf.LGD(95769, l, 'MIN_HOLD_PRESS').MIN_HOLD_PRESS) : JSProf.LGD(95771, s, 'hold').hold > JSProf.LGD(95772, l, 'MAX_HOLD_PRESS').MAX_HOLD_PRESS && (JSProf.LPD(95774, s, 'hold').hold = JSProf.LRSP(95774, JSProf.LGD(95773, l, 'MAX_HOLD_PRESS').MAX_HOLD_PRESS)) : JSProf.LPD(95776, s, 'hold').hold = JSProf.LRSP(95776, JSProf.LGD(95775, l, 'HOLD_PRESS').HOLD_PRESS), JSProf.LMC(95780, u, 'tap').tap(JSProf.LRE(95777, o), JSProf.LGD(95778, s, 'point').point, 1, JSProf.LGD(95779, s, 'hold').hold);
                break;
            case "move":
                JSProf.LMC(95784, u, 'move').move(JSProf.LRE(95781, o), JSProf.LGD(95782, s, 'path').path, JSProf.LGD(95783, s, 'duration').duration);
                break;
            case "flick":
                JSProf.LMC(95790, u, 'flick').flick(JSProf.LRE(95785, o), JSProf.LGD(95786, s, 'point').point, JSProf.LGD(95787, s, 'axis').axis, JSProf.LGD(95788, s, 'distance').distance, JSProf.LGD(95789, s, 'duration').duration);
                break;
            case "pinch":
                JSProf.LMC(95798, u, 'pinch').pinch(JSProf.LRE(95791, o), JSProf.LGD(95792, s, 'center').center, JSProf.LGD(95793, s, 'r1').r1, JSProf.LGD(95794, s, 'r2').r2, JSProf.LGD(95795, s, 'duration').duration, JSProf.LGD(95796, s, 'start').start, JSProf.LGD(95797, s, 'rotation').rotation);
                break;
            case "rotate":
                JSProf.LMC(95806, u, 'rotate').rotate(JSProf.LRE(95799, o), JSProf.LGD(95800, s, 'center').center, JSProf.LGD(95801, s, 'r1').r1, JSProf.LGD(95802, s, 'r2').r2, JSProf.LGD(95803, s, 'duration').duration, JSProf.LGD(95804, s, 'start').start, JSProf.LGD(95805, s, 'rotation').rotation);
            }
        else
            JSProf.LMC(95809, e, 'error').error(JSProf.LRE(95807, t) + ": Not a supported gesture simulation: " + JSProf.LRE(95808, i));
    }, 12));
}, 12), "3.14.1", JSProf.LNE(95815, {
    requires: JSProf.LNE(95814, [
        "async-queue",
        "event-simulate",
        "node-screen"
    ], 10)
}, 11));
/*
YUI 3.14.1 (build 63049cb)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
JSProf.LMC(95832, YUI, 'add').add("node-event-simulate", JSProf.LNF(95829, function (e, t) {
    JSProf.LPD(95822, e.Node.prototype, 'simulate').simulate = JSProf.LRSP(95822, JSProf.LNF(95821, function (t, n) {
        JSProf.LMC(95820, e.Event, 'simulate').simulate(JSProf.LMC(95817, e.Node, 'getDOMNode').getDOMNode(this), JSProf.LRE(95818, t), JSProf.LRE(95819, n));
    }, 12)), JSProf.LPD(95828, e.Node.prototype, 'simulateGesture').simulateGesture = JSProf.LRSP(95828, JSProf.LNF(95827, function (t, n, r) {
        JSProf.LMC(95826, e.Event, 'simulateGesture').simulateGesture(this, JSProf.LRE(95823, t), JSProf.LRE(95824, n), JSProf.LRE(95825, r));
    }, 12));
}, 12), "3.14.1", JSProf.LNE(95831, {
    requires: JSProf.LNE(95830, [
        "node-base",
        "event-simulate",
        "gesture-simulate"
    ], 10)
}, 11));