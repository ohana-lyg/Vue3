<!--
 * @Author: your name
 * @Date: 2021-04-29 21:27:21
 * @LastEditTime: 2021-04-30 21:02:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3project\ewshop\src\views\detail\Detail.vue
-->
<template>
    <div>
        <nav-bar>
            <template v-slot:default>商品详情</template>
            <template v-slot:right></template>
        </nav-bar>
    </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
export default {
    name: "Detail",
    components: {
        NavBar,
    }
}
</script>

<style scoped>

</style>