/*
 * @Author: your name
 * @Date: 2021-04-26 16:34:51
 * @LastEditTime: 2021-05-19 20:34:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3project\ewshop\src\router\index.js
 */
import { createRouter, createWebHistory } from 'vue-router'
import { Toast } from 'vant';
import store from '../store';
// import Home from '../views/Home.vue'
const Home = () => import( '../views/home/Home');
const Category = () => import( '../views/category/Category');
const Detail = () => import( '../views/detail/Detail');
const Profile = () => import( '../views/profile/Profile');
const Register = () => import( '../views/profile/Register');
const Login = () => import( '../views/profile/Login')
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
      title:'图书商城-个人中心',
      isAuthorconfirm: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title:'图书商城-用户注册'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title:'图书商城-用户登录'
    }
  },
  {
    path: '/shopcart',
    name: 'ShopCart',
    component: ShopCart,
    meta: {
      title:'图书商城-购物车',
      isAuthorconfirm: true
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  //如果没有登录，在这里login
  if(to.meta.isAuthorconfirm && store.state.user.isLogin == false) {
    Toast('您还没有登录，请先登录');
    return next('/login');
  }
  else {
    next();
  }
  document.title = to.meta.title;
})

export default router
