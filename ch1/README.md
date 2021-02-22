# Vue.js 시작하기

[Vue.js 가이드](https://kr.vuejs.org/index.html)

## Node JS 설치

[참고 자료](https://heropy.blog/2018/02/17/node-js-install)

- nvm 을 통해서 node 버전 관리 가능
- [설치 오류, DS_FILE 권한 불가](https://www.python2.net/questions-830844.htm)

## Vue 기본 설치

[Vuejs 가이드](https://kr.vuejs.org/v2/guide/)

- 개발 시, 개발 버전으로 테스트하고 운영시는 프로덕션 버전을 사용합니다.
- 다운로드 필요 없이, CDN으로 사용가능합니다.

## 웹 에디터

- [codepen.io](https://codepen.io/)
  - js > 톱니바퀴 > CDN 검색창 > vue 검색 > 2.x 버전 > save
- [JSFiddle](https://jsfiddle.net/)
  - js + No-library > frameworks & extensions > vue 2.x
- [JSBin](http://jsbin.com/?output)
  - cdn 추가해서 사용하기

## Vue 시작하기

### 선언적 렌더링

[Link](https://kr.vuejs.org/v2/guide/index.html#%EC%84%A0%EC%96%B8%EC%A0%81-%EB%A0%8C%EB%8D%94%EB%A7%81)

Vue.js의 핵심에는 간단한 템플릿 구문을 사용하여 DOM에서 데이터를 선언적으로 렌더링 할 수있는 시스템이 있습니다.

- DOM(Document of Model)

Vue는 데이터와 DOM이 연결되었으며 모든 것이 **반응형**입니다.

- 해당 반응형은 특정 데이터가 변경시 다시 반영(렌더링)되는 것

> 샘플 코드

```html
<div id="app">
  <div class="text" v-bind:class="{ 'active': active }">
    {{ message }}
  </div>
</div>
```

```css
.text {
  font-size: 70px;
  color: red;
}
```

```js
const vm = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    active: true
  }
})
```
