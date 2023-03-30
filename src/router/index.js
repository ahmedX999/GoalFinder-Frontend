import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(), // import.meta.env.BASE_URL
  routes: [
    {
        path: "/",
        name: "dashboard",
        component: () => import("@/src/superAdmin-views/Dashboard.vue"),
    },
    {
      path: "/fields",
      name: "fields",
      component: () => import("@/src/superAdmin-views/Fields.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: { layout: "no-sidebar" },
    component: () =>
        import ("@/src/superAdmin-views/login.vue"),
},
{
  path: "/addFields",
  name: "addFields",
  component: () => import("@/src/superAdmin-views/AddFields.vue"),
},
],
});
export default router;