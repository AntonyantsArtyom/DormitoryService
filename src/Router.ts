import { createRouter } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import LoginPage from "./pages/LoginPage.vue";
import { createWebHistory } from "vue-router";
import AppointmentsPage from "./pages/AppointmentsPage.vue";
import ShedulePage from "./pages/ShedulePage.vue";

const routes = [
  { path: "/login", component: LoginPage },
  { path: "/appointment", component: AppointmentsPage },
  { path: "/shedule", component: ShedulePage },
  { path: "/", component: HomePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
