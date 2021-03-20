<template>
  <div>
    <todo-item v-for="todo in todos" :key="todo.id" :todo="todo" />
    <todo-creator @create-todo="createTodo" />
  </div>
</template>

<script>
import lowdb from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'
import cryptoRandomString from 'crypto-random-string'
import _cloneDeep from 'lodash/cloneDeeps' // lodash의 약속으로 _를 사용

import TodoCreator from './TodoCreator.vue'
import TodoItem from './TodoItem.vue'

export default {
  components: {
    TodoCreator,
    TodoItem,
  },
  data() {
    return {
      db: null,
      todos: [],
    }
  },
  created() {
    this.initDB()
  },
  methods: {
    initDB() {
      // db name
      const adapter = new LocalStorage('todo-app')
      this.db = lowdb(adapter)

      console.log(db)

      const hasTodos = this.db.has('todos').value()

      if (hasTodos) {
        this.todos = _cloneDeep(this.db.getState().todos)
      } else {
        // Local DB 초기화
        this.db
          .defaults({
            todos: [], // Collection
          })
          .write()
      }
    },
    createTodo(title) {
      const newTodo = {
        id: cryptoRandomString({ length: 10 }),
        title: title,
        createdAt: new Date(),
        updatedAt: new Date(),
        done: false,
      }

      this.db
        .get('todos') // lodash
        .push(newTodo) // lodash
        .write() // low db
    },
  },
}
</script>

<style></style>
