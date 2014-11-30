'use strict';

// Dependencies
window.$ = require('jquery');
window.Backbone = require('backbone');
Backbone.$ = $;
var React = require('react');

// Start Router
var router = require('./app/router');
router.init();

var service = require('./service');

var imagesContainer = $("#reddit-images");
var textContainer = $("#reddit-text");
var inputBox = $("#reddit-query");

// Components
var picBox = React.createFactory(require('./pic-box'));
var textBox = React.createFactory(require('./text-box'));

var isImage = function(imageURL) {
  return imageURL.slice(imageURL.length-4) === '.jpg';
};

var onInputKeyPress = function(event) {
  if (event.keyCode === 13) {
    service
    .search(this.value)
    .success(function(res) {
      res.data.children.forEach(renderStory);
    })
    .then(function(res) {
      throw new Error(res.message);
    });
  }
};

/**
 * Returns HTML for div containing reddit image
 * @param {object} data
 */
var renderStory = function(data) {
  if (isImage(data.url)) {
    React.render(picBox, imagesContainer);
  } else {
    React.render(picBox, textContainer);
  }
};

inputBox.on('keyup', onInputKeyPress);
