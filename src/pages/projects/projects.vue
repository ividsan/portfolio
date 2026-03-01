<script setup lang="ts">
import { computed } from "vue"
import Footer from "../home/components/Footer.vue"

interface ProjectItem {
  slug: string
  title: string
  description: string
}

const projects: ProjectItem[] = [
  {
    slug: "lqnm-1",
    title: "LQNM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    slug: "lqnm-2",
    title: "LQNM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    slug: "lqnm-3",
    title: "LQNM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    slug: "lqnm-4",
    title: "LQNM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    slug: "lqnm-5",
    title: "LQNM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    slug: "lqnm-6",
    title: "LQNM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
]

const projectRows = computed(() => {
  const rows: ProjectItem[][] = []
  for (let i = 0; i < projects.length; i += 2) rows.push(projects.slice(i, i + 2))
  return rows
})
</script>

<template>
  <div class="flex min-h-[calc(100vh-120px)] flex-col">
    <main class="flex-1 px-5 py-8 md:px-9">
      <section class="space-y-12 xl:pt-60">
        <div
          v-for="(row, rowIndex) in projectRows"
          :key="`row-${rowIndex}`"
          class="grid grid-cols-1 gap-x-5 gap-y-4 md:grid-cols-2 xl:grid-cols-4"
        >
          <template v-for="project in row" :key="project.slug">
            <article v-if="rowIndex % 2 === 1" class="pt-1">
              <h2 class="text-[56px] leading-none font-bold">{{ project.title }}</h2>
              <p class="mt-3 max-w-[310px] text-[20px] leading-[1.25]">
                {{ project.description }}
              </p>
              <RouterLink :to="`/projects/${project.slug}`" class="mt-4 inline-block text-[18px] hover:underline">
                + SEE THE PROJECT
              </RouterLink>
            </article>

            <RouterLink
              :to="`/projects/${project.slug}`"
              class="group relative block aspect-square overflow-hidden border border-transparent transition hover:border-violet-500"
            >
              <img src="/imagenes/prueba.jpg" :alt="project.title" class="h-full w-full object-cover">
              <div class="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/15">
                <span class="text-[50px] leading-none opacity-0 transition group-hover:opacity-100 hover:underline">
                  Saber mas
                </span>
              </div>
            </RouterLink>

            <article v-if="rowIndex % 2 === 0" class="pt-1">
              <h2 class="text-[56px] leading-none font-bold">{{ project.title }}</h2>
              <p class="mt-3 max-w-[310px] text-[20px] leading-[1.25]">
                {{ project.description }}
              </p>
              <RouterLink :to="`/projects/${project.slug}`" class="mt-4 inline-block text-[18px] hover:underline">
                + SEE THE PROJECT
              </RouterLink>
            </article>
          </template>
        </div>
      </section>

    </main>
    <Footer />
  </div>
</template>
