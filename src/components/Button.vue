<script setup lang="ts">
import { computed, useSlots } from 'vue'
import Spinner from './Spinner.vue'

type ButtonType = 'primary' | 'default' | 'light' | 'danger' | 'warning' | 'success'
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const props = withDefaults(
  defineProps<{
    label: string
    labelLoading?: string
    type?: ButtonType
    size?: ButtonSize
    className?: string
    onClick?: (event: globalThis.MouseEvent) => void
    primary?: boolean
    default?: boolean
    light?: boolean
    danger?: boolean
    warning?: boolean
    success?: boolean
    loading?: boolean
    disabled?: boolean
  }>(),
  {
    type: 'default',
    size: 'md',
    loading: false,
    disabled: false,
  }
)

const baseClasses =
  'border inline-flex items-center justify-center text-center font-medium transition-opacity'

const variantClasses: Record<ButtonType, string> = {
  primary:
    'bg-dark border-dark text-white dark:border-white dark:hover:bg-gray-200 dark:bg-white dark:text-dark hover:bg-dark-3',
  default:
    'border-gray-400 dark:border-dark-2 text-dark dark:text-white hover:bg-gray-100 dark:border-gray-500 dark:hover:bg-gray-700',
  light:
    'border-gray-300 dark:border-dark-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700',
  success: 'bg-green-600 border-green-600 text-white hover:brightness-115',
  danger: 'bg-red-600 border-red-600 text-white hover:brightness-115',
  warning: 'bg-yellow-500 border-yellow-500 text-white hover:brightness-115',
}

const sizeClasses: Record<ButtonSize, string> = {
  xs: 'text-[11px] py-0.75 px-2 rounded-sm',
  sm: 'text-xs py-1.5 px-3 rounded-md',
  md: 'text-sm py-2 px-5 rounded-md',
  lg: 'text-lg py-2.5 px-8 rounded-lg',
  xl: 'text-xl py-4 px-9 rounded-[10px]',
}

const resolvedType = computed<ButtonType>(() => {
  if (props.default) return 'default'
  if (props.light) return 'light'
  if (props.danger) return 'danger'
  if (props.warning) return 'warning'
  if (props.success) return 'success'
  if (props.primary) return 'primary'
  return props.type ?? 'primary'
})

const isDisabled = computed(() => props.loading || props.disabled)

const buttonClasses = computed(() => {
  const opacity = isDisabled.value ? 'opacity-80' : ''
  const cursor = isDisabled.value ? 'cursor-not-allowed' : 'cursor-pointer'
  return `${baseClasses} ${sizeClasses[props.size]} ${variantClasses[resolvedType.value]} ${opacity} ${cursor} ${props.className ?? ''}`
})

const slots = useSlots()

const prefixPaddingBySize: Record<ButtonSize, string> = {
  xs: 'pl-2',
  sm: 'pl-2',
  md: 'pl-3',
  lg: 'pl-4',
  xl: 'pl-6',
}

const suffixPaddingBySize: Record<ButtonSize, string> = {
  xs: 'pr-2',
  sm: 'pr-2',
  md: 'pr-3',
  lg: 'pr-4',
  xl: 'pr-6',
}

const slotPaddingClasses = computed(() => {
  const left = slots.prefix || props.loading ? prefixPaddingBySize[props.size] : ''
  const right = slots.suffix ? suffixPaddingBySize[props.size] : ''
  return `${left} ${right}`.trim()
})

const spinnerSizeByButtonSize: Record<ButtonSize, string> = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-7 h-7',
}

const spinnerVariant = computed(() => {
  const type = resolvedType.value
  // Dark spinner for light backgrounds, light spinner for dark backgrounds
  if (type === 'primary' || type === 'success' || type === 'danger' || type === 'warning') {
    return 'dark'
  }
  return 'light'
})

const isPrimaryButton = computed(() => resolvedType.value === 'primary')

const showPrefixIcon = computed(() => slots.prefix && !props.loading)
const showSuffixIcon = computed(() => slots.suffix && !props.loading)
const showSpinner = computed(() => {
  if (!props.loading) return false
  // Show spinner in prefix position if prefix exists, or suffix position if only suffix exists
  // Otherwise show spinner to the left of label
  return true
})

const spinnerPosition = computed(() => {
  if (slots.prefix) return 'prefix'
  if (slots.suffix) return 'suffix'
  return 'default'
})

const displayLabel = computed(() => {
  if (props.loading && props.labelLoading) {
    return props.labelLoading
  }
  return props.label
})
</script>

<template>
  <button
    type="button"
    :class="[buttonClasses, slotPaddingClasses]"
    :disabled="isDisabled"
    @click="props.onClick?.($event)"
  >
    <span v-if="showSpinner && spinnerPosition === 'prefix'" class="mr-2 inline-flex items-center">
      <Spinner
        v-if="!isPrimaryButton"
        :variant="spinnerVariant"
        :class="spinnerSizeByButtonSize[props.size]"
      />
      <template v-else>
        <Spinner variant="dark" :class="[spinnerSizeByButtonSize[props.size], 'dark:hidden']" />
        <Spinner invert :class="[spinnerSizeByButtonSize[props.size], 'hidden dark:inline-flex']" />
      </template>
    </span>
    <span v-else-if="showPrefixIcon" class="mr-2 inline-flex items-center">
      <slot name="prefix" />
    </span>

    <span v-if="showSpinner && spinnerPosition === 'default'" class="mr-2 inline-flex items-center">
      <Spinner
        v-if="!isPrimaryButton"
        :variant="spinnerVariant"
        :class="spinnerSizeByButtonSize[props.size]"
      />
      <template v-else>
        <Spinner variant="dark" :class="[spinnerSizeByButtonSize[props.size], 'dark:hidden']" />
        <Spinner invert :class="[spinnerSizeByButtonSize[props.size], 'hidden dark:inline-flex']" />
      </template>
    </span>

    <span>{{ displayLabel }}</span>

    <span v-if="showSpinner && spinnerPosition === 'suffix'" class="ml-2 inline-flex items-center">
      <Spinner
        v-if="!isPrimaryButton"
        :variant="spinnerVariant"
        :class="spinnerSizeByButtonSize[props.size]"
      />
      <template v-else>
        <Spinner variant="dark" :class="[spinnerSizeByButtonSize[props.size], 'dark:hidden']" />
        <Spinner invert :class="[spinnerSizeByButtonSize[props.size], 'hidden dark:inline-flex']" />
      </template>
    </span>
    <span v-else-if="showSuffixIcon" class="ml-2 inline-flex items-center">
      <slot name="suffix" />
    </span>
  </button>
</template>
