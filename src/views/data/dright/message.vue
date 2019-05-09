<template>
  <div class="messege-box">
    <div class="messege-content">
      <ul :style="{ 'margin-top': marginTop + '%' }">
        <li v-for="(item, index) in getData" :key="index">
          <a>
            <icon :type="'tongzhi1'" :size="'1.5rem'" :color="'#F0FF00'"></icon>
            {{ index }}、{{ item.created_at.substring(0, 10) }} &nbsp;&nbsp;{{
              item.actor.login
            }}&nbsp;给了你一个{{ item.payload.action }}&nbsp;操作
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array
  },
  data() {
    return {
      getData: {},
      activeIndex: 0
    };
  },
  computed: {
    marginTop() {
      return -this.activeIndex * 6;
    }
  },
  mounted() {
    setInterval(() => {
      if (this.getData.length - 7 > 0) {
        let vh = this.getData.length - 7;
        if (this.activeIndex < vh) {
          this.activeIndex += 1;
        } else {
          this.activeIndex = 0;
        }
      } else {
        this.activeIndex = 0;
      }
    }, 2000);
  },
  watch: {
    data(data) {
      if (data) {
        this.getData = data;
      }
    }
  }
};
</script>

<style lang="scss">
.messege-box {
  width: 100%;
  height: 100%;
  padding: 15px 15px 25px 15px;
  overflow: hidden;
  .messege-content {
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding-top: 4px;
    ul {
      width: 100%;
      height: 100%;
      position: relative;
      transition: margin-top 0.5s;

      li {
        width: 100%;
        height: 1/6 * 100%;
        padding-bottom: 5px;
        overflow: hidden;
        a {
          width: 100%;
          height: 100%;
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #d3d3d3;
          text-decoration: none;
          background: rgba(216, 191, 216, 0.1);
          border-radius: 5px;
          padding-left: 30px;
          position: relative;
          font-size: 1.4rem;
          line-height: 2rem;
          &:before {
            position: absolute;
            box-sizing: border-box;
            margin-left: -22px;
            display: block;
            height: 100%;
            content: "◆";
            font-size: 1.5rem;
            color: #eb8a00;
          }
          i {
            padding-right: 8px;
          }
        }
      }
    }
  }
}
</style>
