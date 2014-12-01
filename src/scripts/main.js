'use strict';

// Dependencies
window.$ = require('jquery');
window.Backbone = require('backbone');
Backbone.$ = $;
var React = require('react');

// Start Router
var router = require('./app/router');
router.init();
