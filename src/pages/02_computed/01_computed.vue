<template>
    <div>
        <input type="text" placeholder="请输入" v-model="keyWords">
    </div>
    <table border="1" style="width:800px;margin-top: 18px;" cellpadding="0" cellspacing="0">
        <thead>
            <tr>
                <th>物品名称</th>
                <th>物品单价</th>
                <th>物品数量</th>
                <th>物品总价</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody style="text-align: center;">
            <tr v-for="(item, index) in showedTableList">
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
                <td><button @click="changePrice(item, false)">-</button>{{ item.number }}<button
                        @click="changePrice(item, true)">+</button></td>
                <td>{{ item.number * item.price }}</td>
                <td><button @click="deletes(index)">删除</button></td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th colspan="5">总价:{{ totalPrice }}</th>
            </tr>
        </tfoot>
    </table>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from "vue";

interface TableInfo {
    name: string,
    price: number,
    number: number
}

const tableData = reactive<TableInfo[]>([
    {
        name: "js入门到精通",
        price: 66,
        number: 1
    }, {
        name: "vue入门到精通",
        price: 99,
        number: 3
    }, {
        name: "node入门到放弃",
        price: 88,
        number: 2
    }
])

const changePrice = (item: any, isAdd: boolean) => {
    if (!isAdd) {
        if (item.number <= 0) {
            return false
        }
        item.number--;
    } else {
        if (item.number >= 99) {
            return false
        };
        item.number++;
    }
};

// 删除
const deletes = (index: number) => {
    tableData.splice(index, 1);
}

// 总价
const totalPrice = computed(() => {
    // console.log(22222)
    return showedTableList.value.reduce((prev: number, item) => {
        return prev + item.number * item.price;
    }, 0)

})

// 搜索 (computed响应式依赖是keyWords)
const keyWords = ref<string>("");
const showedTableList = computed(() => {
    // console.log(1111)
    return tableData.filter((item) => item.name.includes(keyWords.value))
})
console.log("showedTableList",showedTableList)


</script>

<style scoped>
</style>