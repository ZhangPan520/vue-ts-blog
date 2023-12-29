import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// 配置element-plush 自动按需引入组件和样式
import AutoImport from 'unplugin-auto-import/vite';
// Components 配置局部组件
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import ElementPlus from 'unplugin-element-plus/vite';

import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    ElementPlus({
      // options
    }),
  ],
  define: {
    process: {
      env: {
        BASE_URL: '/',
        axios: {
          //axiox 默认配置
          baseURL: 'http://httpbin.org/',
          timeout: 5000,
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~components': path.resolve(__dirname, './src/components'),
    },
  },
  server: {
    port: 8080,
  },
});
