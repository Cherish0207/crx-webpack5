const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  devtool: false,
  cache: {
    // 如果使用filesystem,就不要用cnpm安装包了,webpack5和cnpm有冲突,使用cnpm install安装会卡死 (npm yarn都可以)
    // http://github.com/cnpm/cnpm/issues/335
    type: "filesystem", // memory内存(默认值,快) filesystem文件系统(慢一些,但可以持久化)
    // cacheDirectory: path.resolve(__dirname, "node_modules/.cache/webpack"), // 缓存目录
  },
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "[name].js", // 入口代码块文件名的生成规则
    path: path.resolve(__dirname, "history/natureDist"),
    chunkFilename: "[name].js", // 非入口模块文件名的生成规则
  },
  devServer: {
    port: 8080,
    open: true,
    contentBase: "./dist",
  },
  optimization: {
    moduleIds: "natural",
    chunkIds: "natural",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.resolve("src"),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.png$/,
        type: "asset/resource", // 对标 file-loader
      },
      {
        test: /\.ico$/,
        type: "asset/inline", // 对标 url-loader 模块大小<limit base64字符串
      },
      {
        test: /\.txt$/,
        type: "asset/source", // 对标 raw-loader
      },
      {
        test: /\.jpg$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024,
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html"),
    }),
  ],
};
