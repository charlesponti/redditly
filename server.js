'use strict';

var http = require('http');
var path = require('path');
var swig = require('swig');
var express = require('express');
var engines = require('consolidate');

// Create app
var app = express();

// Set port value of app
app.set('port', 3000);

// Set views directory
app.set('views', path.join(__dirname, './src/views'));

// Set public directory
app.use(express.static(path.join(__dirname, './build')));

// Disable caching of views
swig.setDefaults({ cache: false });

// Set view engine
app.engine('html', swig.renderFile);
app.set('view engine', 'html');

// Create app router
var router = express.Router();

// Designate default route
router.get('*', function(req, res, next) {
	res.render('index');
});

app.use(router);

module.exports = {
	start: function() {
		http.createServer(app).listen(3000, function() {
			console.log('Server listening on port 3000');
		});
	}
};
