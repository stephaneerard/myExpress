/**
 * This file is part of the myExpress extension of expressjs
 * 
 * @package myExpress
 * @author Stéphane Erard <stephane.erard@gmail.com>
 */

module.exports = function(app, express, dirname, appModule){
	process.callbacks = {
			SIGTERM: {},
			SIGINT: {}
	};
	
	process.on('SIGTERM', function(){
		console.log('SIGTERM running registered callback functions');
		for(callback in process.callbacks.SIGTERM){
			process.callbacks[callback].apply(this);
		}
		process.exit(1);
	});
	
	process.on('SIGINT', function(){
		for(callback in process.callbacks.SIGINT){
			process.callbacks[callback].apply(this);
		}
		process.exit(1);
	});
};