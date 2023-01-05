<template>
    <div class="mx-auto">
        <template v-for="(item, index) in 10" :key="index">
            <div class="flex  w-full flex-row">

                <div class="card card-side bg-base-100 shadow-xl" :class="{ 'invisible': item % 2 === 0 }">
                    <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Watch</button>
                        </div>
                    </div>
                </div>
                <div class="divider divider-horizontal text-white before:bg-secondary after:bg-secondary">
                    <span class="badge rounded-full text-white">{{ item }}</span>
                </div>
                <div class="card card-side bg-base-100 shadow-xl" :class="{ 'invisible': item % 2 === 1 }">
                    <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Watch</button>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>