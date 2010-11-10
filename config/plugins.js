/**
 * This file is part of the myExpress extension of expressjs
 * 
 * @package myExpress
 * @author Stéphane Erard <stephane.erard@gmail.com>
 */

/**
 * This file is used to declare the application plugins
 */

module.exports = function(app, express, dirname) {
	app.config.plugins= {
		myPlugin : {
			template : 'menu.jade'
		}
	};
};