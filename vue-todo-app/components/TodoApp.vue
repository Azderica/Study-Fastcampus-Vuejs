<template>
  <div>
    <todo-item />
    <todo-creator />
  </div>
</template>

<script>
import lowdb from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'
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

      // Local DB 초기화
      this.db
        .defaults({
          todos: [], // Collection
        })
        .write()
    },
  },
}
</script>

<style></style>
