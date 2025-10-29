<script setup lang="ts">
import { computed, useAttrs } from 'vue'

const props = withDefaults(
  defineProps<{
    variant?: 'light' | 'dark'
    invert?: boolean
    color?: string
  }>(),
  {
    variant: 'light',
    invert: false,
  }
)

const attrs = useAttrs()

const spinnerClasses = computed(() => {
  const baseClasses = ['animate-spin']
  // If no class provided, use default size
  if (!attrs.class) {
    baseClasses.push('w-8', 'h-8')
  } else {
    baseClasses.push(attrs.class as string)
  }
  return baseClasses
})

const colors = computed(() => {
  // If custom color is provided, use it for the spinner
  if (props.color) {
    return {
      ring: props.variant === 'dark' ? 'rgba(255, 255, 255, 0.2)' : '#E5E7EB',
      spinner: props.color,
    }
  }

  if (props.invert) {
    return {
      ring: 'rgba(0, 0, 0, 0.2)',
      spinner: 'rgba(0, 0, 0, 1)',
    }
  }
  if (props.variant === 'dark') {
    return {
      ring: 'rgba(255, 255, 255, 0.2)',
      spinner: 'rgba(255, 255, 255, 1)',
    }
  }
  return {
    ring: '#E5E7EB',
    spinner: '#168ac9', // Use Tailwind primary color
  }
})
</script>

<template>
  <svg viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg" :class="spinnerClasses">
    <circle cx="20" cy="20.5" r="18" :stroke="colors.ring" stroke-width="4" />
    <mask id="spinner-mask" fill="white">
      <path
        d="M38.0028 20.5C39.1058 20.5 40.0103 19.6036 39.9004 18.5061C39.5397 14.9057 38.2071 11.457 36.0279 8.53735C33.4491 5.08217 29.8228 2.55283 25.6895 1.32633C21.5562 0.0998324 17.1372 0.241843 13.0912 1.7312C9.67218 2.98973 6.67421 5.15341 4.40811 7.97427C3.71731 8.83418 3.9865 10.0789 4.91099 10.6805C5.83548 11.2821 7.06377 11.0105 7.77579 10.1681C9.55682 8.06082 11.8606 6.44059 14.471 5.47969C17.709 4.28779 21.2454 4.17414 24.5532 5.15568C27.861 6.13723 30.7631 8.16141 32.8269 10.9265C34.4907 13.1557 35.5378 15.7703 35.8812 18.5079C36.0185 19.6024 36.8998 20.5 38.0028 20.5Z"
      />
    </mask>
    <path
      d="M38.0028 20.5C39.1058 20.5 40.0103 19.6036 39.9004 18.5061C39.5397 14.9057 38.2071 11.457 36.0279 8.53735C33.4491 5.08217 29.8228 2.55283 25.6895 1.32633C21.5562 0.0998324 17.1372 0.241843 13.0912 1.7312C9.67218 2.98973 6.67421 5.15341 4.40811 7.97427C3.71731 8.83418 3.9865 10.0789 4.91099 10.6805C5.83548 11.2821 7.06377 11.0105 7.77579 10.1681C9.55682 8.06082 11.8606 6.44059 14.471 5.47969C17.709 4.28779 21.2454 4.17414 24.5532 5.15568C27.861 6.13723 30.7631 8.16141 32.8269 10.9265C34.4907 13.1557 35.5378 15.7703 35.8812 18.5079C36.0185 19.6024 36.8998 20.5 38.0028 20.5Z"
      :stroke="colors.spinner"
      stroke-width="8"
      mask="url(#spinner-mask)"
    />
  </svg>
</template>
