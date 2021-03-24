module.exports = {
  // entry: "./test.js",
  entry:'mocha-loader!babel-loader!./store/__tests__/index.js',
  mode:'development',
  output: {
    path: __dirname,
    filename: "./dist/test-bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
