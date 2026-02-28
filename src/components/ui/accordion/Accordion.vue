<script setup lang="ts">
import type { AccordionRootProps } from "reka-ui"
import { AccordionRoot } from "reka-ui"

defineProps<AccordionRootProps>()
</script>

<template>
  <AccordionRoot data-slot="accordion" v-bind="$props">
    <slot />
  </AccordionRoot>
</template>
