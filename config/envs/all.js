module.exports = function(app, express, dirname) {
	// configure application
	app.configure(function() {
		app.set('views', dirname + '/views');
		app.set('view engine', 'jade');
		app.use(express.bodyDecoder());
		app.use(express.methodOverride());
		app.use(app.router);
		app.use(express.staticProvider(dirname + '/public'));
	});
	//preparing place for configurations
	app.config = {};
	//preparing place for modules
	app.modules = {};
	
	//load the routes
	require('../routes')(app, express);
	//load the modules
	require('../modules')(app, express, dirname);
	//load the environment configuration
	return require('./' + app.options.env);
};