<script setup lang="ts">
import type { AccordionTriggerProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { AccordionHeader, AccordionTrigger } from "reka-ui"
import { ChevronDown } from "lucide-vue-next"
import { cn } from "@/lib/utils"

interface Props extends AccordionTriggerProps {
  class?: HTMLAttributes["class"]
  headerClass?: HTMLAttributes["class"]
}

const props = defineProps<Props>()
</script>

<template>
  <AccordionHeader :class="props.headerClass">
    <AccordionTrigger
      data-slot="accordion-trigger"
      v-bind="props"
      :class="cn('group flex w-full items-center justify-between px-4 py-4 text-left text-sm font-medium uppercase tracking-wider', props.class)"
    >
      <slot />
      <ChevronDown class="h-4 w-4 shrink-0 text-neutral-500 transition-transform duration-200 group-data-[state=open]:rotate-180" />
    </AccordionTrigger>
  </AccordionHeader>
</template>
