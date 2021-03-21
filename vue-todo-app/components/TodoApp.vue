<template>
  <div class="todo-app">
    <div class="todo-app__actions">
      <div class="filters">
        <button
          :class="{ active: filter === 'all' }"
          @click="changeFilter('all')"
        >
          모든 항목 ({{ total }})
        </button>
        <button
          :class="{ active: filter === 'active' }"
          @click="changeFilter('active')"
        >
          해야 할 항목 ({{ activeCount }})
        </button>
        <button
          :class="{ active: filter === 'completed' }"
          @click="changeFilter('completed')"
        >
          완료된 항목 ({{ completedCount }})
        </button>
      </div>

      <div class="actions">
        <input v-model="allDone" type="checkbox" />
        <button @click="clearCompleted">완료한 항목 삭제</button>
      </div>
    </div>

    <div class="todo-app__list">
      <todo-item
        v-for="todo in filteredTodos"
        :key="todo.id"
        :todo="todo"
        @update-todo="updateTodo"
        @delete-todo="deleteTodo"
      />
    </div>

    <hr />

    <todo-creator class="todo-app__creator" @create-todo="createTodo" />
  </div>
</template>

<script>
import low from "lowdb";
import LocalStorage from "lowdb/adapters/LocalStorage";
import cryptoRandomString from "crypto-random-string";
import _cloneDeep from "lodash/cloneDeep"; // lodash의 약속으로 _를 사용
import _find from "lodash/find";
import _assign from "lodash/assign";
import _findIndex from "lodash/findIndex";
import _forEachRight from "lodash/forEachRight";

import TodoCreator from "./TodoCreator.vue";
import TodoItem from "./TodoItem.vue";

export default {
  components: {
    TodoCreator,
    TodoItem,
  },
  data() {
    return {
      db: null,
      todos: [],
      filter: "all",
    };
  },
  computed: {
    filteredTodos() {
      switch (this.filter) {
        case "all":
        default:
          return this.todos;
        case "active": // 해야할 항목
          return this.todos.filter((todo) => !todo.done);
        case "completed": // 완료된 목표
          return this.todos.filter((todo) => todo.done);
      }
    },
    total() {
      return this.todos.length;
    },
    activeCount() {
      return this.todos.filter((todo) => !todo.done).length;
    },
    completedCount() {
      return this.total - this.activeCount;
    },
    allDone: {
      get() {
        return this.total === this.completedCount && this.total > 0;
      },
      set(checked) {
        this.completeAll(checked);
      },
    },
  },
  created() {
    this.initDB();
  },
  methods: {
    initDB() {
      const adapter = new LocalStorage("todo-app"); // DB name
      this.db = low(adapter);

      const hasTodos = this.db
        .has("todos") // Collection name
        .value();

      if (hasTodos) {
        this.todos = _cloneDeep(this.db.getState().todos);
      } else {
        // Local DB 초기화
        this.db
          .defaults({
            todos: [], // Collection
          })
          .write();
      }
    },
    createTodo(title) {
      const newTodo = {
        id: cryptoRandomString({ length: 10 }),
        title,
        createdAt: new Date(),
        updatedAt: new Date(),
        done: false,
      };

      // Create DB
      this.db
        .get("todos") // lodash
        .push(newTodo) // lodash
        .write(); // low db

      // Create Client
      this.todos.push(newTodo);
    },
    updateTodo(todo, value) {
      this.db.get("todos").find({ id: todo.id }).assign(value).write();

      const foundTodo = _find(this.todos, { id: todo.id });
      _assign(foundTodo, value);
    },
    deleteTodo(todo) {
      this.db.get("todos").remove({ id: todo.id }).write();

      const foundIndex = _findIndex(this.todos, { id: todo.id });
      this.$delete(this.todos, foundIndex);
    },
    changeFilter(filter) {
      this.filter = filter;
    },
    completeAll(checked) {
      // DB 갱신
      const newTodos = this.db
        .get("todos")
        .forEach((todo) => {
          todo.done = checked;
        })
        .write();

      this.todos = _cloneDeep(newTodos);
    },
    clearCompleted() {
      _forEachRight(this.todos, (todo) => {
        if (todo.done) {
          this.deleteTodo(todo);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
button.active {
  font-weight: bold;
}
</style>