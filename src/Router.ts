import { createRouter } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import LoginPage from "./pages/LoginPage.vue";
import { createWebHistory } from "vue-router";

const routes = [
  { path: "/login", component: LoginPage },
  { path: "/", component: HomePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
