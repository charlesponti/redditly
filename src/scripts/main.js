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
      res.data.children.forEach(function(child) {
        if (isImage(child.data.url)) {
          addChildTo(imagesContainer, child);
        } else {
          addChildTo(textContainer, child);
        }
      });
    })
    .then(function(res) {});
  }
};

// # Returns HTML for div containing reddit image
// # @param   {string} permalink - URL to reddit page
// # @param   {string} imageURL - URL for image
// # @return  {String}           [description]
var makeRedditBox = function(data) {
  if (isImage(data.url)) {
    // makeRedditPicBox(data);
  } else {
    // makeRedditTextBox(data);
  }
};

var addChildTo = function(box, child) {
  box.html(box.html() + makeRedditBox(child.data));
};

inputBox.on('keyup', onInputKeyPress);
