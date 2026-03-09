<script setup lang="ts">
import { reactive, ref } from "vue"

const services = [
  "VISUAL IDENTITY / BRANDING",
  "EDITORIAL DESIGN / PRINT",
  "DIGITAL EXPERIMENTS / WEB",
  "CUSTOM ILLUSTRATION",
]

const form = reactive({
  name: "",
  surname: "",
  email: "",
  projectIdea: "",
  selectedServices: [] as string[],
  other: "",
})

const submitted = ref(false)

const toggleService = (service: string) => {
  if (form.selectedServices.includes(service)) {
    form.selectedServices = form.selectedServices.filter((item) => item !== service)
    return
  }
  form.selectedServices = [...form.selectedServices, service]
}

const handleSubmit = () => {
  submitted.value = true
}

const hasServiceSelected = () => form.selectedServices.length > 0 || form.other.trim().length > 0
</script>

<template>
  <main class="px-4 pt-4 pb-10 sm:px-10 sm:pt-10 sm:pb-24 lg:pb-40">
    <section class="contact-shell mx-auto mt-[-22px] w-full max-w-[720px] sm:mt-[6px] lg:origin-top lg:scale-[1.2]">
      <h1 class="mb-2 text-center text-[18px] leading-none font-medium uppercase sm:mb-4 sm:text-[20px]">GOT A PROJECT? LET'S TALK</h1>

      <form class="relative border border-black text-[14px] leading-none" @submit.prevent="handleSubmit">
        <div class="grid grid-cols-1 border-b border-black sm:grid-cols-2">
          <div class="group border-b border-black px-2 pt-2 pb-1 sm:border-r sm:border-b-0">
            <label for="name" class="font-medium uppercase transition-colors group-hover:text-[#002FA7] group-focus-within:text-[#002FA7]">NAME</label>
            <input
              id="name"
              v-model.trim="form.name"
              type="text"
              required
              class="mt-1 h-7 w-full border-0 bg-transparent text-[14px] leading-none sm:h-8 focus:outline-none"
            >
          </div>
          <div class="group px-2 pt-2 pb-1">
            <label for="surname" class="font-medium uppercase transition-colors group-hover:text-[#002FA7] group-focus-within:text-[#002FA7]">SURNAME</label>
            <input
              id="surname"
              v-model.trim="form.surname"
              type="text"
              required
              class="mt-1 h-7 w-full border-0 bg-transparent text-[14px] leading-none sm:h-8 focus:outline-none"
            >
          </div>
        </div>

        <div class="group border-b border-black px-2 pt-2 pb-1">
          <label for="email" class="font-medium uppercase transition-colors group-hover:text-[#002FA7] group-focus-within:text-[#002FA7]">EMAIL</label>
          <input
            id="email"
            v-model.trim="form.email"
            type="email"
            required
            class="mt-1 h-7 w-full border-0 bg-transparent text-[14px] leading-none sm:h-8 focus:outline-none"
          >
        </div>

        <div class="group border-b border-black px-2 pt-2 pb-1">
          <label for="projectIdea" class="font-medium uppercase transition-colors group-hover:text-[#002FA7] group-focus-within:text-[#002FA7]">PROJECT IDEA</label>
          <textarea
            id="projectIdea"
            v-model.trim="form.projectIdea"
            required
            class="mt-1 h-[76px] w-full resize-none border-0 bg-transparent text-[14px] leading-none sm:mt-2 sm:h-[120px] focus:outline-none"
          />
        </div>

        <div class="clip-photo" aria-hidden="true">
          <img src="/imagenes/clip 1.png" alt="" class="clip-photo__clip clip-photo__clip--default">
          <img src="/imagenes/clip 2.png" alt="" class="clip-photo__clip clip-photo__clip--hover">
        </div>

        <div class="relative min-h-[138px] px-2 pt-1 pb-2 sm:min-h-[162px] sm:pt-2 sm:pb-4">
          <div class="group pr-0 md:pr-[190px]">
            <p class="font-medium uppercase transition-colors group-hover:text-[#002FA7] group-focus-within:text-[#002FA7]">SERVICES OF INTEREST</p>

            <div class="mt-2 text-[14px] leading-[17px] uppercase sm:mt-3 sm:leading-[20px]">
            <button
              v-for="service in services"
              :key="service"
              type="button"
              class="block cursor-pointer text-left"
              @click="toggleService(service)"
            >
              [ {{ form.selectedServices.includes(service) ? "X" : " " }} ] {{ service }}
            </button>

            <label for="other" class="block">
              <span>[ {{ form.other.trim().length > 0 ? "X" : " " }} ] OTHER </span>
              <input
                id="other"
                v-model="form.other"
                type="text"
                class="w-[180px] border-b border-black bg-transparent text-[14px] leading-none sm:w-[230px] focus:outline-none"
              >
            </label>
          </div>
          </div>

          <p v-if="submitted && !hasServiceSelected()" class="mt-2 text-[18px] leading-none text-red-700">
            Debes marcar al menos un servicio u Other.
          </p>

          <button
            type="submit"
            class="absolute right-0 bottom-0 flex h-[44px] w-[180px] cursor-pointer items-start justify-start border-l border-t border-black p-1.5 text-left text-[14px] leading-none font-medium uppercase transition-colors sm:h-[52px] sm:p-2 hover:text-[#002FA7] focus:text-[#002FA7]"
          >
            SEND
          </button>
        </div>
      </form>

      <p
        v-if="submitted && (!form.name || !form.surname || !form.email || !form.projectIdea || !hasServiceSelected())"
        class="mt-3 text-[18px] leading-none text-red-700"
      >
        Completar todos los campos es obligatorio.
      </p>
    </section>
  </main>
</template>

<style scoped>
.clip-photo {
  position: absolute;
  top: -58px;
  right: -77px;
  width: 250px;
  height: 250px;
  z-index: 10;
  pointer-events: auto;
}

.clip-photo__clip {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  transition: opacity 180ms ease;
  pointer-events: auto;
}

.clip-photo__clip--hover {
  opacity: 0;
}

.clip-photo:hover .clip-photo__clip--default {
  opacity: 0;
}

.clip-photo:hover .clip-photo__clip--hover {
  opacity: 1;
}

@media (max-width: 900px) {
  .contact-shell {
    margin-top: 14px !important;
  }

  form {
    font-size: 14px !important;
  }

  input,
  textarea,
  button {
    font-size: 14px !important;
  }

  .absolute.right-0.bottom-0 {
    position: static;
    margin-top: 6px;
    width: 100%;
    border-left: 0;
  }

  .clip-photo {
    position: absolute;
    top: -44px;
    right: -10px;
    width: clamp(120px, 32vw, 170px);
    height: clamp(120px, 32vw, 170px);
    margin: 0;
    transform: none;
  }
}

</style>








