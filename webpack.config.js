var etx = require("extract-text-webpack-plugin");
var webpack = require("webpack");
var path = require("path");
require('es6-promise').polyfill();

module.exports = {
  context: __dirname,
  entry: {
    "public": "./src/app.coffee"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "/app.js"
  },
  module: {
    loaders: [
      { test: "\.js$",     loader: "file-loader" },
      { test: /\.coffee$/, loader: "coffee-loader" },
      { test: /\.less$/,   loader: etx.extract("style-loader","css-loader?minimize!postcss-loader!less-loader")},
      { test: /\.css$/,    loader: etx.extract("style-loader", "css-loader?minimize!") },
    ]
  },
  plugins: [
      new etx("/app.css", {}),
      new webpack.DefinePlugin({BOXURL: JSON.stringify(process.env.BOXURL)})
  ],
  resolve: { extensions: ["", ".webpack.js", ".web.js", ".js", ".coffee", ".less", ".css"]}
};
