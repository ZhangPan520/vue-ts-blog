<template>
  <div class="iconfont icon-tag">这是首页</div>
</template>
<script lang="ts" setup>
  import { onMounted } from 'vue';
  import { getArticle } from '@/api/article';
  onMounted(() => {
    getArticle().then((res) => {
      console.log(res.data);
    });
  });
</script>
