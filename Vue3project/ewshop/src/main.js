/*
 * @Author: your name
 * @Date: 2021-04-26 16:34:51
 * @LastEditTime: 2021-05-06 20:10:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ewshop\src\main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css'

import { Swipe, SwipeItem, Lazyload } from 'vant';

createApp(App)
    .use(Swipe).use(SwipeItem).use(Lazyload, {
        loading: require('./assets/images/3.png')
    })
    .use(store).use(router).mount('#app')
