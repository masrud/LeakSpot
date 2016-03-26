/*global YUI*/
JSProf.LMC(55057, YUI, 'add').add('todo-app', JSProf.LNF(55054, function (Y) {
    'use strict';
    // Dependencies from MVC namespace.
    var TodoApp;
    var TodoList = JSProf.LGD(54916, Y.TodoMVC, 'TodoList').TodoList;
    var TodoView = JSProf.LGD(54917, Y.TodoMVC, 'TodoView').TodoView;
    // -- Main Application --------------
    TodoApp = JSProf.LWR(55050, TodoApp, JSProf.LMC(55049, Y.Base, 'create').create('todoApp', JSProf.LGD(54918, Y, 'App').App, JSProf.LNE(54919, [], 10), JSProf.LNE(55026, {
        containerTemplate: '#todoapp',
        template: JSProf.LMC(54922, Y.Handlebars, 'compile').compile(JSProf.LMC(54921, JSProf.LMC(54920, Y, 'one').one('#stats-template'), 'getHTML').getHTML()),
        events: JSProf.LNE(54926, {
            '#new-todo': JSProf.LNE(54923, { keypress: 'enterCreate' }, 11),
            '#clear-completed': JSProf.LNE(54924, { click: 'clearCompleted' }, 11),
            '#toggle-all': JSProf.LNE(54925, { click: 'completeAll' }, 11)
        }, 11),
        initializer: JSProf.LNF(54945, function () {
            JSProf.LMC(54929, this, 'set').set('todoList', JSProf.LNE(54928, new (JSProf.LFC(54927, TodoList, true))(), 'TodoList'));
            var list = JSProf.LMC(54930, this, 'get').get('todoList');
            JSProf.LMC(54935, Y.Handlebars, 'registerHelper').registerHelper('pluralize', JSProf.LNF(54934, function (context, word) {
                return JSProf.LRE(54931, context) === 1 ? JSProf.LRE(54932, word) : JSProf.LRE(54933, word) + 's';
            }, 12));
            JSProf.LMC(54938, list, 'after').after(JSProf.LNE(54936, [
                'add',
                'remove',
                'reset',
                'todo:completedChange'
            ], 10), JSProf.LGD(54937, this, 'render').render, this);
            JSProf.LMC(54939, list, 'load').load();
            // Keep our filters on refresh by immediately dispatching route.
            JSProf.LMC(54944, this, 'once').once('ready', JSProf.LNF(54943, function () {
                if (JSProf.LMC(54941, this, 'hasRoute').hasRoute(JSProf.LMC(54940, this, 'getPath').getPath())) {
                    JSProf.LMC(54942, this, 'dispatch').dispatch();
                }
            }, 12));
        }, 12),
        render: JSProf.LNF(54971, function () {
            var todoList = JSProf.LMC(54946, this, 'get').get('todoList');
            var completed = JSProf.LMC(54948, JSProf.LMC(54947, todoList, 'completed').completed(), 'size').size();
            var remaining = JSProf.LMC(54950, JSProf.LMC(54949, todoList, 'remaining').remaining(), 'size').size();
            var main = JSProf.LMC(54951, this, 'get').get('main');
            var footer = JSProf.LMC(54952, this, 'get').get('footer');
            // If we have Todos in our TodoList, show them with statistics.
            if (JSProf.LMC(54953, todoList, 'size').size()) {
                JSProf.LMC(54954, main, 'show').show();
                JSProf.LMC(54955, footer, 'show').show();
                JSProf.LMC(54958, footer, 'setHTML').setHTML(JSProf.LMC(54957, this, 'template').template(JSProf.LNE(54956, {
                    completed: completed,
                    remaining: remaining
                }, 11)));
                // Highlights for filters at the bottom of our Todo application.
                JSProf.LMC(54960, JSProf.LMC(54959, footer, 'one').one('#filters li a'), 'removeClass').removeClass('selected');
                JSProf.LMC(54964, JSProf.LMC(54963, JSProf.LMC(54961, footer, 'all').all('#filters li a'), 'filter').filter('[href="#/' + (JSProf.LMC(54962, this, 'get').get('filter') || '') + '"]'), 'addClass').addClass('selected');
            } else {
                JSProf.LMC(54965, main, 'hide').hide();
                JSProf.LMC(54966, footer, 'hide').hide();
            }
            // Set the checkbox only if all Todos have been completed.
            JSProf.LMC(54969, JSProf.LMC(54967, this, 'get').get('allCheckbox'), 'set').set('checked', !JSProf.LRE(54968, remaining));
            JSProf.LMC(54970, this, 'addViews').addViews();
        }, 12),
        addViews: JSProf.LNF(54994, function () {
            var models;
            var fragment = JSProf.LMC(54973, Y, 'one').one(JSProf.LMC(54972, Y.config.doc, 'createDocumentFragment').createDocumentFragment());
            var todoList = JSProf.LMC(54974, this, 'get').get('todoList');
            // An Array of models is passed through when the 'reset'
            // event is triggered through syncing through load().
            switch (JSProf.LMC(54975, this, 'get').get('filter')) {
            case 'active':
                models = JSProf.LWR(54977, models, JSProf.LMC(54976, todoList, 'remaining').remaining());
                break;
            case 'completed':
                models = JSProf.LWR(54979, models, JSProf.LMC(54978, todoList, 'completed').completed());
                break;
            default:
                models = JSProf.LWR(54981, models, JSProf.LRE(54980, todoList));
                break;
            }
            //console.log("ad viewsssssssssssss");
            // Iterate through the (filtered) ModelList.
            JSProf.LMC(54989, models, 'each').each(JSProf.LNF(54988, function (model) {
                //model.removeView();
                var view = JSProf.LNE(54984, new (JSProf.LFC(54983, TodoView, true))(JSProf.LNE(54982, { model: model }, 11)), 'TodoView');
                JSProf.LMC(54987, fragment, 'append').append(JSProf.LMC(54986, JSProf.LMC(54985, view, 'render').render(), 'get').get('container'));
            }, 12));
            JSProf.LMC(54993, JSProf.LMC(54991, JSProf.LMC(54990, this, 'get').get('container'), 'one').one('#todo-list'), 'setContent').setContent(JSProf.LRE(54992, fragment));
        }, 12),
        enterCreate: JSProf.LNF(55004, function (e) {
            var ENTER_KEY = 13;
            var todoList = JSProf.LMC(54995, this, 'get').get('todoList');
            var inputNode = JSProf.LMC(54996, this, 'get').get('inputNode');
            var value = JSProf.LMC(54997, inputNode, 'get').get('value');
            if (JSProf.LGD(54998, e, 'keyCode').keyCode !== JSProf.LRE(54999, ENTER_KEY) || !JSProf.LRE(55000, value)) {
                return;
            }
            JSProf.LMC(55002, todoList, 'create').create(JSProf.LNE(55001, { title: value }, 11));
            JSProf.LMC(55003, inputNode, 'set').set('value', '');
        }, 12),
        clearCompleted: JSProf.LNF(55012, function () {
            var todoList = JSProf.LMC(55005, this, 'get').get('todoList');
            var completed = JSProf.LMC(55006, todoList, 'completed').completed();
            JSProf.LMC(55008, todoList, 'remove').remove(JSProf.LRE(55007, completed));
            JSProf.LMC(55011, completed, 'each').each(JSProf.LNF(55010, function (todo) {
                JSProf.LMC(55009, todo, 'clear').clear();
            }, 12));
        }, 12),
        completeAll: JSProf.LNF(55020, function () {
            var todoList = JSProf.LMC(55013, this, 'get').get('todoList');
            var allCheckbox = JSProf.LMC(55014, this, 'get').get('allCheckbox');
            var completed = JSProf.LMC(55015, allCheckbox, 'get').get('checked');
            JSProf.LMC(55019, todoList, 'each').each(JSProf.LNF(55018, function (todo) {
                JSProf.LMC(55017, todo, 'save').save(JSProf.LNE(55016, { completed: completed }, 11));
            }, 12));
        }, 12),
        handleFilter: JSProf.LNF(55025, function (req) {
            JSProf.LMC(55022, this, 'set').set('filter', JSProf.LGD(55021, req.params, 'filter').filter);
            JSProf.LMC(55024, JSProf.LMC(55023, this, 'get').get('todoList'), 'load').load();
        }, 12)
    }, 11), JSProf.LNE(55048, {
        ATTRS: JSProf.LNE(55047, {
            container: JSProf.LNE(55029, {
                valueFn: JSProf.LNF(55028, function () {
                    return JSProf.LMC(55027, Y, 'one').one('#todoapp');
                }, 12)
            }, 11),
            inputNode: JSProf.LNE(55032, {
                valueFn: JSProf.LNF(55031, function () {
                    return JSProf.LMC(55030, Y, 'one').one('#new-todo');
                }, 12)
            }, 11),
            allCheckbox: JSProf.LNE(55035, {
                valueFn: JSProf.LNF(55034, function () {
                    return JSProf.LMC(55033, Y, 'one').one('#toggle-all');
                }, 12)
            }, 11),
            main: JSProf.LNE(55038, {
                valueFn: JSProf.LNF(55037, function () {
                    return JSProf.LMC(55036, Y, 'one').one('#main');
                }, 12)
            }, 11),
            footer: JSProf.LNE(55041, {
                valueFn: JSProf.LNF(55040, function () {
                    return JSProf.LMC(55039, Y, 'one').one('#footer');
                }, 12)
            }, 11),
            serverRouting: JSProf.LNE(55042, { value: false }, 11),
            filter: JSProf.LNE(55043, { value: null }, 11),
            routes: JSProf.LNE(55046, {
                value: JSProf.LNE(55045, [JSProf.LNE(55044, {
                        path: '/:filter',
                        callback: 'handleFilter'
                    }, 11)], 10)
            }, 11)
        }, 11)
    }, 11)));
    // Namespace this application under our custom Y.MVC namespace.
    JSProf.LPD(55053, JSProf.LMC(55051, Y, 'namespace').namespace('TodoMVC'), 'TodoApp').TodoApp = JSProf.LRSP(55053, JSProf.LRE(55052, TodoApp));
}, 12), '@VERSION@', JSProf.LNE(55056, {
    requires: JSProf.LNE(55055, [
        'app-base',
        'todo-list',
        'todo-view',
        'node'
    ], 10)
}, 11));