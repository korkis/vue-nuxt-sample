<template>
  <ul>
    <li v-for="todo in todos" :key="todo.text">
      <input :checked="todo.done" type="checkbox" @change="toggle(todo)">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
    </li>
    <li><v-text-field placeholder="What needs to be done?" @keyup.enter="addTodo" /></li>
  </ul>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
  computed: {
    todos () {
      return this.$store.state.todos.list;
    }
  },
  methods: {
    addTodo (e) {
      this.$store.commit('todos/add', e.target.value);
      e.target.value = '';
    },
    ...mapMutations({
      toggle: 'todos/toggle'
    })
  },
  fetch () {
    console.log(this.$route.query);
    console.log(this.$store.state);
  }
};
</script>
<style scoped>
.done {
  text-decoration: line-through;
}
</style>
