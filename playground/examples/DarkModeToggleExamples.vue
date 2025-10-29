<script setup lang="ts">
import Card from '../../src/components/Card.vue'
import Text from '../../src/components/Text.vue'
import DarkModeToggle from '../../src/components/DarkModeToggle.vue'
import Badge from '../../src/components/Badge.vue'
</script>

<template>
  <Card title="Dark Mode Toggle" dark-darker title-type="h1">
    <section class="mb-8">
      <Text h4 class="mb-4">Default</Text>
      <Text p class="mb-4">Icon only, no label displayed.</Text>
      <DarkModeToggle />
    </section>

    <section class="mb-8">
      <Text h4 class="mb-4">With Label</Text>
      <Text p class="mb-4"
        >Icon with "Dark mode" label using the
        <Badge color="zinc" class="font-mono">show-label</Badge> prop.</Text
      >
      <DarkModeToggle show-label />
    </section>
  </Card>
</template>
