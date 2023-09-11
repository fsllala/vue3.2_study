<template>
    <div v-for="(item, index) in treeData" :key="index" class="tree" @click.stop="clickTap(item)">
        <input type="checkbox" v-model="item.isChecked">{{ item.title }}

        <!-- 只有上面的话,只有第一层 -->
        <!-- 组件递归:
            1. 确定组件的名称,V3中可以直接使用文件名当递归组件的名称,本例子为 DiGui,
            2. 其实是缺少name的,2里面就有name:"xxx",然后递组件的名称就可以用这个name名称。 3.2版本目前没有name这个属性;
         -->
         <DiGui v-if="item?.children?.length" :treeData="item?.children"></DiGui>
    </div>
</template>

<script setup lang="ts">
interface TreeData {
    title: string,
    isChecked: boolean,
    children?: TreeData[]
}

defineProps<{
    treeData: TreeData[]
}>();


const clickTap = (item:TreeData)=>{
    console.log(item)
}

</script>

<style scoped>
.tree{
    margin-left: 20px;
}
</style>