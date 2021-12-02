const path = require("path");
const pathToInlineSvg = path.resolve(__dirname, "../src/components/Icon/svg");
const webpack = require("webpack");

const tokensFileName = "design-tokens.json";
const tokensPath = "./src/tokens/";

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.js"],
  addons: ["@storybook/addon-essentials", "storybook-addon-designs", "creevey"],
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config) => {
    // use @babel/preset-react for JSX and env (instead of staged presets)
    config.module.rules[0].use[0].options.presets = [
      require.resolve("@babel/preset-react"),
      require.resolve("@babel/preset-env"),
    ];

    // SVGR
    const rules = config.module.rules;
    // modify storybook's file-loader rule to avoid conflicts with svgr
    const fileLoaderRule = rules.find((rule) => rule.test.test(".svg"));

    fileLoaderRule.exclude = pathToInlineSvg;

    rules.push({
      test: /\.svg$/,
      include: pathToInlineSvg,
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
    });

    /*
     * Add plugin which adds design-tokens source file to watch scope
     */
    config.plugins.push({
      apply: (compiler) => {
        compiler.hooks.afterCompile.tap("WatchTokensSource", (compilation) => {
          compilation.fileDependencies.add(
            path.resolve(__dirname, tokensFileName)
          );
        });
      },
    });

    /*
     * Add plugin which detects if design-token file was invalidated and rebuilds tokens
     */
    config.plugins.push({
      apply: (compiler) => {
        compiler.hooks.invalid.tap("RebuildTokens", (fn) => {
          const StyleDictionary = require("style-dictionary").extend(
            `${tokensPath}/config.js`
          );

          if (/design-tokens.json$/.test(fn)) {
            // StyleDictionary.extend("./.tokens/config.js");
            StyleDictionary.buildPlatform("js");
          }
        });
      },
    });

    return config;
  },
};
