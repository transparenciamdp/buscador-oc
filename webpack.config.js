var path = require('path');
var webpack = require('webpack');
var PROD = JSON.parse(process.env.PROD_ENV || '0');

if(PROD) {
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    });
}
//new webpack.optimize.UglifyJsPlugin();

module.exports = {
    entry: ['whatwg-fetch', './app.jsx'],
    output: {
        path: __dirname + '/dist',
        filename: PROD ? 'app.build.min.js' : 'app.build.js'
    },
    plugins: PROD ? [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ] : [],
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
};
