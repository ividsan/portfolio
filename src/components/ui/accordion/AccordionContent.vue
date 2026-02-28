<script setup lang="ts">
import type { AccordionContentProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { AccordionContent } from "reka-ui"
import { cn } from "@/lib/utils"

interface Props extends AccordionContentProps {
  class?: HTMLAttributes["class"]
}

const props = defineProps<Props>()
</script>

<template>
  <AccordionContent
    data-slot="accordion-content"
    v-bind="props"
    :class="cn('overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down', props.class)"
  >
    <div class="px-4 pb-4">
      <slot />
    </div>
  </AccordionContent>
</template>
