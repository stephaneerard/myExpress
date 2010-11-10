/*
 * This file is used to orchestrate the configuration of the application
 * 
 */
module.exports = function(appModule, app, express, dirname) {
	
	/**
	 * Loading default options (name, port, env)
	 */
	app.options = require('./defaults');
	
	/**
	 * We can overload configuration via argv
	 */
	//create the optparser
	var optparser = require('optparse');
	//we still need to declare what we want to be able to overload within this file
	var switches = require('./server_options');
	var optparser = new optparser.OptionParser(switches);
	//we can declare things to do in this special file
	require('./server_options_parser')(optparser, app, express, dirname, appModule);
	//anyway, every options will be set within app.options[optionName]
	optparser.on('*', function(option, value){app.options[option] = value;});
	optparser.parse(process.argv);
	
	/**
	 * Load configuration for all.
	 * This "all" configuration will load configuration according to app.options.env
	 */
	require('./envs/all')(app, express, dirname);
	//once we have loaded the correct env file, just set app to its env.
	app.set('env', app.config.env);
	
	/**
	 * Make the app.start() method simple.
	 * Look within app.options to know its env, port and name.
	 * Don't overload it if it has been defined. 
	 */
	if(!app.start){
		app.start = function(){
			if (!appModule.parent) {
			  app.listen(app.options.port);
			  console.log("%s listening on port %d for environment %s", app.options.name, app.address().port, app.options.env);
			}
			return app;
		};
	}
};