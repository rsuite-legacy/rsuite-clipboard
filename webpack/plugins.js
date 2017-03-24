const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports.getPlugins = function (NODE_ENV) {
    let plugins = [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
        }),
        new ExtractTextPlugin('[name].css'),
        new HtmlWebpackPlugin({
            title: 'Rsuite Uploader',
            filename: 'index.html',
            template: 'example/index.html',
            inject: true,
            hash: true
        })
    ];

    if (NODE_ENV === 'production') {
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
    return plugins;
};
