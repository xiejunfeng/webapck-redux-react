
const webpack = require('webpack');
const path = require('path');

const devBuild = process.env.NODE_ENV !== 'production';
const nodeEnv = devBuild ? 'development' : 'production';


module.exports = {
    context: __dirname,
    entry: {

        vendor: [
            'react',
            'react-dom',
            'react-redux',
            'react-router',
            'lodash',
            'redux'
        ],
        app: [
            './app/bundles/startup/clientGlobals'
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss']
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        //定义编译环境
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(nodeEnv),
            },
        }),
        //公共模块打包
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor-bundle.js',
            minChunks: Infinity,
        }),
    ],
    module: {
        loaders: [
            { test: /\.(woff2?|svg)$/, loader: 'url?limit=10000' },
            { test: /\.(ttf|eot)$/, loader: 'file' },
            { test: /\.(jpe?g|png|gif|svg|ico)$/, loader: 'url?limit=10000' },
            { test: /\.json$/, loader: 'json' },

            //需要在浏览器端暴露的引用
            { test: require.resolve('react'), loader: 'expose?React' },
            { test: require.resolve('react-dom'), loader: 'expose?ReactDOM' },
            { test: require.resolve('lodash'), loader: 'expose?Lodash' }
        ]
    }
}