<!--
 * @Author: your name
 * @Date: 2021-04-29 21:30:16
 * @LastEditTime: 2021-04-30 21:06:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3project\ewshop\src\views\shopcart\ShopCart.vue
-->
<template>
    <div>
        <nav-bar>
            <template v-slot:default>购物车</template>
            <template v-slot:right></template>
        </nav-bar>
    </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
export default {
    name: "ShopCart",
    components: {
        NavBar,
    }
}
</script>

<style scoped>

</style>