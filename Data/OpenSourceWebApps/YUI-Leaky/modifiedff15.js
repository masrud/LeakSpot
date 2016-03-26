/*global YUI*/
JSProf.LMC(55304, YUI, 'add').add('todo-list', JSProf.LNF(55301, function (Y) {
    'use strict';
    // Dependencies from Y.MVC.
    var TodoList;
    var Todo = JSProf.LGD(55281, Y.TodoMVC, 'Todo').Todo;
    // -- TodoList Model list -----
    TodoList = JSProf.LWR(55297, TodoList, JSProf.LMC(55296, Y.Base, 'create').create('todoList', JSProf.LGD(55282, Y, 'ModelList').ModelList, JSProf.LNE(55284, [JSProf.LGD(55283, Y.ModelSync, 'Local').Local], 10), JSProf.LNE(55295, {
        model: Todo,
        root: 'todos-yui',
        completed: JSProf.LNF(55289, function () {
            return JSProf.LMC(55288, this, 'filter').filter(JSProf.LNE(55285, { asList: true }, 11), JSProf.LNF(55287, function (todo) {
                return JSProf.LMC(55286, todo, 'get').get('completed');
            }, 12));
        }, 12),
        remaining: JSProf.LNF(55294, function () {
            return JSProf.LMC(55293, this, 'filter').filter(JSProf.LNE(55290, { asList: true }, 11), JSProf.LNF(55292, function (todo) {
                return !JSProf.LMC(55291, todo, 'get').get('completed');
            }, 12));
        }, 12)
    }, 11)));
    // Set this Model List under our custom Y.MVC namespace.
    JSProf.LPD(55300, JSProf.LMC(55298, Y, 'namespace').namespace('TodoMVC'), 'TodoList').TodoList = JSProf.LRSP(55300, JSProf.LRE(55299, TodoList));
}, 12), '@VERSION@', JSProf.LNE(55303, {
    requires: JSProf.LNE(55302, [
        'gallery-model-sync-local',
        'model-list',
        'todo'
    ], 10)
}, 11));