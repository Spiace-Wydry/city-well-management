import { createRouter, createWebHistory } from "vue-router";
import TanksPage from "@/views/TanksPage.vue";
import HomePage from "@/views/HomePage.vue";


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
  ],
});

export default router;
