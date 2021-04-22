/*
 * @Author: your name
 * @Date: 2021-04-22 15:10:05
 * @LastEditTime: 2021-04-22 19:12:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3test\vue3-todo\src\store\state.ts
 */

import { IState } from "@/typings";

export default <IState>{ //导出一个对象
    list: []
}
/* 
list: ITodo[]
listItem: {
    id: new Date().getTime -> number
    content: string
    status: FINISHED DOING WILLDO -> 枚举
}

type 类型    interface 接口   extends 继承

*/

