/**
 * This file is part of the myExpress extension of expressjs
 * 
 * @package myExpress
 * @author Stéphane Erard <stephane.erard@gmail.com>
 */

/**
 * This file let you define the configuration of the application for
 * its development environment
 */

module.exports = function(app, express, dirname){
	app.configure('development', function() {
		app.use(express.errorHandler({
			dumpExceptions : true,
			showStack : true
		}));
	});
};