'use strict';

module.exports = function(config) {
  config.set({

    files: [
      'index.js'
    ],

    autoWatch: true,

    preprocessors: {
      'index.js': ['webpack']
    },

    frameworks: [
      'jasmine'
    ],

    browsers: [
      'Chrome'
    ],

    webpackServer: {
      noInfo: true
    },

    plugins: [
      'karma-jasmine',
      'karma-coffee-preprocessor',
      'karma-chrome-launcher',
      require('karma-webpack')
    ]

  });
};
