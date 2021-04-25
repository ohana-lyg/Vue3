/*
 * @Author: your name
 * @Date: 2021-04-22 15:16:34
 * @LastEditTime: 2021-04-25 16:51:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3test\vue3-todo\src\store\actions.ts
 */

import { IState, ITodo } from "@/typings";
import { Commit } from "vuex";
import { SET_TODO, SET_TODO_LIST, REMOVE_TODO, SET_TODO_STATUS } from "./actionTypes";

interface ICtx {
    commit: Commit,
    state: IState,
    
}

export default { //导出一个对象
    [SET_TODO]({ commit }: ICtx, todo: ITodo): void {
        commit(SET_TODO, todo);
    },
    [SET_TODO_LIST]({ commit }: ICtx, todoList: ITodo[]): void {
        commit(SET_TODO_LIST, todoList);
    },
    [REMOVE_TODO]({ commit }: ICtx, id: number): void {
        commit(REMOVE_TODO, id);
    },
    [SET_TODO_STATUS]({ commit }: ICtx, id: number): void {
        commit(SET_TODO_STATUS, id);
    }
}

