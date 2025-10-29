<script setup lang="ts">
import { computed, getCurrentInstance } from 'vue'

const props = withDefaults(
  defineProps<{
    to?: string
    href?: string
    underline?: boolean
    className?: string
  }>(),
  {
    underline: false,
    className: '',
  }
)

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const instance = getCurrentInstance()
const router = instance?.appContext.config.globalProperties.$router

const isExternal = computed(() => {
  if (!props.href) return false
  return props.href.startsWith('http://') || props.href.startsWith('https://')
})

const baseClasses = computed(() => {
  const classes = [
    'text-primary',
    'hover:text-primary-dark',
    'dark:brightness-110',
    'transition-colors',
    'cursor-pointer',
    'inline-flex',
    'items-center',
  ]

  if (props.underline) {
    classes.push('underline')
  } else {
    classes.push('hover:underline')
  }

  if (props.className) {
    classes.push(props.className)
  }

  return classes.join(' ')
})

const handleClick = (e: MouseEvent) => {
  emit('click', e)

  if (props.to && router) {
    e.preventDefault()
    router.push(props.to)
  }
}
</script>

<template>
  <!-- External link or standard href -->
  <a
    v-if="props.href"
    :href="props.href"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    :class="baseClasses"
  >
    <slot />
  </a>

  <!-- Router navigation -->
  <a v-else-if="props.to" :class="baseClasses" @click="handleClick">
    <slot />
  </a>

  <!-- Fallback (shouldn't normally happen) -->
  <span v-else :class="baseClasses">
    <slot />
  </span>
</template>
