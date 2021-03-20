# ch4. Todo List 만들기

- [원문 코드](https://github.com/HeropCode/Vue-Todo-app)

## 컴포넌트 구성

![image](https://user-images.githubusercontent.com/42582516/111631388-ad2dbf00-8836-11eb-92a6-db14089adb44.png)

## DB관련

### Local Storage

- [MDN DOC](https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage)

### Lodash / Low db 설치

`npm install lodash lowdb`

lodash 기반이므로 lodash를 설치해야한다.

- [git repository](https://github.com/typicode/lowdb)
- [Lodash](https://lodash.com/)

### Lodash 와 Low db 차이

Lowdb에서 기본적으로 제공하는 부분은 다음과 같습니다.

- `db.getState()`
- `db.setState(newState)`
- `db.write()`

나머지 기능 들은 Lodash 의 기능입니다. (다만, Lowdb의 기능들도 모두 Lodash 에서 정의되어 있습니다.)

- Ex) `defaults`

## CRUD

### CRUD란.

- C : Create
- R : Read
- U : Update
- D : Delete

### 서비스 구성

Client <-> Server <-> DB

### crypto-random-string

- [crypto-random-string](https://github.com/sindresorhus/crypto-random-string)

## Moment.js / day.js

- [Moment js Doc](https://momentjs.com/)

- 사용시 용량이 크기 때문에 `day.js`를 사용할 수도 있음.
  - [day.js](https://github.com/iamkun/dayjs)
  - `npm i dayjs`
