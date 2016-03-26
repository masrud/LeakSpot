JSProf.LMC(121748, JSProf.LFC(121744, YUI, false)(JSProf.LNE(121743, {
    groups: JSProf.LNE(121742, {
        'todo-mvc': JSProf.LNE(121741, {
            base: './js/',
            modules: JSProf.LNE(121740, {
                'todo': JSProf.LNE(121736, { path: 'models/todo.js' }, 11),
                'todo-list': JSProf.LNE(121737, { path: 'models/todolist.js' }, 11),
                'todo-view': JSProf.LNE(121738, { path: 'views/todoview.js' }, 11),
                'todo-app': JSProf.LNE(121739, { path: 'app.js' }, 11)
            }, 11)
        }, 11)
    }, 11)
}, 11)), 'use').use('todo-app', JSProf.LNF(121747, function (Y) {
    JSProf.LNE(121746, new (JSProf.LMC(121745, Y.TodoMVC, 'TodoApp')).TodoApp(), 40);
}, 12));