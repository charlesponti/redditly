'use strict';

module.exports = function(config) {
  config.set({

    browsers: [
      'Chrome'
    ],

    frameworks: [
      'browserify',
      'jasmine'
    ],

    files: [
      'node_modules/angular/angular.min.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'test/**/*spec.js'
    ],

    preprocessors: {
      'test/**/*spec.js': ['browserify']
    },

    browserify: {
      debug: true,
      extensions: ['.js']
    },

    plugins: [
      'karma-jasmine',
      'karma-browserify',
      'karma-chrome-launcher'
    ]

  });
};
