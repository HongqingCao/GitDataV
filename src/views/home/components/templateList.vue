<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: caohq33221
 * @Date: 2021-05-11 17:24:59
 * @LastEditors: codercao
 * @LastEditTime: 2021-05-12 09:39:06
-->
<template>
  <div class="templateList-warpper">
    <div class="templateList creatTemplate">
      <div class="template-image">
        <el-button type="primary" icon="el-icon-plus" @click="creatProject"
          >创建项目</el-button
        >
      </div>
      <div class="template-info">空白画板</div>
    </div>
    <div class="templateList">
      <div class="template-image">
        <img
          src="data:image/jpg;base64,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"
          class="preview-image"
        />
        <div class="template-mask">
          <el-button type="primary">创建项目</el-button>
          <el-button plain class="preview-btn">预览</el-button>
        </div>
      </div>
      <div class="template-info">
        <div class="template-name">模板一</div>
        <div class="template-size">
          <p>比例 16:6</p>
          <p>2880x1080px</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    creatProject() {
      this.$emit('creatProject')
    },
  },
}
</script>
<style lang="scss">
.templateList-warpper {
  display: flex;
  .templateList {
    width: 258px;
    height: 184px;
    box-shadow: 0 0 10px -6px #000;
    border: 1px solid #3a4659;
    margin: 16px;
    transition: 0.2s;
    cursor: default;
    .template-image {
      width: 100%;
      height: 146px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.2s;
      position: relative;
      .preview-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: relative;
      }
      .template-mask {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        transition: 0.2s;
        pointer-events: none;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        opacity: 0;
        font-weight: 400;
        .preview-btn {
          margin-top: 10px;
          margin-left: 0px;
          width: 98px;
        }
      }
    }
    .template-info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      height: 36px;
      background: #1d262e;
      transition: 0.2s;
      font-size: 14px;
      color: #fff;
      .template-name {
        font-size: 12px;
      }
      .template-size {
        color: #999;
        text-align: right;
        font-size: 12px;
      }
    }

    &:hover {
      outline: 1px solid #2861ff;
      .template-image {
        .template-mask {
          opacity: 1;
        }
      }
    }
  }
  .creatTemplate {
    outline: 1px solid #2861ff;
    .template-image {
      box-shadow: inset 0 0 46px 0 rgba(136, 215, 255, 0.29);
    }
    .template-info {
      border-top: 1px solid #2861ff;
      justify-content: center;
    }
  }
}
</style>