const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
require('@babel/polyfill')

module.exports = {
  // 진입점
  entry: {
    app: ['@babel/polyfill', path.join(__dirname, 'main.js')],
  },
  // 결과물에 대한 설정
  output: {
    filename: '[name].js', // app.js
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
        // 동작 순대로 진행하기 때문에 순서가 중요.
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
}
