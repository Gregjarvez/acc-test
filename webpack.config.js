const webpack = require('webpack');
const path = require('path');
const ExtractCssPlugins = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  context: __dirname,
  devtool: 'cheap-eval-source-map',
  entry: [
    './src/App.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.json', '.scss']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: '/dist',
    compress: true
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['css-hot-loader'].concat(ExtractCssPlugins.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        }))
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'url-loader?limit=10000',
          'img-loader'
        ]
      }
    ]
  },
  plugins: [
    new ExtractCssPlugins('style.css'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ]
};

module.exports = config;
