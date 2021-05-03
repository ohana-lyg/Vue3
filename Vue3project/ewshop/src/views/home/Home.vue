<!--
 * @Author: your name
 * @Date: 2021-04-26 20:27:28
 * @LastEditTime: 2021-05-03 20:08:01
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
        <div class="banners">
            <img src="~assets/images/3.png" alt="">
        </div>
        <recommend-view :recommends="recommends"></recommend-view>
        <tab-control @tabClick="tabClick" :titles="['畅销', '新书', '精选']"></tab-control>
        <goods-list></goods-list>

        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        {{ temid }}<br>
        
    </div>
</template>
<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import RecommendView from './ChildComps/RecommendView.vue';
import TabControl from '../../components/content/tabControl/TabControl.vue';
import { getHomeAllData } from "network/home";
import { ref, onMounted } from 'vue';
import GoodsList from "../../components/content/goods/GoodsList";
export default {
    name: "Home",

    setup() {
        let temid = ref(0);
        const recommends = ref([]);
        onMounted(() => {
            getHomeAllData().then(res => {
                recommends.value = res.goods.data;
            })
        })
        const tabClick = (index) => {
            temid.value = index;
        }
        return {
            recommends,
            temid,
            tabClick,
        }
    },
    components: {
        NavBar,
        RecommendView,
        TabControl,
        GoodsList,
    }
}
</script>
<style scoped>
.banners img {
    width: 100%;
    height: auto;
    /* margin-top: 45px; */
}

</style>