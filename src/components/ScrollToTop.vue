<script setup lang="ts">

const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
}
</script>

<template>
  <div class="scroll-top">
    <button type="button" class="scroll-top__button" @click="scrollToTop" aria-label="Scroll to top">
      <span class="scroll-top__label">[ SCROLL TO TOP ]</span>
    </button>
  </div>
</template>

<style scoped>
.scroll-top {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 32px 0 48px;
}

.scroll-top__button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  border: 0;
  background: transparent;
  color: #000;
  text-transform: uppercase;
  cursor: pointer;
  transition: color 160ms ease;
}

.scroll-top__button:hover {
  color: #003ab6;
}

.scroll-top__button:focus-visible {
  outline: 2px solid #003ab6;
  outline-offset: 4px;
}

</style>
