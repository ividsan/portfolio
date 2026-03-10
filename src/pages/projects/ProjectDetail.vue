<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue"
import { getProjectBySlug } from "./data"

const props = defineProps<{
  slug: string
}>()

const project = computed(() => getProjectBySlug(props.slug))
const isSiete = computed(() => project.value?.slug === "siete")
const isRevista = computed(() => project.value?.slug === "revista-01")
const isComic = computed(() => project.value?.slug === "comic")

const revistaSlides = computed(() =>
  isRevista.value
    ? [
        "/imagenes/projects/revista/1.jpg",
        "/imagenes/projects/revista/2.jpg",
        "/imagenes/projects/revista/3.jpg",
        "/imagenes/projects/revista/4.jpg",
      ]
    : [],
)

const currentSlide = ref(0)
const currentSlideSrc = computed(() => revistaSlides.value[currentSlide.value])

let autoplayTimer: ReturnType<typeof setInterval> | undefined

const nextSlide = () => {
  if (!revistaSlides.value.length) return
  currentSlide.value = (currentSlide.value + 1) % revistaSlides.value.length
}

onMounted(() => {
  if (revistaSlides.value.length) {
    autoplayTimer = setInterval(nextSlide, 2000)
  }
})

onUnmounted(() => {
  if (autoplayTimer) clearInterval(autoplayTimer)
})
</script>

<template>
  <main class="project-detail-page px-4 py-6 md:px-9 md:py-8">
    <section v-if="isComic && project" class="comic-detail">

      <div class="comic-hero-frame">
        <img
          :src="project.detailHeroMedia || project.image"
          :alt="`Mockup a color del proyecto ${project.title}`"
          class="comic-hero-image"
        >
      </div>

      <section class="comic-intro">
        <h2 class="comic-heading">{{ project.detailHeading }}</h2>
        <p class="comic-body">{{ project.detailBody }}</p>
      </section>

      <section class="comic-secondary">
        <div class="comic-secondary-frame">
          <img
            src="/imagenes/projects/c%C3%B3mic/bn.png"
            alt="Comic en blanco y negro del proyecto"
            class="comic-secondary-image"
          >
        </div>
        <p class="comic-secondary-text">
          "OKUPA" is a sequential illustration project that transforms a personal anecdote into a dynamic two-page comic.
          The story follows a chaotic encounter with a cockroach during a summer night in Valencia. The challenge was to
          translate a real-life experience into a visual sequence, balancing humor, tension, and a clear narrative flow.
          The project explores the use of "visual metaphors" through color to represent emotional shifts: from the calm
          "rose-colored" world to the vibrant green of repulsion.
        </p>
      </section>

      <section class="comic-process">
        <div class="comic-process-frame">
          <img
            src="/imagenes/projects/c%C3%B3mic/mockup-bn.jpg"
            alt="Mockup en blanco y negro del proyecto"
            class="comic-process-image"
          >
        </div>
        <p class="comic-process-text">
          The process began with traditional graphite and ink on paper, later digitized for digital coloring in Procreate.
          This allowed for a clean, bold line-art that maintains the energy of the original sketches. Color is used as a
          storytelling tool. A pastel pink palette establishes the initial "normalcy," which is abruptly interrupted by
          high-contrast tones and "toxic" greens to emphasize the intruder's presence.
        </p>
        <div class="comic-process-frame">
          <img
            src="/imagenes/projects/c%C3%B3mic/color.jpg"
            alt="Ilustracion a color del proyecto"
            class="comic-process-image"
          >
        </div>
      </section>
    </section>

    <section v-else class="project-detail-shell">
      <div class="project-detail-media">
        <img
          v-if="project?.detailHeroMedia"
          :src="project.detailHeroMedia"
          :alt="`Hero visual del proyecto ${project.title}`"
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

        <section v-if="isRevista" class="project-detail-carousel" aria-label="Galería Revista Artículo 1">
          <div class="about-magazine__viewport">
            <img
              :src="currentSlideSrc"
              :alt="`Página ${currentSlide + 1} revista`"
              class="about-magazine__image"
            >
          </div>
        </section>

        <div class="project-detail-secondary-media" v-if="!isSiete">
          <img
            v-if="project.detailMedia"
            :src="project.detailMedia"
            :alt="`Detalle visual ${project.title}`"
            class="project-detail-secondary-image"
          >
        </div>
      </section>

      <section v-if="project?.detailTextureMedia && !isSiete" class="project-detail-texture">
        <div class="project-detail-texture-media">
          <img
            :src="project.detailTextureMedia"
            :alt="`Textura del proyecto ${project.title}`"
            class="project-detail-texture-image"
          >
        </div>
        <p v-if="project.detailTextureBody" class="project-detail-texture-body">
          {{ project.detailTextureBody }}
        </p>
      </section>

      <section
        v-if="project?.detailBodySecondary && !isSiete"
        class="project-detail-extra"
        :class="{ 'project-detail-extra--raised': project.detailSecondaryMediaFirst }"
      >
        <template v-if="project.detailSecondaryMediaFirst">
          <div class="project-detail-extra-media project-detail-extra-media--first">
            <img
              v-if="project.detailMediaSecondary"
              :src="project.detailMediaSecondary"
              :alt="`Montaje del proyecto ${project.title}`"
              class="project-detail-extra-image project-detail-extra-image--wide"
            >
          </div>
          <p class="project-detail-extra-text project-detail-extra-text--after-media">
            {{ project.detailBodySecondary }}
          </p>
        </template>
        <template v-else>
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
        </template>
      </section>

      <section v-if="(project?.detailPosterImage || project?.detailPosterTitle) && !isSiete" class="project-detail-poster">
        <h1 v-if="project?.detailPosterTitle" class="project-detail-poster-title">
          {{ project.detailPosterTitle }}
        </h1>
        <div class="project-detail-poster-frame">
          <img
            v-if="project?.detailPosterImage"
            :src="project.detailPosterImage"
            :alt="`Propuesta visual del proyecto ${project.title}`"
            class="project-detail-poster-image"
          >
        </div>
        <div v-if="project?.detailPosterCaptionTitle" class="project-detail-poster-caption">
          <p class="project-detail-poster-caption-title">
            {{ project.detailPosterCaptionTitle }}
          </p>
          <p v-if="project.detailPosterCaptionBody" class="project-detail-poster-caption-body">
            {{ project.detailPosterCaptionBody }}
          </p>
        </div>
      </section>

      <section v-if="project?.detailMediaStack?.length && !isSiete" class="project-detail-stack">
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

      <section v-if="project?.detailBodyTertiary && !isSiete" class="project-detail-tertiary">
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

      <section v-if="project?.detailLogo && !isSiete" class="project-detail-logo-block">
        <img
          :src="project.detailLogo"
          :alt="`Logo del proyecto ${project.title}`"
          class="project-detail-logo-image"
        >
      </section>

      <section v-if="project?.detailTypographyMedia && !isSiete" class="project-detail-typography-block">
        <div class="project-detail-typography-meta">
          <span>Logo</span>
          <span>Main Text</span>
        </div>
        <img
          :src="project.detailTypographyMedia"
          :alt="`Tipografia del proyecto ${project.title}`"
          class="project-detail-typography-image"
        >
      </section>

      <section v-if="project?.detailFinalMedia && !isSiete" class="project-detail-final-block">
        <img
          :src="project.detailFinalMedia"
          :alt="`Aplicacion final del proyecto ${project.title}`"
          class="project-detail-final-image"
        >
      </section>

      <section v-if="isSiete" class="project-detail-siete-extra">
        <h1 class="project-detail-siete-title">siete</h1>
        <div class="project-detail-siete-frame">
          <img
            src="/imagenes/projects/siete/diseno-sin-titulo-1.gif"
            alt="Propuesta 01: Scan and Photography del proyecto Siete"
            class="project-detail-siete-image"
          >
        </div>
        <div class="project-detail-siete-caption">
          <p class="project-detail-siete-caption-title">PROPOSAL 01: SCAN AND POTOGRAHY</p>
          <p class="project-detail-siete-caption-body">
            Using photography and scanning techniques to capture a distorted reality. The human element becomes a
            resource to represent the obsession and hoarding nature of greed.
          </p>
        </div>

        <div class="project-detail-siete-frame project-detail-siete-frame--narrow">
          <img
            src="/imagenes/projects/siete/Mockup3.jpg"
            alt="Propuesta 02: Texture del proyecto Siete"
            class="project-detail-siete-image project-detail-siete-image--narrow"
          >
        </div>
        <div class="project-detail-siete-caption project-detail-siete-caption--narrow">
          <p class="project-detail-siete-caption-title">PROPOSAL 02: TEXTURE</p>
          <p class="project-detail-siete-caption-body">
            An exploration of metallic and organic textures. A tactile approach where the sin is manifested through visual
            weight and material density, conveying the oppressive nature of greed.
          </p>
        </div>

        <div class="project-detail-siete-frame project-detail-siete-frame--wide">
          <img
            src="/imagenes/projects/siete/Dise%C3%B1o%20sin%20t%C3%ADtulo.gif"
            alt="Propuesta 03 del proyecto Siete"
            class="project-detail-siete-image"
          >
        </div>
        <div class="project-detail-siete-caption project-detail-siete-caption--wide">
          <p class="project-detail-siete-caption-title">PROPOSAL 03: GEOMETRY & FLAT INKS</p>
          <p class="project-detail-siete-caption-body">
            A minimalist and structural approach. Using geometric shapes and flat colors to represent the cold,
            calculated, and systematic side of the sin.
          </p>
        </div>
      </section>
    </section>
  </main>
</template>

<style scoped>
.project-detail-page {
  min-height: 100vh;
  background: #fff;
}

.comic-detail {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  --comic-frame-pad: clamp(12px, 2vw, 20px);
  --comic-image-max: 1180px;
}


.comic-hero-frame {
  background: #0a0a0a;
  padding: var(--comic-frame-pad);
  display: flex;
  justify-content: center;
  align-items: center;
}

.comic-hero-image {
  width: 100%;
  max-width: var(--comic-image-max);
  height: auto;
  display: block;
}

.comic-intro {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: clamp(18px, 4vw, 46px);
  align-items: center;
  margin-top: clamp(22px, 4vw, 42px);
  padding: 0 clamp(4px, 3vw, 28px);
  font-size: 12pt;
  line-height: 1.35;
}

.comic-heading {
  margin: 0;
  font-size: 14pt;
  font-weight: 800;
  letter-spacing: 0.3px;
}

.comic-body {
  margin: 0;
  max-width: 720px;
}

.comic-secondary {
  margin-top: clamp(28px, 6vw, 56px);
  display: grid;
  gap: clamp(18px, 4vw, 32px);
}

.comic-secondary-frame {
  display: flex;
  justify-content: center;
  background: #fff;
  padding: var(--comic-frame-pad);
}

.comic-secondary-image {
  width: 100%;
  max-width: var(--comic-image-max);
  height: auto;
  display: block;
}

.comic-secondary-text {
  margin: 0 auto;
  font-size: 12pt;
  line-height: 1.35;
  width: 100%;
  max-width: var(--comic-image-max);
}

.comic-process {
  margin-top: clamp(32px, 7vw, 68px);
  display: grid;
  gap: clamp(18px, 4vw, 32px);
}

.comic-process-frame {
  display: flex;
  justify-content: center;
  background: #0a0a0a;
  padding: var(--comic-frame-pad);
}

.comic-process-image {
  width: 100%;
  max-width: var(--comic-image-max);
  height: auto;
  display: block;
}

.comic-process-text {
  margin: 0 auto;
  font-size: 12pt;
  line-height: 1.35;
  width: 100%;
  max-width: var(--comic-image-max);
}

@media (max-width: 900px) {
  .comic-intro {
    grid-template-columns: 1fr;
  }
}

.project-detail-shell {
  --detail-gap: calc(clamp(28px, 4vw, 42px) + 90px);
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 1080px;
  padding: 0;
}

.project-detail-media {
  position: relative;
  z-index: 1;
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
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
  position: relative;
  z-index: 2;
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

.project-detail-carousel {
  margin-top: calc(clamp(28px, 4vw, 44px) + 60px);
}

.about-magazine__viewport {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 0;
  box-shadow: none;
}

.about-magazine__image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
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

.project-detail-texture {
  margin: var(--detail-gap) auto 0;
  width: 100%;
  max-width: 1080px;
}

.project-detail-texture-media {
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1080px;
}

.project-detail-texture-image {
  display: block;
  width: 108%;
  max-width: none;
  height: auto;
  margin: 0 auto;
  transform: translateY(-150px) rotate(90deg) scale(1.15);
  transform-origin: center center;
}

.project-detail-texture-body {
  margin: var(--detail-gap) 0 0;
  position: relative;
  z-index: 3;
  transform: translateY(-290px);
  font-size: 12pt;
  line-height: 1.2;
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

.project-detail-extra--raised {
  margin-top: calc(var(--detail-gap) - 100px);
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

.project-detail-extra-media--first {
  display: block;
  margin-top: clamp(24px, 3vw, 40px);
  margin-bottom: clamp(24px, 3vw, 40px);
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 1080px;
}

.project-detail-extra-image {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}

.project-detail-extra-image--wide {
  width: 128%;
  max-width: none;
  margin-left: 50%;
  transform: translate(-50%, -300px);
}

.project-detail-extra-text--after-media {
  margin-top: 0;
  transform: translateY(-200px);
}

.project-detail-stack {
  margin: var(--detail-gap) auto 0;
  width: 100%;
  max-width: 1080px;
}

.project-detail-poster {
  margin: var(--detail-gap) auto 0;
  width: 100%;
  max-width: 1080px;
  text-align: center;
}

.project-detail-poster-title {
  margin: 0 0 clamp(18px, 3vw, 28px);
  font-size: clamp(56px, 8vw, 96px);
  font-weight: 800;
  line-height: 0.95;
  text-transform: lowercase;
}

.project-detail-poster-frame {
  position: relative;
  width: 100%;
  background: #f6f6f6;
  padding: clamp(22px, 3vw, 32px);
  border: 3px solid #141414;
  box-shadow: inset 0 0 0 1px #141414;
}

.project-detail-poster-image {
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
  background: #fff;
}

.project-detail-poster-caption {
  margin-top: clamp(18px, 2.5vw, 26px);
  text-align: left;
  font-size: 12pt;
  line-height: 1.25;
}

.project-detail-poster-caption-title {
  margin: 0 0 6px;
  font-weight: 700;
  letter-spacing: 0.3px;
}

.project-detail-poster-caption-body {
  margin: 0;
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
  position: relative;
  z-index: 0;
  transform: translateY(-300px);
}

.project-detail-logo-image {
  display: block;
  width: min(980px, 100%);
  height: auto;
  object-fit: contain;
  margin-left: auto;
  margin-right: auto;
}

.project-detail-typography-block {
  position: relative;
  margin: calc(var(--detail-gap) - 40px) auto 0;
  width: 100%;
  max-width: 820px;
  transform: translateY(-400px);
}

.project-detail-typography-meta {
  position: absolute;
  top: 8px;
  left: 0;
  right: 0;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  font-size: 14pt;
  line-height: 1;
  pointer-events: none;
}

.project-detail-typography-image {
  display: block;
  width: 135%;
  max-width: none;
  height: auto;
  object-fit: contain;
  margin-left: 50%;
  transform: translate(-50%, 80px);
}

.project-detail-final-block {
  margin: calc(var(--detail-gap) - 20px) auto 0;
  width: 100%;
  max-width: 1080px;
  transform: translateY(-150px);
}

.project-detail-final-image {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}

.project-detail-siete-extra {
  margin: var(--detail-gap) auto clamp(120px, 18vh, 200px);
  width: 100%;
  max-width: 1140px;
  text-align: center;
}

.project-detail-siete-title {
  margin: 0 0 clamp(18px, 3vw, 28px);
  font-size: clamp(56px, 8vw, 96px);
  font-weight: 800;
  line-height: 0.95;
  text-transform: lowercase;
}

.project-detail-siete-frame {
  margin: clamp(22px, 3vw, 32px) auto;
  padding: 0;
  background: transparent;
  max-width: 1280px;
}

.project-detail-siete-frame--narrow {
  max-width: 520px;
  margin-top: clamp(42px, 6vw, 72px);
  margin-bottom: 0;
}

.project-detail-siete-image {
  display: block;
  width: 100%;
  margin: 0 auto;
  height: auto;
  object-fit: contain;
  background: transparent;
}

.project-detail-siete-image--narrow {
  width: 100%;
}

.project-detail-siete-caption {
  margin: clamp(18px, 3vw, 28px) auto 0;
  max-width: 1280px;
  width: 100%;
  text-align: left;
  font-size: 12pt;
  line-height: 1.25;
}

.project-detail-siete-caption--narrow {
  max-width: 1280px;
  width: 100%;
  margin-top: clamp(48px, 7vw, 88px);
  margin-bottom: clamp(48px, 7vw, 88px);
}

.project-detail-siete-caption-title {
  margin: 0 0 6px;
  font-weight: 700;
  letter-spacing: 0.3px;
}

.project-detail-siete-caption-body {
  margin: 0;
}

.project-detail-siete-row {
  display: grid;
  grid-template-columns: 1fr 0.9fr;
  gap: clamp(22px, 4vw, 48px);
  align-items: center;
  margin: clamp(32px, 5vw, 56px) auto 0;
  max-width: 1280px;
}

.project-detail-siete-item {
  width: 100%;
}

.project-detail-siete-item--vertical .project-detail-siete-image {
  width: 100%;
  max-width: 520px;
  margin-left: auto;
  margin-right: auto;
}

.project-detail-siete-caption--wide {
  max-width: 1280px;
  width: 100%;
  margin-top: clamp(24px, 4vw, 40px);
  margin-bottom: clamp(24px, 4vw, 40px);
}

.project-detail-siete-frame--wide {
  margin-top: 0;
}
</style>
