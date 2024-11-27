// eslint-disable-next-line
const { defineConfig } = require("@vue/cli-service");

// eslint-disable-next-line
const webpack = require("webpack");

// eslint-disable-next-line
module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "false",
      }),
    ],
  },
});
