/*global YUI*/
JSProf.LMC(83700, YUI, 'add').add('todo', JSProf.LNF(83697, function (Y) {
    'use strict';
    // -- Todo Model -------------
    var Todo = JSProf.LMC(83693, Y.Base, 'create').create('todo', JSProf.LGD(83676, Y, 'Model').Model, JSProf.LNE(83678, [JSProf.LGD(83677, Y.ModelSync, 'Local').Local], 10), JSProf.LNE(83688, {
            root: 'todos-yui',
            toggle: JSProf.LNF(83682, function () {
                JSProf.LMC(83681, this, 'save').save(JSProf.LNE(83680, { completed: !JSProf.LMC(83679, this, 'get').get('completed') }, 11));
            }, 12),
            clear: JSProf.LNF(83685, function () {
                JSProf.LMC(83684, this, 'destroy').destroy(JSProf.LNE(83683, { remove: true }, 11));
            }, 12),
            removeView: JSProf.LNF(83687, function () {
                //console.log("removeView..... Model");
                //console.log(this);
                JSProf.LMC(83686, this, 'fire').fire("removeJustView");
            }, 12)
        }, 11), JSProf.LNE(83692, {
            ATTRS: JSProf.LNE(83691, {
                title: JSProf.LNE(83689, { value: '' }, 11),
                completed: JSProf.LNE(83690, { value: false }, 11)
            }, 11)
        }, 11));
    // Set this Model under our custom Y.MVC namespace.
    JSProf.LPD(83696, JSProf.LMC(83694, Y, 'namespace').namespace('TodoMVC'), 'Todo').Todo = JSProf.LRSP(83696, JSProf.LRE(83695, Todo));
}, 12), '@VERSION@', JSProf.LNE(83699, {
    requires: JSProf.LNE(83698, [
        'gallery-model-sync-local',
        'model',
        'node-event-simulate'
    ], 10)
}, 11));