require = JSProf.LWU(12, JSProf.I(typeof require === 'undefined' ? undefined : require), JSProf.LNE(11, {
    async: true,
    parseOnLoad: true,
    locale: 'en',
    debug: true,
    paths: JSProf.LNE(6, { dijit: '../dijit' }, 11),
    deps: JSProf.LNE(7, [
        'dojo/parser',
        'dojo/domReady!'
    ], 10),
    mvc: JSProf.LNE(8, { debugBindings: true }, 11),
    packages: JSProf.LNE(10, [JSProf.LNE(9, {
            name: 'todo',
            location: '../../js/todo'
        }, 11)], 10)
}, 11));