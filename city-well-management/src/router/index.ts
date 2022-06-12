import { createRouter, createWebHistory } from "vue-router";
import TanksPage from "@/views/TanksPage.vue";
import HomePage from "@/views/HomePage.vue";
import AlertsPage from "@/views/AlertsPage.vue";
import ReportsPage from "@/views/ReportsPage.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/tanks",
      name: "tanks",
      component: TanksPage,
    },
    {
      path: "/alerts",
      name: "alerts",
      component: AlertsPage,
    },
    {
      path: "/reports",
      name: "reports",
      component: ReportsPage,
    },
  ],
});

export default router;
