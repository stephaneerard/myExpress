/**
 * This file is part of the myExpress extension of expressjs
 * 
 * @package myExpress
 * @author Stéphane Erard <stephane.erard@gmail.com>
 */

/**
 * 
 */

module.exports = function(app, express, dirname, config) {
	var myPlugin = app.plugins.myPlugin = {};

	myPlugin.__setRoutes = function() {

	};

	myPlugin.initialize = function() {
		myPlugin.__setRoutes();
	};
};