<template>
    <div>
        child
    </div>
    {{ title }}
    <hr>
    {{ arr }}
    <hr>
    <button @click="send">给父组件传值</button>
</template>

<script setup lang="ts">
///////////////////////////////////////父传子//////////////////////////////////////////
// 1. JS写法
// const props = defineProps({
//     title:{
//         type:String,
//         default:"默认值"
//     }
// })
// console.log(props.title)


/**
 * 2.TS写法
 * 
 */
// const props = defineProps<{
//     title:string,
//     arr:number[]
// }>()

/**
 * 3.TS特有定义默认值
 * 使用TS特有的函数 withDefaults(Ts普通写法,{默认值})
 */

const props = withDefaults(defineProps<{
    title: string,
    arr: number[],
}>(), {
    title: "默认值",
    arr: () => [0, 0, 0]
})
console.log(props.arr);



///////////////////////////////////////子传父//////////////////////////////////////////

/***
 * JS写法
 */
// const emit = defineEmits(["on-click"]);
// const send = () => {
//     emit("on-click", "啦啦啦~~");
// }

/**
 * TS写法
 */

const emit = defineEmits<{
    (e: "on-click", name: string): void,
    (e: "on-click2", age: number): void
}>()

const send = () => {
    emit("on-click", "miao~~")
}



///////////////////////////////////////暴露//////////////////////////////////////////
const userInfo = {name:"Fsllala",age:18};
const changeInfo = ()=>{
    return 123123
}

defineExpose({
    userInfo,
    changeInfo
})

</script>

<style scoped></style>