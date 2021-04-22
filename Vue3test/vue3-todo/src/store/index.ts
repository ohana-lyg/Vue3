/*
 * @Author: your name
 * @Date: 2021-04-22 13:17:11
 * @LastEditTime: 2021-04-22 15:17:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3test\vue3-todo\src\store\index.ts
 */
import { createStore } from 'vuex'
import state from './state';
import mutations from './mutations';
import actions from './actions';

export default createStore({
  state,
  mutations,
  actions,

})
