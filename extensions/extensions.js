/**
 * This file is part of the myExpress extension of expressjs
 * 
 * @package myExpress
 * @author Stéphane Erard <stephane.erard@gmail.com>
 */

module.exports = function(app, express, dirname, appModule){
	/**
	 * This module let us add callbacks to the process.callbacks.SIG(INT|TERM).
	 * These callbacks will be called when the SIG* will be caught.
	 * 
	 * This is a good place to end connexions, etc, in good terms.
	 */
	require('./process/process')(app, express, dirname, appModule);
	
	/**
	 * This module adds some functions to the app variable, such as:
	 * logging, modularization, command-line parsing
	 */
	require('./app/app')(app, express, dirname, appModule);
};