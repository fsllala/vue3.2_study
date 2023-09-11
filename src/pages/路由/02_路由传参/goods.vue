<template>
    <table border="1" style="width: 500px;text-align: center;">
        <thead>
            <tr>
                <th>物品名:</th>
                <th>物品价格:</th>
                <th>物品ID:</th>
                <th>操作:</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in data" :key="item.id">
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
                <td>{{ item.id }}</td>
                <td><button @click="toDetail(item)">详情</button></td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import { data } from "./goods.json";
import { useRouter } from "vue-router";

type Item = {
    name: string;
    price: number;
    id: number;
}
const router = useRouter();

const toDetail = (item: Item) => {
    router.push({
        path: "/detail",
        query: item,
    })
};

</script>

<style scoped></style>      