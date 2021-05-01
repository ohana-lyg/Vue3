<!--
 * @Author: your name
 * @Date: 2021-04-29 21:27:21
 * @LastEditTime: 2021-05-01 16:12:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3project\ewshop\src\views\detail\Detail.vue
-->
<template>
    <div>
        <nav-bar>
            <template v-slot:default>商品详情:{{id}}</template>
            <template v-slot:right></template>
        </nav-bar>
    </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import { useRoute } from "vue-router";
import { ref } from "vue";
export default {
    name: "Detail",
    components: {
        NavBar,
    },
    setup() {
        const route = useRoute();
        let id = ref(0);
        id.value = route.query.id; 
        return {
            id,
        }
    }
}
</script>

<style scoped>

</style>