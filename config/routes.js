/**
 * This file is part of the myExpress extension of expressjs
 * 
 * @package myExpress
 * @author Stéphane Erard <stephane.erard@gmail.com>
 */

/**
 * This file is used to declare the routes of the application
 */

module.exports = function(app, express){
	app.get('/', function(req, res){
	  res.render('index', {
	    locals: {
	      title: 'Express'
	    }
	  });
	});
};