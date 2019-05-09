<template>
  <div
    class="data-box"
    :class="{ noborder: !boxb }"
    :style="{ height: dheight + 'px' }"
  >
    <!--左上边框-->
    <div class="line-box" v-if="boxb">
      <i class="t-l-line"></i>
      <i class="l-t-line"></i>
    </div>
    <!--右上边框-->
    <div class="line-box" v-if="boxb">
      <i class="t-r-line"></i>
      <i class="r-t-line"></i>
    </div>
    <!--左下边框-->
    <div class="line-box" v-if="boxb">
      <i class="l-b-line"></i>
      <i class="b-l-line"></i>
    </div>
    <!--右下边框-->
    <div class="line-box" v-if="boxb">
      <i class="r-b-line"></i>
      <i class="b-r-line"></i>
    </div>
    <!--<div class="main-title" v-if="topt">
           <icon :type="icon"></icon> {{title}}
        </div>-->
    <div class="in-title" v-if="title.length > 0">{{ title }}</div>
    <div class="chart">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "databox",
  props: {
    title: String,
    dheight: Number,
    icon: String,
    boxb: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss">
@import "./index";
</style>
