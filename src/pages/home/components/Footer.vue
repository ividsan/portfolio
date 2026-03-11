<script setup lang="ts">
import { Instagram, Linkedin } from "lucide-vue-next"
</script>

<template>
  <footer class="bg-white px-4 pb-10 text-black md:px-10">
    <div class="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:items-end">
      <div>
        <p class="text-[clamp(12px,3.6vw,14.67px)] leading-none font-normal uppercase">DON'T BE A STRANGER, SAY HI!</p>
        <a
          href="mailto:irenevidalsanchis@gmail.com"
          class="mt-3 inline-block text-[clamp(14px,4.2vw,16px)] leading-none font-normal break-all transition-colors hover:text-[#002FA7] md:mt-4 md:break-normal"
        >
          irenevidalsanchis@gmail.com
        </a>
      </div>

      <div class="flex flex-wrap items-center justify-start gap-x-6 gap-y-2 md:justify-end md:gap-10">
        <a
          href="https://www.behance.net/"
          target="_blank"
          rel="noreferrer"
          class="footer-social text-[clamp(12px,3.4vw,13.33px)] leading-none font-normal uppercase transition-colors hover:text-[#002FA7]"
        >
          <span class="footer-social__label">[ BEHANCE ]</span>
          <span class="footer-social__icon footer-social__icon--behance" aria-hidden="true">Be</span>
        </a>
        <a
          href="https://linkedin.com/in/irenevidal"
          target="_blank"
          rel="noreferrer"
          class="footer-social text-[clamp(12px,3.4vw,13.33px)] leading-none font-normal uppercase transition-colors hover:text-[#002FA7]"
        >
          <span class="footer-social__label">[ LINKEDIN ]</span>
          <Linkedin class="footer-social__icon" aria-hidden="true" />
        </a>
        <a
          href="https://instagram.com/ireneevidal"
          target="_blank"
          rel="noreferrer"
          class="footer-social text-[clamp(12px,3.4vw,13.33px)] leading-none font-normal uppercase transition-colors hover:text-[#002FA7]"
        >
          <span class="footer-social__label">[ INSTAGRAM ]</span>
          <Instagram class="footer-social__icon" aria-hidden="true" />
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-social__icon {
  display: none;
  width: 18px;
  height: 18px;
}

.footer-social__icon--behance {
  display: none;
  width: 20px;
  height: 20px;
  border: 1px solid currentColor;
  border-radius: 4px;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  font-weight: 600;
  letter-spacing: 0.02em;
}

@media (max-width: 640px) {
  .footer-social__label {
    display: none;
  }

  .footer-social__icon {
    display: inline-flex;
  }

  .footer-social__icon--behance {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
