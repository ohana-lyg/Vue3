/*
 * @Author: your name
 * @Date: 2021-04-22 18:57:53
 * @LastEditTime: 2021-04-25 14:44:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3test\vue3-todo\src\typings\index.ts
 */
interface ITodo {
    id: number;
    content: string;
    status:TODO_STATUS;
}

interface IState {
    list: ITodo[];
}

enum TODO_STATUS {
    WILLDO = 'willdo',
    DOING = 'doing',
    FINISHED = 'finished'
}

export {
    ITodo,
    IState,
    TODO_STATUS
}
