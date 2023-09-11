<template>
    <div>
        {{ userInfo }}
    </div>
    <div ref="getDomRef">获取dom元素</div>
    <button @click="changeUser">change</button>
</template>

<script setup lang="ts">
import { ref } from "vue";


const userInfo = ref({ name: "Fsllala" });

// 获取dom元素
const getDomRef = ref<HTMLDivElement>();

// 修改ref数据
const changeUser = () => {
    userInfo.value.name = "Fsl";
    console.log(userInfo);
    console.log("getDomRef", getDomRef.value?.innerHTML)
}

</script>

<style scoped></style>