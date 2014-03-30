var gulp = require('gulp');
// var less = require('gulp-less');
// var concat = require('gulp-concat');
var livereload = require('gulp-livereload');
var gutil = require('gulp-util');
var staticServer = require('node-static');
var http = require('http');

gulp.task('server', function(next) {
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
});

// gulp.task('less', function() {
// 	gulp.src('src/boiler.less')
// 		.pipe(less())
// 		.pipe(gulp.dest('dist'))
// });

// gulp.task('watch', function() {
// 	gulp.watch('src/**/*.less', ['less']);
// });

// gulp.task('build', [ 'less', 'concat' ]);

gulp.task('default', [ 'server' ]);