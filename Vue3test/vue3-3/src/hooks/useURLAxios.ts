/*
 * @Author: your name
 * @Date: 2021-04-19 16:44:17
 * @LastEditTime: 2021-04-19 16:50:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3\Vue3test\vue3-3\src\hooks\useURLAxios.ts
 */

import { ref } from 'vue';
import axios from 'axios';

function useUrlAxios(url : string) {
    const result = ref(null);
    const loading = ref(true);
    const loaded = ref(false);
    const error = ref(null);

    axios.get(url).then((res) => {
        loading.value = false;
        loaded.value = true;
        result.value = res.data;
    }).catch (e => {
        error.value = e;
        loading.value = false;
    })
    return {
        result,
        loading,
        loaded,
        error,
    }
    
}

export dafault useUrlAxios