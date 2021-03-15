# Vue 프로젝트 - Todo List

## Vue-Loader

- [Doc : Vue Loader](https://vue-loader-v14.vuejs.org/kr/)
- [Web Pack](https://webpack.github.io/)

> Webpack?

간단하게 이야기 하자면, 모듈의 묶음으로 이해할 수 있습니다. 파일 간의 종속성을 파악한 다음 정적 Asset으로 묶어서 배포합니다.

### Vue 컴포넌트

vue 파일은 다음과 같이 구성됩니다.

```html
<template>
  <div class="example">{{ msg }}</div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Hello world!',
      }
    },
  }
</script>

<style>
  .example {
    color: red;
  }
</style>

<custom1> 예: 컴포넌트에 대한 설명서 </custom1>
```

- [Doc : Vue 컴포넌트 spec](https://vue-loader-v14.vuejs.org/kr/start/spec.html)

## Todo App 구성

- [원문 코드](https://github.com/HeropCode/Vue-Todo-app)

최초 세팅할 때는 vue-cli를 사용하지 않으므로 원리를 이해하는데 목적을 가집니다.

### 초기 세팅

1. `npm init`

2. `npm i vue@^2 @babel/polyfill`

3. `npm i -D webpack webpack-cli webpack-dev-server webpack-merge @babel/core @babel/preset-env babel-loader vue-template-compiler vue-loader vue-style-loader css-loader node-sass sass-loader@^7 eslint@^5 babel-eslint eslint-config-standard@^12 eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard eslint-plugin-vue html-webpack-plugin copy-webpack-plugin clean-webpack-plugin postcss-loader autoprefixer`

- 여러 모듈을 한줄로 설치한 것입니다.

> Tip

`npm install --save-dev eslint-config-prettier`

다음을 install해서 prettier와 eslint 충돌 시, 문제를 해결할 수 있습니다.

### webpack

module은 test에 어떤게 들어오면 어떻게 처리해주세요로 이해하면 된다. 즉, `vue$`인 경우에는 `vue-loader`로 해달라는 의미입니다.

### 최상위 컴포넌트 (App.vue)

`main.js` -> `App.vue` -> `수많은 vue 파일`

### Vue-Loader

- [Doc](https://vue-loader.vuejs.org/guide/)