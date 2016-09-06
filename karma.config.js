'use strict';

module.exports = function(config) {
	config.set({
		basePath: './',
		autoWatch: false,
		singleRun: true,
		colors: true,
		frameworks: ['jasmine'],
		browsers: ['PhantomJS'],
		files: [
			'test/**/*.spec.js',
			{pattern: 'node_modules/babel-polyfill/browser.js', instrument: false}
		],
		preprocessors: {
			'test/**/*.spec.js': ['webpack']
		},
		reporters: ['progress', 'html'],
		htmlReporter: {
			outputFile: 'report/units.html',
			pageTitle: 'Unit Tests',
			subPageTitle: ''
		},
		webpack: {
			module: {
				loaders: [
					{
						test: /\.js?$/,
						exclude: /(node_modules)/,
						loader: 'babel-loader?presets[]=latest'
					}
				]
			}
		},
		webpackMiddleware: {noInfo: true}
	});
};
