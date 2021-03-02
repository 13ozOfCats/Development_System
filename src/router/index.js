import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "Home" */ "../views/Home.vue")
  },
  {
    path: "/projects",
    name: "Projects",
    component: () =>
      import(/* webpackChunkName: "Projects" */ "../views/Projects.vue")
  },
  {
    path: "/projects/:slug",
    name: "Project",
    component: () =>
      import(/* webpackChunkName: "Project" */ "../views/Proj.vue")
  },
  {
    path: "/models",
    name: "Models",
    component: () =>
      import(/* webpackChunkName: "Models" */ "../views/Models.vue")
  },
  {
    path: "/settings",
    name: "Settings",
    component: () =>
      import(/* webpackChunkName: "Settings" */ "../views/Settings.vue")
  },
  {
    path: "/admin",
    name: "Admin",
    component: () =>
      import(/* webpackChunkName: "Admin" */ "../views/Admin.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
