/**
 * This file is part of the myExpress extension of expressjs
 * 
 * @package myExpress
 * @author Stéphane Erard <stephane.erard@gmail.com>
 */


/**
 * This file orchestrates the configuration dynamic
 */
module.exports = function(appModule, app, express, dirname) {

	//tell what we are doing
	console.log('configuring...');

	/**
	 * Load configuration for all. This "all" configuration will load
	 * configuration according to app.options.env
	 */
	require('./envs/all')(app, express, dirname);
	// once we have loaded the correct env file, just set app to its env.
	app.set('env', app.config.env);

	app.loadPlugins();
	
	/**
	 * This function is declared in /extensions/app/app.js
	 */
	app.loadModules();
	
	console.log('configured');
};