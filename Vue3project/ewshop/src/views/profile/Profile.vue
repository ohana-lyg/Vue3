<!--
 * @Author: your name
 * @Date: 2021-04-29 21:29:19
 * @LastEditTime: 2021-05-24 22:05:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3project\ewshop\src\views\profile\Profile.vue
-->
<template>
    <div>
        <nav-bar>
            <template v-slot:default>个人中心</template>
        </nav-bar>
        <div class="user-box">
            <div class="user-info">
                <div class="info">
                    <img src="@/assets/images/user.png" alt="">
                    <div class="user-desc">
                        <span>昵称：就这?</span>
                        <span>个性签名：距离成功只差一步之遥</span>
                    </div>
                </div>
            </div>
            <ul>
                <li class="van-hairline-bottom">
                    <span>我的收藏</span>
                    <van-icon name="arrow" />
                </li>
                <li class="van-hairline-bottom">
                    <span>我的订单</span>
                    <van-icon name="arrow" />
                </li>
                <li class="van-hairline-bottom">
                    <span>账号管理</span>
                    <van-icon name="arrow" />
                </li>
                <li class="van-hairline-bottom">
                    <span>地址管理</span>
                    <van-icon name="arrow" />
                </li>
                <li class="van-hairline-bottom">
                    <span>关于我们</span>
                    <van-icon name="arrow" />
                </li>
            </ul>
        </div>
        <div class="logout">
            <van-button @click="tologout" round block color="#44BA80">退出登录</van-button>
        </div>
    </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import { logout } from '../../network/user';
import { Toast } from 'vant';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
export default {
    name: "Profile",
    components: {
        NavBar,
    },
    setup() {
        const router = useRouter();
        const store = useStore();

        const tologout = () => {
            logout().then(res => {
                if(res.status == '204') {
                    Toast.success('退出成功');
                    //清除(window.localStorage里的)token
                    window.localStorage.setItem('token', '');
                    store.commit('setIsLogin', false);
                    setTimeout(() => {
                        router.push({path: '/login'});
                    }, 500);
                }
            })
        }
        return {
            tologout
        }
    }
}
</script>

<style scoped>
.logout {
    margin-top: 100px;
}
</style>