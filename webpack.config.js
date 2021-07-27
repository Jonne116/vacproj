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
        context: ['/vaccine', '/injections'],
        target: 'http://localhost:3001',
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
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};