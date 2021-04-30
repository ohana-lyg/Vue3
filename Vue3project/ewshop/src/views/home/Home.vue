<!--
 * @Author: your name
 * @Date: 2021-04-26 20:27:28
 * @LastEditTime: 2021-04-30 20:46:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3project\ewshop\src\views\home\Home.vue
-->
<template>
    <div>
        <nav-bar>
            <template v-slot:default>图书商城</template>
            <template v-slot:right></template>
        </nav-bar>
    </div>
</template>
<script>
import NavBar from "../../components/common/navbar/NavBar";
export default {
    name: "Home",
    components: {
        NavBar,
    }
}
</script>
<style scoped>

</style>