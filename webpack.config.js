var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
          path: BUILD_DIR,
          filename: 'bundle.js'
    },

    plugins: [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: {
          warnings: false
        }
      }),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      })
    ],

    module : {
      loaders : [
      {
        test : /\.jsk?/,
        include : APP_DIR,
        loader: 'babel-loader'
      },
      {
        test : /\.scss$/,
        use: [
          {
              loader: "style-loader" // creates style nodes from JS strings
          }, {
              loader: "css-loader" // translates CSS into CommonJS
          }, {
              loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      },
      {
        test : /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { root: '.' }
          }
        ]
      }
    ]
  }
}
module.exports = config;
