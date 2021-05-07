<!--
 * @Author: your name
 * @Date: 2021-04-29 21:25:29
 * @LastEditTime: 2021-05-07 22:45:33
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
        <div id="mainbox">
            <div class="ordertab"></div>
            <van-sidebar class="leftmenu" v-model="activeKey">
                <van-collapse v-model="activeName" accordion>
                    <van-collapse-item 
                        v-for="item in categories" 
                        :key="item.id"
                        :title="item.name" 
                        :name="item.name">
                        
                        <van-sidebar-item 
                            v-for="sub in item.children" 
                            :key="sub" 
                            :title="sub.name" />
                    </van-collapse-item>
                </van-collapse>
            </van-sidebar>
            <div class="goodslist"></div>
        </div>
    </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import { getCategory } from "../../network/category";
import { ref, onMounted } from 'vue';
export default {
    name: "Category",
    setup() {
        let activeKey = ref(0);
        let activeName = ref(1);
        let categories = ref([]);

        onMounted(() => {
            getCategory().then(res => {
                categories.value = res.categories;
            })
        })
        return {
            activeKey,
            activeName,
            categories
        }
    },
    components: {
        NavBar,
    }
}
</script>

<style scoped lang="scss">
#mainbox {
    margin-top: 45px;
    display: flex;
    .ordertab {
        flex: 1;
        float: right;
        position: fixed;
        right: 0;
        left: 130px;
        // background: pink;
        width: 100%;
        height: 50px;
        // z-index: 6;
    }

    .leftmenu {
        position: fixed;
        top: 95px;
        left: 0;
        // background: skyblue;
        width: 130px;
    }

    .goodslist {
        flex: 1;
        // background: yellow;
        position: absolute;
        top: 100px;
        left: 130px;
        right: 0;
        height: 100vh;
    }
}
</style>