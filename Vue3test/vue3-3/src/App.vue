<!--
 * @Author: your name
 * @Date: 2021-04-19 15:57:17
 * @LastEditTime: 2021-04-20 21:23:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3\Vue3test\vue3-3\src\App.vue
-->
<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
<!-- 如果你要使用Suspense的话，要返回一个promise对象，而不是原来的那种JSON对象 -->
    <Suspense>   <!-- Suspense提供两个template的位置 -->
      <template #default>  <!-- 一个是全部请求完毕的内容 -->
        <Dogshow />
        <!-- <AsyncShow /> -->         <!-- promise返回的结果 -->
      </template>
      <template #fallback>  <!-- 一个是没有请求回来时显示的内容 -->
        <h1>Loading...</h1>  
      </template>
    </Suspense>
    
    <!-- <h2>欢迎光临切尔西洗浴中心</h2>
    <div>随机选择一位美女为你服务</div>
    <modal />
    <div v-if="loading">Loading.....</div>
    <img v-if="loaded" :src="result.message" /> -->
    
    <!-- <div>{{nowTime}}</div>
    <div><button @click="getNowTime">显示时间</button></div> -->
  </div>
</template>

<script lang="ts">
 import { defineComponent,reactive,toRefs,ref,watch, onErrorCaptured } from 'vue';
//  import AsyncShow from './components/AsyncShow.vue';
 import Dogshow from './components/Dogshow.vue';
 
//  import useUrlAxios from './hooks/useURLAxios';
//  import modal from "./components/Modal.vue";

// import { nowTime, getNowTime } from './hooks/useNowTime';

export default defineComponent({
  name: 'App',
  
   components:{/* modal */ /* AsyncShow  */ Dogshow },

  setup() {

    onErrorCaptured ((error) => {
      console.log(`error====>`,error);
      return true;
    })


    // const { result, loading, loaded,} =useUrlAxios("https://dog.ceo/api/breeds/image/random");

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
      
      // result,
      // loading,
      // loaded,

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
