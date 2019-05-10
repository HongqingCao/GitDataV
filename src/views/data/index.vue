<template>
  <div class="data-page">
    <dheader></dheader>
    <topnav></topnav>
    <div class="data-content">
      <div class="data-time">
        {{ $t("data.index") }}
      </div>
      <div class="data-main">
        <div class="main-left">
          <dleft :personalData="personalData" :username="username"></dleft>
        </div>
        <div class="main-center">
          <dcontent :numberData="numberData" :username="username"></dcontent>
        </div>
        <div class="main-right">
          <dright :username="username"></dright>
        </div>
      </div>
    </div>
    <nouser :isShow="isShow" v-if="isShow"></nouser>
    <loading v-if="pageShow"></loading>
  </div>
</template>

<script>
import dheader from "./dheader";
import dleft from "./dleft";
import dcontent from "./dcontent";
import dright from "./dright";
export default {
  components: {
    dheader,
    dleft,
    dcontent,
    dright
  },
  data() {
    return {
      isShow: false,
      pageShow: true,
      personalData: {},
      numberData: {},
      username: ""
    };
  },
  created() {
    let username = this.$route.params.user;
    this.getData(username);
  },
  methods: {
    getData(username) {
      this.$axios
        .get("/api/users/" + username)
        .then(response => {
          let res = JSON.parse(JSON.stringify(response));
          if (res.status === 200) {
            this.username = username;
            let data = res.data;
            //个人图片、加入github时间
            let sinceDate = data.created_at;
            let joinDate = sinceDate.substring(0, 10);
            let img = data.avatar_url;
            let objP = {
              username: username,
              joinDate: joinDate,
              img: img
            };
            this.personalData = objP;
            //仓库数、粉丝数、跟随数
            let pubRepos = data.public_repos;
            let followers = data.followers;
            let following = data.following;
            let objN = {
              pubRepos: pubRepos,
              followers: followers,
              following: following
            };
            this.numberData = objN;
            this.pageShow = false;
          }
          return;
        })
        .catch(err => {
          this.pageShow = false;
          this.isShow = true;
          console.log(err.message);
        });
    }
  }
};
</script>

<style lang="scss">
.data-page {
  background: url(../../assets/data/true.png) repeat-x;
  top: 0;
  right: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  min-width: 1220px;
  .data-content {
    padding-bottom: 20px;
    .data-time {
      width: 340px;
      height: 35px;
      background-color: #2c58a6;
      line-height: 35px;
      color: #fff;
      font-size: 12.8px;
      margin-bottom: 25px;
      margin-left: 20px;
      text-align: center;
    }
    .data-main {
      width: calc(100% - 40px);
      margin-bottom: 40px;
      margin-left: 20px;
      height: 720px;

      .main-left {
        width: 24%;
        float: left;
      }
      .main-center {
        float: left;
        width: 52%;
        padding: 0 20px 0 20px;
      }
      .main-right {
        float: left;
        width: 24%;
        height: 615px;
      }
    }
  }
}
</style>
