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

#### CommonJS

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

#### ESM

- 가져오기 : `import 모듈_이름 from 모듈_위치`
- 내보내기 : `export`

설치 명령어

- `node -r esm node.js`

```js
import { getCircleArea } from './mathUtil'

const result = getCircleArea(2)
console.log(result)
```

```js
const PI = 3.14
const getCircleArea = (r) => r * r * PI

module.export = {
  PI,
  getCircleArea,
}
```

### Module의 종류

#### 1. Built-in Core Module (ex. Node.js module)

파일의 경로를 자유롭게 함

```js
const path = require('path')

module.exports = {}
```

#### 2. Community-based Module(ex. NPM)

모듈을 가져와서 사용 가능

사용시, npm CLI를 사용해야합니다. (ex. npm i ModuleName)

- [NPM Site](https://www.npmjs.com/)

#### 3. Local Module (특정 프로젝트에 정의된 모듈)

### Module 예제.

```js
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('원하는 도형을 작성하세요 : ', input => {
  console.log input;
  rl.close;
})
```
