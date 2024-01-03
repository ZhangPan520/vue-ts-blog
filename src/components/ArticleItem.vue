<template>
  <div class="article_item">
    <div class="title">{{ test }}</div>
    <div class="content">
      {{ article.content }}
    </div>
    <footer class="flex-x-between flex-y-center">
      <div class="aciton_list flex-y-center gap8">
        <span class="time flex-y-center gap8">
          <span class="iconfont icon-riqi"></span>
          <span>{{ article.createDate }}</span>
        </span>
        <span class="view_count flex-y-center gap8">
          <span class="iconfont icon-view"></span>
          <span>{{ article.view_count }}</span>
        </span>
      </div>
      <span class="tags flex-y-center gap8">
        <span class="iconfont icon-tag"></span>
        <span>{{ article.tags }}</span>
      </span>
    </footer>
  </div>
</template>
<script lang="ts" setup>
  import { defineProps, ref } from 'vue';
  import type { IArticle } from '@/api/article/type';
  const props = defineProps<{ article: IArticle }>();
  const article = ref(props.article);
</script>
<style lang="scss" scoped>
  .gap8 {
    gap: 8px;
  }
  .article_item {
    cursor: pointer;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0px 0px 10px rgba(7, 17, 27, 0.1);
    transition: box-shadow 0.3s;
    &:hover {
      box-shadow: 0px 0px 10px rgba(7, 17, 27, 0.2);
    }
    .title {
      font-weight: 600;
      font-size: 20px;
      color: #e9546b;
      overflow: hidden;
      padding-bottom: 20px;
    }
    .content {
      font-size: 16px;
      line-height: 2;
      letter-spacing: 4px;
      color: #000;
      padding-bottom: 20px;
    }
    footer {
      color: rgb(138, 145, 159);
      font-size: 16px;
    }
  }
</style>
