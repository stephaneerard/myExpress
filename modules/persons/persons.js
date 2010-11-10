module.exports = function(app, express, dirname, config) {
	var persons = app.modules.persons = {};

	persons.__setRoutes = function() {
		
	};

	persons.initialize = function() {
		persons.__setRoutes();
	};
};