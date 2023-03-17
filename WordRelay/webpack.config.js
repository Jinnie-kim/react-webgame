const path = require('path'); // node에서 경로를 조작할 수 있도록 하는 거

module.exports = {
  name: 'wordrelay-setting',
  mode: 'development', // 실서비스에서는 production으로 바꾸면된다.
  devtool: 'eval', // 빠르게하겠다는 뜻..?
  resolve: {
    extensions: ['.js', '.jsx'], // 이렇게 추가해주면 밑에서 확장자를 적어주지 않아도 알아서 맞는 파일을 잘 찾는다.
  },

  // entry와 output이 제일 중요하다.
  entry: {
    // 입력
    app: ['./client'], // 'WordRelay.jsx' client.jsx에서 이미 불러오고 있기 때문에 적어줄 필요 없다.
  },

  module: {
    rules: [
      {
        test: /\.jsx?/, // 규칙을 적용할 파일들
        loader: 'babel-loader', // 어떤 규칙을?
        options: {
          // babel option들
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ],
  },

  output: {
    // 출력
    path: path.join(__dirname, 'dist'), // join하면 경로를 알아서 합쳐준다. __dirname: 현재 폴더
    filename: 'app.js',
  },
};
