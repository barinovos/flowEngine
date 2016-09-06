'use strict';
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: './dist',
		filename: 'index.js'
	},
	resolve: {
		extensions: ['', '.js']
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel-loader?presets[]=latest'],
				exclude: /node_modules/
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	]
};
