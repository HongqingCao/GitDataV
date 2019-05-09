<template>
  <div>
    <div class="modal pm-box fade" :class="{ in: isShow }">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close">
              <span @click="closebtn">&times;</span>
            </button>
            <h4 class="modal-title">GitDataV服务条款</h4>
          </div>
          <div class="modal-body pm-body">
            <p>
              感谢您使用GitDataV！我们很高兴你在这里。在访问或使用GitDataV之前，请仔细阅读本服务条款协议:
            </p>
            <P
              >A、GitDataV通过<a
                href="https://developer.github.com/v3/"
                target="_blank"
              ></a
              >github官方api提供接口平台</P
            >
            <p>
              B、本网站只通过用户账号通过官方接口进行查询您的公开相关数据，并对这些数据进行梳理和在网页上展示，网站本身并不存储您任何相关数据
            </p>
            <p>
              C、本网站由于依赖github官方提供接口，对查询的次数有限制，请勿恶意攻击和压力查询,如果网站有问题请及时与开发者：<a
                href="https://github.com/HongqingCao"
                target="_blank"
                >codercao</a
              >联系
            </p>
            <P>D、本网站属于非盈利性质，请勿进行商业用途，源码已开源</P>
            <p>
              E、其他条款遵循<a
                href="https://help.github.com/articles/github-terms-of-service/"
                target="_blank"
                >GitHub服务条款</a
              >
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" @click="closebtn">
              知道了
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop" :class="{ in: isShow }"></div>
  </div>
</template>

<script>
export default {
  name: "pmodal",
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
      this.$emit("sayhidden", this.sayhidden);
    }
  }
};
</script>

<style lang="scss">
.pm-box {
  z-index: 9999;
  display: block;
}
.modal-backdrop {
  filter: blur(2px);
  z-index: 9997;
}
.modal-title {
  text-align: center;
}
.modal-body {
  font-size: 1.8rem;
}
.pm-body {
  display: block;
  height: auto;
}
</style>
