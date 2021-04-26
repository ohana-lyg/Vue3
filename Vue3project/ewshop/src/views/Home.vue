<!--
 * @Author: your name
 * @Date: 2021-04-26 16:34:51
 * @LastEditTime: 2021-04-26 20:59:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3project\ewshop\src\views\Home.vue
-->
<template>
  <div class="home">
    <img src="@/assets/images/1.png" alt="">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
