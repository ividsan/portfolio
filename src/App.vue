<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from "vue"
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

const cursorX = ref(0)
const cursorY = ref(0)
const cursorVisible = ref(false)
const cursorHover = ref(false)
const cursorEnabled = ref(false)
const isMenuOpen = ref(false)

const isInteractiveElement = (target: EventTarget | null) => {
  const element = target instanceof Element ? target : null
  return Boolean(element?.closest("a, button, input, textarea, select, label, [role='button'], [tabindex]"))
}

const handlePointerMove = (event: PointerEvent) => {
  cursorX.value = event.clientX
  cursorY.value = event.clientY
  cursorVisible.value = true
  cursorHover.value = isInteractiveElement(event.target)
}

const handlePointerOver = (event: PointerEvent) => {
  cursorHover.value = isInteractiveElement(event.target)
}

const handlePointerLeaveWindow = () => {
  cursorVisible.value = false
  cursorHover.value = false
}

onMounted(() => {
  if (!window.matchMedia("(pointer: fine)").matches) {
    return
  }

  cursorEnabled.value = true
  document.body.classList.add("custom-cursor-enabled")

  window.addEventListener("pointermove", handlePointerMove)
  window.addEventListener("pointerover", handlePointerOver)
  window.addEventListener("pointerleave", handlePointerLeaveWindow)
})

onBeforeUnmount(() => {
  window.removeEventListener("pointermove", handlePointerMove)
  window.removeEventListener("pointerover", handlePointerOver)
  window.removeEventListener("pointerleave", handlePointerLeaveWindow)
  document.body.classList.remove("custom-cursor-enabled")
})

watch(
  () => route.path,
  () => {
    isMenuOpen.value = false
  },
)
</script>

<template>
  <div class="flex min-h-screen flex-col bg-white text-black">
    <header class="bg-white px-4 pt-5 md:px-10 md:pt-8">
      <nav class="grid grid-cols-2 items-center gap-y-2 md:grid-cols-5">
        <RouterLink
          to="/"
          class="col-span-2 w-fit text-[clamp(18px,5vw,20px)] leading-none font-normal uppercase transition-colors hover:text-[#002FA7] md:col-span-1 md:text-[20px]"
        >
          ENNE
        </RouterLink>
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="hidden w-fit justify-self-start text-[clamp(14px,4.2vw,20px)] leading-none font-normal uppercase transition-colors hover:text-[#002FA7] md:justify-self-center md:text-[20px] md:inline-flex"
          :class="{ 'text-[#002FA7] font-bold': isActive(item.to) }"
        >
          [ {{ item.label.toUpperCase() }} ]
        </RouterLink>
        <button
          type="button"
          class="mobile-menu-toggle md:hidden"
          aria-label="Abrir menú"
          @click="isMenuOpen = true"
        >
          <span class="sr-only">Abrir menú</span>
          <span class="mobile-menu-toggle__bars">
            <span class="mobile-menu-toggle__bar" />
            <span class="mobile-menu-toggle__bar" />
            <span class="mobile-menu-toggle__bar" />
          </span>
        </button>
      </nav>
    </header>

    <main class="flex-1 bg-white">
      <RouterView />
    </main>
    <Footer :class="{ 'footer-home-plus': route.path === '/' }" />

    <div
      v-if="isMenuOpen"
      class="fixed inset-0 z-40 bg-black/30 md:hidden"
      aria-hidden="true"
      @click="isMenuOpen = false"
    />
    <aside
      v-if="isMenuOpen"
      class="fixed right-0 top-0 z-50 h-full w-56 bg-white p-6 shadow-2xl ring-1 ring-black/10 md:hidden"
      aria-label="Menú"
    >
      <div class="flex items-center justify-between">
        <span class="text-sm font-normal uppercase tracking-[0.2em]">Menu</span>
        <button
          type="button"
          class="inline-flex h-9 w-9 items-center justify-center bg-transparent text-black transition-colors hover:text-[#002FA7]"
          aria-label="Cerrar menú"
          @click="isMenuOpen = false"
        >
          <span class="text-lg leading-none">&times;</span>
        </button>
      </div>
      <nav class="mt-6 flex flex-col gap-4">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="text-[16px] font-normal uppercase tracking-[0.16em] text-black transition-colors hover:text-[#002FA7]"
          :class="{ 'text-[#002FA7]': isActive(item.to) }"
        >
          [ {{ item.label.toUpperCase() }} ]
        </RouterLink>
      </nav>
    </aside>

    <div
      v-if="cursorEnabled"
      class="site-cursor"
      :class="{ 'site-cursor--hover': cursorHover, 'site-cursor--hidden': !cursorVisible }"
      :style="{ left: `${cursorX}px`, top: `${cursorY}px` }"
      aria-hidden="true"
    />
  </div>
</template>


<style scoped>
:global(body.custom-cursor-enabled),
:global(body.custom-cursor-enabled *) {
  cursor: none !important;
}

.site-cursor {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 45px;
  height: 45px;
  border-radius: 9999px;
  background: #0a3cae;
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 1;
  transition: opacity 120ms ease;
}

.site-cursor--hover {
  opacity: 0.5;
}

.site-cursor--hidden {
  opacity: 0;
}

.footer-home-plus {
  margin-top: -30px !important;
  padding-top: 30px !important;
}

.mobile-menu-toggle {
  position: absolute;
  top: 18px;
  right: 16px;
  display: inline-flex;
  height: 36px;
  width: 36px;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 0;
  padding: 0;
}

.mobile-menu-toggle__bars {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 22px;
  height: 16px;
}

.mobile-menu-toggle__bar {
  height: 2px;
  width: 100%;
  background: #111;
}

@media (min-width: 768px) {
  .mobile-menu-toggle {
    display: none;
  }
}
</style>
