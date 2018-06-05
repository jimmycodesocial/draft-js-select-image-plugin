/* eslint-disable no-var */
var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: [
    './src/index.js'
  ],
  externals: [nodeExternals({
    modulesFromFile: true
  })],
  mode: 'production',
  optimization: {
    minimize: true
  },
  performance: {
    hints: false
  },
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, 'lib'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { 
          loader: 'babel-loader', 
          options: { 
            plugins: ['transform-runtime'],
            presets: [
              'es2015',
              'react',
              'stage-0'
            ]
          } 
        }
      }
    ]
  }
};
