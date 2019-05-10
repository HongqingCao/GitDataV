<template>
  <div class="loading">
    <icon :type="'socialgithuboutline'" :size="'4rem'" :color="'#888'"> </icon>
    {{ $t("nodata.loading") }}
    <particles />
  </div>
</template>

<script>
export default {
  name: "loading"
};
</script>

<style lang="scss">
.loading {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: #888;
  background: rgba(255, 255, 255, 1);
  z-index: 9999;
}
</style>
