import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueParticles from "vue-particles";
import VCharts from "v-charts";
import Vcomp from "./components/index";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/iconfont/iconfont.css";
import "./assets/css/global.scss";
import i18n from "./lang";
import VueI18n from "vue-i18n";

Vue.use(VueParticles);
Vue.use(VCharts);
Vue.use(Vcomp);
Vue.use(VueI18n, {
  i18n: (key, value) => i18n.t(key, value)
});

Vue.prototype.$axios = Axios;
Vue.config.productionTip = "/api";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
