<template>
    <div>
        <div>child slot</div>
        <!-- 1.普通插槽 -->

        <!-- <slot>
        默认值~~~
      </slot> -->


        <!--2.具名插槽  -->

        <!-- <div class="header">
        <slot name="headers"></slot>
      </div>
      <div class="footer">
        <slot name="footers"></slot>
      </div> -->

        <!-- 3.作用域插槽 -->

        <!-- <div v-for="(item, index) in slotData" :key="index">
            <slot :childDatas="item" :indexs="index"></slot>
        </div> -->

        <!-- 4.动态插槽 -->
        <div class="header">
            <slot name="headers"></slot>
        </div>
        <div class="footer">
            <slot name="footers"></slot>
        </div>



    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

// 3.作用域插槽
interface SlotData {
    name: string,
    age: number
}
const slotData = reactive<SlotData[]>([
    {
        name: "插入了1次",
        age: 18
    },
    {
        name: "插入了2次",
        age: 28
    },
    {
        name: "插入了3次",
        age: 38
    },
    {
        name: "插入了4次",
        age: 88
    }
])
</script>

<style scoped>
.header {
    height: 100px;
    background-color: rosybrown;
}

.footer {
    height: 200px;
    background-color: bisque;
}
</style>