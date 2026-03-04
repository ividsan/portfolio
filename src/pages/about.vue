<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive, ref } from "vue"

type ArrowDot = {
  x: number
  y: number
  ox: number
  oy: number
  phase: number
}

const dots = reactive<ArrowDot[]>([
  { x: 0, y: 56, ox: 0, oy: 0, phase: Math.random() * Math.PI * 2 },
  { x: 28, y: 56, ox: 0, oy: 0, phase: Math.random() * Math.PI * 2 },
  { x: 56, y: 56, ox: 0, oy: 0, phase: Math.random() * Math.PI * 2 },
  { x: 84, y: 56, ox: 0, oy: 0, phase: Math.random() * Math.PI * 2 },
  { x: 112, y: 56, ox: 0, oy: 0, phase: Math.random() * Math.PI * 2 },
  { x: 140, y: 56, ox: 0, oy: 0, phase: Math.random() * Math.PI * 2 },
  { x: 84, y: 0, ox: 0, oy: 0, phase: Math.random() * Math.PI * 2 },
  { x: 112, y: 28, ox: 0, oy: 0, phase: Math.random() * Math.PI * 2 },
  { x: 112, y: 84, ox: 0, oy: 0, phase: Math.random() * Math.PI * 2 },
  { x: 84, y: 112, ox: 0, oy: 0, phase: Math.random() * Math.PI * 2 },
])

const arrowRef = ref<HTMLElement | null>(null)
const pointer = reactive({
  x: 0,
  y: 0,
  active: false,
})

let frame = 0

const tick = (time: number) => {
  const arrow = arrowRef.value
  if (!arrow) {
    frame = requestAnimationFrame(tick)
    return
  }

  const t = time * 0.001
  const influence = 95
  const maxPush = 15

  for (const dot of dots) {
    const driftX = Math.sin(t + dot.phase) * 0.8
    const driftY = Math.cos(t * 0.9 + dot.phase) * 0.8

    let repelX = 0
    let repelY = 0

    if (pointer.active) {
      const dx = dot.x - pointer.x
      const dy = dot.y - pointer.y
      const dist = Math.hypot(dx, dy) || 1
      if (dist < influence) {
        const force = (((influence - dist) / influence) ** 1.7) * maxPush
        repelX = (dx / dist) * force
        repelY = (dy / dist) * force
      }
    }

    const tx = driftX + repelX
    const ty = driftY + repelY
    dot.ox += (tx - dot.ox) * 0.2
    dot.oy += (ty - dot.oy) * 0.2
  }

  frame = requestAnimationFrame(tick)
}

const handlePointerMove = (event: PointerEvent) => {
  const arrow = arrowRef.value
  if (!arrow) {
    return
  }
  const rect = arrow.getBoundingClientRect()
  pointer.x = event.clientX - rect.left
  pointer.y = event.clientY - rect.top
  pointer.active = true
}

const handlePointerLeave = () => {
  pointer.active = false
}

onMounted(() => {
  frame = requestAnimationFrame(tick)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(frame)
})
</script>

<template>
  <main class="about-page px-5 py-8 md:px-9">
    <button
      ref="arrowRef"
      type="button"
      class="about-arrow"
      aria-label="Next"
      @pointermove="handlePointerMove"
      @pointerleave="handlePointerLeave"
    >
      <span
        v-for="(dot, index) in dots"
        :key="`about-arrow-dot-${index}`"
        class="about-arrow__dot"
        :style="{
          transform: `translate(${dot.x + dot.ox}px, ${dot.y + dot.oy}px)`,
        }"
      />
    </button>
  </main>
</template>

<style scoped>
.about-page {
  position: relative;
  min-height: 70vh;
}

.about-arrow {
  position: absolute;
  right: clamp(26px, 4vw, 50px);
  bottom: clamp(30px, 5vh, 56px);
  width: 170px;
  height: 130px;
  border: 0;
  background: transparent;
  padding: 0;
  cursor: pointer;
}

.about-arrow:focus-visible {
  outline: 2px solid #0a3cae;
  outline-offset: 4px;
}

.about-arrow__dot {
  position: absolute;
  width: 19px;
  height: 19px;
  border-radius: 9999px;
  background: #0a3cae;
  left: 0;
  top: 0;
}
</style>
