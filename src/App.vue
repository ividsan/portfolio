<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from "vue-router"

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
  <div class="min-h-screen bg-[#ffffff] text-black">
    <header class="w-ful  px-5 pt-3 pb-2 md:px-9">
      <nav class="grid grid-cols-2 gap-y-4 md:grid-cols-4 md:items-center">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="w-fit text-[22px] leading-none font-normal tracking-tight transition-opacity hover:opacity-70 md:text-[32px]"
          :class="{ 'underline underline-offset-[14px]': isActive(item.to) }"
        >
          {{ item.label }}
        </RouterLink>
      </nav>
    </header>

    <RouterView />
  </div>
</template>


<style scoped>

</style>
