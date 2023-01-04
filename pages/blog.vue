<template>
    <div class="p-16 grid grid-cols-6">
        <template v-for="(item, index) in 10" :key="index">
            <div class="bg-shadow m-8 p-4  h-80">
                <div
                    class="text-xl bg-clip-text text-box    hover:scale-110 duration-75 transition  ease-in-out cursor-pointer text-white">
                    {{
    item
                    }}Lorem ipsum dolor sit, amet consectetur
                    adipisicing
                    elit.
                    Repellat dolorem
                    reprehenderit, accusantium
                    fugiat nam impedit. Laudantium vitae saepe labore pariatur optio dolor officia delectus sint
                    incidunt,
                    id
                    consequuntur aut quibusdam.</div>
            </div>

        </template>
    </div>
</template>

<script setup lang="ts">


</script>

<style lang="scss" scoped>
.text-box {
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
}

.bg-shadow:hover {

    position: relative;
    border-radius: 18px;
    border-radius: 18px;
    background: #97DECE;
    box-shadow: inset -5px 5px 10px #91d5c6, inset 5px -5px 10px #9de7d6;

    &::after {
        content: "";
        position: absolute;
        z-index: 10;
        left: 0;
        right: 0;
        bottom: 0;
        top: 80%;
        background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
        border-radius: 0px 0px 5px 5px;
        box-shadow: 0 14px 28px rgba(33, 150, 243, 0), 0 10px 10px rgba(9, 188, 215, 0.08);
        animation-name: charging;
        animation-duration: 6s;
        animation-timing-function: infinite;
        animation-iteration-count: 1;
        animation-fill-mode: forwards; // 动画最后一阵停止
        filter: hue-rotate(90deg);
    }
}

@keyframes charging {
    50% {
        box-shadow: 0 14px 28px rgba(0, 150, 136, 0.83), 0px 4px 10px rgba(9, 188, 215, 0.4);
    }

    95% {
        top: 5%;
        filter: hue-rotate(0deg);
        border-radius: 0 0 5px 5px;
        box-shadow: 0 14px 28px rgba(4, 188, 213, .2), 0 10px 10px rgba(9, 188, 215, 0.08);
    }

    100% {
        top: 0%;
        filter: hue-rotate(0deg);
        border-radius: 15px 15px 5px 5px;
        box-shadow: 0 14px 28px rgba(4, 188, 213, 0), 0 10px 10px rgba(9, 188, 215, 0.4);
    }
}
</style>