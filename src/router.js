import { createWebHistory, createRouter } from "vue-router";
import Car from "./views/Car.vue";
import Cars from "./views/Cars.vue";

const routes = [
  {
    path: "/cars",
    name: "cars",
    component: Cars,
  },
  {
    path: "/car",
    name: "car",
    component: Car,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
