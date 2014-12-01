'use strict';

var _ = require('lodash');
var React = require('react');

var service = require('./service');
var StoryList = require('./story-list.jsx');

var Main = React.createClass({

  getInitialState: function() {
    return {
      stories: []
    };
  },

  isImage: function(url) {
    return url.slice(url.length-4) === '.jpg';
  },

  /**
   * Handle successful response from Reddit
   * @param {object} response Response from Reddit
   */
  onSearchSuccess: function(response) {
    this.setState({
      stories: _.pluck(response.data.children, 'data')
    });
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
      .done(this.onSearchSuccess)
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
        <StoryList links={this.state.stories}/>
      </div>
    );
  }

});

module.exports = Main;
