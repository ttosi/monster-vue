module.exports = {
  entry: [
    'babel-polyfill', './app.js'
  ],
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/, // a regular expression that catches .js files
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    port: 3000,
    contentBase: './build',
    inline: true
  }
}
