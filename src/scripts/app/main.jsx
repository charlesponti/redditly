'use strict';

var React = require('react');

var Main = React.createClass({

  render: function() {
    return (
      <div>
        <h1 className="">Reddit.ly</h1>
        <input type="text" className="form-control" id="reddit-query">
        <div id="reddit-images"></div>
        <div id="reddit-text"></div>
      </div>
    );
  }

});

module.exports = Main;
