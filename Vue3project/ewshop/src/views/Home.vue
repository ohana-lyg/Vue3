<!--
 * @Author: your name
 * @Date: 2021-04-26 16:34:51
 * @LastEditTime: 2021-04-27 22:14:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3project\ewshop\src\views\Home.vue
-->
<template>
  <div class="home">
    
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { getHomeAllData } from '@/network/home';

export default {
  name: 'Home',
  setup() {
    onMounted(() => {
      getHomeAllData().then(res => {
        console.log(res.data.slides);
      }).catch (err => {
        console.log(err);
      })
    })
  },
  components: {

  }
}
</script>
<style>
  #demo {
    background: url('~assets/images/3.png') no-repeat;
    width: 100px;
    height: 100px;
  }
</style>
