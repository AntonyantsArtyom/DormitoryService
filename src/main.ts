import { createApp } from "vue";
import { Notify, Quasar } from "quasar";

import "@quasar/extras/material-icons/material-icons.css";

import "quasar/src/css/index.sass";

import App from "./App.vue";

const myApp = createApp(App);

myApp.use(Quasar, {
  plugins: { Notify },
});

myApp.mount("#app");
