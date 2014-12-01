'use strict';

var React = require('react');

var service = require('./service');
var StoryList = React.createFactory(require('./story-list.jsx'));

var Main = React.createClass({

  getInitialState: function() {
    return {
      links: [],
      images: []
    };
  },

  isImage: function(url) {
    return url.slice(url.length-4) === '.jpg';
  },

  filterStories: function(stories) {
    _.each(stories, function(story) {
      if (this.isImage(story.data.url)) {
        this.state.images.push(story.data);
        this.setState({ images: this.state.images });
      } else {
        this.state.links.push(story.data);
        this.setState({ links: this.state.links });
      }
    }.bind(this));
  },

  /**
   * Handle submission of search form
   * @param {SyntheticEvent} event
   * @param {string} id
   */
  onSubmit: function(event, id) {
    event.preventDefault();
    service
      .search(event.target.query.value)
      .success(function(res) {
        this.filterStories(res.data.children);
      }.bind(this))
      .fail(function(res) {
        throw new Error(res.message);
      });
  },

  /**
   * Render component
   * @return {ReactElement}
   */
  render: function() {
    return (
      <div>
        <h1 className="page-title">Redditly</h1>
        <form onSubmit={this.onSubmit} role="form">
          <input type="text" name="query" className="form-control"/>
        </form>
        <StoryList links={this.state.links}/>
      </div>
    );
  }

});

module.exports = Main;
