<script setup lang="ts">
import { provide } from 'vue'

// Provide context to child TableRow components to disable hover
provide('isTableHead', true)
</script>

<template>
  <thead class="top-0 z-10">
    <slot />
  </thead>
</template>
