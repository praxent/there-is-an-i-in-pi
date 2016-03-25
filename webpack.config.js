'use strict';

const path = require('path');

module.exports = {
    entry: './app/App.jsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: 'http://localhost:8080/build/',
        filename: 'app.js'
    },
    resolve: {
        root: [
            path.join(__dirname, "..", "fs", "node_modules")
        ],
        extensions: ['', '.js', '.json']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: ['babel-loader'],
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            }
        ]
    }
};
