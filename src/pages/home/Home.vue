<script setup lang="ts">
import Footer from "./components/Footer.vue"
</script>

<template>
  <div>
    <router-view />

    <main class="relative flex min-h-[calc(100vh-140px)] flex-col px-5 py-8 md:px-9">
      <section class="flex flex-1 items-center justify-center">
        <h1 class="max-w-4xl text-center text-[42px] leading-[1.05] font-normal tracking-tight md:text-[72px]">
          Welcome to my overthinking corner.
          <br>
          Take a coffee and enjoy...
        </h1>
      </section>
    </main>
    <Footer />
  </div>
</template>
