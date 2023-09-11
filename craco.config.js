const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const path = require("path");

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      "@components": resolvePath("./src/components"),
      "@assets": resolvePath("./src/assets"),
      "@pages": resolvePath("./src/pages"),
      "@public": resolvePath("./src/public"),
      "@imports": resolvePath("./src/imports"),
    },
    configure: (webpackConfig) => {
      webpackConfig.optimization.minimize = true;
      webpackConfig.optimization.minimizer.push(
        new ImageMinimizerPlugin({
          minimizer: {
            implementation: ImageMinimizerPlugin.imageminMinify,
            options: {
              plugins: [["mozjpeg", { quality: 85 }]],
            },
          },
        })
      );
      return webpackConfig;
    },
  },
};
