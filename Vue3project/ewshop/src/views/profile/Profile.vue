<!--
 * @Author: your name
 * @Date: 2021-04-29 21:29:19
 * @LastEditTime: 2021-04-30 21:03:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3project\ewshop\src\views\profile\Profile.vue
-->
<template>
    <div>
        <nav-bar>
            <template v-slot:default>个人中心</template>
            <template v-slot:right></template>
        </nav-bar>
    </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
export default {
    name: "Profile",
    components: {
        NavBar,
    }
}
</script>

<style scoped>

</style>