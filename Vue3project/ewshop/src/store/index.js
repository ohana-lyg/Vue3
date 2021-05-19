/*
 * @Author: your name
 * @Date: 2021-05-14 15:19:36
 * @LastEditTime: 2021-05-19 20:19:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ewshop\src\store\index.js
 */
import { createStore } from 'vuex'
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const state = {
  user: {
    isLogin: window.localStorage.getItem('token') ? true : false,
  }
}

export default createStore({
  state,
  mutations,
  actions,
  getters
})
