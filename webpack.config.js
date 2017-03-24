const path = require('path');
const webpack = require('webpack');
const loaders = require('./webpack/loaders');
const { getPlugins } = require('./webpack/plugins');
const markdownLoader = require('markdownloader').renderer;
const { NODE_ENV, NODE_TYPE } = process.env;

const config = {
    entry: {
        index: path.join(__dirname, 'example')
    },
    output: {
        path: path.join(__dirname, 'assets'),
        filename: '[name].js',
        library: 'rsuite-upload',
        libraryTarget: 'umd'
    },
    plugins: getPlugins(NODE_ENV),
    module: {
        loaders
    },
    markdownLoader
};

module.exports = config;
