/**
 * Created by Godfery on 2017/3/10.
 */
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const markdownRenderer = require('react-markdown-reader').renderer;

module.exports = [
    {
        test: /\.js$/,
        use: [
            'babel-loader?babelrc'
        ],
        exclude: /node_modules/
    },
    {
        test: /\.(less|css)$/,
        loader: ExtractTextPlugin.extract({
            use: [
                {
                    loader: 'css-loader',
                }, {
                    loader: 'postcss-loader',
                }, {
                    loader: 'less-loader'
                }
            ],
            // use style-loader in development
            fallback: 'style-loader?{attrs:{prop: "value"}}'
        })
    },
    {
        test: /\.json$/,
        use: ['json-loader']
    },
    {
        test: /\.md$/,
        use: [
            {
                loader: 'html-loader'
            }, {
                loader: 'markdown-loader',
                options: {
                    pedantic: true,
                    renderer: markdownRenderer
                }
            }
        ]
    },
    {
        test: /\.(woff|woff2|eot|ttf|svg)($|\?)/,
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit: 1,
                    size: 16,
                    hash: 'sha512',
                    digest: 'hex',
                    name: 'resources/[hash].[ext]'
                }
            }
        ]
    }
];
