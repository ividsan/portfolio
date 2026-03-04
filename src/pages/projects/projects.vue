<script setup lang="ts">
import { ref } from "vue"

const isOpen = ref(false)

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
    <section class="projects-white-screen" aria-hidden="true" />
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

.projects-white-screen {
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
