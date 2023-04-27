const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const nodeENV = process.env.NODE_ENV;

console.log("nodeENV", nodeENV);

const config = {
  devtool: "source-map",
  entry: {
    main: ["./src/index.js", "./src/style.scss"],
    // react: ["./src/react.js"],
  },
  output: {
    pathinfo: true,
    path: path.resolve(__dirname, "./dist"),
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  watchOptions: {
    ignored: ["**/dist/**/*.*", "**/node_modules"],
  },
};

module.exports = () => {
  switch (nodeENV) {
    case "production":
      config.mode = "production";
      config.optimization = {
        minimize: true,
        minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
      };
      break;
    case "spy":
      config.mode = "development";
      config.watch = true;
      break;

    default:
      config.mode = "development";
      break;
  }

  return config;
};
