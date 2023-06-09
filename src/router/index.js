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
    path: "/reservation",
    name: "reservation",
    component: () =>
        import ("@/src/superAdmin-views/Reservations.vue"),
  },
  {
    path: "/users",
    name: "users",
    component: () =>
        import ("@/src/superAdmin-views/Users.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: { layout: "no-sidebar" },
    component: () =>
        import ("@/src/superAdmin-views/login.vue"),
},
{
  path: "/client",
  name: "client",
  meta: { layout: "test" },
  component: () =>
      import ("@/src/superAdmin-views/client.vue"),
},
{
  path: "/Registration",
  name: "Registration",
  meta: { layout: "no-sidebar" },
  component: () =>
      import ("@/src/superAdmin-views/Registration.vue"),
},



{
  path: "/addFields",
  name: "addFields",
  component: () => import("@/src/superAdmin-views/AddFields.vue"),
},
{
  path: "/mycomplex",
  name: "mycomplex",
  component: () => import("@/src/superAdmin-views/MyComplex.vue"),
}


],
});
export default router;