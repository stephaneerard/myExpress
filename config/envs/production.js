/**
 * This file is part of the myExpress extension of expressjs
 * 
 * @package myExpress
 * @author Stéphane Erard <stephane.erard@gmail.com>
 */

/**
 * This file let you define the application configuration for its
 * production environment.
 */

module.exports = function(app, express, dirname) {
	app.configure('production', function() {
		app.use(express.errorHandler());
	});
};