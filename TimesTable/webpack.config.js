const path = require('path');

module.exports = {
  name: 'GuGudan-setting',
  mode: 'development',
  devtool: 'eval', // producntion일 때는 hidden-source-map 이라고 쓰면됨
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  entry: {
    app: ['./index'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ],
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },
};
