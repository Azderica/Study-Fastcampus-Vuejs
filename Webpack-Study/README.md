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

### Module 장점

- 코드의 재사용성 증가
- 코드의 관리가 편해짐
- 코드를 모듈화하는 기준이 명확해짐

<br/>

## Bundle

![image](https://user-images.githubusercontent.com/42582516/112001504-5f7cc380-8b62-11eb-8e81-05c6406f0fcc.png)

### Bundle이 중요한 이유

- 모든 모듈을 로드하기 위해 검색되는 시간이 단축됩니다.
  - 중복되는 모듈 포함 함수들을 줄 일 수 있습니다.
- 사용하지 않는 코드를 제거해줍니다.
- 파일의 크기를 줄여줍니다.

<br/>

## Webpack

### Webpack의 이해

#### Webpack 기본구조

해당 내용은 위의 이미지를 참고하면 됩니다.

Webpack이 바라보는 Module은 다음과 같습니다.

- js, sass, hbs, jpg, png, ...

이러한 파일들을 js, css, jpg, png로 바꿔 주는 과정을 bundle이라고 합니다.

즉, 다음과 같이 파일을 bundle.js로 표현합니다.

![image](https://user-images.githubusercontent.com/42582516/112002511-4f191880-8b63-11eb-899c-1ea9ff9508dd.png)

**Entry**

- 모듈의 의존 관계를 이해하기 위한 시작점을 설정합니다.
- 의존성 그래프를 구성해줍니다.

**Output**

- Webpack이 생성하는 번들 파일에 대한 정보를 설정합니다.

#### Webpack 사용하기

- `npm i -D webpack webpack-cli`
- `npx webpack --target=node`

이를 다음과 같이 사용할 수 있습니다.

`webpack.config.js`를 다음과 같이 설치 후, `npx webpack` 을 실행하면 해당 파일이 `dist/bundle.js`로 저장되는 것을 확인할 수 있습니다.

```js
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  target: 'node',
}
```

**Mode**

- Package.json --save-dev, --save
- 개발 환경과 프로덕션 환경
- Mode & Webpack-merge

Package.json 은 2개로 나눠짐

- 어플리케이션 내부에서 직접 포함되는 모듈 (--save), `dependencies`
- 개발 과정에 필요한 모듈 (--save-dev), `devDependencies`

**Loader**

다양한 모듈들을 입력받아 처리하는 역할

> [CSS-Loader](https://github.com/webpack-contrib/css-loader)

**Plugin**

```js
module.exports = {
  plugins: [new Plugin({ ...option }), ...]
}
```

- `npm i html-webpack-plugin -D`

#### Webpack 설정

- [HTML webpack plugin](https://github.com/jantimon/html-webpack-plugin)

**Handlebars & Webpack**

Handlebars는 template engine입니다.

Model + template == (Handlebars) ==> View

- `npm i handlebars -D`
- `npm i handlebars-loader -D`

**Caching & Webpack**

캐싱은 여러 캐시가 있지만 여기서는 로컬 캐시만 사용 예정 (브라우저 캐싱)

번들파일로 만들 때, 효과적으로 캐싱을 사용해서 만들 수 있다.

수정사항이 바뀔 때, caching file이 변함으로서 수정할 수 있다. (bundle은 공통이지만.)

캐시파일이 폴더에 쌓이는 것을 막기 위해서 다음을 사용합니다.

- `npm i clean-webpack-plugin -D`

다음과 같이 스타일 태그를 설정합니다.

- `npm i mini-css-extract-plugin -D`

**Chunk & chunkhash**

Chunk : 몇가지 기준에서 여러 파일로 나누는 것

- Ex. Bundle.js -> Chunk A, Chunk B, Chunk C

Runtime Chunk 파일과 Vender Chunk 파일로 구성.

- Runtime은 고정이고, 일부 코드만 바뀌게 되므로 최적화 가능
- Vender Chunk는 외부 모듈, jQuery 등이며 마찬가지로 이 또한 외부에서 가져오게 되면 최적화가 된다.

설치 파일.

- `npm i jquery -S`

**Minification & Mangling**

- Minification : 코드 경량화
- Mangling : 난독화 과정 (코드 용량 감소 및 외부에서 보기힘들게 처리)

html 최적화는 `html-webpack-plugin`의 minify를 이용하면 되고, css는 cssnano를 사용하면 된다.

> [CSSNano Doc](https://cssnano.co/)

- [optimize-css-assets-webpack-plugin](https://github.com/NMFR/optimize-css-assets-webpack-plugin)

다음과 같이 설치가능합니다.

- `npm i optimize-css-assets-webpack-plugin -D`

js도 최적화가 가능합니다. 크게 3가지 컴프레셔가 있습니다. (그중에서 webpack이 기본적으로 사용하는 terser를 여기서 설치합니다. / 그외에는 uglify, babel-minify)

- `npm i terser-webpack-plugin -D`

cache true로 하면 에러가 발생해서 이를 추가하지는 않았음

##### Development Mode & Production Mode

다음 파일들을 설치

- npm i webpack-merge -D
- npm i -D webpack-dev-server

#### Webpack 활용

##### File Loader

File을 Copy해서 읽어들어옴

- `npm i file-loader -D`

##### URL Loader

- `npm i url-loader -D`

##### SASS Loader

CSS 의 확장판

- [공식 DOC](https://sass-lang.com/)

파일 설치 방법.

- `npm i sass-loader -D`

##### POSTCSS

- [공식 DOC](https://postcss.org/)

##### BROWSERLIST

- [git repository](https://github.com/browserslist/browserslist)

##### stylelint

- [git repository](https://github.com/stylelint/stylelint)
- [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
- [stylelint-config-recommended](https://github.com/stylelint/stylelint-config-recommended)

회사 rule 대로 하면 된다. (recommended에 여러 회사 있다.)

##### BABEL

다음 중 하나로 설정 가능.

1. bebel.rc
2. babel.config.js

- [Babel Doc](https://babeljs.io/)

##### WEBPACK 마무리.
