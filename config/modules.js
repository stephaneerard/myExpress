module.exports = function(app, express, dirname) {
	app.config.modules = {
		menu : {
			template : 'menu.jade'
		},
		persons: {}
	};
};