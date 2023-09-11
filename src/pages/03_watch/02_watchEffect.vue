<template>
    <div>
        <input type="text" v-model="message1">
    </div>
    <div>
        <input type="text" v-model="message2">
    </div>
    <div>
        <button @click="stopWatchEffect">stop</button>
    </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
const message1 = ref<string>("fsllala");
const message2 = ref<number>(18);

// 1.watchEffect一进来默认执行一次;
// watchEffect(()=>{
//     console.log("message1",message1.value);
//     console.log("message2",message2.value);
// })

// 2.清除副作用 就是在触发监听之前会调用一个函数可以处理你的逻辑例如防抖
// watchEffect((oninvalidate)=>{
//     console.log("message1",message1.value);
//     console.log("message2",message2.value);
//     oninvalidate(()=>{
//         console.log("before~~")
//     })
// })

// 3.watchEffect返回值是个函数,执行该函数即停止watchEffect监听;
const stop = watchEffect((oninvalidate) => {
    console.log("message1", message1.value);
    console.log("message2", message2.value);
    oninvalidate(() => {
        console.log("before~~")
    })
})

const stopWatchEffect = () => stop();

</script>

<style scoped></style>