const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'client', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'server/static'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 3003,
    watchContentBase: true,
    proxy: [
      {
        context: ['/vaccine', '/injections', '/dash'],
        target: 'http://localhost:3002',
      }]
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, 'client'),
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                'targets': { 'esmodules': true }
              }],
              '@babel/preset-react'
            ]
          }
        }]
      },
      {
        test: /\.css$/,       
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};