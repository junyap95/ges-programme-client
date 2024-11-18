// webpack.config.js
module.exports = {
  // Other configurations...
  resolve: {
    fallback: {
      os: require.resolve("os-browserify/browser"),
    },
  },
};
