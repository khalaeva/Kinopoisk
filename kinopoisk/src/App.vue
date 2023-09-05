<template>
  <div class="container">
    <Header/>
    <router-view/>
  </div>
</template>

<script setup>
import Header from '@/components/Layouts/Header.vue'
</script>

<style lang="scss">
@import "@/assets/styles/global.scss";
</style>