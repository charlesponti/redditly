'use strict';

var React = require('react');
var Backbone = require('backbone');

var Main = require('./main.jsx');

var AppRouter = Backbone.Router.extend({

  routes: {
    '': 'home',
    // Default - catch all
    '*actions': 'defaultAction'
  },

  /**
   * Render Main component
   */
  home: function() {
    React.render(React.createFactory(Main), document.querySelector('#app'));
  },

  init: function() {
    Backbone.history.start();
  }

});

module.exports = new AppRouter();
