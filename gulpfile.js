var gulp = require('gulp');
var less = require('gulp-less');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var livereload = require('gulp-livereload');
var gutil = require('gulp-util');
var staticServer = require('node-static');
var http = require('http');

var jsHint = function() {
	gulp.src('assets/js/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter(stylish))
		.pipe(gulp.dest('public/js'));
};

var lessLint = function() {
	return gulp.src('assets/less/main.less')
		.pipe(less())
		.pipe(gulp.dest('public/css'));
};

var staticServer = function(next) {
	var staticS = require('node-static');
	var server = new staticServer.Server('./');
	var port = 3000;

	http.createServer(function (request, response) {
		request.addListener('end', function () {
			server.serve(request, response);
		}).resume();
	}).listen(port, function() {
		gutil.log('Server listening on port: ' + gutil.colors.magenta(port));
		next();
	});
};

gulp.task('server', staticServer);
gulp.task('jshint', jsHint);
gulp.task('less', lessLint);

gulp.task('watch', function() {
	gulp.watch('assets/**/*.less', [ 'less' ]);
});

gulp.task('default', [ 'server' ]);