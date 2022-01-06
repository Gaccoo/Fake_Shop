import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/shop",
    name: "Shop",

    component: () => import(/* webpackChunkName: "shop" */ "../views/Shop.vue"),
  },
  {
    path: "/delivery",
    name: "Delivery",
    component: () =>
      import(/* webpackChunkName: "delivery" */ "../views/Delivery.vue"),
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: () =>
      import(/* webpackChunkName: "contacts" */ "../views/Contacts.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
