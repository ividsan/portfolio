<script setup lang="ts">
import { computed } from "vue"
import { useRoute } from "vue-router"

interface ProjectDetail {
  slug: string
  title: string
  role: string
  tools: string
  summary: string
}

const route = useRoute()

const projectDetails: ProjectDetail[] = [
  {
    slug: "revista-interactiva",
    title: "Revista Interactiva",
    role: "Diseno + Frontend",
    tools: "Vue, Tailwind, Figma",
    summary: "Proyecto editorial con jerarquia tipografica marcada y narrativa basada en scroll.",
  },
  {
    slug: "landing-estudio",
    title: "Landing para estudio",
    role: "UI Design",
    tools: "Tailwind, prototipado",
    summary: "Landing minimalista para presentar servicios y aumentar conversion en contacto.",
  },
  {
    slug: "portfolio-fotografico",
    title: "Portfolio fotografico",
    role: "Frontend",
    tools: "Vue Router, grid responsive",
    summary: "Galeria con composicion modular para mostrar imagenes y series visuales.",
  },
]

const detail = computed(() => {
  const slug = String(route.params.slug ?? "")
  return projectDetails.find((project) => project.slug === slug)
})
</script>

<template>
  <article v-if="detail" class="border border-black/25 px-5 py-4 md:px-7 md:py-6">
    <h2 class="text-[30px] leading-none md:text-[44px]">{{ detail.title }}</h2>
    <p class="mt-3 text-[15px] text-black/70">Rol: {{ detail.role }}</p>
    <p class="text-[15px] text-black/70">Herramientas: {{ detail.tools }}</p>
    <p class="mt-4 max-w-3xl text-[18px] leading-tight">{{ detail.summary }}</p>
  </article>
  <article v-else class="border border-dashed border-black/30 px-5 py-4 text-[18px] text-black/65 md:px-7 md:py-6">
    Este proyecto no existe en la base actual.
  </article>
</template>
