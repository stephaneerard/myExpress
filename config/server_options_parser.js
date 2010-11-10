/**
 * This file is part of the myExpress extension of expressjs
 * 
 * @package myExpress
 * @author Stéphane Erard <stephane.erard@gmail.com>
 */

/**
 * This file let you add event listeners on options specified in the server_options module
 */

module.exports = function(parser, app, express, dirname, appModule){
	
	/**
	 * Here you can write your own option parser handlers
	 */
	
	//Here's a little example. Just uncomment it to see what it does (if you can't imagine).
	/*parser.on('env', function(option, value){
		console.log('Environment definition has been overloaded by argv');
	});*/
};