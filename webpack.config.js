var path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [{
      test: /.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['env', 'react']
      }
    },
    {
      test: /\.(png)$/,
      loader: 'url-loader?limit=8192'
    },
    { 
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }]
  },
};
