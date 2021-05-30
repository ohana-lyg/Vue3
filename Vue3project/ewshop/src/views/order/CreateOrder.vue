<!--
 * @Author: your name
 * @Date: 2021-05-30 21:18:10
 * @LastEditTime: 2021-05-30 22:05:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ewshop\src\views\order\CreateOrder.vue
-->
<template>
  <div class="create-order">
    <nav-bar class="nav-bar">
      <template v-slot:default>
        订单预览
      </template>
    </nav-bar>
    <div class="address-wrap">
      <div class="name" @click="goTo">
        <span>姓名</span>
        <span>电话</span>
      </div>
      <div class="address">
          详细地址信息
      </div>
      <van-icon class="arrow" name="arrow" />
    </div>
    <div class="good">
      <div class="good-item">
        <div class="good-img"><img src="~assets/images/22.png" alt=""></div>
        <div class="good-desc">
          <div class="good-title">
            <span>计算机网络</span>
            <span>x100</span>
          </div>
          <div class="good-btn">
            <div class="price">￥66</div>
          </div>
        </div>
      </div>
    </div>
    <van-submit-bar
      class="submit-all"
      :price="3050"
      button-text="生成订单"
      @submit="handleCreateOrder"
    >
      商品金额
    </van-submit-bar>

    <van-popup
      closeable
      close-on-click-overlay="false"
      :show="false"
      position="bottom"
      :style="{ height: '30%' }"
      @close="close"
    >
      <div :style="{ width: '90%', margin: '0 auto', padding: '50px 0' }">
        <van-botton :style="{ marginBottom: '10px' }" color="#1989fa" block>
          支付宝支付
        </van-botton>
        <van-botton color="#4fc08d" block>
          微信支付
        </van-botton>
      </div>
    </van-popup>
  </div>
</template>