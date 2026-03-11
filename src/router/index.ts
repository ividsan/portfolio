import About from "@/pages/about.vue"
import Contact from "@/pages/contacto.vue"
import Home from "@/pages/home/Home.vue"
import ProjectDetail from "@/pages/projects/ProjectDetail.vue"
import ProjectsLayout from "@/pages/projects/ProjectsLayout.vue"
import Projects from "@/pages/projects/projects.vue"
import { createRouter, createWebHashHistory } from "vue-router"

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.name === "project-detail") {
      return { top: 0 }
    }
    if (to.name === "projects" && from.name === "project-detail") {
      const stored = sessionStorage.getItem("projectsScrollY")
      const y = stored ? Number(stored) : 0
      if (!Number.isNaN(y)) {
        return { top: y }
      }
    }
    if (to.hash) return { el: to.hash }
    return { top: 0 }
  },
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
      component: ProjectsLayout,
      children: [
        {
          path: "",
          name: "projects",
          component: Projects,
        },
        {
          path: ":slug",
          name: "project-detail",
          component: ProjectDetail,
          props: true,
        },
      ],
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

router.beforeEach((to, from, next) => {
  if (from.name === "projects" && to.name === "project-detail") {
    sessionStorage.setItem("projectsScrollY", String(window.scrollY))
  }
  next()
})
