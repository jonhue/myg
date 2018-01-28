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
            test: /\.(s*)(a|c)ss$/,
            use: [{
                loader: "sass-loader",
                options: {
                    includePaths: [path.resolve(__dirname, 'node_modules')]
                }
            }]
        }]
    },
};
