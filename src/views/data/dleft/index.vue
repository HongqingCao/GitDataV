<template>
  <div class="left-content">
    <div class="left-box">
      <databox :title="''" :dheight="720">
        <personal :personalData="personalData" :username="username"></personal>
        <databox
          :title="'仓库Stars详情'"
          :dheight="280"
          :icon="'account'"
          :boxb="false"
        >
          <ve-pie :data="starData" :extend="extend" :height="'250px'"></ve-pie>
          <nodata :nodata="'一个Stars'" v-if="noStarData"></nodata>
        </databox>
        <databox
          :title="'仓库语言分类'"
          :dheight="280"
          :icon="'account'"
          :boxb="false"
        >
          <ve-ring
            :data="languageData"
            :extend="extend"
            :height="'230px'"
          ></ve-ring>
          <nodata :nodata="'一种语言'" v-if="nolanguageData"></nodata>
        </databox>
      </databox>
    </div>
  </div>
</template>

<script>
import personal from "./personal";
export default {
  components: {
    personal
  },
  props: {
    personalData: Object,
    username: String
  },
  data() {
    this.extend = {
      legend: {
        textStyle: { color: "#fff" }
      },
      grid: {
        textStyle: {
          color: "#fff"
        }
      },
      series: {
        radius: ["0", "40%"],
        center: ["50%", "50%"]
      }
    };
    return {
      personalD: {},
      starData: {
        columns: ["reposName", "getStars"],
        rows: []
      },
      noStarData: false,
      languageData: {
        columns: ["lang", "number"],
        rows: []
      },
      nolanguageData: false
    };
  },
  created() {},
  methods: {
    getData(username) {
      this.$axios
        .get("/api/users/" + username + "/repos")
        .then(response => {
          let data = JSON.parse(JSON.stringify(response.data));
          if (data.length < 1) {
            this.noStarData = true;
          } else {
            let rowdata = [];
            let languages = {};
            for (var i = 0; i < data.length; i++) {
              // 仓库和仓库star
              let reposName = data[i].name;
              let getStars = data[i].stargazers_count;
              let obj = {
                reposName: reposName,
                getStars: getStars
              };
              rowdata.push(obj);

              //梳理语言，计算语言类型和各个语言的数量
              let langData = data[i].language;
              if (langData) {
                if (langData in languages) {
                  languages[langData]++;
                } else {
                  languages[langData] = 1;
                }
              }
            }
            //把值附到starData.rows
            this.starData.rows = rowdata;
            //console.log(this.starData.rows)

            //重新组装语言封成对象
            let objL = JSON.parse(JSON.stringify(languages));
            let dataL = [];
            for (var key in objL) {
              dataL.push({ lang: key, number: objL[key] });
            }
            this.languageData.rows = dataL;
            //console.log(objL)
            //console.log(this.languageData.rows)
          }
          return;
        })
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
.left-content {
  width: 100%;
  height: 100%;
  .left-box {
    width: 100%;
    height: 720px;

    padding-bottom: 40px;
    .content-wapper {
      padding-top: 40px;
      height: 220px;
    }
  }
}
</style>
