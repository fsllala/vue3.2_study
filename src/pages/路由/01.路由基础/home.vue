<template>
    <div class="box">
        <div>
            <!-- 1. path跳转 -->
            <router-link to="/login">login</router-link>
            <router-link to="/register" style="margin-left: 20px;">register</router-link>
        </div>
        <div>
            <!-- 2. name跳转 -->
            <router-link :to="{ name: 'Login' }">login</router-link>
            <router-link :to="{ name: 'Register' }" style="margin-left: 20px;">register</router-link>
        </div>
        <div>
            <!-- 3.编程式导航 router.push()有历史记录; router.replace()没有历史记录;-->
            <!-- <button @click="toPage('/login')">toLogin</button>
            <button @click="toPage('/register')">toRegister</button> -->

            <button @click="toPage('Login')">toLogin</button>
            <button @click="toPage('Register')">toRegister</button>
        </div>
    </div>
</template>

<script setup lang="ts">
// 引入 hook: useRouter
import { useRouter } from 'vue-router';
const router = useRouter();

// 3.1 字符串形式
// const toPage = (url: string) => {
//     router.push(url);
// }
// 3.2 对象形式
// const toPage = (url: string) => {
//     router.push({
//         path: url,
//     });
// }
// 3.3命名式
const toPage = (url: string) => {
    router.push({
        name: url,  
    });
}
</script>

<style scoped></style>