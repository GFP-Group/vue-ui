<script setup lang="ts">
import { inject, computed } from 'vue'

const props = withDefaults(
  defineProps<{
    noHover?: boolean
  }>(),
  {
    noHover: false,
  }
)

// Check if we're inside a TableHead component
const isTableHead = inject('isTableHead', false)

// Disable hover if inside TableHead or if noHover prop is true
const shouldDisableHover = computed(() => props.noHover || isTableHead)

const rowClasses = computed(() => {
  const baseClasses = 'border-b border-gray-200 dark:border-dark-3 last:border-b-0'
  const hoverClasses = shouldDisableHover.value ? '' : 'hover:bg-gray-50 dark:hover:bg-dark-3/40'
  return `${baseClasses} ${hoverClasses}`
})
</script>

<template>
  <tr :class="rowClasses">
    <slot />
  </tr>
</template>
