const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = require('./webpack.base.config.js');

const hotPort = process.env.HOT_PORT || 4000;


config.entry.vendor.push('redux-logger');

config.plugins.unshift(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
);
config.plugins.push(
    new ExtractTextPlugin("[name]-[contenthash].css", {
        disable: false,
        allChunks: true
    })
)

config.output = {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-bundle.js',
    publicPath: '/static/'
};

config.module.loaders.push(
    {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        include: __dirname,
        query: {
            //可以写入.babelrc文件中
            "presets": ["es2015", "stage-0", "react"]
        }
    },
    {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    },
    {
        test: /\.less$/,
        loader:ExtractTextPlugin.extract(
            'css?sourceMap!less?sourceMap'
        )
    }
);

module.exports = config;