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

- 반응형은 특정 데이터가 변경시 다시 반영(렌더링)되는 것을 의미합니다.

> 샘플 코드

```html
<div id="app">
  <div class="text" v-bind:class="{ 'active': active }">{{ message }}</div>
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
    active: true,
  },
})
```

### 조건문과 반복문

[Link](https://kr.vuejs.org/v2/guide/index.html#%EC%A1%B0%EA%B1%B4%EB%AC%B8%EA%B3%BC-%EB%B0%98%EB%B3%B5%EB%AC%B8)

해당 코드를 참고하면 되지만 추가족으로 일반적으로 사용시에는 꼭 바인드를 사용해야합니다. (중복을 피할 수 있고 많은 문제를 예방할 수 있다.)

```html
<div id="app">
  <ul>
    <li v-for="item in items" v-bind:key="item.id">{{ item.message }}</li>
  </ul>
</div>
```

```js
const vm = new Vue({
  el: '#app',
  data: {
    items: [
      {
        id: '1',
        message: 'item 1',
      },
      {
        id: '2',
        message: 'item 2',
      },
      {
        id: '3',
        message: 'item 3',
      },
    ],
  },
})
```

### 사용자 입력 핸들링

[link](https://kr.vuejs.org/v2/guide/index.html#%EC%82%AC%EC%9A%A9%EC%9E%90-%EC%9E%85%EB%A0%A5-%ED%95%B8%EB%93%A4%EB%A7%81)

사용자가 앱과 상호 작용할 수 있게 하기 위해 우리는 `v-on` 디렉티브를 사용하여 Vue 인스턴스에서 메소드를 호출하는 이벤트 리스너를 추가 가능합니다.

```html
<div id="app-5">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">메시지 뒤집기</button>
</div>
```

```js
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: '안녕하세요! Vue.js!',
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    },
  },
})
```

Vue는 또한 양식에 대한 입력과 앱 상태를 양방향으로 바인딩하는 `v-model` 디렉티브를 제공

```html
<div id="app-6">
  <p>{{ message }}</p>
  <input v-model="message" />
</div>
```

```js
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: '안녕하세요 Vue!',
  },
})
```

> 그 외 샘플 코드

```html
<div id="app">
  <div class="box" v-bind:class="{ active: toggle}" v-on:click="toggleElement">
    {{ message }}
  </div>
  <button v-on:click="toggleElement">Toggle</button>
  <input type="text" v-model="message" />
</div>
```

```css
.box {
  width: 150px;
  height: 150px;
  background: royalblue;
  border-radius: 10px;
  cursor: pointer;
  transition: all 1s;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box.active {
  width: 400px;
  background: tomato;
}
```

```js
const vm = new Vue({
  el: '#app',
  data: {
    toggle: false,
    message: '',
  },
  methods: {
    toggleElement() {
      this.toggle = !this.toggle
    },
  },
})
```

### 컴포넌트를 사용한 작성방법

컴포넌트 시스템은 Vue의 또 **다른 중요한 개념**입니다. 이는 작고 독립적이며 재사용할 수 있는 컴포넌트로 구성된 대규모 애플리케이션을 구축할 수 있게 해주는 추상적 개념입니다. 거의 모든 유형의 애플리케이션 인터페이스를 컴포넌트 트리로 추상화할 수 있습니다.

![image](https://user-images.githubusercontent.com/42582516/108845259-86f27600-7620-11eb-915c-d4803f914cf7.png)

Vue에서 컴포넌트는 미리 정의된 옵션을 가진 **Vue 인스턴스** 입니다. Vue에서 컴포넌트를 등록하는 방법은 간단합니다.

> 간단한 todo 코드

```html
<div id="app">
  <ul>
    <li v-for="todo in todos" v-bind:key="todo.id">
      <input type="checkbox" v-model="todo.done" />
      <span v-bind:class=" {done: todo.done}"> {{ todo.title }} </span>
    </li>
  </ul>
</div>
```

```css
li span.done {
  text-decoration: line-through;
}
```

```js
new Vue({
  el: '#app',
  data: {
    todos: [
      {
        id: '1',
        title: '아침 먹기',
        done: true,
      },
      {
        id: '2',
        title: '점심 먹기',
        done: false,
      },
      {
        id: '3',
        title: '저녁 먹기',
        done: false,
      },
      {
        id: '4',
        title: '간식 먹기',
        done: false,
      },
      {
        id: '5',
        title: '야식 먹기',
        done: false,
      },
    ],
  },
})
```

> Vue component로 바꾼 코드

css는 고정

```html
<div id="app">
  <ul>
    <my-todo-item v-for="todo in todos" v-bind:key="todo.id" v-bind:todo="todo">
    </my-todo-item>
  </ul>

  <ul>
    <my-todo-item
      v-for="todo in todos2"
      v-bind:key="todo.id"
      v-bind:todo="todo"
    >
    </my-todo-item>
  </ul>
</div>
```

```js
Vue.component('my-todo-item', {
  props: ['todo'],
  template: `<li> <input type="checkbox" v-model="todo.done"> <span v-bind:class=" {done: todo.done}"> {{ todo.title }} </span> </li>`,
})

new Vue({
  el: '#app',
  data: {
    todos: [
      {
        id: '1',
        title: '아침 먹기',
        done: true,
      },
      {
        id: '2',
        title: '점심 먹기',
        done: false,
      },
      {
        id: '3',
        title: '저녁 먹기',
        done: false,
      },
      {
        id: '4',
        title: '간식 먹기',
        done: false,
      },
      {
        id: '5',
        title: '야식 먹기',
        done: false,
      },
    ],
    todos2: [
      {
        id: '6',
        title: '잠자기',
        done: true,
      },
    ],
  },
})
```

다만 js template을 사용하는 방법으로는 다른 방법을 주로 사용한다. `` 를 사용하기에는 일부 코딩하기 불편하기 때문에...
