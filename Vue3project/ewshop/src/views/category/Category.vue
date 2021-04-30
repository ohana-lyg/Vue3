<!--
 * @Author: your name
 * @Date: 2021-04-29 21:25:29
 * @LastEditTime: 2021-04-30 21:02:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3project\ewshop\src\views\category\Category.vue
-->
<template>
    <div>
        <nav-bar>
            <template v-slot:default>商品分类</template>
            <template v-slot:right></template>
        </nav-bar>
    </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
export default {
    name: "Category",
    components: {
        NavBar,
    }
}
</script>

<style scoped>

</style>