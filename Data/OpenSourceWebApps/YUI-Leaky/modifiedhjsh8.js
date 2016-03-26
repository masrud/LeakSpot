JSProf.LMC(39464, JSProf.LFC(39460, YUI, false)(JSProf.LNE(39459, {
    groups: JSProf.LNE(39458, {
        'todo-mvc': JSProf.LNE(39457, {
            base: './js/',
            modules: JSProf.LNE(39456, {
                'todo': JSProf.LNE(39452, { path: 'models/todo.js' }, 11),
                'todo-list': JSProf.LNE(39453, { path: 'models/todolist.js' }, 11),
                'todo-view': JSProf.LNE(39454, { path: 'views/todoview.js' }, 11),
                'todo-app': JSProf.LNE(39455, { path: 'app.js' }, 11)
            }, 11)
        }, 11)
    }, 11)
}, 11)), 'use').use('todo-app', JSProf.LNF(39463, function (Y) {
    JSProf.LNE(39462, new (JSProf.LMC(39461, Y.TodoMVC, 'TodoApp')).TodoApp(), 40);
}, 12));