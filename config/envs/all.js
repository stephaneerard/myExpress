module.exports = function(app, express, dirname){
	//configure application
	app.configure(function() {
		app.set('views', dirname + '/views');
		app.set('view engine', 'jade');
		app.use(express.bodyDecoder());
		app.use(express.methodOverride());
        app.use(app.router);
		app.use(express.staticProvider(dirname + '/public'));
	});
	
	require('../routes')(app, express);
	
	return require('./' + app.options.env);
};