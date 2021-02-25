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
