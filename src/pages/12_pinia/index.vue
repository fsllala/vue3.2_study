<template>
    <div>
        {{ Test.current }}--{{ Test.names }}
    </div>
    <button @click="changeNum">修改state</button>
    <br>

    <div>
        {{ Test2.user }}
    </div>
    <button @click="changeNum2">同步</button>
    <button @click="changeNum3">异步</button>

    <br>
    <div>
        {{ Test3.newName }}
    </div>
</template>

<script setup lang="ts">
import { usePiniaTest } from "../../store/index";
import { useGetterAndActStore } from "../../store/index2";
import { useGettersStore } from "../../store/index3";
import { storeToRefs } from "pinia";

const Test = usePiniaTest(); // Test是一个store对象
console.log(Test)

// 1.修改store中的state的值  (好像有5种方法,通过actions修改是最好的,易于代码维护)
const changeNum = () => {
    Test.changeState(999)
};

// 2.解构store: pinia解构不具备响应式,需要用到storeToRefs结构store;
const { current, names } = storeToRefs(Test);
console.log(current);
console.log(names);


// 3.actions 可以是同步/异步
const Test2 = useGetterAndActStore();
const changeNum2 = () => {
    Test2.fetchTB();
}
const changeNum3 = () => {
    Test2.fetchYB();
}


// 4. getters
const Test3 = useGettersStore();


</script>

<style scoped></style>