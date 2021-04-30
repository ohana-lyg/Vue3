/*
 * @Author: your name
 * @Date: 2021-04-26 16:34:51
 * @LastEditTime: 2021-04-30 21:15:21
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
    component: Home,
    meta: {
      title:'图书商城'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title:'图书商城'
    }
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
    meta: {
      title:'图书商城-商品分类'
    }
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,
    meta: {
      title:'图书商城-商品详情'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title:'图书商城-个人中心'
    }
  },
  {
    path: '/shopcart',
    name: 'ShopCart',
    component: ShopCart,
    meta: {
      title:'图书商城-购物车'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  //如果没有登录，在这里login
  next();
  document.title = to.meta.title;
})

export default router
