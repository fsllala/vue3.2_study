<template>
    <div>
        <img src="@/assets/imgs/default_cover_204.webp" alt="" width="300" id="imgs">
    </div>
</template>

<script setup lang="ts">

import useBase64 from "../../hooks/imgToBase64"


useBase64({el:"imgs"}).then(res=>{
    console.log(res.baseUrl)
})

</script>

<style scoped>

</style>