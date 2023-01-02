<template>
  <div class="navbar px-16">
    <div class="flex-1">
      <div class="avatar">
        <div class="w-16 rounded-full ring">
          <img src="https://placeimg.com/192/192/people" />
        </div>
      </div>
    </div>
    <!-- nav -->
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1 text-white">
        <li class="hover:text-red"><NuxtLink>首页</NuxtLink><span>/</span></li>
        <li class="hover:text-red"><NuxtLink>作品</NuxtLink><span>/</span></li>
        <li class="hover:text-red"><NuxtLink>博客</NuxtLink><span>/</span></li>
        <li class="hover:text-red"><NuxtLink>关于我</NuxtLink></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
// .navbar{}

</style>
