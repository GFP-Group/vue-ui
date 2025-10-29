<script setup lang="ts">
import { withDefaults } from 'vue'

withDefaults(
  defineProps<{
    size?: number
  }>(),
  {
    size: 24,
  }
)
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="matrix(7.10071,0,0,7.10071,-4.92479,12.9765)">
      <circle cx="36.747" cy="17.707" r="17.039" style="fill: rgb(255, 79, 138)" />
      <circle cx="55.708" cy="50.744" r="17.039" style="fill: rgb(93, 241, 255)" />
      <circle cx="17.785" cy="50.744" r="17.039" style="fill: rgb(122, 245, 124)" />
    </g>
  </svg>
</template>
