/*
 * @Author: your name
 * @Date: 2021-04-26 16:34:51
 * @LastEditTime: 2021-04-29 21:41:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3project\ewshop\src\router\index.js
 */
import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
const Home = () => import( '../views/home/Home');
const Category = () => import( '../views/category/Category');
const Detail = () => import( '../views/detail/Detail');
const Profile = () => import( '../views/profile/Profile');
const ShopCart = () => import( '../views/shopcart/ShopCart');

const routes = [
  {
    path: '',
    name: 'DefaultHome',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/shopcart',
    name: 'ShopCart',
    component: ShopCart
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
