JSProf.LFC(2688, JSProf.LNF(2687, function () {
    var ownerDoc = JSProf.LGD(2675, document.currentScript, 'ownerDocument').ownerDocument;
    var proto = JSProf.LMC(2677, Object, 'create').create(JSProf.LGD(2676, HTMLElement, 'prototype').prototype);
    JSProf.LPD(2683, proto, 'createdCallback').createdCallback = JSProf.LRSP(2683, JSProf.LNF(2682, function () {
        var templ = JSProf.LMC(2678, ownerDoc, 'querySelector').querySelector('template');
        JSProf.LMC(2681, JSProf.LMC(2679, this, 'createShadowRoot').createShadowRoot(), 'appendChild').appendChild(JSProf.LMC(2680, templ.content, 'cloneNode').cloneNode(true));
    }, 12));
    JSProf.LPD(2686, window, 'DoodleNotifier').DoodleNotifier = JSProf.LRSP(2686, JSProf.LMC(2685, document, 'registerElement').registerElement('doodle-notifier', JSProf.LNE(2684, { prototype: proto }, 11)));
}, 12), false)();