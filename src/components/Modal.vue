<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import Text from './Text.vue'
import { IpClose } from 'vue-icons-plus/ip'

const props = withDefaults(
  defineProps<{
    visible?: boolean
    title?: string
    fullScreen?: boolean
    disableOverlayClickClose?: boolean
    beforeOpen?: () => void
    afterOpen?: () => void
    beforeClose?: () => void
    afterClose?: () => void
  }>(),
  {
    visible: false,
    fullScreen: false,
    disableOverlayClickClose: false,
  }
)

const emit = defineEmits<{ (e: 'close'): void }>()

const handleOverlayClick = () => {
  if (!props.disableOverlayClickClose) {
    emit('close')
  }
}

const panelRef = ref<HTMLDivElement | null>(null)

const openClasses = computed(() =>
  props.visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
)

const panelOpenClasses = computed(() =>
  props.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
)

const panelBaseClasses = computed(() =>
  props.fullScreen
    ? 'fixed inset-0 w-screen h-screen rounded-none bg-white dark:bg-dark shadow-none dark:shadow-none transition-all duration-200 transform overflow-hidden flex flex-col'
    : 'fixed top-0 md:top-[120px] bottom-0 w-[100vw] mx-0 md:w-[90vw] md:mx-[5vw] min-[1300px]:w-[1170px] min-[1300px]:mx-auto min-[1300px]:left-1/2 min-[1300px]:-translate-x-1/2 md:rounded-t-xl bg-white dark:bg-dark shadow-1 dark:shadow-card transition-all duration-200 transform overflow-hidden flex flex-col'
)

const lockScroll = () => {
  document.body.style.overflow = 'hidden'
}
const unlockScroll = () => {
  document.body.style.overflow = ''
}

const callMaybe = (fn?: unknown) => {
  if (typeof fn === 'function') {
    try {
      ;(fn as () => void)()
    } catch (e) {
      // swallow to avoid breaking transitions; user handlers log as needed
      console.error(e)
    }
  }
}

watch(
  () => props.visible,
  (open) => {
    if (open) {
      lockScroll()
      callMaybe(props.beforeOpen)
      nextTick(() => {
        const el = panelRef.value
        if (!el) {
          callMaybe(props.afterOpen)
          return
        }
        const handler = () => {
          clearTimeout(timer)
          el.removeEventListener('transitionend', handler)
          callMaybe(props.afterOpen)
        }
        const timer = setTimeout(handler, 250)
        el.addEventListener('transitionend', handler)
      })
    } else {
      callMaybe(props.beforeClose)
      nextTick(() => {
        const el = panelRef.value
        if (!el) {
          callMaybe(props.afterClose)
          unlockScroll()
          return
        }
        const handler = () => {
          clearTimeout(timer)
          el.removeEventListener('transitionend', handler)
          callMaybe(props.afterClose)
          unlockScroll()
        }
        const timer = setTimeout(handler, 250)
        el.addEventListener('transitionend', handler)
      })
    }
  }
)

onMounted(() => {})
onUnmounted(() => unlockScroll())
</script>

<template>
  <!-- Overlay -->
  <div
    class="fixed inset-0 z-40 bg-dark/70 dark:bg-[#8094BD]/40 transition-opacity duration-200"
    :class="openClasses"
    @click="handleOverlayClick"
  />

  <!-- Fixed panel: top offset 150px, bottom 0. Centered horizontally -->
  <div
    :class="openClasses"
    class="fixed inset-0 z-50 transition-opacity duration-200"
    aria-modal="true"
    role="dialog"
    @click.self="handleOverlayClick"
  >
    <div ref="panelRef" :class="[panelBaseClasses, panelOpenClasses]">
      <!-- Close button (same style/position as Drawer) -->
      <button
        class="absolute top-5 right-5 z-10 text-dark-5 hover:text-black cursor-pointer dark:text-white/80 dark:hover:text-white"
        @click="$emit('close')"
      >
        <IpClose />
      </button>

      <!-- Fixed Header -->
      <div
        v-if="props.title"
        class="flex-shrink-0 px-4 md:px-12 pt-6 md:pt-10 sm:px-8 sm:pt-8 pb-4"
      >
        <Text h2>{{ props.title }}</Text>
      </div>

      <!-- Scrollable Content -->
      <div class="flex-1 overflow-y-auto px-4 md:px-12 sm:px-8">
        <slot />
      </div>

      <!-- Fixed Footer -->
      <div
        v-if="$slots.footer"
        class="flex-shrink-0 h-16 bg-white/95 dark:bg-dark backdrop-blur flex items-center justify-end gap-3 px-4 md:px-12 sm:px-8"
      >
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
