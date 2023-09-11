<template>
    <div class="dymicBox">
        <div v-for="(item, index) in datas" :key="index" class="btn" :class="[index == showedIndex ? 'actived' : '']"
            @click="changeIndex(item, index)">
            <div>{{ item.title }}</div>
        </div>
    </div>
    <!-- 动态组件挂载点 component -->
    <component :is="showedCom"></component>
</template>

<script setup lang="ts">
import { reactive, ref,shallowRef,markRaw } from "vue";
import A from "./component/A.vue";
import B from "./component/B.vue";
import C from "./component/C.vue";

const showedCom = shallowRef(A);
const showedIndex = ref(0);
const changeIndex = (item: any, index: number) => {
    showedCom.value = item.com;
    showedIndex.value = index;
}

const datas = reactive([
    {   
        title: "A组件",
        com: markRaw(A),
    },
    {
        title: "B组件",
        com: markRaw(B),
    },
    {
        title: "C组件",
        com: markRaw(C),
    },
]);
</script>

<style lang="scss" scoped>
.dymicBox {
    display: flex;

    .btn {
        border: 1px solid #ccc;
        margin: 10px;
        padding: 10px 20px;
        cursor: pointer;
    }

    .actived {
        background-color: bisque;
    }
}
</style>
