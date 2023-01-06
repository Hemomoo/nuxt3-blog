<template>
    <div class="hero min-h-full">
        <div class="hero-overlay"></div>
        <div class="hero-content text-center  text-white">
            <div class="max-w-md">
                <h1 class="mb-5 text-5xl font-bold">{{ data.data.tag }}</h1>
                <p class="mb-5">{{ data.data.content }}</p>
                <p class="w-full text-right">———— &nbsp;{{ data.data.origin }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: '关于我',
    meta: [
        { name: 'description', content: 'My amazing site.' }
    ],
})
const { data } = await useFetch('https://api.xygeng.cn/one')
</script>

<style scoped>

</style>