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
          generator: [
            {
              preset: "webp",
              implementation: ImageMinimizerPlugin.imageminGenerate,
              options: {
                plugins: ["imagemin-webp"],
              },
            },
          ],
        })
      );
      webpackConfig.module.rules[1].oneOf[1] = {
        test: /\.(jpe?g|png|webp)$/i,
        use: {
          loader: 'responsive-loader',
          options: {
            adapter: require('responsive-loader/sharp'),
          },
        },
      };
      return webpackConfig;
    },
  },
};
