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

    webpack: {
      module: {
        loaders: [
          { test: /\.css$/, loader: "style!css" },
          { test: /\.jsx$/, loader: "jsx-loader" },
          { test: /\.less$/, loader: "style-loader!css-loader!less-loader" }
        ]
      },
    },

    webpackServer: {
      noInfo: true
    },

    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      require('karma-webpack')
    ]

  });
};
