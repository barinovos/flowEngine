const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.js');

module.exports = webpackMerge(commonConfig, {
	debug: true,
	devtool: 'inline-source-map',
	output: {
		path: './build',
	},
	devServer: {
		port: '9091',
		host: 'localhost',
		watchOptions: {
			aggregateTimeout: 300,
			poll: 1000
		},
		outputPath: './build'
	}
});