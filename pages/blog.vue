<template>
    <div class="p-16 grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 overflow-x-hidden ">
        <template v-for="(item, index) in data.data" :key="index">
            <div class="card card-side bg-base-100 shadow-xl m-10">
                <figure><img class="object-cover" :src="item.info.imgurl" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{{ item.info.title }}</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Watch</button>
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

function info(url) {
    console.log('url: ', url);
    useFetch(url).then(res => {
        console.log('res: ', res);
    })
}


console.log('data: ', data.value.data);

</script>

<style lang="scss" scoped>
.text-box {
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 8;
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