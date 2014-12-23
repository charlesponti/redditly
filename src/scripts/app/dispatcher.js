'use strict';

var _ = require('lodash');
var Backbone = require('backbone');

// Extend Backbone.Events to create applicaton event dispatcher
var AppDispatcher = _.extend({}, Backbone.Events);

module.exports = AppDispatcher;
