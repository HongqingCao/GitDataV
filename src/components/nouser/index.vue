<template>
  <div>
    <div class="modal fade" :class="{ in: isShow }">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close">
              <span @click="closebtn">&times;</span>
            </button>
            <h4 class="modal-title">{{ $t("nouser.title") }}</h4>
          </div>
          <div class="modal-body">
            <icon :type="'socialgithuboutline'" :size="'4rem'" :color="'#888'">
            </icon
            >{{ $t("nouser.pOne") }}<br />{{ $t("nouser.pTwo") }}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" @click="closebtn">
              {{ $t("nouser.closebtn") }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop" :class="{ in: isShow }">
      <particles />
    </div>
  </div>
</template>

<script>
export default {
  name: "nouser",
  props: {
    isShow: null
  },
  data() {
    return {
      sayhidden: false
    };
  },
  methods: {
    closebtn() {
      this.$router.push({
        name: "index"
      });
    }
  }
};
</script>

<style lang="scss">
.modal {
  z-index: 9999;
  display: block;
}
.modal-backdrop {
  filter: blur(2px);
  background-color: #ffffff;
  z-index: 9997;
  &.in {
    opacity: 0.9;
  }
}
.modal-title {
  text-align: center;
}
.modal-body {
  width: 100%;
  height: 200px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: #888;
}
</style>
