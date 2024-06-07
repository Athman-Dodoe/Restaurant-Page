const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');


module.exports = {
    mode: "development", 
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
      assetModuleFilename: 'images/[hash][ext][query]'
    },
    module: {
        rules : [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
                
            },
            {
              test: /\.(png|jpg|gif|svg)$/i,
              type: 'asset/resource'
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
      ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist')
      },
      port: 3000,
      open: true
    } 
  };