<template>
  <div class="navbar px-16 py-10 sticky top-0 box-border w-full z-10">
    <div class="flex-1">
      <div class="avatar">
        <div class="w-16 rounded-full ring">
          <img src="https://cdn.seovx.com/d/?mom=302" />
        </div>
      </div>
    </div>
    <!-- nav -->
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1 text-white gap-x-4">
        <li class="hover:text-secondary cursor-pointer">
          <NuxtLink to="/">首页</NuxtLink>
        </li>
        <li class="hover:text-secondary cursor-pointer">
          <NuxtLink to="/opus">作品</NuxtLink>
        </li>
        <li class="hover:text-secondary cursor-pointer">
          <NuxtLink to="/blog">博客</NuxtLink>
        </li>
        <li class="hover:text-secondary cursor-pointer">
          <NuxtLink to="/about">关于我</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
</style>
