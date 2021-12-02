"use strict";
/*
 * This webpack config is used for production build of components library
 */
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const path = require("path");

const paths = {
  libSrc: path.resolve(__dirname, "src"),
  libIndex: [path.resolve(__dirname, "src/index.js")],
  libOutputDir: path.resolve(__dirname, "dist"),
  libModules: path.resolve(__dirname, "../node_modules"),
};

module.exports = (_, argv) => {
  const env = argv.mode;

  process.env.BABEL_ENV = env;
  process.env.NODE_ENV = env;

  let libraryName = "design-system";
  let plugins = [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ];

  return {
    entry: paths.libIndex,
    devtool: "source-map",
    output: {
      path: paths.libOutputDir,
      filename: libraryName + ".js",
      library: libraryName,
      libraryTarget: "umd",
      umdNamedDefine: true,
    },
    optimization: {
      moduleIds: "named",
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.(jpe?g|png|gif)$/i,
          use: ["url-loader?limit=10000", "img-loader"],
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: "@svgr/webpack",
              options: {
                svgoConfig: {
                  plugins: {
                    removeViewBox: false,
                  },
                },
              },
            },
            "file-loader",
          ],
        },
      ],
    },
    resolve: {
      modules: [paths.libModules, paths.libSrc],
      extensions: [".json", ".js", ".jsx"],
    },
    externals: [
      nodeExternals(),
      nodeExternals({
        modulesDir: path.resolve(__dirname, "../node_modules"),
      }),
    ],
    plugins: plugins,
  };
};
