<template>
    <div>
        <input type="text" v-model="message1">
    </div>
    <div>
        <input type="text" v-model="message2">
    </div>

    <div>
        <input type="text" v-model="obj1.foo.bar.name">
    </div>

    <div>
        <input type="text" v-model="obj1.foo.bar.age">
    </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from "vue";
/**
 * watch 主要监听响应式数据的变化,即ref和reactive包裹的数据
 * watch第三个参数: {
 *    deep:true  深度监听
 *    immediate:true  立即执行一次
 *    flush:"pre"  pre 组件更新之前调用 sync 同步执行  post 组件更新之后执行
 * }
 */


const message1 = ref<string>("fsllala");
const message2 = ref<string>("fsl");

//  1.监听一个数据变化
// watch(message1, (newVal, oldVal) => {
//     console.log(newVal, oldVal);
// })

// 2.监听两个数据的变化
// watch([message1,message2],(newVal,oldVal)=>{
//     console.log(newVal,oldVal);
// })

// 3.监听一个对象,对象为深层对象,ref嵌套  需要{deep:true}, newVal===oldVa;
// const obj1= ref({
//     foo:{
//         bar:{
//             name:"fsllala"
//         }
//     }
// });

// watch(obj1,(newVal,oldVal)=>{
//     console.log(newVal,oldVal);
// },{deep:true})


// 4.监听一个对象,对象为深层对象,reactive嵌套  不需要{deep:true},默认开启了  newVal===oldVa;
// const obj1 = reactive({
//     foo: {
//         bar: {
//             name: "fsllala"
//         }
//     }
// });

// watch(obj1, (newVal, oldVal) => {
//     console.log(newVal, oldVal);
// })

// 5.监听一个对象中的某一个具体属性,直接obj1.foo.bar.age是不行的,因为obj1.foo.bar.age为一个number类型,不是proxy代理的对象;需要用()=>obj1.foo.bar.age
const obj1 = reactive({
    foo: {
        bar: {
            name: "fsllala",
            age:18
        }
    }
});

watch(()=>obj1.foo.bar.age, (newVal, oldVal) => {
    console.log(newVal, oldVal);
})

</script>

<style scoped></style>
