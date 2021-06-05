<!--
 * @Author: your name
 * @Date: 2021-05-30 21:18:10
 * @LastEditTime: 2021-06-05 14:13:49
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
        <span>{{address.name}}</span>
        <span>{{address.phone}}</span>
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

<script>
import NavBar from '../../components/common/navbar/NavBar';
import { Toast } from 'vant';
import { useRouter, /* useRoute */ } from 'vue-router';
import { getOrderPreview, /* CreateOrder, PayOrder, Orderstatus */ } from '../../network/order';
import { onMounted, reactive, toRefs } from 'vue';
export default {
  components: {
    NavBar,
  },
  setup() {
    const router = useRouter();
    // const route = useRoute();
    const state = reactive({
      cartlist: [],
      address: {}
    })

    const init = () => {
      Toast.loading({message:'加载中...', forbidClick: true});

      getOrderPreview().then(res => {
        // console.log(res);
        let address = res.address.filter(n => n.is_default == '1');
        if (address.length == 0) {
          state.address = {
            address: '还没有设置默认地址，请选择或填写地址信息'
          }
        }
        else {
          state.address = address[0];
        }
      })
    }

    onMounted(() => {
      init()
    })

    const goTo = () => {
      router.push({path: '/address'});
    }

    const handleCreateOrder = () => {
      
    }

    const close = () => {
      
    }

    return {
      ...toRefs(state),
      goTo,
      handleCreateOrder,
      close
    }
  }
}
</script>

<style lang="scss" scoped>

.create-order {
  background: #f9f9f9;
  .address-wrap {
    text-align: left;
    margin-bottom: 20px;
    background: #fff;
    position: relative;
    margin-top: 44px;
    font-size: 14px;
    padding: 15px;
    color: #222333;
    .name, .address {
      margin: 10px 0;
    }
    .arrow {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 20px;
    }
    &::before {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      height: 2px;
      background: -webkit-repeating-linear-gradient(135deg,#ff6c6c 0,#ff6c6c 20%,transparent 0,transparent 25%,#1989fa 0,#1989fa 20%,transparent 0,transparent 25%);
      background: repeating-linear-gradient(-45deg,#ff6c6c 0,#ff6c6c 20%,transparent 0,transparent 25%,#1989fa 0,#1989fa 20%,transparent 0,transparent 25%);
      background-size: 80px;
      content: '';
    }
  }
  .good {
    margin-bottom: 120px;
  }
  .good-item {
    display: flex;
    padding: 10px;
    background: #fff;
    .good-img {
      img {
        width: 100px;
        height: auto;
      }
    }
    .good-desc {
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: 20px;
      .good-title {
        display: flex;
        justify-content: space-between;
      }
      .good-btn {
        display: flex;
        justify-content: space-between;
        .price {
          font-size: 16px;
          color: red;
          line-height: 28px;
        }
        .van-icon-delete {
          font-size: 20px;
          margin-top: 4px;
        }
      }
    }
  }
  .pay-wrap {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #fff;
    padding: 10px 0;
    padding-bottom: 50px;
    border-top: 1px solid #e9e9e9;
    >div {
      display: flex;
      justify-content: space-between;
      padding: 0 5%;
      margin: 10px 0;
      font-size: 14px;
      span:nth-child(2) {
        color: red;
        font-size: 18px;
      }
    }
    .pay-btn {
      position: fixed;
      bottom: 7px;
      right: 0;
      left: 0;
      width: 90%;
      margin: 0 auto;
    }
  }
}
.submit-all {
  margin-bottom: 50px;
  z-index: 9 !important;
}

</style>