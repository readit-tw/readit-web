var webpack = require('webpack');  
module.exports = {  
  entry: [
    "./js/index.js"
  ],
  output: {
    path: __dirname,
    filename: "readit.js"
  },
  module: {
    loaders: [
      { test: /\.js?$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      { test: /\.css$/, loader: "style!css" }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]

};
