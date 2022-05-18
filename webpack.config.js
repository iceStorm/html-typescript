const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/pages/index/index.ts",
    about: "./src/pages/about/about.ts",
  },
  module: {
    rules: [
      // typescript loader
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },

      // css loader
      {
        test: /\.css$/i,
        use: [
          // The `injectType`  option can be avoided because it is default behaviour
          { loader: "style-loader", options: { injectType: "styleTag" } },
          "css-loader",
        ],
      },

      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          { loader: "style-loader", options: { injectType: "styleTag" } },

          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },

      // file loader
      // {
      //   test: /\.(png|jpe?g|gif|jp2|webp)$/,
      //   loader: "file-loader",
      //   options: {
      //     name: "[name].[ext]",
      //   },
      // },
      {
        test: /\.(png|jpe?g|gif|jp2|webp)$/,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/pages/index/index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "./src/pages/about/about.html",
      chunks: ["about"],
    }),
  ],
};
