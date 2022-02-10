import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import NotFound from "../views/NotFound.vue";
import Info from "../views/Info.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/profile",
    name: "ProfileMain",
    component: Profile,
  },

  {
    path: "/profile/:id",
    name: "Profile",
    component: Profile,
    children: [
      ///  profile/123/info
      {
        path:'info',
        name: 'Info',
        component: Info
      }
    ]
  },



  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },

  {
    // path: "*",
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
    meta: {
      requiresAuth: false
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
