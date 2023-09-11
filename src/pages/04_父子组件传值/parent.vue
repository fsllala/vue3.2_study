<template>
    <div>
        parent
    </div>
    <hr>
    <VChild :title="name" :arr="arr" @on-click="receive" ref="vchildRef"></VChild>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import VChild from "./child.vue";

// 父传子
let name = "fsllala";
let arr = [333, 222, 111];


// 子传父
const receive = (params: string) => {
    console.log(params)
}

// 获取子组件方法/属性
const vchildRef = ref<InstanceType<typeof VChild>>(); //(固定写法)
onMounted(()=>{
    console.log(vchildRef.value?.userInfo);
    console.log(vchildRef.value?.changeInfo())
})

</script>

<style scoped></style>