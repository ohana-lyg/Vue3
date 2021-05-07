/*
 * @Author: your name
 * @Date: 2021-05-07 22:03:42
 * @LastEditTime: 2021-05-07 22:06:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ewshop\src\network\category.js
 */
import instance from './request.js';

export  function getCategory() {
    return instance({
        url: '/api/goods',
    })
}
