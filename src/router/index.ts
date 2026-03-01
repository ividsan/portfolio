import About from "@/pages/about.vue"
import Contact from "@/pages/contacto.vue"
import Home from "@/pages/home/Home.vue"
import ProjectDetail from "@/pages/projects/ProjectDetail.vue"
import Projects from "@/pages/projects/projects.vue"
import { createRouter, createWebHashHistory } from "vue-router"

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects,
    },
    {
      path: "/projects/:slug",
      name: "project-detail",
      component: ProjectDetail,
      props: true,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
})
