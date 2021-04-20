<!--
 * @Author: your name
 * @Date: 2021-04-20 20:32:00
 * @LastEditTime: 2021-04-20 20:51:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3test\vue3-3\src\components\AsyncShow.vue
-->
<template>
    <h1>{{ result }}</h1>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    setup() {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                return resolve ({result:"JSPang"})
            },2000) 
        })
    }
})
</script>
