/*global YUI*/
JSProf.LMC(55411, YUI, 'add').add('todo-view', JSProf.LNF(55408, function (Y) {
    'use strict';
    // -- Todo View -------------------
    var TodoView = JSProf.LMC(55404, Y.Base, 'create').create('todoView', JSProf.LGD(55342, Y, 'View').View, JSProf.LNE(55343, [], 10), JSProf.LNE(55403, {
            containerTemplate: '<li>',
            template: JSProf.LMC(55346, Y.Handlebars, 'compile').compile(JSProf.LMC(55345, JSProf.LMC(55344, Y, 'one').one('#item-template'), 'getHTML').getHTML()),
            events: JSProf.LNE(55352, {
                '.toggle': JSProf.LNE(55347, { click: 'toggleComplete' }, 11),
                'label': JSProf.LNE(55348, { dblclick: 'edit' }, 11),
                '.edit': JSProf.LNE(55349, {
                    blur: 'close',
                    keypress: 'enterUpdate'
                }, 11),
                '.destroy': JSProf.LNE(55350, { click: 'clear' }, 11),
                '.removeJustView': JSProf.LNE(55351, {}, 11)
            }, 11),
            initializer: JSProf.LNF(55361, function () {
                var model = JSProf.LMC(55353, this, 'get').get('model');
                JSProf.LMC(55355, model, 'after').after('change', JSProf.LGD(55354, this, 'render').render, this);
                JSProf.LMC(55357, model, 'after').after('change', JSProf.LNF(55356, function () {
                }, 12), this);
                JSProf.LMC(55360, model, 'after').after('removeJustView', JSProf.LNF(55359, function () {
                    //console.log("After removeVies.................********************");
                    JSProf.LMC(55358, this, 'clearJustView').clearJustView();
                }, 12), this);
            }, 12),
            render: JSProf.LNF(55371, function () {
                var container = JSProf.LMC(55362, this, 'get').get('container');
                var model = JSProf.LMC(55363, this, 'get').get('model');
                JSProf.LMC(55366, container, 'setHTML').setHTML(JSProf.LMC(55365, this, 'template').template(JSProf.LMC(55364, model, 'toJSON').toJSON()));
                JSProf.LMC(55368, container, 'toggleClass').toggleClass('completed', JSProf.LMC(55367, model, 'get').get('completed'));
                JSProf.LMC(55370, this, 'set').set('inputNode', JSProf.LMC(55369, container, 'one').one('.edit'));
                return this;
            }, 12),
            toggleComplete: JSProf.LNF(55374, function () {
                JSProf.LMC(55373, JSProf.LMC(55372, this, 'get').get('model'), 'toggle').toggle();
            }, 12),
            edit: JSProf.LNF(55381, function () {
                var input = JSProf.LMC(55375, this, 'get').get('inputNode');
                JSProf.LMC(55377, JSProf.LMC(55376, this, 'get').get('container'), 'addClass').addClass('editing');
                // place cursor at the end of the line
                JSProf.LPD(55379, input._node, 'value').value = JSProf.LRSP(55379, JSProf.LGD(55378, input._node, 'value').value);
                JSProf.LMC(55380, input, 'focus').focus();
            }, 12),
            close: JSProf.LNF(55391, function () {
                var editedValue = JSProf.LMC(55383, JSProf.LMC(55382, this, 'get').get('inputNode'), 'get').get('value');
                JSProf.LMC(55385, JSProf.LMC(55384, this, 'get').get('container'), 'removeClass').removeClass('editing');
                if (JSProf.LRE(55386, editedValue)) {
                    JSProf.LMC(55389, JSProf.LMC(55387, this, 'get').get('model'), 'save').save(JSProf.LNE(55388, { title: editedValue }, 11));
                } else {
                    JSProf.LMC(55390, this, 'clear').clear();
                }
            }, 12),
            enterUpdate: JSProf.LNF(55395, function (e) {
                var ENTER_KEY = 13;
                if (JSProf.LGD(55392, e, 'keyCode').keyCode === JSProf.LRE(55393, ENTER_KEY)) {
                    JSProf.LMC(55394, this, 'close').close();
                }
            }, 12),
            clear: JSProf.LNF(55398, function () {
                JSProf.LMC(55397, JSProf.LMC(55396, this, 'get').get('model'), 'clear').clear();
            }, 12),
            clearJustView: JSProf.LNF(55402, function () {
                //console.log("CCCCCCCCCCCCCCCCcc");
                //console.log(this.get('model'));
                JSProf.LMC(55399, this, 'detachAll').detachAll();
                JSProf.LMC(55401, this, 'destroy').destroy(JSProf.LNE(55400, { remove: true }, 11));    //this.destroy();
            }, 12)
        }, 11));
    // Set this View under our custom Y.TodoMVC namespace.
    JSProf.LPD(55407, JSProf.LMC(55405, Y, 'namespace').namespace('TodoMVC'), 'TodoView').TodoView = JSProf.LRSP(55407, JSProf.LRE(55406, TodoView));
}, 12), '@VERSION@', JSProf.LNE(55410, {
    requires: JSProf.LNE(55409, [
        'view',
        'handlebars',
        'event-focus'
    ], 10)
}, 11));