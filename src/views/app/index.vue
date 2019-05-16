<template>
  <div class="app-page">
    <particles />
    <indexbg />
    <div
      class="dropdown"
      @mouseenter="showList = true"
      @mouseleave="showList = false"
    >
      <span>{{ leng }}</span>
      <ul v-if="showList">
        <li @click="changLen(1)">中文</li>
        <li @click="changLen(2)">English</li>
      </ul>
    </div>
    <div class="container-fluid">
      <div class="row text-container ">
        <div class="tm-content col-md-6 col-sm-8 col-xs-12 ml-auto section">
          <div class="content-box">
            <header class="mb-5"><h1>GitDataV</h1></header>
            <P class="mb-5">{{ $t("app.appIntroduce") }}</P>
            <div class="subscribe-form">
              <div class="row form-section">
                <div class="col-sm-8 col-xs-10">
                  <input
                    type="text"
                    class="form-control"
                    v-model="username"
                    @focus="onfocus"
                    :placeholder="$t('app.inputPlaceholder')"
                  />
                  <div class="help-box">
                    <strong v-if="namelg">{{ $t("app.namelg") }}</strong>
                    <strong v-if="nousename"
                      >{{ $t("app.account") }} ：<a>{{ errname }}</a
                      >{{ $t("app.notFound") }}</strong
                    >
                    <p v-else>
                      {{ $t("app.clickP")
                      }}<button @click="showpm">
                        {{ $t("app.clickB") }}
                      </button>
                    </p>
                  </div>
                </div>
                <div class="col-sm-4 col-xs-5">
                  <button class="tm-btn-subscribe" @click="generate(username)">
                    {{ $t("app.subscribe") }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <pmodal ref="pmodalChild" />
      <foot />
    </div>
  </div>
</template>

<script>
import pmodal from "./pmodal";
import Cookies from "js-cookie";
export default {
  components: {
    pmodal
  },
  data() {
    return {
      list: {},
      username: "",
      leng: "中文",
      errname: "",
      inputval: false,
      nousename: false,
      namelg: false,
      checked: false,
      showList: false
    };
  },
  computed: {
    getlang: {
      get() {
        return this.$store.state.language;
      }
    }
  },
  watch: {
    getlang(val) {
      if (val === "en") {
        this.leng = "English";
      } else {
        this.leng = "中文";
      }
    }
  },
  created() {
    const chooseLanguage = Cookies.get("language");
    if (chooseLanguage === "en") {
      this.leng = "English";
    } else {
      this.leng = "中文";
    }
  },
  methods: {
    checkebox() {
      this.checked = !this.checked;
    },
    changLen(val) {
      if (val === 1) {
        this.leng = "中文";
        this.$i18n.locale = "zh";
        this.$store.dispatch("setLanguage", "zh");
      } else {
        this.leng = "English";
        this.$i18n.locale = "en";
        this.$store.dispatch("setLanguage", "en");
      }
      this.showList = false;
    },
    generate(username) {
      let name = username;
      if (name.length <= 0) {
        this.namelg = true;
        return;
      } else {
        this.$axios
          .get("/api/users/" + name)
          .then(response => {
            let res = JSON.parse(JSON.stringify(response));
            if (res.status === 200) {
              this.$router.push({
                name: "data",
                params: { user: name }
              });
            }
            return;
          })
          .catch(err => {
            this.nousename = true;
            this.errname = name;
            console.log(err.message);
          });
      }
    },
    onfocus() {
      this.namelg = false;
      this.nousename = false;
    },
    showpm() {
      this.$refs.pmodalChild.isShow = true;
    }
  }
};
</script>

<style lang="scss">
.app-page {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .dropdown {
    position: fixed;
    z-index: 9999888;
    top: 20px;
    right: 20px;
    color: #fff;
    span {
      padding-right: 15px;
      font-size: 2rem;
      &:after {
        padding-left: 10px;
        content: "▽";
      }
    }
    ul {
      padding: 5px 0;
      margin: 5px 0;
      border: 1px solid #ebeef5;
      border-radius: 4px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      li {
        font-size: 1.5rem;
        text-align: center;
        &:hover {
          background: rgba(175, 238, 238, 0.2);
          cursor: pointer;
        }
      }
    }
  }
  .text-container {
    height: 90vh;
    display: flex;
    align-items: center;
    .tm-content {
      z-index: 1001;
      &.ml-auto {
        margin-left: auto !important;
        padding-bottom: 20px;
      }
      .content-box {
        padding: 15px;
        .subscribe-form {
          .form-section {
            color: #ffffff;
            background-color: transparent;
          }
        }

        .mb-5 {
          margin-bottom: 3rem !important;
          color: #ffffff;
          font-size: large;
          h1 {
            color: #ffffff;
            font-size: 4rem;
          }
        }
        .subscribe-form {
          .form-section {
            color: #ffffff;
            background-color: transparent;
            .form-control {
              height: 50px;
              color: #ffffff;
              border-radius: 0.5rem;
              background-color: transparent;
              border: 1px solid #ffffff;
              padding-top: 10px;
              padding-bottom: 10px;
              font-size: 1.5rem;
              font-weight: 300;
              padding: 0.75rem 1.2rem;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              &::-webkit-input-placeholder {
                color: #ffffff;
                font-size: 1.5rem;
              }
            }
            .tm-btn-subscribe {
              height: 50px;
              background-color: #006699;
              border-radius: 0.5rem;
              border-color: white;
              padding: 0.75rem 1.6rem;
              font-weight: 300;
              font-size: 1.5rem;
              cursor: pointer;
              @media screen and (max-width: 768px) {
                margin-top: 20px;
              }
            }
            .help-box {
              padding: 10px 0 20px 10px;
              color: #843534;
              font-size: 1.5rem;
              strong {
                position: absolute;
                background: #fff;
                border-radius: 5px;
                padding: 0 8px 0 8px;
                font-size: 1.5rem;
                line-height: 3rem;

                &:before {
                  z-index: 999;
                  content: "";
                  display: block;
                  position: relative;
                  width: 0;
                  height: 0;
                  border-left: 10px solid transparent;
                  border-right: 10px solid transparent;
                  border-bottom: 10px solid #fff;
                  margin: -9px 0 0 20px;
                }
                a {
                  color: #bd2c00;
                }
              }
              p {
                color: #fff;
                button {
                  background: none;
                  color: #e6e6fa;
                  cursor: pointer;
                  border-bottom: 1px solid #e6e6fa;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
