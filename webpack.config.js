var webpack = require('webpack');

module.exports = {
	entry: {
		"mixed" : "./src/index.js",
		"mixed.min" : "./src/index.js"
	},
    devtool: 'source-map',
    output: {
        path: __dirname + '/dist/src/',
        publicPath: '/dist/src/',
        filename: "[name].js"
    },
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
      ignored: /node_modules/
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