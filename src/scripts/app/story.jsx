'use strict';

var React = require('react');

var Story = React.createClass({

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
    return (
      <li className="list-group-item story" key={this.props.link.id}>
        <a href={this.props.link.url}>{this.props.link.title}</a>
      </li>
    );
  }

});

module.exports = Story;
