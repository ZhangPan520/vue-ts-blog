<template>
  <div class="iconfont icon-tag">
    <ArticleItem
      v-for="(item, index) in 'asdgasgd'"
      :key="index"
      v-article-item-animate="{ duration: 1, index: index }"
      >{{ item }}</ArticleItem
    >
  </div>
</template>
<script lang="ts" setup>
  import { onMounted } from 'vue';
  import ArticleItem from '@/components/ArticleItem.vue';
  import { getArticle } from '@/api/article';
  onMounted(() => {
    getArticle().then((res) => {
      console.log(res.data);
    });
  });
</script>
<style>
  .iconfont {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
