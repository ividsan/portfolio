<script setup lang="ts">
import { ref } from "vue"
import { projects } from "./data"

const isOpen = ref(false)
const [project1, project2, project3, project4, project5, project6] = projects

const openEnvelope = () => {
  isOpen.value = true
}
</script>

<template>
  <main class="projects-page">
    <section class="projects-hero">
      <section class="envelope mx-auto" :class="{ 'is-open': isOpen }">
        <div class="envelope__canvas">
        <img
          src="/imagenes/sobre/solapa inferior.png"
          alt=""
          aria-hidden="true"
          class="envelope__piece envelope__piece--inferior"
        />
        <img
          src="/imagenes/sobre/base sobre.png"
          alt=""
          aria-hidden="true"
          class="envelope__piece envelope__piece--base"
        />
        <img
          src="/imagenes/sobre/solapa izquierda.png"
          alt=""
          aria-hidden="true"
          class="envelope__piece envelope__piece--izquierda"
        />
        <img
          src="/imagenes/sobre/solapa derecha.png"
          alt=""
          aria-hidden="true"
          class="envelope__piece envelope__piece--derecha"
        />
        <div class="envelope__hinge-cover" aria-hidden="true" />
        <img
          src="/imagenes/sobre/solapa superior.png"
          alt=""
          aria-hidden="true"
          class="envelope__piece envelope__piece--superior"
        />
        <button v-if="!isOpen" type="button" class="envelope__open-button" @click="openEnvelope"><span>TAP TO<br>OPEN</span></button>
        </div>
      </section>
    </section>
    <section class="projects-gallery-screen" aria-label="Projects gallery">
      <div class="projects-gallery-grid">
        <article class="project-tile">
          <RouterLink class="project-tile__title-link" :to="{ name: 'project-detail', params: { slug: project1.slug } }">
            <p class="project-tile__title">{{ project1.code }} {{ project1.title }}</p>
          </RouterLink>
          <RouterLink class="project-tile__media-link" :to="{ name: 'project-detail', params: { slug: project1.slug } }">
            <div class="project-tile__media">
              <img :src="project1.image" alt="Proyecto 01" class="project-tile__image">
            </div>
          </RouterLink>
        </article>

        <article class="project-tile">
          <RouterLink class="project-tile__title-link" :to="{ name: 'project-detail', params: { slug: project2.slug } }">
            <p class="project-tile__title">{{ project2.code }} {{ project2.title }}</p>
          </RouterLink>
          <RouterLink class="project-tile__media-link" :to="{ name: 'project-detail', params: { slug: project2.slug } }">
            <div class="project-tile__media">
              <img :src="project2.image" alt="Proyecto 02" class="project-tile__image">
            </div>
          </RouterLink>
        </article>
      </div>
    </section>
    <section class="projects-gallery-screen projects-gallery-screen--offset" aria-label="Projects gallery continuation">
      <div class="projects-gallery-grid projects-gallery-grid--offset">
        <article class="project-tile">
          <RouterLink class="project-tile__title-link" :to="{ name: 'project-detail', params: { slug: project3.slug } }">
            <p class="project-tile__title">{{ project3.code }} {{ project3.title }}</p>
          </RouterLink>
          <RouterLink class="project-tile__media-link" :to="{ name: 'project-detail', params: { slug: project3.slug } }">
            <div class="project-tile__media">
              <img :src="project3.image" alt="Proyecto 03" class="project-tile__image">
            </div>
          </RouterLink>
        </article>

        <article class="project-tile">
          <RouterLink class="project-tile__title-link" :to="{ name: 'project-detail', params: { slug: project4.slug } }">
            <p class="project-tile__title">{{ project4.code }} {{ project4.title }}</p>
          </RouterLink>
          <RouterLink class="project-tile__media-link" :to="{ name: 'project-detail', params: { slug: project4.slug } }">
            <div class="project-tile__media">
              <img :src="project4.image" alt="Proyecto 04" class="project-tile__image">
            </div>
          </RouterLink>
        </article>
      </div>
    </section>
    <section class="projects-gallery-screen" aria-label="Projects gallery third screen">
      <div class="projects-gallery-grid">
        <article class="project-tile">
          <RouterLink class="project-tile__title-link" :to="{ name: 'project-detail', params: { slug: project5.slug } }">
            <p class="project-tile__title">{{ project5.code }} {{ project5.title }}</p>
          </RouterLink>
          <RouterLink class="project-tile__media-link" :to="{ name: 'project-detail', params: { slug: project5.slug } }">
            <div class="project-tile__media">
              <img :src="project5.image" alt="Proyecto 05" class="project-tile__image">
            </div>
          </RouterLink>
        </article>

        <article class="project-tile">
          <RouterLink class="project-tile__title-link" :to="{ name: 'project-detail', params: { slug: project6.slug } }">
            <p class="project-tile__title">{{ project6.code }} {{ project6.title }}</p>
          </RouterLink>
          <RouterLink class="project-tile__media-link" :to="{ name: 'project-detail', params: { slug: project6.slug } }">
            <div class="project-tile__media">
              <img :src="project6.image" alt="Proyecto 06" class="project-tile__image">
            </div>
          </RouterLink>
        </article>
      </div>
    </section>
  </main>
</template>

<style scoped>
.projects-page {
  width: 100%;
  background: #fff;
}

.projects-hero {
  display: flex;
  min-height: 100vh;
  align-items: flex-end;
  justify-content: center;
  padding: 2rem 1.25rem 0;
}

.projects-gallery-screen {
  width: 100%;
  min-height: 100vh;
  background: #fff;
  padding: clamp(190px, 28vh, 260px) 1rem clamp(24px, 5vh, 56px);
  display: flex;
  align-items: flex-start;
}

.projects-gallery-grid {
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  align-items: start;
  justify-items: start;
  column-gap: 0;
  row-gap: 32px;
}

.project-tile {
  width: min(100%, 260px);
  justify-self: start;
}

.project-tile:nth-child(1) {
  grid-column: 1;
}

.project-tile:nth-child(2) {
  grid-column: 3;
}

.projects-gallery-grid--offset .project-tile:nth-child(1) {
  grid-column: 2;
}

.projects-gallery-grid--offset .project-tile:nth-child(2) {
  grid-column: 4;
}

.project-tile__title {
  margin: 0 0 6px;
  font-size: 15px;
  line-height: 1;
  text-transform: uppercase;
}

.project-tile__title-link {
  color: inherit;
  text-decoration: none;
}

.project-tile__media-link {
  display: block;
}

.project-tile__media {
  position: relative;
  width: 100%;
  aspect-ratio: 0.75 / 1;
  background: #0a3cae;
  overflow: hidden;
}

.project-tile__media::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.35);
  opacity: 0;
  transition: opacity 160ms ease;
  pointer-events: none;
}

.project-tile__media-link:hover .project-tile__media::after,
.project-tile__media-link:focus-visible .project-tile__media::after {
  opacity: 1;
}

.project-tile__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media (max-width: 860px) {
  .projects-gallery-screen {
    padding-top: 120px;
  }

  .projects-gallery-grid {
    grid-template-columns: 1fr;
    justify-items: center;
    row-gap: 28px;
  }

  .project-tile {
    width: min(100%, 280px);
  }

  .project-tile:nth-child(1),
  .project-tile:nth-child(2),
  .projects-gallery-grid--offset .project-tile:nth-child(1),
  .projects-gallery-grid--offset .project-tile:nth-child(2) {
    grid-column: auto;
  }
}

@media (min-width: 768px) {
  .projects-gallery-screen {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
}

.projects-white-sheet {
  width: 100%;
  min-height: 100vh;
  background: #fff;
}

.envelope {
  position: relative;
  width: min(96vw, 860px);
  aspect-ratio: 1167 / 822;
  transform: translateY(-13%);
  perspective: 1200px;
}

.envelope__canvas {
  position: absolute;
  inset: 0;
}

.envelope__piece {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  user-select: none;
  pointer-events: none;
  transform: translate(var(--offset-x, 0%), var(--offset-y, 0%));
}

.envelope__piece--base {
  --offset-x: 0%;
  --offset-y: 6.8%;
  z-index: 3;
}

.envelope__piece--izquierda {
  --offset-x: 2%;
  --offset-y: -0.7%;
  z-index: 4;
}

.envelope__piece--derecha {
  --offset-x: 2.4%;
  --offset-y: 3.0%;
  z-index: 4;
}

.envelope__piece--inferior {
  --offset-x: 0.7%;
  --offset-y: -2.2%;
  z-index: 2;
}

.envelope__piece--superior {
  --offset-x: -0.1%;
  --offset-y: 5.1%;
  --open-drop: 0%;
  --flap-rotate: 0deg;
  transform: translate(var(--offset-x), calc(var(--offset-y) + var(--open-drop)))
    rotateX(var(--flap-rotate));
  transform-origin: 50% 12%;
  transition: transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform;
  z-index: 5;
}

.envelope.is-open .envelope__piece--superior {
  --flap-rotate: -168deg;
  --open-drop: 16.7%;
}

.envelope__hinge-cover {
  position: absolute;
  top: 25.5%;
  left: 15%;
  z-index: 4;
  width: 70%;
  height: 2.2%;
  background: #7e96cc;
  pointer-events: none;
}

.envelope__open-button {
  position: absolute;
  top: 56%;
  left: 50%;
  z-index: 10;
  display: inline-flex;
  width: 104px;
  height: 104px;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 9999px;
  background: #003ab6;
  color: #fff;
  font-family: "FFF Acid Grotesk", system-ui, sans-serif;
  font-size: 20px;
  line-height: 1;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  padding: 0;
  transition: background-color 160ms ease, color 160ms ease;
}

.envelope__open-button span {
  display: block;
  line-height: 0.95;
  text-align: center;
}

.envelope__open-button:hover {
  background: #fff;
  color: #003ab6;
}
</style>
