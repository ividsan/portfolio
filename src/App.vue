<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from "vue-router"
import Footer from "./pages/home/components/Footer.vue"

const route = useRoute()

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
]

const isActive = (path: string) => {
  if (path === "/") return route.path === "/"
  return route.path.startsWith(path)
}
</script>

<template>
  <div class="flex min-h-screen flex-col bg-white text-black">
    <header class="bg-white px-4 pt-5 md:px-10 md:pt-8">
      <nav class="grid grid-cols-2 items-center gap-y-2 md:grid-cols-5">
        <p class="col-span-2 text-[clamp(18px,5vw,20px)] leading-none font-normal uppercase md:col-span-1 md:text-[20px]">ENNE</p>
          <RouterLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="w-fit justify-self-start text-[clamp(14px,4.2vw,20px)] leading-none font-normal uppercase transition-colors hover:text-[#002FA7] md:justify-self-center md:text-[20px]"
            :class="{ 'text-[#002FA7] font-bold': isActive(item.to) }"
          >
            [ {{ item.label.toUpperCase() }} ]
          </RouterLink>
      </nav>
    </header>

    <main class="flex-1 bg-white">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>


<style scoped>
</style>
