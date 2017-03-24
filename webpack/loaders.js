/**
 * Created by Godfery on 2017/3/10.
 */
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = [
    {
        test: /\.js$/,
        loaders: [
            'babel?babelrc'
        ],
        exclude: /node_modules/
    }, {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
    }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    }, {
        test: /\.json$/,
        loader: 'json'
    }, {
        test: /\.md$/,
        loader: 'html!markdown'
    }, {
        test: /\.(woff|woff2|eot|ttf|svg)($|\?)/,
        loaders: ['url?limit=1&hash=sha512&digest=hex&size=16&name=resources/[hash].[ext]']
    }
];
