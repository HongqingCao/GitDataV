<template>
  <div class="header">
    <div class="bg-header">
      <div class="t-title">
        {{ $t("data.dheader") }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dheader"
};
</script>

<style lang="scss">
.header {
  width: 100%;
  height: 80px;
  padding: 0 20px;
  .bg-header {
    width: 100%;
    height: 80px;
    background: url(../../../assets/data/title.png) no-repeat;
    background-size: 100% 100%;
    .t-title {
      width: 100%;
      height: 100%;
      text-align: center;
      font-size: 2em;
      line-height: 80px;
      color: #fff;
    }
  }
}
</style>
