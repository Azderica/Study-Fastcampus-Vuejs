# Webpack

## Module

Module이란? 프로그램을 구성하는 내부의 코드가 기능별로 나뉘어져 있는 형태

### Module의 표준

Module을 사용하기 위해서는 Module을 인식하는 **Module System**과 Module을 다루는 **키워드**가 제공되어야한다.

- CommonJS(Node.js)
- ESM(ECMAScript 2015~)

### Module을 다루는 키워드

- 내보내기 : 한 곳 / 개별적
- 가져오기 : 모든 객체를 참조하는 형태

### CommonJS

- 내보내기 : `exports`
- 가져오기 : `require (모듈의 경로`

```js
const PI = 3.14
const getCircleArea = (r) => r * r * PI

const result = getCircleArea(2)
console.log(result)
```

다음의 js파일을 푼리해서 나타낼 수 있다.

```js
const PI = 3.14
const getCircleArea = (r) => r * r * PI

module.exports = {
  PI,
  getCircleArea,
}
```

```js
const { getCircleArea } = require('./mathUtil')

const result = getCircleArea(2)
console.log(result)
```
