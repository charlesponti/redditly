'use strict';

var _ = require('lodash');
var React = require('react');

var TextBox = React.createFactory(require('./text-box'));

var LinkList = React.createClass({

  propTypes: {
    links: React.PropTypes.array
  },

  getDefaultProps: function() {
    return {
      links: []
    };
  },

  render: function() {
    return React.createElement('ul', {
        className: 'list-group'
      },
      _.map(this.props.links, function(link) {
        return TextBox({ link: link });
      })
    );
  }

});

module.exports = LinkList;
