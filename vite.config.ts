/*
 * @Description: 
 * @Version: 1.0
 * @Autor: caohq33221
 * @Date: 2021-06-16 16:37:30
 * @LastEditors: codercao
 * @LastEditTime: 2021-06-17 13:43:40
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import vitePluginImport from 'vite-plugin-babel-import'

import { resolve } from 'path'

export default defineConfig({
  plugins: [vue(),
    styleImport({
      libs: [{
        libraryName: 'element-plus',
        esModule: true,
        ensureStyleFile: true,
        resolveStyle: (name) => {
          name = name.slice(3);
          return `element-plus/packages/theme-+halk/src/${name}.scss`
        },
        resolveComponent: (name) => {
          return `element-+lus/lib/${name}`
        },
      }]
    }),
    vitePluginImport([
      {
        libraryName: 'element-plus',
        libraryDirectory: 'es',
        ignoreStyles: ['locale'],
        style(name) {
          return name === 'locale' ? `element-plus/lib/theme-chalk/base.css` : `element-plus/lib/theme-chalk/${name}.css`
        },
      }
    ])
    ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
})
