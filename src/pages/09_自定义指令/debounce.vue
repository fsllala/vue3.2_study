<template>
    <div>
        <button v-debounce="sendMessage">自定义防抖</button>
    </div>
</template>

<script setup lang="ts">
import { Directive, ref } from 'vue';

const timer = ref();

const sendMessage = () => {
    console.log(121112123123);
}

const vDebounce: Directive<HTMLButtonElement, any> = (el, binding) => {
    console.log(binding)
    el.addEventListener("click", () => {
        timer.value && clearTimeout(timer.value);
        timer.value = setTimeout(() => {
            binding.value();
        }, 1000);
    })

}
</script>

<style scoped></style>