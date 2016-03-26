
			YUI({
				groups: {
					'todo-mvc': {
						base: './js/',
						modules: {
							'todo': {
								path: 'models/todo.js'
							},
							'todo-list': {
								path: 'models/todolist.js'
							},
							'todo-view': {
								path: 'views/todoview.js'
							},
							'todo-app': {
								path: 'app.js'
							}
						}
					}
				}
			}).use('todo-app', function (Y) {
				new Y.TodoMVC.TodoApp();
			});
		