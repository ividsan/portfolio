<script setup lang="ts">
import { Instagram, Linkedin } from "lucide-vue-next"
</script>

<template>
  <footer class="border-t border-zinc-300 bg-white px-5 py-8 text-black md:px-9">
    <div class="mx-auto max-w-7xl">
      <div class="mb-6">
        <h2 class="text-xl font-light tracking-tight italic md:text-2xl">
          Don't be a stranger, say hi!
        </h2>
      </div>

      <div class="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div class="space-y-2">
          <p class="text-[10px] font-medium uppercase tracking-widest text-zinc-600">Get in touch</p>
          <a
            href="mailto:irenevidalsanchis@gmail.com"
            class="text-lg transition-colors duration-300 hover:text-zinc-600 md:text-xl"
          >
            irenevidalsanchis@gmail.com
          </a>
        </div>

        <div class="flex items-center gap-4">
          <a
            href="https://instagram.com/ireneevidal"
            target="_blank"
            class="transition-colors hover:text-zinc-600"
            aria-label="Instagram"
          >
            <Instagram :size="20" stroke-width="1.5" />
          </a>
          <a
            href="https://linkedin.com/in/irenevidal"
            target="_blank"
            class="transition-colors hover:text-zinc-600"
            aria-label="LinkedIn"
          >
            <Linkedin :size="20" stroke-width="1.5" />
          </a>
        </div>
      </div>

      <div class="mt-8 flex items-center justify-between border-t border-zinc-300 pt-5 text-[9px] uppercase tracking-[0.2em] text-zinc-600">
        <p>2026 - Irene Vidal. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  font-family: "Inter", sans-serif;
}
</style>
