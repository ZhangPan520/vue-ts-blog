const { defineConfig } = require('@vue/cli-service');
const path = require('path');

const AutoImport = require('unplugin-auto-import/webpack').default;
const Components = require('unplugin-vue-components/webpack').default;
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: () => {
    return {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
          '~components': path.resolve(__dirname, './src/components'),
        },
      },
      plugins: [
        require('unplugin-element-plus/webpack')({
          // options
        }),
        AutoImport({
          resolvers: [ElementPlusResolver()],
        }),
        Components({
          resolvers: [ElementPlusResolver()],
        }),
      ],
    };
  },
});
