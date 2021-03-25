import { createWebHistory, createRouter } from "vue-router";
import Cars from "./views/Cars.vue";

const routes = [
  {
    path: "/cars",
    name: "cars",
    component: Cars,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
