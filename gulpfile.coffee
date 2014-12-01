'use strict'

http = require 'http'
gulp = require 'gulp'
karma = require 'karma'
less = require 'gulp-less'
gutil = require 'gulp-util'
watch = require 'gulp-watch'
concat = require 'gulp-concat'
jshint = require 'gulp-jshint'
rename = require 'gulp-rename'
stylish = require 'jshint-stylish'

# Webpack
webpack = require 'webpack'
webpack_config = require './webpack.config'

files =
  scripts:
    main: 'src/main.js'
    source: 'src/app/**/*'
    build: 'build/scripts'
  styles:
    main: 'src/styles/main.less'
    source: 'src/styles/**/*'
    build: 'build/styles'

gulp.task 'jshint', ()->
  gulp.src(files.scripts.source)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe gulp.dest(files.scripts.build)

gulp.task 'build-scripts', (done)->
  webpack webpack_config.dev, (err, stats)->

    if err
      throw new gutil.PluginError '[build-js]', err

    done()

gulp.task 'build-styles', ()->
  gulp.src(files.styles.main)
    .pipe(less())
    .pipe gulp.dest(files.styles.build)

gulp.task 'test', (done)->
  karma.server.start
    configFile: __dirname + '/test/karma.conf.js'
  , done

gulp.task 'watch', ()->
  # Watch styles
  gulp.src(files.styles.source)
    .pipe watch({ glob: files.styles.source }, ['build-styles'])

  # Watch scripts
  gulp
    .src(files.scripts.source)
    .pipe watch({ glob: files.scripts.source }, ['build-scripts'])

gulp.task 'server', ()->
  server = require('./server')
  server.start()

gulp.task 'build', [ 'build-styles', 'build-scripts' ]
gulp.task 'default', [ 'build', 'watch', 'test', 'server' ]
