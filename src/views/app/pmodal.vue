/* * @Introduce: GitDataV服务条款弹框 * @Author: HongqingCao * @Date: 2019-05-10
* @Last Modified by: HongqingCao * @Last Modified time: 2019-05-10 */
<template>
  <div class="mode-warp" v-if="isShow">
    <div class="mode-content">
      <div class="content-box">
        <button type="button" class="close">
          <span @click="closebtn">&times;</span>
        </button>
        <div class="title">{{ $t("app.pmodal.title") }}</div>
        <div class="content">
          <P>{{ $t("app.pmodal.thanksP") }}</P>
          <P
            >{{ $t("app.pmodal.aPone")
            }}<a href="https://developer.github.com/v3/" target="_blank">{{
              $t("app.pmodal.aPtwo")
            }}</a></P
          >
          <p>{{ $t("app.pmodal.bP") }}</p>
          <p>
            {{ $t("app.pmodal.cPone")
            }}<a href="https://github.com/HongqingCao" target="_blank"
              >codercao</a
            >
            {{ $t("app.pmodal.cPtwo") }}
          </p>
          <p>{{ $t("app.pmodal.dP") }}</p>
          <p>
            {{ $t("app.pmodal.ePone")
            }}<a
              href="https://help.github.com/articles/github-terms-of-service/"
              target="_blank"
              >{{ $t("app.pmodal.ePtwo") }}</a
            >
          </p>
        </div>
        <div class="footer">
          <button class="btn btn-default" @click="closebtn">
            {{ $t("app.pmodal.closebtn") }}
          </button>
        </div>
      </div>
    </div>
    <div class="bg"></div>
  </div>
</template>

<script>
export default {
  name: "pmodal",
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    closebtn() {
      this.isShow = false;
    }
  }
};
</script>

<style lang="scss">
.mode-warp {
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  .bg {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.5;
    z-index: 100;
    filter: blur(2px);
    background-color: #000;
  }
  .mode-content {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 1;
    z-index: 999999;
    .content-box {
      width: 600px;
      overflow: hidden;
      margin: 30px auto;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 6px;
      outline: 0;
      box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
      background-color: #fff;
      .close {
        padding: 10px;
      }
      .title {
        padding: 15px;
        text-align: center;
        border-bottom: 1px solid #e5e5e5;
      }
      .content {
        padding: 15px;
        font-size: 2rem;
      }
      .footer {
        padding: 15px;
        text-align: right;
        border-top: 1px solid #e5e5e5;
      }
    }
  }
}
</style>
