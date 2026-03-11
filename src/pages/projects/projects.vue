<script setup lang="ts">
import { ref } from "vue"
import { projects } from "./data"

const isOpen = ref(false)
const [project1, project2, project3, project4, project5, project6] = projects

const openEnvelope = () => {
  isOpen.value = true
}

const closeEnvelope = () => {
  isOpen.value = false
}
</script>

<template>
  <main class="projects-page" @click="closeEnvelope">
    <section class="projects-hero">
      <section class="envelope mx-auto" :class="{ 'is-open': isOpen }" @click.stop>
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
          <div class="envelope__photos">
            <RouterLink
              :to="{ name: 'project-detail', params: { slug: project1.slug } }"
              class="envelope__photo envelope__photo--1 envelope__photo-link"
              :aria-label="`Open ${project1.code} ${project1.title}`"
            >
              <img
                src="/imagenes/projects/LQNM/Presentaci%C3%B3%20LQNMn.png"
                alt=""
                aria-hidden="true"
                class="envelope__photo-image"
              >
            </RouterLink>
            <RouterLink
              :to="{ name: 'project-detail', params: { slug: project2.slug } }"
              class="envelope__photo envelope__photo--2 envelope__photo-link"
              :aria-label="`Open ${project2.code} ${project2.title}`"
            >
              <img
                src="/imagenes/projects/crefad/mockup1.png"
                alt=""
                aria-hidden="true"
                class="envelope__photo-image"
              >
            </RouterLink>
            <RouterLink
              :to="{ name: 'project-detail', params: { slug: project3.slug } }"
              class="envelope__photo envelope__photo--3 envelope__photo-link"
              :aria-label="`Open ${project3.code} ${project3.title}`"
            >
              <img
                src="/imagenes/projects/siete/tot.jpg"
                alt=""
                aria-hidden="true"
                class="envelope__photo-image"
              >
            </RouterLink>
            <RouterLink
              :to="{ name: 'project-detail', params: { slug: project4.slug } }"
              class="envelope__photo envelope__photo--4 envelope__photo-link"
              :aria-label="`Open ${project4.code} ${project4.title}`"
            >
              <img
                :src="project4.image"
                alt=""
                aria-hidden="true"
                class="envelope__photo-image"
              >
            </RouterLink>
            <RouterLink
              :to="{ name: 'project-detail', params: { slug: project5.slug } }"
              class="envelope__photo envelope__photo--5 envelope__photo-link"
              :aria-label="`Open ${project5.code} ${project5.title}`"
            >
              <img
                :src="project5.image"
                alt=""
                aria-hidden="true"
                class="envelope__photo-image"
              >
            </RouterLink>
            <RouterLink
              :to="{ name: 'project-detail', params: { slug: project6.slug } }"
              class="envelope__photo envelope__photo--6 envelope__photo-link"
              :aria-label="`Open ${project6.code} ${project6.title}`"
            >
              <img
                :src="project6.image"
                alt=""
                aria-hidden="true"
                class="envelope__photo-image"
              >
            </RouterLink>
          </div>
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
          <button v-if="!isOpen" type="button" class="envelope__open-button" @click="openEnvelope">
            <span>TAP TO<br>OPEN</span>
          </button>
        </div>
      </section>
    </section>

    <section class="projects-gallery-screen" aria-label="Projects gallery">
      <div class="projects-gallery-grid">
        <article class="project-tile">
          <RouterLink class="project-tile__media-link" :to="{ name: 'project-detail', params: { slug: project1.slug } }">
            <div class="project-tile__media">
              <img src="/imagenes/projects/LQNM/Pres.png" alt="Proyecto 01" class="project-tile__image">
            </div>
          </RouterLink>
        </article>

        <article class="project-tile">
          <RouterLink class="project-tile__media-link" :to="{ name: 'project-detail', params: { slug: project2.slug } }">
            <div class="project-tile__media">
              <img src="/imagenes/projects/crefad/mockup1.png" alt="Proyecto 02" class="project-tile__image">
            </div>
          </RouterLink>
        </article>

        <article class="project-tile">
          <RouterLink class="project-tile__media-link" :to="{ name: 'project-detail', params: { slug: project3.slug } }">
            <div class="project-tile__media">
              <img src="/imagenes/projects/siete/tot.jpg" alt="Proyecto 03" class="project-tile__image">
            </div>
          </RouterLink>
        </article>

        <article class="project-tile">
          <RouterLink class="project-tile__media-link" :to="{ name: 'project-detail', params: { slug: project4.slug } }">
            <div class="project-tile__media">
              <img :src="project4.image" alt="Proyecto 04" class="project-tile__image">
            </div>
          </RouterLink>
        </article>

        <article class="project-tile">
          <RouterLink class="project-tile__media-link" :to="{ name: 'project-detail', params: { slug: project5.slug } }">
            <div class="project-tile__media">
              <img :src="project5.image" alt="Proyecto 05" class="project-tile__image">
            </div>
          </RouterLink>
        </article>

        <article class="project-tile">
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
  padding: clamp(140px, 24vh, 220px) clamp(18px, 3vw, 36px) clamp(48px, 10vh, 120px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.projects-gallery-grid {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(18px, 3vw, 28px);
}

.project-tile {
  width: 100%;
}

.project-tile__media-link {
  display: block;
}

.project-tile__media {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  background: #f3f3f3;
  overflow: hidden;
}

.project-tile__media::before {
  content: "[ MORE ]";
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  font-size: clamp(14px, 1.6vw, 18px);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #111;
  opacity: 0;
  transition: opacity 160ms ease;
  z-index: 2;
}

.project-tile__media::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.75);
  opacity: 0;
  transition: opacity 160ms ease;
  pointer-events: none;
  z-index: 1;
}

.project-tile__media-link:hover .project-tile__media::after,
.project-tile__media-link:focus-visible .project-tile__media::after,
.project-tile__media-link:hover .project-tile__media::before,
.project-tile__media-link:focus-visible .project-tile__media::before {
  opacity: 1;
}

.project-tile__media-link:hover .project-tile__media::before,
.project-tile__media-link:focus-visible .project-tile__media::before {
  color: #003ab6;
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
  width: min(90vw, 780px);
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
  z-index: 2;
}

.envelope__photos {
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: auto;
}

.envelope__photo {
  position: absolute;
  width: calc(23.5% + 10px);
  aspect-ratio: 0.74 / 1;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);
  background: transparent;
  transition:
    left 820ms cubic-bezier(0.22, 1, 0.36, 1),
    top 820ms cubic-bezier(0.22, 1, 0.36, 1),
    transform 820ms cubic-bezier(0.22, 1, 0.36, 1);
  will-change: left, top, transform;
}

.envelope__photo-image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.envelope__photo-link {
  display: block;
  pointer-events: none;
  overflow: hidden;
}

.envelope__photo-link::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.35);
  opacity: 0;
  transition: opacity 160ms ease;
  pointer-events: none;
}

.envelope.is-open .envelope__photo-link {
  pointer-events: auto;
}

.envelope.is-open .envelope__photo-link:hover::after,
.envelope.is-open .envelope__photo-link:focus-visible::after {
  opacity: 1;
}

.envelope__photo--1 {
  left: 30%;
  top: 29%;
  transform: rotate(-3deg);
}

.envelope__photo--2 {
  left: 18%;
  top: 35.5%;
  transform: rotate(-12deg);
}

.envelope__photo--3 {
  left: 32%;
  top: 37.5%;
  transform: rotate(-6deg);
}

.envelope__photo--4 {
  left: 42%;
  top: 28%;
  transform: rotate(3deg);
}

.envelope__photo--5 {
  left: 46%;
  top: 37%;
  transform: rotate(7deg);
}

.envelope__photo--6 {
  left: 57%;
  top: 30%;
  transform: rotate(8deg);
}

.envelope.is-open .envelope__photos {
  z-index: 6;
}

.envelope.is-open .envelope__photo--1 {
  left: -28%;
  top: 58%;
  transform: rotate(-3deg);
}

.envelope.is-open .envelope__photo--2 {
  left: -33%;
  top: -3%;
  transform: rotate(-12deg);
}

.envelope.is-open .envelope__photo--3 {
  left: 8%;
  top: -8%;
  transform: rotate(-6deg);
}

.envelope.is-open .envelope__photo--4 {
  left: 100%;
  top: 58%;
  transform: rotate(3deg);
}

.envelope.is-open .envelope__photo--5 {
  left: 56%;
  top: -8%;
  transform: rotate(7deg);
}

.envelope.is-open .envelope__photo--6 {
  left: 104%;
  top: -4%;
  transform: rotate(8deg);
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
  z-index: 4;
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
