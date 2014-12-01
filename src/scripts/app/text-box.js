'use strict';

var React = require('react');

var TextBox = React.createClass({

  propTypes: {
    link: React.PropTypes.object
  },

  /**
   * Return default props for component
   * @return {object} props
   */
  getDefaultProps: function() {
    return {
      link: {}
    };
  },

  /**
   * Render text link to articles
   * @return {ReactElement}
   */
  render: function() {
    return React.createElement('li', {
        className: 'list-group-item',
      },
      React.createElement('a', {
          href: this.props.link.permalink
        },
        this.props.link.title
      )
    );
  }

});

module.exports = TextBox;
