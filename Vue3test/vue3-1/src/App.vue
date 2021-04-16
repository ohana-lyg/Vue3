<!--
 * @Author: your name
 * @Date: 2021-04-16 16:02:15
 * @LastEditTime: 2021-04-16 21:23:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3\vue3-1\src\App.vue
-->
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h2>欢迎光临红浪漫洗浴中心</h2>
  <div>请选择一位美女为你服务</div>
  <div>
    <button 
      v-for = "(item,index) in girls" 
      v-bind:key = "index"
      @click="selectGirlFun(index)"
    >
      {{ index }} : {{ item }}
    </button>
  </div>
  <div>你选择了【{{selectGirl}}】为你服务</div>

  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';

// import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'App',

  //setup()和ref()函数
  //setup 函数的用法，可以代替 Vue2 中的 date 和 methods 属性，直接把逻辑写在 setup 里就可以
  //return出去的数据和方法，在模板中才可以使用，这样可以精准的控制暴漏的变量和方法
  setup() {
    const girls = ref (['西施','貂蝉','王昭君','杨玉环']);
    const selectGirl = ref("");
    const selectGirlFun = (index: number) => {
      selectGirl.value = girls.value[index];
    };
    //因为在模板中这些变量和方法都需要条用，所以需要return出去。
    return {
      girls,
      selectGirl,
      selectGirlFun,
    };
  },

  // components: {
  //   HelloWorld
  // }
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
