'use strict';

var React = require('react');

var textBox = React.createClass({

  propTypes: {
    permalink: React.PropTypes.string,
    title: React.PropTypes.string
  },

  render: function() {
    return (
      <div class='reddit-text-box'>
        <a href={this.props.permalink}>{this.props.title}</a>
      </div>
    );
  }

});

module.exports = textBox;
