<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: caohq33221
 * @Date: 2021-05-10 17:23:35
 * @LastEditors: codercao
 * @LastEditTime: 2021-06-19 12:56:06
-->
<template>
  <div class="home-warpper">
    <Header @changeNav="changeNav"></Header>
    <div class="content-warpper">
      <Manage
        class="left"
        :manageTitle="manageTitle"
        :manageData="manageData"
        @addGroup="addGroup"
      ></Manage>
      <TemplateList class="right" @creatProject="creatProject"></TemplateList>
      <AddDialog ref="addDialogRef"></AddDialog>
    </div>
  </div>
</template>
<script lang='ts'>
import { useRouter } from 'vue-router'

import Header from './components/header.vue'
import TemplateList from './components/templateList.vue'
import Manage from './components/manage.vue'
import AddDialog from './components/addDialog.vue'
import { reactive, toRefs } from '@vue/reactivity'
import { getCurrentInstance } from '@vue/runtime-core'
export default {
  components: {
    Header,
    TemplateList,
    Manage,
    AddDialog,
  },
  setup() {
    const router = useRouter()
    const { ctx } = getCurrentInstance()
    const state = reactive({
      NavKey: 0,
      manageTitle: '我的分组',
      manageData: [
        {
          id: '0',
          title: '全部分组',
          num: 1,
        },
      ],
    })
    const myManageData = [
      {
        id: '0',
        title: '全部分组',
        num: 1,
      },
    ]
    const templateManageData = [
      {
        id: '0',
        title: '全部模板',
        num: 8,
      },
      {
        id: '0',
        title: 'PC大屏模板',
        num: 1,
      },
      {
        id: '1',
        title: '移动端模板',
        num: 1,
      },
    ]
    const componentsManageData = [
      {
        id: '0',
        title: '全部组件',
        num: 8,
      },
      {
        id: '0',
        title: '基础组件',
        num: 1,
      },
    ]
    const changeNav = (data: any) => {
      switch (data.key) {
        case 0:
          state.manageTitle = '我的分组'
          state.manageData = myManageData
          break
        case 1:
          state.manageTitle = ''
          state.manageData = templateManageData
          break
        case 2:
          state.manageTitle = ''
          state.manageData = componentsManageData
          break
      }
    }
    const creatProject = (data: any) => {
      ctx.$refs.addDialogRef.dialogVisible = true
      // router.push({
      //   path: '/dashboard',
      //   query: {},
      // })
    }

    const addGroup = () => {
      ctx.$refs.addDialogRef.dialogVisible = true
    }
    return {
      creatProject,
      ...toRefs(state),
      changeNav,
      addGroup,
    }
  },
}
</script>
<style lang="scss" scoped>
.home-warpper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #171b22;
  .content-warpper {
    padding-top: 18px;
    display: flex;
    .right {
      flex: 1;
    }
  }
}
</style>
