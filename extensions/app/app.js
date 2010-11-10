/**
 * This file is part of the myExpress extension of expressjs
 * 
 * @package myExpress
 * @author Stéphane Erard <stephane.erard@gmail.com>
 */

module.exports = function(app, express, dirname, appModule) {

	/**
	 * Loading default options (name, port, env)
	 */
	app.options = require('../../config/defaults');

	/**
	 * We can overload configuration via argv
	 */
	// create the optparser
	var optparser = require('optparse');
	// we still need to declare what we want to be able to overload within this
	// file
	var switches = require('../../config/server_options');
	var optparser = new optparser.OptionParser(switches);
	// we can declare things to do in this special file
	require('../../config/server_options_parser')(optparser, app, express,
			dirname, appModule);
	// anyway, every options will be set within app.options[optionName]
	optparser.on('*', function(option, value) {
		app.options[option] = value;
	});
	optparser.parse(process.argv);

	/**
	 * An Application logger with nice coloring
	 */
	app.logger = {

	};

	/**
	 * Module loading function
	 */
	if (!app.loadModules) {
		app.loadModules = function() {
			console.log('modules loading');
			for (module in app.config.modules) {
				console.log('--module loading "%s"', module);
				require('../../modules/' + module + '/' + module)(app, express,
						dirname, app.config.modules[module]);
				app.modules[module].initialize.apply(this);
			}
			console.log('modules loaded');
		};
	}
	
	/**
	 * Plugin loading function
	 */
	if (!app.loadPlugins) {
		app.loadPlugins = function() {
			console.log('plugins loading');
			for (plugin in app.config.plugins) {
				console.log('--plugin loading "%s"', plugin);
				require('../../plugins/' + plugin + '/' + plugin)(app, express,
						dirname, app.config.plugins[plugin]);
				app.plugins[plugin].initialize.apply(this);
			}
			console.log('plugins loaded');
		};
	}

	/**
	 * Make the app.start() method simple. Look within app.options to know its
	 * env, port and name. Don't overload it if it has been defined.
	 */
	if (!app.start) {
		app.start = function() {
			// start the application server
			if (!appModule.parent) {
				app.listen(app.options.port);
				console.log("%s listening on port %d for environment %s",
						app.options.name, app.address().port, app.options.env);
			}
			return app;
		};
	}
};