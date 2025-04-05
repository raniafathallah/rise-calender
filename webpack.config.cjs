const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './bundle'),
        filename: 'server.js',
    },
    resolve: {
        extensions: ['.js']
    },
    target: 'node',
    stats: 'errors-only'
}