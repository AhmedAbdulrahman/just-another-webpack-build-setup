const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: './app/app.js'
  },
  output: {
    path: path.join(process.cwd(), 'public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('css?sourceMap!postcss!stylus'),
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: [
            'es2015'
          ]
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ],
  postcss: function () {
    return [ autoprefixer({ browsers: ['last 2 versions'] }) ];
  }
}
