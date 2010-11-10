module.exports = function(app, express, dirname, config) {
	var name = 'menu';
	
	var menu = app.modules.menu = {};

	menu.__setRoutes = function() {
		console.log('----setting routes');
		for (module in app.config.modules) {
			console.log('------searching for menu declaration in module %s',
					module);
		}
	};

	menu.initialize = function() {
		menu.__setRoutes();
	};
};