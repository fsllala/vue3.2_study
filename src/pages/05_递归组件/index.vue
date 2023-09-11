<template>
    <div>
        <DiGui :treeData="diguiTreeData"></DiGui>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import DiGui from './digui.vue';


/**
 * 父组件
 * 1.定义数据
 */

interface TreeData {
    title: string,
    isChecked: boolean,
    children?: TreeData[]
}

const diguiTreeData = reactive<TreeData[]>([
    {
        title: "HTML入门到精通",
        isChecked: false,
        children: [
            {
                title: "HTML1-1",
                isChecked: false
            },
            {
                title: "HTML1-2",
                isChecked: true
            },
            {
                title: "HTML1-3",
                isChecked: false
            },
        ]
    },
    {
        title: "JS入门到放弃",
        isChecked: true,
        children: [
            {
                title: "JS1-1",
                isChecked: false
            },
            {
                title: "JS1-2",
                isChecked: true
            },
            {
                title: "JS1-3",
                isChecked: false,
                children: [
                    {
                        title: "JS1-3-1",
                        isChecked: false,
                    }
                ]
            },
        ]
    },
    {
        title: "VUE入门到精通",
        isChecked: false,
        children: [
            {
                title: "VUE1-1",
                isChecked: false
            },
            {
                title: "VUE1-2",
                isChecked: false
            },
            {
                title: "VUE1-3",
                isChecked: false
            },
        ]
    }
])

</script>

<style scoped></style>