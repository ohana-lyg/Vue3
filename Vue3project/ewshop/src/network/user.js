/*
 * @Author: your name
 * @Date: 2021-05-17 19:24:47
 * @LastEditTime: 2021-05-17 20:08:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit 
 * @FilePath: \ewshop\src\network\user.js
 */
import instance from './request.js';

export function register(data) {
    return instance ({
        url: '/api/auth/register',
        method: 'post',
        data
    })
}