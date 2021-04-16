<!--
 * @Author: your name
 * @Date: 2021-04-16 21:39:28
 * @LastEditTime: 2021-04-16 22:21:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3\Vue3test\vue3-2\src\App.vue
-->
<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      <h2>欢迎光临红浪漫洗浴中心</h2>
      <div>请选择一位美女为你服务</div>
    </div>
    <div>
      <button
        v-for="(item, index) in data.girls"
        v-bind:key="index"
        @click="data.selectGirlFun(index)"
      >
        {{ index }} : {{ item }}
      </button>
    </div>
    <div>你选择了【{{ data.selectGirl }}】为你服务</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';

//定义一个接口,用接口(interface)来作类型注解
interface DataProps {
  girls: string[];
  selectGirl: string;
  selectGirlFun: (index: number) => void;
}

//reactive也是一个函数(方法)，只不过里边接受的参数是一个 Object(对象)
export default defineComponent ({
  name: 'App',
    setup() { //在显示的为 data 变量作一个类型注解 cosnt data: DataProps = ...
    const data: DataProps = reactive ({
      girls: ['西施','貂蝉','王昭君','杨玉环'],
      selectGirl: "",
      selectGirlFun: (index: number) => {
        data.selectGirl = data.girls[index];
      },
    });

    return {
      data,
    };
  },
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
