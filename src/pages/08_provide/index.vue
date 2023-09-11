<template>
    <div>
       <h2> parent</h2>
       <label for="red">
        <input type="radio" name="color" v-model="colorVal" id="red" value="red">
        红色
       </label>
       <label for="green">
        <input type="radio" name="color" v-model="colorVal" id="green" value="green">
        绿色
       </label>
       <label for="yellow">
        <input type="radio" name="color" v-model="colorVal" id="yellow" value="yellow">
        黄色
       </label>
       <div class="box"></div>
    </div>
    <hr>
    <VChild></VChild>
</template>

<script setup lang="ts">
import { provide, ref } from "vue";
import VChild from "./child.vue";


const colorVal = ref<string>("red");

provide("myColor",colorVal);

</script>

<style scoped>
.box{
    width: 100px;
    height: 100px;
    background-color: v-bind(colorVal);
}
</style>