/**
 * WordPress Dependencies
 */
const defaultConfig = require('@wordpress/scripts/config/webpack.config.js');
const DependencyExtractionWebpackPlugin = require('@wordpress/dependency-extraction-webpack-plugin');

/**
 * External Dependencies
 */
const path = require('path');

/**
 * Export
 */

module.exports = {
	...defaultConfig,
	mode: "production",
	module: {
		...defaultConfig.module,
		rules: [
			...defaultConfig.module.rules,
			{
				test: /\.svg$/i,
				type: 'asset/source'
			}
		],
	}, 
	output: {
        filename: "[name].js",
        path: path.join(__dirname, "blocks/build")
    }
}