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

### computed 캐싱

캐싱을 통해서 반복되는 연산을 줄일 수 있습니다.

- [코드 보기](./computed-caching.html)

### computed의 Getter, Setter

getter와 setter를 통해서 computed 값을 접근 가능합니다.

- [코드 보기](./computed-getter-setter.html)

## watch

watch를 통해서 특정 데이터의 변화를 감지할 수 있습니다.

- [코드 보기](./watch.html)

## class와 스타일 바인딩

- [Doc Link](https://kr.vuejs.org/v2/guide/class-and-style.html)

**데이터 바인딩**은 엘리먼트의 클래스 목록과 인라인 스타일을 조작하기 위해 **일반적으로 사용**됩니다. 이 두 속성은 v-bind를 사용하여 처리할 수 있습니다.

스타일 객체를 여러개 적용할 수 있는데, 뒤에 있는 것일수록 우선순위가 높습니다. (덮어쓴다의 개념)

<br/>

## 조건문 렌더링

- [Doc Link](https://kr.vuejs.org/v2/guide/conditional.html)

### v-if

다음과 같이 사용할 수 있습니다.

```html
<div id="app">
  <div v-if="colorState === 'red'" class="box box--red"></div>
  <div v-if="colorState === 'blue'" class="box box--blue"></div>
  <div
    v-if="colorState !== 'red' && colorState !== 'blue'"
    class="box box--gray"
  ></div>
</div>
```

다만 `v-if` 외에도 `v-else-if`, `v-else` 또한 존재합니다. (다만, 형제인 경우에만 가능합니다.)

```html
<div id="app">
  <div v-if="colorState === 'red'" class="box box--red"></div>
  <div v-else-if="colorState === 'blue'" class="box box--blue"></div>
  <div v-else class="box box--gray"></div>
</div>
```

- [코드 보기](./v-if.html)

### v-show

```html
<div id="app">
  <button @click="toggle">Toggle</button>
  <div class="box" v-show="show"></div>
</div>
```

`v-if`와는 다르게 `v-show`는 초기렌더링 비용이 존재합니다. (그려야하지만, css 속성에서 보이지 않는 것일뿐이므로)

`v-if`와 `v-show`의 사용 경우는 다음과 같이 다른데, `v-if`는 일반적으로 매우 선택하는 것이 좋고, `v-show`는 많이 쓰는 경우에 한해서만 사용하는 것이 좋습니다.

<br/>

## 리스트 렌더링

- [코드 보기](./list-rendering.html)

### 배열(Array)

구별을 위해서 `(value, index)` 순으로 사용한다.

- [Doc](https://kr.vuejs.org/v2/guide/list.html)

더할 때는, push를 사용해야한다.

### 객체(Object)

객체 반복시 index를 2번째로 사용하는 것이 아니라 세번째로 사용한다.

- `(value, key, index)` 순으로 사용한다.
- 데이터를 바꾸면 적응성이 있는 것을 확인할 수 있습니다.
- 객체에 속성을 주는 경우에는, 다르게 줘야합니다. (데이터를 임의로 넣으면 반응성이 없습니다.)
  - `Object.assign`을 통해서 넣어줄 수 있습니다.
  - ex) `vm.heropy = Object.assign({}, vm.heropy, {hompage: 'heropy.blog'})`

### Vue.set

위 배열과 객체에 데이터를 넣는 다른 방법은 다음과 같습니다.

- `this.$set(this.heropy, 'hompage', 'heropy.blog')`
- `Vue.set(위와 동일)`

다음과 같이 할 수 있습니다.

<br/>

## 이벤트 헨들링

- [Doc](https://kr.vuejs.org/v2/guide/events.html)

### 메소드 이벤트 핸들러

다음의 코드를 보면 작동합니다.

```js
clickMethod(todo.title, \$event)
```

두 args가 넘어가며, 이를 통해서 명령어를 사용할 수 있습니다.

여러 함수를 동시에 발생시킬 수도 있습니다.

- [코드 보기](./event-handling.html)

### 이벤트 수식어

- [Doc](https://kr.vuejs.org/v2/guide/events.html#%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EC%88%98%EC%8B%9D%EC%96%B4)

```html
<div id="app">
  <div class="parent" @click="clickHandler">
    <div class="child" @click.stop="clickHandler"></div>
  </div>
</div>
```

`stop`을 통해서 다른 내용을 클릭했을 때, 중복 결과를 피할 수 있습니다.

마찬가지로 self나 capture 등을 통해서 다양한 것을 구현할 수 있습니다.

- self는 자기자신을 정확하게 클릭해야지 동작합니다.

풀코드는 다음에서 확인할 수 있습니다.

- [코드 보기](./event-modifiers.html)

### 키 수식어

- [Doc](https://kr.vuejs.org/v2/guide/events.html#Key-Codes)
- [코드 보기](./key-modifiers.html)

chaining을 통해서 두가지 조건이 들어왔을 때 사용할 수도 있습니다.
