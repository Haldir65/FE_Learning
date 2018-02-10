var path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "app.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  node: {
    fs: "empty"
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env"]
          }
        }
      },
      // {
      //   test: /\.css$/ /*end with .css*/,
      //   use: ["style-loader", "css-loader"]
      // },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { importLoaders: 1 }
          },
          "less-loader"
        ]
      }
    ]
  },
  devServer: {
    inline: true,
    contentBase: __dirname,
    compress: true,
    port: 8990
  }
};