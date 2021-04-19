<!--
 * @Author: your name
 * @Date: 2021-04-19 15:57:17
 * @LastEditTime: 2021-04-19 16:40:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3\Vue3test\vue3-3\src\App.vue
-->
<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <h2>欢迎光临切尔西洗浴中心</h2>
    <div>随机选择一位美女为你服务</div>
    <!-- <div>{{nowTime}}</div>
    <div><button @click="getNowTime">显示时间</button></div> -->
  </div>
</template>

<script lang="ts">
 import { defineComponent,reactive,toRefs,ref,watch } from 'vue';

// import { nowTime, getNowTime } from './hooks/useNowTime';
export default defineComponent({
  name: 'App',
  setup() {
    // const nowTime = ref("00:00:00");
    // const getNowTime =() => {
    //   const now = new Date();
    //   const hour = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
    //   const minute = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
    //   const second = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds();
    //   nowTime.value = hour + ':' + minute + ':' + second;
    //   setTimeout(getNowTime,1000)
    // }
    return {
      




      // nowTime,
      // getNowTime,
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
