# Vue.js 가이드

## Vue 인스턴스

- [link](https://kr.vuejs.org/v2/guide/instance.html)
- [Vue api 링크](https://kr.vuejs.org/v2/api/)

vue의 반은성은 data안에 있는 데이터만 반응형이 된다. (즉, 생성될 때만 있는 데이터만 반응성을 가집니다.)

- `watch` : 데이터가 변할 때, 특정 행동을 진행합니다. (감시하고 있다고 판단)

다음과 같은 것을 이해하기 위해서는 라이프 사이클을 인지해야 합니다.

## 라이프 사이클

[link](https://kr.vuejs.org/v2/guide/instance.html#%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4-%EB%9D%BC%EC%9D%B4%ED%94%84%EC%82%AC%EC%9D%B4%ED%81%B4-%ED%9B%85)

### 라이프 사이클

![image](https://user-images.githubusercontent.com/42582516/109142785-a2858a00-77a2-11eb-9165-e9ff430b5a7d.png)

일반적으로 `beforeCreate` 보다는 `created`를 사용합니다. `beforeCreate`의 시점에서는 선언한 데이터도 제대로 활용이 안되는 상태이기 때문에 쓸일이 잘없다.

`mounted` 시점이 이제 element가 연결된 시점이다.

다음의 순으로 확인할 수 있습니다. (코드는 `lifecycle.html`)

- `vm.msg` 변경시, update 를 확인할 수 있습니다.
- `vm.$destroy()` 사용시, destroy를 확인할 수 있습니다.

## 템플릿 문법

- `v-once` : 최초 한번만 적용
- `v-html` : html 과 같이 태그 반영
- js의 기본식도 사용가능 (Ex. Math.round())
  - 다만 표현식만 가능.

```html
<div id="app">
  <div>{{msg}}</div>
  <div v-html="msg"></div>
  <div>{{ Math.round(1.7) }}</div>
</div>

<script>
  const vm = new Vue({
    el: '#app',
    data: {
      msg: 'Hello Vue! <br/> Good job~',
    },
  })
</script>
```

- `v-bind` : `:`로 표현가능
- `v-on` : `@`로 표현가능

```html
<style>
  .normal {
    color: blue;
  }
  .active {
    color: red;
  }
</style>

<div id="app">
  <!-- 아래와 동일 -->
  <!-- v-bind:class = :class -->
  <!-- v-on:method = @method -->
  <div :class="className" @click="changeClassName">{{msg}}</div>
</div>

<script>
  const vm = new Vue({
    el: '#app',
    data: {
      msg: 'Hello Vue!',
      className: 'normal',
    },
    methods: {
      changeClassName() {
        this.className = 'active'
      },
    },
  })
</script>
```

데이터를 통해서 돔을 관리한다

## computed

original에서 하지 못하는 것을 computed을 통해서 구현가능하다.

### 간단한 예제 코드.

```html
<div id="app">
  <div class="todos">
    <div v-for="todo in computedTodos" :key="todo.id">
      <input type="checkbox" v-model="todo.done" />
      <span> {{ todo.title }}</span>
    </div>
  </div>
</div>

<script>
  const vm = new Vue({
    el: '#app',
    data: {
      todos: [
        { title: '아침 먹기' },
        { title: '점심 먹기' },
        { title: '저녁 먹기' },
      ],
    },
    computed: {
      computedTodos() {
        return this.todos.map((todo, index) => {
          // return Object.assign({}, todo, {
          //   id: index + 1,
          //   done: false,
          // })
          return {
            ...todo,
            id: index + 1,
            done: false,
          }
        })
      },
    },
  })
</script>
```
