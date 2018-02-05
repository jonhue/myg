const path = require('path');

module.exports = [{
    entry: {
        'myg.js': './src/myg.js'
    },
    output: {
        filename: 'myg.js',
        path: path.resolve(__dirname, 'dist')
    }
}, {
    entry: {
        'myg.sass': './src/myg.sass'
    },
    output: {
        filename: 'myg.css',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.sass$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'sass-loader',
                options: {
                    includePaths: [path.resolve(__dirname, 'node_modules')]
                }
            }]
        }]
    }
}];
