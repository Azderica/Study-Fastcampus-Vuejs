<template>
  <div>
    <todo-item />
    <todo-creator />
  </div>
</template>

<script>
import TodoCreator from "./TodoCreator.vue";
import TodoItem from "./TodoItem.vue";

export default {
  components: {
    TodoCreator,
    TodoItem,
  },
};
</script>

<style>
</style>