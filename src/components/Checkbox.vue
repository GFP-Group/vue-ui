<script setup lang="ts">
import { computed } from 'vue'
import { Fa6Check } from 'vue-icons-plus/fa6'

const props = withDefaults(
  defineProps<{
    label?: string
    modelValue?: any 
    checked?: boolean
    id?: string
    name?: string
    disabled?: boolean
    className?: string
    value?: any
    trueValue?: any
    falseValue?: any
    onChange?: (checked: boolean, ev: Event) => void
  }>(),
  {
    label: 'Checkbox',
    modelValue: undefined,
    checked: undefined,
    disabled: false,
    value: true, 
    trueValue: true,
    falseValue: false,
  }
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
  (e: 'update:checked', value: boolean): void
  (e: 'change', value: any, ev: Event): void
}>()

const generatedId = `cb_${Math.random().toString(36).slice(2, 9)}`
const inputId = computed(() => props.id || generatedId)

const isControlled = computed(() => props.modelValue !== undefined || props.checked !== undefined)

const isChecked = computed<boolean>({
  get() {
    if (Array.isArray(props.modelValue)) {
      return props.modelValue.includes(props.value)
    }
    if (props.modelValue !== undefined) {
      return props.modelValue === props.trueValue
    }
    
    if (props.checked !== undefined) return !!props.checked
    return false
  },
  set(val: boolean) {
    let newValue: any;

    if (Array.isArray(props.modelValue)) {
      const index = props.modelValue.indexOf(props.value);
      if (val) {
        if (index === -1) {
          newValue = [...props.modelValue, props.value];
        } else {
          newValue = props.modelValue;
        }
      } else {
        if (index > -1) {
          newValue = [...props.modelValue.slice(0, index), ...props.modelValue.slice(index + 1)];
        } else {
          newValue = props.modelValue;
        }
      }
    } else {
      newValue = val ? props.trueValue : props.falseValue;
    }

    emit('update:modelValue', newValue)
    emit('update:checked', val)
  },
})

const handleChange = (ev: Event) => {
  const target = ev.target as HTMLInputElement
  const val = target.checked

  isChecked.value = val 
  
  emit('change', isChecked.value, ev) 
  props.onChange?.(isChecked.value, ev)
}
</script>

<template>
  <label
    :for="inputId"
    class="flex items-center cursor-pointer select-none text-dark dark:text-white group"
    :class="props.className"
  >
    <div class="relative">
      <input
        :id="inputId"
        type="checkbox"
        class="sr-only"
        :name="props.name"
        :checked="isChecked"
        :disabled="props.disabled"
        :value="props.value"
        :true-value="props.trueValue"
        :false-value="props.falseValue"
        @change="handleChange"
      />
      <div
        class="flex items-center justify-center w-5 h-5 mr-3 border rounded-[5px] transition dark:border-gray-500"
        :class="[
          props.disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer',
          isChecked
            ? 'bg-black border-black text-white dark:bg-white dark:border-white dark:text-black'
            : 'bg-transparent border-gray-7 dark:border-dark-3',
        ]"
      >
        <span class="opacity-0 group-has-checked:opacity-100 transition-opacity">
          <Fa6Check size="12" />
        </span>
      </div>
    </div>
    <span class="text-[13px]">{{ props.label }}</span>
  </label>
</template>