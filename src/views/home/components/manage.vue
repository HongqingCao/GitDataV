<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: caohq33221
 * @Date: 2021-06-18 10:44:02
 * @LastEditors: codercao
 * @LastEditTime: 2021-06-18 17:38:31
-->
<template>
  <div class="manage-warpper">
    <div class="item title" v-if="manageTitle">
      <span>{{ manageTitle }}</span>
      <i class="el-icon el-icon-plus" @click="addGroup"></i>
    </div>
    <div
      class="item"
      :class="[activeIndex == index ? 'active' : '']"
      v-for="(item, index) in manageData"
      :key="item.id"
      @click="changeManage(item, index)"
    >
      <span class="name">{{ item.title }}</span>
      <i>{{ item.num }}</i>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
  props: {
    manageTitle: {
      type: String,
      default: '',
    },
    manageData: {
      type: Array,
      default: [],
    },
  },
  setup(props, ctx) {
    const state = reactive({
      activeIndex: 0,
    })
    const changeManage = (item: any, index: number) => {
      state.activeIndex = index
    }
    const addGroup = () => ctx.emit('addGroup')
    return {
      ...toRefs(state),
      changeManage,
      addGroup,
    }
  },
})
</script>
<style lang="scss" scoped>
.manage-warpper {
  min-width: 240px;
  max-width: 240px;
  color: #fff;
  top: 70px;
  font-size: 14px;
  overflow-y: auto;
  height: calc(100vh - 300px);
  .item {
    display: flex;
    padding: 0 24px;
    height: 36px;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    &:hover {
      .name {
        color: #2681ff;
      }
    }

    &.title {
      border-bottom: 1px solid #27343e;
      cursor: default;
      .el-icon {
        cursor: pointer;
      }
    }
    &.active {
      background-image: url(https://img.alicdn.com/tfs/TB1rCy0Xrr1gK0jSZFDXXb9yVXa-482-70.png);
      background-repeat: round;
      &:hover {
        .name {
          color: #fff;
        }
      }
    }
  }
}
</style>