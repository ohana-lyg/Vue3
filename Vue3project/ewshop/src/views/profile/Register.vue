<!--
 * @Author: your name
 * @Date: 2021-05-15 21:01:24
 * @LastEditTime: 2021-05-17 22:45:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ewshop\src\views\profile\Register.vue
-->
<template>
    <div>
        <nav-bar>
            <template v-slot:default>用户注册</template>
        </nav-bar>
        <div style="margin-top: 50px">
            <div style="taxt-align: center">
                <van-image
                    width="10rem"
                    height="10rem"
                    fit="contain"
                    src="https://img01.yzcdn.cn/vant/cat.jpeg"
                />
            </div>
            <van-form @submit="onSubmit">
                <van-field
                    v-model="name"
                    name="用户名"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
                />
                <van-field
                    v-model="password"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请输入密码' }]"
                />
                <van-field
                    v-model="password_confirmation"
                    type="password"
                    name="确认密码"
                    label="确认密码"
                    placeholder="请确认密码"
                    :rules="[{ required: true, message: '请再次输入密码' }]"
                />
                <van-field
                    v-model="email"
                    name="电子邮箱"
                    label="电子邮箱"
                    placeholder="请输入电子邮箱"
                    :rules="[{ required: true, message: '请填写电子邮箱' }]"
                />
                <div style="margin: 16px;">
                    <van-button round block type="info" color="#42b983" native-type="submit">提交</van-button>
                </div>
            </van-form>
        </div>
    </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import { register } from '../../network/user';
import { Toast } from 'vant';
import { toRefs, reactive } from 'vue';
export default {
    name: 'Register',
    components: {
        NavBar
    },
    setup() {
        const userinfo = reactive({
            name: '',
            password: '',
            password_confirmation: '',
            email: ''
        })

        const onSubmit = () => {
            //先验证
            if(userinfo.password != userinfo.password_confirmation) {
                Toast('密码不一致');
            }
            else {
                //再提交给服务器
                register(userinfo).then(res => {
                    console.log(res);
                })
            }
        }

        return {
            onSubmit,
            ...toRefs(userinfo),
        }
    }
    
}
</script>

<style scoped>

</style>