'use strict';

var webpack = require('webpack');
var m = {
    loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }
    ]
};

module.exports = [
    {
        entry: './test/specs.js',

        output: {
            path: './test',
            filename: 'spec.bundle.js',
            publicPath: '/test/'
        },

        module: m
    },
    {
        entry: './index.js',

        output: {
            filename: 'index.bundle.js',
            publicPath: '/'
        },

        module: m
    }
];
