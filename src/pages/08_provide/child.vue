<template>
    <div>
        <h2> child</h2>
        <div class="box"></div>
    </div>
    <hr>
    <GrandChild></GrandChild>
</template>

<script setup lang="ts">
import { inject, Ref } from "vue";
import GrandChild from "./grandChild.vue";


const theColor = inject<Ref<string>>("myColor");
console.log(theColor)
</script>

<style scoped>
.box{
    width: 100px;
    height: 100px;
    background-color: v-bind(theColor);
}
</style>