<template>
    <div>
        HTML
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";

onMounted(() => {
    console.log("A onMounted")
})


onUnmounted(() => {
    console.log("A onUnMounted")
})
</script>

<style scoped></style>