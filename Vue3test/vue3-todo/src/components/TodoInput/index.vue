<!--
 * @Author: your name
 * @Date: 2021-04-22 15:26:30
 * @LastEditTime: 2021-04-22 20:00:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3test\vue3-todo\src\components\todoinput\index.vue
-->
<template>
  <div>
    <input
      type="text"
      v-model="todoValue"
      @keyup="setTodoValue"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref} from "vue";
import { IUseTodo, useTodo } from '../../hooks';

export default defineComponent ({
    name:'TodoInput',
    setup() {
      const todoValue = ref<string>('');
      const { setTodo }: IUseTodo = useTodo();

      const setTodoValue = (e:KeyboardEvent): void => {
        if (e.keyCode ===13 && todoValue.value.trim().length) {
          //设置数据
          // alert(todoValue.value);
          setTodo(todoValue.value);
          todoValue.value = '';
        }
      }
      return {
        todoValue,
        setTodoValue
      }
    }
})
</script>

<style>

</style>