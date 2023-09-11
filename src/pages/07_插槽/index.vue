<template>
    <div>
        <!-- 1.普通插槽 -->

        <!-- <VChild>
            <button>12323</button>
        </VChild>
        <hr>
        <VChild>
            <span>444</span>
        </VChild> -->

        <!-- 2.具名插槽 -->

        <!-- <VChild>
            <template v-slot:headers>
                插入了上面
            </template>
            <template v-slot:footers>
                插入了下面
            </template>
        </VChild> -->


        <!-- 3.作用域插槽:在子组件动态绑定参数 派发给父组件的slot去使用 -->

        <!-- <VChild>
            <template v-slot:default="{childDatas,indexs}">
                {{ childDatas }}--{{ indexs }}
            </template>
        </VChild> -->

            <!-- 4.动态插槽 -->
            <VChild>
                <template v-slot:[dynamicSlot]>
                    <span>动态插槽ing</span>
                </template>
            </VChild>

    </div>
</template>

<script setup lang="ts">
import {ref } from "vue";
import VChild from "./child.vue";

//  4.动态插槽
const dynamicSlot = ref("headers"); // 对应组组件的插槽的name; 本案例为:headers/footers

</script>

<style scoped></style>