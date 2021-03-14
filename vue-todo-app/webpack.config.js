const path = require('path')

module.exports = {
  // 진입점
  entry: {
    app: path.join(__dirname, 'main.js'),
  },
  // 결과물에 대한 설정
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
  },
  module: '',
  plugins: '',
}
