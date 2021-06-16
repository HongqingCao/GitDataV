/*
 * @Description: 
 * @Version: 1.0
 * @Autor: caohq33221
 * @Date: 2021-06-16 16:37:30
 * @LastEditors: codercao
 * @LastEditTime: 2021-06-16 17:06:05
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
})
