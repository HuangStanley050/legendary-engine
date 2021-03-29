const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("./node_modules/webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8080,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        products: "products@http://loalhost:8081/remoteEntry.js",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./dist/index.html",
    }),
  ],
};
