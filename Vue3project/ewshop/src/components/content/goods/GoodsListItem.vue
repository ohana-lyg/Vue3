<!--
 * @Author: your name
 * @Date: 2021-05-02 19:38:47
 * @LastEditTime: 2021-05-04 18:29:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3project\ewshop\src\components\content\goods\GoodsListItem.vue
-->
<template>
    <div class="goods-item">
        <img :src="product.cover_url" alt="">
        <div class="goods-info">
            <p>{{ product.title }}</p>
            <span class="price"><small>￥</small>{{ product.price }}</span>
            <span class="collect">{{ product.collects_count }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "GoodsListItem",
    props: {
        product: Object,
        default() {
            return [];
        }
    }
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
        left: 0;
        right: 0;
        overflow: hidden;
        text-align: center;

        p {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-bottom: 3px;
        }
        .price {
            color: red;
            margin-right: 20px;
        }
        .collect {
            position: relative;
        }
        .collect::before {
            content: '';
            position: absolute;
            left: -15px;
            width: 14px;
            height: 14px;
            top: -1px;
            background: url('~assets/images/collect.png') 0 0/14px 14px;
        }
    }
}

</style>