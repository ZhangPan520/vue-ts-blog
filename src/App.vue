<template>
  <router-view></router-view>
  <login></login>
</template>
<script lang="ts" setup>
  import { cmsRequest } from '@/api/index';
  cmsRequest.get({
    url: 'get',
  });
</script>
