<template>
    <div class="p-16 grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 overflow-x-hidden ">
        <template v-for="(item, index) in data.data" :key="index">
            <div class="flex m-10 bg-shadow rounded-2xl text-white text-sm">
                <img class="object-cover  flex-1 w-40 inline-block rounded-l-2xl" :src="item.info.imgurl" alt="Shoes" />
                <div class="p-4 flex flex-col justify-between">
                    <h1 class="text-white text-xl">{{ item.title }}</h1>
                    <p class="text-box">{{ item.info.yanyuan }}</p>
                    <!-- 评分 -->
                    <div class="rating rating-md rating-half">
                        <input type="radio" name="rating-10" class="rating-hidden" />
                        <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2  mask-half-1" />
                        <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2  mask-half-2" />
                        <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2  mask-half-1" checked />
                        <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2  mask-half-2" />
                        <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2  mask-half-1" />
                        <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2  mask-half-2" />
                        <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2  mask-half-1" />
                        <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2  mask-half-2" />
                        <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2  mask-half-1" />
                        <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2  mask-half-2" />
                    </div>
                    <!-- 查看详情 -->
                    <div>
                        <a class="link link-hover flex justify-end" :href="item.info.url">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="w-6 h-6 text-right hover:fill-secondary duration-75 hover:scale-125">
                                <path fill-rule="evenodd"
                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                                    clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>
<script setup>
useHead({
    title: '博客',
    meta: [
        { name: 'referrer', content: 'no-referrer' }
    ],
})

const { data } = await useFetch('https://api.vvhan.com/api/douban')

</script>

<style lang="scss" scoped>
.text-box {
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
}



.bg-shadow {
    position: relative;
    border-radius: 18px;
    background: #97DECE;
    box-shadow: inset -5px 5px 10px #91d5c6, inset 5px -5px 10px #9de7d6;

    &:hover::after {
        content: "";
        position: absolute;
        z-index: -10;
        left: 0;
        right: 0;
        bottom: 0;
        top: 80%;
        background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
        border-radius: 18px;
        animation-name: charging;
        animation-duration: 1s;
        animation-timing-function: infinite;
        animation-iteration-count: 1;
        animation-fill-mode: forwards; // 动画最后一阵停止
        filter: hue-rotate(90deg);
    }
}

@keyframes charging {
    50% {
        // box-shadow: 0 14px 28px rgba(0, 150, 136, 0.83), 0px 4px 10px rgba(9, 188, 215, 0.4);
    }

    95% {
        top: 5%;
        filter: hue-rotate(0deg);
        border-radius: 0 0 5px 5px;
        // box-shadow: 0 14px 28px rgba(4, 188, 213, .2), 0 10px 10px rgba(9, 188, 215, 0.08);
    }

    100% {
        top: 0%;
        filter: hue-rotate(0deg);
        border-radius: 15px 15px 5px 5px;
        // box-shadow: 0 14px 28px rgba(4, 188, 213, 0), 0 10px 10px rgba(9, 188, 215, 0.4);
    }
}
</style>