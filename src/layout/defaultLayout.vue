<template>
  <Header></Header>
  <slot></slot>
  <Footer></Footer>
</template>
<script lang="ts" setup>
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
</script>
