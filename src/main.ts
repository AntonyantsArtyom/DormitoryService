import { createApp } from "vue";
import { Notify, Quasar } from "quasar";

import "@quasar/extras/material-icons/material-icons.css";

import "quasar/src/css/index.sass";

import App from "./App.vue";
import Router from "./Router";
import { createPinia } from "pinia";

const myApp = createApp(App);

const pinia = createPinia();

myApp.use(pinia);

myApp.use(Router);

myApp.use(Quasar, {
  plugins: { Notify },
  config: {
    brand: {
      primary: "#48A64C",
    },
  },
});

myApp.mount("#app");
