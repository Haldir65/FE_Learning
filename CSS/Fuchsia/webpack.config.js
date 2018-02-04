var path = require("path");
var BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
  entry: "./app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env"]
          }
        }
      },
      {
        test: /\.css$/ /*end with .css*/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "less-loader" // compiles Less to CSS
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: __dirname,
    compress: true,
    port: 8080,
    hot: true,
    inline: true
  },
  devtool: "source-map"
};
