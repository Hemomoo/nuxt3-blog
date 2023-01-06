<template>
  <div class="content bg-no-repeat bg-cover flex items-end justify-between">
    <div class="relative z-10 p-16 w-full">
      <div class="flex justify-between w-full items-end">
        <div class="text-white">
          <div class="text-6xl">
            <p>Hello</p>
            <p>I Am Hemoo</p>
          </div>
          <div class="text-xl typing ">I am a slow walker,but I never walk backwards.</div>
        </div>

        <!-- 倒计时 -->
        <div class="text-right">
          <span class="countdown font-mono text-6xl text-white">
            <span :style="{ '--value': hh }" />:
            <span :style="{ '--value': mm }" />:
            <span :style="{ '--value': ss }" />
          </span>
        </div>
      </div>
    </div>
    <svg width="100%" id="svg" viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg"
      class="transition duration-300 ease-in-out delay-150">
      <path
        d="M 0,500 C 0,500 0,250 0,250 C 71.1,234.36153846153846 142.2,218.72307692307692 219,245 C 295.8,271.2769230769231 378.29999999999995,339.46923076923076 454,342 C 529.7,344.53076923076924 598.5999999999999,281.4 690,268 C 781.4000000000001,254.6 895.3,290.9307692307692 990,277 C 1084.7,263.0692307692308 1160.1999999999998,198.87692307692308 1232,186 C 1303.8000000000002,173.12307692307692 1371.9,211.56153846153848 1440,250 C 1440,250 1440,500 1440,500 Z"
        stroke="none" stroke-width="0" fill="#cbedd5" fill-opacity="1"
        class="transition-all duration-300 ease-in-out delay-150 path-0"></path>
    </svg>
  </div>
</template>

<script  setup  lang="ts">
import { useNow } from '@vueuse/core'
const now = useNow()


useHead({
    title: '首页',
    meta: [
        { name: 'description', content: 'My amazing site.' }
    ],
})

// const themeStore = useThemeStore()

const hh = ref<string>('00')
const mm = ref<string>('00')
const ss = ref<string>('00')

watch(now, (newValue, oldValue) => {
  if (newValue) {
    const date: Array<string> = newValue.toLocaleTimeString().split(':') as Array<string>
    hh.value = date[0]
    mm.value = date[1]
    ss.value = date[2]
  }
})

</script>

<style lang="scss" scoped>
.content {
  height: 100%;
  background: url();
  background: url(../assets/imgs/hemoo.png);
  background-repeat: no-repeat;
  background-position-x: 15vh;
  background-position-y: 5vh;
}

.title {
  background: #A6E3E9;
  background-clip: text;
  color: transparent
}
</style>
<style>
.path-0 {
  animation: pathAnim-0 4s;
  animation-timing-function: linear;
  animation-iteration-count:
    infinite;
}


#svg {
  position: fixed;
  bottom: 0;
}

.typing {
  color: white;
  height: 1.5em;
  border-right: 1px solid transparent;
  animation: typing 6s steps(42, end), blink-caret .75s step-end infinite;
  font-family: Consolas, Monaco;
  word-break: break-all;
  overflow: hidden;
}

/* 打印效果 */
@keyframes typing {
  from {
    width: 0;
  }

  to {
    width: 24em;
  }
}

/* 光标 */
@keyframes blink-caret {

  from,
  to {
    border-color: transparent;
  }

  50% {
    border-color: currentColor;
  }
}
</style>