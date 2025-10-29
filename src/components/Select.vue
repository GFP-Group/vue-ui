<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { BiChevronDown } from 'vue-icons-plus/bi'

type Option = string | { label: string; value: string | number; disabled?: boolean }

const props = withDefaults(
  defineProps<{
    options?: Option[]
    modelValue?: string | number
    placeholder?: string
    name?: string
    disabled?: boolean
    solid?: boolean
    darkDarker?: boolean
    selectClass?: string
    discColor?: string
    onChange?: (value: string | number, ev: Event) => void
  }>(),
  {
    options: () => [],
    disabled: false,
    solid: false,
    darkDarker: false,
    placeholder: '',
  }
)

const attrs = useAttrs()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
  (e: 'change', value: string | number, ev: Event): void
}>()

const normalized = computed<{ label: string; value: string | number; disabled?: boolean }[]>(() =>
  props.options.map((o) => (typeof o === 'string' ? { label: o, value: o } : o))
)

const isPlaceholder = computed(
  () => props.modelValue === undefined || props.modelValue === null || props.modelValue === ''
)

const discColorValue = computed(() => {
  if (!props.discColor) return undefined

  const colorMap: Record<string, string> = {
    success: '#10b981', // green
    danger: '#ef4444', // red
    warning: '#f59e0b', // orange/amber
  }

  return colorMap[props.discColor] || props.discColor
})

const selectClasses = computed(() => {
  const classList: string[] = [
    'w-full',
    'appearance-none',
    'rounded-md',
    'border',
    'py-[13px]',
    discColorValue.value ? 'pl-9' : 'pl-4',
    'pr-12',
    'text-sm',
    'font-normal',
    isPlaceholder.value ? 'text-dark/50 dark:text-white/50' : 'text-dark dark:text-white',
    'placeholder:text-dark-6',
    'outline-none',
    'transition',
    props.disabled ? 'cursor-not-allowed opacity-60' : '',
  ]

  // Background style
  if (props.solid) {
    classList.push('bg-gray-2', 'focus:bg-gray-2.5')
    if (props.darkDarker) {
      classList.push('dark:bg-[#0F131C]', 'focus:dark:bg-[#06070A]', 'focus:dark:border-[#06070A]')
    } else {
      classList.push('dark:bg-dark', 'focus:dark:bg-dark-darker', 'focus:dark:border-dark-darker')
    }
  } else {
    classList.push('bg-transparent')
  }

  // Border color logic
  if (props.solid) {
    classList.push('border-gray-2', 'focus:border-gray-2.5')
    if (props.darkDarker) {
      classList.push('dark:border-[#0F131C]', 'focus:dark:border-[#06070A]')
    } else {
      classList.push('dark:border-dark', 'focus:dark:border-dark-darker')
    }
  } else {
    // Neutral borders identical to Input.vue
    classList.push(
      'border-gray-7',
      'focus:border-black',
      'active:border-black',
      'dark:border-gray-600',
      'dark:focus:border-gray-300'
    )
  }

  if (props.selectClass) classList.push(props.selectClass)

  return classList.join(' ')
})

const handleChange = (ev: Event) => {
  const t = ev.target as HTMLSelectElement
  const value = t.value
  emit('update:modelValue', value)
  emit('change', value, ev)
  props.onChange?.(value, ev)
}
</script>

<template>
  <div class="relative inline-block w-full" :class="attrs.class">
    <select
      :name="name"
      :value="(props.modelValue ?? '') as any"
      :disabled="props.disabled"
      :class="selectClasses"
      @change="handleChange"
    >
      <option v-if="props.placeholder" value="" disabled selected hidden>
        {{ props.placeholder }}
      </option>
      <option
        v-for="opt in normalized"
        :key="String(opt.value)"
        :value="opt.value"
        :disabled="opt.disabled"
      >
        {{ opt.label }}
      </option>
    </select>
    <!-- Color disc indicator -->
    <span
      v-if="discColorValue"
      class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full"
      :style="{ backgroundColor: discColorValue }"
    />
    <!-- Chevron icon -->
    <span
      class="pointer-events-none absolute right-0 top-0 flex h-full w-12 items-center justify-center text-dark-5 dark:text-gray-500 opacity-80"
      :class="props.disabled ? 'opacity-50' : ''"
    >
      <BiChevronDown size="19" />
    </span>
  </div>
</template>
