<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: caohq33221
 * @Date: 2021-05-11 13:40:37
 * @LastEditors: codercao
 * @LastEditTime: 2021-05-20 15:41:11
-->
<template>
  <div class="header-warpper">
    <div class="top-warpper">
      <div class="top-left">GitDataV</div>
      <div class="top-right"></div>
    </div>
    <div class="menu-warpper">
      <canvas
        id="canvas"
        style="position: absolute; z-index: -1; left: 0px"
      ></canvas>
      <span
        class="nav-span"
        v-for="item in navObj"
        :key="item.key"
        @click="clickNav(item.key)"
        >{{ item.name }}</span
      >
    </div>
    <div class="shadow"></div>
  </div>
</template>
<script>
import canvasnav from '@/utils/canvasnav.js'
import { ref,onMounted } from 'vue'
export default {
  setup() {
    let navObj = ref([
      {
        key: 0,
        name: '大屏模板',
      },
      {
        key: 1,
        name: '我的大屏',
      },
      {
        key: 2,
        name: '組件管理',
      },
      {
        key: 3,
        name: '数据看板',
      },
    ])

    const clickNav = (key) => {
      canvasnav._toggle(key)
    }

    onMounted(() => {
      canvasnav.initCanvas()
    })

    return {
      navObj,
      clickNav,
    }
  },
}
</script>
<style lang="scss">
.header-warpper {
  width: 100%;
  height: 150px;
  background-image: url('https://img.alicdn.com/tfs/TB1ykWbO3HqK1RjSZJnXXbNLpXa-2880-600.png');
  background-size: cover;
  .top-warpper {
    display: flex;
    height: 100px;
    .top-left {
      display: flex;
      width: 200px;
      font-size: 1.6em;
      align-items: center;
      color: #fff;
    }
    .top-right {
      flex: 1;
    }
  }
  .menu-warpper {
    z-index: 10;
    display: flex;
    top: 100px;
    position: fixed;
    width: 100%;
    min-width: 1024px;
    .nav-span {
      color: #fff;
      width: auto;
      min-width: 140px;
      line-height: 40px;
      font-size: 14px;
      text-align: left;
      cursor: pointer;
      padding: 0 40px;
    }
  }
  .shadow {
    background: linear-gradient(180deg, transparent, #171b22);
    height: 50px;
    position: relative;
    width: 100%;
    z-index: 1;
  }
}
</style>