<template>
  <div class="layout_container">
    <div class="article_wrapper">
      <ArticleItem
        v-for="(article, index) in articleList"
        :key="index"
        v-article-item-animate="{ duration: 1, index: index }"
        :article="article"
      ></ArticleItem>
    </div>
    <aside></aside>
  </div>
</template>
<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import ArticleItem from '@/components/ArticleItem.vue';
  import { getArticle } from '@/api/article';
  import type { IArticle } from '@/api/article/type';
  const articleList = ref<IArticle[]>([]);
  onMounted(() => {
    getArticle().then((res) => {
      if (res.status == 200) {
        articleList.value = res.data;
        console.log(res.data);
      }
    });
  });
</script>
<style lang="scss" scoped>
  .article_wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    row-gap: 20px;
  }
  aside {
    z-index: 1;
    background-color: pink;
  }
</style>
