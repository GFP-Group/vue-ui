<script setup lang="ts">
import { computed } from 'vue'

type Option = string | { label: string; value: string | number }
type RadioGroupSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const props = withDefaults(
  defineProps<{
    options?: Option[]
    modelValue?: string | number
    className?: string
    disabled?: boolean
    size?: RadioGroupSize
    onChange?: (value: string | number) => void
  }>(),
  {
    options: () => [],
    disabled: false,
    size: 'md',
  }
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
  (e: 'change', value: string | number): void
}>()

const normalized = computed<{ label: string; value: string | number }[]>(() =>
  props.options.map((o) => (typeof o === 'string' ? { label: o, value: o } : o))
)

const isActive = (val: string | number) => props.modelValue === val

const onSelect = (val: string | number) => {
  if (props.disabled) return
  emit('update:modelValue', val)
  emit('change', val)
  props.onChange?.(val)
}

const sizeClasses: Record<RadioGroupSize, string> = {
  xs: 'text-[11px] py-0.75 px-2',
  sm: 'text-xs py-1.5 px-3',
  md: 'text-sm py-2 px-5',
  lg: 'text-lg py-2.5 px-8',
  xl: 'text-xl py-4 px-9',
}

const roundingClasses: Record<RadioGroupSize, { first: string; last: string }> = {
  xs: { first: 'rounded-l-sm', last: 'rounded-r-sm' },
  sm: { first: 'rounded-l-md', last: 'rounded-r-md' },
  md: { first: 'rounded-l-md', last: 'rounded-r-md' },
  lg: { first: 'rounded-l-lg', last: 'rounded-r-lg' },
  xl: { first: 'rounded-l-[10px]', last: 'rounded-r-[10px]' },
}
</script>

<template>
  <div class="inline-flex items-center" :class="props.className">
    <button
      v-for="(opt, idx) in normalized"
      :key="String(opt.value)"
      type="button"
      class="font-medium outline-none border border-gray-7 dark:border-gray-500 cursor-pointer"
      :class="[
        // size
        sizeClasses[props.size],
        // shape
        idx === 0 ? roundingClasses[props.size].first : '-ml-px',
        idx === normalized.length - 1 ? roundingClasses[props.size].last : '',
        // state
        props.disabled ? 'opacity-60 cursor-not-allowed' : '',
        isActive(opt.value)
          ? 'bg-primary text-white border-primary hover:brightness-90 dark:border-primary'
          : 'text-black/70 dark:text-white/70 border-stroke hover:bg-gray-2 hover:text-black hover:dark:bg-gray-800 hover:dark:text-white',
      ]"
      @click="onSelect(opt.value)"
    >
      {{ opt.label }}
    </button>
  </div>
</template>
