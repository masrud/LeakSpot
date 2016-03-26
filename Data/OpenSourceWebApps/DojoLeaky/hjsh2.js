
			require = {
				async: true,
				parseOnLoad: true,
				locale: 'en',
                debug:true,
				paths: {
					dijit: '../dijit'
				},
				deps: ['dojo/parser', 'dojo/domReady!'],
				mvc: { debugBindings: true },
                packages: [
                    { name: 'todo', location: '../../js/todo' }
                ]
			};
		