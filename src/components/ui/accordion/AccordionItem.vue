<script setup lang="ts">
import type { AccordionItemProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { AccordionItem } from "reka-ui"
import { cn } from "@/lib/utils"

interface Props extends AccordionItemProps {
  class?: HTMLAttributes["class"]
}

const props = defineProps<Props>()
</script>

<template>
  <AccordionItem
    data-slot="accordion-item"
    v-bind="props"
    :class="cn('border-b border-neutral-200 last:border-b-0', props.class)"
  >
    <slot />
  </AccordionItem>
</template>
