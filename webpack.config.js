'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {

	target: "web",

	debug: true,

	cache: false,

	devtool: "source-map",

	entry: "./src/main.js",

	output: {
		path: "./build/scripts",
		filename: "bundle.js"
	},

	resolve: {
		modulesDirectories: [
			"build/vendor",
			"node_modules"
		]
	},

	stats: {
		colors: true,
		reasons: true
	},

	module: {
		loaders: [
			{ test: /\.css$/, loader: "style!css" },
			{ test: /\.jsx$/, loader: "jsx-loader" },
			{ test: /\.less$/, loader: "style-loader!css-loader!less-loader" }
		]
	},

	plugins: [
		new webpack.optimize.DedupePlugin()
	]

};
