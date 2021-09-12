const webpack = require("webpack"),
  ExtractTextPlugin = require("extract-text-webpack-plugin"),
  path = require('path');

module.exports = {
  entry: __dirname + "/src/app.js",
  output: {
    filename: "site-bundle.js",
    path: __dirname + "/dist"
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2|ttf|svg|eot|jpg)/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8000
            }
          }
        ]
      },
      {
        test: /\.(s*)css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            { loader: "css-loader" },
            { loader: "sass-loader"}
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("style.css"),
    new webpack.ProvidePlugin({
      jQuery: "jQuery",
      $: "jQuery"
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, '.'),
    },
    compress: true,
    port: 9000,
  }
}