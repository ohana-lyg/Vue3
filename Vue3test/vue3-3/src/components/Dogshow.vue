<!--
 * @Author: your name
 * @Date: 2021-04-20 20:55:09
 * @LastEditTime: 2021-04-20 21:29:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3test\vue3-3\src\components\Dogshow.vue
-->
<template>
    <img :src="result && result.imgUrl" />
</template>
<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue'
export default defineComponent({
    async setup() {   //promise 语法糖  返回之后也是promise对象
        const rawData = await  axios.get("https://dog.ceo/api/breeds/image/random")
        
        return {
            result : rawData.data,
        }
    }
})
</script>
