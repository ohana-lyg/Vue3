<!--
 * @Author: your name
 * @Date: 2021-05-02 19:37:47
 * @LastEditTime: 2021-05-02 21:47:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3project\ewshop\src\components\content\goods\GoodsList.vue
-->
<template>
    <div class="goods">
        <goods-list-item></goods-list-item>
        <goods-list-item></goods-list-item>
        <goods-list-item></goods-list-item>
        <goods-list-item></goods-list-item>
        <goods-list-item></goods-list-item>
        <goods-list-item></goods-list-item>
        <goods-list-item></goods-list-item>
        <goods-list-item></goods-list-item>
    </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
    name: "GoodsList",
    components: {
        GoodsListItem,
    }
}
</script>

<style scoped>
.goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 5px;
}
</style>