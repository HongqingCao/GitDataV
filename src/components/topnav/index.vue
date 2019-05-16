<template>
  <div class="navbar">
    <ul>
      <li @click="fullBox">
        <icon :type="'quanping'" :size="'2.2rem'" :color="'#fff'"> </icon>
      </li>
      <li @click="changeLen">
        <icon :type="'yuyanqiehuan'" :size="'2.2rem'" :color="'#fff'"> </icon>
      </li>
      <li>
        <icon :type="'ziyuan'" :size="'2.2rem'" :color="'#fff'"> </icon>
      </li>
      <li @click="goHome">
        <icon :type="'zuojiantou1'" :size="'2.2rem'" :color="'#fff'"> </icon>
      </li>
    </ul>
  </div>
</template>

<script>
import screenfull from "screenfull";
export default {
  name: "topnav",
  computed: {
    lang: {
      get() {
        return this.$store.state.language;
      }
    }
  },
  methods: {
    fullBox() {
      if (!screenfull.enabled) {
        return false;
      }
      screenfull.toggle();
    },
    changeLen() {
      if (this.lang === "en") {
        this.$i18n.locale = "zh";
        this.$store.dispatch("setLanguage", "zh");
      } else {
        this.$i18n.locale = "en";
        this.$store.dispatch("setLanguage", "en");
      }
    },
    goHome() {
      this.$router.push({path:"/"});
    }
  }
};
</script>

<style lang="scss">
.navbar {
  top: -80px;
  width: 202px;
  height: 50px;
  margin-bottom: 0;
  background: rgba(216, 191, 216, 0.2);
  border-radius: 0;
  border: none;
  margin-left: -150px;
  transition: margin-left 0.9s;
  ul {
    width: 100%;
    height: 100%;
    li {
      float: left;
      width: 50px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px;
      &:focus {
        background: #3498da;
      }
      &:hover {
        background: #3498da;
      }
    }
  }
  &:hover {
    margin-left: 0px;
  }
}
</style>
