<template>
  <div class="right-content">
    <div class="top-box">
      <databox :title="''" :dheight="440">
        <databox
          :title="$t('data.dright.index.followers')"
          :dheight="210"
          :boxb="false"
        >
          <follower :data="followers"></follower>
          <nodata
            :nodata="$t('data.dright.index.noFollowers')"
            v-if="noFollowers"
          ></nodata>
        </databox>
        <databox
          :title="$t('data.dright.index.following')"
          :dheight="210"
          :boxb="false"
        >
          <follower :data="following"></follower>
          <nodata
            :nodata="$t('data.dright.index.noFollowing')"
            v-if="noFollowing"
          ></nodata>
        </databox>
      </databox>
      <div class="messege">
        <databox
          :title="$t('data.dright.index.messege')"
          :dheight="260"
          :icon="'account'"
        >
          <message :data="messege"></message>
          <nodata
            :nodata="$t('data.dright.index.messege')"
            v-if="noMessege"
          ></nodata>
        </databox>
      </div>
    </div>
  </div>
</template>

<script>
import follower from "./follower";
import message from "./message";
export default {
  components: {
    follower,
    message
  },
  props: {
    username: String
  },
  data() {
    return {
      followers: [],
      noFollowers: false,
      following: [],
      noFollowing: false,
      messege: [],
      noMessege: false
    };
  },
  created() {
    // this.getData(this.username)
  },
  methods: {
    getData(username) {
      let comUrl = "/api/users/";
      let url1 = comUrl + username + "/followers";
      let url2 = comUrl + username + "/following";
      let url3 = comUrl + username + "/received_events";
      this.$axios
        .all([
          this.$axios.get(url1),
          this.$axios.get(url2),
          this.$axios.get(url3)
        ])
        .then(
          this.$axios.spread((res1, res2, res3) => {
            //粉丝情况
            let data1 = JSON.parse(JSON.stringify(res1.data));
            if (data1.length < 1) {
              this.noFollowers = true;
            } else {
              this.followers = data1.reverse();
            }
            //跟随情况
            let data2 = JSON.parse(JSON.stringify(res2));
            if (data2.data.length < 1) {
              this.noFollowing = true;
            } else {
              this.following = data2.data.reverse();
            }

            //最新消息
            let data3 = JSON.parse(JSON.stringify(res3));
            if (data3.data.length < 1) {
              this.noMessege = true;
            } else {
              this.messege = data3.data;
            }

            return;
          })
        )
        .catch(err => {
          console.log(err.message);
        });
    }
  },
  watch: {
    username(username) {
      if (username) {
        this.getData(username);
      }
    }
  }
};
</script>

<style lang="scss">
.right-content {
  width: 100%;
  height: 100%;
  .top-box {
    padding-bottom: 40px;
    .messege {
      padding-top: 20px;
    }
  }
}
</style>
