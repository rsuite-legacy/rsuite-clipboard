const path = require('path');
const webpack = require('webpack');
const loaders = require('./webpack/loaders');
const { getPlugins } = require('./webpack/plugins');
const markdownLoader = require('markdownloader').renderer;
const { NODE_ENV } = process.env;
const pkg = require('./package.json');

const common = {
    plugins: getPlugins(NODE_ENV),
    module: {
        loaders
    },
    markdownLoader
};

module.exports = (() => {
    if (NODE_ENV === 'release') {
        return Object.assign({}, common, {
            entry: {
                rsuiteClipboad: path.join(__dirname, 'src/main.js')
            },
            externals: {
                "react": {
                    commonjs: "React",
                    commonjs2: "React",
                    amd: "React",
                    root: "React"
                }
            },
            output: {
                path: path.join(__dirname, 'dist'),
                filename: '[name].min.js',
                library: 'RsuiteClipboard',
                libraryTarget: 'umd'
            },
        });
    }

    return Object.assign({}, common, {
        entry: {
            index: path.join(__dirname, 'example')
        },
        output: {
            path: path.join(__dirname, 'assets'),
            filename: '[hash].js',
        }
    });
})();
