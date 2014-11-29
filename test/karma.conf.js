'use strict';

module.exports = function(config) {
  config.set({

    files: [
      'spec/**/*.coffee'
    ],

    autoWatch: true,

    preprocessors: {
      'spec/**/*.coffee': ['coffee']
    },

    frameworks: [
      'jasmine'
    ],

    browsers: [
      'Chrome'
    ],

    plugins: [
      'karma-jasmine',
      'karma-coffee-preprocessor',
      'karma-chrome-launcher'
    ]

  });
};
