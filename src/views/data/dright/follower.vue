<template>
  <div class="follower-box">
    <ul>
      <li v-for="(item, index) in getData" :key="index">
        <a>
          <div
            class="img"
            :style="{ background: 'url(' + item.avatar_url + ')' }"
          ></div>
          <div class="name">{{ item.login }}</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: Array
  },
  data() {
    return {
      getData: {}
    };
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
.follower-box {
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 10px;
  ul {
    width: 100%;
    height: 100%;
    overflow: hidden;
    li {
      height: 50%;
      width: 70px;
      padding: 5px;
      float: left;
      a {
        display: block;
        height: 100%;
        text-align: center;
        text-decoration: none;
        color: #19d4ae;
        .img {
          width: 45px;
          height: 45px;
          background: #0086b3;
          background-size: 100% 100% !important;
          border-radius: 50%;
          margin: 0 auto;
        }
        .name {
          height: calc(100% - 45px);
          width: 100%;
          font-size: 1rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      &:nth-child(odd) {
        a {
          color: #5ab1ef;
        }
      }
    }
  }
}
</style>
