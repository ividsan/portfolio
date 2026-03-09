<script setup lang="ts">
import { computed } from "vue"
import { getProjectBySlug } from "./data"

const props = defineProps<{
  slug: string
}>()

const project = computed(() => getProjectBySlug(props.slug))
const isFirstProject = computed(() => props.slug === "lqnm-01")
</script>

<template>
  <main class="project-detail-page px-4 py-6 md:px-9 md:py-8">
    <section class="project-detail-shell">
      <div class="project-detail-media">
        <img
          v-if="isFirstProject"
          src="/imagenes/projects/LQNM/gif%20motion%20graphics.gif"
          alt="Motion graphics del proyecto LQNM"
          class="project-detail-image"
        >
        <img
          v-else-if="project"
          :src="project.image"
          :alt="`Proyecto ${project.code} ${project.title}`"
          class="project-detail-image"
        >
        <p v-else class="project-detail-empty">
          Proyecto no encontrado.
        </p>
      </div>

      <section v-if="project?.detailBody" class="project-detail-info">
        <div class="project-detail-columns">
          <div class="project-detail-left">
            <h2 class="project-detail-heading">{{ project.detailHeading }}</h2>
            <p class="project-detail-subheading">{{ project.detailSubheading }}</p>
          </div>
          <p class="project-detail-body">
            {{ project.detailBody }}
          </p>
        </div>

        <div class="project-detail-secondary-media">
          <img
            v-if="project.detailMedia"
            :src="project.detailMedia"
            :alt="`Detalle visual ${project.title}`"
            class="project-detail-secondary-image"
          >
        </div>
      </section>

      <section v-if="project?.detailBodySecondary" class="project-detail-extra">
        <p class="project-detail-extra-text">
          {{ project.detailBodySecondary }}
        </p>

        <div class="project-detail-extra-media">
          <img
            v-if="project.detailMediaSecondary"
            :src="project.detailMediaSecondary"
            :alt="`Montaje del proyecto ${project.title}`"
            class="project-detail-extra-image"
          >
        </div>
      </section>

      <section v-if="project?.detailMediaStack?.length" class="project-detail-stack">
        <div
          v-for="(mediaSrc, index) in project.detailMediaStack"
          :key="`detail-stack-${index}`"
          class="project-detail-stack-item"
          :class="{
            'project-detail-stack-item--tipografia': index === 0,
            'project-detail-stack-item--sin-titulo': index === 1,
          }"
        >
          <img
            :src="mediaSrc"
            :alt="`Detalle ${index + 1} del proyecto ${project.title}`"
            class="project-detail-stack-image"
          >
        </div>
      </section>

      <section v-if="project?.detailBodyTertiary" class="project-detail-tertiary">
        <p class="project-detail-tertiary-text">
          {{ project.detailBodyTertiary }}
        </p>
        <div class="project-detail-tertiary-media">
          <img
            v-if="project.detailMediaTertiary"
            :src="project.detailMediaTertiary"
            :alt="`Triptico del proyecto ${project.title}`"
            class="project-detail-tertiary-image"
          >
        </div>
      </section>

      <section v-if="project?.detailLogo" class="project-detail-logo-block">
        <img
          :src="project.detailLogo"
          :alt="`Logo del proyecto ${project.title}`"
          class="project-detail-logo-image"
        >
      </section>
    </section>
  </main>
</template>

<style scoped>
.project-detail-page {
  min-height: 100vh;
  background: #fff;
}

.project-detail-shell {
  --detail-gap: calc(clamp(28px, 4vw, 42px) + 90px);
  margin: 0 auto;
  width: 100%;
  max-width: 1080px;
  padding: 0;
}

.project-detail-media {
  margin: 0 auto;
  width: 100%;
  max-width: 1080px;
  background: #e29abf;
}

.project-detail-image {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}

.project-detail-empty {
  margin: 0;
  padding: 3rem 1rem;
  text-align: center;
  text-transform: uppercase;
  font-size: 0.95rem;
}

.project-detail-info {
  margin: var(--detail-gap) auto 0;
  width: 100%;
  max-width: 1080px;
}

.project-detail-columns {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: clamp(18px, 3vw, 48px);
  align-items: start;
}

.project-detail-heading,
.project-detail-subheading {
  margin: 0;
  line-height: 1.05;
  font-size: 15pt;
  font-weight: 700;
}

.project-detail-body {
  margin: 0;
  max-width: 660px;
  line-height: 1.1;
  font-size: 12pt;
}

.project-detail-secondary-media {
  margin-top: var(--detail-gap);
  width: 100%;
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
}

.project-detail-secondary-image {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}

@media (max-width: 900px) {
  .project-detail-columns {
    grid-template-columns: 1fr;
  }

  .project-detail-body {
    max-width: none;
  }

}

.project-detail-extra {
  margin: var(--detail-gap) auto 0;
  width: 100%;
  max-width: 1080px;
}

.project-detail-extra-text {
  margin: 0;
  font-size: 12pt;
  line-height: 1.2;
}

.project-detail-extra-media {
  margin-top: var(--detail-gap);
  width: 100%;
  max-width: 1080px;
}

.project-detail-extra-image {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}

.project-detail-stack {
  margin: var(--detail-gap) auto 0;
  width: 100%;
  max-width: 1080px;
}

.project-detail-stack-item + .project-detail-stack-item {
  margin-top: var(--detail-gap);
}

.project-detail-stack-item {
  position: relative;
}

.project-detail-stack-item--tipografia {
  z-index: 2;
}

.project-detail-stack-item--sin-titulo {
  margin-top: calc(var(--detail-gap) - 600px) !important;
  z-index: 1;
}

.project-detail-stack-image {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}

.project-detail-tertiary {
  margin: var(--detail-gap) auto 0;
  width: 100%;
  max-width: 1080px;
}

.project-detail-tertiary-text {
  margin: 0;
  font-size: 12pt;
  line-height: 1.2;
}

.project-detail-tertiary-media {
  margin-top: var(--detail-gap);
  width: 100%;
  max-width: 1080px;
}

.project-detail-tertiary-image {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}

.project-detail-logo-block {
  margin: calc(var(--detail-gap) - 70px) auto 0;
  width: 100%;
  max-width: 1080px;
}

.project-detail-logo-image {
  display: block;
  width: min(560px, 80%);
  height: auto;
  object-fit: contain;
  margin-left: auto;
  margin-right: auto;
}
</style>
