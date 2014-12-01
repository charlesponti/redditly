'use strict';

var _ = require('lodash');
var React = require('react');

var Story = React.createFactory(require('./story.jsx'));

var StoryList = React.createClass({

  propTypes: {
    links: React.PropTypes.array
  },

  /**
   * Get default props of component
   * @return {object} props
   */
  getDefaultProps: function() {
    return {
      links: []
    };
  },

  /**
   * Render component
   * @return {ReactElement}
   */
  render: function() {
    return (
      <ul className="list-group">
        {_.map(this.props.links, function(link) {
          return <Story link={link} key={link.id}/>;
        })}
      </ul>
    );
  }

});

module.exports = StoryList;
