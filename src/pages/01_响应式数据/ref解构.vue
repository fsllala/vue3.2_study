<template>
    <div>
        {{ userInfo }}
    </div>
    <button @click="changeInfo">change</button>
</template>

<script setup lang="ts">
import { reactive, toRef } from 'vue';
/**
 * toRef: toRef(对象,key);
 * 只能解构响应式的值,对非响应式的值结构没啥用
 */
const userInfo = reactive({ name: "fsllala", like: "jk" });
const likes = toRef(userInfo, "like");
const changeInfo = () => {
    likes.value = "洛丽塔";
}

/**
 * 手写toRefs
 */

 const fslToRefs = <T extends object>(obj:T)=>{
    const maps:any = {};
    for(let key in obj){
        maps[key] = toRef(obj,key)
    }
    return maps;
 }
 const {name,like} = fslToRefs(userInfo);
 console.log(name);
 console.log(like);
</script>

<style scoped></style>