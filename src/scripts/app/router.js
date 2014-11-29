'use strict';

var React = require('react');
var Backbone = require('backbone');
var Main = require('./main');

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
    React.render(new Main(), document.querySelector('#app'));
  },

  init: function() {
    Backbone.history.start();
  }

});

module.exports = new AppRouter();
