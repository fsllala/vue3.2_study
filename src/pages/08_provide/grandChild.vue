<template>
    <div>
        <h2> grandChild</h2>
        <button @click="changeColor">修改颜色</button>
        <div class="box"></div>
    </div>
</template>

<script setup lang="ts">
import { inject, Ref } from "vue";
const theColor = inject<Ref<string>>("myColor");

const changeColor = ()=>{
    theColor!.value="blue";  // 非空断言
}
</script>

<style scoped>
.box{
    width: 100px;
    height: 100px;
    background-color: v-bind(theColor);
}
</style>