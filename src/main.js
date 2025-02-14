import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { Quasar } from "quasar";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";
import { createPinia } from "pinia";
import FlagIcon from 'vue-flag-icon';
const app = createApp(App);
const pinia = createPinia();

app.use(FlagIcon);
app.use(pinia);
app.use(router);
app.mount("#app");
app.use(Quasar, {
  plugins: {},
});
