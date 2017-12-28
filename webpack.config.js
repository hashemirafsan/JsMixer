var webpack = require('webpack');

module.exports = {
	entry: {
		"mixed" : "./src/index.js",
		"mixed.min" : "./src/index.js"
	},
    devtool: 'source-map',
    output: {
        path: __dirname + '/dist/src/',
        filename: "[name].js"
    },
    module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015']
                 }
             }
         ]
    },
    plugins: [
	    new webpack.optimize.UglifyJsPlugin({
	      include: /\.min\.js$/,
	      minimize: true
	    })
	]
};