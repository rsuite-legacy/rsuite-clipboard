const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports.getPlugins = function (NODE_ENV) {
    let plugins = [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
        }),
        new ExtractTextPlugin('[name].css')
    ];

    if (NODE_ENV === 'production' || NODE_ENV === 'development') {
        plugins.push(new HtmlWebpackPlugin({
            title: 'Rsuite Uploader',
            filename: 'index.html',
            template: 'docs/index.html',
            inject: true,
            hash: true
        }));
    }

    if (NODE_ENV === 'production' || NODE_ENV === 'release') {
        plugins.push(
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                },
                comments: false
            })
        );

        plugins.push(new webpack.BannerPlugin(`Last update: ${new Date().toString()}`));
    }

    if (NODE_ENV === 'production') {
        plugins.push(new CompressionPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.(js|html)$/,
            threshold: 10240,
            minRatio: 0.8
        }));
    }

    return plugins;
};
