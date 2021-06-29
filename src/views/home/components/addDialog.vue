<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: caohq33221
 * @Date: 2021-06-19 12:45:05
 * @LastEditors: codercao
 * @LastEditTime: 2021-06-19 18:09:04
-->
<template>
  <el-dialog
    title="创建可视化"
    v-model="dialogVisible"
    width="400px"
    :before-close="handleClose"
  >
    <div class="content">
      <el-form ref="form" :model="formData">
        <el-form-item label="可视化名称:" prop="name">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="github:">
          <el-input v-model="formData.github"></el-input>
        </el-form-item>
        <el-form-item label="可视化分组:">
          <el-select v-model="formData.grounp">
            <el-option
              v-for="item in opList"
              :label="item.label"
              :value="item.value"
              :key="item.label"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
  name: 'add',
  setup() {
    const state = reactive({
      dialogVisible: false,
      formData: {
        name: 'vvv',
        github: '',
        grounp: '0',
      },
    })
    const opList = JSON.stringify([
      {
        label: '未分组',
        value: '0',
      },
    ])
    const handleClose = () => {
      state.dialogVisible = false
    }
    return {
      ...toRefs(state),
      opList,
      handleClose,
    }
  },
})
</script>

<style lang="scss" scoped>
.content {
  .el-form-item {
    display: flex;
  }
  ::deep(.el-form-item__label) {
    width: 100px;
  }
}
.el-form-item__label {
  min-width: 100px;
}
</style>