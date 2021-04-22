/*
 * @Author: your name
 * @Date: 2021-04-22 15:12:44
 * @LastEditTime: 2021-04-22 20:56:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3test\vue3-todo\src\store\mutations.ts
 */

import { IState, ITodo } from "@/typings";
import { SET_TODO, SET_TODO_LIST } from "./actionTypes";

export default { //导出一个对象
    [SET_TODO](state: IState, todo: ITodo): void {
        state.list.unshift(todo);
    },
    [SET_TODO_LIST](state: IState, todoList: ITodo[]): void {
        state.list = todoList;
    }
}