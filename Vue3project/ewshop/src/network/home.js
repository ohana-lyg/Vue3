/*
 * @Author: your name
 * @Date: 2021-04-27 20:14:47
 * @LastEditTime: 2021-04-27 22:07:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3project\ewshop\src\network\home.js
 */
import instance from './request.js';

export  function getHomeAllData() {
    return instance({
        url: '/api/index',
    })
}

export function getBanner() {
    
}