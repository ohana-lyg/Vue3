<!--
 * @Author: your name
 * @Date: 2021-04-20 20:11:02
 * @LastEditTime: 2021-04-20 20:29:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3test\vue3-3\src\components\Modal.vue
-->
<template>
    <teleport to="#modal">
        <div id="center">
            <h2>JSPang</h2>
        </div>
    </teleport>
</template>
<script lang="ts">
export default {
    
}
</script>
<style>
    #center {
        width: 200px;
        height: 200px;
        border: 2px solid skyblue;
        background: pink;
        position: fixed;
        left: 50%;
        top: 50%;
        margin-left: -100px;
        margin-top: -100px;
    }
</style>