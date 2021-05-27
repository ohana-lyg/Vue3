<!--
 * @Author: your name
 * @Date: 2021-05-27 20:53:53
 * @LastEditTime: 2021-05-27 22:59:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ewshop\src\views\profile\AddressEdit.vue
-->
<template>
    <div class="addres-edit-box">
        <nav-bar class="nav-bar">
            <template v-slot:default>
                新增地址
            </template>
        </nav-bar>
        <van-address-edit
            class="edit"
            :area-list="areaList"
            :address-info="addressInfo"
            :show-delete="false"
            show-set-default
            show-search-result
            :search-result="searchResult"
            :area-columns-placeholder="['请选择', '请选择', '请选择']"
            @save="onSave"
            @delete="onDelete"
        />
    </div>
</template>

<script>

import NavBar from '../../components/common/navbar/NavBar';
// import { useRouter, useRoute } from 'vue-router';
// import { Toast } from 'vant';
import { Districts } from '../../utils/address';
// import { ADDaddress, Editaddress, Deleteaddress, getaddressdetail } from '../../network/address';
import { onMounted, reactive, toRefs } from 'vue';
export default {
    components: {
        NavBar,
    },
    setup() {
        // const route = useRoute();
        // const router = useRouter();
        const state = reactive({
            areaList: {
                province_list: {},
                city_list: {},
                country_list: {}
            },
            searchResult: [],
            addressInfo: {
                
            }
        })
        onMounted(() => {
            //省市区 列表 构造出来
            // let _province_list = {};
            // let _city_list = {};
            // let _country_list = {};
            console.log(Districts.getLev1);
        })

        const onSave = (/* content */) => {

        }

        const onDelete = () => {

        }

        return {
            ...toRefs(state),
            onSave,
            onDelete
        }
    }
}
</script>

<style lang="scss" scoped>
.edit {
    .van-field__body {
        textarea {
            height: 20px i !important;
        }
    }
}
.address-edit-box {
    margin-top: 45px;
}
</style>