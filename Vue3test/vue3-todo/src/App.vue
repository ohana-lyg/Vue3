<!--
 * @Author: your name
 * @Date: 2021-04-22 13:17:11
 * @LastEditTime: 2021-04-22 22:02:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3test\vue3-todo\src\App.vue
-->
<template>
  <div class="wrapper">
    <!-- Vue3.0 + TypeScript -->
    <todo-input />
    <todo-list 
      :todoList="todoList"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue';
import { Store, useStore } from 'vuex';

import TodoInput from './components/TodoInput/index.vue';
import TodoList from './components/TodoList/index.vue';
import { IUseTodo, useTodo } from './hooks';

export default defineComponent({
  name: 'App',
  components: {
    TodoInput,
    TodoList
  },
  setup() {
    const { setTodoList }: IUseTodo = useTodo();
    const store: Store<any> = useStore();

    onMounted(() => {
      setTodoList();
    });
    return {
      todoList: computed(() => store.state.list)
    }
  }
});
</script>

