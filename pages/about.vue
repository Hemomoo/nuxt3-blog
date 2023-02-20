<template>
    <div class="hero min-h-full">
        <div class=""></div>
        <div class="hero-content text-center  text-white">
            <div class="max-w-md">
                <h1 class="mb-5 text-2xl font-bold">{{ data.from }}</h1>
                <p class="mb-5">{{ data.hitokoto }}</p>
                <p class="text-right">{{ data.from_who }}</p>
            </div>
        </div>
    </div>
</template>

<script  setup>
useHead({
    title: '关于我',
    meta: [
        { name: 'description', content: 'My amazing site.' }
    ],
})

const { data } = await useFetch("https://v1.hitokoto.cn/") 
</script>

<style scoped>

</style>