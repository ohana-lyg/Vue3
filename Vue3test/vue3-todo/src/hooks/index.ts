/*
 * @Author: your name
 * @Date: 2021-04-22 19:33:00
 * @LastEditTime: 2021-04-22 21:43:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3test\vue3-todo\src\hooks\index.ts
 */

import store from "@/store"
import { SET_TODO, SET_TODO_LIST } from "@/store/actionTypes"
import { ITodo, TODO_STATUS } from "@/typings"
import { Store, useStore } from "vuex"

export interface IUseTodo {
    setTodo: (value: string) => void;
    setTodoList: () => void;
    removeTodo: () => void;
    setStatus: () => void;
    setDoing: () => void;
}

interface IUseLocalStorage {
    getLocalList: () => ITodo[];
    setLocalList: (todoList: ITodo[]) => void;
}

function useTodo(): IUseTodo {

    const store: Store<any> = useStore();
    const { getLocalList, setLocalList }: IUseLocalStorage = useLocalStorage();
    const todoList: ITodo[] = getLocalList();

    function setTodo(value: string): void {
        const todo: ITodo = {
            id: new Date().getTime(),
            content: value,
            status: TODO_STATUS.WILLDO,
        }
        store.dispatch(SET_TODO, todo);
        setLocalList(store.state.list);
    }
    
    function setTodoList() {
        store.dispatch(SET_TODO_LIST,todoList);
    }

    function removeTodo() {
        
    }

    function setStatus() {
        
    }

    function setDoing() {
        
    }

    return {
        setTodo,
        setTodoList,
        removeTodo,
        setStatus,
        setDoing
    }

}

function useLocalStorage(): IUseLocalStorage {
    function getLocalList(): ITodo[] {
        return JSON.parse(localStorage.getItem('todoList') || '[]');
    }

    function setLocalList(todoList: ITodo[]): void {
        localStorage.setItem('todoList', JSON.stringify(todoList));
    }

    return {
        getLocalList,
        setLocalList
    }
}

export {
    useTodo
}


// function setLocalList(list: any) {
//     throw new Error("Function not implemented.");
// }


// function todoList(SET_TODO_LIST: string, todoList: any) {
//     throw new Error("Function not implemented.");
// }

