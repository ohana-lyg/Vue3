/*
 * @Author: your name
 * @Date: 2021-04-19 16:21:43
 * @LastEditTime: 2021-04-19 16:27:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3\Vue3test\vue3-3\src\hooks\useNowTime.ts
 */
import { ref } from 'vue';

// const nowTime = ref("00:00:00");
// const getNowTime =() => {
//     const now = new Date();
//     const hour = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
//     const minute = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
//     const second = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds();
//     nowTime.value = hour + ':' + minute + ':' + second;
//     setTimeout(getNowTime,1000)
// }
// export {
//     nowTime,
//     getNowTime,
// }