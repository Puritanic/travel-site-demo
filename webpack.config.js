const path = require('path');

module.exports = {
	entry: "./app/assets/scripts/app.js", // tell webpack which file should it be looking for to bundle it
	output: {
		path: path.resolve(__dirname, "./app/temp/scripts"),
		filename: "App.js"
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				},
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}
}