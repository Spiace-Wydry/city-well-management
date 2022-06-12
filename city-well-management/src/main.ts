import { createApp } from "vue";
import { createPinia } from "pinia";
import { Quasar, Notify } from "quasar";

import App from "./App.vue";
import router from "./router";
import iconSet from 'quasar/icon-set/fontawesome-v6'
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'
import "quasar/src/css/index.sass";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Quasar, {
  plugins: {
    Notify
  }, // import Quasar plugins and add here
  iconSet: iconSet
});

app.mount("#app");
