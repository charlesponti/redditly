'use strict';

var React = require('react');

var PicBox = React.createClass({

  render: function() {
    return (
      <div class="reddit-pic-box">
        <a href={this.props.permalink}>
          <img src={this.props.imageURL}/>
        </a>
      </div>
    );
  }

});

module.exports = PicBox;
