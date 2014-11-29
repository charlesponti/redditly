'use strict';

var React = require('react');

var Main = React.createClass({

  render: function() {
    return React.createElement("h1", {
      style: { textAlign: 'center' }
    }, 'Hello Facade');
  }

});

module.exports = Main;
