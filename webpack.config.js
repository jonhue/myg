const path = require('path');

module.exports = {
    entry: {
        'myg.js': './src/myg.js',
        'myg.sass': './src/myg.sass'
    },
    output: {
        filename: '[name]',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.(s*)css$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader",
                options: {
                    includePaths: [path.resolve(__dirname, 'node_modules')]
                }
            }]
        }],
        rules: [{
            test: /\.sass$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader",
                options: {
                    includePaths: [path.resolve(__dirname, 'node_modules')]
                }
            }]
        }]
    },
};
