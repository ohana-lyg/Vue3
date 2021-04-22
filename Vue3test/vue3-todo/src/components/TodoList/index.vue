<!--
 * @Author: your name
 * @Date: 2021-04-22 15:26:53
 * @LastEditTime: 2021-04-22 22:11:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3test\vue3-todo\src\components\todolist\index.vue
-->
<template>
  <div>
      <todo-item 
        v-for="item of todoList"
        :key="item.id"
        :item="item"
        @removeTodo="removeTodo"
        @setStatus="setStatus"
        @setDoing="setDoing"
      />
  </div>
</template>

<script lang="ts">
import { ITodo } from '@/typings';
import { defineComponent, onMounted, PropType } from 'vue';
import { IUseTodo, useTodo } from '../../hooks';
import TodoItem from './Item.vue';
export default defineComponent ({
    name:'TodoList',
    props: {
        todoList: Array as PropType<ITodo[]>
    },
    components: {
        TodoItem
    },
    setup() {
        const {
            removeTodo,
            setStatus,
            setDoing
        }: IUseTodo = useTodo();

        return {
            removeTodo,
            setStatus,
            setDoing
        }
    }
})
</script>

<style>

</style>