const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const { getCircleArea, getSquareArea } = require('./mathUtil')

rl.question('넓이를 구하고자 하는 도형의 종류를 입력해주세요', (figure) => {
  console.log(`선택된 도형: ${figure}`)

  switch (figure) {
    case '정사각형':
      rl.question('변의 길이?', (input) => {
        console.log(`input : ${input}`)
        console.log(`output : ${getSquareArea(input)}`)
        rl.close()
      })
      break
    case '원':
      rl.question('반지름의 길이?', (input) => {
        console.log(`input : ${input}`)
        console.log(`output : ${getCircleArea(input)}`)
        rl.close()
      })
      break
    default:
      console.log('지원하지 않습니다.')
      break
  }
})
