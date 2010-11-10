/**
 * This file is part of the myExpress extension of expressjs
 * 
 * @package myExpress
 * @author Stéphane Erard <stephane.erard@gmail.com>
 */

/**
 * This file is used to configure the application for all environments.
 * It also loads the environment-specific configuration module and routes
 */

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
	//preparing place for plugins
	app.plugins = {};
	
	//load the routes
	require('../routes')(app, express);
	//load the plugins
	require('../plugins')(app, express, dirname);
	//load the modules
	require('../modules')(app, express, dirname);
	//load the environment configuration
	return require('./' + app.options.env);
};