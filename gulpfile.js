var gulp = require('gulp');
var less = require('gulp-less');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var livereload = require('gulp-livereload');
var gutil = require('gulp-util');
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

var watchFiles = function() {
	gulp.watch('assets/less/**/*.less', [ 'less' ]);
	gulp.watch('assets/js/**/*.js', [ 'jshint' ]);
};

var staticServer = function(next) {
	var staticS = require('node-static');
	var server = new staticS.Server('./');
	var port = 4000;
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
gulp.task('watch', watchFiles);
gulp.task('build', ['less', 'jshint']);
gulp.task('default', [ 'server', 'build', 'watch' ]);