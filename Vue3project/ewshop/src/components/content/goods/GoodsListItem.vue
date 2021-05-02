<!--
 * @Author: your name
 * @Date: 2021-05-02 19:38:47
 * @LastEditTime: 2021-05-02 21:48:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3project\ewshop\src\components\content\goods\GoodsListItem.vue
-->
<template>
    <div class="goods-item">
        <img src="~assets/images/22.png" alt="">
        <div class="goods-info">
            <p>标题</p>
            <span class="price"><small>￥</small>100</span>
            <span class="collect">3</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "GoodsListItem",
}
</script>

<style scoped lang="scss">
.goods-item {
    width: 40%;
    padding-bottom: 40px;
    position: relative;

    img {
        width: 100%;
        border-radius: 5px;
    }

    .goods-info {
        font-size: 14px;
        position: absolute;
        bottom: 5px;
        left: 0px;
        right: 0px;

        p {
            
        }
        .price {

        }
        .collect {
            
        }
    }
}

</style>