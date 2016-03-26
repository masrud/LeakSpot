JSProf.LFC(58255, JSProf.LNF(58254, function () {
    var ownerDoc = JSProf.LGD(58242, document.currentScript, 'ownerDocument').ownerDocument;
    var proto = JSProf.LMC(58244, Object, 'create').create(JSProf.LGD(58243, HTMLElement, 'prototype').prototype);
    JSProf.LPD(58250, proto, 'createdCallback').createdCallback = JSProf.LRSP(58250, JSProf.LNF(58249, function () {
        var templ = JSProf.LMC(58245, ownerDoc, 'querySelector').querySelector('template');
        JSProf.LMC(58248, JSProf.LMC(58246, this, 'createShadowRoot').createShadowRoot(), 'appendChild').appendChild(JSProf.LMC(58247, templ.content, 'cloneNode').cloneNode(true));
    }, 12));
    JSProf.LPD(58253, window, 'DoodleNotifier').DoodleNotifier = JSProf.LRSP(58253, JSProf.LMC(58252, document, 'registerElement').registerElement('doodle-notifier', JSProf.LNE(58251, { prototype: proto }, 11)));
}, 12), false)();