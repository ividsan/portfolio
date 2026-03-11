<script setup lang="ts">
import ScrollToTop from "@/components/ScrollToTop.vue"
import { onBeforeUnmount, onMounted, ref } from "vue"

type Dot = {
  gx: number
  gy: number
  baseX: number
  baseY: number
  radius: number
  phase: number
  speed: number
  amp: number
  offsetX: number
  offsetY: number
}

const canvasRef = ref<HTMLCanvasElement | null>(null)
const CIRCLE_RADIUS = 17.5
const MIN_CIRCLE_RADIUS = 5.5
const BASE_STEP_FOR_FULL_RADIUS = 18
const MIN_STEP = 8
const RADIUS_SCALE_CURVE = 1.15
const PORTFOLIO_VERTICAL_SHIFT = -70
const LETTER_GAP = 1

const glyphMap: Record<string, { rows: string[]; gap: number; extras?: Array<{ x: number; y: number }> }> = {
  P: {
    rows: ["1111", "1..1", "1..1", "1111", "1...", "1...", "1..."],
    gap: 1,
  },
  O: {
    rows: [".111.", "1...1", "1...1", "1...1", "1...1", "1...1", ".111."],
    gap: 1,
  },
  R: {
    rows: ["1111", "1..1", "1..1", "1111", "1...", "1...", "1..."],
    gap: 1,
    extras: [{ x: 3, y: 5 }, { x: 4, y: 6 }],
  },
  T: {
    rows: ["11111", "..1..", "..1..", "..1..", "..1..", "..1..", "..1.."],
    gap: 1,
  },
  F: {
    rows: ["1111", "1...", "1...", "111.", "1...", "1...", "1..."],
    gap: 1,
  },
  L: {
    rows: ["1...", "1...", "1...", "1...", "1...", "1...", "1111"],
    gap: 2,
  },
  I: {
    rows: ["111", ".1.", ".1.", ".1.", ".1.", ".1.", "111"],
    gap: 1,
  },
}

let dots: Dot[] = []
let animationFrame = 0
let resizeObserver: ResizeObserver | null = null

let viewWidth = 0
let viewHeight = 0
let dotRadius = 8

const pointer = {
  x: 0,
  y: 0,
  active: false,
}

const photoButtons = [
  { left: "36.95%", top: "20.59%", skill: "VISUAL IDENTITY" },
  { left: "83.88%", top: "18.61%", skill: "BRANDING" },
  { left: "6.9%", top: "38.6%", skill: "PACKAGING" },
  { left: "88.05%", top: "56.44%", skill: "EDITORIAL" },
  { left: "19.8%", top: "86.5%", skill: "ILUSTRATION" },
  { left: "67.2%", top: "69.70%", skill: "GRAPHIC DESIGN" },
]
const hoveredSkillIndex = ref<number | null>(null)

type GlyphPoint = {
  gx: number
  gy: number
  letter: string
  letterIndex: number
}

const buildWordPoints = (word: string) => {
  const points: GlyphPoint[] = []
  let cursorX = 0

  for (let i = 0; i < word.length; i += 1) {
    const char = word[i]
    const gapAfter = i === word.length - 3 ? LETTER_GAP : (i >= word.length - 2 ? 0.5 : LETTER_GAP)

    if (char === "P") {
      const pPoints: Array<{ x: number; y: number }> = [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 },
        { x: 0, y: 1 }, { x: 4, y: 1 },
        { x: 0, y: 2 }, { x: 4, y: 2 },
        { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 },
        { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 },
      ]

      for (const point of pPoints) {
        points.push({ gx: cursorX + point.x, gy: point.y, letter: "P", letterIndex: i })
      }

      cursorX += 5 + gapAfter
      continue
    }

    if (char === "O") {
      const oPoints: Array<{ x: number; y: number }> = [
        { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 },
        { x: 0, y: 1.2 }, { x: 0, y: 2.4 }, { x: 0, y: 3.6 }, { x: 0, y: 4.8 },
        { x: 5, y: 1.2 }, { x: 5, y: 2.4 }, { x: 5, y: 3.6 }, { x: 5, y: 4.8 },
        { x: 1, y: 6 }, { x: 2, y: 6 }, { x: 3, y: 6 }, { x: 4, y: 6 },
      ]

      for (const point of oPoints) {
        points.push({ gx: cursorX + point.x, gy: point.y, letter: "O", letterIndex: i })
      }

      cursorX += 6 + gapAfter
      continue
    }

    if (char === "R") {
      const rPoints: Array<{ x: number; y: number }> = [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 },
        { x: 0, y: 1 }, { x: 4, y: 1 },
        { x: 0, y: 2 }, { x: 4, y: 2 },
        { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 },
        { x: 0, y: 4 },
        { x: 0, y: 5 },
        { x: 0, y: 6 },
        { x: 2, y: 4 }, { x: 3, y: 5 }, { x: 4, y: 6 },
      ]

      for (const point of rPoints) {
        points.push({ gx: cursorX + point.x, gy: point.y, letter: "R", letterIndex: i })
      }

      cursorX += 5 + gapAfter
      continue
    }

    if (char === "T") {
      const tPoints: Array<{ x: number; y: number }> = [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 },
        { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }, { x: 2, y: 5 }, { x: 2, y: 6 },
      ]

      for (const point of tPoints) {
        points.push({ gx: cursorX + point.x, gy: point.y, letter: "T", letterIndex: i })
      }

      cursorX += 5 + gapAfter
      continue
    }

    const glyph = glyphMap[char]
    if (!glyph) {
      continue
    }

    for (let y = 0; y < glyph.rows.length; y += 1) {
      const row = glyph.rows[y]
      for (let x = 0; x < row.length; x += 1) {
        if (row[x] === "1") {
          points.push({ gx: cursorX + x, gy: y, letter: char, letterIndex: i })
        }
      }
    }

    if (glyph.extras) {
      for (const extraDot of glyph.extras) {
        points.push({ gx: cursorX + extraDot.x, gy: extraDot.y, letter: char, letterIndex: i })
      }
    }

    cursorX += glyph.rows[0].length + gapAfter
  }

  return points
}

const setCanvasSize = (canvas: HTMLCanvasElement) => {
  const dpr = window.devicePixelRatio || 1
  const rect = canvas.getBoundingClientRect()
  viewWidth = rect.width
  viewHeight = rect.height
  canvas.width = Math.max(1, Math.floor(viewWidth * dpr))
  canvas.height = Math.max(1, Math.floor(viewHeight * dpr))
  const ctx = canvas.getContext("2d")
  if (!ctx) {
    return
  }
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
}

const layoutDots = () => {
  const points = buildWordPoints("PORTFOLIO")
  const minGX = Math.min(...points.map((point) => point.gx))
  const maxGX = Math.max(...points.map((point) => point.gx))
  const minGY = Math.min(...points.map((point) => point.gy))
  const maxGY = Math.max(...points.map((point) => point.gy))

  const gridWidth = maxGX - minGX
  const gridHeight = maxGY - minGY
  const safeSide = 26
  const usableWidth = Math.max(1, viewWidth - safeSide * 2 - CIRCLE_RADIUS * 2)
  const stepX = usableWidth / Math.max(1, gridWidth)
  const stepY = (viewHeight - 12) / (gridHeight + 1)
  const step = Math.max(MIN_STEP, Math.min(stepX, stepY, 46))
  const responsiveScale = Math.min(1, step / BASE_STEP_FOR_FULL_RADIUS)
  dotRadius = Math.max(MIN_CIRCLE_RADIUS, CIRCLE_RADIUS * Math.pow(responsiveScale, RADIUS_SCALE_CURVE))
  const letterSpacingBoost = (1 - responsiveScale) * step * 0.9
  const scaledXPoints = points.map((point) => point.gx * step + point.letterIndex * letterSpacingBoost)
  const minScaledX = Math.min(...scaledXPoints)
  const maxScaledX = Math.max(...scaledXPoints)

  const contentWidth = maxScaledX - minScaledX
  const contentHeight = gridHeight * step
  const offsetX = (viewWidth - contentWidth) / 2 - minScaledX
  const safeBottom = dotRadius * 3.1
  const safeTop = dotRadius * 0.8
  const requestedOffsetY = Math.max(safeTop - minGY * step, viewHeight - contentHeight - safeBottom - minGY * step) + PORTFOLIO_VERTICAL_SHIFT
  const motionPad = dotRadius * 0.9
  const minOffsetY = dotRadius + motionPad - minGY * step
  const maxOffsetY = viewHeight - dotRadius - motionPad - maxGY * step
  const offsetY = Math.min(Math.max(requestedOffsetY, minOffsetY), maxOffsetY)

  dots = points.map((point, index) => {
    const prev = dots[index]
    return {
      gx: point.gx,
      gy: point.gy,
      baseX: offsetX + point.gx * step + point.letterIndex * letterSpacingBoost,
      baseY: offsetY + point.gy * step,
      radius: dotRadius,
      phase: prev?.phase ?? Math.random() * Math.PI * 2,
      speed: prev?.speed ?? 0.22 + Math.random() * 0.2,
      amp: prev?.amp ?? step * (Math.random() < 0.2 ? 0.055 + Math.random() * 0.035 : 0),
      offsetX: prev?.offsetX ?? 0,
      offsetY: prev?.offsetY ?? 0,
    }
  })
}

const render = (time: number) => {
  const canvas = canvasRef.value
  const ctx = canvas?.getContext("2d")

  if (!canvas || !ctx) {
    return
  }

  ctx.clearRect(0, 0, viewWidth, viewHeight)
  ctx.fillStyle = "#0A3CAE"

  const t = time * 0.001
  const influence = dotRadius * 8.5
  const maxPush = dotRadius * 2.2

  for (const dot of dots) {
    const driftX = Math.sin(t * dot.speed + dot.phase) * dot.amp
    const driftY = Math.cos(t * dot.speed * 0.9 + dot.phase) * dot.amp

    let repelX = 0
    let repelY = 0

    if (pointer.active) {
      const dx = dot.baseX - pointer.x
      const dy = dot.baseY - pointer.y
      const dist = Math.hypot(dx, dy) || 1

      if (dist < influence) {
        const power = ((influence - dist) / influence) ** 1.7
        const force = power * maxPush
        repelX = (dx / dist) * force
        repelY = (dy / dist) * force
      }
    }

    const targetX = driftX + repelX
    const targetY = driftY + repelY
    dot.offsetX += (targetX - dot.offsetX) * 0.2
    dot.offsetY += (targetY - dot.offsetY) * 0.2

    const drawX = Math.min(Math.max(dot.baseX + dot.offsetX, dot.radius), viewWidth - dot.radius)
    const drawY = Math.min(Math.max(dot.baseY + dot.offsetY, dot.radius), viewHeight - dot.radius)

    ctx.beginPath()
    ctx.arc(drawX, drawY, dot.radius, 0, Math.PI * 2)
    ctx.fill()
  }

  animationFrame = window.requestAnimationFrame(render)
}

const handlePointerMove = (event: PointerEvent) => {
  const canvas = canvasRef.value
  if (!canvas) {
    return
  }
  const rect = canvas.getBoundingClientRect()
  pointer.x = event.clientX - rect.left
  pointer.y = event.clientY - rect.top
  pointer.active = true
}

const handlePointerLeave = () => {
  pointer.active = false
}

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) {
    return
  }

  setCanvasSize(canvas)
  layoutDots()
  animationFrame = window.requestAnimationFrame(render)

  resizeObserver = new ResizeObserver(() => {
    setCanvasSize(canvas)
    layoutDots()
  })
  resizeObserver.observe(canvas)
})

onBeforeUnmount(() => {
  window.cancelAnimationFrame(animationFrame)
  resizeObserver?.disconnect()
})
</script>

<template>
  <main class="home-page">
    <section class="home-hero px-4 py-8 md:px-10">
      <section class="intro">
        <p class="text-center text-[18px] leading-tight uppercase">
          WELCOME TO MY VISUAL DIARY.
          <br>
          A COLLECTION OF
          <br>
          EXPERIMENTS, STORIES, AND DESIGN.
        </p>
      </section>

      <section class="logo-zone">
        <canvas
          ref="canvasRef"
          class="portfolio-canvas"
          aria-label="Interactive portfolio circles"
          @pointermove="handlePointerMove"
          @pointerleave="handlePointerLeave"
        />
      </section>
    </section>

    <section class="home-scroll-screen" aria-label="Second home screen">
      <img
        src="/imagenes/guapa.png"
        alt="Guapa"
        class="home-scroll-screen__image"
      >
      <div class="home-scroll-screen__buttons" aria-label="Image buttons">
        <button
          v-for="(item, index) in photoButtons"
          :key="`photo-btn-${index}`"
          type="button"
          class="home-scroll-screen__button"
          :class="{ 'home-scroll-screen__button--active': hoveredSkillIndex === index }"
          :style="{ left: item.left, top: item.top }"
          :aria-label="item.skill"
          @mouseenter="hoveredSkillIndex = index"
          @mouseleave="hoveredSkillIndex = null"
          @focus="hoveredSkillIndex = index"
          @blur="hoveredSkillIndex = null"
        />

        <p
          v-if="hoveredSkillIndex !== null"
          class="home-scroll-screen__skill"
          :style="{
            left: photoButtons[hoveredSkillIndex].left,
            top: photoButtons[hoveredSkillIndex].top,
          }"
        >
          [ {{ photoButtons[hoveredSkillIndex].skill }} ]
        </p>
      </div>
    </section>

    <ScrollToTop />
  </main>
</template>

<style scoped>
.home-page {
  width: 100%;
  background: #fff;
  scroll-snap-type: y mandatory;
}

.home-hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  scroll-snap-align: start;
  scroll-snap-stop: always;
}

.intro {
  flex: 0 0 auto;
  min-height: clamp(220px, 44vh, 410px);
  display: grid;
  place-items: center;
  padding-top: clamp(42px, 7vw, 90px);
  padding-bottom: clamp(14px, 2vw, 28px);
}

.logo-zone {
  height: clamp(250px, 38vw, 380px);
  width: 100%;
  margin-top: auto;
  margin-bottom: clamp(0px, 0.5vw, 8px);
}

.home-scroll-screen {
  --hotspot-size: clamp(28px, 5.4vw, 50px);
  --skill-font-size: clamp(10px, 1.5vw, 16px);
  --skill-offset: calc(var(--hotspot-size) * -0.95);
  --footer-gap: clamp(14px, 2.5vw, 30px);
  width: 100%;
  min-height: 100dvh;
  height: 100dvh;
  background: #fff;
  overflow: hidden;
  position: relative;
  scroll-snap-align: start;
  scroll-snap-stop: always;
}

.home-scroll-screen__image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center top;
  transform: translateY(calc(-1 * var(--footer-gap)));
}

.home-scroll-screen__buttons {
  position: absolute;
  inset: 0;
  z-index: 2;
  transform: translateY(calc(-1 * var(--footer-gap)));
}

.home-scroll-screen__button {
  position: absolute;
  width: var(--hotspot-size);
  height: var(--hotspot-size);
  border: 0;
  border-radius: 9999px;
  background: #fff;
  transform: translate(-50%, -50%);
  transition: background-color 140ms ease;
}

.home-scroll-screen__button--active {
  background: #0a3cae;
}

.home-scroll-screen__skill {
  position: absolute;
  transform: translate(-50%, var(--skill-offset));
  color: #0a3cae;
  font-size: var(--skill-font-size);
  line-height: 1;
  white-space: nowrap;
  text-transform: uppercase;
  pointer-events: none;
}

@media (max-width: 1024px) {
  .home-scroll-screen {
    --hotspot-size: clamp(24px, 6vw, 42px);
  }
}

@media (max-width: 640px) {
  .home-scroll-screen {
    --hotspot-size: clamp(20px, 7.6vw, 34px);
    --skill-font-size: clamp(9px, 2.7vw, 13px);
  }

  .home-hero {
    padding-top: 24px;
  }

  .home-scroll-screen__image,
  .home-scroll-screen__buttons {
    transform: none;
  }
}

.portfolio-canvas {
  width: 100%;
  height: 100%;
  display: block;
  touch-action: none;
}
</style>
