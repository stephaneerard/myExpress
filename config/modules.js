/**
 * This file is part of the myExpress extension of expressjs
 * 
 * @package myExpress
 * @author Stéphane Erard <stephane.erard@gmail.com>
 */

/**
 * This file is used to declare the application modules
 */

module.exports = function(app, express, dirname) {
	app.config.modules = {
		menu : {
			template : 'menu.jade'
		},
		persons: {}
	};
};