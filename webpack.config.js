var webpack = require('webpack');
var path = require('path');

var config = {
    entry: [
        path.resolve(__dirname, 'templates/app/app.js')       // 定义入口文件
    ],
    output: {                                       // 定义出口目录
        path: path.resolve(__dirname, 'templates/build'),
        filename: 'bundle.js',
        publicPath: './bundle.js'
    },
    resolve: {                                      // resolve 指定可以被 import 的文件后缀
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },
            {
                test: /\.js$/,
                loaders: ['babel?presets[]=es2015'],
                exclude: /node_modules/
            },
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader?presets[]=es2015,presets[]=react']
            }
        ]
    }
}

module.exports = config;