<!--
 * @Author: your name
 * @Date: 2021-05-27 20:53:38
 * @LastEditTime: 2021-05-27 21:20:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ewshop\src\views\profile\Address.vue
-->
<template>
    <div class="address-box">
        <nav-bar class="nav-bar">
            <template v-slot:default>
                地址管理
            </template>
        </nav-bar>
        <div v-show="list.length == 0" style="...">
            还没有地址信息，快去添加吧！
        </div>
        <div class="address-item">
            <van-address-list
                v-model="chosenAddressId"
                :list="list"
                default-tag-text="默认"
                @add="onAdd"
                @edit="onEdit"
                @select="select"
            />
        </div>
    </div>
</template>

<script>

import { onMounted, reactive, toRefs } from 'vue';
import NavBar from '../../components/common/navbar/NavBar';
// import { getaddresslist } from '../../network/address';
import { useRouter, /* useRoute */ } from 'vue-router';
export default {
    components: {
        NavBar,
    },
    setup() {
        // const route = useRoute();
        const router = useRouter();
        const state = reactive({
            chosenAddressId: '1',
            list: []
        })

        onMounted({
            
        })

        const onAdd = () => {
            router.push({path: '/addressedit', query: { type: 'add'}});
        }

        const onEdit = (item) => {
            router.push({path: '/addressedit', query: { type: 'edit', addressId: item.id}});
        }

        const select = (item) => {
            router.push({path: '/createorder', query: { addressId: item.id}});
        }

        return {
            ...toRefs(state),
            onAdd,
            onEdit,
            select
        }
    }
}
</script>

<style lang="scss" scoped>
.address-box {
    height: 300px;
    .van-radio-__icon {
        display: none;
    }
    .address-item {
        margin-top: 45px;
        .van-button {
            background: var(--color--tint);
            border-color: var(--color--tint);
        }
    }
}
.van-address-list__bottom {
    bottom: 100px !important;
}
</style>