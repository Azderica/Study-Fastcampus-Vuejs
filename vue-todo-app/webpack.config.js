const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
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
  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
    }),
    new VueLoaderPlugin(),
    // assets 디렉터리의 내용을 `dist` 디렉터리에 복사합니다
    new CopyPlugin([
      {
        from: 'assets/',
        to: '',
      },
    ]),
  ],
}
