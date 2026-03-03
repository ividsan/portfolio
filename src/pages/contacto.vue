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
  <main class="px-10 pt-10 pb-6">
    <section class="mx-auto w-full max-w-[720px]">
      <h1 class="mb-4 text-center text-[20px] leading-none font-medium uppercase">GOT A PROJECT? LET'S TALK</h1>

      <form class="border border-black text-[14px] leading-none" @submit.prevent="handleSubmit">
        <div class="grid grid-cols-2 border-b border-black">
          <div class="group border-r border-black px-2 pt-2 pb-1">
            <label for="name" class="font-medium uppercase transition-colors group-hover:text-[#002FA7] group-focus-within:text-[#002FA7]">NAME</label>
            <input
              id="name"
              v-model.trim="form.name"
              type="text"
              required
              class="mt-1 h-8 w-full border-0 bg-transparent text-[14px] leading-none focus:outline-none"
            >
          </div>
          <div class="group px-2 pt-2 pb-1">
            <label for="surname" class="font-medium uppercase transition-colors group-hover:text-[#002FA7] group-focus-within:text-[#002FA7]">SURNAME</label>
            <input
              id="surname"
              v-model.trim="form.surname"
              type="text"
              required
              class="mt-1 h-8 w-full border-0 bg-transparent text-[14px] leading-none focus:outline-none"
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
            class="mt-1 h-8 w-full border-0 bg-transparent text-[14px] leading-none focus:outline-none"
          >
        </div>

        <div class="group border-b border-black px-2 pt-2 pb-1">
          <label for="projectIdea" class="font-medium uppercase transition-colors group-hover:text-[#002FA7] group-focus-within:text-[#002FA7]">PROJECT IDEA</label>
          <textarea
            id="projectIdea"
            v-model.trim="form.projectIdea"
            required
            class="mt-2 h-[120px] w-full resize-none border-0 bg-transparent text-[14px] leading-none focus:outline-none"
          />
        </div>

        <div class="relative min-h-[162px] px-2 pt-2 pb-4">
          <div class="group pr-[190px]">
            <p class="font-medium uppercase transition-colors group-hover:text-[#002FA7] group-focus-within:text-[#002FA7]">SERVICES OF INTEREST</p>

            <div class="mt-3 text-[14px] leading-[20px] uppercase">
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
                class="w-[230px] border-b border-black bg-transparent text-[14px] leading-none focus:outline-none"
              >
            </label>
          </div>
          </div>

          <p v-if="submitted && !hasServiceSelected()" class="mt-2 text-[18px] leading-none text-red-700">
            Debes marcar al menos un servicio u Other.
          </p>

          <button
            type="submit"
            class="absolute right-0 bottom-0 flex h-[52px] w-[180px] cursor-pointer items-start justify-start border-l border-t border-black p-2 text-left text-[14px] leading-none font-medium uppercase transition-colors hover:text-[#002FA7] focus:text-[#002FA7]"
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
@media (max-width: 900px) {
  form {
    font-size: 14px !important;
  }

  input,
  textarea,
  button {
    font-size: 14px !important;
  }

  .pr-\[190px\] {
    padding-right: 0;
  }

  .absolute.right-0.bottom-0 {
    position: static;
    margin-top: 12px;
    width: 100%;
    border-left: 0;
  }
}
</style>
