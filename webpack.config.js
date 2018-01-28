const path = require('path');

module.exports = {
    entry: './src/myg.js',
    output: {
        filename: 'myg.js',
        path: path.resolve(__dirname, 'dist')
    }
};
