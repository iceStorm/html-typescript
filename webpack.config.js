const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

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

      // css/scss/sass loader
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          { loader: "style-loader", options: { injectType: "styleTag" } },

          // Translates CSS into CommonJS
          {
            loader: "css-loader",
            options: { import: true, sourceMap: true },
          },

          // Compiles Sass to CSS
          "sass-loader",
        ],
      },

      // {
      //   test: /\.s[ac]ss$/,
      //   exclude: /node_modules/,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         // outputPath: "css/",
      //         name: "[name].css",
      //       },
      //     },
      //     "sass-loader",
      //   ],
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
    clean: true,
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            ignore: ["**/index.html"],
          },
        },
      ],
    }),

    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/pages/index/index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      title: "About",
      template: "./src/pages/about/about.html",
      chunks: ["about"],
    }),
  ],
};
