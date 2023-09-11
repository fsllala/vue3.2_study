<template>
    <div>

        {{ $fsl }}
        {{ $say.good("fsl") }}
    </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue';

/**
 * 1. 在main.ts中 app.config.globalProperties.变量名=xxx;
 * 2. 在setup中读取,需要引入getCurrentInstance
 */

const apps = getCurrentInstance();
console.log(apps?.proxy?.$fsl);
console.log(apps?.proxy?.$say.good("fight"));
</script>

<style scoped>

</style>