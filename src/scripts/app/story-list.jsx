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
    var links = _.map(this.props.links, function(link) {
      return <Story link={link} key={link.id}/>;
    });
    
    return (
      <ul className="list-group">
        {links}
      </ul>
    );
  }

});

module.exports = StoryList;
