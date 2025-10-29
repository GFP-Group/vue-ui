<script setup lang="ts">
import { computed, ref } from 'vue'
import Text from './Text.vue'
import IconButton from './IconButton.vue'
import { AiOutlineMinus, AiOutlinePlus } from 'vue-icons-plus/ai'

const props = withDefaults(
  defineProps<{
    title?: string
    titleType?: 'title' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    class?: string
    darkDarker?: boolean
    disableBlockAppearanceMobile?: boolean
    collapsible?: boolean
  }>(),
  {
    titleType: 'h3',
    darkDarker: false,
    disableBlockAppearanceMobile: false,
    collapsible: false,
  }
)

const isCollapsed = ref(false)

const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value
}

const baseClasses = computed(() => {
  const darkBg = props.darkDarker ? 'dark:bg-dark' : 'dark:bg-dark-2'

  // If disableBlockAppearanceMobile is true, use consistent appearance on all screens
  const borderClasses = props.disableBlockAppearanceMobile
    ? 'border-1 rounded-lg'
    : 'border-t-1 border-b-1 md:border-1 md:rounded-lg'

  return `bg-white shadow-soft ${darkBg} px-4 py-5 md:px-8 md:py-6 ${borderClasses} border-gray-200/70 dark:border-dark-3`
})

const titleProps = computed(() => {
  return {
    [props.titleType]: true,
  }
})
</script>

<template>
  <div :class="[baseClasses, props.class]" v-bind="$attrs">
    <div v-if="props.title" class="flex justify-between items-center mb-6">
      <Text v-bind="titleProps" class="text-lg font-medium dark:text-white" no-margin>{{
        props.title
      }}</Text>
      <div class="flex gap-2">
        <slot name="actions" />
        <IconButton
          v-if="props.collapsible"
          :size="32"
          class="mr-[-15px]"
          naked
          @click="toggleCollapse"
        >
          <AiOutlineMinus v-if="!isCollapsed" />
          <AiOutlinePlus v-else />
        </IconButton>
      </div>
    </div>
    <div v-if="!isCollapsed">
      <slot />
    </div>
  </div>
</template>
