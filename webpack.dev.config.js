const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./webpack.base.config.js');

const hotPort = process.env.HOT_PORT || 4000;

//如果要再chrome中访问原始的less文件,  貌似必须是"source-map" 或者 "inline-source-map"
config.devtool = 'source-map';
config.entry.vendor.push('redux-logger');

config.plugins.unshift(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
);
config.plugins.push(
    new ExtractTextPlugin("[name]-[contenthash].css", {
        disable: false,
        allChunks: true
    }),
    //用于线上发布动态生成hash
    new HtmlWebpackPlugin({
        title: 'My App',
        filename: 'index.jade',
        template:'./template/index.jade'
    })
)

config.output = {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-bundle-[hash].js',
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