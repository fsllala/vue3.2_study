<template>
    <div class="box">
        <button v-has-show="'shop:add'">添加</button>
        <button v-has-show="'shop:edit'">编辑</button>
        <button v-has-show="'shop:delete'">删除</button>
    </div>
</template>

<script setup lang="ts">
import { Directive } from 'vue';

/**
 * 局部自定义指令:
 * 必须以v开头: vFocus vFsllala
 * const vFocus = {
    mounted: (el) => el.focus()
}
*/


/***
 * 鉴权demo
 * 1. 用户进行登录,将用户信息存储到本地 localStorage/vuex/pinia
 * 2. 请求后端接口,后端返回权限列表,这里mock后台数据
 */


/**mock数据
const permission=[
    "用户id:页面路由:权限",
    "用户id:页面路由:权限",
    "用户id:页面路由:权限",
]
 */

localStorage.setItem("userId", "fsllala");

const permission = [
    "fsllala:shop:add",
    "fsllala:shop:edit",
    "fsllala:shop:delete",
]
const userID = localStorage.getItem("userId");
const vHasShow: Directive<HTMLElement, string> = (el, binding) => {
    if (!permission.includes(userID + ":" + binding.value)) {
        el.style.display = "none";
    }
}




</script>

<style scoped></style>