var path = require("path");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "src", "index.ts"),
  output: {
    filename: "index.js",
    globalObject: "this",
    library: "JSCodeRunner",
    libraryExport: "default",
    libraryTarget: "umd",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};
