/*
 * @Author: your name
 * @Date: 2021-04-26 16:34:51
 * @LastEditTime: 2021-05-13 20:37:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ewshop\src\main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css'

import {Button, Tag, Image as VanImage, Swipe, SwipeItem, Lazyload, Badge, Sidebar, SidebarItem, Collapse, CollapseItem, Tab, Tabs, Card, Search, Toast } from 'vant';

createApp(App)
    .use(Swipe).use(SwipeItem).use(Lazyload, {
        loading: require('./assets/images/3.png')
    }).use(Badge).use(Sidebar).use(SidebarItem).use(Collapse).use(CollapseItem)
    .use(Tab).use(Tabs).use(Card).use(Search).use(Toast).use(VanImage).use(Button).use(Tag)
    .use(store).use(router).mount('#app')
